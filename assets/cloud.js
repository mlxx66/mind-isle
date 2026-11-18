/* Mind Isle Cloud - Supabase REST adapter (no external SDK) */
(function () {
  'use strict';

  var URL_BASE = 'https://imkzvylogdiaqprnxurx.supabase.co';
  var ANON_KEY = 'sb_publishable_3FUG7wjLpqgHROGEiyDngQ_QBgJl9V4';
  var TOKEN_KEY = 'mindisle_sb_session_v1';
  var STATE_ID = 1;

  function readSession() {
    try { return JSON.parse(localStorage.getItem(TOKEN_KEY) || 'null'); }
    catch (e) { return null; }
  }
  function writeSession(s) {
    if (s) localStorage.setItem(TOKEN_KEY, JSON.stringify(s));
    else localStorage.removeItem(TOKEN_KEY);
  }
  function isSignedIn() { return !!(readSession() && readSession().access_token); }
  function authHeader() {
    var s = readSession();
    return s && s.access_token ? 'Bearer ' + s.access_token : '';
  }

  function request(path, options) {
    options = options || {};
    var headers = { 'apikey': ANON_KEY, 'Content-Type': 'application/json' };
    if (options.auth !== false && authHeader()) headers['Authorization'] = authHeader();
    Object.keys(options.headers || {}).forEach(function (k) { headers[k] = options.headers[k]; });
    return fetch(URL_BASE + path, {
      method: options.method || 'GET',
      headers: headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    }).then(function (res) {
      return res.text().then(function (text) {
        var data = null;
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
        if (!res.ok) {
          var msg = (data && (data.msg || data.message || data.error_description)) || ('HTTP ' + res.status);
          var err = new Error(msg);
          err.status = res.status;
          throw err;
        }
        return data;
      });
    });
  }

  function refreshToken() {
    var s = readSession();
    if (!s || !s.refresh_token) return Promise.reject(new Error('No refresh token'));
    return request('/auth/v1/token?grant_type=refresh_token', {
      method: 'POST', auth: false, body: { refresh_token: s.refresh_token }
    }).then(function (r) {
      var next = {
        access_token: r.access_token,
        refresh_token: r.refresh_token || s.refresh_token,
        user: r.user || s.user,
        expires_at: Date.now() + Number(r.expires_in || 3600) * 1000
      };
      writeSession(next);
      return next;
    });
  }

  function withAuth(fn) {
    return Promise.resolve().then(function () {
      var s = readSession();
      if (!s || !s.access_token) throw new Error('NOT_AUTHENTICATED');
      if (s.expires_at && Date.now() > s.expires_at - 60000) return refreshToken();
      return s;
    }).then(fn).catch(function (err) {
      if (err.status === 401 || err.message === 'NOT_AUTHENTICATED') throw err;
      throw err;
    });
  }

  function signIn(email, password) {
    return request('/auth/v1/token?grant_type=password', {
      method: 'POST', auth: false, body: { email: email, password: password }
    }).then(function (r) {
      var s = {
        access_token: r.access_token,
        refresh_token: r.refresh_token,
        user: r.user || { email: email },
        expires_at: Date.now() + Number(r.expires_in || 3600) * 1000
      };
      writeSession(s);
      return s;
    });
  }

  function signOut() {
    return request('/auth/v1/logout', { method: 'POST' })
      .catch(function () {})
      .then(function () { writeSession(null); });
  }

  function pullState() {
    return withAuth(function () {
      return request('/rest/v1/app_state?id=eq.' + STATE_ID + '&select=payload,updated_at', { method: 'GET' });
    }).then(function (rows) {
      if (!rows || !rows.length) return null;
      return rows[0].payload || null;
    }).catch(function (err) {
      if (err.status === 401) { writeSession(null); }
      throw err;
    });
  }

  function pushState(payload) {
    return withAuth(function () {
      return request('/rest/v1/app_state', {
        method: 'POST',
        headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        body: [{ id: STATE_ID, payload: payload, updated_at: new Date().toISOString() }]
      });
    });
  }

  function pullStateAnon() {
    return request('/rest/v1/app_state?id=eq.' + STATE_ID + '&select=payload', {
      method: 'GET', auth: false
    }).then(function (rows) {
      if (!rows || !rows.length) return null;
      return rows[0].payload || null;
    }).catch(function () { return null; });
  }

  window.MindIsleCloud = {
    isSignedIn: isSignedIn,
    getSession: readSession,
    signIn: signIn,
    signOut: signOut,
    pullState: pullState,
    pushState: pushState,
    pullStateAnon: pullStateAnon,
    status: function () { return { url: URL_BASE, configured: true }; },
    ready: true
  };
})();

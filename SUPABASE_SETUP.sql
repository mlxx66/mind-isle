-- ============================================================
-- Mind Isle Cloud 建表脚本
-- 用法：每段用 --- 分隔线隔开，每次只复制一段到 SQL Editor，点 Run。
-- 不是一行一行贴，是「一段（一条完整语句）」一次 Run。
-- 共 4 段。全部跑完后，再去 Authentication 里建管理员账号。
-- 若某段报 "already exists"，说明已经建过，跳过即可。
-- ============================================================

--- 第 1 段：建表 ---
create table if not exists app_state (
  id int primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

--- 第 2 段：开启行级安全 ---
alter table app_state enable row level security;

--- 第 3 段：登录用户可读写 ---
create policy "auth_full_access" on app_state
  for all to authenticated using (true) with check (true);

--- 第 4 段：未登录用户只读（分享链接需要）---
create policy "anon_read_only" on app_state
  for select to anon using (true);

-- ============================================================
-- 4 段跑完后：创建管理员账号（用界面，不用 SQL）
-- 左侧 Authentication → Users → Add user
--   邮箱：mlxx4235@cc.com
--   密码：ysyqdzgnr666
--   勾选 Auto Confirm User（必须勾，否则无法登录）
--   点 Create user
-- 完成。
-- ============================================================

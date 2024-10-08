import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard

//Administration
import WorkspaceMembers from "../pages/WorkspaceMembers/index";
import InviteMembers from "../pages/WorkspaceMembers/InviteMembers/index";

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

//APi Key
import Mapping from "../pages/Mapping";
import Chat from "../pages/Chat";
import Campaigns from "../pages/Campaigns";
import Run from "../pages/Run";
import Design from "../pages/Design";
import Report from "../pages/Report";
import Gateways from "../pages/Gateways";

//Landing Page
import JobsLanding from "../pages/Job_Landing";

const authProtectedRoutes = [
  // { path: "/users", component: <Users /> },
  // { path: "/home", component: <Chat /> },
  { path: "/apps-chat", component: <Chat /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/apps-chat" />,
  },
  { path: "*", component: <Navigate to="/apps-chat" /> },
  { path: "/roles", component: <Mapping /> },
  { path: "/campaigns", component: <Campaigns /> },
  { path: "/run", component: <Run /> },
  { path: "/design", component: <Design /> },
  { path: "/report", component: <Report /> },
  { path: "/gateways", component: <Gateways /> },
  { path: "/invite-members", component: <InviteMembers /> },
  { path: "/workspace-members", component: <WorkspaceMembers /> },
  // { path: "/calendar", component: <Calendar /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  // {
  //   path: "/",
  //   exact: true,
  //   component: <Navigate to="/apps" />,
  // },
  // { path: "*", component: <Navigate to="/home" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/jobs-landing", component: <JobsLanding /> },
];

export { authProtectedRoutes, publicRoutes };

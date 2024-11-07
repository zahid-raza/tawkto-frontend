import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard

//Administration
import WorkspaceMembers from "../pages/WorkspaceMembers/index";
import InviteMembers from "../pages/WorkspaceMembers/InviteMembers/index";
import Departments from "../pages/Departments/index";
import AddDepartment from "../pages/Departments/AddDepartments/index";
import Overview from "../pages/Overview/index";
import ConnectWebsite from "../pages/ConnectWebsite/index";
import LiveUsers from "../pages/Customers/LiveUSers";

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Wizard from "../pages/Authentication/Wizard";
import Register from "../pages/Authentication/Register";
import RegistrationModal from "../pages/Authentication/Register/RegistrationModal";

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
import Landing from "../pages/Landing";
import WidgetPage from "../pages/WidgetPage";
import Unassigned from "../pages/Unassigned";
import MyOpen from "../pages/MyOpen";
import Solved from "../pages/Solved";
import General from "../pages/Settings/General/index";
import ChangePassword from "../pages/Settings/ChangePassword/index";
import Security from "../pages/Settings/Security/index";
import SetPassword from "../pages/SetPassword";

const authProtectedRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  },
  { path: "*", component: <Navigate to="/" /> },
  { path: "/roles", component: <Mapping /> },
  { path: "/campaigns", component: <Campaigns /> },
  { path: "/run", component: <Run /> },
  { path: "/design", component: <Design /> },
  { path: "/report", component: <Report /> },
  { path: "/gateways", component: <Gateways /> },
  { path: "/invite-members", component: <InviteMembers /> },
  { path: "/workspace-members", component: <WorkspaceMembers /> },
  { path: "/departments", component: <Departments /> },
  { path: "/overview", component: <Overview /> },
  { path: "/add-department", component: <AddDepartment /> },
  { path: "/connect-website", component: <ConnectWebsite /> },
  { path: "/registration-modal", component: <RegistrationModal /> },
  { path: "/widget-page", component: <WidgetPage /> },
  { path: "/chat", component: <Chat /> },
  { path: "/unassigned", component: <Unassigned /> },
  { path: "/my-open", component: <MyOpen /> },
  { path: "/solved", component: <Solved /> },
  { path: "/general", component: <General /> },
  { path: "/change-password", component: <ChangePassword /> },
  { path: "/security", component: <Security /> },
  { path: "/live-users", component: <LiveUsers /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/wizard", component: <Wizard /> },
  { path: "/register", component: <Register /> },
  { path: "/", component: <Landing /> },
  { path: "/set-password/token/:token", component: <SetPassword /> },
];

export { authProtectedRoutes, publicRoutes };

import getRoutesList from "./pages/routesList/routesList";
import getError500 from "./pages/error500/error500";
import getError404 from "./pages/error404/error404";
import getLogIn from "./pages/login/login";
import getRegister from "./pages/register/register";
import getProfile from "./pages/profile/profile";
import getChangePassword from "./pages/changePassword/changePassword";

import { ERROR_404, ERROR_500, ROUTES_LIST, LOGIN, REGISTER, PROFILE, CHANGE_PASSWORD } from './const/routes';

import "./global.scss";

const routes = {
    [ROUTES_LIST]: getRoutesList,
    [ERROR_500]: getError500,
    [ERROR_404]: getError404,
    [LOGIN]: getLogIn,
    [REGISTER]: getRegister,
    [PROFILE]: getProfile,
    [CHANGE_PASSWORD]: getChangePassword,
}

const app = document.getElementById("app");
app.innerHTML = routes[window.location.pathname]?.();

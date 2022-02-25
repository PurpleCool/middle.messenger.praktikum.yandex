import getRoutesList from "./pages/routesList/routesList";
import getError500 from "./pages/error500/error500";

import { ERROR_500, ROUTES_LIST } from './const/routes';

import "./global.scss";

const routes = {
    [ROUTES_LIST]: getRoutesList,
    [ERROR_500]: getError500,
}

const app = document.getElementById("app");
app.innerHTML = routes[window.location.pathname]?.() || getRoutesList();

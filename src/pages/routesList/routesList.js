import Handlebars from 'handlebars';
import template from './routesList.tmpl';
import './routesList.scss';
import '../../partials/floatingContainer'
import { ERROR_404, ERROR_500, LOGIN, REGISTER, PROFILE } from '../../const/routes';

export default () => {
    let compiled = Handlebars.compile(template);

    const links = [
        {
            href: ERROR_500,
            title: "500",
        },
        {
            href: ERROR_404,
            title: "404",
        },
        {
            href: LOGIN,
            title: "Вход (Log in)",
        },
        {
            href: REGISTER,
            title: "Регистрация",
        },
        {
            href: PROFILE,
            title: "Профиль",
        },
      ];

    let html = compiled(links);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html });

    return htmlContainer;
};
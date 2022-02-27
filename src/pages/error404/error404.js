import Handlebars from 'handlebars';
import template from './error404.tmpl';
import './error404.scss';
import '../../partials/floatingContainer'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '404',
        title: "Страница не найдена",
        catLink: 'https://http.cat/404',
        goBackLink: "Назад к чатам",
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
import Handlebars from 'handlebars';
import template from './error500.tmpl';
import './error500.scss';
import '../../partials/floatingContainer'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '500',
        title: "Ошибка сервера",
        catLink: 'https://http.cat/500',
        goBackLink: "Назад к чатам",
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
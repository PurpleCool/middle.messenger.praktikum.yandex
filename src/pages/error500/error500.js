import Handlebars from 'handlebars';
import template from './error500.tmpl';
import './error500.scss';
import '../../partials/floatingContainer'

document.addEventListener('DOMContentLoaded', () => {
    let compiledError500 = Handlebars.compile(template);

    let data = {
        status: '500',
        title: "Ошибка сервера",
        catLink: 'https://http.cat/500',
        goBackLink: "Назад к чатам",
    };

    let htmlError500 = compiledError500(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlError500 })

    document.getElementById('app').innerHTML = htmlContainer;
});
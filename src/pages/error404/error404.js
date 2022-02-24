import Handlebars from 'handlebars';
import template from './error404.tmpl';
import './error404.scss';
import '../../partials/floatingContainer'

document.addEventListener('DOMContentLoaded', () => {
    let compiledError404 = Handlebars.compile(template);

    let data = {
        status: '404',
        title: "Ошибка сервера",
        catLink: 'https://http.cat/404',
        goBackLink: "Назад к чатам",
    };

    let htmlError404 = compiledError404(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlError404 })

    document.getElementById('app').innerHTML = htmlContainer;
});
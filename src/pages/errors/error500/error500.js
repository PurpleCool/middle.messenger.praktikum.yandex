import Handlebars from 'handlebars';
import template from './error500.tmpl';
import '../../../partials/button';
import '../../../helpers/button';
import './error500.scss';
import '../../../global.scss';

document.addEventListener('DOMContentLoaded', () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '500',
        title: "Ошибка сервера",
        catLink: 'https://http.cat/500',
        goBackLink: "Назад к чатам",
        // buttonText: 'oolala'
    };

    let html = compiled(data);
    document.getElementById('app').innerHTML = html;
});
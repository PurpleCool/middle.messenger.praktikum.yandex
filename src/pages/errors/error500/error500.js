import Handlebars from 'handlebars'
import template from './index.tmpl'

document.addEventListener('DOMContentLoaded', () => {
    let compiled = Handlebars.compile(template);

    let data = {
        status: '500',
        title: "Кто-то что-то нажал, а мы чиним",
        goBackLink: "Назад к чатам"
    };

    let html = compiled(data);
    document.getElementById('app').innerHTML = html;
});
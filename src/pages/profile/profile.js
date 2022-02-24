import Handlebars from 'handlebars';
import template from './profile.tmpl';
import '../../partials/button';
import './profile.scss';
import '../../partials/floatingContainer'

document.addEventListener('DOMContentLoaded', () => {
    let compiledLogin = Handlebars.compile(template);

    let data = {
        buttonText: 'Сохранить',
        imageSrc: '../../../static/avatar.svg',
    };

    let htmlLogin = compiledLogin(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlLogin })

    document.getElementById('app').innerHTML = htmlContainer;
});
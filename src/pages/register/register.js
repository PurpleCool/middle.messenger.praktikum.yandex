import Handlebars from 'handlebars';
import template from './register.tmpl';
import '../../partials/button';
import '../../partials/buttonSecondary';
import './register.scss';
import '../../partials/floatingContainer'

document.addEventListener('DOMContentLoaded', () => {
    let compiledLogin = Handlebars.compile(template);

    let data = {
        title: "Регистрация",
        buttonText: 'Зарегистрироваться',
        buttonSecondaryText: 'Войти',
    };

    let htmlLogin = compiledLogin(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlLogin })

    document.getElementById('app').innerHTML = htmlContainer;
});
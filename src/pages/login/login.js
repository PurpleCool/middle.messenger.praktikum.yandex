import Handlebars from 'handlebars';
import template from './login.tmpl';
import '../../partials/button';
import '../../partials/buttonSecondary';
import './login.scss';
import '../../partials/floatingContainer'

export default () => {
    let compiledLogin = Handlebars.compile(template);

    let data = {
        title: "Вход",
        buttonText: 'Авторизоваться',
        buttonSecondaryText: 'Нет аккаунта?',
    };

    let htmlLogin = compiledLogin(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlLogin })

    return htmlContainer;
    // document.getElementById('app').innerHTML = htmlContainer;
};
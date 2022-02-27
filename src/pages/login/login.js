import Handlebars from 'handlebars';
import template from './login.tmpl';
import '../../partials/button';
import '../../partials/buttonSecondary';
import './login.scss';
import '../../partials/floatingContainer'

export default () => {
    let commpiled = Handlebars.compile(template);

    let data = {
        title: "Вход",
        buttonText: 'Войти',
        buttonSecondaryText: 'Нет аккаунта?',
    };

    let html = commpiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
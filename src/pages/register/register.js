import Handlebars from 'handlebars';
import template from './register.tmpl';
import '../../partials/button';
import '../../partials/buttonSecondary';
import './register.scss';
import '../../partials/floatingContainer'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        title: "Регистрация",
        buttonText: 'Зарегистрироваться',
        buttonSecondaryText: 'Войти',
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
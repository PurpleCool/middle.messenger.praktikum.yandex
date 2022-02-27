import Handlebars from 'handlebars';
import template from './changePassword.tmpl';
import '../../partials/button';
import './changePassword.scss';
import '../../partials/floatingContainer';
import avatar from '../../../static/avatar.svg';

export default () => {
    let compiledLogin = Handlebars.compile(template);

    let data = {
        buttonText: 'Сохранить',
        imageSrc: avatar,
    };

    let htmlLogin = compiledLogin(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');

    let htmlContainer = compiledFloatingContainer({ floatingContainer: htmlLogin })
    return htmlContainer;
};
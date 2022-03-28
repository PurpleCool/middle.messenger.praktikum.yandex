import Handlebars from 'handlebars';
import template from './changePassword.tmpl';
import '../../partials/button';
import './changePassword.scss';
import '../../partials/floatingContainer';
import avatar from '../../../static/avatar.svg';


export default () => {
    const compiledChangePassword = Handlebars.compile(template);
    const data = {
        buttonText: 'Сохранить',
        imageSrc: avatar,
    };
    
    const htmlChangePassword = compiledChangePassword(data);
    const compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    const htmlContainer = compiledFloatingContainer({ floatingContainer: htmlChangePassword })
    return htmlContainer;
};
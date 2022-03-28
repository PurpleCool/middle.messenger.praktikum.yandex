import Handlebars from 'handlebars';
import template from './profile.tmpl';
import '../../partials/button';
import './profile.scss';
import '../../partials/floatingContainer';
import avatar from '../../../static/avatar.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        buttonText: 'Сохранить',
        imageSrc: avatar,
    };

    let html = compiled(data);

    let compiledFloatingContainer = Handlebars.compile('{{> floatingContainer }}');
    let htmlContainer = compiledFloatingContainer({ floatingContainer: html })
    return htmlContainer;
};
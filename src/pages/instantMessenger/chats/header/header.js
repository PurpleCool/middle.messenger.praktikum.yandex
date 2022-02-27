import Handlebars from 'handlebars';
import template from './header.templ';
import './header.scss';
import burger from '../../../../../static/burger.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        menuIcon: burger,
    };
   

    let html = compiled(data);
    return html;
};
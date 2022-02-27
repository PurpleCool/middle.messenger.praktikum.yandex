import Handlebars from 'handlebars';
import template from './messages.tmpl';
import './messages.scss';

export default () => {
    let compiled = Handlebars.compile(template);
   
    let data = {

    };


    let html = compiled(data);
    return html;
};
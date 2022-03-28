import Handlebars from 'handlebars';
import template from './messages.tmpl';
import './messages.scss';
import getHeader from './header/header';
import getFooter from './footer/footer';

export default () => {
    let compiled = Handlebars.compile(template);
   
    let data = {
        header: getHeader(),
        footer: getFooter(),
        messages: [
            {
                author: "Андрей",
                text: "О-ля-ля, какие люди",
            },
            {
                author: null,
                text: "Привет!",
            },
            {
                author: "Андрей",
                text: "Привет!",
            },
        ]
    };


    let html = compiled(data);
    return html;
};
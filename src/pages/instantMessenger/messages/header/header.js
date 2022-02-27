import Handlebars from 'handlebars';
import template from './header.templ';
import './header.scss';
import messageMenuIcon from '../../../../../static/message-menu-icon.svg';
import avatar from '../../../../../static/avatar.svg';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        avatar: avatar,
        nickname: 'Андрей',
        status: 'Онлайн',
        menuIcon: messageMenuIcon,
    };
   

    let html = compiled(data);
    return html;
};
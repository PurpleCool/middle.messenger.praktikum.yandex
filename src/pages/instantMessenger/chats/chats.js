import Handlebars from 'handlebars';
import template from './chats.templ';
import './chats.scss';
import avatar from '../../../../static/avatar.svg';
import getHeader from './header/header';

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
        header: getHeader(),
        chats: [
            {
                chatName: 'Андрей',
                message: {
                    author: 'Андрей',
                    text: 'Привет!'
                },
                avatar: avatar,
                unreadMessages: 1,
            },
            {
                chatName: 'Киноклуб',
                message: {
                    author: 'Вы',
                    text: 'Можно или сегодня или завтра вечером.'
                },
                avatar: avatar,
                unreadMessages: null,
            },
        ]
    };
   

    let html = compiled(data);
    return html;
};
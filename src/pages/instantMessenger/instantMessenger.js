import Handlebars from 'handlebars';
import template from './instantMessenger.tmpl';
import './instantMessenger.scss';
import getChats from "./chats/chats";
import getMessages from "./messages/messages";

export default () => {
    let compiled = Handlebars.compile(template);
   
    let data = {
        chats: getChats(),
        messages: getMessages(),
    };

    let html = compiled(data);
    return html;
};
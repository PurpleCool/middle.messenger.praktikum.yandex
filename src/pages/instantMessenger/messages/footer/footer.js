import Handlebars from 'handlebars';
import template from './footer.templ';
import './footer.scss';
import paperClip from '../../../../../static/paper-clip.svg'
import sendMessage from '../../../../../static/send-message.svg'

export default () => {
    let compiled = Handlebars.compile(template);

    let data = {
       attachFiles: paperClip,
       sendMessage: sendMessage
    };
   

    let html = compiled(data);
    return html;
};
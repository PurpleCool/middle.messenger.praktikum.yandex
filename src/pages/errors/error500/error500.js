import Handlebars from 'handlebars'

(function() {
    let data = {
        status: '500',
        title: "Кто-то что-то нажал, а мы чиним",
        goBackLink: "Назад к чатам"
    };

    let template = Handlebars.compile(document.getElementById('template').innerHTML);
    let filled = template(data);
    document.getElementById('app').innerHTML = filled;
})()
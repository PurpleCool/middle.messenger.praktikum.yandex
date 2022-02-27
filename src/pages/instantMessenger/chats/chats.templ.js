export default `
{{{header}}}
<ul class='chats'>
    {{#each chats}}
        <li class='chat'>
            <img class='avatar' src='{{this.avatar}}'/>
            <div class='chat-latest-data'>
                <span>{{this.chatName}}</span>
                <span><b>{{this.message.author}}</b>: {{this.message.text}}</span>
            </div>
        </li>
    {{/each}}
</ul>
`;
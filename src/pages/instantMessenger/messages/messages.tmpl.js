// language=hbs

export default `
<div class="messages-layout">
    {{{header}}}
    <section>
        <ul class='messages'>
            {{#each messages}}
                <li class='message {{#if this.author}}message_outcoming{{else}}message_incoming{{/if}}'>
                    <span>{{this.text}}</span>
                </li>
            {{/each}}
        </ul>
        {{{footer}}}
    </section>
</div>
`;
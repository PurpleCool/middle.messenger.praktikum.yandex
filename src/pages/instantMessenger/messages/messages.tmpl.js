// language=hbs

export default `
<div class="messages-layout">
    {{{header}}}
    <section>
        <ul class='messages'>
            {{#each messages}}
                <li class='message message_{{#if this.author}}outcoming{{else}}incoming{{/if}}'>
                    <span>{{this.text}}</span>
                </li>
            {{/each}}
        </ul>
        {{{footer}}}
    </section>
</div>
`;
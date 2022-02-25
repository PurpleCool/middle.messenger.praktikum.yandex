// language=hbs

export default `
    <ul>
    {{#each this}}
        <li><a href="{{href}}">{{title}}</a></li>
    {{/each}}
    </ul>
`;
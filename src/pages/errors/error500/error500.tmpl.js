// language=hbs

export default `
    <div class='error'>
        <h1 class='error-status'>{{status}}</h1>
        <a class='error-title' href='{{catLink}}'>{{title}}</a>
        <a class='go-back-link' href="#">{{goBackLink}}</a>
        <!-- {{> button }} -->
    </div>
`;
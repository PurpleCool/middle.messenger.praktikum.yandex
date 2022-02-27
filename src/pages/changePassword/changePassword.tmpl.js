// language=hbs

export default `
    <img src='{{{imageSrc}}}'>

    <div class="wrapper__l">
        <label for="old-password">
            Старый пароль
            <input type="password" id="old-password">
        </label>

        <label for="new-password">
            Новый пароль
            <input type="password" id="new-password">
        </label>

        <label for="new-password-confirm">
            Повторите новый пароль
            <input type="password" id="new-password-confirm">
        </label>

        
    </div>
    
    {{> button }}
`;
// language=hbs

export default `
    <img src='{{{imageSrc}}}'>

    <div class="wrapper__l">
        <label for="oldPassword">
            Старый пароль
            <input type="password" id="oldPassword" name="oldPassword">
        </label>

        <label for="newPassword">
            Новый пароль
            <input type="password" id="newPassword" name="newPassword">
        </label>

        <label for="passwordConfirm">
            Повторите новый пароль
            <input type="password" id="passwordConfirm" name="passwordConfirm">
        </label>

        
    </div>
    
    {{> button }}
`;
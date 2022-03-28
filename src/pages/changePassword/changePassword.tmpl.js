// language=hbs

export default `
    <img src="{{{imageSrc}}}" alt="avatar">

    <div class="wrapper__l">
        <label class="label-flex" for="oldPassword">
            Старый пароль
            <input class="input-flex" type="password" id="oldPassword" name="oldPassword">
        </label>

        <label class="label-flex" for="newPassword">
            Новый пароль
            <input class="input-flex" type="password" id="newPassword" name="newPassword">
        </label>

        <label class="label-flex" for="passwordConfirm">
            Повторите новый пароль
            <input class="input-flex" type="password" id="passwordConfirm" name="passwordConfirm">
        </label>

        
    </div>
    
    {{> button }}
`;
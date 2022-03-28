// language=hbs

export default `
    <img src='{{{imageSrc}}}' name="avatar">

    <div class="wrapper__l">
        <label class="label-flex" for="email">
            Почта
            <input class="input-flex" type="email" id="email" value="pochta@yandex.ru" name="email">
        </label>

        <label class="label-flex" for="login">
            Логин
            <input class="input-flex" type="text" id="login" value="ivanivanov" name="login">
        </label>
    
        <label class="label-flex" for="first_name">
            Имя
            <input class="input-flex" type="text" id="first_name" value="Иван" name="first_name">
        </label>

        <label class="label-flex" for="second_name">
            Фамилия
            <input class="input-flex" type="text" id="second_name" value="Иванов" name="second_name">
        </label>

        <label class="label-flex" for="display_name">
            Имя в чате
            <input class="input-flex" type="text" id="display_name" value="Иванушка" name="display_name">
        </label>
        
        <label class="label-flex" for="phone">
            Телефон
            <input class="input-flex" type="tel" id="phone" value="+7 (909) 967 30 30" name="phone">
        </label>
    </div>
    
    {{> button }}
`;
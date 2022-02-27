// language=hbs

export default `
    <img src='{{{imageSrc}}}' name="avatar">

    <div class="wrapper__l">
        <label for="email">
            Почта
            <input type="email" id="email" value="pochta@yandex.ru" name="email">
        </label>

        <label for="login">
            Логин
            <input type="text" id="login" value="ivanivanov" name="login">
        </label>
    
        <label for="first_name">
            Имя
            <input type="text" id="first_name" value="Иван" name="first_name">
        </label>

        <label for="second_name">
            Фамилия
            <input type="text" id="second_name" value="Иванов" name="second_name">
        </label>

        <label for="display_name">
            Имя в чате
            <input type="text" id="display_name" value="Иванушка" name="display_name">
        </label>
        
        <label for="phone">
            Телефон
            <input type="tel" id="phone" value="+7 (909) 967 30 30" name="phone">
        </label>
    </div>
    
    {{> button }}
`;
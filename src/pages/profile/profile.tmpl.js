// language=hbs

export default `
    <img src='{{{imageSrc}}}'>

    <div class="wrapper__l">
        <label for="email">
            Почта
            <input type="email" id="email" value="pochta@yandex.ru">
        </label>

        <label for="login">
            Логин
            <input type="text" id="login" value="ivanivanov">
        </label>
    
        <label for="name">
            Имя
            <input type="text" id="name" value="Иван">
        </label>

        <label for="surname">
            Фамилия
            <input type="text" id="surname" value="Иванов">
        </label>

        <label for="nickname">
            Имя в чате
            <input type="text" id="nickname" value="Иванушка">
        </label>
        
        <label for="phone">
            Телефон
            <input type="tel" id="phone" value="+7 (909) 967 30 30">
        </label>
    </div>
    
    {{> button }}
`;
// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    
    <label for="email">Почта</label>
    <input type="email" id="email" name="email">
 
    <label for="login">Логин</label>
    <input type="text" id="login" name="login">
   
    <label for="first_name">Имя</label>
    <input type="text" id="first_name" name="first_name">

    <label for="second_name">Фамилия</label>
    <input type="text" id="second_name" name="second_name">
    
    <label for="phone">Телефон</label>
    <input type="tel" id="phone" name="phone">
    
    <label for="password">Пароль</label>
    <input type="password" id="password">
    
    <label for="password">Пароль (ещё раз)</label>
    <input type="password" id="password" name="password">
    
    {{> button }}
    {{> buttonSecondary }}
`;
// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    
    <label for="email">Почта</label>
    <input type="email" id="email">
 
    <label for="login">Логин</label>
    <input type="text" id="login">
   
    <label for="name">Имя</label>
    <input type="text" id="name">

    <label for="surname">Фамилия</label>
    <input type="text" id="surname">
    
    <label for="phone">Телефон</label>
    <input type="tel" id="phone">
    
    <label for="password">Пароль</label>
    <input type="password" id="password">
    
    <label for="password">Пароль (ещё раз)</label>
    <input type="password" id="password">
    
    {{> button }}
    {{> buttonSecondary }}
`;
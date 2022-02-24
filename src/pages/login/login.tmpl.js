// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    <label class='login-label' for="login">Логин</label>
    <input class='login-input' type="text" id="login" placeholder='Винни-Пух'>
    <label class='login-label' for="password">Пароль</label>
    <input class='login-input' type="password" id="password">
    {{> button }}
    {{> buttonSecondary }}
`;
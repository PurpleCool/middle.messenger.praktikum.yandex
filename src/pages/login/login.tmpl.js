// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    <label class='label-flex login-label' for="login">Логин</label>
    <input class='input-flex login-input' type="text" id="login" placeholder='Винни-Пух'>
    <label class='label-flex login-label' for="password">Пароль</label>
    <input class='input-flex login-input' type="password" id="password">
    {{> button }}
    {{> buttonSecondary }}
`;
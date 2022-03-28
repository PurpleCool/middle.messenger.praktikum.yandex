// language=hbs

export default `
    <h1 class='login-title'>{{title}}</h1>
    
    <label class="label-flex" for="email">Почта</label>
    <input class="input-flex" type="email" id="email" name="email">
 
    <label class="label-flex" for="login">Логин</label>
    <input class="input-flex" type="text" id="login" name="login">
   
    <label class="label-flex" for="first_name">Имя</label>
    <input class="input-flex" type="text" id="first_name" name="first_name">

    <label class="label-flex" for="second_name">Фамилия</label>
    <input class="input-flex" type="text" id="second_name" name="second_name">
    
    <label class="label-flex" for="phone">Телефон</label>
    <input class="input-flex" type="tel" id="phone" name="phone">
    
    <label class="label-flex" for="password">Пароль</label>
    <input class="input-flex" type="password" id="password" name="password">
    
    <label class="label-flex" for="passwordConfirm">Пароль (ещё раз)</label>
    <input class="input-flex" type="password" id="passwordConfirm" name="passwordConfirm">
    
    {{> button }}
    {{> buttonSecondary }}
`;
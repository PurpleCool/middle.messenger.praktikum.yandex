export default `
<header class="messages-header">
    <div class='messages-header__person'>
        <img src="{{avatar}}" class="messages-header__person-avatar">
        <div class="messages-header__person-info">
            <span class="messages-header__person-nickname">{{nickname}}</span>
            <span class="messages-header__person-status">{{status}}</span>
        </div>
    </div>
    <button class="messages-header__menu">
        <img src="{{menuIcon}}" class="messages-header__menu-icon">
    </button>
</header>
`;
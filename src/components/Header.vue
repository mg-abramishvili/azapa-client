<template>
    <header>
        <div class="header-top">
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <router-link :to="{name: 'Home'}">Главная</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'Catalog'}">Каталог</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'Delivery'}">Доставка и оплата</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'About'}">О компании</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'Contacts'}">Контакты</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col header-bottom-logo">
                        <a href="/">
                            <img src="@/assets/logo__new.png" alt="">
                        </a>
                    </div>
                    <div class="col header-bottom-search">
                        <input type="text" class="form-control" placeholder="Поиск товара">
                    </div>
                    <div class="col header-bottom-tel">
                        <a href="#">+7 347 123-45-67</a>
                        <span>г. Москва, ул. Лесная, 22</span>
                    </div>
                    <div class="col header-bottom-cart">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            Корзина
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

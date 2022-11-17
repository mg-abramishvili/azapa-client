<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col footer-logo">
                        <a href="/">
                            <img src="@/assets/logo__new.png" alt="">
                        </a>
                        <p>+7 347 123-45-67</p>
                        <p class="mb-0">г. Москва, ул. Лесная, 33</p>
                    </div>
                    <div class="col footer-info">
                        <p>Информация</p>
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
                    </div>
                    <div class="col footer-catalog">
                        <p>Каталог</p>
                        <ul>
                            <li>
                                <a href="#">Без категории</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                © 2022, Azapa. Все права защищены.
            </div>
        </div>
    </footer>
</template>

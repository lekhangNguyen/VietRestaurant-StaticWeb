document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartItemsContainer = document.querySelector('.cart-items-container');
    let searchBtn = document.querySelector('#search-btn');
    let cartBtn = document.querySelector('#cart-btn');
    let menuBtn = document.querySelector('#menu-btn'); 

    if (navbar && searchForm && cartItemsContainer && searchBtn && cartBtn && menuBtn) {
        searchBtn.onclick = () => {
            searchForm.classList.toggle('active');
            navbar.classList.remove('active');
            cartItemsContainer.classList.remove('active');
        }

        cartBtn.onclick = () => {
            cartItemsContainer.classList.toggle('active');
            navbar.classList.remove('active');
            searchForm.classList.remove('active');
        }

        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            searchForm.classList.remove('active');
            cartItemsContainer.classList.remove('active');
        }

        window.onscroll = () => {
            navbar.classList.remove('active');
            searchForm.classList.remove('active');
            cartItemsContainer.classList.remove('active');
        }
    }
});
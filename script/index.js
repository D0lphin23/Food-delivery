const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        
        if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray =[
        {
            id: 1,
            name: 'Пицца Плюс',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-plus.jpg'
        },
        {
            id: 2,
            name: 'Тануки',
            time: '45 мин',
            rating: 4.6,
            price: 850,
            type: 'Суши',
            image: 'tanuki.jpg'
        },
        {
            id: 3,
            name: 'FoodBand',
            time: '55 мин',
            rating: 4.2,
            price: 950,
            type: 'Пицца',
            image: 'food-band.jpg'
        },
        {
            id: 4,
            name: 'Жадина-пицца',
            time: '50 мин',
            rating: 4.5,
            price: 1000,
            type: 'Пицца',
            image: 'jadina-pizza.jpg'
        },
        {
            id: 5,
            name: 'Точка еды',
            time: '50 мин',
            rating: 4.5,
            price: 900,
            type: 'Суши',
            image: 'dot-food.jpg'
        },
        {
            id: 6,
            name: 'PizzaBurger',
            time: '1 час 15 минут',
            rating: 4.9,
            price: 1500,
            type: 'Пицца',
            image: 'pizza-burger.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';
    }

    const renderRests = (array) => {

        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="goods.html?Id=${card.id}" class="restorants-card">
                    <div class="restorants-card__image">
                        <img src="./images/rests/${card.image}" alt="${card.name}" />
                    </div>
                    <div class="restorants-card__description">
                        <div class="restorants-card__description--row">
                        <h4 class="restorants-card__description--title">
                            ${card.name}
                        </h4>
                        <div class="restorants-card__description--badge">
                            ${card.time}
                        </div>
                        </div>
                        <div class="restorants-card__description--row">
                            <div class="restorants-card__description-info">
                            <div class="restorants-card__description-info--raiting">
                            <img src="./images/icons/star.svg" alt="star" />
                                ${card.rating}
                            </div>
                            <div class="restorants-card__description-info--price">
                                От ${card.price} ₽
                            </div>
                            <div class="restorants-card__description-info--group">
                                ${card.type}
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            `)
        });
    };

    if (container) {
        loading();

        setTimeout(() =>{
            renderRests(restArray);
        },1000);
    }
}

const goodsFunc = () => {
    const container = document.querySelector('#products-container');

    const productsArray =[
        {
            id: 1,
            name: 'Ролл угорь стандарт',
            composition: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'eel-standart.jpg'
        },
        {
            id: 2,
            name: 'Калифорния лосось стандарт',
            composition: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'california-salmon.jpg'
        },
        {
            id: 3,
            name: 'Окинава стандарт',
            composition: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'okinava-standart.jpg'
        },
        {
            id: 4,
            name: 'Цезарь маки хl',
            composition: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'cezar-maki.jpg'
        },
        {
            id: 5,
            name: 'Ясай маки стандарт 185 г',
            composition: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'yasay-maki.jpg'
        },
        {
            id: 6,
            name: 'Ролл с креветкой стандарт',
            composition: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'shrimp-standart.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';
    }

    const renderProducts = (array) => {

        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="restorants-card">
                    <div class="restorants-card__image">
                        <img src="./images/goods/${card.image}" alt="${card.image}" />
                    </div>
                    <div class="restorants-card__description">
                        <div class="restorants-card__description--row">
                        <h5 class="restorants-card__description--name">
                            ${card.name}
                        </h5>
                        </div>
                        <div class="restorants-card__description--row">
                        <p class="restorants-card__description--text">
                            ${card.composition}
                        </p>
                        </div>
                        <div class="restorants-card__description--row">
                        <div class="restorants-card__description-controls">
                            <button class="btn btn-primary">
                            В корзину
                            <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart-white" />
                            </button>

                            <span class="restorants-card__description-controls--price">
                            ${card.price} ₽
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            `)
        });
    };

    if (container) {
        loading();

        setTimeout(() =>{
            renderProducts(productsArray);
        },1000);
    }
}

modalFunc();
restsFunc();
goodsFunc();
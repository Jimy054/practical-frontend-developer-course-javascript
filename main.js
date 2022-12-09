const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".shoppingCartContainer");
const cardsContainer =document.querySelector('.cards-container')
const productDetailContainer =document.querySelector(".product-detail");
const productDetailContainerClose = document.querySelector('.product-detail-close');


navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCar.addEventListener('click', toggleCarAside);
productDetailContainerClose.addEventListener('click',closeProductDetailContainer);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');    
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');    
    productDetailContainer.classList.add('inactive');
}
function toggleCarAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');    
    productDetailContainer.classList.add('inactive');
}

function openProductDetailContainer(){
    productDetailContainer.classList.remove('inactive');
}

 function closeProductDetailContainer(){
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}


const productList =[];

productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Telefono',
    price:1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Compu',
    price:800,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*<div class="cards-container">
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
</div>*/
function renderProducts(arry){
    
    for(product of productList){
        const productCard=document.createElement('div')
        productCard.classList.add('product-card');
        const productImg =document.createElement('img');
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click',openProductDetailContainer);

        const productInfo =document.createElement('div');
        productInfo.classList.add('product-info')

        const productInfoDiv =document.createElement('div');
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName = document.createElement('p');
        productName.innerText=product.name;


        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfofigure = document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfofigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfofigure);

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);
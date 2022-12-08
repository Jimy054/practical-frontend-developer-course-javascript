var navEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var menuHamIcon = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu")
var menuCar = document.querySelector(".navbar-shopping-cart");
var aside = document.querySelector(".product-detail");
const cardsContainer =document.querySelector('.cards-container')

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCar.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');    
    aside.classList.add('inactive');
}
function toggleCarAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
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
for(product of productList){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card');
    const productImg =document.createElement('img');
    productImg.setAttribute('src',product.image)

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

// Quantity controls logic

const removeProduct = document.querySelector('.control-remove');
const addProduct = document.querySelector('.control-add');
const productCount = document.querySelector('.product-count');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.cart-full-total');
const addCart = document.querySelector('.btn-add-to-cart');
const deleteCart = document.querySelector('.cart-btn-delete');

const emptyCart = document.querySelector('.cart-empty');
const fullCart = document.querySelector('.cart-full');

const cartCountMini = document.querySelector('.cart-count-mini');

let count = 0;
let newCount = 0;

removeProduct.addEventListener('click', () => {
  if (count > 0 ) {
    count -= 1;
    productCount.textContent = count;
  }
})

addProduct.addEventListener('click', () => {
  count += 1;
  productCount.textContent = count;
})

addCart.addEventListener('click', () => {
  newCount += count;
  cartCount.textContent = newCount;
  cartCountMini.textContent = newCount;
  cartTotal.textContent = `$${(newCount * 125).toFixed(2)}`;
  if (newCount > 0) {
    if (fullCart.classList.contains('hidden')) {
      fullCart.classList.toggle('hidden');
      emptyCart.classList.toggle('hidden');
      cartCountMini.classList.toggle('hidden');
    }
  }
})

deleteCart.addEventListener('click', () => {
  newCount = 0;
  fullCart.classList.toggle('hidden');
  emptyCart.classList.toggle('hidden');
  cartCountMini.classList.toggle('hidden');
})


// Nav buttons logic

const navMenu = document.querySelector('.nav-btn-menu');
const navClose = document.querySelector('.nav-btn-close');
const navCart = document.querySelector('.nav-btn-cart');

const navLinks = document.querySelector('.nav-links');
const cart = document.querySelector('.cart');

navMenu.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
})

navClose.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
})

navCart.addEventListener('click', () => {
  cart.classList.toggle('hidden');
})


// ----------- SLIDER LOGIC --------------------------


const sliderContainer = document.querySelector('.slider-container');

const previous = document.querySelector('.previous');

const next = document.querySelector('.next');

const arr = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
];

sliderContainer.innerHTML = `<img src="${arr[0]}" id="focus">`;

const previewsContainer = document.querySelector('.previews-container');

for (i = 0; i < arr.length; i++) {
  previewsContainer.innerHTML += `<img src="${arr[i]}" class="preview">`;
}

const preview = document.querySelectorAll('.preview');

let focusIndex = 0;

preview[focusIndex].classList.add('preview-clicked');

next.addEventListener('click', () => {
  arr.push(arr[0]);
  arr.shift();
  sliderContainer.innerHTML = `<img src="${arr[0]}" id="focus" class="focus-right">`;
  preview.forEach((current, index) => {
    current.classList.remove('preview-clicked');
  })
  if (focusIndex < preview.length - 1) {
    focusIndex += 1;
  } else {
    focusIndex = 0;
  }
  preview[focusIndex].classList.add('preview-clicked');
})

previous.addEventListener('click', () => {
  arr.unshift(arr[arr.length - 1]);
  arr.pop();
  sliderContainer.innerHTML = `<img src="${arr[0]}" id="focus" class="focus-left">`;
  preview.forEach((current, index) => {
    current.classList.remove('preview-clicked');
  })
  if (focusIndex > 0) {
    focusIndex -= 1;
  } else {
    focusIndex = preview.length - 1;
  }
  preview[focusIndex].classList.add('preview-clicked');
})



preview.forEach((current, index) => {
  current.addEventListener('click', () => {
    preview.forEach((e, eIndex) => {
      e.classList.remove('preview-clicked');
      arr.splice(eIndex, 1, e.src);
    })
    if (index > 0) {
      for (i = 0; i < index; i++) {
        arr.push(arr[0]);
        arr.shift()
      }
    }
    current.classList.add('preview-clicked');
    sliderContainer.innerHTML = `<img src="${arr[0]}" id="focus" class="focus-center">`;
  })
})

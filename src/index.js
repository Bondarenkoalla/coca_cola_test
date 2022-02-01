import './sass/main.scss';


//stars
function changestyle() {
  const blnk = document.getElementById('blnk');
  if (blnk.style.visibility == 'visible') {
    blnk.style.visibility = 'hidden';
    setTimeout(changestyle, 400);
  } else {
    blnk.style.visibility = 'visible';
    setTimeout(changestyle, 2000);
  }
}
setTimeout(changestyle, 0);

//presents
let intViewportWidth = screen.width;;
const presentsList = document.querySelector('.presents-list');
const chosenProduct = document.querySelector('.selected-product');
presentsList.addEventListener('click', onPresentClick);

function onPresentClick(e) {
  if (e.target.nodeName != 'LI') {
    return;
    }   
    if (intViewportWidth >= 1200) {
        chosenProduct.style.border = '3px solid #ffffff';
    } else { chosenProduct.style.border = 'none' }
   
  const currentActivePresent = document.querySelector('.checked');
  currentActivePresent?.classList.remove('checked');
    e.target.classList.add('checked');
  
  if (e.target.id === '1') {
    chosenProduct.innerHTML =
      '<img src="/pres1.ed728cab.png" class="selected-product-photo" height="239px"/><h4 class="product-header">Best sock ever</h4><p class="prouct-info">Reuglar sock have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>';
  } else if (e.target.id === '2') {
    chosenProduct.innerHTML =
      '<img src="/pres2.83893b2f.png" class="selected-product-photo" height="148px"/><h4 class="product-header">Best hat ever</h4><p class="prouct-info">Reuglar hat have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>';
  } else {
    chosenProduct.innerHTML =
      '<img src="/pres3.e43f42fa.png" class="selected-product-photo" height="171px"/><h4 class="product-header">Best bag ever</h4><p class="prouct-info">Reuglar bag have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem</p>';
  }

  console.log(e.target.id, e.target.img);
}

//menu open
const menuBtns = document.querySelector('.burger-menu-icons');
const menuBtnOpen = document.querySelector('.burger-menu-icon');
const menuBtnClose = document.querySelector('.burger-menu-close-icon');
const menu = document.querySelector('.mobile-menu');
menuBtns.addEventListener('click', onMenuBtnClick);
function onMenuBtnClick(e) {
  menuBtnClose.classList.toggle('hidden');
  menuBtnOpen.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}

//select
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();
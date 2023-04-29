//fetching data using API
const apiUrl = ('https://raw.githubusercontent.com/Sharonne24/independent-website/main/db.json');

// function to create a menu item
function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const menuItemInfo = document.createElement('div');
  menuItemInfo.classList.add('menu-item-info');

  const name = document.createElement('h3');
  name.textContent = item.name;

  const description = document.createElement('p');
  description.textContent = item.description;

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = `$${item.price.toFixed(2)}`;

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.name;

  menuItemInfo.appendChild(name);
  menuItemInfo.appendChild(description);
  menuItemInfo.appendChild(price);
  menuItem.appendChild(image);
  menuItem.appendChild(menuItemInfo);

  return menuItem;
}

// function to populate the menu
async function populateMenu() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const menuContainer = document.getElementById('menu-container');

  data.menu.forEach(item => {
    const menuItem = createMenuItem(item);
    menuContainer.appendChild(menuItem);
  });
}

populateMenu();

// function to reset form inputs
function resetFormInputs(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    input.value = '';
  });

  form.reset();
}

// online order form
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
  resetFormInputs('order-form');
});

// reservation form
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
  resetFormInputs('reservation-form');
});

// back to top button
const btnToTop = document.getElementById('btn-to-top');

btnToTop.addEventListener('click', function() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

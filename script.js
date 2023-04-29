
//fetching data using API
const apiUrl = ('https://raw.githubusercontent.com/Sharonne24/independent-website/main/db.json');
async function getMenu() {
    const response = await fetch('https://raw.githubusercontent.com/Sharonne24/independent-website/main/db.json');
    const data = await response.json();
    const menuContainer = document.getElementById('menu-container');
    data.menu.forEach(item => {

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
      menuContainer.appendChild(menuItem);
    });
  }

  getMenu();

  //online order form
  const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  const orderInput = document.getElementById("order");

  
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  addressInput.value = '';
  orderInput.value = '';

  orderForm.reset(); 
});


//resevation
document.addEventListener("DOMContentLoaded", function(event) {
  const reservationForm = document.getElementById("reservation-form");


  reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!"); 


    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const guestsInput = document.getElementById("guests");
    const messageInput = document.getElementById("message");

    
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
    guestsInput.value = '';
    messageInput.value = '';

    reservationForm.reset(); 
  });
});

//back to top button
document.addEventListener("DOMContentLoaded", function() {
  const btnToTop = document.getElementById("btn-to-top");

  btnToTop.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
});




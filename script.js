const orderForm = document.querySelector('#order-form');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const address = document.querySelector('#address').value.trim();
  const order = document.querySelector('#order').value.trim();

  if (!name || !email || !phone || !address || !order) {
    alert('Please fill all the fields.');
    return;
  }

  // send the form data to the server
  fetch('/submit-order', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      address: address,
      order: order
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Order submitted successfully!');
      orderForm.reset(); // Clear the form
      Object.values(orderForm.elements).forEach(element => {
        if (element.type !== 'submit') {
          element.classList.remove('valid');
          element.classList.remove('invalid');
        }
      });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    alert('Something went wrong. Please try again later.');
  });
});

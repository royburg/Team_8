document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  document.getElementById('contact-form').addEventListener('submit',function(){alert("Thank you for your message!  \nWe will contact you as soon as possible :)")},false) ;
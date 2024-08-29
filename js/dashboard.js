const currentDay = document.querySelector('.current-day');

function getTimeOfDay() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
        return 'morning';
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}

// Get the time of day
const timeOfDay = getTimeOfDay();

// Update the text content of the element with the current time of day
if (currentDay) {
    currentDay.textContent = `Good ${timeOfDay}`;
}


        // Retrieve the logged-in username from local storage
        const loggedInUser = localStorage.getItem('loggedInUser');
        

        if (loggedInUser) {
            document.getElementById('usernameDisplay').textContent = loggedInUser.toUpperCase();
            
        } else {
            // If no user is logged in, redirect to the login page
            window.location.href = "signup.html";
        };



function hideBalance() {
  document.querySelector('.amount').innerHTML = '****';
  document.querySelector('.bi-eye-slash-fill').style.display = 'block';
  document.querySelector('.bi-eye-fill').style.display = 'none';
};

let initialAmount = 3500.00;

function showBalance() {
  //document.querySelector('.amount-container').innerHTML = ``;
  let amount = parseFloat(localStorage.getItem('remainingAmount')) || 3500;
document.querySelector('.amount').innerHTML =`$ ${amount.toFixed(2)}`;

localStorage.setItem('userData', JSON.stringify({ remainingAmount: initialAmount }));
    document.querySelector('.amount').textContent = `$ ${initialAmount.toFixed(2)}`;

  document.querySelector('.bi-eye-slash-fill').style.display = 'none';
  document.querySelector('.bi-eye-fill').style.display = 'block';
};

function showTransaction() {
  document.querySelector('.transaction-section').style.display = 'block';
  document.querySelector('section').style.display = 'none';
}

function showOverview() {
  document.querySelector('.another-section-overview').style.display = '';
  document.querySelector('.section-withdraw').style.display = 'none';
  document.querySelector('.section-refer').style.display = 'none';
};

function showWithdraw() {
  document.querySelector('.withdraw-section').style.display = 'block';
  document.querySelector('.transaction-section').style.display = 'none';
       document.querySelector('section').style.display = 'none';
  
  
/*  document.querySelector('.another-section-overview').style.display = 'none';
  document.querySelector('.section-withdraw').style.display = 'block';
  document.querySelector('.section-refer').style.display = 'none';*/
};

function showRefer() {
  document.querySelector('.section-refer').style.display = 'block';
  document.querySelector('.another-section-overview').style.display = 'none';
  //document.querySelector('.section-withdraw').style.display = 'none';
  
};



function showToken() {
  document.querySelector('.section-withdraw').style.display = 'block';
//  document.querySelector('.withdraw-container').style.display = 'none';
};

function showPayment() {
  document.querySelector('.another-section-body').style.display = 'none';
  document.querySelector('.another-section-body2').style.display = 'block';
};



function earnTask() {
    // Amount earned from completing a task
    const taskEarn = 10;

    // Get the current balance from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    

    if (userData) {
        // Add the earned amount to the existing balance
        userData.remainingAmount += taskEarn;

        // Update localStorage with the new balance
        localStorage.setItem('userData', JSON.stringify(userData));

        // Update the UI to show the new balance
        document.querySelector('.amount').textContent = `$ ${userData.remainingAmount.toFixed(2)}`;

        // Optional: Show a success message
        Swal.fire({
            title: "Task Completed!",
            text: `You have earned $${taskEarn.toFixed(2)}. Your new balance is $${userData.remainingAmount.toFixed(2)}.`,
            icon: "success"
        });
    } else {
        // Handle the case where userData is not found
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "User data not found. Please try again.",
        });
    }
    
    window.location.href = 'https://www.tiktok.com/@michelleandyson?_t=8pCoQEyCjkE&_r=1';
}





let popUp = document.querySelector('.pop-up');

  const randomName = ['Grace', 'Samuel', 'Mark','Augustine','Clara','Angel Marco','Nakiya Carr','Caterina','Son','Travis','Marcon','Ivy','Claire','Andrea','Colman','Lily','Kelly','Victor','Prosper','Cherry','Alberto','Luca','Greenlock','Nicole','Aniston'];
  const randomCountries = ['Atlanta','Dubia','Morroco', 'USA','Taiwan','Chile','France','Isreal','Austrailia','Canada','China','Sweden','North Korea','India','Spain','Portuguese','Brazil','Japan','Paris','Italy'];
  const randomAmount = [100, 150, 200, 250, 300, 400, 500, 550, 600, 700, 750, 800, 840, 830, 870, 960, 910, 1000, 1200, 2000, 2400, 2100, 2700, 3000];

  function togglePopUp() {
   
    const name = randomName[Math.floor(Math.random() * randomName.length)];
    const country = randomCountries[Math.floor(Math.random() * randomCountries.length)];
    const amount = randomAmount[Math.floor(Math.random() * randomAmount.length)];

    const popupHtml = `${name} from ${country} just withdrew $${amount}`;
    
    popUp.innerHTML = popupHtml;

    popUp.style.display = 'block';

    setTimeout(() => {
      popUp.style.display = 'none';
    }, 3000);
  }
  
  setInterval(togglePopUp, 6000);

  setTimeout(togglePopUp, 3000);

const form = document.querySelector('.form');
const withdrawCode = document.querySelector('.withdraw-input');

//TOKEN WITHDRAW 
/*
const validWithdrawcode = 'world-support-6Ynu6d';
localStorage.setItem('pending', JSON.stringify(parsedData));

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  validCode = withdrawCode.value;
  
  if (validCode === validWithdrawcode) {
    Swal.fire({
      title: "Correct Withdrawal Token!",
      icon: "success"
    });
  const pending = document.querySelector('.pending').innerHTML = 'Completed';
      pending.style.color = 'green';
     /*  document.querySelector('section').style.display = 'none';   */
/*  } else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect Withdrawal Token!",
    });
  }
});

*/

const validWithdrawcode = 'world';
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const validCode = withdrawCode.value;
  
  if (validCode === validWithdrawcode) {
    Swal.fire({
      title: "Correct Withdrawal Token!",
      icon: "success"
    });
    
    const pendingElements = document.querySelectorAll('.pending');

// Update each element
    pendingElements.forEach((element) => {
      element.innerHTML = 'Completed';
      element.style.color = 'green';
    });
    
    // Save to localStorage
    localStorage.setItem('pendingStatus', 'Completed');
  } else {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect Withdrawal Token!",
    });
  }
});



function completeProfle() {
  window.location.href = 'edit.html';
};

function home() {
  window.location.href = "dashboard.html";
};

function explore() {
  window.location.href = "explore.html";
};

function profile() {
  window.location.href = "profile.html";
};

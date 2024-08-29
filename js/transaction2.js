


 // Retrieve names from localStorage
const nameReciever = localStorage.getItem('first-name');
const nameReciever2 = localStorage.getItem('last-name');

// Set initial amount, or retrieve it from localStorage if it exists
let amount = parseFloat(localStorage.getItem('remainingAmount')) || 3500;
document.querySelector('.amount').textContent = amount.toFixed(2);

// Retrieve and display stored transaction history HTML
const transactionBody = document.querySelector('.all-transaction-body');
transactionBody.innerHTML = localStorage.getItem('transactionHistoryHTML') || '';

// Event listener for the withdrawal form submission
const form6 = document.querySelector('.form6');

form6.addEventListener('submit', function (e) {
  e.preventDefault();

  const withdrawAmount = parseFloat(document.querySelector('.withdraw-amount').value);

  if (withdrawAmount > amount) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Sorry, you can't withdraw more than $${withdrawAmount.toFixed(2)} from your available balance!`,
    });
  } else if (withdrawAmount <= amount && !isNaN(withdrawAmount)) {
    // Subtract the withdrawal amount from the available balance
    amount -= withdrawAmount;
    document.querySelector('.amount').textContent = amount.toFixed(2);

    Swal.fire({
      title: "Success!",
      text: `You have successfully withdrawn $${withdrawAmount.toFixed(2)}`,
      icon: "success"
    });

    // Create the transaction HTML
    const historyHtml = `
      <div class="transaction-flex">
        <div>
          <span class="transaction-receiver">${nameReciever}</span>
          <span class="transaction-receiver2">${nameReciever2}</span>
        </div>
        <div>
          <div class="transaction-amount">- $${withdrawAmount.toFixed(2)}</div>
          <div class="pending">pending</div>
        </div>
      </div>
      <center class="transaction-line">
        ______________________________________________________________________________
      </center>`;

    // Append the new transaction to the history container and update localStorage
    transactionBody.innerHTML += historyHtml;
    localStorage.setItem('transactionHistoryHTML', transactionBody.innerHTML);

    // Save the updated amount to localStorage
    localStorage.setItem('remainingAmount', amount.toFixed(2));

    // Clear the input field
    document.querySelector('.withdraw-amount').value = '';
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid withdrawal amount!",
    });
  }
});
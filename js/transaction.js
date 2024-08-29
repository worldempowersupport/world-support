function hideTransaction() {
  document.querySelector('.withdraw-section').style.display = 'none';
  document.querySelector('.transaction-section').style.display = 'none';
  document.querySelector('section').style.display = 'block';
};

// Retrieve names from localStorage
const nameReciever = localStorage.getItem('first-name') || 'Default First Name';
const nameReciever2 = localStorage.getItem('last-name') || 'Default Last Name';

// Check if 'userData' exists in localStorage
const userData = localStorage.getItem('userData');

// If 'userData' does not exist, initialize it for a new user
if (!userData) {
    // Set the initial balance to $3,500 for a new user
    const initialAmount = 3500.00;

    // Store the initial balance and mark the user as new
    localStorage.setItem('userData', JSON.stringify({ remainingAmount: initialAmount }));
    document.querySelector('.amount').textContent = `$ ${initialAmount.toFixed(2)}`;

    // Clear transaction history for a new user
    localStorage.removeItem('transactionHistoryHTML');  // Reset transaction history to empty
    document.querySelector('.all-transaction-body').innerHTML = ` <center>
        no transactions yet
      </center>`;  // Display as empty
} else {
    // Retrieve the existing balance for returning users
    const parsedData = JSON.parse(userData);
    const amount = parsedData.remainingAmount || 3500.00;  // Use the stored amount, or default to $3,500 if not found
    document.querySelector('.amount').textContent = `$ ${amount.toFixed(2)}`;

    // Retrieve and display stored transaction history HTML for returning users
    document.querySelector('.all-transaction-body').innerHTML = localStorage.getItem('transactionHistoryHTML') || '';
}

// Event listener for the withdrawal form submission
const form6 = document.querySelector('.form6');

form6.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const withdrawAmount = parseFloat(document.querySelector('.withdraw-amount').value);
    const parsedData = JSON.parse(localStorage.getItem('userData'));
    let amount = parsedData.remainingAmount;

    // Validate withdrawal amount
    if (withdrawAmount > amount) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Sorry, you can't withdraw more than $${amount.toFixed(2)} from your available balance!`,
        });
    } else if (withdrawAmount <= amount && !isNaN(withdrawAmount)) {
        // Subtract the withdrawal amount from the available balance
        amount -= withdrawAmount;
        document.querySelector('.amount').textContent = `$ ${amount.toFixed(2)}`;

        Swal.fire({
            title: "Pending Payment!",
            text: `You have successfully withdrawn $${withdrawAmount.toFixed(2)}. Get your withdrawal token to complete your withdrawal.`,
            icon: "success"
        });

        // Update user data with the new amount
        parsedData.remainingAmount = amount;
        localStorage.setItem('userData', JSON.stringify(parsedData));
        
        const pendingElement = document.querySelector('.pending');
        localStorage.setItem('pendingStatus', 'Completed');

        // Add the transaction to the history
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
        
        document.querySelector('.all-transaction-body').innerHTML += historyHtml;
        localStorage.setItem('transactionHistoryHTML', document.querySelector('.all-transaction-body').innerHTML);

        // Clear the input field
        document.querySelector('.withdraw-amount').value = '';
    } /*else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid withdrawal amount or check if you have completed account creation!",
        });
    }*/
});
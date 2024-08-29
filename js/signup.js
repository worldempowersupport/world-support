document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
            
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
            
    if (password !== confirmPassword) {
      Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Passwords do not match!",
     });
     return;
    }

            // Hash the password (simplified for demonstration)
            const hashedPassword = btoa(password);

            // Storing user data in local storage
            const userData = {
                username: username,
                password: hashedPassword
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            
            Swal.fire({
                title: "Account created successfully!",
                text: "Please go back to login",
                icon: "success"
            });
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const loginUsername = document.getElementById('loginUsername').value.trim();
            const loginPassword = document.getElementById('loginPassword').value;

            // Retrieving stored data
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No account found. Please create an account first.",
                });
                return;
            }

            const { username, password } = userData;
            const hashedInputPassword = btoa(loginPassword);

            // Check if the credentials match
            if (loginUsername === username && hashedInputPassword === password) {
                localStorage.setItem('loggedInUser', username); // Save the logged-in username
                Swal.fire({
                    title: "Login successfully!",
                    icon: "success"
                });
                
                setTimeout(function() {
                    document.getElementById("loading").style.display = "block";
                    window.location.href = "dashboard.html";
                }, 3000); // 3 seconds delay
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect username or password!",
                });
            }
        });

        function showSignup() {
            document.querySelector('.login-form2').style.display = 'block';
            document.querySelector('.login-form').style.display = 'none';
        };

        function showSignin() {
            document.querySelector('.login-form2').style.display = 'none';
            document.querySelector('.login-form').style.display = 'block';
        };
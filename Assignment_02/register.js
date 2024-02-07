// register.js
function submitForm(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    let birthday = document.getElementById('birthday').value;
    var gender = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : "";
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    let state = document.getElementById('state').value;





    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    /*
    if(user_records.some((v)=>{
        return v.email==email;
    })){
        alert("Duplicate Data");
    }else{
        user_records.push({
            "username":username,
            "email":email,
            "password":password,
            "gender" : gender,
            "mobile":mobile
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration successful!");
    }
    */

    user_records.push({
        "username":username,
        "email":email,
        "password":password,
        "cpassword":cpassword,
        "birthday":birthday,
        "gender":gender,
        "city":city,
        "address":address,
        "state":state

    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("Registration successful!");

    window.location.href = 'profile.html';
}






// document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle form submission
//     function registerUser() {
//         // Get form data
//         var formData = {
//             username: document.getElementById("username").value,
//             email: document.getElementById("email").value,
//             password: document.getElementById("password").value,
//             cpassword: document.getElementById("cpassword").value,
//             birthday: document.getElementById("birthday").value,
//             gender: document.querySelector('input[name="gender"]:checked').value,
//             address: document.getElementById("address").value,
//             city: document.getElementById("city").value,
//             state: document.getElementById("state").value
//         };

//         // Perform AJAX POST request
//         $.ajax({
//             type: "POST",
//             url: "your_server_endpoint_here", // Replace with your server endpoint
//             data: formData,
//             success: function(response) {
//                 // Handle success response
//                 console.log("User registered successfully:", response);

//                 // Optionally, you can redirect to a new page with the data list
//                 window.location.href = "datalist.html";
//             },
//             error: function(error) {
//                 // Handle error
//                 console.error("Error registering user:", error);
//             }
//         });
//     }

//     // Attach the registerUser function to the form's submit button click
//     document.querySelector('button[type="button"]').addEventListener("click", registerUser);
// });


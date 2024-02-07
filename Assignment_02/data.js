document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Display user list
    const userList = document.getElementById('userList');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Password: ${user.password}`;
        userList.appendChild(listItem);
    });
});
function login () {
  $.ajax({
      url: 'http://165.227.77.151:3000/user/signIn',
      method: 'POST',
      data: {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value,
      },
      dataType: "json",
      success: function (data) {
        window.location = "homePage/homePage.html";
      },
      beforeSend: function() {
        // notify user visually
      },
      complete: function() {
        // notify user visually
      },
      error: function (err) {
        // notify user visually
        alert("Unable to log in. Please check your username and password.");
        throw err;
      }
  });
}

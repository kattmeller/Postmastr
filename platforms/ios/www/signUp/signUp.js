function signup() {
  var formData = {
        username: $("#sign-up-user").val(),
        password: $("#sign-up-psw").val(),
        passwordRepeat: $("#sign-up-psw-repeat").val(),
  };
  console.log(formData);
  $.ajax({
      url: `https://post-mastr-mvp.vercel.app/api/user`,
      type: 'POST',
      data: {
        "username": formData.username,
        "password": formData.password
      },
      dataType: "json",
      success: function (res) {
      console.log("Im done");
      window.location.href = "../index.html";
      },
      error: function(err) {
      console.log("oof");
      alert("Username or password is wrong. Please try again.");
      }
  });

  window.location.href = '../index.html'
}

function loginResults() {
    console.log("Im done");
}

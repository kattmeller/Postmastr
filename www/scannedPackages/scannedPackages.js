// Wait for cordova to load
document.addEventListener('deviceready', function () {
  // retreive packages from server
  $.ajax({
    url: 'http://165.227.77.151:3000/package/output',
    method: 'GET',
    data: {},
    dataType: "json",
    success: function(data) {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          document.getElementById('packages-list').innerHTML += `
          <div class="package-info">
            <p>Recipient: </br> ${data[i].recipient}</p>
            <p>Sender: </br> ${data[i].sender}</p>
            <p>Carrier Name: </br> ${data[i].carrierName}</p>
            <p>Return Address: </br> ${data[i].returnAddress}</p>
            <p>Recipient Address: </br> ${data[i].recipientAddress}</p>
            <p>Tracking Number: </br> ${data[i].trackingNumber}</p>
            <p>EmailsSent: </br> ${data[i].emailsSent}</p>
            <p>PIcked Up: </br> ${data[i].ickedUp}</p>
            <p>Email Sent: </br> ${data[i].emailSent}</p>
            <p>Date Recieved: </br> ${data[i].dateRecieved}</p>
          </div>`;
        };
      } else {
        document.getElementById('packages-list').innerHTML = `<p>No Packages Found</p>`;
      }
    },
    error: function(err) {
      alert("There was an error attempting to retreive scanned packages");
      throw err;
    }
  });
}, false);

// return to homepage when back button pressed
function goBack() {
  window.location.href = "../homePage/homePage.html";
}

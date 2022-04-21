// Wait for cordova to load
document.addEventListener('deviceready', function () {
  // retreive packages from server
  $.ajax({
    url: 'http://165.227.77.151:3000/package/output',
    method: 'GET',
    data: {},
    dataType: "json",
    success: function(data) {
      document.getElementById('packages-list').innerHTML = ``;
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
        //   document.getElementById('packages-list').innerHTML += `
        //   <div class="package-info">
        //     <p>Recipient: </br> ${data[i].recipient}</p>
        //     <p>Sender: </br> ${data[i].sender}</p>
        //     <p>Carrier Name: </br> ${data[i].carrierName}</p>
        //     <p>Return Address: </br> ${data[i].returnAddress}</p>
        //     <p>Recipient Address: </br> ${data[i].recipientAddress}</p>
        //     <p>Tracking Number: </br> ${data[i].trackingNumber}</p>
        //     <p>EmailsSent: </br> ${data[i].emailsSent}</p>
        //     <p>Picked Up: </br> ${data[i].pickedUp}</p>
        //     <p>Email Sent: </br> ${data[i].emailSent}</p>
        //     <p>Date Recieved: </br> ${data[i].dateRecieved}</p>
        //   </div>`;
          document.getElementById('packages-list').innerHTML += `
          <button onclick="goPackageDetails()">
            <div class="package-info">
              <p>Recipient: </br> ${data[i].recipient}</p>
              <p>Sender: </br> ${data[i].sender}</p>
              <p>Tracking Number: </br> ${data[i].trackingNumber}</p>
              <p>Date Recieved: </br> ${data[i].dateRecieved}</p>
            </div>
          </button>
          `;
        };
      } else {
        document.getElementById('packages-list').innerHTML = `<p>No packages Found</p>`;;
      }
    },
    error: function(err) {
      alert("Error attempting to retreive packages");
      throw err;
    }
  });
});

function goPackageDetails() {
  window.location.href = "../packageDetails/packageDetails.html";
}

// return to homepage when back button pressed
function goBack() {
  window.location.href = "../homePage/homePage.html";
}

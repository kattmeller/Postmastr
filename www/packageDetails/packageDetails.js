// Wait for cordova to load
document.addEventListener('deviceready', function () {
  // retreive packages from server
  // $.ajax({
  //   url: 'http://165.227.77.151:3000/package/output',
  //   method: 'GET',
  //   data: {},
  //   dataType: "json",
  //   success: function(data) {
  //     document.getElementById('package-details').innerHTML = `
  //     <div class="package-info">
  //       <p>Recipient: </br> ${data[0].recipient}</p>
  //       <p>Sender: </br> ${data[0].sender}</p>
  //       <p>Carrier Name: </br> ${data[0].carrierName}</p>
  //       <p>Return Address: </br> ${data[0].returnAddress}</p>
  //       <p>Recipient Address: </br> ${data[0].recipientAddress}</p>
  //       <p>Tracking Number: </br> ${data[0].trackingNumber}</p>
  //       <p>EmailsSent: </br> ${data[0].emailsSent}</p>
  //       <p>Picked Up: </br> ${data[0].pickedUp}</p>
  //       <p>Email Sent: </br> ${data[0].emailSent}</p>
  //       <p>Date Recieved: </br> ${data[0].dateRecieved}</p>
  //     </div>`;
  //     } else {
  //       document.getElementById('packages-list').innerHTML = `<p>No packages Found</p>`;;
  //     }
  //   },
  //   error: function(err) {
  //     alert("Error attempting to retreive packages");
  //     throw err;
  //   }
  // });
});

function goBack() {
  window.location.href="../scannedPackages/scannedPackages.html";
}

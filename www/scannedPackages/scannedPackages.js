// Wait for cordova to load
document.addEventListener('deviceready', function () {
  // retreive packages from server
  // $.ajax({
  //   url: 'http://165.227.77.151:3000/package/output',
  //   method: 'GET',
  //   data: {},
  //   dataType: "json",
  //   success: function(data) {
  //     document.getElementById('packages-list').innerHTML = ``;
  //     if (data.length > 0) {
  //       for (let i = 0; i < data.length; i++) {
  //         document.getElementById('packages-list').innerHTML += `
  //         <div class="package-info">
  //           <p>Recipient: </br> ${data[i].recipient}</p>
  //           <p>Sender: </br> ${data[i].sender}</p>
  //           <p>Carrier Name: </br> ${data[i].carrierName}</p>
  //           <p>Return Address: </br> ${data[i].returnAddress}</p>
  //           <p>Recipient Address: </br> ${data[i].recipientAddress}</p>
  //           <p>Tracking Number: </br> ${data[i].trackingNumber}</p>
  //           <p>EmailsSent: </br> ${data[i].emailsSent}</p>
  //           <p>Picked Up: </br> ${data[i].pickedUp}</p>
  //           <p>Email Sent: </br> ${data[i].emailSent}</p>
  //           <p>Date Recieved: </br> ${data[i].dateRecieved}</p>
  //         </div>`;
  //       };
  //     } else {
  //       document.getElementById('packages-list').innerHTML = `<p>No Packages Found</p>`;
  //     }
  //   },
  //   error: function(err) {
  //     alert("There was an error attempting to retreive scanned packages");
  //     throw err;
  //   }
  // });
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function testData() {
  readTextFile("exampleData.json", function(text){
      var data = JSON.parse(text);
  });
}

// return to homepage when back button pressed
function goBack() {
  window.location.href = "../homePage/homePage.html";
}

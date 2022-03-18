// list of ids for testing
const ids = [0, 1, 2];

// retreive packages from server
function getPackages() {
  $.ajax({
    url: 'http://165.227.77.151:3000/package/output',
    method: 'GET',
    data: {},
    dataType: "json",
    success: function(data) {
      return data;
    },
    error: function(err) {
      alert("There was an error attempting to retreive scanned packages");
      throw err;
    }
  })
}

// Add package records as innerHTML buttons when 'Load Packages'
// button clicked
function loadPackages() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("packages-list").innerHTML += `
      <button id="btn-pckg-0"
        class="scannedPackage"
        onclick="navToPackageDetails()"
      >
        <p>Full Name</p>
        <p>#000000</p>
      </button>
      <hr />
    `
  }
}

// Change color of package record and navigate to packageDetails screen when it
// is clicked
function navToPackageDetails = () => {
  document.getElementById("btn-pckg-0").style.backgroundColor = "#d3d3d3";
  window.location.href = "../packageDetails/packageDetails.html";
}

// return to homepage when back button pressed
function goBack() {
  window.location.href = "../homePage/homePage.html";
}

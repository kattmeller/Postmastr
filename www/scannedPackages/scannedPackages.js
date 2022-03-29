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
  const n = 3; // num of example packages
  for (let i = 0; i < n; i++) {
    document.getElementById("packages-list").innerHTML += `
      <button id="btn-pckg-${i}"
        class="scannedPackage"
      >
        <p>Full Name</p>
        <p>#00000${i}</p>
      </button>
      <hr />
    `
  }

  for (let i = 0; i < n; i++) {
    const btn = document.getElementById("btn-pckg-" + String(i));
    btn.addEventListener("click", () => {
      btn.style.backgroundColor = "#d3d3d3";
      window.location.href = "../packageDetails/packageDetails.html";
    });
  }
}

// return to homepage when back button pressed
function goBack() {
  window.location.href = "../homePage/homePage.html";
}

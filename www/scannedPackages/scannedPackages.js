function getPackages() {
  $.ajax({
    url: 'http://165.227.77.151:3000/package/output',
    method: 'POST',
    data: {},
    dataType: "json",
    success: function(data) {
      return data;
    },
    error: function(err) {
      alert("There was an error attempting to fetch packages");
      throw err;
    }
  })
}

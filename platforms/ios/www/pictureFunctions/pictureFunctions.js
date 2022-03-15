var pictureSource;   // picture source
var destinationType; // sets the format of returned value
// Wait for Cordova to load
document.addEventListener('deviceready', onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function goHome() {
    window.location.href="../index.html";
}

function goScannedPackages() {
    window.location.href="../scannedPackages/scannedPackages.html";
}

// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
// Uncomment to view the base64-encoded image data
console.log("  "+imageData);

$.ajax({
    url: 'http://165.227.77.151:3000/imageProcessing',
    type: 'POST',
    data: {
        "image": imageData,
    },
    success: function (res) {
        console.log("res");
        alert("Got it");
        window.location.href = "../confirmationPage/confirmationPage.html";
    },
    error: function(err) {
        console.log("oof");
        alert("Couldnt send image to server");
        window.location.href = "../confirmationPage/confirmationPage.html";
    }
});

// // Get image handle
// //
// var smallImage = document.getElementById('smallImage');

// // Unhide image elements
// //
// smallImage.style.display = 'block';

// // Show the captured photo
// // The inline CSS rules are used to resize the image
// //
// smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
// Uncomment to view the image file URI
 console.log("IMAGE PATH: "+imageURI);
alert("Image Url : "+imageURI);
// Get image handle
//
// var largeImage = document.getElementById('largeImage');

var image_data = new FormData();
image_data.append('image', imageURI);



$.ajax({
    url: 'http://165.227.77.151:3000/imageProcessing',
    type: 'POST',
    data: image_data,
    contentType: false,
    processData: false,
    success: function (res) {
        console.log("res");
        alert("Got it");
        window.location.href = "../confirmationPage/confirmationPage.html";
    },
    error: function(err) {
        console.log("oof");
        alert("Couldnt send image to server");
        window.location.href = "../confirmationPage/confirmationPage.html";
    }
});

// Unhide image elements
//
// largeImage.style.display = 'block';



// Show the captured photo
// The inline CSS rules are used to resize the image
//
// largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
// Take picture using device camera and retrieve image as base64-encoded string
navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function capturePhotoEdit() {
// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
    destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
    /////////////////////////////////////////This changed from URISuccess to DataSuccess
// Retrieve image file location from specified source
navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL,
    sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
alert('Failed because: ' + message);
}
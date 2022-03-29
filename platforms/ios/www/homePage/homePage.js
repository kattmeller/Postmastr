
/*function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
       var image = document.getElementById('myImage');
       image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
       alert('Failed because: ' + message);
    }
 }*/

 document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady() {
     console.log(navigator.camera);
 }


function openCamera() {
    //var options = setOptions(Camera.PictureSourceType.CAMERA);
    //alert('I made it past options');
    // var func = createNewFileEntry();
    // alert('I made it past func');

    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        alert('Success was called');
        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        // func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
        alert("Failure was called");

    }, options);
}

function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true
    }
    return options;
}

function displayImage(imgUri) {

    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}

// function createNewFileEntry(imgUri) {
//     window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {

//         // JPEG file
//         dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

//             // Do something with it, like write to it, upload it, etc.
//             // writeFile(fileEntry, imgUri);
//             console.log("got file: " + fileEntry.fullPath);
//             // displayFileData(fileEntry.fullPath, "File copied to");

//         }, onErrorCreateFile);

//     }, onErrorResolveUrl);
// }

var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    // Wait for Cordova to load
    document.addEventListener('deviceready', onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
      pictureSource=navigator.camera.PictureSourceType;
      destinationType=navigator.camera.DestinationType;
    }


    // Called when a photo is successfully retrieved
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
       console.log("  "+imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
     //  console.log("IMAGE PATH: "+imageURI);
      alert("Image Url : "+imageURI);
      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';



      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
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
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

let btn = document.createElement("button");
btn.className += "logOutButton";
btn.innerHTML = "Log out";
btn.onclick = function () {
    window.location.href = "../index.html";
};
document.body.appendChild(btn);

let start = document.createElement("button");
start.className += "startButton";
start.innerHTML = "START";
start.onclick = function () {
    openCamera();
};
document.body.appendChild(start);

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

 
function openCamera() {
    //alert ('I am being called');
    var srcType = Camera.PictureSourceType.CAMERA;
    alert(srcType);
    var options = setOptions(srcType);
    alert('I made it past options');
    var func = createNewFileEntry();
    alert('I made it past func');

    navigator.camera.getPicture(function cameraSuccess(imageUri) {
        alert('This function was also called');
        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

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

function createNewFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {

        // JPEG file
        dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            // writeFile(fileEntry, imgUri);
            console.log("got file: " + fileEntry.fullPath);
            // displayFileData(fileEntry.fullPath, "File copied to");

        }, onErrorCreateFile);

    }, onErrorResolveUrl);
}
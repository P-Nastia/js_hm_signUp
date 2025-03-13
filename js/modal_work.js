let cropper;
let uploadImageURL;
var file_blob;
var image = document.getElementById('image');
let avatar;

var uploadImage = document.getElementById('uploadImage');

const leftRotate = document.getElementById('leftRotate');
const rightRotate = document.getElementById('rightRotate');



leftRotate.onclick = function (e) {
    if (cropper) {
        cropper.rotate(45);
    }
}
rightRotate.onclick = function (e) {
    if (cropper) {
        cropper.rotate(-45);
    }
}

chooseBT.onclick = function (e) {

    avatar = document.getElementById('avatar');
    
    image.src = avatar.src;
    cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1
    });
}

uploadImage.onchange = (event) => {

    const { target } = event;
    const { files } = target;

    const file = files[0];
    if (file) {
        if (/^image\/\w+/.test(file.type)) {

            if (uploadImageURL) {
                URL.revokeObjectURL(uploadImageURL);
            }

            image.src = uploadImageURL = URL.createObjectURL(file);
            
            if (cropper) {
                cropper = cropper.destroy();
            }
            cropper = new Cropper(image, {
                aspectRatio: 1,
                viewMode: 1
            });
        }
        else {
            window.alert('Please choose an image file.');
        }
    }
}

saveImage.onclick = function (e) {
    if (cropper) {

        cropper.getCroppedCanvas().toBlob(function (blob) {
            file_blob = new File([blob], "some_random_name.jpg");

            if (uploadImageURL) {
                URL.revokeObjectURL(uploadImageURL);
            }
            avatar.src = uploadImageURL = URL.createObjectURL(file_blob);

            cropper = cropper.destroy();
        
        });
    }
}

cancel.onclick = function (e) {
    image.src = avatar.src;
    if (cropper) {
        cropper = cropper.destroy();
    }
    //image.src = avatar.src;
   
    //    cropper = cropper.destroy();
    
    //cropper = new Cropper(image, {
    //    aspectRatio: 1,
    //    viewMode: 1
    //});
}
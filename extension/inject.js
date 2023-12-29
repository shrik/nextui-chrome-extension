// // content.js

// function getImageType(src){
//     var mimeType = src.match(/^data:(.*?);base64,/);
//     if (mimeType && mimeType[1]) {
//         // Extract and log the image type (e.g., 'image/png')
//         var imageType = mimeType[1];
//         console.log("Image Type: " + imageType);
        
//         // Optional: Extract file extension (e.g., 'png')
//         var fileExtension = imageType.split('/')[1];
//         return fileExtension.toUpperCase();
//     }else{
//         const type = src.split('.').pop();
//         return type.toUpperCase();
//     }
    
// }

// // Function to extract image URLs from the current page
// function extractImages() {
//     const images = Array.from(document.images);
//     return images
//         .filter(image => image.src)
//         .map((image, index) => ({
//             src: image.src,
//             id: index,
//             width: image.naturalWidth,
//             height: image.naturalHeight,
//             type: getImageType(image.src),
//             length: image.length
//         }));
// }

// // Send the image list to the popup
// function sendImageList() {
//     const images = extractImages();
//     console.log(images);
//     chrome.runtime.sendMessage({ type: "imageList", images });
// }
// console.log("In inject.js");

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === "getImages") {
//         console.log("received get Images");
//         sendImageList();
//     }
// });
// if(chrome.runtime){ // only run if in extension

//     function handleDownload() {
//         const selectedImages = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(
//           (checkbox) => checkbox.value
//         );
    
//         if (selectedImages.length === 0) {
//           alert("Please select at least one image to download.");
//         } else {
//           // Trigger the download for each selected image
//           selectedImages.forEach((imageUrl) => {
//             chrome.downloads.download({ url: imageUrl });
//           });
//         }
//       }
    
//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.type === "imageList") {
//           console.log("start fire event onImageListCollected");
//           const event = new CustomEvent('onImageListCollected', { detail: message.images });
//           window.dispatchEvent(event);
//           console.log("onImageListCollected fire success");
//         }
//     });
    
//     document.addEventListener("DOMContentLoaded", function () {
    
//         // Add click event listener to the download button
//         document.getElementById("downloadButton").addEventListener("click", handleDownload);
    
//         // Send a message to the content script to request the image list
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             chrome.tabs.sendMessage(tabs[0].id, { type: "getImages" });
//         });
    
//     });
// }

async function getPhotos() {
  const numPhotos = document.getElementById("numPhotos").value;
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";

  try {
    const response = await fetch('data.json'); 
    const data = await response.json(); 
   const photosToDisplay = Math.min(numPhotos, data.data.length);

    for (let i = 0; i < photosToDisplay; i++) {
      const imageData = data.data[i];
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageData.image_url);
      imageElement.setAttribute("alt", imageData.title);

      const captionElement = document.createElement("p");
      captionElement.textContent = imageData.title;

      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(captionElement);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching the images.");
  }
}
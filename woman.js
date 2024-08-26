let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("products-container");
    let i = 1;

    data.products.forEach((product) => {
        if(product.gender.toLowerCase() == "women's") {
            const productDiv = document.createElement("div");
            const image = document.createElement("img");
            const title = document.createElement("h5");
            const gender = document.createElement("h6");
            const price = document.createElement("p");
            const button = document.createElement("button");
            productDiv.id = "man";
            button.textContent = "Buy Now";
            button.className = "button";
            button.id = `productButton_${product.id}`; // Assigning the product ID as the button's ID
      
            button.addEventListener("click", function () {
              redirectToSinglePage(product.id);
            });
      
            function redirectToSinglePage(productId) {
              window.location.href = `singlepage.html?productId=${productId}`;//add the produvt id 
            }

            image.src = `./images/collection/${i++}.png`;
            image.alt = product.title;
            title.textContent = product.title;
            gender.textContent = "Category: " + product.gender;
            price.textContent = "Price: $" + product.retailPrice;
      
            productDiv.appendChild(image);
            productDiv.appendChild(title);
            productDiv.appendChild(gender);
            productDiv.appendChild(price);
            productDiv.appendChild(button);
            productContainer.appendChild(productDiv);
        }
    });
  });
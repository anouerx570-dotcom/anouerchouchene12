// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Only trigger for "Add to Cart" buttons
      if (this.textContent.trim() === "Add to Cart") {
        e.preventDefault();
        const productCard = this.closest(".product-card");
        const productName =
          productCard.querySelector(".product-title").textContent;
        const productPrice =
          productCard.querySelector(".product-price").textContent;

        // Show confirmation (in a real app, you'd update a cart system)
        alert(`Added to cart: ${productName} - ${productPrice}`);
      }
    });
  });
});

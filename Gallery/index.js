document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});

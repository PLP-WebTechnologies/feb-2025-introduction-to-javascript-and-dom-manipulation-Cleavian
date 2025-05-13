document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    const dynamicElement = document.getElementById("dynamicElement");

    // Change Text Content
    document.getElementById("changeTextBtn").addEventListener("click", () => {
        heading.textContent = "Text Changed!";
    });

    // Modify CSS Styles
    document.getElementById("changeStyleBtn").addEventListener("click", () => {
        heading.classList.toggle("highlight");
    });

    // Add / Remove Element
    document.getElementById("toggleElementBtn").addEventListener("click", () => {
        if (dynamicElement.style.display === "none") {
            dynamicElement.style.display = "block";
        } else {
            dynamicElement.style.display = "none";
        }
    });
});

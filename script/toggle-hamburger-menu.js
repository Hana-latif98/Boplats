
const toggleMenu = () => {
    const overlayElement = document.getElementById("overlay");
    const navigationElement = document.getElementById("sideNavigation");
    navigationElement.classList.toggle("show");
    overlayElement.classList.toggle("show");
} 
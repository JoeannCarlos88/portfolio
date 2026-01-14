// Contact button alert
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Thank you for reaching out! I am open to opportunities.");
});

// Fade-in animation
const sections = document.querySelectorAll(".fade-in");
function reveal() {
  sections.forEach(section => {
    if(section.getBoundingClientRect().top < window.innerHeight - 100){
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

// Sidebar active link highlight
const sidebarLinks = document.querySelectorAll(".sidebar-link");
function updateSidebar() {
  let scrollPos = window.scrollY + window.innerHeight/2;
  sections.forEach((sec, idx) => {
    if(sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos){
      sidebarLinks.forEach(link => link.classList.remove("active"));
      sidebarLinks[idx].classList.add("active");
    }
  });
}
window.addEventListener("scroll", updateSidebar);
updateSidebar();

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

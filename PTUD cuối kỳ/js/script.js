window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md", "bg-white/95", "py-0");
    header.classList.remove("bg-cream/80", "py-4");
  } else {
    header.classList.remove("shadow-md", "bg-white/95", "py-0");
    header.classList.add("bg-cream/80", "py-4");
  }
});
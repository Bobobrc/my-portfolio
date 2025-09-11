function setLanguage(lang) {
  // Save user choice
  localStorage.setItem("lang", lang);

  // Update all elements with translations
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Update button styles
  document.getElementById("btn-en").classList.toggle("bg-blue-500", lang === "en");
  document.getElementById("btn-en").classList.toggle("text-white", lang === "en");
  document.getElementById("btn-en").classList.toggle("bg-gray-200", lang !== "en");
  document.getElementById("btn-en").classList.toggle("text-black", lang !== "en");

  document.getElementById("btn-ro").classList.toggle("bg-blue-500", lang === "ro");
  document.getElementById("btn-ro").classList.toggle("text-white", lang === "ro");
  document.getElementById("btn-ro").classList.toggle("bg-gray-200", lang !== "ro");
  document.getElementById("btn-ro").classList.toggle("text-black", lang !== "ro");
}

// Apply saved language on page load
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
};
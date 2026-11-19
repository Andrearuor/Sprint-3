
export default function darkMode() { 
    const darkModeBtn = document.getElementById('dark-mode');
    const pageContainer = document.body;
    const iconSol = document.querySelector('.icon-sol');
    const iconLuna = document.querySelector('.icon-luna');

    if (!darkModeBtn || !pageContainer)  return;

    const syncIcons = (isDark) => {
    if (iconSol && iconLuna) {
      iconSol.style.display = isDark ? "inline" : "none";
      iconLuna.style.display = isDark ? "none" : "inline";
    }
  };

  syncIcons(pageContainer.classList.contains("dark-mode"));

  darkModeBtn.addEventListener("click", () => {
    pageContainer.classList.toggle("dark-mode");
    const isDark = pageContainer.classList.contains("dark-mode");
    syncIcons(isDark);
  });
 }
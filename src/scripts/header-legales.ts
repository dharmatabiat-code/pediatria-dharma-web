export function initHeaderLegales() {
  const elements = {
    menuBtn:  document.getElementById("mobile-menu-btn"),
    closeBtn: document.getElementById("mobile-menu-close"),
    mobileMenu: document.getElementById("mobile-menu"),
    mobileSidebar: document.getElementById("mobile-menu-sidebar"),
  };

  let isMenuOpen = false;

  const toggleMenu = (open: boolean) => {
    if (isMenuOpen === open) return;
    isMenuOpen = open;
    
    const { mobileMenu, mobileSidebar, menuBtn } = elements;
    if (!mobileMenu || !menuBtn) return;

    if (open) {
      // Abrir menú: overlay + sidebar
      mobileMenu.classList.remove("opacity-0", "invisible");
      mobileMenu.classList.add("opacity-100", "visible");
      mobileSidebar?.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      // Cerrar menú: sidebar primero, luego overlay
      mobileSidebar?.classList.add("translate-x-full");
      mobileMenu.classList.remove("opacity-100", "visible");
      mobileMenu.classList.add("opacity-0", "invisible");
      document.body.style.overflow = "";
      menuBtn.setAttribute("aria-expanded", "false");
    }
  };

  // Event listeners
  elements.menuBtn?.addEventListener("click", () => toggleMenu(true));
  elements.closeBtn?.addEventListener("click", () => toggleMenu(false));

  // Cerrar al clickear links
  elements.mobileMenu?.querySelectorAll("a").forEach((link: HTMLAnchorElement) =>
    link.addEventListener("click", () => toggleMenu(false))
  );
}

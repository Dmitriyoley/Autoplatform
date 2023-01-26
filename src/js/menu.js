(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const body = document.querySelector("body");

    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      menuBtnRef.classList.toggle("is-active");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
        body.classList.toggle("no-scroll");
    });
  })();

  import burger from '../images/burger.png';
  import cross from '../images/cross.png';

  const menu = document.getElementById('menu-btn');
  menu.innerHTML =
    `<img src=${burger} />`
  ;

  menu.addEventListener('click', () => {

  if (!menu.classList.contains('opened')) {
    menu.classList.add('opened');
    menu.innerHTML =
    `<img src=${cross} />`

  } else {
    menu.classList.remove('opened');
    menu.innerHTML =
    `<img src=${burger} />`

  }
})
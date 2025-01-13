export function initHamburger() {
    const hamburger = document.getElementsByClassName("main-header__hamburger");

    for (const button of hamburger) {
        const nav =
            button.querySelector(".main-header__hamburger-nav") ??
            button.querySelector(".main-footer__hamburger-nav");

        button.addEventListener("click", () => {
            console.log("click");
            nav.style.display = nav.style.display === "flex" ? "none" : "flex";
        });
    }
}

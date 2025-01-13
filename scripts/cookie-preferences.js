export function initCookiePreferences() {
    const acceptCookieButton = document.getElementById(
        "cookie-preferences__accept-button"
    );

    const declineCookieButton = document.getElementById(
        "cookie-preferences__decline-button"
    );

    const cookiePreferences = document.getElementById("cookie-preferences");

    if (!acceptCookieButton || !declineCookieButton || !cookiePreferences) {
        return;
    }

    if (localStorage.getItem("isCookieAccepted") === "true") {
        cookiePreferences.style.display = "none";
    }

    const onClick = () => {
        cookiePreferences.style.display = "none";
        localStorage.setItem("isCookieAccepted", "true");
    };

    // Пока что логика у них одинаковая
    acceptCookieButton.addEventListener("click", onClick);
    declineCookieButton.addEventListener("click", onClick);
}

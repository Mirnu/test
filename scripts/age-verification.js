export function initAgeVerification() {
    const ageVerificationButton = document.getElementsByClassName(
        "age-verification__button"
    );

    const ageVerification = document.getElementById("age-verification");

    if (!ageVerification || !ageVerificationButton) {
        return;
    }

    if (localStorage.getItem("isAgeVerified") === "true") {
        ageVerification.style.display = "none";
    }

    // Пока что нет бека, поэтому мы не можем блокать доступ к сайту, кто указал меньше 18 лет
    for (const button of ageVerificationButton) {
        button.addEventListener("click", () => {
            localStorage.setItem("isAgeVerified", "true");
            ageVerification.style.display = "none";
        });
    }
}

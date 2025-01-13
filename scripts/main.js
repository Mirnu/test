import { initAgeVerification } from "./age-verification.js";
import { initCookiePreferences } from "./cookie-preferences.js";
import { initHamburger } from "./hamburger.js";

function bootstrap() {
    initAgeVerification();
    initCookiePreferences();
    initHamburger();
}

bootstrap();

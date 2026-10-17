// ─────────────────────────────────────────────────────────────
// When Tagshot is live, paste its App Store link here, e.g.
//   const APP_STORE_URL = "https://apps.apple.com/app/id6742912345";
// Every download button on the site switches from "Coming soon" to a real link.
// ─────────────────────────────────────────────────────────────
const APP_STORE_URL = "https://apps.apple.com/us/app/tagshot-organize-screenshots/id6819395180";

document.querySelectorAll("[data-store]").forEach((button) => {
  const top = button.querySelector("small");
  if (APP_STORE_URL) {
    button.href = APP_STORE_URL;
    button.removeAttribute("aria-disabled");
  } else {
    button.removeAttribute("href");
    button.setAttribute("aria-disabled", "true");
    if (top) top.textContent = "Coming soon to the";
    else button.textContent = "Coming soon";
  }
});

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

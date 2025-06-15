"use strict";
(() => {
  // src/content_script.ts
  var TARGET = ".ev-open-modal-paywall-REQUIRE_LOGIN";
  var removeIfFound = () => document.querySelectorAll(TARGET).forEach((el) => el.remove());
  removeIfFound();
  new MutationObserver(removeIfFound).observe(document.documentElement, { childList: true, subtree: true });
})();

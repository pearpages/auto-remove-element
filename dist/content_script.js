"use strict";
(() => {
  // src/content_script.ts
  var TARGETS = [
    ".ev-open-modal-paywall-REQUIRE_LOGIN",
    ".ev-open-modal-paywall-REQUIRE_ENTITLEMENT"
  ];
  var removeIfFound = () => TARGETS.forEach((target) => {
    document.querySelectorAll(target).forEach((el) => el.remove());
  });
  removeIfFound();
  new MutationObserver(removeIfFound).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();

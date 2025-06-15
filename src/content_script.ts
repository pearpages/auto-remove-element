const TARGET = '.ev-open-modal-paywall-REQUIRE_LOGIN';           // adjust selector

const removeIfFound = () =>
  document.querySelectorAll(TARGET).forEach(el => el.remove());

removeIfFound();
new MutationObserver(removeIfFound)
  .observe(document.documentElement, { childList: true, subtree: true });

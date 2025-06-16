const TARGETS = [
  ".ev-open-modal-paywall-REQUIRE_LOGIN",
  ".ev-open-modal-paywall-REQUIRE_ENTITLEMENT",
]; // adjust selectors

const removeIfFound = () => TARGETS.forEach((target) => {
document.querySelectorAll(target).forEach((el) => el.remove());
});
  

removeIfFound();
new MutationObserver(removeIfFound).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

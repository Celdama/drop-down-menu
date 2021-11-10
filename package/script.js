const dropDown = (() => {
  const dropDownBtn = Array.from(document.querySelectorAll('.drop-down-btn-wrapper'));
  const dropDownMenu = Array.from(document.querySelectorAll('.drop-down-list'));
  const dropDownIcon = Array.from(document.querySelectorAll('.bi-chevron-right'));

  const toggleDropDownMenu = (element, target) => {
    element.classList.toggle('visible');
    element.classList.toggle('not-visible');

    dropDownIcon.forEach((icon) => {
      if (target === icon.parentElement.offsetParent) {
        icon.classList.toggle('chevron-rotate');
      }
    });
  };

  const toggleListener = () => {
    dropDownBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        dropDownMenu.forEach((item) => {
          if (item.offsetParent === e.target.offsetParent) {
            toggleDropDownMenu(item, e.target.offsetParent);
          }
        });
      });
    });
  };

  return {
    toggleListener,
  };
})();

dropDown.toggleListener();

module.exports = dropDown;

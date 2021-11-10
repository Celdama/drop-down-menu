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

// dropDownBtn.addEventListener('click', () => {
//   toggleDropDownMenu();
// });

dropDownBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    dropDownMenu.forEach((item) => {
      if (item.offsetParent === e.target.offsetParent) {
        toggleDropDownMenu(item, e.target.offsetParent);
      }
    });
  });
});

// document.addEventListener('click', (e) => {
//   if (e.target !== dropDownBtn.childNodes[1]
//     && e.target !== dropDownBtn) {
//     if (dropDownMenu.classList.contains('visible')) {
//       toggleDropDownMenu();
//     }
//   }
// });

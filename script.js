const dropDownBtn = document.querySelector('.drop-down-btn-wrapper');
const dropDownMenu = document.querySelector('.drop-down-list');
const dropDownIcon = document.querySelector('.bi-chevron-right');

const toggleDropDownMenu = () => {
  dropDownMenu.classList.toggle('visible');
  dropDownMenu.classList.toggle('not-visible');
  dropDownIcon.classList.toggle('chevron-rotate');
};

dropDownBtn.addEventListener('click', () => {
  toggleDropDownMenu();
});

document.addEventListener('click', (e) => {
  if (e.target !== dropDownBtn.childNodes[1]
    && e.target !== dropDownBtn) {
    if (dropDownMenu.classList.contains('visible')) {
      toggleDropDownMenu();
    }
  }
});

const dropDown = (() => {
  const dropDownBtn = Array.from(document.querySelectorAll('.drop-down-btn-wrapper'));
  const dropDownMenu = Array.from(document.querySelectorAll('.drop-down-list'));
  const dropDownIcon = Array.from(document.querySelectorAll('.bi-chevron-right'));
  const dropDownItems = Array.from(document.querySelectorAll('.drop-item'));

  const rotateChevron = (target) => {
    dropDownIcon.forEach((icon) => {
      if (target === icon.parentElement.offsetParent) {
        icon.classList.toggle('chevron-rotate');
      }
    });
  };

  const droppedMenu = (target = null) => {
    dropDownMenu.forEach((item) => {
      if (item.offsetParent === target) {
        item.classList.toggle('visible');
        item.classList.toggle('not-visible');
        rotateChevron(target);
      }
    });
  };

  const closeDropDownMenuWithDropItem = () => {
    dropDownItems.forEach((item) => {
      item.addEventListener('click', () => {
        const visi = document.querySelector('.visible');

        visi.classList.toggle('visible');
        visi.classList.toggle('not-visible');
        rotateChevron(visi.offsetParent);
      });
    });
  };

  const toggleDropMenuWith = () => {
    dropDownBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        droppedMenu(e.target.offsetParent);
      });
    });
    closeDropDownMenuWithDropItem();
  };

  return {
    toggleDropMenuWith,
  };
})();

window.onload = () => {
  dropDown.toggleDropMenuWith();
};

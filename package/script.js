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

  const toggleVisibleClass = (element) => {
    element.classList.toggle('visible');
    element.classList.toggle('not-visible');
    rotateChevron(element.offsetParent);
  };

  const droppedMenu = (target = null) => {
    dropDownMenu.forEach((item) => {
      if (item.offsetParent === target) {
        toggleVisibleClass(item);
      }
    });
  };

  const checkClickOutsideDroppedMenu = () => {
    window.addEventListener('click', (e) => {
      const elementToCheck = e.target.offsetParent.className;
      if (!elementToCheck.includes('drop-down-list') && !elementToCheck.includes('drop-down-section')) {
        const visibleElement = document.querySelector('.visible');
        if (visibleElement) {
          toggleVisibleClass(visibleElement);
        }
      }
    });
  };

  const closeDropDownMenuWithDropItem = () => {
    dropDownItems.forEach((item) => {
      item.addEventListener('click', () => {
        const visibleElement = document.querySelector('.visible');
        toggleVisibleClass(visibleElement);
      });
    });
  };

  const toggleDropMenu = () => {
    dropDownBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        droppedMenu(e.target.offsetParent);
      });
    });
    closeDropDownMenuWithDropItem();
    checkClickOutsideDroppedMenu();
  };

  return {
    toggleDropMenu,
  };
})();

window.onload = () => {
  dropDown.toggleDropMenu();
};

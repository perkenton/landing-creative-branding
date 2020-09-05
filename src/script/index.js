// import '../pages/index.css';

'use strict';

(function() {

  const readMoreButton = document.querySelector('.button_black');

  function noMore() {
    readMoreButton.textContent = 'No more';
    readMoreButton.removeEventListener('click', noMore);
  }

  readMoreButton.addEventListener('click', noMore);

})();
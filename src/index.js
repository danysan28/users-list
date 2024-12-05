import {
  loadContacts,
  filterContacts,
  drawContacts,
  drawGroupedContacts,
} from "./main";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    let data = [];
    function render(e) {
      if (e) {
        e.preventDefault();
      }

      const query = $searchContact.elements.query.value;
      const filteredData = filterContacts(data, query);

      if ($checkbox.checked) {
        drawGroupedContacts(filteredData);
      } else {
        drawContacts(filteredData);
      }
    }

    loadContacts().then((info) => {
      data = info;
      render();
    });

    var $searchContact = document.getElementById("search-contact");

    var $checkbox = document.getElementById("group-list-by-letter");
    $checkbox.addEventListener("click", () => {
      render();
    });

    $searchContact.addEventListener("submit", render);
  });
})();

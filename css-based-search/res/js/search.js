var searchStyle = document.getElementById('search-style');
document.getElementById('search-box').addEventListener(
  'input', function() {
    if (!this.value) {
      searchStyle.innerHTML = '';
      return;
    }

    searchStyle.innerHTML = ".searchable:not([data-index*=\"" +
      this.value.toLowerCase() + "\"]) { display: none; }"
  }
);

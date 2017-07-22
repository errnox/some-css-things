var searchStyle = document.getElementById('search-style');
document.getElementById('search-box').addEventListener('input', function() {
  if (!this.value) {
    searchStyle.innerHTML = '';
    return
  }

  searchStyle.innerHTML = this.value.toLowerCase() +
    ' { background-color: rgba(255, 0, 0, 0.2) !important; }'

    // ' { background-color: rgba(255, 0, 0, 0.2) !important; transform: scale(1.1) rotate(-2deg) !important; transition: transform ease-out 150ms !important; }'

    // ' { background-color: rgba(255, 0, 0, 0.2) !important; transition: all ease-out 150ms; }'
});

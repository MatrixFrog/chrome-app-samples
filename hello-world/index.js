
window.onload = function() {
  window.addEventListener('keyup', function(e) {
    if (e.ctrlKey && e.keyCode == 87) {
      chrome.app.window.current().close();
    }
  });
};

(function () {
  function debounce(func, delay) {
    let timeoutId;

    return function() {
      const context = this;
      const args = arguments;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  function sendMessage(event) {
    let textarea_value = event.target.value;
    chrome.runtime.sendMessage(textarea_value).then(res => {
      console.log(res);
    })
  }

  const debouncedSearch = debounce(sendMessage, 5000);

  document.addEventListener('keyup', debouncedSearch);

} ())

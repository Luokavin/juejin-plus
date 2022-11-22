function handleCopy() {
  document.body.oncopy = async (event) => {
    console.log(event);
    
    const clipboard = await navigator.clipboard.readText();
    console.log(clipboard);
  };
}

chrome.storage.sync.get('clear-copyright', (result) => {
  result['clear-copyright'] && handleCopy();
});

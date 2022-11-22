chrome.storage.sync.get('clear-copyright', (result) => {
  result['clear-copyright'] && console.log(111);
  console.log(222);
});

function skipJumpPrompt() {
  const url = new URL(window.location.href);
  
  if(!url.searchParams.has('target')) {
    return;
  }
  
  window.location.href = url.searchParams.get('target');
}

chrome.storage.sync.get('auto-skip', (result) => {
  result['auto-skip'] && skipJumpPrompt();
});

async function handleCopy() {
  console.log('[juejin-plus] 正在监听剪贴板');
  
  const storage = chrome.storage.sync.get('clear-copyright');
  
  if(!storage['clear-copyright']) {
    return;
  }
  
  const splitString = '\n作者';
  
  let clipboard = await navigator.clipboard.readText();
  
  if(clipboard.indexOf(splitString) === -1) {
    return;
  }
  
  clipboard = clipboard.split(splitString)[0];
  
  await navigator.clipboard.writeText(clipboard);
  
  console.log(await navigator.clipboard.readText());
}

document.body.oncopy = handleCopy;

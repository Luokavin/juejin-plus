async function handleCopy() {
  // 获取本地存储中的数据
  const value = await getObjectFromLocalStorage('clear-copyright');
  
  // 如果本地存储中没有数据,或者数据为 false (未开启功能)，则直接返回
  if(value === false) {
    return;
  }
  
  // 判断字段
  const splitString = '\n作者';
  
  // 读取剪切板
  let clipboard = await navigator.clipboard.readText();
  
  // 判断是否包含字段
  if(clipboard.indexOf(splitString) === -1) {
    return;
  }
  
  // 截取字段
  clipboard = clipboard.split(splitString)[0];
  
  // 写入剪切板
  await navigator.clipboard.writeText(clipboard);
  
  // 打印剪切板内容
  console.log(await navigator.clipboard.readText());
}

(() => {
  // 监听复制事件
  document.body.oncopy = handleCopy;
  
  console.log('[juejin-plus] 正在监听剪贴板...');
})();

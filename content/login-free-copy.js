const handleClick = async (event) => {
  let code = event.target.parentElement.innerText;
  
  // 判断字段
  const splitString = '\n复制代码';
  
  // 判断是否包含字段
  if(code.indexOf(splitString) === -1) {
    return;
  }
  
  // 截取字段
  code = code.split(splitString)[0];
  
  // 写入剪切板
  await navigator.clipboard.writeText(code);
  
  // 打印剪切板内容
  console.log(await navigator.clipboard.readText());
};

const initialization = async () => {
  // 获取本地存储中的数据
  const value = await getObjectFromLocalStorage('login-free-copy');
  
  // 如果本地存储中没有数据,或者数据为 false (未开启功能)，则直接返回
  if(value === false) {
    return;
  }
  
  const codeElements = document.querySelectorAll('code');
  
  codeElements.forEach((element) => {
    if(!element.querySelector('.copy-code-btn')) {
      return;
    }
    
    const copyButtonElement = document.createElement('span');
    
    copyButtonElement.innerText = '复制代码';
    copyButtonElement.classList.add('copy-code-btn', 'login-free-copy-btn');
    copyButtonElement.style.zIndex = '9999';
    copyButtonElement.onclick = handleClick;
    
    element.appendChild(copyButtonElement);
  });
};

(async () => {
  await initialization();
})();

async function skipJumpPrompt() {
  const value = await getObjectFromLocalStorage('auto-skip');
  
  if(value === false) {
    return;
  }
  
  const url = new URL(window.location.href);
  
  if(!url.searchParams.has('target')) {
    return;
  }
  
  document.body.innerText = '自动跳转中，请稍后...';
  document.body.style.cssText = `
  width: 100vw;
  height: 100vh;
  
  margin: 0;
  padding: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 3rem;
  font-weight: bold;
  
  color: #409eff;
  `;
  
  window.location.href = url.searchParams.get('target');
}

(async () => {
  await skipJumpPrompt();
})();

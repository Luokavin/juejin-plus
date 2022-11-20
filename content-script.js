const listA = document.querySelectorAll('a');

listA.forEach((a) => {
  const url = new URL(a.href);
  
  if(url.host !== 'link.juejin.cn') {
    return;
  }
  
  if(!url.searchParams.has('target')) {
    return;
  }
  
  console.log(`link: ${a.href} -> ${url.searchParams.get('target')}`);
  
  a.href = url.searchParams.get('target');
});

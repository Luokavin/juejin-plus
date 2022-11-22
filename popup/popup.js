const handleClick = (event) => {
  const element = document.getElementById(event.target.id);
  
  chrome.storage.sync.set({ [event.target.id]: element.checked });
};

window.onload = () => {
  const listCheckbox = document.querySelectorAll('input[type="checkbox"]');
  
  listCheckbox.forEach(element => {
    element.addEventListener('click', handleClick);
    
    chrome.storage.sync.get(element.id, (result) => {
      result[element.id] || chrome.storage.sync.set({ [element.id]: false });
      element.checked = result[element.id];
    });
  });
};

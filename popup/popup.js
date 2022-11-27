const handleClick = async (event) => {
  const element = document.getElementById(event.target.id);
  
  await saveObjectInLocalStorage({ [event.target.id]: element.checked });
};

window.onload = () => {
  const listCheckbox = document.querySelectorAll('input[type="checkbox"]');
  
  listCheckbox.forEach(async element => {
    element.addEventListener('click', handleClick);
    
    const value = await getObjectFromLocalStorage(element.id);
    
    if(value === undefined) {
      await saveObjectInLocalStorage({ [element.id]: true });
      element.checked = true;
      return;
    }
    
    element.checked = value;
  });
};

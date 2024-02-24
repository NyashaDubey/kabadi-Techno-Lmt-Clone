const toggleBtnIcon=document.querySelector('.menu i');
const dropDownMenu=document.querySelector('.dropdown_menu');

toggleBtnIcon.onclick=function(){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList=isOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
  
  
}
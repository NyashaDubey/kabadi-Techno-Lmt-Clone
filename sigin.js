
const toggleBtnIcon=document.querySelector('.menu i');
const dropDownMenu=document.querySelector('.dropdown_menu');

toggleBtnIcon.onclick=function(){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList=isOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
  
  
}




  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);

      this.classList.toggle('fa-eye-slash');
  });





document.addEventListener('DOMContentLoaded', function () {
    var text = '"Be a part of solution,\nnot a part of pollution."';
    var h1Element = document.getElementById('typing-effect');
    var lines = text.split('\n');
    var lineIndex = 0;
    var charIndex = 0;

    function typeText() {
        if (lineIndex < lines.length) {
            var line = lines[lineIndex];
            h1Element.innerHTML += line.charAt(charIndex);
            charIndex++;

            if (charIndex === line.length) {
                h1Element.innerHTML += '<br>';
                charIndex = 0;
                lineIndex++;
            }

            setTimeout(typeText, 50); 
        }
    }

    typeText();
});


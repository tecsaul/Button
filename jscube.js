let cube = document.querySelector('.cube');
let regresar = document.querySelector('#regresar');
let radioGroup = document.querySelector('.radio-group');
let currentClass = '';

regresar.addEventListener('click', () => {
  window.location.href = '/button.html';
});

function changeSide() {
  let checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
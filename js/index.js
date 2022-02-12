// document.getElementsByClassName('btn')[0].style= "color:green;";
document.getElementById('btn').onclick = function () {
  document.getElementById('btn').textContent = 'Процес отримання гороскопу...';
  setTimeout(deleteForm,3000);
  setTimeout(changeText,4000)
};
function changeText () {
  document.getElementsByClassName('text-hhh')[0].textContent = 'По гороскопу ти лох';
}
function deleteForm() {
  document.getElementsByClassName('content-form')[0].style = 'display:none;';
}

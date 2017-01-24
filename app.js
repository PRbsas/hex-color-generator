function getColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
}
function setBackground() {
  var bgColor = getColor();
  document.body.style.background = bgColor;
  console.log(bgColor);
  document.getElementById('color').innerHTML += bgColor + '<br />';
}
document.querySelector('button').addEventListener('click', function(){
  bgColor = setBackground();
});
document.body.onkeyup = function(event){
  if(event.keyCode == 32){
    setBackground();
  }
}

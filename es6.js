function getColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}
function setBackground() {
  const bgColor = getColor();
  document.body.style.background = bgColor;
  console.log(bgColor);
  document.getElementById('color').innerHTML += `${bgColor}<br />`;
}
document.querySelector('button').addEventListener('click', () => {
  setBackground();
});
document.body.onkeyup = event => {
  if(event.keyCode === 32){
    setBackground();
  }
}

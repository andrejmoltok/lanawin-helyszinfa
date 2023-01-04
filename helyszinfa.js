const cont = document.getElementById('container');
const vilag = document.getElementById('vilag');
const varos = document.getElementById('varos');

cont.style.display = "flex";
cont.style.flexDirection = "row";
cont.style.justifyContent = "center";

vilag.innerHTML = "<canvas id='vilagt' width='600px' height='700px'></canvas>";
varos.innerHTML = "<canvas id='varost' width='600px' height='700px'></canvas>";

const vilagt = document.getElementById('vilagt');
const ctxvi = vilagt.getContext('2d');

const varost = document.getElementById('varost');
const ctxva = varost.getContext('2d');


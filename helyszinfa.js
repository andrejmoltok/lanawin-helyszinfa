const cont = document.getElementById('container');
const vilag = document.getElementById('vilag');
const varos = document.getElementById('varos');

cont.style.display = "flex";
cont.style.flexDirection = "row";
cont.style.justifyContent = "center";
cont.style.gap = '100px';

const vilagt = document.getElementById('vilagt');
const ctxvi = vilagt.getContext('2d');

const varost = document.getElementById('varost');
const ctxva = varost.getContext('2d');

const vilagterkep = document.createElement('IMG');
vilagterkep.setAttribute('src','./lanawin-vilagterkep3.jpg');
vilagterkep.setAttribute('id','lanawin');
vilagterkep.style.display = "none";
vilag.appendChild(vilagterkep);
const lanawin = document.getElementById('lanawin');

lanawin.addEventListener("load", (e) => {
    ctxvi.drawImage(lanawin, 0, 0, vilagterkep.width, vilagterkep.height, 0, 0, vilagt.width, vilagt.height);
});

const varosterkep = document.createElement('IMG');
varosterkep.setAttribute('src','./arthenior_varosterkep_2.jpg');
varosterkep.setAttribute('id','arthenior');
varosterkep.style.display = "none";
varos.appendChild(varosterkep);
const arthenior = document.getElementById('arthenior');

arthenior.addEventListener("load", (e) => {
    ctxva.drawImage(arthenior, 0, 0, varosterkep.width, varosterkep.height, 0, 0, varost.width, varost.height);
});
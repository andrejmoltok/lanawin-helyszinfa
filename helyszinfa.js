const cont = document.getElementById('container');
const vilag = document.getElementById('vilag');
const varos = document.getElementById('varos');

cont.style.display = "flex";
cont.style.flexDirection = "row";
cont.style.justifyContent = "space-between";
//cont.style.gap = '100px';

const vilagt = document.getElementById('vilagt');
const ctxvi = vilagt.getContext('2d');
ctxvi.globalCompositeOperation = "destination-over";

const vilagterkep = document.createElement('IMG');
vilagterkep.setAttribute('src','./lanawin-vilagterkep3.jpg');
vilagterkep.setAttribute('id','lanawin');
vilagterkep.style.display = "none";
vilag.appendChild(vilagterkep);
const lanawin = document.getElementById('lanawin');

lanawin.addEventListener("load", function() {
    ctxvi.drawImage(lanawin, 0, 0, vilagterkep.width, vilagterkep.height, 0, 0, vilagt.width, vilagt.height);
});

let elemLeft = vilagt.offsetLeft + vilagt.clientLeft;
let elemTop = vilagt.offsetTop + vilagt.clientTop;
let elements = [];
let count = 0;

vilagt.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
                console.log(count);
                console.log(element.thisName);
                alert(element.thisName);
                if (element.thisName !== 'Arthenior' && count % 2 !== 0) {
                    artheniorOff();
                    count = 0;
                } else if (element.thisName === 'Arthenior' && count % 2 !== 0) {
                    artheniorOff();
                    count = 0;
                } else if (element.thisName === 'Arthenior') {
                    count++;
                    artheniorOn();
                } else {
                    return;
                }
        } 
    })
}, false);


elements.push({
    color: 'rgba(0,0,0,0)',
    width: 60,
    height: 35,
    top: 350,
    left: 450,
    thisName: 'Arthenior'
},
{
    color: 'rgba(0,0,0,0)',
    width: 25,
    height: 20,
    top: 310,
    left: 455,
    thisName: 'Arthenior K??zel??ben'
},
{
    color: 'rgba(0,0,0,0)',
    width: 25,
    height: 20,
    top: 255,
    left: 550,
    thisName: 'F??ves puszta'
},
{
    color: 'rgba(0,0,0,0)',
    width: 25,
    height: 20,
    top: 450,
    left: 505,
    thisName: 'Sz??nt??f??ldek'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 468,
    left: 450,
    thisName: 'Amon Ruadh'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 465,
    left: 365,
    thisName: 'Kik??t??i Erd??s??g'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 410,
    left: 330,
    thisName: 'Krenkataur Barlangrendszer'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 245,
    left: 370,
    thisName: 'Erd??m??lye'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 200,
    left: 455,
    thisName: 'Ingov??nyos vid??k'
},
{
    color: 'rgba(0,0,0,0)',
    width: 27,
    height: 22,
    top: 220,
    left: 480,
    thisName: 'Hold Karav??npihen?? romjai'
}
);

// Render elements.
elements.forEach(function(element) {
    ctxvi.fillStyle = element.color;
    ctxvi.fillRect(element.left, element.top, element.width, element.height);
});


function artheniorOn() {
    varos.innerHTML = "<canvas id='varost' width='700px' height='500px'></canvas>";
    const varost = document.getElementById('varost');
    const ctxva = varost.getContext('2d');
    const varosterkep = document.createElement('IMG');
    varosterkep.setAttribute('src','./arthenior_varosterkep_2.jpg');
    varosterkep.setAttribute('id','arthenior');
    varosterkep.style.display = "none";
    varos.appendChild(varosterkep);
    const arthenior = document.getElementById('arthenior');

    arthenior.addEventListener("load", function() {
        ctxva.drawImage(arthenior, 0, 0, varosterkep.width, varosterkep.height, 0, 0, varost.width, varost.height);
    });
}

function artheniorOff() {
    const vt = document.getElementById('arthenior');
    const varost = document.getElementById('varost');
    vt.remove();
    varost.remove();
}
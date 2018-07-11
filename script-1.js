var operation = '';
var a;
var b;
var val = '';
var deci = false;
var chiffres = document.getElementsByClassName('chiffre');
for (var i = 0; i < chiffres.length; i++) {
    var chiffre = chiffres[i]
    var click_num = function () {
        if (document.getElementById('zone_text').value == 'NaN' || val == 'egal') {
            document.getElementById('zone_text').value = this.value;
            val ='';
        } else {
            document.getElementById('zone_text').value = document.getElementById('zone_text').value + this.value;
        }
    }
    chiffre.addEventListener('click', click_num)
}

var CE = document.getElementById('CE');
var click_CE = function () {
    document.getElementById('zone_text').value = '';
    a = 0;
    b = 0;
    operation = '';
    val = '';
    deci = false;
    
}
CE.addEventListener('click', click_CE);

var C = document.getElementById('C');
var click_C = function () {
    document.getElementById('zone_text').value = document.getElementById('zone_text').value.slice(0, (document.getElementById('zone_text').value.length - 1));
}
C.addEventListener('click', click_C)


var dot = document.getElementById('dot');
var virgule = function () {
    for (var i = 0; i < document.getElementById('zone_text').value.length ; i++) {
        if (document.getElementById('zone_text').value[i] == '.'){
            deci = true;
        }
    }
    if (!deci) {
        if (document.getElementById('zone_text').value == 'NaN' || document.getElementById('zone_text').value == '') {
            document.getElementById('zone_text').value = '0.';
        } else {
            document.getElementById('zone_text').value = document.getElementById('zone_text').value + '.';
        }
    }
}
dot.addEventListener('click', virgule);

var plus = document.getElementById('plus');
var somme = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        a = parseFloat(document.getElementById('zone_text').value);
        document.getElementById('zone_text').value = '';
        operation = 'somme';
        val = '';
        deci = false;
    }
}
plus.addEventListener('click', somme);

var moins = document.getElementById('moins');
var soustraction = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        a = parseFloat(document.getElementById('zone_text').value);
        document.getElementById('zone_text').value = '';
        operation = 'soustraction';
        val = '';
        deci = false;
    }   
}
moins.addEventListener('click', soustraction);

var fois = document.getElementById('fois');
var multiplication = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        a = parseFloat(document.getElementById('zone_text').value);
        document.getElementById('zone_text').value = '';
        operation = 'multiplication';
        val = '';
        deci = false;
    }
}
fois.addEventListener('click', multiplication)

var division = document.getElementById('division');
var divide = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        a = parseFloat(document.getElementById('zone_text').value);
        document.getElementById('zone_text').value = '';
        operation = 'divide';
        val = '';
        deci = false;
    }   
}
division.addEventListener('click', divide)

var plusoumoins = document.getElementById('plusoumoins');
var plus_moins = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = -parseFloat(document.getElementById('zone_text').value);
    }   
}
plusoumoins.addEventListener('click', plus_moins)

var carre = document.getElementById('carre');
var puissance_2 = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = parseFloat(document.getElementById('zone_text').value * document.getElementById('zone_text').value);
    }
    val = 'egal'
}
carre.addEventListener('click', puissance_2)

var racine = document.getElementById('racine');
var racine_carre = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = Math.sqrt(parseFloat(document.getElementById('zone_text').value));
    }
    val = 'egal'
}
racine.addEventListener('click', racine_carre)

var cos = document.getElementById('cos');
var cosinus = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = Math.cos((parseFloat(document.getElementById('zone_text').value)) * Math.PI / 180);
    }
    val = 'egal'
}
cos.addEventListener('click', cosinus)

var sin = document.getElementById('sin');
var sinus = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = Math.sin((parseFloat(document.getElementById('zone_text').value)) * Math.PI / 180);
    }
    val = 'egal'
}
sin.addEventListener('click', sinus)

var tan = document.getElementById('tan');
var tangente = function () {
    if (document.getElementById('zone_text').value != 'NaN' && document.getElementById('zone_text').value != '') {
        document.getElementById('zone_text').value = Math.tan((parseFloat(document.getElementById('zone_text').value)) * Math.PI / 180);
    }
    val = 'egal'
}
tan.addEventListener('click', tangente)

var egal = document.getElementById('egal');
var show = function () {
    if (val == 'egal') {
        a = parseFloat(document.getElementById('zone_text').value);
        if (operation == 'somme') {
            document.getElementById('zone_text').value = (a + b);            
        } else if (operation == 'soustraction') {
            document.getElementById('zone_text').value = (a - b);
        } else if (operation == 'multiplication') {
            document.getElementById('zone_text').value = (a * b);
        } else if (operation == 'divide') {
            document.getElementById('zone_text').value = (a / b);
        };
    } else {
        b = parseFloat(document.getElementById('zone_text').value);    
        if (operation == 'somme') {
            document.getElementById('zone_text').value = (a + b);
        } else if (operation == 'soustraction') {
            document.getElementById('zone_text').value = (a - b);
        } else if (operation == 'multiplication') {
            document.getElementById('zone_text').value = (a * b);
        } else if (operation == 'divide') {
            document.getElementById('zone_text').value = (a / b);
        };
        val = 'egal';
    }

    // a = parseFloat(document.getElementById('zone_text').value);
}
egal.addEventListener('click', show)
var chiffres = document.getElementsByClassName('chiffre');
for (var i = 0; i < chiffres.length; i++) {
    var chiffre = chiffres[i]
    var click_num = function () {
        // alert(this.value)
        document.getElementById('zone_text').value = document.getElementById('zone_text').value + this.value;
    }
    chiffre.addEventListener('click', click_num)
}

var CE = document.getElementById('CE');
var click_CE = function () {
    document.getElementById('zone_text').value = '';
}
CE.addEventListener('click', click_CE);

var C = document.getElementById('C');
var click_C = function () {
    document.getElementById('zone_text').value = document.getElementById('zone_text').value.slice(0, (document.getElementById('zone_text').value.length - 1));
}
C.addEventListener('click', click_C)
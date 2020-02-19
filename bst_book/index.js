data = 0;
function iniated(){
	var hd = document.getElementById('headers');
    var ma = document.getElementById("mainArticles");
    ma.style.backgroundColor = "#d47777";
    hd.style.backgroundColor = 'red';
    ma.innerHTML = data;
 
}

window.addEventListener('load',iniated,false);
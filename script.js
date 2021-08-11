console.log('tes');
var satuan1 = "";
var satuan2 = "";
var puluhan1 = "";
var puluhan2 = "";
var ratusan1 = "";
var ratusan2 = "";
var ribuan1 = "";
var ribuan2 = "";
var bilangan1 = "";
var bilangan2 = "";
var bool = true;
var arrBenar = [];
var arrSalah = [];
function myFunction() {
	bool = true;
	while(bool){
	satuan1 = Math.floor(Math.random()*10);
	satuan2 = Math.floor(Math.random()*10);
	puluhan1 = Math.floor(Math.random()*10);
	puluhan2 = Math.floor(Math.random()*10);
	ratusan1 = Math.floor(Math.random()*10);
	ratusan2 = Math.floor(Math.random()*10);
	ribuan1 = Math.floor(Math.random()*10);
	ribuan2 = Math.floor(Math.random()*10);
	
	if(satuan1 < satuan2 && puluhan1 < puluhan2 && ribuan1 > ribuan2 && ribuan1 < 7 && ribuan2 > 0){
		bilangan1 = parseInt(String(ribuan1)+String(ratusan1)+String(puluhan1)+String(satuan1));
		bilangan2 = parseInt(String(ribuan2)+String(ratusan2)+String(puluhan2)+String(satuan2));
		
		const judul = document.getElementById('soal');
		judul.innerHTML = bilangan1 + " - " + bilangan2;
		bool = false;
	}	
  	}
}

function periksa() {
var x = document.getElementById('jawab');
var y = document.getElementById('benar');
var z = document.getElementById('salah');
var jawab = x.value;
var jawaban = parseInt(bilangan1-bilangan2);
	console.log(jawab);
	console.log(jawaban);
	if(jawab == bilangan1-bilangan2){
		alert('benar');
		myFunction();
		x.value = "";
		arrBenar.push(true);
		y.innerHTML = arrBenar.length;
	}else{
		alert('salah');
		x.value = "";
		arrSalah.push(true);
		z.innerHTML = arrSalah.length;
	}
	
}

var index=0;
var warna = ["red", "yellow", "green"];
var huruf = ["A", "B", "C"];
var angka = ["1", "2", "3"];

var buah = new Array(2);
buah[0] = new Image(50, 50);
buah[0].src = "../../../../img_terapi/buah/0.png";
buah[1] = new Image(50, 50);
buah[1].src = "../../../../img_terapi/buah/1.png";
buah[2] = new Image(50, 50);
buah[2].src = "../../../../img_terapi/buah/2.png";

var binatang = new Array(2);
binatang[0] = new Image(50, 50);
binatang[0].src = "../../../../img_terapi/hewan/0.png";
binatang[1] = new Image(50, 50);
binatang[1].src = "../../../../img_terapi/hewan/1.png";
binatang[2] = new Image(50, 50);
binatang[2].src = "../../../../img_terapi/hewan/2.png";




function onclick_binatang1() {

  index=index-1;
  if(index<0){
    index=2;
  }


  document.getElementById('demo').style.backgroundImage = 'url('+ binatang[index].src + ')';
  document.getElementById('demo').style.backgroundSize = 'contain';
  document.getElementById('demo').style.backgroundRepeat = 'no-repeat';
  document.getElementById('demo').style.backgroundPosition = 'center center';

  document.getElementById("suara1").play();
  if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_binatang2() {

  index=index+1;
  if(index>2){
    index=0;
  }

  document.getElementById('demo').style.backgroundImage = 'url('+ binatang[index].src + ')';
  document.getElementById('demo').style.backgroundSize = 'contain';
  document.getElementById('demo').style.backgroundRepeat = 'no-repeat';
  document.getElementById('demo').style.backgroundPosition = 'center center';

  document.getElementById("suara1").play();
  if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_buah1() {

  index=index-1;
  if(index<0){
    index=2;
  }


  document.getElementById('demo').style.backgroundImage = 'url('+ buah[index].src + ')';
  document.getElementById('demo').style.backgroundSize = 'contain';
  document.getElementById('demo').style.backgroundRepeat = 'no-repeat';
  document.getElementById('demo').style.backgroundPosition = 'center center';

  document.getElementById("suara1").play();
  if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_buah2() {

  index=index+1;
  if(index>2){
    index=0;
  }

  document.getElementById('demo').style.backgroundImage = 'url('+ buah[index].src + ')';
  document.getElementById('demo').style.backgroundSize = 'contain';
  document.getElementById('demo').style.backgroundRepeat = 'no-repeat';
  document.getElementById('demo').style.backgroundPosition = 'center center';

  document.getElementById("suara1").play();
  if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_warna1() {

  index=index-1;
  if(index<0){
    index=2;
  }


  document.getElementById('demo').style.backgroundColor = warna[index];

  document.getElementById("suara1").play();
  if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_warna2() {

  index=index+1;
  if(index>2){
    index=0;
  }


  document.getElementById('demo').style.backgroundColor = warna[index];

  document.getElementById("suara1").play();
  if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
  }

}


function onclick_huruf1() {
  //alert('huruf 1');
  index=index-1;
  if(index<0){
    index=2;
  }

  document.getElementById("demo").innerHTML = huruf[index];
  $('#demo').flowtype({fontRatio:2,maxFont:400});
  document.getElementById("suara1").play();
  if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_huruf2() {
  //alert('huruf 2');
  index=index+1;
  if(index>2){
    index=0;
  }

  document.getElementById("demo").innerHTML = huruf[index];
  $('#demo').flowtype({fontRatio:2,maxFont:400});
  document.getElementById("suara1").play();
  if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
  }
}

function onclick_angka1() {

  index=index-1;
  if(index<0){
    index=2;
  }

  document.getElementById("demo").innerHTML = angka[index];
  $('#demo').flowtype({fontRatio:2,maxFont:400});
  document.getElementById("suara1").play();
  if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
  }

}

function onclick_angka2() {

  index=index+1;
  if(index>2){
    index=0;
  }


  document.getElementById("demo").innerHTML = angka[index];
  $('#demo').flowtype({fontRatio:2,maxFont:400});
  document.getElementById("suara1").play();
  if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 6500)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
  }
}


var p=0;
sessionStorage.setItem('benarsimpan', p);
                   
var q=0;
sessionStorage.setItem('salahsimpan', q);

function gambarx(i)  {

      var a=i;


      if(a==2){

        var a1=document.getElementById("gambar2").src;

        var x=document.getElementById("gambary").src;
          
            if(a1==x){
                document.getElementById("suarax").play();
                var f= document.getElementById("tombol").value;
                if(f==3){
                      iden(3);
                }

                if(f==10){
                  iden(10);
                }

                if(f==11){
                  iden(11);
                }

                if(f==12){
                  iden(12);
                }

                if(f==21){
                  iden(21);
                }

                if(f==22){
                  iden(22);
                }
                //iden(3);
                //banding();
                 p++;
                alert(p);
                sessionStorage.setItem('benarsimpan', p);
                }
            else{
               document.getElementById("suaray").play();
                q++;
                alert(q);
                sessionStorage.setItem('salahsimpan', q);
              }
       
      }
      
       if(a==3){

        var a1=document.getElementById("gambar3").src;

        var x=document.getElementById("gambary").src;

  
            if(a1==x){
                document.getElementById("suarax").play();

                var f= document.getElementById("tombol").value;
                if(f==3){
                      iden(3);
                }

                if(f==10){
                  iden(10);
                }

                if(f==11){
                  iden(11);
                }

                if(f==12){
                  iden(12);
                }

                if(f==21){
                  iden(21);
                }

                if(f==22){
                  iden(22);
                }

                //iden(3);
                //banding();
                 p++;
                alert(p);
                sessionStorage.setItem('benarsimpan', p);
                
            }
            else{
               document.getElementById("suaray").play();
                 q++;
                alert(q);
                sessionStorage.setItem('salahsimpan', q);
              
            }
       
      }

       if(a==4){

        var a1=document.getElementById("gambar4").src;

        var x=document.getElementById("gambary").src;

       
            if(a1==x){
                document.getElementById("suarax").play();
                var f= document.getElementById("tombol").value;
                if(f==3){
                      iden(3);
                }

                if(f==10){
                  iden(10);
                }

                if(f==11){
                  iden(11);
                }

                if(f==12){
                  iden(12);
                }

                if(f==21){
                  iden(21);
                }

                if(f==22){
                  iden(22);
                }
               // iden(3);
               // banding();
                 p++;
                alert(p);
                sessionStorage.setItem('benarsimpan', p);
                
            }
            else{
               document.getElementById("suaray").play();
                 q++;
                alert(q);
                sessionStorage.setItem('salahsimpan', q);
              
            }
       
      }

    
  }

  function pro1(){
    
    var tidak="tidak ada dalam fitur ini";
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
   
    if(selectedValue==1){
      document.getElementById("m1").style.display="";
      document.getElementById("m2").style.display="";
      document.getElementById("m3").style.display="";



    

      document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" ><img id="gambar2"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>'

    }
    if(selectedValue==2){
      document.getElementById("m1").style.display="";
      document.getElementById("m2").style.display="";
      document.getElementById("m3").style.display="none";

       document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(2)" ><img id="gambar2" src="../../../../img_terapi/hewan/1.png"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>'

    }
    if(selectedValue==3){
      document.getElementById("m1").style.display="";
      document.getElementById("m2").style.display="none";
      document.getElementById("m3").style.display="none";

    document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(2)" ><img id="gambar2" src="../../../../img_terapi/hewan/1.png"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(4)" ><img id="gambar4" src="../../../../img_terapi/hewan/2.png" height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>'


    }
    if(selectedValue==4){
      alert(tidak);
    }
    if(selectedValue==5){
      alert(tidak);
    }
  }

function mod(){
    

    var selectMod = document.getElementById("selectMod");
    var selectedMod = selectMod.options[selectMod.selectedIndex].value;
    

    var selectBox= document.getElementById("selectBox");
    var selectedBox = selectBox.options[selectBox.selectedIndex].value;


    
   
    if(selectedMod=='m1'){

      if(selectedBox==1){
          setTimeout( function(){document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" ><img id="gambar2"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);

          document.getElementById("ngisor").innerHTML='<button id="tombol" value="10" onclick="iden(10)">Ganti</button>'

          setTimeout( function(){document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="../../../../img_terapi/hewan/0.png" height = 450 width = 600 >';},1000);

             setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout( function(){   document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>';},2000);

      }

      if(selectedBox==2){
          setTimeout( function(){document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(2)" ><img id="gambar2" src="../../../../img_terapi/hewan/1.png"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);
          document.getElementById("ngisor").innerHTML='<button id="tombol" value="21" onclick="iden(21)">Ganti</button>'

         setTimeout( function(){ document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="img/hewan/1.png" height = 450 width = 600 >';},1000);

          setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout( function(){document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>';},2000);
        
      }

      if(selectedBox==3){
        setTimeout( function(){document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(2)" ><img id="gambar2" src="../../../../img_terapi/hewan/1.png"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(4)" ><img id="gambar4" src="../../../../img_terapi/hewan/2.png" height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);
        document.getElementById("ngisor").innerHTML='<button id="tombol" value="3" onclick="iden(3)">Ganti</button>'
        setTimeout( function(){ document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="../../../../img_terapi/hewan/0.png" height = 450 width = 600 >';},1000);
      
        setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout(  function(){document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>';},2000);

      }
    }

    if(selectedMod=='m2'){

      if(selectedBox==1){
         setTimeout( function(){ document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" ><img id="gambar2"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/1.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);

          document.getElementById("ngisor").innerHTML='<button id="tombol" value="11" onclick="iden(11)">Ganti</button>'

         setTimeout( function(){ document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="../../../../img_terapi/hewan/1.png" height = 450 width = 600 >';},1000);

               setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout( function(){document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>';},2000);
      }

      if(selectedBox==2){
        setTimeout( function(){ document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" onclick="javascript:gambarx(2)" ><img id="gambar2" src="../../../../img_terapi/hewan/2.png"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/0.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);

         document.getElementById("ngisor").innerHTML='<button id="tombol" value="22" onclick="iden(22)">Ganti</button>'

        setTimeout( function(){ document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="../../../../img_terapi/hewan/0.png" height = 450 width = 600 >';},1000);

              setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout( function(){ document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>';},2000);
      }

    }

  
    if(selectedMod=='m3'){

      if(selectedBox==1){
     setTimeout( function(){ document.getElementById("tabelopsi").innerHTML='<tr width="100%" align="center"><td width="20%" ><img id="gambar1"   height = 100 width = 100></td><td width="20%" ><img id="gambar2"   height = 100 width = 100></td><td width="20%"  onclick="javascript:gambarx(3)"><img id="gambar3"  src="../../../../img_terapi/hewan/2.png" height = 100 width = 100></td><td width="20%"  ><img id="gambar4"  height = 100 width = 100></td><td width="20%" ><img id="gambar5"   height = 100 width = 100></td></tr>';},1000);
      document.getElementById("ngisor").innerHTML='<button id="tombol" value="12" onclick="iden(12)">Ganti</button>'
     setTimeout( function(){ document.getElementById("nduwur").innerHTML='<img id="gambary" name="gambar" align="center" src="../../../../img_terapi/hewan/2.png" height = 450 width = 600 >';},1000);

           setTimeout( function(){document.getElementById("suara1").play();},1000);
      setTimeout( function(){document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>';},2000);


      }

    
    }


  }
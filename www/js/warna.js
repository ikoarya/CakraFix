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


function muni(){
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
}

function muni1(){
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
}

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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Binatang/0.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Buah/0.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==2){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
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
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==1){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
  }
  else if(index==0){
    document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
    document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="../../../../suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
  }
}


function gambarx(i)  {

  var a=i;

  if(a==2){

    var a1=document.getElementById("gambar2").src;

    var x=document.getElementById("gambary").src;

    if(a1==x){
      document.getElementById("suarax").play();
      iden();
    }
    else{
     document.getElementById("suaray").play();
   }

 }

 if(a==3){

  var a1=document.getElementById("gambar3").src;

  var x=document.getElementById("gambary").src;

  
  if(a1==x){
    document.getElementById("suarax").play();
    iden();
  }
  else{
   document.getElementById("suaray").play();
 }

}

if(a==4){

  var a1=document.getElementById("gambar4").src;

  var x=document.getElementById("gambary").src;


  if(a1==x){
    document.getElementById("suarax").play();
    iden();
  }
  else{
   document.getElementById("suaray").play();
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
  }
  if(selectedValue==2){
    document.getElementById("m1").style.display="";
    document.getElementById("m2").style.display="";
    document.getElementById("m3").style.display="none";


  }
  if(selectedValue==3){
    document.getElementById("m1").style.display="";
    document.getElementById("m2").style.display="none";
    document.getElementById("m3").style.display="none";
  }
  if(selectedValue==4){
    alert(tidak);
  }
  if(selectedValue==5){
    alert(tidak);
  }
}

function mod(){

  var selectBox = document.getElementById("selectMod");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  alert(selectedValue);

  var selectMod= document.getElementById("selectBox");
  var selectedMod = selectMod.options[selectMod.selectedIndex].value;
  alert(selectedMod);

}

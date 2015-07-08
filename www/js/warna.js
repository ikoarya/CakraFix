 var index=0;

 function muni(){
      document.getElementById("button1").disabled = true;
      document.getElementById("button2").disabled = true;
 }

  function muni1(){
      document.getElementById("button1").disabled = false;
      document.getElementById("button2").disabled = false;
 }


 function onclick_warna1() {
                
               	

                var huruf = ["green", "yellow", "red"];
               index=index+1;
               if(index>2){
               	index=0;
               }


                document.getElementsByTagName("div")[0].style.background=huruf[index];

                document.getElementById("suara1").play();
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                }
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                }

   }

 function onclick_warna2() {
               
               	

                var huruf = ["red", "yellow", "green"];
               index=index+1;
               if(index>2){
               	index=0;
               }


                document.getElementsByTagName("div")[0].style.background=huruf[index];

                document.getElementById("suara1").play();
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/2.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/1.mp3" type="audio/mpeg"></audio>'
                }
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Warna/0.mp3" type="audio/mpeg"></audio>'
                }
                
   }
 

function onclick_huruf1() {
            
        
            var huruf = ["C", "B", "A"];
            
            index=index+1;
               if(index>2){
               	index=0;
               }

               document.getElementById("demo").innerHTML = huruf[index];
                document.getElementById("suara1").play();
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                }
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                }
                
        }

function onclick_huruf2() {
            
        
            var huruf = ["A", "B", "C"];
             
            index=index+1;
               if(index>2){
               	index=0;
               }


                document.getElementById("demo").innerHTML = huruf[index];

                  document.getElementById("suara1").play();
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/C.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/B.mp3" type="audio/mpeg"></audio>'
                }
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Huruf/A.mp3" type="audio/mpeg"></audio>'
                }
        }

function onclick_angka1() {
            
            
            var huruf = ["3", "2", "1"];
            
            index=index+1;
               if(index>2){
               	index=0;
               }
               
               document.getElementById("demo").innerHTML = huruf[index];
               
                document.getElementById("suara1").play();
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                }
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
                }



        }

function onclick_angka2() {
            
            var huruf = ["1", "2", "3"];
            
            index=index+1;
               if(index>2){
               	index=0;
               }


                document.getElementById("demo").innerHTML = huruf[index];

                document.getElementById("suara1").play();
                if(index==2){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/3.mp3" type="audio/mpeg"></audio>'
                }
                if(index==1){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/2.mp3" type="audio/mpeg"></audio>'
                }
                if(index==0){
                document.getElementById("suara2x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara3x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 3000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
                document.getElementById("suara4x").innerHTML = '<audio id="suara2" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4000)" ><source id="suara2" src="suara/terapi/indo/Angka/1.mp3" type="audio/mpeg"></audio>'
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

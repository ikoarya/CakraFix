/*
    Versi 2

    Upgrade:
    a. Tambah kolom path gambar pada tabel user
    b. Tambah GetJmlAkun
    c. Tambah GetPicture
    d. Penyesuaian Halaman Pendaftaran   ==> EntryUser()
    e. Penyesuaian Halaman Utama  ==> HalamanUtama(), dan hitungUmur dan GetPicture
    f. Penyesuaian Halaman Terapi  ==> penambahan fitur pilihan (penyesuaian dengan pilihan)
    g. Penyesuaian Halaman evaluasi    ==> tesEvaluasi()
    h. Penyesuaian Halaman Display Evaluasi   ==> DisplayEvaluasi()
    i. Penyesuaian Halaman Pengaturan
    j. Penyesuaian Halaman Login
    
*/

      var db;
	    var shortName = 'Cakra';
	    var version = '1.0';
	    var displayName = 'CakraDB';
	    var maxSize = 65535;
	    var flagevaluasi = 0;
      var linkPT;
      var areaChartData, flagChar=0, barChart;
      var pathimage, indexbulan;
      var rowTotal, rowWaktu, panjangdat, arrMonth = [], arrYear = [], arrTotal = [], arrLabel = [], arrKomunikasi = [], arrSosial = [], arrKognitif = [], arrKebiasaan = [], arrDataBulan = [[]];
      
      var count1 = 0, count2 = 0, index1 = 0, index2 = 0;
      var putus1 = [], putus2 = [], gabung1 = [], gabung2 = [];
      var benar1, salah1, flag ;
      //var idn = [], disbenar = [], dissalah = [], distotal = [], bentotal = [], idhtml = [];
//============================================= notification error =======================================================

	    // this is called when an error happens in a transaction
	      function errorHandler(transaction, error) {
	         alert('Error: ' + error.message + ' code: ' + error.code);
	       
	      }

	      // this is called when a successful transaction happens
	      function successCallBack() {
	         alert("DEBUGGING: success");
	       
	      }
	       
	      function nullHandler(){};



//================================================ buat database ==================================================
	    function RunBody () {
	    	
	    	//alert("DEBUGGING: we are in the onBodyLoad() function");

	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}


         	db = openDatabase(shortName, version, displayName,maxSize);

         	db.transaction(function(tx){
				

				tx.executeSql('create table if not exists AKUN( ID integer primary key autoincrement, NAMA varchar(30) not null, TTL datetime not null, JK char(1) not null, LINKFOTO varchar(40))', [],nullHandler,errorHandler);

	            tx.executeSql('CREATE TABLE IF NOT EXISTS CATATAN(ID_CATATAN integer, tanggal DATETIME not null, catatanku text, countcatatan integer, FOREIGN KEY (ID_CATATAN) REFERENCES AKUN (ID))', [],nullHandler,errorHandler);

	            tx.executeSql('CREATE TABLE IF NOT EXISTS LAPORAN(ID_LAPORAN INTEGER PRIMARY KEY autoincrement, waktu date not null, komunikasi integer, sosial integer, kognitif integer, kebiasaan integer, total integer, countlaporan integer)', [],nullHandler,errorHandler);

	            //tx.executeSql('create table if not exists NILAI(ID_NILAI INTEGER PRIMARY KEY autoincrement, ID_AKUN REFERENCES AKUN(ID), BENAR integer not null, SALAH integer not null, DATA varchar(30) not null,TANGGAL date, COUNTNILAI integer)', [],nullHandler,errorHandler);
              tx.executeSql('create table if not exists NILAI(ID_NILAI INTEGER PRIMARY KEY autoincrement, BENAR integer not null, SALAH integer not null, KATEGORI_ASPEK integer not null, ASPEK varchar(30) not null, TANGGAL date)', [],nullHandler,errorHandler);
	            
	            tx.executeSql('create table if not exists PERTANYAAN (ID_PERTANYAAN integer primary key autoincrement, KATEGORI_TANYA varchar(50) not null, SOAL varchar(100) not null)', [],nullHandler,errorHandler);

	            tx.executeSql('create table if not exists TERAPI(ID_TERAPI integer primary key autoincrement, LEVEL integer, PILIHAN varchar(15), KATEGORI_TANYATERAPI varchar(50), ASPEK1 varchar(100), ASPEK2 varchar(100) )', [],nullHandler,errorHandler);

	            tx.executeSql('create table if not exists REWARD( ID_REW INTEGER PRIMARY KEY autoincrement, FILE varchar(150) not null, KATEGORI_REWARD varchar(30) not null, PILIHAN_REWARD varchar(30) not null)', [],nullHandler,errorHandler);

	            
	            /* Masih Ragu bisa atau gak
         		tx.executeSql('create table if not exists AKUN( ID integer primary key autoincrement, NAMA varchar(30) not null, TTL datetime not null, JK char(1) not null)', [],nullHandler,errorHandler);

         		tx.executeSql('CREATE TABLE IF NOT EXISTS CATATAN(ID_CATATAN integer primary key autoincrement, tanggal DATETIME not null, catatanku text, countcatatan integer autoincrement)', [],nullHandler,errorHandler);

         		tx.executeSql('CREATE TABLE IF NOT EXISTS LAPORAN(ID_LAPORAN integer primary key autoincrement, waktu integer not null, komunikasi integer, sosial integer, kognitif integer, kebiasaan integer, total integer, countlaporan integer autoincrement)', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists NILAI(ID_NILAI integer primary key autoincrement, BENAR integer not null, SALAH integer not null, DATA varchar(30) not null,TANGGAL date, COUNTNILAI integer)', [],nullHandler,errorHandler);
         		
         		tx.executeSql('create table if not exists PERTANYAAN (ID_PERTANYAAN integer primary key autoincrement, KATEGORI_TANYA varchar(50) not null, SOAL varchar(100) not null)', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists TERAPI(ID_TERAPI integer primary key autoincrement, LEVEL integer, KATEGORI_TANYATERAPI varchar(50), PILIHAN varchar(15), ASPEK1 varchar(100), ASPEK2 varchar(100) )', [],nullHandler,errorHandler);

         		tx.executeSql('create table if not exists REWARD( ID_REW integer primary key autoincrement, VIDEO_BENAR varchar(150), VIDEO_SALAH varchar(150), SUARA_BENAR varchar(150),SUARA_SALAH varchar(150)', [],nullHandler,errorHandler);*/

         	});

			filterquery();
	    }


//=============================================== filter query ======================================================

function filterquery(){

          db.transaction(function(transaction) {
             transaction.executeSql('SELECT * FROM TERAPI;', [],
               function(transaction, result) {
                //alert(result.rows.length);
               
                if (result.rows.length == 0) {
                  EntryTerapi();
                }
               },errorHandler);
           },errorHandler,nullHandler);

        }



//================================================= masukkan user baru =================================================

		function EntryUser(){

		//	alert("DEBUGGING: we are in the EntryUser() function");
	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}

          var tanggal = document.getElementById('tanggal').value;
          var bul = document.getElementById('bul').value;
          var tah = document.getElementById('tah').value;

          var getBirth = tanggal + '-' + bul + '-'+ tah;
          var link = pathimage;

         	db.transaction(function(transaction){

            transaction.executeSql('INSERT INTO AKUN(NAMA, TTL, JK, LINKFOTO) VALUES (?,?,?,?)',[$('#name').val(), getBirth, $('#jk').val(),link ],nullHandler,errorHandler);

            transaction.executeSql('SELECT NAMA FROM AKUN;', [],
             function(transaction, result) {
              var keluar = result.rows.length;
              if (keluar > 0) {
                alert("Selamat Anda berhasil terdaftar di Aplikasi CAKRA");  
                window.location.href = "utama.html";
              }
             },errorHandler);
         	});
		}


//================================================= UPDATE AKUN =============================================================

  function EditUser(){

    db.transaction(function(transaction) {
      var namaedit = "Aku";

      transaction.executeSql('UPDATE REWARD SET NAMA=?', [namaedit]);
      
      
    },errorHandler,nullHandler);

  }


  //================================================= DELETE AKUN ============================================================

  function HapusUser(){

    db.transaction(function(transaction) {
      
      transaction.executeSql('DELETE FROM AKUN WHERE ID_AKUN=?', ["1"]);
      
    },errorHandler,nullHandler);
  }


//=============================================== login ================================================================

    /* Beri nama id inputnya = username
    */

    function login(){

      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      //var value = document.getElementById('username').innerText;
      var val = document.getElementById('username').value;

      db.transaction(function(transaction) {
         transaction.executeSql('SELECT NAMA FROM AKUN WHERE NAMA=?;', [val],
           function(transaction, result) {
            var jml = result.rows.length;
            //alert(jml);
            if (jml == 1) {
              window.location.href = "utama.html";
            }
            else{
              alert("Nama tidak sesuai, silahkan isi nama yang sesuai");
            }
           },errorHandler);
       },errorHandler,nullHandler);



    }

//=========================================== Hitung Umur ========================================================

    //dokumentasi = pada form tanggal, beri id = 'tanggal'
    //silahkan pilih alert atau innerHTML(id = age) pada baris paling akhir

    function hitungumur(){

        var jml, thnlahir;
        $('#umurText').html('');
        db.transaction(function(transaction) {
         transaction.executeSql('SELECT TTL FROM AKUN WHERE ID=?;', ["1"],
           function(transaction, result) {
            jml = result.rows.item(0);
            thnlahir = jml.TTL;
            var panjang = thnlahir.length;
            
            var monthBirth = Math.abs(parseInt(thnlahir[panjang-7] + thnlahir[panjang-6]));
            var yearBirth = parseInt(thnlahir[panjang-4] + thnlahir[panjang-3] + thnlahir[panjang-2] + thnlahir[panjang-1]);

            var now = new Date();
            var monthNow = now.getMonth()+1;
            var yearNow = now.getFullYear();

            
            if (monthBirth >= monthNow) {
              age = yearNow - yearBirth -1;    
            }
            else{
              age = yearNow - yearBirth;
            }
            

           // alert(age + ' Tahun');
           // document.getElementById('umurText').innerHTML = age + ' Tahun';
            $('#umurText').append(age + ' Tahun' );



           },errorHandler);
       },errorHandler,nullHandler);

/*
        var data = sessionStorage.getItem('BirthDate');
        var yearBirth = parseInt(data[jml-3] + data[jml-2] + data[jml-1] + data[jml]);
        //alert(yearBirth);

        var now = new Date();
        var monthNow = now.getMonth();
        var yearNow = now.getFullYear();

        age = yearNow - yearBirth;

        alert(age + ' Tahun');
        document.getElementById('umurText').innerHTML = age + ' Tahun';*/
      }

//=============================================== Get Nama User ======================================================

  //beri nama tempat nama dimunculkan dengan id hasil

  function getNama(){

       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      $('#hasil').html('');
      $('#judulIndikasi').html('');
       
       db.transaction(function(transaction) {

         transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                var row = result.rows.item(0);
                $('#hasil').append(row.NAMA );
                $('#judulIndikasi').append(row.NAMA );
            }
           },errorHandler);
       },errorHandler,nullHandler);
  }




//=================================================== Get Jumlah Akun ==========================================================
  //Untuk mengambil jumlah akun, kegunaan saat ada di halaman pengaturan dan lock daftar jika sudah pernah mendaftar (akun > 0).

  var row;
  function GetJmlAkun(){
      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

       
      RunBody();
      $('#jumlahakun').html('');

      db.transaction(function(transaction) {

         transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                row = result.rows.length;
                $('#jumlahakun').append(row +' Anak');
                if(row>0){
                  document.getElementById('daftarKeterangan').innerHTML = 'Daftar '+' <img src="img/Top/lock.png" width="10%">';
                }
                else{
                  document.getElementById('daftarKeterangan').innerHTML = 'Daftar';
                }
            }
           },errorHandler);
       },errorHandler,nullHandler);

      
      
  }


//=================================================== Get Picture =============================================================

function GetPicture(){

      
       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      //$("#gambar").css("");
       
       db.transaction(function(transaction) {
        //alert('masuk picture lebih dalam');
         transaction.executeSql('SELECT LINKFOTO FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                var row = result.rows.item(0);
                //alert('Aku adalah link di dalam '+row.LINKFOTO);
                $('#gambar').css('background-image', 'url("' + row.LINKFOTO +'")');
            }
           },errorHandler);
       },errorHandler,nullHandler);
  }




//============================================= Get terakhir melakukan evaluasi ================================================

  //untuk mengetahui terakhir melakukan evaluasi, jadi untuk menentukan bulan tersebut harus evaluasi atau tidak
  //hasil disimpan dalam variabel bulantes

  function getTimeEvaluasi(){

        

        db.transaction(function(transaction) {
        transaction.executeSql('SELECT waktu FROM LAPORAN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
              var waktutes = result.rows.length;
              if (waktutes == 0) {
                alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
                
              }
              else{

                var row = result.rows.item(waktutes-1).waktu;
                var rowLength = row.length;
                var bulantes = Math.abs(parseInt(row[rowLength-6] + row[rowLength-7]));

                var now = new Date();
                var monthNow = now.getMonth()+1;

                if ( bulantes != monthNow) {
                  alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
                }
                else
                {
                  document.getElementById('fontterapi').style.color="white";
                  document.getElementById('fontlaporan').style.color="white";   
                }
              }

            }
            
            
           },errorHandler);
       },errorHandler,nullHandler);

  }

//=============================================== Halaman Utama ======================================================
  //kumpulan fungsi yang ada di halaman utama, ada getnama, getumur, get waktu terakhir evaluasi

  function HalamanUtama(){
    RunBody();
    getNama();
    hitungumur();
    getTimeEvaluasi();
    GetPicture();
  }

//============================================== Halaman Evaluasi =====================================================

//untuk menampilkan hasil dari evaluasi, berupa nama, nilai komunikasi, sosial, kognitif dan kebiasaan
//sistem kerjanya pake passing parameter, jadi parameter variable hasil evaluasi di pass ke fungsinya.
//nanti hasil dari evaluasi di simpan dulu dan di tampilkan .

  function tesEvaluasi(kom, sos, kog, keb, tot){

      var now = new Date();
      var monthNow = now.getMonth()+1;
      var yearNow = now.getFullYear();
      var dateNow = now.getDate();

      var waktu = dateNow + '-' + monthNow + '-' + yearNow;


      db.transaction(function(transaction){

          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',[waktu, kom, sos, kog, keb, tot],nullHandler,errorHandler);
          
      });
  }

//===================================================== Display Evaluasi=================================================

function DisplayEval(){
  
  getNama();
 $('#hasilKom').html('');
 $('#hasilSos').html('');
 $('#hasilKog').html('');
 $('#hasilKeb').html('');
 
 db.transaction(function(transaction) {
  transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, total  FROM LAPORAN ;',  [],
   function(transaction, result) {

    if (result != null && result.rows != null) {
        var last = result.rows.length;
        var row = result.rows.item(last-1);
        var komResult = row.komunikasi;
        var sosResult = row.sosial;
        var kogResult = row.kognitif;
        var kebResult = row.kebiasaan;

        $('#hasilKom').append(parseInt(100-row.komunikasi*100/28) + '%');
        $('#hasilSos').append(parseInt(100-row.sosial*100/40) + '%');
        $('#hasilKog').append(parseInt(100-row.kognitif*100/36) + '%');
        $('#hasilKeb').append(parseInt(100-row.kebiasaan*100/75) + '%');
    }
   },errorHandler);
  },errorHandler,nullHandler);
}




//=================================================== Terapi===============================================

  function terapi(bro){
    var bre = bro;
    var kategori;
    RunBody();

        
    document.getElementById("tabel").style.display = 'none';

    var node = document.getElementById('tabel');
    while(node.hasChildNodes()){
      node.removeChild(node.firstChild);
    }
    document.getElementById('dasarTerapi1').style.backgroundColor = '';
    document.getElementById('dasarTerapi1').style.color = '#ffffff';
    document.getElementById('dasarTerapi2').style.backgroundColor = '';
    document.getElementById('dasarTerapi2').style.color = '#ffffff';
    document.getElementById('dasarTerapi3').style.backgroundColor = '';
    document.getElementById('dasarTerapi3').style.color = '#ffffff';
    document.getElementById('dasarTerapi4').style.backgroundColor = '';
    document.getElementById('dasarTerapi4').style.color = '#ffffff';
    document.getElementById('dasarTerapi5').style.backgroundColor = '';
    document.getElementById('dasarTerapi5').style.color = '#ffffff';
    if(bre == 1){
      kategori = "Belajar";
      document.getElementById('dasarTerapi1').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi1').style.color = '#000000';
    } else if(bre == 2){
      kategori = "Identifikasi(1)";
      document.getElementById('dasarTerapi2').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi2').style.color = '#000000';
    } else if(bre == 3){
      kategori = "Identifikasi(2)";
      document.getElementById('dasarTerapi3').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi3').style.color = '#000000';
    } else if(bre == 4){
      kategori = "Melabel";
      document.getElementById('dasarTerapi4').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi4').style.color = '#000000';
    } else if(bre == 5){
      kategori = "Matching";
      document.getElementById('dasarTerapi5').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi5').style.color = '#000000';
    } else if(bre == 6){
      kategori = "Imitasi GM Kasar";
      document.getElementById('dasarTerapi6').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi6').style.color = '#000000';
    } else if(bre == 7){
      kategori = "Imitasi GM Halus";
      document.getElementById('dasarTerapi7').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi7').style.color = '#000000';
    } else if(bre == 8){
      kategori = "Imitasi GM Mulut";
      document.getElementById('dasarTerapi8').style.backgroundColor = '#aaaaaa';
      document.getElementById('dasarTerapi8').style.color = '#000000';
    }


    document.getElementById("tabel").style.display = '';
    db.transaction(function(transaction) 
    {
      transaction.executeSql('SELECT ID_TERAPI,LEVEL,PILIHAN,KATEGORI_TANYATERAPI FROM TERAPI WHERE KATEGORI_TANYATERAPI="' + kategori + '" And LEVEL="Dasar"  ;',  [],
        function(transaction, result) 
        {
          flag++;
          if (result != null && result.rows != null) 
          {
              for (var i = 0; i < result.rows.length; i++) 
              {
                var row = result.rows.item(i);
                var idmasuk = row.ID_TERAPI;
                $('#tabel').append('<tr><td width="60%" onClick="linkPetTerapi('+idmasuk+',\'Petunjuk'+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td width="40%"><img width="100%" height="100%" src="../../../../img/Menu/'+  row.PILIHAN+'.png" align="right"></td></tr>');
                
              }
              $('#tabel tr td').flowtype({fontRatio:13});
              $('#tabel tr td').flowtype({fontSize:15});
          }
        },errorHandler);
    },errorHandler,nullHandler);
  }
  
  
     
//================================================== Link Petunjuk Terapi (linkPetTerapi()) ============================================

  function linkPetTerapi(id,a){


      sessionStorage.setItem("idterapidasar",id);
      linkPT = a;  
      sessionStorage.setItem('pilihan', linkPT);
      //alert(linkPT +'.html');
      window.location.href = linkPT +'.html';
      
  }


//============================================= Link Terapi =================================================================

  function linkterapi(){

    var data = sessionStorage.getItem('pilihan');
   // alert(data);


  }




//=============================================== Drop All ======================================================
  function dropAll(){

         if (!window.openDatabase) {
         alert('Databases are not supported in this browser.');
         return;
         }

         $('#lbUsers').html('');
          db.transaction(function(transaction) {
         transaction.executeSql('DROP TABLE AKUN', [], nullHandler,errorHandler);
        transaction.executeSql('DROP TABLE CATATAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE LAPORAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE NILAI', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE REWARD', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE PERTANYAAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE TERAPI', [], nullHandler,errorHandler);
         

         
         });
          
  }

//============================================= Add Data Laporan ================================================

function addData(){
      db.transaction(function(transaction){
          var now = new Date();
      var monthNow = now.getMonth()+1;

      var yearNow = now.getFullYear();
      var dateNow = now.getDate();
      // alert(dateNow);

      var waktu = dateNow + '-' + monthNow + '-' + yearNow;

          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',[waktu, "1000", "2000", "3000", "4000", "10000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-8-2015", "2000", "3000", "4000", "5000", "14000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-9-2015", "3000", "4000", "5000", "6000", "34000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["2-10-2015", "4000", "5000", "6000", "7000", "22000"],nullHandler,errorHandler);
          /*transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["7", "5000", "6000", "7000", "8000", "26000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["8", "6000", "7000", "8000", "9000", "30000"],nullHandler,errorHandler);
          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',["9", "7000", "8000", "9000", "10000", "34000"],nullHandler,errorHandler);*/

          
      });
}

//=========================================== Fetch Data ===========================================================

function ambilData(){
    db.transaction(function(transaction) {
     transaction.executeSql('SELECT total FROM LAPORAN;', [],
       function(transaction, result) {
        if (result != null && result.rows != null) {
          for (var i = 0; i < result.rows.length; i++) {
            panjangdat = result.rows.length;
           // alert('pjg '+panjangdat);
            rowTotal = result.rows.item(i).total;
            arrTotal[i] = rowTotal;
            //alert(arrTotal[i]);
            //$('#lbUsers').append('<br>' + row.UserId + '. ' + row.FirstName+ ' ' + row.LastName);
          }
        }
       },errorHandler);
   },errorHandler,nullHandler);
   // alert('selesai ambil data');
}

//======================================== Tampil Laporan Total =====================================================
      function displayTotal(){
        RunBody();
        db.transaction(function(transaction) {
           transaction.executeSql('SELECT total, waktu FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {
                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 
                  rowTotal = result.rows.item(i).total;               //menangkap data total
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu
                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ parseInt(arrMonth[i]+1) +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }
                  arrTotal[i] = rowTotal;                                 //memasukkan data total ke dalam array
                  //alert(arrLabel[panjangdat]);                            
                  
                }

                 var areaChartData = {                                
                    labels: arrLabel,                                     //melabelkan berupa bulan dan tahun
                    datasets: [
                      {
                        label: "Digital Goods",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrTotal                                   //data total
                      }
                    ]
                  };

              var areaChartOptions = {
                //Boolean - If we should show the scale at all
                showScale: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,1)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: false,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                //Boolean - Whether to show a dot for each point
                pointDot: true,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: false,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true
              };

            //Create the line chart
            //-------------
            //- LINE CHART -
            //--------------
            var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
            var lineChart = new Chart(lineChartCanvas);
            var lineChartOptions = areaChartOptions;
            lineChartOptions.datasetFill = false;
            lineChart.Line(areaChartData, lineChartOptions);



              }
             },errorHandler);
         },errorHandler,nullHandler);
      }

//===================================================== Tampil Laporan Aspek =====================================


    function displayAspek(){
        RunBody();

        db.transaction(function(transaction) {
           transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, waktu FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {
                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 

                  rowKom = result.rows.item(i).komunikasi;
                  rowSos = result.rows.item(i).sosial;
                  rowKog = result.rows.item(i).kognitif;               
                  rowKeb = result.rows.item(i).kebiasaan;
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu

                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ parseInt(arrMonth[i]+1) +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }
                  arrTotal[i] = rowTotal;                                 //memasukkan data total ke dalam array
                  
                  arrKomunikasi[i] = rowKom;
                  arrSosial[i] = rowSos;
                  arrKognitif[i] = rowKog;
                  arrKebiasaan[i] = rowKeb;
                }

                 var areaChartData = {
                    labels: arrLabel,
                    datasets: [
                      {
                        label: "komunikasi",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKomunikasi
                      },
                      {
                        label: "sosial",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrSosial
                      },
                      {
                        label: "kognitif",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#ffffff",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKognitif
                      },
                      {
                        label: "kebiasaan",
                        fillColor: "#ffffff",
                        strokeColor: "#ffffff",
                        pointColor: "#ffffff",
                        pointStrokeColor: "rgba(60,0,188,1)",
                        pointHighlightFill: "red",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: arrKebiasaan
                      }
                    ]
                  };

                  var areaChartOptions = {
                    //Boolean - If we should show the scale at all
                    showScale: true,
                    //Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: false,
                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(0,0,0,1)",
                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,
                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,
                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,
                    //Boolean - Whether the line is curved between points
                    bezierCurve: false,
                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.3,
                    //Boolean - Whether to show a dot for each point
                    pointDot: true,
                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,
                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,
                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,
                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,
                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,
                    //Boolean - Whether to fill the dataset with a color
                    datasetFill: true,
                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                    maintainAspectRatio: false,
                    //Boolean - whether to make the chart responsive to window resizing
                    responsive: true
                  };

                  //Create the line chart
                  //-------------
                  //- LINE CHART -
                  //--------------
                  var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
                  var lineChart = new Chart(lineChartCanvas);
                  var lineChartOptions = areaChartOptions;
                  lineChartOptions.datasetFill = false;
                  lineChart.Line(areaChartData, lineChartOptions);
                  //then you just need to generate the legend
            //  var legendTable = lineChart.generateLegend();
              //and append it to your page somewhere
            //  document.getElementById('legend').innerHTML = legendTable;
             // alert(legendTable);



              }
             },errorHandler);
         },errorHandler,nullHandler);

    }



//======================================================= Display Per Bulan ======================================

function displayBulan(){

    RunBody();


        db.transaction(function(transaction) {

          $('#pilihbulan').html('');

           transaction.executeSql('SELECT komunikasi, sosial, kognitif, kebiasaan, waktu, ID_LAPORAN FROM LAPORAN;', [],
             function(transaction, result) {
              if (result != null && result.rows != null) {
                for (var i = 0; i < result.rows.length; i++) {

                  panjangdat = result.rows.length;                    //menentukan jumlah isi laporan 
                  rowWaktu = result.rows.item(i).waktu;               //menangkap data waktu

                  pjgWaktu = result.rows.item(i).waktu.length;        //menghitung panjang string waktu

                  
                  arrMonth[i] = Math.abs(parseInt( rowWaktu[pjgWaktu-7]+rowWaktu[pjgWaktu-6]));     //row waktu dimasukkan ke dalam array
                  arrYear[i] = parseInt( rowWaktu[pjgWaktu-4] + rowWaktu[pjgWaktu-3] + rowWaktu[pjgWaktu-2] + rowWaktu[pjgWaktu-1]);
                  arrLabel[i] = arrMonth[i] + '/' + arrYear[i];            //digabungkan menjadi 1 string (bln/tahun)

                  if (panjangdat == 1) {                                  //misal data di db hanya 1, maka akan ditambahkan bulan selanjutnya
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];  
                    arrLabel[panjangdat] = '0'+ arrMonth[i]+1 +'/' + arrYear[i];
                  }
                  else{
                    arrLabel[i] = '0'+ arrMonth[i] + '/' + arrYear[i];
                  }

                  var rowID = result.rows.item(i).ID_LAPORAN;
                   $('#pilihbulan').append('<option value="'+ rowID +'">' + arrLabel[i] );



                  rowKom = result.rows.item(i).komunikasi;
                  rowSos = result.rows.item(i).sosial;
                  rowKog = result.rows.item(i).kognitif;               
                  rowKeb = result.rows.item(i).kebiasaan;
                       
                  arrKomunikasi[i] = rowKom;
                  arrSosial[i] = rowSos;
                  arrKognitif[i] = rowKog;
                  arrKebiasaan[i] = rowKeb;

                }


                if (flagChar == 0) {
                  areaChartData = {
                      labels: ["komunikasi", "sosial", "kognitif", "kebiasaan"],
                      datasets: [
                      {
                        label: "komunikasi",
                        fillColor: "rgb(136,160,185)",
                        strokeColor: "#ffffff",
                        pointColor: "#000000",
                        pointStrokeColor: "rgba(60,141,188,1)",
                        pointHighlightFill: "#000000",
                        pointHighlightStroke: "rgba(255,255,255,1)",
                        data: [arrKomunikasi[0], arrSosial[0], arrKognitif[0], arrKebiasaan[0]]
                      }
                     ]
                    };


                    var barChartCanvas = $("#barChart").get(0).getContext("2d");
                   // barChart = new Chart(barChartCanvas);
                    var barChartData = areaChartData;
                            
                            
                    var barChartOptions = {
                        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                        scaleBeginAtZero: true,
                        //Boolean - Whether grid lines are shown across the chart
                        scaleShowGridLines: true,
                        //String - Colour of the grid lines
                        scaleGridLineColor: "rgba(0,0,0,.05)",
                        //Number - Width of the grid lines
                        scaleGridLineWidth: 1,
                        //Boolean - Whether to show horizontal lines (except X axis)
                        scaleShowHorizontalLines: true,
                        //Boolean - Whether to show vertical lines (except Y axis)
                        scaleShowVerticalLines: true,
                        //Boolean - If there is a stroke on each bar
                        barShowStroke: true,
                        //Number - Pixel width of the bar stroke
                        barStrokeWidth: 2,
                        //Number - Spacing between each of the X value sets
                        barValueSpacing: 5,
                        //Number - Spacing between data sets within X values
                        barDatasetSpacing: 1,
                        //String - A legend template
                        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                              //Boolean - whether to make the chart responsive
                        responsive: true,
                        maintainAspectRatio: false
                    };

                    barChartOptions.datasetFill = false;
                    barChart = new Chart(barChartCanvas).Bar(barChartData, barChartOptions);
                    barChart.destroy();

                    flagChar = 1000;
                };

              }

            },errorHandler);
         },errorHandler,nullHandler);

             
                        

}


//================================================= Ambil nilai =============================================


  function ambilNilaiLaporan(index1, index2, bnr, slh){
    var iter = 0, iter2 = 0;
    db.transaction(function(transaction) {
    
    for (var i = 0; i < index1; i++) { 
      //alert('i: ' + i + 'gabung1[i]: ' + gabung1[i]);
      transaction.executeSql('SELECT BENAR, SALAH FROM NILAI WHERE KATEGORI_ASPEK = ? AND ASPEK = ?;',  ["1", gabung1[i]],
      function(transaction, result) {

        var row = result.rows.item(0);
        benar1 = parseInt(row.BENAR);
        salah1 = parseInt(row.SALAH);

        
        var inputben1 = parseInt(benar1 + bnr);
        var inputsal1 = parseInt(salah1 + slh);

      //  alert('gabung1: '+gabung1[iter]);
       // alert('benar1 akhir ' + inputben1 + 'salah1 akhir ' + inputsal1);
        
        
       transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', [inputben1, inputsal1, "1", gabung1[iter]]); 
       iter = iter + 1;
        //alert('i '+i);
      },errorHandler);
    }
    
    for (var j = 0; j < index2; j++) {
      transaction.executeSql('SELECT BENAR, SALAH FROM NILAI WHERE KATEGORI_ASPEK = ? AND ASPEK = ?;',  ["2", gabung2[j]],
      function(transaction, result) {
        if (result != null && result.rows != null) {
           
            var row = result.rows.item(0);
            benar2 = parseInt(row.BENAR);
            salah2 = parseInt(row.SALAH);

            
            var inputben2 = parseInt(benar2 + bnr);
            var inputsal2 = parseInt(salah2 + slh);
           // alert('benar2 awal ' + inputben2 + 'salah2 awal ' + inputsal2);
          //  alert('gabung2: ' +gabung2[iter2]);
            
           transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', [inputben2, inputsal2, "2", gabung2[iter2]]);
            iter2 = iter2+1;
        }
      },errorHandler);
    }
  


    },errorHandler,nullHandler);
  }



//================================================= Hitung persentase laporan =======================================================

function persentase(bnr,slh,idp){

    RunBody();
    
    db.transaction(function(transaction) {
      transaction.executeSql('SELECT ID_TERAPI, ASPEK1, ASPEK2 FROM TERAPI WHERE ID_TERAPI = ?;',  [idp],
        function(transaction, result) {
          if (result != null && result.rows != null) {
             
              for (var i = 0; i < result.rows.length; i++) {
                  var target1 = result.rows.item(i).ASPEK1;
                  var target2 = result.rows.item(i).ASPEK2;
                  var panjang1 = result.rows.item(i).ASPEK1.length;
                  var panjang2 = result.rows.item(i).ASPEK2.length;
              }
              

              for (var i = 0 ; i < panjang1; i++) {
                  if(target1[i] == "|"){
                    var dummy = target1[i];
                  }
                  else{
                    putus1[count1] = target1[i];
                    count1++;

                    if (count1 == 2) {
                      gabung1[index1] = putus1[0] + putus1[1];
                      index1 = index1+1;
                      count1= 0;
                    };

                  }
              }

              for (var i = 0 ; i < panjang2; i++) {
                
                  if(target2[i] == "|"){
                    var dummy = target2[i];
                  }
                  else{
                    putus2[count2] = target2[i];
                    count2++;

                    if (count2 == 2) {
                      gabung2[index2]= putus2[0] + putus2[1];
                      index2 = index2+1;
                      count2 = 0;
                    };

                  }
              }
          }
          
         ambilNilaiLaporan(index1, index2, bnr, slh);
      },errorHandler);
    },errorHandler,nullHandler);
 
}


//============================================ DISPLAY PERSENTASE ================================================
/*
function displayPersentase(){
  RunBody();
    db.transaction(function(transaction) {
      transaction.executeSql('SELECT ID_NILAI, BENAR, SALAH FROM NILAI;',  [],
        function(transaction, result) {
          if (result != null && result.rows != null) {
             
              for (var i = 0; i < result.rows.length; i++) {
                  idn[i] = result.rows.item(i).ID_NILAI;
                  disbenar[i] = parseInt(result.rows.item(i).BENAR);
                  dissalah[i] = parseInt(result.rows.item(i).SALAH);
                  distotal[i] = parseInt(disbenar[i] + dissalah[i]);
                  bentotal[i] = parseInt(disbenar[i] / distotal[i] * 100);
                  idhtml[i] = 'a'+parseInt(i-1);
                  //saltotal[i] = parseInt(dissalah[i] / distotal[i] * 100);

              }

              
              for (var i = 0; i < 2; i++) {
                 document.getElementById(idhtml[i]).setAttribute("aria-valuenow", bentotal[i]);

              }
              //alert(disbenar[31]);

            }
              
      },errorHandler);
    },errorHandler,nullHandler);
}

*/

//======================================================== SET DEFAULT REWARD ====================================================

function setDefault(){
  RunBody();
  db.transaction(function(transaction) {
       transaction.executeSql('SELECT ID_REW FROM REWARD ;',  [],
        function(transaction, result) {
          if (result != null && result.rows != null) {
             
              for(var i=0; i<result.rows.length;i++){
                  transaction.executeSql('UPDATE REWARD SET PILIHAN_REWARD=?', ["KOSONG"]);  
              }
          }

      },errorHandler);     
    },errorHandler,nullHandler);
}


//======================================================= REWARD =================================================================

  function reward(){
    setDefault();
    db.transaction(function(transaction) {

      //var inputid = 2;  
      //var inputpil = 1;
      if (inputpil == 1) {        //inputpil = 1 utk benar
        transaction.executeSql('UPDATE REWARD SET PILIHAN_REWARD=? WHERE ID_REW=?', ["BENAR", inputid]);  
      }
      else{
        transaction.executeSql('UPDATE REWARD SET PILIHAN_REWARD=? WHERE ID_REW=?', ["SALAH", inputid]);  
      }
      
    },errorHandler,nullHandler);

  }

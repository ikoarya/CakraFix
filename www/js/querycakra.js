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

/*
untuk menyaring agar entry terapi dilakukan hanya sekali dengan cara mengecek apabila terapi sudah ada isinya, maka selanjutnya tidak dapat diisi lagi.
*/

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




//============================== MEMASUKKAN USER BARU =================================================

		function EntryUser(){

		//	alert("DEBUGGING: we are in the EntryUser() function");
	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}

          //mengatur tanggal maksimal tiap bulan
          var maxdate = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
          
          //mendapatkan value nama, tanggal, bulan dan tahun.
          var nama = document.getElementById('name').value;
          var tanggal = document.getElementById('tanggal').value;
          var bul = document.getElementById('bul').value;
          var tah = document.getElementById('tah').value;

          //menggabungkan tanggal menjadi satu kesatuan
          var getBirth = tanggal + '-' + bul + '-'+ tah;

          //mendapatkan path gambar dimana dia disimpan
          var link = pathimage;

         	db.transaction(function(transaction){

            //menyaring apakah ada kesalahan input atau tidak
            if ( nama == "" || (tanggal > maxdate[bul-1])) {
              alert("Mohon cek lagi Nama dan Tanggal Lahir");
            }

            else{
              transaction.executeSql('INSERT INTO AKUN(NAMA, TTL, JK, LINKFOTO) VALUES (?,?,?,?)',[$('#name').val(), getBirth, $('#jk').val(),link ],nullHandler,errorHandler);

              transaction.executeSql('SELECT NAMA FROM AKUN;', [],
               function(transaction, result) {
                var keluar = result.rows.length;
                if (keluar > 0) {
                  alert("Selamat Anda berhasil terdaftar di Aplikasi CAKRA");  
                  window.location.href = "utama.html";
                }
               },errorHandler);
            }
            
         	});
		}


//====================================== UPDATE AKUN ===============================================

/*
  Update akun ini digunakan pada halaman pengaturan->akun. Saat tombol selesai ditekan maka akan memanggil EditUser dengan
  passing parameter nama.
*/

  function EditUser(nama){
    RunBody();
    db.transaction(function(transaction) {
      
      //mengupdate nama yang sudah diinputkan
      transaction.executeSql('UPDATE AKUN SET NAMA=?', [nama]);

      //langsung menampilkan perubahan nama dengan cara select nama yang baru dengan nama yang ada di passing parameter
      transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
        function(transaction, result) {

          if (result != null && result.rows != null) {
              var row = result.rows.item(0);
              var namabaru = row.NAMA;
              
              if(namabaru == nama){
                window.location.reload();       //untuk reload atau menampilkan langsung perubahannya
              }
                
                
        }
      },errorHandler);

    },errorHandler,nullHandler);
    //untuk menyimpan nama di local storage
    localStorage.setItem("nama",  nama);

  }



//=========================== DELETE AKUN ============================================================

/*
  Untuk menghapus user, fungsi ini dipanggil pada halaman pengaturan->akun
*/

  function HapusUser(){

    db.transaction(function(transaction) {
      
      transaction.executeSql('DELETE FROM AKUN WHERE ID_AKUN=?', ["1"]);
      
    },errorHandler,nullHandler);
  }


//=============================== login ================================================================

/*
  Fungsi login digunakan pada saat tombol masuk ditekan (index.html).
*/

    function login(){

      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      //untuk mengambil nama yang diinputkan
      var val = document.getElementById('username').value;

      //mengecek apakah nama yang diinputkan ada dalam database atau tidak
      db.transaction(function(transaction) {
         transaction.executeSql('SELECT NAMA FROM AKUN WHERE NAMA=?;', [val],
           function(transaction, result) {
            var jml = result.rows.length;

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

/*
  Menghitung umur yang digunakan pada halaman utama (utama.html)
*/

    function hitungumur(){

        var jml, thnlahir;
        $('#umurText').html('');

        //mengambil ttl user pertama
        db.transaction(function(transaction) {
         transaction.executeSql('SELECT TTL FROM AKUN WHERE ID=?;', ["1"],
           function(transaction, result) {
            jml = result.rows.item(0);
            thnlahir = jml.TTL;
            var panjang = thnlahir.length;    //dihitung panjangnya ttlnya (d-m-yyyy) atau (dd-mm-yyyy)
            
            //diambil bulan dan tahunnya, dengan cara di jadikan integer dan diabsolutkan. Perlu diabsolutkan karena menghindari tanda "-".      
            var monthBirth = Math.abs(parseInt(thnlahir[panjang-7] + thnlahir[panjang-6]));
            var yearBirth = parseInt(thnlahir[panjang-4] + thnlahir[panjang-3] + thnlahir[panjang-2] + thnlahir[panjang-1]);

            //mengambil bulan dan tahun sekarang. Bulan harus ditambah 1 karena skalanya 0-11.
            var now = new Date();
            var monthNow = now.getMonth()+1;
            var yearNow = now.getFullYear();

            //menghitung umurnya
            //apabila bulanlahir lebih besar, maka umur belum genap (tahunsekarang-tahunlahir-1), dan sebaliknya
            if (monthBirth >= monthNow) {
              age = yearNow - yearBirth -1;    
            }
            else{
              age = yearNow - yearBirth;
            }
            
            //menuliskan di halaman utama
            $('#umurText').append(age + ' Tahun' );



           },errorHandler);
       },errorHandler,nullHandler);
      }

//=============================================== Get Nama User ======================================================

/*
  untuk mencetak nama pada halaman utama dan hasil evaluasi.
*/

  function getNama(){

       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      //untuk mencetak pada halaman utama
      $('#hasil').html('');

      //untuk mencetak pada halaman hasil evaluasi
      $('#judulIndikasi').html('');
       
       //untuk mengambil nama pada database
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
/*
  Untuk mengambil jumlah akun, digunakan saat ada di halaman pengaturan dan lock daftar jika sudah pernah mendaftar (akun > 0).
*/

  var row;
  function GetJmlAkun(){
      if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

       
      RunBody();
      //untuk mencetak pada halaman pengaturan (pengaturan.html)
      $('#jumlahakun').html('');

      //menghitung jumlah akun
      db.transaction(function(transaction) {

         transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                row = result.rows.length;
                //mencetak pada halaman pengaturan
                $('#jumlahakun').append(row +' Anak');

                //untuk mengunci daftar, apakah sudah pernah mendaftar atau belum. Kalau sudah maka akan muncul tanda gembok.
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

/*
  Untuk menampilkan gambar user yang login.
*/

function GetPicture(){

      
       if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
      }

      RunBody();
      
       
       db.transaction(function(transaction) {
         transaction.executeSql('SELECT LINKFOTO FROM AKUN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
                var row = result.rows.item(0);

                //menampilkan foto dengan cara mengubah background imagenya.
                $('#gambar').css('background-image', 'url("' + row.LINKFOTO +'")');
            }
           },errorHandler);
       },errorHandler,nullHandler);
  }




//============================================= Get terakhir melakukan evaluasi ================================================

/*
  untuk mengetahui terakhir melakukan evaluasi, jadi untuk menentukan bulan tersebut harus evaluasi atau tidak
  hasil disimpan dalam variabel bulantes
*/

  function getTimeEvaluasi(){

        //mengambil waktu dari laporan
        db.transaction(function(transaction) {
        transaction.executeSql('SELECT waktu FROM LAPORAN ;',  [],
           function(transaction, result) {

            if (result != null && result.rows != null) {
              //menghitung ada berapa record
              var waktutes = result.rows.length;

              //apakah sudah ada record? apabila belum maka muncul alert
              if (waktutes == 0) {
                alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
                
              }
              else{
                //mengambil record waktu yang paling akhir (waktutes-1)
                var row = result.rows.item(waktutes-1).waktu;

                //menghitung panjang character waktunya
                var rowLength = row.length;

                //diambil bulan
                var bulantes = Math.abs(parseInt(row[rowLength-6] + row[rowLength-7]));

                //mengambil bulan saat ini
                var now = new Date();
                var monthNow = now.getMonth()+1;

                //melakukan pembandingan
                if ( bulantes != monthNow) {
                  
                  alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
                }
                else
                {
                  //menyesuaikan warna font, apabila sudah melakukan evaluasi maka font terapi, laporan berwarna putih dan evaluasi berwarna merah
                  document.getElementById('fontterapi').style.color="white";
                  document.getElementById('fontlaporan').style.color="white";   
                  document.getElementById('fontevaluasi').style.color="red";
                }
              }

            }
            
            
           },errorHandler);
       },errorHandler,nullHandler);

  }

//=============================================== Halaman Utama ======================================================
/*
  Mengumpulkan beberapa fungsi yang bertugas di halaman utama
*/

  function HalamanUtama(){
    RunBody();
    getNama();
    hitungumur();
    getTimeEvaluasi();
    GetPicture();
  }

//============================================== Halaman Evaluasi =====================================================

/*
  untuk menampilkan hasil dari evaluasi pada indikasi.html, berupa nama, nilai komunikasi, sosial, kognitif dan kebiasaan
  sistem kerjanya pake passing parameter, jadi parameter variable hasil evaluasi di passing ke fungsinya.
*/

  function tesEvaluasi(kom, sos, kog, keb, tot){

      //untuk mengambil waktu sekarang
      var now = new Date();
      var monthNow = now.getMonth()+1;
      var yearNow = now.getFullYear();
      var dateNow = now.getDate();

      //mengagbungkan tanggal, bulan dan tahun
      var waktu = dateNow + '-' + monthNow + '-' + yearNow;

      //menyimpan waktu untuk keperluan di terapi terstruktur. karena apabila tidak ada maka tanggal yang akan ditampilkan bernilai null
      sessionStorage.setItem("simpantanggal",waktu);

      //memasukkan ke database
      db.transaction(function(transaction){

          transaction.executeSql('INSERT INTO LAPORAN(waktu, komunikasi, sosial, kognitif, kebiasaan, total) VALUES (?,?,?,?,?,?)',[waktu, kom, sos, kog, keb, tot],nullHandler,errorHandler);
          
      });
  }


//===================================================== Display Evaluasi=================================================

/*
  Untuk menampilkan hasil dari evaluasi 
*/
function DisplayEval(){
  
  //menampilkan nama user yang aktif
  getNama();

 $('#hasilKom').html('');
 $('#hasilSos').html('');
 $('#hasilKog').html('');
 $('#hasilKeb').html('');
 
 //mengambil nilai komunikasi, sosial, kognitif, kebiasaan dan total yang ada
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

        //menampilkan hasil dari evaluasi
        $('#hasilKom').append(parseInt(100-row.komunikasi*100/28) + '%');
        $('#hasilSos').append(parseInt(100-row.sosial*100/40) + '%');
        $('#hasilKog').append(parseInt(100-row.kognitif*100/36) + '%');
        $('#hasilKeb').append(parseInt(100-row.kebiasaan*100/75) + '%');
    }
   },errorHandler);
  },errorHandler,nullHandler);
}




//=================================================== Terapi===============================================

/*
  menampilkan list terapi yang ada. (pada listterapi.html) dan juga menyambungkannya ke petunjuk terapi.
*/
  function terapi(bro){
    var bre = bro;
    var kategori;
    RunBody();

        
    document.getElementById("tabel").style.display = 'none';

    var node = document.getElementById('tabel');
    while(node.hasChildNodes()){
      node.removeChild(node.firstChild);
    }

    //pengaturan font
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

    //menyaring data-data berupa id terapi dll untuk selanjutnya ditampilkan dan juga untuk melanjutkan ke petunjuk terapi
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

                //untuk menampilkan hasil ketika pilihan terapi dipilih, dan juga untuk menyimpan fungsi onclick().
                $('#tabel').append('<tr><td width="60%" onClick="linkPetTerapi('+idmasuk+',\'Petunjuk'+row.LEVEL+row.KATEGORI_TANYATERAPI+row.PILIHAN+'\')">' + row.PILIHAN + '</td><td width="40%"><img width="100%" height="100%" src="../../../../img/Menu/'+  row.PILIHAN+'.png" align="right"></td></tr>');
                
              }

              //responsive font
              $('#tabel tr td').flowtype({fontRatio:13});
              $('#tabel tr td').flowtype({fontSize:15});
          }
        },errorHandler);
    },errorHandler,nullHandler);
  }
  
  
     
//================================= Link Petunjuk Terapi (linkPetTerapi()) ============================================
/*
  untuk menyimpan id terapi dan menghubungkan ke petunjuk terapi.
*/
  function linkPetTerapi(id,a){

      //menyimpan id terapi
      sessionStorage.setItem("idterapidasar",id);

      //untuk menyimpan link html petunjuk terapi.
      linkPT = a;  
      sessionStorage.setItem('pilihan', linkPT);
      window.location.href = linkPT +'.html';
      
  }




//=============================================== Drop All ======================================================
  function dropAll(){

         if (!window.openDatabase) {
         alert('Databases are not supported in this browser.');
         return;
         }

         $('#lbUsers').html('');
          db.transaction(function(transaction) {
        /* transaction.executeSql('DROP TABLE AKUN', [], nullHandler,errorHandler);
        transaction.executeSql('DROP TABLE CATATAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE LAPORAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE NILAI', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE REWARD', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE PERTANYAAN', [], nullHandler,errorHandler);
         transaction.executeSql('DROP TABLE TERAPI', [], nullHandler,errorHandler);*/
         transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', ["4", "6", "1", "BN"]);
         transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', ["9", "15", "1", "BD"]);
         transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', ["15", "20", "1", "KK"]); 


         

         
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
/*
  Untuk menampilkan laporan->total
*/

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

//=============================== Tampil Laporan Aspek =====================================
/*
  Untuk menampilkan laporan->aspek
*/

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



//=================================== Display Per Bulan ======================================

/*
  Untuk menampilkan laporan->bulan
*/

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

/*
  Lanjutan dari persentase(bnr,slh,idp). Digunakan untuk mengambil nilai benar salah awal dan mengupdatenya dengan yang baru
*/

  function ambilNilaiLaporan(index1, index2, bnr, slh){
    var iter = 0, iter2 = 0;
    db.transaction(function(transaction) {
    
    for (var i = 0; i < index1; i++) { 
      
      //mengambil nilai benar dan salah yang awal (belum diupdate)
      transaction.executeSql('SELECT BENAR, SALAH FROM NILAI WHERE KATEGORI_ASPEK = ? AND ASPEK = ?;',  ["1", gabung1[i]],
      function(transaction, result) {

        var row = result.rows.item(0);
        benar1 = parseInt(row.BENAR);
        salah1 = parseInt(row.SALAH);

        //menambahkan dengan yang terbaru
        var inputben1 = parseInt(benar1 + bnr);
        var inputsal1 = parseInt(salah1 + slh);

       //mengupdate nilai ke dalam tabel nilai 
       transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', [inputben1, inputsal1, "1", gabung1[iter]]); 

       iter = iter + 1;
      },errorHandler);
    }
    
    //sama dengan atas

    for (var j = 0; j < index2; j++) {
      transaction.executeSql('SELECT BENAR, SALAH FROM NILAI WHERE KATEGORI_ASPEK = ? AND ASPEK = ?;',  ["2", gabung2[j]],
      function(transaction, result) {
        if (result != null && result.rows != null) {
           
            var row = result.rows.item(0);
            benar2 = parseInt(row.BENAR);
            salah2 = parseInt(row.SALAH);

            
            var inputben2 = parseInt(benar2 + bnr);
            var inputsal2 = parseInt(salah2 + slh);
            
           transaction.executeSql('UPDATE NILAI SET BENAR=?, SALAH=? WHERE KATEGORI_ASPEK=? AND ASPEK =?', [inputben2, inputsal2, "2", gabung2[iter2]]);
            iter2 = iter2+1;
        }
      },errorHandler);
    }
  


    },errorHandler,nullHandler);
  }



//=================================== Hitung persentase laporan ========================================
/*
  Untuk memasukkan nilai benar dan salah pada terapi yang telah dilakukan.
  idp adalah id terapi yang telah dilakukan.
*/

function persentase(bnr,slh,idp){

    RunBody();
    
    //mengambil id terapi dan aspek dari terapi
    db.transaction(function(transaction) {
      transaction.executeSql('SELECT ID_TERAPI, ASPEK1, ASPEK2 FROM TERAPI WHERE ID_TERAPI = ?;',  [idp],
        function(transaction, result) {
          if (result != null && result.rows != null) {

              for (var i = 0; i < result.rows.length; i++) {
                  //mengambil aspek 1 dan 2
                  var target1 = result.rows.item(i).ASPEK1;
                  var target2 = result.rows.item(i).ASPEK2;

                  //menghitung panjang karakter aspek1 dan aspek2
                  var panjang1 = result.rows.item(i).ASPEK1.length;
                  var panjang2 = result.rows.item(i).ASPEK2.length;
              }
              
              //memotong2 aspek1 dan 2 (karena dipisahkan oleh tanda "|")
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

              //memotong2 aspek1 dan 2 (karena dipisahkan oleh tanda "|")
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
          
        //memasukkan nilai ke tabel nilai
         ambilNilaiLaporan(index1, index2, bnr, slh);
      },errorHandler);
    },errorHandler,nullHandler);
 
}


//======================================================== SET DEFAULT REWARD ====================================================

/*
  Untuk meng-set reward menjadi tidak dipilih semua.
*/
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


//======================================================= REWARD =======================================
/*
  Untuk emmilih reward mana yang akan digunakan
*/

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



// ======================================= display hasil =================================================
/*
  Untuk menampilkan hasil dari query
*/

function displayhasil(duplevelsa, dupkategorida, duppilihanti){
  
  //mengambil benar, salah, persen, tanggal dari session storage
  var benarsesi = sessionStorage.getItem('simpanbenar');
  var salahsesi = sessionStorage.getItem('simpansalah');
  var persensesi = sessionStorage.getItem('simpanpersen');
  var tanggalsesi = sessionStorage.getItem('simpantanggal');
  
  var a = duplevelsa;
  var b = dupkategorida;
  var c = duppilihanti;
  
  
 //menampilkan data hasil query
  $('#tampilrincian').append('<tr class="recordTerapiTerstruktur" id="tampilrincian"><td width="15%">'+a+'</td><td width="15%">' + b + '</td><td width="20%">' + c + '</td><td width="10%">' + benarsesi + '</td><td width="10%">' + salahsesi + '</td><td width="7%">' + persensesi + '%</td><td width="23%">'+ tanggalsesi +'</td></tr>');


}




//========================================= Ambil nilai dari terapi ==============================

function ambilnilai(panjangtarget, index, levelsatu, kategoridua, pilihantiga){

    
    var persen;
    var benarsesi = sessionStorage.getItem('simpanbenar');
    var salahsesi = sessionStorage.getItem('simpansalah');
    var gabungsesi = sessionStorage.getItem('simpangabung');
    var pjg = panjangtarget;

    var duplevelsa = levelsatu;
    var dupkategorida = kategoridua;
    var duppilihanti = pilihantiga;
    var iter = 0;

    db.transaction(function(transaction) {
      
      transaction.executeSql('SELECT BENAR, SALAH, TANGGAL FROM NILAI WHERE ASPEK = ?;',  [gabungsesi],
        function(transaction, result) {
          if (result != null && result.rows != null) {      
            for (var i = 0; i < result.rows.length; i++) {
              
              //apabila index masih nol, berarti baru masuk kesini, sehingga perlu adanya inisialisasi
              if (index == 0) {
                var benarsementara = 0;
                sessionStorage.setItem("simpanbenar",benarsementara);
                var salahsementara = 0;
                sessionStorage.setItem("simpansalah",salahsementara);

              }

              //untuk mendapatkan benar salah dan gabung dari session storage
              var benarsesi = parseInt(sessionStorage.getItem('simpanbenar'));
              var salahsesi = parseInt(sessionStorage.getItem('simpansalah'));
              var gabungsesi = sessionStorage.getItem('simpangabung');

              //untuk mendapatkan benar dan salah dan tanggal dari database
              var ambilbenar = result.rows.item(i).BENAR;
              var ambilsalah = result.rows.item(i).SALAH;
              var ambiltanggal = result.rows.item(i).TANGGAL;

              //menambahkan benar database dan benar session storage.
              benarfix = parseInt(benarsesi + ambilbenar);
              salahfix = parseInt(salahsesi + ambilsalah);

              //apabila sama-sama nol, maka persen = 0
              if (benarfix==0 && salahfix==0) {
                persen = 0;
              }
              else{
                persen = parseInt(benarfix/(benarfix+salahfix)*100);

              }

              //menyimpan kembali pada session storage
              sessionStorage.setItem("simpanbenar",benarfix);
              sessionStorage.setItem("simpansalah",salahfix);
              sessionStorage.setItem("simpantanggal",ambiltanggal);
              sessionStorage.setItem("simpanpersen",persen);
              

            }
           
          }
          
          //apabila hanya 1 aspek (2 karakter), maka langsung ditampilkan
          if (pjg==2) {
            displayhasil(duplevelsa, dupkategorida, duppilihanti); 
          }

          //apabila lebih dari 1 aspek maka menunggu sampai semua aspek dihitung dulu
          //iter penanda apabila sudah iter+1 sama dengan index maka akan di display hasilnya.
          if (iter+1 == index) {
            displayhasil(duplevelsa, dupkategorida, duppilihanti);  
          };      
         
      },errorHandler);
    },errorHandler,nullHandler);
   

}

//======================================= Potong Aspek =========================================

/*
  Lanjutan dari AmbilTerapi()
  Untuk memotong aspek menjadi bagian-bagian dan dipisahkan dari tanda "|"
*/

function potongaspek(panjangaspek, ambilaspek, levelsesi, kategorisesi, pilihansesi){
    var count = 0;
    var index = 0;
    var panjangaspek = ambilaspek.length;
    var tanda = 0;

    var levelsatu = levelsesi;
    var kategoridua = kategorisesi;
    var pilihantiga = pilihansesi;
    var panjangtarget = panjangaspek;

    //memotong aspek menjadi bagian-bagian
    for (var j = 0 ; j < panjangaspek; j++) {
        if(ambilaspek[j] == "|"){
          var dummy = ambilaspek[j];
        }
        else{
          putus1[count] = ambilaspek[j];
          count++;

          if (count == 2) {
            gabung1[index] = putus1[0] + putus1[1];
            //menyimpan potongan aspek ke dalam session storage
            sessionStorage.setItem("simpangabung",gabung1[index]);
            
            //memanggil ambilnilai untuk dilakukan penambahan nilai
            ambilnilai(panjangtarget, index, levelsatu, kategoridua, pilihantiga);

            index = index+1;
            count= 0;          
          }
        }
    }
    tanda = tanda +1;

}

//======================================= Display Terapi Terstruktur =========================
/*
  Untuk menampilkan data ke halaman rincian terapi terstruktur
*/
  function AmbilTerapi(){
    RunBody();

    //untuk mencetak header tabel
    $('#tampilrincian').html('');
    $('#tampilrincian').append('<tr class="atributTerapiTerstruktur"><td width="15%">Level</td><td width="15%">Kategori</td><td width="20%">Nama</td><td width="10%">Benar</td><td width="10%">Salah</td><td width="7%">%</td><td width="23%">Tanggal Terakhir</td></tr>');

    //untuk mengambil level dll yang digunakan untuk keperluan mengambil data dari aspek yang ada dalam terapi tersebut
    db.transaction(function(transaction) 
    {
      transaction.executeSql('SELECT LEVEL,PILIHAN,KATEGORI_TANYATERAPI, ASPEK1 FROM TERAPI;',  [],
        function(transaction, result) 
        {
          if (result != null && result.rows != null) 
          {
              
              for (var i = 0; i < result.rows.length; i++) 
              {
                
                //mengambil data level, kategori, pilihan, aspek dan panjang aspek
                var lvl = result.rows.item(i).LEVEL;
                var ambilkategori = result.rows.item(i).KATEGORI_TANYATERAPI;
                var ambilpilihan = result.rows.item(i).PILIHAN;
                var ambilaspek = result.rows.item(i).ASPEK1;
                var panjangaspek = ambilaspek.length;

                //menyimpan level, pilihan dan kategori ke dalam session storage
                sessionStorage.setItem("simpanlevel",lvl);
                sessionStorage.setItem("simpanpilihan",ambilpilihan);
                sessionStorage.setItem("simpankategori",ambilkategori);

                //apabila terapi tersebut tidak mempunyai aspek
                if (ambilaspek == "") {
                  //mengambil level, kategori dan pilihan dari session storage
                  var levelsesi = sessionStorage.getItem('simpanlevel');
                  var kategorisesi = sessionStorage.getItem('simpankategori');
                  var pilihansesi = sessionStorage.getItem('simpanpilihan');

                  //mengeset benar dan salah dan persen ke sesion strorage.
                  var benarsementara = 0;
                  sessionStorage.setItem("simpanbenar",benarsementara);
                  var salahsementara = 0;
                  sessionStorage.setItem("simpansalah",salahsementara);
                  sessionStorage.setItem("simpanpersen","0");

                  //langsung menuju ke fungsi display untuk menampilkan hasilnya
                  displayhasil(levelsesi, kategorisesi, pilihansesi);
                }
                else{
                  //mengambil level, kategori dan pilihan dari session storage
                  var levelsesi = sessionStorage.getItem('simpanlevel');
                  var kategorisesi = sessionStorage.getItem('simpankategori');
                  var pilihansesi = sessionStorage.getItem('simpanpilihan');

                  potongaspek(panjangaspek,ambilaspek, levelsesi, kategorisesi, pilihansesi);

                }
             
                
              }
              
          }
        },errorHandler);
    },errorHandler,nullHandler);
  }




//=========================================== Query yang Ada di dalam HTML ==================================================

/*      
==============================index.html=======================================

  db.transaction(function(transaction) {

  // untuk mengambil jumlah dan menyaring apakah user sudah pernah mendaftar atau belum
   transaction.executeSql('SELECT NAMA FROM AKUN ;',  [],
     function(transaction, result) {

      if (result != null && result.rows != null) {
          row = result.rows.length;
          $('#jumlahakun').append(row +' Anak');

          //apabila sudah pernah mendaftar maka tidak bisa masuk ke daftar.html
          if(row>0){
            alert("Edisi Bronze Hanya Tersedia untuk 1 User");
          }
          else{
            window.location.href = "daftar.html";
          }
      }
     },errorHandler);
  },errorHandler,nullHandler);

*/


/* 
======================== utama.html ===================================

-------------------------evaluasi () -----------------------

  db.transaction(function(transaction) {

  //untuk mengetahui apakah user sudah pernah melakukan evaluasi pada bulan ini atau belum.
  transaction.executeSql('SELECT waktu FROM LAPORAN ;',  [],
   function(transaction, result) {

    if (result != null && result.rows != null) {
      var waktutes = result.rows.length;
      
      //apabila belum pernah melakukan evaluasi sama sekali
      if (waktutes == 0) {
        window.location.href = "halaman_utama/diagnosa.html";
      }
      
      if (waktutes >= 1) {
        //mengambil waktu terakhir dalam database
        var row = result.rows.item(waktutes-1).waktu;
        var rowLength = row.length;
        var bulantes = Math.abs(parseInt(row[rowLength-6] + row[rowLength-7]));

        //mengambil waktu sekarang
        var now = new Date();
        var monthNow = now.getMonth()+1;
        
        //apabila bulan tes sama dengan bulan sekarang
        if ( bulantes == monthNow) {
          alert('Anda sudah melakukan Evaluasi untuk bulan ini');
        }
        else
        {                   
          window.location.href = "halaman_utama/diagnosa.html";
        }
      }
    }
    
   },errorHandler);
  },errorHandler,nullHandler);


-----------------------------------function terapi ()-------------------------------------

    db.transaction(function(transaction) {

    //untuk mencegah masuk ke terapi apabila user belum melakukan evaluasi
     transaction.executeSql('SELECT waktu FROM LAPORAN ;',  [],
       function(transaction, result) {

        if (result != null && result.rows != null) {
          var waktutes = result.rows.length;

          //apabila tidak ada record dalam laporan
          if (waktutes == 0) {
            alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
            
          }
          else{
            //mengambil waktu terakhir dalam record laporan
            var row = result.rows.item(waktutes-1).waktu;
            var rowLength = row.length;
            var bulantes = Math.abs(parseInt(row[rowLength-6] + row[rowLength-7]));
            
            //mengambil waktu sekarang
            var now = new Date();
            var monthNow = now.getMonth()+1;

            //jika bulan tes dan bulan sekarang berbeda, maka dicegah masuk terapi
            if ( bulantes != monthNow) {
              alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
            }
            else
            {
              
              window.location.href = "halaman_utama/kategori.html";
            }

          }

        }
        
        
       },errorHandler);
    },errorHandler,nullHandler);


----------------------------function laporan ()--------------------------------------

    db.transaction(function(transaction) {

    //untuk mencegah masuk ke laporan apabila user belum melakukan evaluasi
     transaction.executeSql('SELECT ID_LAPORAN FROM LAPORAN ;',  [],
       function(transaction, result) {

        if (result != null && result.rows != null) {
          var jmlrow = result.rows.length;

          //apabila belum pernah melakukan evaluasi maka dicegah masuk ke laporan
          if (jmlrow == 0) {
            alert('Anda Belum Melakukan Evaluasi, silahkan lakukan evaluasi');
          }
          else{
            window.location.href = "halaman_utama/halaman_laporan/laporan.html";
          }

        }
        
        
       },errorHandler);
    },errorHandler,nullHandler);

*/


/*  
=============================== persentase.html ==================================================

// untuk menampilkan persentase nilai yang diperoleh
    RunBody();
    db.transaction(function(transaction) {
      //mengambil id, benar dan salah dari nilai
      transaction.executeSql('SELECT ID_NILAI, BENAR, SALAH FROM NILAI;',  [],
        function(transaction, result) {

          var idn = [], disbenar = [], dissalah = [], distotal = [], bentotal = [], idhtml = [];
          if (result != null && result.rows != null) {
             
              for (var i = 0; i < result.rows.length; i++) {

                  //mengambil id, benar dan salah dari nilai
                   idn[i] = result.rows.item(i).ID_NILAI;
                   disbenar[i] = parseInt(result.rows.item(i).BENAR);
                   dissalah[i] = parseInt(result.rows.item(i).SALAH);
                   distotal[i] = parseInt(disbenar[i] + dissalah[i]);

                   //apabila benar dan salah 0, maka total akan 0
                   if (disbenar[i] == 0 && dissalah[i] == 0) {
                      bentotal[i] = 0;
                   }
                   else{
                    bentotal[i] = parseInt(disbenar[i] / distotal[i] * 100);  
                   }
                   idhtml[i] = 'a'+parseInt(i+1);
                  //saltotal[i] = parseInt(dissalah[i] / distotal[i] * 100);

              }
              
              //menampilkan nilai berupa grafik 
              for (var i = 0; i < result.rows.length; i++) {
                 document.getElementById(idhtml[i]).setAttribute("aria-valuenow", bentotal[i]);
                 document.getElementById(idhtml[i]).style.width = bentotal[i]+'%';
                 document.getElementById(idhtml[i]).innerHTML = bentotal[i]+'%';
              }

            }
              
      },errorHandler);
    },errorHandler,nullHandler);

*/
//=============================================== masukkan terapi ====================================================

		function EntryTerapi(){

			alert("DEBUGGING: we are in the EntryQuestion() function");

	    	if (!window.openDatabase) {
	           alert('Databases are not supported in this browser.');
	           return;
         	}

         	db.transaction(function(transaction){

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Huruf Besar","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Huruf Kecil","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Angka 1-20","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Benda","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Bentuk","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Binatang","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Buah","" ,"" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Belajar", "Warna","" ,"" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Huruf Besar","HB" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Huruf Kecil","HK" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Angka 1-20","AG" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Benda","BD" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Bentuk","BT" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Binatang","BN" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Buah","BU" ,"KO|RE|MH" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(1)", "Warna","WA" ,"KO|RE|MH" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(2)", "Suara LI Sekitar","BN|BD" ,"KO|RE|MH|LI|IJ" ],nullHandler,errorHandler);
         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Identifikasi(2)", "Benda Menurut Fungsinya", "BD|KK" ,"KO|RE|MH|LI|IJ|LO" ],nullHandler,errorHandler);

         			//-------------------------------------------------------------------------------------------

         			transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Huruf Besar","HB","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Huruf Kecil","HK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Angka 1-20","AG","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Benda","BD","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Bentuk","BT","WI|LO|IJ|KG" ],nullHandler,errorHandler);              
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Binatang","BN","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Buah","BU","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Melabel","Warna","WA","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 2","BT","KO|IJ|LO" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 3","BT","KO|IJ|LO" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Matching","Bentuk - 4","BT","KO|IJ|LO" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tepuk Tangan","","IK|MK" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Atas","","IK|MK" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Bawah","","IK|MK" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tangan Ke Samping","","IK|MK" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Kasar","Tutup Muka","","IK|MK" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Acungkan Jempol","","IH|MH" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Tanda Damai","","IH|MH" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Halus","Buka Tutup Telapak Tangan","","IH|MH" ],nullHandler,errorHandler);
	              transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Dasar","Imitasi GM Mulut","Buka Mulut","","IM" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Huruf Besar","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Huruf Kecil","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Angka 1-20","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Bentuk","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Suku Kata","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Petugas Sosial","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Kendaraan","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Kata Kerja","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Ruangan","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Tempat","","" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Belajar","Tubuh","","" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Huruf Besar","HB|WA","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Huruf Kecil","HK|WA","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Angka 1-20","AG|WA","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Bentuk","BT|WA","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Suku Kata","HK","KO|RE|MH|WI" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Petugas Sosial","PS","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Kendaraan","KD","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Kata Kerja","KK","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Ruangan","RU","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Tempat","TM","KO|RE|MH" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(1)","Tubuh","TU","KO|RE|MH" ],nullHandler,errorHandler);

	              	//-------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Identifikasi Bebas / Pilih Sendiri","","KO|RE|MH|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Kategori / Kelompok","BN|BU|HK|AG","KO|RE|MH|LO|LI" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Menjawab Pertanyaan 'Dimana'","TM|RU|KK","KO|RE|MH|LI|IJ|LO" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Identifikasi(2)","Banyak / Sedikit","BU|BN","KO|AR|IJ|LO" ],nullHandler,errorHandler);

	              	//--------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Huruf Besar","HB|WA","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Huruf Kecil","HK|WA","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Angka 1-20","AG|WA","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Bentuk","BT|WA","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Suku Kata","SK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Petugas Sosial","PS","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Kendaraan","KD","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Kata Kerja","KK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Ruangan","RU","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Tempat","TM","WI|LO|IJ|KG" ],nullHandler,errorHandler);
	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(1)","Tubuh","TU","WI|LO|IJ|KG" ],nullHandler,errorHandler);

	              	//----------------------------------------------------------------------------------------------------------

	              	transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Emosi","EM","WI|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Fungsi Benda","BD|KK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Melabel(2)","Fungsi Anggota Tubuh","TU|KK","WI|LO|IJ|KG" ],nullHandler,errorHandler);

                    //-------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 2","BT|WA","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 3","BT|WA","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Bentuk - 4","BT|WA","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 2","HB","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 3","HB","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Besar - 4","HB","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 2","HK","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 3","HK","KO|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Matching","Huruf Kecil - 4","HK","KO|IJ|LO" ],nullHandler,errorHandler);

                    //-----------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Imitasi Gerak MK","","MK|IK|KO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Imitasi Gerak MH","","MH|IH|KO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Menyusun Pola / Susunan Balok","","MK|IK|MH|IH|KO|IJ|LI" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Imitasi GM Kompleks","Meniru Gambar Sederhana","","MK|IK|MH|IH|KO|IJ|LI" ],nullHandler,errorHandler);

                    //----------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Akademik","Berhitung","AG|BT","KO|RE|MH|AR|LO|IJ" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Akademik","Mewarna","WA|BT","KO|MH|IJ" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Menengah","Bahasa Ekspresif","Urutan Kata Kerja","KK|AG","LO|IJ|KO|LI" ],nullHandler,errorHandler);

                    //-------------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Belajar","Jenis Kelamin","","" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Belajar","Waktu / Jam","","" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Lebih / Kurang","AG","KO|AR|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Jenis Kelamin","JK","KO|RE|MH" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Waktu / Jam","JA|AG","KO|RE|MH" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Identifikasi","Bagian Tubuh Melalui Fungsinya","TU|KK","KO|RE|MH|LI|IJ|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Berhitung","AG|BT|BU|BN|BD|WA","KO|RE|MH|AR|LO|IJ" ],nullHandler,errorHandler);

                    //------------------------------------------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Mengetik Kata & Kalimat","HB|AG|SK","KO|RE|MH|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Membaca Kata / Kalimat","HK|SK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Penjumlahan","AG","KO|RE|MH|AR|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Pengurangan","AG","KO|RE|MH|AR|LO" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Akademik","Menyelesaikan Pertanyaan Sederhana","KK|SK|HK","LO|IJ|KG|LI" ],nullHandler,errorHandler);

                    //---------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 2","BD","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 3","BD","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Pasangan - 4","BD","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 2","BD|RU","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 3","BD|RU","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ruangan - 4","BD|RU","KO|LO|IJ|LI|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 2","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 3","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Benda Ke Nama - 4","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 2","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 3","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Matching","Nama Ke Benda - 4","BD|HK|HB|SK","KO|LO|IJ|KG" ],nullHandler,errorHandler);

                    //---------------------------------------------------------------------------

                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Jenis Kelamin","JK","WI|LO|IJ|KG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Menjelaskan Gambar Dalam Kalimat","KK","WI|LO|IJ|KG|LI" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Bagian Tubuh Melalui Fungsinya","TU","WI|LO|IJ|KG|LI" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO TERAPI(LEVEL, KATEGORI_TANYATERAPI, PILIHAN, ASPEK1, ASPEK2) VALUES (?,?,?,?,?)',["Lanjut","Melabel","Waktu / Jam","JA","WI|LO|IJ|KG" ],nullHandler,errorHandler);




                    // ==========================================isi nilai===========================================


                      var now = new Date();
				      var monthNow = now.getMonth()+1;
				      var yearNow = now.getFullYear();
				      var dateNow = now.getDate();
				      var waktu = dateNow + '-' + monthNow + '-' + yearNow;

                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","AG",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","BD",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","BT",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","BN",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","BU",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","EM",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","HB",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","HK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","JK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","JA",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","KK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","KD",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","PS",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","RU",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","SK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","TM",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","TU",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","1","WA",waktu ],nullHandler,errorHandler);


                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","AR",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","IJ",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","KG",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","KO",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","LO",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","LI",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","RE",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","WI",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","MH",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","IH",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","MK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","IK",waktu ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO NILAI(BENAR, SALAH, KATEGORI_ASPEK, ASPEK, TANGGAL) VALUES (?,?,?,?,?)',["0","0","2","IM",waktu ],nullHandler,errorHandler);


                    //============================================== isi reward ===========================================================

                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["video/salah.ogv","VIDEO","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["video/benar.ogv","VIDEO","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["video/salah.mp4","VIDEO","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["video/benar.mp4","VIDEO","KOSONG" ],nullHandler,errorHandler);
                    
                    //----------------------------------------------- SUARA ------------------------------------------

                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["sound/Bagus.mp3","SUARA","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["sound/Bagus.wav","SUARA","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["sound/Tidak.mp3","SUARA","KOSONG" ],nullHandler,errorHandler);
                    transaction.executeSql('INSERT INTO REWARD(FILE, KATEGORI_REWARD, PILIHAN_REWARD) VALUES (?,?,?)',["sound/Tidak.wav","SUARA","KOSONG" ],nullHandler,errorHandler);




         	});


		}
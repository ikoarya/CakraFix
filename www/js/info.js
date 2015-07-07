var flag;
flag = 0;

function maju () {
	if (flag == 8) {
		flag == 8;
	}
	else{
		flag++;
	}
	main (flag);	
}
function mundur(){
	if (flag == 0) {
		flag == 0;
	}
	else{
		flag--;
	}
	main(flag);
}

function main(flag){
	if (flag == 0) {
		document.getElementById('konten').innerHTML = '<p ><strong id="merah">Gejala autis</strong> adalah memiliki gangguan pada interaksi sosial, komunikasi, imajinasi serta pola perilaku yang repetitive (berulang-ulang) dan resistensi terhadap perubahan rutinitas (tidak pernah bosan melakukan hal yang sama) setiap hari.</p>';
		document.getElementById('prev').disabled = true;
	}
	else if(flag == 1){
		document.getElementById('konten').innerHTML = '<p ><strong id="merah">Biomedical Intervention Therapy</strong>adalah adalah ilmu medis yang menerapi masalah neurobiologis dan biokimiawi yang terdapat pada autistik.</p><p> Autisme <strong id="merah">lebih disebabkan</strong> karena faktor genetik dan faktor lingkungan. Dan kebanyakan anak autistik mengalami masalah enzym, imunitas, dan pencernaan.</strong></p>';
	}
	else if(flag == 3){
		document.getElementById('konten').innerHTML = '<p ><strong id="merah">Antibiotik</strong> dapat menyebabkan terbunuhnya bakteri jahat dan bakteri baik. Sehingga tumbuh jamur yang dapat merusak dinding usus dan menyebabkan <i>leaky gut syndrome</i>. Sehingga terjadi gangguan pencernaan, gangguan penyerapan, gangguan nutrisi ke otak dan hal ini menyebabkan gangguan pada kerja otak dan syaraf.</p>';
	}
	else if(flag == 4){
		document.getElementById('konten').innerHTML = '<p >Biomedical Intervention Therapy merupakan gabungan dari berbagai cabang ilmu yakni toksikologi, neurologi, imunologi, gastroentrologi, hepatologi, biokimia dan lain sebagainya.</p>';
	}
	else if(flag == 5){
		document.getElementById('konten').innerHTML = '<p >Biomedical Intervention Therapy terdiri dari <i>restrictive-diet </i>(diet ketat), medikamentosa (obat-obatan), dan suplemen.</p><p ><strong id="merah">Diet</strong> dilakukan pada berbagai makanan yang diketahui mempunyai efek yang tidak baik pada anak autistik.</p>';
	}
	else if(flag == 6){
		document.getElementById('konten').innerHTML = '<p ><strong id="merah">Pantangan Makanan</strong> untuk penyandang autis:</p><p> 1. Sumber kasein, <strong id="merah">segala jenis susu</strong>, seperti: keju, yogurt, es krim, dan lain sebagainya. Efek mulai terlihat 2-3 hari hingga 10-14 hari. </p>';
	}
	else{
		document.getElementById('konten').innerHTML = '<p> 2. Sumber glutein, <strong id="merah">segala produk tepung</strong>, seperti: mi, roti biskuit, dan lain sebagainya. Efek mulai terlihat 3-4 minggu hingga 7-9 bulan.</p><p> 3. <strong id="merah">Gula murni maupun olahan</strong>, seperti: gula pasir, gula batu/gula merah/gula jawa /aren/kelapa, sirup, permen, madu, sari kurma, dan lain sebagainya.</p>';
		document.getElementById('next').disabled = true;
	};
	$('#konten').flowtype({fontRatio: 35});
}
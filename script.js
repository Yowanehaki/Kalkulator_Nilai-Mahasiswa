function hitungNilai() {
    //Membuat ketentuan bobot masing-masing nilai
    const bobotTugas = 0.3;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;
  
    //Mengambil nilai input
    let tugas = parseFloat(document.getElementById('tugas').value);
    let uts = parseFloat(document.getElementById('uts').value);
    let uas = parseFloat(document.getElementById('uas').value);
  
    //Mengecek apakah input yang kita masukkan valid
    if (isNaN(tugas) || tugas < 0 || tugas > 100 ||
        isNaN(uts) || uts < 0 || uts > 100 ||
        isNaN(uas) || uas < 0 || uas > 100) {
      document.getElementById('hasil').innerHTML = "Input tidak valid. Masukkan nilai antara 0 dan 100.";
      document.getElementById('tabel-hasil').style.display = "none";
      document.getElementById('lulus-gambar').style.display = "none";
      document.getElementById('gagal-gambar').style.display = "none";
      return;
    }
  
    //Menghitung rata-rata nilai
    let rataRata = (tugas * bobotTugas) + (uts * bobotUTS) + (uas * bobotUAS);
    let nilaiHuruf;
    let status;
  
    //Menetapkan Huruf mutu
    if (rataRata >= 90) nilaiHuruf = 'A';
    else if (rataRata >= 80) nilaiHuruf = 'B';
    else if (rataRata >= 70) nilaiHuruf = 'C';
    else if (rataRata >= 60) nilaiHuruf = 'D';
    else nilaiHuruf = 'E';
  
    //Mengecek status kelulusan
    status = (rataRata >= 70) ? "Lulus" : "Gagal";
    let kelasStatus = (rataRata >= 70) ? "status-lulus" : "status-gagal";
  
    //Menampilkan hasil-rata, huruf mutu, dan status kelulusan
    document.getElementById('tabel-hasil').style.display = "table";
    document.getElementById('rata-rata-sel').innerText = rataRata.toFixed(2);
    document.getElementById('huruf-sel').innerText = nilaiHuruf;
    document.getElementById('status-sel').innerHTML = `<span class="${kelasStatus}">${status}</span>`;
  
    document.getElementById('hasil').innerHTML = '';
  
    //Menampilkan gambar berdasarkan status
    if (status === "Lulus") {
      document.getElementById('lulus-gambar').style.display = "block";
      document.getElementById('gagal-gambar').style.display = "none";
    } else {
      document.getElementById('lulus-gambar').style.display = "none";
      document.getElementById('gagal-gambar').style.display = "block";
    }
  }
  
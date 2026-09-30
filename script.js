// Buka/tutup menu di HP
const menu = document.getElementById('menu');
document.getElementById('menu-btn').onclick = () => menu.classList.toggle('buka');

// Mode gelap
const modeBtn = document.getElementById('mode-btn');
modeBtn.onclick = () => {
  document.body.classList.toggle('gelap');
  modeBtn.textContent = document.body.classList.contains('gelap') ? 'Mode terang' : 'Mode gelap';
};

// Pesan setelah form dikirim
document.getElementById('form-kontak').onsubmit = (e) => {
  e.preventDefault();
  document.getElementById('pesan-sukses').textContent = 'Terima kasih, pesanmu sudah terkirim!';
  e.target.reset();
};

// Tahun otomatis di footer
document.getElementById('tahun').textContent = new Date().getFullYear();

// Ambil semua elemen yang dibutuhkan
const semuaFoto = document.querySelectorAll('.item-foto img');
const kotakBesar = document.getElementById('kotakBesar');
const gambarBesar = document.getElementById('gambarBesar');
const tombolTutup = document.querySelector('.tutup');

// Buka gambar besar saat diklik
semuaFoto.forEach(foto => {
    foto.addEventListener('click', () => {
        kotakBesar.style.display = 'flex';
        gambarBesar.src = foto.src;
    });
});

// Tutup gambar besar
tombolTutup.addEventListener('click', () => {
    kotakBesar.style.display = 'none';
});

// Tutup jika klik latar belakang gelap
kotakBesar.addEventListener('click', (e) => {
    if (e.target === kotakBesar) {
        kotakBesar.style.display = 'none';
    }
});

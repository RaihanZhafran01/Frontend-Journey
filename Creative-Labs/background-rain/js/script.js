const pool = document.getElementById('pool');

function createRain() {
    // Posisi jatuhnya acak di seluruh layar
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // 1. Bikin tetesan hujan
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${x}px`;
    drop.style.setProperty('--drop-y', `${y}px`);
    
    // Kecepatan jatuh dibikin acak biar lebih natural (0.3 - 0.6 detik)
    const fallSpeed = Math.random() * 0.3 + 0.3;
    drop.style.animationDuration = `${fallSpeed}s`;
    
    pool.appendChild(drop);

    // 2. Bikin gelombang saat hujan nyentuh air
    setTimeout(() => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Kecepatan gelombang membesar juga diacak
        ripple.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        pool.appendChild(ripple);

        // Hapus elemen biar browser gak lemot
        setTimeout(() => ripple.remove(), 1000); 
        drop.remove(); 
    }, fallSpeed * 1000); // Gelombang muncul pas tetesan selesai jatuh
}

// JALANKAN HUJAN LEBAT! (Tetesan baru muncul setiap 40 milidetik)
setInterval(createRain, 40);
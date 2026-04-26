document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("leaves-container");
    const leafCount = 30; // Jumlah daun

    for (let i = 0; i < leafCount; i++) {
        createLeaf(container);
    }
});

function createLeaf(container) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // Acak posisi horizontal
    const startX = Math.random() * 100;
    // Acak ukuran
    const size = Math.random() * 15 + 10;
    // Acak kecepatan jatuh
    const duration = Math.random() * 5 + 5;
    // Acak penundaan mulai
    const delay = Math.random() * 5;

    leaf.style.left = `${startX}vw`;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    
    // Memberikan variasi warna daun
    const colors = ['#d35400', '#e67e22', '#f39c12', '#c0392b'];
    leaf.style.background = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(leaf);
}
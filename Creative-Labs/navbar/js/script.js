const toggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const navItems = document.querySelectorAll('.nav-item');

// Fungsi Toggle Sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Animasi tombol hamburger jadi silang (opsional)
    toggleBtn.classList.toggle('open');
});

// Klik menu untuk pindah status Active
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Tutup sidebar otomatis setelah klik (opsional untuk mobile)
        if (window.innerWidth < 768) {
            sidebar.classList.remove('active');
        }
    });
});
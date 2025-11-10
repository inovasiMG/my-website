document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    if(name && email && message) {
        document.getElementById('formMessage').innerText = "Pesan berhasil dikirim!";
        this.reset();
    } else {
        document.getElementById('formMessage').innerText = "Silakan isi semua field!";
    }
});

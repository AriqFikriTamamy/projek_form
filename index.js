const form1 = document.getElementById("formulir1");
const formGejala = document.getElementById("formulir_tidak");
const formPengobatan = document.getElementById("formulir_ya");
const hasil = document.getElementById("halamanHasil");
let totalSkor = 0;

form1.addEventListener("submit", function (e) {
    e.preventDefault();
    const pengobatan = document.querySelector('input[name="pengobatan"]:checked');

    if (!pengobatan) {
        alert("Mohon pilih jawaban pada pertanyaan pengobatan TBC.");
        return;
    }

    form1.style.display = "none";

    if (pengobatan.value === "Ya") {
        formPengobatan.style.display = "block";
    } else {
        formGejala.style.display = "block";
    }
});

formGejala.addEventListener("submit", function (e) {
    e.preventDefault();
    
    totalSkor = 0;

    const checkedRadios = formGejala.querySelectorAll('input[type="radio"]:checked');

    checkedRadios.forEach((radio) => {
        const skor = parseInt(radio.getAttribute("data-score")) || 0;
        totalSkor += skor;
    });

    // Pendefinisian Data
    let data = {
        nama: document.getElementById("nama").value,
        umur: document.getElementById("umur").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        whatsapp: document.getElementById("whatsapp").value,
        domisili: document.querySelector('input[name="domisili"]:checked')?.value,
        alamat: document.getElementById("alamat").value,
        kelurahan: document.getElementById("kelurahan").value,
        instansi: document.querySelector('input[name="instansi"]:checked')?.value || document.getElementById("lainnya-text").value,
        pengobatan: "Tidak",

        batuk_berdahak: document.querySelector('input[name="batuk_berdahak"]:checked')?.value,
        batuk_2_minggu: document.querySelector('input[name="batuk_2_minggu"]:checked')?.value,
        batuk_berdarah: document.querySelector('input[name="batuk_berdarah"]:checked')?.value,
        demam: document.querySelector('input[name="demam"]:checked')?.value,
        keringat: document.querySelector('input[name="keringat"]:checked')?.value,
        bb_turun: document.querySelector('input[name="bb_turun"]:checked')?.value,
        nyeri_dada: document.querySelector('input[name="nyeri_dada"]:checked')?.value,
        lemas: document.querySelector('input[name="lemas"]:checked')?.value,
        kontak: document.querySelector('input[name="kontak"]:checked')?.value,
        hiv: document.querySelector('input[name="hiv"]:checked')?.value,
        pengobatan_sebelumnya: document.querySelector('input[name="pengobatan_sebelumnya"]:checked')?.value,
        diabetes: document.querySelector('input[name="diabetes"]:checked')?.value,
        merokok: document.querySelector('input[name="merokok"]:checked')?.value,
        asrama: document.querySelector('input[name="asrama"]:checked')?.value,

        skor: totalSkor,
    };

    sendToSpreadsheet(data);

    // Ajax untuk POST data ke Google Spreadsheet
    function sendToSpreadsheet(data) {
    fetch("https://script.google.com/macros/s/AKfycbyAhw4KX9J0CFKhvQtMLnPCZvq-peMQZFPtqcOtit5CyYapFSA4ktC-g0Tk7VFFnkn0/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
    })
        // .then((res) => res.text())
        .then((res) => {
            console.log("Respon dari Google Script:", res);
        document.getElementById("successMessage").style.display = "block";
        })
        .catch((err) => {
            console.error("Gagal mengirim ke spreadsheet:", err);
        })
    }

    formGejala.style.display = "none";
    hasil.style.display = "block";

    hasil.innerHTML += `<p><strong>Total Skor Anda: ${totalSkor}</strong></p>`;
});

formPengobatan.addEventListener("submit", function (e) {
    e.preventDefault();

    const checkedRadios = formPengobatan.querySelectorAll('input[type="radio"]:checked');

    checkedRadios.forEach((radio) => {
        const skor = parseInt(radio.getAttribute("data-score")) || 0;
        totalSkor += skor;
    });

    let data = {
        nama: document.getElementById("nama").value.trim(),
        umur: document.getElementById("umur").value.trim(),
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        whatsapp: document.getElementById("whatsapp").value.trim(),
        domisili: document.querySelector('input[name="domisili"]:checked')?.value,
        alamat: document.getElementById("alamat").value.trim(),
        kelurahan: document.getElementById("kelurahan").value.trim(),
        instansi: document.querySelector('input[name="instansi"]:checked')?.value || document.getElementById("lainnya-text").value,
        pengobatan: "Ya",

        faskes_obat: document.getElementById("faskes_obat").value.trim(),
        selesai_pengobatan: document.querySelector('input[name="selesai_pengobatan"]:checked').value,
        skor: totalSkor
    }

    sendToSpreadsheet(data);

    // Ajax untuk POST data ke Google Spreadsheet
    function sendToSpreadsheet(data) {
    fetch("https://script.google.com/macros/s/AKfycbyAhw4KX9J0CFKhvQtMLnPCZvq-peMQZFPtqcOtit5CyYapFSA4ktC-g0Tk7VFFnkn0/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
    })
        // .then((res) => res.text())
        .then(() => {
        // console.log("Respon dari Google Script:", res);
        document.getElementById("successMessage").style.display = "block";
        // document.getElementById("formulir").reset();
        })
        .catch((err) => {
            console.error("Gagal mengirim ke spreadsheet:", err);
        })
    }

    formPengobatan.style.display = "none";
    hasil.style.display = "block";

    hasil.innerHTML += `<p><strong>Total Skor Anda: ${totalSkor}</strong></p>`;
});



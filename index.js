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

    formPengobatan.style.display = "none";
    hasil.style.display = "block";

    hasil.innerHTML += `<p><strong>Total Skor Anda: ${totalSkor}</strong></p>`;
});
//       document
//         .getElementById("formulir")
//         .addEventListener("submit", function (e) {
//           e.preventDefault();

//           const nama = document.getElementById("nama").value.trim();
//           const umur = document.getElementById("umur").value.trim();
//           const gender = document.querySelector('input[name="gender"]:checked');
//           const whatsapp = document.getElementById("whatsapp").value.trim();
//           const fasilitas = document.getElementById("fasilitas").value.trim();
//           const pengobatan = document.querySelector('input[name="pengobatan"]:checked');
//           const selesai = document.querySelector('input[name="selesai"]:checked');

//           if (!nama || !umur || !gender || !whatsapp || !fasilitas || !pengobatan || !selesai) {
//             alert("Mohon lengkapi semua data wajib (*).");
//             return;
//           }

//           // Simulasi kirim
//           document.getElementById("successMessage").style.display = "block";
//           document.getElementById("formulir").reset();

//           // Auto hide success after 3 seconds
//           setTimeout(() => {
//             document.getElementById("successMessage").style.display = "none";
//           }, 3000);
//         });

//       document
//         .getElementById("formulir")
//         .addEventListener("submit", function (e) {
//           e.preventDefault();

//           const data = {
//             nama: document.getElementById("nama").value.trim(),
//             umur: document.getElementById("umur").value.trim(),
//             gender: document.querySelector('input[name="gender"]:checked')
//               ?.value,
//             whatsapp: document.getElementById("whatsapp").value.trim(),
//             domisili: document.querySelector('input[name="domisili"]:checked')
//               ?.value,
//             alamat: document.getElementById("alamat").value.trim(),
//             kelurahan: document.getElementById("keluarahn").value.trim(),
//             instansi:
//               document.querySelector('input[name="instansi"]:checked')
//                 ?.value === "Yang lain"
//                 ? document.getElementById("lainnya-text").value.trim()
//                 : "Dinsos DIY",
//             pengobatan: document.querySelector(
//               'input[name="pengobatan"]:checked'
//             )?.value,
//             // fasilitas: document.getElementById("fasilitas").value.trim(),
//             selesai: document.querySelector('input[name="selesai"]:checked')
//               ?.value,
//           };

//           fetch(
//             "https://script.google.com/macros/s/AKfycbxhWzXyBqioT8mqbEqyeRZiB9CfN7Fs-GPZZZBoTyXQd8WhRrroLICxS1HgMXI_4fRP/exec",
//             {
//               method: "POST",
//               mode: "no-cors",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(data),
//             }
//           )
//             .then(() => {
//               document.getElementById("successMessage").style.display = "block";
//               document.getElementById("formulir").reset();
//               setTimeout(() => {
//                 document.getElementById("successMessage").style.display =
//                   "none";
//               }, 3000);
//             })
//             .catch((err) => {
//               alert("Terjadi kesalahan saat mengirim data.");
//               console.error(err);
//             });
//         });


//       document
//         .getElementById("lainnya-radio")
//         .addEventListener("change", function () {
//           document.getElementById("lainnya-text").disabled = false;
//         });

//       const dinsosRadio = document.querySelector('input[value="Dinsos DIY"]');
//       dinsosRadio.addEventListener("change", function () {
//         document.getElementById("lainnya-text").disabled = true;
//         document.getElementById("lainnya-text").value = "";
//       });

//     //   Logika ke frmulir 2
// const step1 = document.getElementById("formulir1");
// const step2 = document.getElementById("formulir2");

// step1.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const pengobatan = document.querySelector('input[name="pengobatan"]:checked');
//   if (pengobatan && pengobatan.value === "Tidak") {
//     step1.style.display = "none";
//     step2.style.display = "block";
//   } else {
//     alert("Terima kasih! Anda sedang menjalani pengobatan.");
//   }
// });

// step2.addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Terima kasih! Formulir Anda telah dikirim.");
// });

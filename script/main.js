const filterJenis = document.getElementById("filterJenis");
const filterLokasi = document.getElementById("filterLokasi");
const produkCards = document
  .querySelectorAll(".card-produk")
  .forEach((card) => {
    card.closest(".col-md-4").style.display = ""; // ensure default visible
  });

function filterProduk() {
  const jenisValue = filterJenis.value.toLowerCase();
  const lokasiValue = filterLokasi.value.toLowerCase();

  document.querySelectorAll(".col-md-4").forEach((card) => {
    const jenis = card.getAttribute("data-jenis")?.toLowerCase() || "";
    const lokasi = card.getAttribute("data-lokasi")?.toLowerCase() || "";

    console.log(jenis, lokasi);
    // logic: show only if cocok semua filter
    if (
      (jenisValue === "" || jenis.includes(jenisValue)) &&
      (lokasiValue === "" || lokasi.includes(lokasiValue))
    ) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

filterJenis.addEventListener("change", filterProduk);
filterLokasi.addEventListener("change", filterProduk);

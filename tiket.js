function submit() {
    let JumlahTiket = parseInt(document.getElementById("jml_tiket").value)
    let Tujuan = document.getElementById("tujuan").value
    let harga = document.getElementById("harga").value
    let member = document.getElementById("member")
    let TotalBayar = document.getElementById("TotalBayar")

    // Konversi string menjadi float
    let hargaFloat = parseFloat(harga.replace("Rp", "").replace(",00", "").replace(".", "").replace(" ", ""));
    console.log(harga);




    if (member.checked) {
        document.getElementById("diskonPersen").value = "10%"
        TotalBayar.value = (JumlahTiket * hargaFloat - (JumlahTiket * hargaFloat * 0.1))
    } else {
        document.getElementById("diskonPersen").value = "0%"
        TotalBayar.value = (JumlahTiket * hargaFloat)
    }

    let rupiahFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(parseFloat(TotalBayar.value));
    // console.log(rupiahFormat);
    TotalBayar.value = rupiahFormat
}

function showHarga() {
    let Tujuan = document.getElementById("tujuan").value
    let harga = document.getElementById("harga")

    if (Tujuan === "Bandung") {
        harga.value = 20000;



    } else if (Tujuan === "Jakarta") {
        harga.value = 30000;
    }

    let rupiahFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(parseFloat(harga.value));
    // console.log(rupiahFormat);
    harga.value = rupiahFormat





}

function reset() {
    location.reload()

}

function showDiskon() {
    let member = document.getElementById("member")
    if (member.checked) {
        document.getElementById("diskonPersen").value = "10%"

    } else {
        document.getElementById("diskonPersen").value = "0%"
    }

}
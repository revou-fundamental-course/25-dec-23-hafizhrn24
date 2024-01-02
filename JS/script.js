function toggleShape() {
    var triangleSection = document.getElementById("triangleSection");
    var parallelogramSection = document.getElementById("parallelogramSection");
    var shapeLabel = document.getElementById("shapeLabel"); // Tambahkan variabel untuk label bentuk

    if (document.getElementById("shapeSwitch").checked) {
        triangleSection.style.display = "block";
        parallelogramSection.style.display = "none";
        shapeLabel.innerHTML = "Segitiga"; // Perbarui label bentuk
    } else {
        triangleSection.style.display = "none";
        parallelogramSection.style.display = "block";
        shapeLabel.innerHTML = "Jajargenjang"; // Perbarui label bentuk
    }

    // Reset hasil perhitungan saat switch button ditekan
    resetResult();
}


function calculateArea() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (document.getElementById("shapeSwitch").checked) {
        // Segitiga
        var base = parseFloat(document.getElementById("base").value);
        var height = parseFloat(document.getElementById("height").value);

        if (!isNaN(base) && !isNaN(height)) {
            var area = 0.5 * base * height;
            resultDiv.innerHTML = `<h3>Luas Segitiga:</h3><p>${area}</p>`;
        } else {
            resultDiv.innerHTML = "<p>Masukkan angka yang valid untuk alas dan tinggi.</p>";
        }
    } else {
        // Jajargenjang
        var basePar = parseFloat(document.getElementById("basePar").value);
        var heightPar = parseFloat(document.getElementById("heightPar").value);

        if (!isNaN(basePar) && !isNaN(heightPar)) {
            var areaPar = basePar * heightPar;
            resultDiv.innerHTML = `<h3>Luas Jajargenjang:</h3><p>${areaPar}</p>`;
        } else {
            resultDiv.innerHTML = "<p>Masukkan angka yang valid untuk alas dan tinggi.</p>";
        }
    }
}
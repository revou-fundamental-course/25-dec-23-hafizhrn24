// Check the initial state on page load
document.addEventListener("DOMContentLoaded", function () {
  var shapeSwitch = document.getElementById("shapeSwitch");
  var triangleSection = document.getElementById("triangleSection");
  var parallelogramSection = document.getElementById("parallelogramSection");
  var shapeLabel = document.getElementById("shapeLabel");
  var id_keliling = document.getElementById("id_keliling");
  var id_luas = document.getElementById("id_luas");
  var keterangan_keliling = document.getElementById("keterangan_keliling");
  var keterangan_luas = document.getElementById("keterangan_luas");

  if (shapeSwitch.checked) {
    triangleSection.style.display = "block";
    parallelogramSection.style.display = "none";
    shapeLabel.innerHTML = "Luas";

  } else {
    triangleSection.style.display = "none";
    parallelogramSection.style.display = "block";
    shapeLabel.innerHTML = "Keliling";
    
    // Show parallelogram image, hide triangle image
    id_keliling.style.display = "block";
    id_luas.style.display = "none";
    keterangan_keliling.style.display = "block";
    keterangan_luas.style.display = "none";
    
  }
});

function toggleShape() {
  var triangleSection = document.getElementById("triangleSection");
  var parallelogramSection = document.getElementById("parallelogramSection");
  var shapeLabel = document.getElementById("shapeLabel");
  var id_keliling = document.getElementById("id_keliling");
  var id_luas = document.getElementById("id_luas");
  var keterangan_keliling = document.getElementById("keterangan_keliling");
  var keterangan_luas = document.getElementById("keterangan_luas");

  if (document.getElementById("shapeSwitch").checked) {
    triangleSection.style.display = "block";
    parallelogramSection.style.display = "none";
    shapeLabel.innerHTML = "Luas";

    // Show triangle image, hide parallelogram image
    id_keliling.style.display = "none";
    id_luas.style.display = "block";
    keterangan_keliling.style.display = "none";
    keterangan_luas.style.display = "block";
  } else {
    triangleSection.style.display = "none";
    parallelogramSection.style.display = "block";
    shapeLabel.innerHTML = "Keliling";

    // Show parallelogram image, hide triangle image
    id_keliling.style.display = "block";
    id_luas.style.display = "none";
    keterangan_keliling.style.display = "block";
    keterangan_luas.style.display = "none";
  }

  // Reset hasil perhitungan saat switch button ditekan
  resetResult();
}

function resetCalculation() {
  // Reset input values
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";

  // Reset result
  resetResult();
}

function resetResult() {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  var shapeLabel = document.getElementById("reset");
  shapeLabel.innerHTML = "";
}

function calculateArea() {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (document.getElementById("shapeSwitch").checked) {
    // Segitiga
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height)) {
      area = 0.5 * base * height;
      resultDiv.innerHTML = `<h3>Luas Segitiga:</h3>
                               <p>Formula: (1/2) * ${base} * ${height}</p>
                               <p>Hasil = ${area}</p>`;
    } else {
      resultDiv.innerHTML =
        "<p>Masukkan angka yang valid untuk alas dan tinggi.</p>";
    }
  } else {
    // Segitiga
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
      var perimeterTriangle = side1 + side2 + side3;
      resultDiv.innerHTML = `<h3>Keliling Segitiga:</h3>
                             <p>Rumus : ${side1} + ${side2} + ${side3}</p>
                             <p>hasil = ${perimeterTriangle}</p>`;
    } else {
      resultDiv.innerHTML =
        "<p>Masukkan angka yang valid untuk panjang sisi-sisi segitiga.</p>";
    }
  }
}

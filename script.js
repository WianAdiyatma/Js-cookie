const card = document.querySelector(".card");
const accept = document.querySelector(".button");
const a = document.querySelector(".a");
const close = document.querySelector("span");

close.addEventListener("click", function () {
  card.style.display = "none";
});

a.addEventListener("click", function (event) {
  event.preventDefault();
  card.style.display = "none";
});

if (!localStorage.getItem("cookies")) {
  card.style.display = "block"; // Tampilkan popup jika belum diset
} else {
  card.style.display = "none"; // Sembunyikan popup jika sudah ada
}

accept.addEventListener("click", (e) => {
  e.preventDefault();
  if (!localStorage.getItem("cookies")) {
    localStorage.setItem("cookies", true);
  }
  card.style.display = "none"; // Sembunyikan popup jika sudah ada
});

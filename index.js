const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const diffImg = document.querySelectorAll("img");

window.onload = function () {
  const randomName = Math.random() < 0.5 ? "roma" : "greece";
  RotationImg(randomName);
};

btn1.onclick = function () {
  RotationImg("grand canyon");
};
btn2.onclick = function () {
  RotationImg("easter island");
};

function RotationImg(nome) {
  fetch(`https://api.pexels.com/v1/search?query=[${nome}]`, {
    method: "GET",
    headers: {
      Authorization: "UziWs1h5CuqfgtZwBCu6fJ5AR3ftdVXkx86kbiISTcpm4K5ep834zIiT",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NEL REPERIMENTO DATI");
      }
    })
    .then((oggetti) => {
      console.log(oggetti.photos);

      diffImg.forEach((img, index) => {
        img.setAttribute("src", `${oggetti.photos[index].src.tiny}`);
      });
    })
    .catch((error) => console.log(error));
}

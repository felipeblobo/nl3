// create map
const map = L.map("mapid").setView([-12.261787, -38.9637843], 14);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and mapp
map.on("click", function (event) {
  console.log(event);
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remover all icons
  marker && map.removeLayer(marker);

  //add icon to layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field

function addPhotoField() {
  // catch photos container #images
  const container = document.querySelector("#images");
  // catch container to duplicate it .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // duplicate last photo
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verify if field is empty, if it is empty no add to images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // clean field before add to images

  input.value = "";

  // add the duplicate photo to container image
  container.appendChild(newFieldContainer);
}

// exluir foto
function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active")
  })

  const button = event.currentTarget
  button.classList.add("active")

  const input = document.querySelector('[name="open_on_weekends"]')
  input.value = button.dataset.value
}

  // function validate(event) {
  // validar lat e lng
  // if (document.querySelector(".select-point").value = "")
      // event.preventDefault()
      // alert('Indique a localização do orfanato no mapa.')}

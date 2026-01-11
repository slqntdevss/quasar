document.title = "Quasar";
const title = document.querySelectorAll("#title");
const address = document.getElementById("address");
title.forEach((t) => (t.textContent = "Quasar"));
address.placeholder = "browse the internet";

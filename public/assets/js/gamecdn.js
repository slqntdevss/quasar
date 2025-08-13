let saved =
	localStorage.getItem("cdnBase") ||
	"https://cdn.statically.io/gl/3kh0/3kh0-assets/main/";
if (saved && !saved.endsWith("/")) saved += "/";
let base = document.querySelector("base");
if (!base) {
	base = document.createElement("base");
	document.head.prepend(base);
}
console.log(saved);
base.href = saved;

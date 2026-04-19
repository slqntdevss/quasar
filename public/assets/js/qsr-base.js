function computeDeployBase() {
	const meta = document.querySelector('meta[name="qsr-base"]');
	const rel = (meta && meta.getAttribute("content")) || "./";
	const url = new URL(rel, location.href);
	let pathname = url.pathname;
	if (!pathname.endsWith("/")) pathname += "/";
	return { origin: url.origin, path: pathname };
}

const _b = computeDeployBase();
export const QSR_ORIGIN = _b.origin;
export const QSR_BASE_PATH = _b.path;
export const QSR_BASE = _b.origin + _b.path;

export function qsrUrl(p) {
	return QSR_BASE + String(p).replace(/^\/+/, "");
}

export function qsrPath(p) {
	return QSR_BASE_PATH + String(p).replace(/^\/+/, "");
}

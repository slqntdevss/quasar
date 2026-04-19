(function () {
	const base = new URL("./", self.location.href).pathname;
	const p = (s) => base + s.replace(/^\/+/, "");
	self.__uv$config = {
		prefix: p("qsr/"),
		encodeUrl: Ultraviolet.codec.plain.encode,
		decodeUrl: Ultraviolet.codec.plain.decode,
		handler: p("vu/uv.handler.js"),
		client: p("vu/uv.client.js"),
		bundle: p("vu/uv.bundle.js"),
		config: p("vu/vu.config.js"),
		sw: p("vu/uv.sw.js"),
	};
})();

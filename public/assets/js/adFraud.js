// you're welcome mr slqnt - the ching.x64
// add the ads

// banner config
globalThis.atOptions = {
    'key' : '94d3e6b189169213c968a0f35cf2c24b',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
};
// native banner container
document.body.insertAdjacentHTML('beforeend', '<div id="container-976e351ff44eac06013f3d88e10200d0"></div>');

// js scripts
const scripts = [
    '//brillianceremisswhistled.com/94d3e6b189169213c968a0f35cf2c24b/invoke.js', // banner
    '//brillianceremisswhistled.com/a3/4b/09/a34b09ba540c45a83f0731ef7f9fce12.js', // popunder
    '//brillianceremisswhistled.com/f6/6b/19/f66b199727e844c6fd4d4c67f3c67c72.js', // social bar
    '//brillianceremisswhistled.com/976e351ff44eac06013f3d88e10200d0/invoke.js' // native banner
];

scripts.forEach(link => {
    const script = document.createElement('script');
    script.src = link;
    document.body.appendChild(script);
});
// ad fraud!
(function() {
    // rename window.open to windowopen
    globalThis.windowopen = window.open
    window.open = () => null;

    // hide element
    const hideElement = (el) => {
        el.style.position = "absolute";
        el.style.left = "-99999px";
        el.style.top = "-99999px";
        el.style.width = "1px";
        el.style.height = "1px";
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
    };

    // patch iframes
    const protectIframe = (iframe) => {
        if (iframe.src === "about:blank") {
            hideElement(iframe);
            
            try {
                iframe.addEventListener('load', () => {
                    try {
                        const win = iframe.contentWindow;
                        const doc = iframe.contentDocument;
                        
                        if (!win || !doc) return;

                        win.open = () => null;
                        win.location.assign = () => {};
                        win.location.replace = () => {};

                        setInterval(() => {
                            doc.querySelectorAll('[href]').forEach(el => {
                                el.style.pointerEvents = "none";
                                el.removeAttribute('href');
                            });
                            doc.querySelectorAll('a').forEach(el => {
                                el.style.pointerEvents = "none";
                                el.onclick = (e) => { e.preventDefault(); return false; };
                            });
                        }, 1000);

                        doc.addEventListener('click', e => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            e.stopImmediatePropagation();
                            return false;
                        }, true);
                    } catch (e) {}
                });
            } catch (e) {}
        }
    };

    // hide ad elements
    const hideAds = () => {
        document.querySelectorAll(`#${CSS.escape("container-976e351ff44eac06013f3d88e10200d0")}`).forEach(hideElement);
        document.querySelectorAll(`#${CSS.escape("atContainer-94d3e6b189169213c968a0f35cf2c24b")}`).forEach(hideElement);

        document.querySelectorAll('.container-976e351ff44eac06013f3d88e10200d0__link').forEach(el => {
            el.removeAttribute('href');
            el.style.pointerEvents = "none";
            el.onclick = (e) => { e.preventDefault(); return false; };
        });
    };

    // start hiding ads
    setInterval(() => {
        document.querySelectorAll('iframe').forEach(protectIframe);
        hideAds();
    }, 1000);
})();

// prevent redirects fully with onbeforeunload (except for button clicks)
let allowRedirect = false;

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.tagName === "H1") {
        allowRedirect = true;
        setTimeout(() => { allowRedirect = false; }, 1000);
    }
}, true);

window.onbeforeunload = function(e) {
    if (allowRedirect) return undefined;
    
    e.preventDefault();
    e.returnValue = '';
    console.log('[BLOCKED REDIRECT]', {
        timestamp: new Date().toISOString(),
        stack: new Error().stack
    });
    return '';
};

Object.defineProperty(window, 'onbeforeunload', {
    set: function(val) {
        console.log('[ATTEMPT TO OVERRIDE BLOCKER]', {
            timestamp: new Date().toISOString(),
            stack: new Error().stack
        });
    },
    get: function() {
        return function(e) {
            if (allowRedirect) return undefined;
            
            e.preventDefault();
            e.returnValue = '';
            return '';
        };
    },
    configurable: false,
    enumerable: true
});

window.addEventListener('beforeunload', function(e) {
    if (allowRedirect) return;
    
    e.preventDefault();
    e.returnValue = '';
    console.log('[BLOCKED VIA LISTENER]', {
        timestamp: new Date().toISOString(),
        stack: new Error().stack
    });
    return '';
}, true);
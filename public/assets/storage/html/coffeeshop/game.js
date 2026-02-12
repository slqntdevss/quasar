! function r(t, e, a) {
    function o(n, s) {
        if (!e[n]) {
            if (!t[n]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(n, !0);
                if (i) return i(n, !0);
                var d = new Error("Cannot find module '" + n + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var u = e[n] = {
                exports: {}
            };
            t[n][0].call(u.exports, (function(e) {
                return o(t[n][1][e] || e)
            }), u, u.exports, r, t, e, a)
        }
        return e[n].exports
    }
    for (var i = "function" == typeof require && require, n = 0; n < a.length; n++) o(a[n]);
    return o
}({
    1: [function(t, e, a) {
        "use strict";
        var i = t("./signals"),
            n = t("./dom"),
            s = t("./screens"),
            l = null,
            d = null,
            u = null;

        function remove() {
            l._sounds.splice(l._sounds.indexOf(this), 1)
        }

        function play(t, e) {
            if (l) {
                var a = l.play(t, null == e ? 1 : e, !1);
                return a.onStop.addOnce(remove, a), a
            }
            return null
        }

        function playAmbient(t, e) {
            if (l) {
                if (d) {
                    if (d.key === t) return d;
                    d.fadeOut(1e3)
                }
                return (d = l.play(t, 0, !0)).fadeTo(1e3, null == e ? .75 : e), d.onStop.addOnce(remove, d), d
            }
            return null
        }

        function playMusic(t, e, a) {
            if (l) {
                if (u) {
                    if (u.key === t) return u;
                    u.fadeOut(.5 * a)
                }
                return (u = l.play(t, 0, !0)).fadeTo(a, e), u.onStop.addOnce(remove, u), u
            }
            return null
        }

        function buttonSounds(t) {
            t.addEventListener("mouseenter", (function() {
                this.disabled || play("menu_button_beep2")
            })), t.addEventListener("mousedown", (function() {
                this.disabled || play("menu_button_beep1")
            }))
        }
        i.onLoad((function(t) {
            (l = t.sound).muteOnPause = !1
        })), n.findIn(s.main.element, "button", buttonSounds), n.findIn(s.confirmQuit.element, "button", buttonSounds), n.findIn(s.tutorial1.element, "button", buttonSounds), n.findIn(s.tutorial3.element, "button", buttonSounds), n.findIn(s.main.element, "button", buttonSounds), window.playAmbient = playAmbient, window.playMusic = playMusic, e.exports = {
            play: play,
            playAmbient: playAmbient,
            playMusic: playMusic
        }
    }, {
        "./dom": 10,
        "./screens": 19,
        "./signals": 22
    }],
    2: [function(t, e, a) {
        "use strict";
        var i = t("./numbers"),
            n = t("./signals"),
            s = t("./state"),
            l = t("./screens").game.element.querySelector(".balance");

        function update() {
            l.textContent = i.format(s.data.money / 100)
        }
        n.onInventoryBuy(update), n.onInventoryUndo(update), e.exports = {
            update: update
        }
    }, {
        "./numbers": 14,
        "./screens": 19,
        "./signals": 22,
        "./state": 25
    }],
    3: [function(t, e, a) {
        "use strict";
        t("./random");
        var i = t("./tooltip"),
            n = {
                price: "game/bubbles/price.png",
                reputation: "game/bubbles/reputation.png",
                weather: "game/bubbles/weather.png",
                weather_cold: "game/bubbles/weather_cold.png"
            };

        function BubbleContemplate(t) {
            Phaser.Image.call(this, t, -20, 0, "game", "game/bubbles/2_green.png"), this.visible = !1, this.anchor.set(0, 1), this.scale.set(.5), this.inputEnabled = !0, this.input.useHandCursor = !0, this.events.onInputDown.add(this.showTooltip, this), this.symbol = t.make.image(60, -108, "game"), this.symbol.anchor.set(.5), this.addChild(this.symbol), this.arrow = t.make.image(80, -122, "game", "game/bubbles/decrease.png"), this.arrow.anchor.set(.5), this.addChild(this.arrow), this.reason = null, this.direction = 0, this.tooltipShown = !1
        }
        BubbleContemplate.prototype = Object.create(Phaser.Image.prototype), BubbleContemplate.prototype.constructor = BubbleContemplate, BubbleContemplate.prototype.showTooltip = function() {
            var t;
            this.tooltipShown || ("weather" == this.reason ? t = 0 === this.direction ? 0 : 1 : "price" == this.reason ? t = 0 === this.direction ? 2 : 3 : "reputation" == this.reason && (t = 0 === this.direction ? 4 : 5), this.game.world.add(new i(this.game, this.parent.x, 420, t)), this.tooltipShown = !0)
        }, BubbleContemplate.prototype.spawn = function() {
            this.visible = !1, this.arrow.visible = !1, this.alpha = 0, this.position.y = -75, this.tooltipShown = !1
        }, BubbleContemplate.prototype.show = function(t, e) {
            this.reason = t, this.direction = e, this.symbol.frameName = n[t], this.frameName = e ? "game/bubbles/2_red.png" : "game/bubbles/2_green.png", this.visible = !0, "price" === t && 0 !== e ? (this.arrow.visible = !0, this.symbol.position.set(54, -104), this.symbol.scale.set(1.2)) : (this.symbol.position.set(60, -108), this.symbol.scale.set(1.35)), this.game.add.tween(this).to({
                alpha: .975
            }, 500, Phaser.Easing.Cubic.Out, !0, 250), this.game.add.tween(this).to({
                y: -100
            }, 1e3, Phaser.Easing.Elastic.Out, !0, 250)
        }, BubbleContemplate.prototype.hide = function() {
            this.game.add.tween(this).to({
                alpha: 0,
                y: -125
            }, 750, Phaser.Easing.Cubic.Out, !0, 1e3)
        }, e.exports = BubbleContemplate
    }, {
        "./random": 17,
        "./tooltip": 29
    }],
    4: [function(t, e, a) {
        "use strict";
        var i = t("./tooltip"),
            n = {
                coffee: "game/bubbles/coffee.png",
                milk: "game/bubbles/milk.png",
                sugar: "game/bubbles/sugar.png"
            };

        function BubbleReaction(t) {
            Phaser.Image.call(this, t, -30, 0, "game"), this.visible = !1, this.anchor.set(0, 1), this.scale.set(.5), this.inputEnabled = !0, this.input.useHandCursor = !0, this.events.onInputDown.add(this.showTooltip, this), this.symbol = t.make.image(60, -108, "game"), this.symbol.anchor.set(.5), this.addChild(this.symbol), this.arrow = t.make.image(76, -126, "game"), this.arrow.anchor.set(.5), this.addChild(this.arrow), this.tooltipShown = !1, this.ingredient = null, this.direction = 0, this.withReservation = !1
        }
        BubbleReaction.prototype = Object.create(Phaser.Image.prototype), BubbleReaction.prototype.constructor = BubbleReaction, BubbleReaction.prototype.showTooltip = function() {
            var t;
            this.tooltipShown || ("coffee" === this.ingredient ? 0 === this.direction ? t = this.withReservation ? 6 : 7 : this.direction > 0 ? t = this.withReservation ? 8 : 9 : this.direction < 0 && (t = this.withReservation ? 10 : 11) : "milk" === this.ingredient ? 0 === this.direction ? t = this.withReservation ? 12 : 13 : this.direction > 0 ? t = this.withReservation ? 14 : 15 : this.direction < 0 && (t = this.withReservation ? 16 : 17) : "sugar" === this.ingredient && (0 === this.direction ? t = this.withReservation ? 18 : 19 : this.direction > 0 ? t = this.withReservation ? 20 : 21 : this.direction < 0 && (t = this.withReservation ? 22 : 23)), this.game.world.add(new i(this.game, this.parent.x, 420, t)), this.tooltipShown = !0)
        }, BubbleReaction.prototype.spawn = function() {
            this.visible = !1, this.alpha = 0, this.position.y = -75, this.tooltipShown = !1, this.arrow.visible = !1
        }, BubbleReaction.prototype.show = function(t, e, a) {
            this.ingredient = t, this.direction = e, this.withReservation = a, this.symbol.frameName = n[t], this.frameName = e ? "game/bubbles/1_red.png" : "game/bubbles/1_green.png", this.visible = !0, 0 !== e ? (e > 0 ? this.arrow.frameName = "game/bubbles/increase.png" : e < 0 && (this.arrow.frameName = "game/bubbles/decrease.png"), this.arrow.visible = !0, this.symbol.position.set(56, -100), this.symbol.scale.set(1.1)) : (this.symbol.position.set(60, -108), this.symbol.scale.set(1.35)), this.game.add.tween(this).to({
                alpha: .975
            }, 500, Phaser.Easing.Cubic.Out, !0, 250), this.game.add.tween(this).to({
                y: -100
            }, 1e3, Phaser.Easing.Elastic.Out, !0, 250).onComplete.addOnce(this.hide, this)
        }, BubbleReaction.prototype.hide = function() {
            this.game.add.tween(this).to({
                alpha: 0,
                y: -125
            }, 750, Phaser.Easing.Cubic.Out, !0, 2e3)
        }, e.exports = BubbleReaction
    }, {
        "./tooltip": 29
    }],
    5: [function(t, e, a) {
        "use strict";
        var i = t("./numbers");

        function money(t) {
            return "$" + i.format(t / 100)
        }

        function decimal(t) {
            return t.toFixed(1)
        }
        var n = {
            money: money,
            reputation: function percent(t) {
                return Math.round(100 * t) + "%"
            },
            price: money,
            expenditures: money,
            revenues: money,
            profitsLosses: money,
            recipeCoffee: decimal,
            recipeMilk: decimal,
            recipeSugar: decimal,
            inventoryCups: decimal,
            inventoryCoffee: decimal,
            inventoryMilk: decimal,
            inventorySugar: decimal
        };
        e.exports = function chart(t, e, a, i, s) {
            for (var l = '<svg viewBox="0 0 210 170" width="210" height="170"><rect width="100%" height="150" fill="#3f3f3f" stroke="#616161" stroke-width="2"/>', d = 0; d < e.length; d++) {
                l += '<line stroke="#525252" stroke-width="1" x1="' + (S = 200 / (e.length - 1) * d + 5) + '" y1="1" x2="' + S + '" y2="149"/><text x="' + S + '" y="161" text-anchor="middle">' + e[d] + "</text>"
            }
            var u = 0,
                c = "";
            for (var m in t) {
                var h = t[m],
                    p = "";
                s && (s[0] === m ? p = "visible active" : s.indexOf(m) >= 0 && (p = "visible"));
                var f = '<polyline class="' + p + '" fill="none" stroke="' + a[u] + '" id="' + i + m + '" points="',
                    y = "money" === m ? 0 : Math.min.apply(null, h),
                    g = Math.max.apply(null, h) - y,
                    v = null,
                    b = null;
                for (d = 0; d < e.length; d++) {
                    var S = 200 / (e.length - 1) * d + 5,
                        w = g ? 140 * (1 - (h[d] - y) / g) + 5 : 145;
                    if (f += S + "," + w + " ", 0 === d) {
                        var C = m in n ? n[m](h[d]) : h[d];
                        v = '<text class="value ' + p + '" x="' + S + '" y="' + Math.max(16, w - 2) + '" text-anchor="start" id="' + i + m + '-min">' + C + "</text>"
                    }
                    if (d === e.length - 1) {
                        C = m in n ? n[m](h[d]) : h[d];
                        b = '<text class="value ' + p + '" x="' + S + '" y="' + Math.max(16, w - 2) + '" text-anchor="end" id="' + i + m + '-max">' + C + "</text>"
                    }
                }
                l += f + '"/>', c += v + b, u += 1
            }
            return l + c + "</svg>"
        }
    }, {
        "./numbers": 14
    }],
    6: [function(t, e, a) {
        "use strict";
        var i = t("./numbers").mix;
        e.exports = {
            red: function red(t) {
                return (t >> 16) / 255
            },
            green: function green(t) {
                return (t >> 8 & 255) / 255
            },
            blue: function blue(t) {
                return (255 & t) / 255
            },
            rgb2hex: function rgb2hex(t, e, a) {
                return (255 * t << 16) + (255 * e << 8) + 255 * a | 0
            },
            rgbMix: function rgbMix(t, e, a) {
                var n = t >> 8 & 255,
                    s = 255 & t,
                    l = e >> 8 & 255,
                    d = 255 & e;
                return (i(t >> 16, e >> 16, a) << 16) + (i(n, l, a) << 8) + i(s, d, a) | 0
            },
            hex2css: function hex2css(t) {
                return "#" + t.toString(16).padStart(6, "0")
            }
        }
    }, {
        "./numbers": 14
    }],
    7: [function(t, e, a) {
        "use strict";
        var i = t("./screens"),
            n = i.main.element,
            s = i.credits.element;

        function showCredits() {
            n.classList.add("credits-visible"), n.classList.remove("credits-hidden"), s.classList.add("visible"), s.classList.remove("hidden")
        }

        function hideCredits() {
            n.classList.remove("credits-visible"), n.classList.add("credits-hidden"), s.classList.remove("visible"), s.classList.add("hidden")
        }
        n.querySelector('button[data-screen="screen-credits"]').addEventListener("click", showCredits), n.querySelector('button[data-screen="screen-main"]').addEventListener("click", hideCredits), e.exports = {
            show: showCredits,
            hide: hideCredits
        }
    }, {
        "./screens": 19
    }],
    8: [function(t, e, a) {
        "use strict";
        var i = t("./random"),
            n = t("./numbers"),
            s = t("./bubble_contemplate"),
            l = t("./bubble_reaction"),
            d = t("./inventory"),
            u = t("./balance"),
            c = t("./state"),
            m = t("./shop"),
            h = t("./audio"),
            p = {
                businessman: {
                    walk: {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 18,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 19,
                        frameRepeat: 2,
                        offset: [7.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 23,
                        offset: [10.5, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 28,
                        offset: [4, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 23,
                        offset: [12, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 83,
                        offset: [6, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 46,
                        offset: [-5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 57,
                        offset: [-23, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 38,
                        offset: [6.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 43,
                        offset: [6, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                },
                businesswoman: {
                    walk: {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 18,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 1,
                        frameRepeat: 20,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 45,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 23,
                        offset: [-1, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 52,
                        offset: [-1.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 53,
                        offset: [16, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 69,
                        offset: [-36, 1],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 66,
                        offset: [-5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 43,
                        offset: [-1, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                },
                fatman: {
                    walk: {
                        frameLast: 31,
                        offset: [0, 0],
                        start: 8,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 50,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 17,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 31,
                        offset: [1, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 17,
                        offset: [-2.5, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 113,
                        offset: [-1, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 49,
                        offset: [-14, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 76,
                        offset: [31.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 50,
                        offset: [-3, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 41,
                        offset: [-2.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                },
                granny: {
                    walk: {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 0,
                        frameRepeat: 40,
                        offset: [0, 2],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 23,
                        offset: [-1.5, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 19,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 113,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 49,
                        offset: [-11, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 101,
                        offset: [4.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 56,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 103,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                },
                preppie: {
                    walk: {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 18,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 1,
                        frameRepeat: 20,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 45,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 23,
                        offset: [.5, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 52,
                        offset: [-.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 61,
                        offset: [-12.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 88,
                        offset: [-29, 1],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 66,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 53,
                        offset: [-.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                },
                pursedog: {
                    walk: {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 18,
                        frames: null,
                        loop: !0
                    },
                    contemplate: {
                        frameLast: 1,
                        frameRepeat: 20,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk away": {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    paying: {
                        frameLast: 45,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "walk forward": {
                        frameLast: 23,
                        offset: [0, 0],
                        start: 0,
                        frames: null,
                        loop: !0
                    },
                    drink: {
                        frameLast: 52,
                        offset: [-.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1,
                        frameRate: 30
                    },
                    "reaction bad": {
                        frameLast: 61,
                        offset: [17.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction barf": {
                        frameLast: 88,
                        offset: [-37, 1],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction good": {
                        frameLast: 66,
                        offset: [-2.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    },
                    "reaction mixed": {
                        frameLast: 53,
                        offset: [-.5, 0],
                        start: 0,
                        frames: null,
                        loop: !1
                    }
                }
            },
            f = {
                businessman: {
                    horizontalWalkSpeed: -150,
                    verticalWalkSpeed: 30
                },
                businesswoman: {
                    horizontalWalkSpeed: -150,
                    verticalWalkSpeed: 30
                },
                fatman: {
                    horizontalWalkSpeed: -120,
                    verticalWalkSpeed: 27
                },
                granny: {
                    horizontalWalkSpeed: -105,
                    verticalWalkSpeed: 24
                },
                pope: {
                    horizontalWalkSpeed: -105,
                    verticalWalkSpeed: 24
                },
                preppie: {
                    horizontalWalkSpeed: -150,
                    verticalWalkSpeed: 30
                },
                pursedog: {
                    horizontalWalkSpeed: -135,
                    verticalWalkSpeed: 30
                }
            },
            y = {
                freezing: 1,
                cold: .9,
                cool: .6,
                warm: .25
            },
            g = ["weather", "price", "reputation"],
            v = ["coffee", "milk", "sugar"],
            b = [0, 0, 0, 0];

        function Customer(t, e, a, i) {
            Phaser.Image.call(this, t, e, a, "customers"), this.anchor.set(.5, .96), this.scale.set(2, 2), this.customerType = i, this.horizontalWalkSpeed = 2 * f[i].horizontalWalkSpeed, this.verticalWalkSpeed = 2 * f[i].verticalWalkSpeed, this.buySpot = 0, this.walkForwardY = 0, this.bought = !1, this.decided = !1, this.satisfaction = 0, this.reactionIngredient = null, this.reactionDirection = 0, this.reactionWithReservation = !1;
            var n = p[i];
            for (var d in n) this.animations.add(d, n[d].frames, n[d].frameRate || 60, n[d].loop);
            this.onExit = null, this.bubbleContemplate = new s(t), this.addChild(this.bubbleContemplate), this.bubbleReaction = new l(t), this.addChild(this.bubbleReaction)
        }
        for (var S in Customer.prototype = Object.create(Phaser.Image.prototype), Customer.prototype.constructor = Customer, Customer.prototype.spawn = function() {
                this.position.set(1380 + 50 * Math.random(), 790 + 50 * Math.random()), this.bought = !1, this.decided = !1, this.bubbleContemplate.spawn(), this.bubbleReaction.spawn(), this.buySpot = function getBestBuySpot() {
                    for (var t = -1, e = Infinity, a = 0; a < b.length; a++) b[a] < e && (t = a, e = b[a]);
                    return t
                }(), b[this.buySpot] += 1, this.animations.play("walk"), this.animations.next(p[this.customerType].walk.start)
            }, Customer.prototype.getDemandBasedOnConditions = function() {
                return y[m.getTemperatureDescription(c.data.temperature)]
            }, Customer.prototype.getDemand = function() {
                return this.getDemandBasedOnConditions() * (1 - n.clamp(c.data.price / 100 / 6.5, 0, 1)) + .4 * c.data.reputation
            }, Customer.prototype.getDominantReasonForDemand = function(t) {
                var e = [this.getDemandBasedOnConditions(), 1 - m.getNormalizedPrice(), Math.abs(.5 * c.data.reputation)];
                return t ? c.data.reputation < 0 && (e[2] = 0) : (e[0] = 1 - e[0], e[1] = 1 - e[1], c.data.reputation > 0 && (e[2] = 0)), i.choice(g, e)
            }, Customer.prototype.decideWantToPurchase = function() {
                var t = Math.random() < this.getDemand(),
                    e = this.getDominantReasonForDemand(t);
                return this.bubbleContemplate.show(e, t ? 0 : 1), this.game.time.events.add(.5 * Phaser.Timer.SECOND, t ? this._audioConsiderationGood : this._audioConsiderationBad), t
            }, Customer.prototype._audioConsiderationBad = function() {
                h.play("consideration_bad", .3)
            }, Customer.prototype._audioConsiderationGood = function() {
                h.play("consideration_good", .3)
            }, Customer.prototype.calculateSatisfaction = function() {
                var t = .99,
                    e = m.getIdealRecipe(),
                    a = m.getQualityOfIngredient(c.data.recipeCoffee, "coffee", e),
                    n = m.getQualityOfIngredient(c.data.recipeMilk, "milk", e),
                    s = m.getQualityOfIngredient(c.data.recipeSugar, "sugar", e),
                    l = 1,
                    d = 1,
                    u = 1;
                a >= t ? (a = 1, l = .25) : l = 1 - a, n >= t ? (n = 1, d = .25) : d = 1 - n, s >= t ? (s = 1, u = .25) : u = 1 - s, this.satisfaction = a * n * s - m.getNormalizedPrice();
                var h = [a, n, s],
                    p = i.index(v, [l, d, u]),
                    f = v[p],
                    y = 0,
                    g = !1;
                h[p] <= t ? (y = Math.sign(e[f] - m.recipeValueByIngredientName(f)), g = this.satisfaction > 0) : g = this.satisfaction <= 0, this.reactionIngredient = f, this.reactionDirection = y, this.reactionWithReservation = g
            }, Customer.prototype._audioReactionBad = function() {
                h.play("reaction_bad", .4)
            }, Customer.prototype.update = function() {
                var t = Math.min(1 / 30, this.game.time.elapsed / 1e3);
                "walk" === this.animations.name ? (this.position.x += this.horizontalWalkSpeed * t, this.position.x < 640 + 50 * this.buySpot && !this.decided && (m.servings.count > 0 && (this.animations.play("contemplate"), this.decideWantToPurchase() && (m.buy(), this.calculateSatisfaction(), this.bought = !0)), this.decided = !0)) : "contemplate" === this.animations.name ? this.animations.currentAnim.isFinished && (this.bought ? this.animations.play("walk away") : this.animations.play("walk"), this.bubbleContemplate.hide()) : "walk away" === this.animations.name ? (this.position.x -= this.verticalWalkSpeed * t, this.position.y -= this.verticalWalkSpeed * t, this.position.y <= 772 && this.animations.play("paying")) : "paying" === this.animations.name ? this.animations.currentAnim.isFinished && (this.animations.play("walk forward"), this.walkForwardY = 800 + 52 * Math.random(), b[this.buySpot] -= 1, this.buySpot = -1, d.update(), u.update(), h.play("purchase")) : "walk forward" === this.animations.name ? (this.position.x += -this.verticalWalkSpeed * t, this.position.y += this.verticalWalkSpeed * t, this.position.y >= this.walkForwardY && this.animations.play("drink")) : "drink" === this.animations.name ? this.animations.currentAnim.isFinished && (this.bubbleReaction.show(this.reactionIngredient, this.reactionDirection, this.reactionWithReservation), m.addReputation(this.satisfaction * (.9 + .2 * Math.random())), this.satisfaction < -.3 ? (this.animations.play("reaction bad"), h.play("reaction_bad", .4)) : this.satisfaction < -.15 ? (this.animations.play("reaction bad"), this.game.time.events.add(.75 * Phaser.Timer.SECOND, this._audioReactionBad)) : this.satisfaction < 0 ? (this.animations.play("reaction mixed"), h.play("reaction_mixed", .2)) : (this.animations.play("reaction good"), h.play("reaction_good", .5))) : "reaction bad" !== this.animations.name && "reaction barf" !== this.animations.name && "reaction good" !== this.animations.name && "reaction mixed" !== this.animations.name || this.animations.currentAnim.isFinished && (this.animations.play("walk"), this.animations.next(p[this.customerType].walk.start));
                var e = p[this.customerType][this.animations.name].offset;
                this.pivot.set(-e[0], -e[1]), this.scale.set(2 + .005 * Math.max(0, this.position.y - 772)), this.position.x < -100 && this.exit()
            }, Customer.prototype.exit = function() {
                this.bubbleContemplate.visible = !1, this.bubbleReaction.visible = !1, -1 !== this.buySpot && (b[this.buySpot] -= 1), this.onExit && this.onExit(this)
            }, Customer.TYPES = [], p) {
            var w = p[S];
            for (var C in Customer.TYPES.push(S), w) {
                for (var x = Phaser.Animation.generateFrameNames(S + " " + C, 0, w[C].frameLast, "", 3), L = x, k = 0; k < w[C].frameRepeat - 1; k++) L = L.concat(x);
                p[S][C].frames = L
            }
        }
        e.exports = Customer
    }, {
        "./audio": 1,
        "./balance": 2,
        "./bubble_contemplate": 3,
        "./bubble_reaction": 4,
        "./inventory": 12,
        "./numbers": 14,
        "./random": 17,
        "./shop": 20,
        "./state": 25
    }],
    9: [function(t, e, a) {
        "use strict";
        var i = t("./numbers"),
            n = t("./random"),
            s = t("./state"),
            l = t("./signals"),
            d = t("./shop"),
            u = t("./screens"),
            c = t("./highscore"),
            m = t("./chart"),
            h = u.dayStats.element,
            p = ["#05ed05", "#0505ed", "#048f04", "#32ec51"],
            f = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

        function show() {
            h.querySelector("h2").textContent = "End of Day " + s.data.day, h.querySelector(".chart").innerHTML = m(s.data.hourlyStats, f, p, "hourly-stats-", ["money", "reputation"]);
            for (var t = h.querySelectorAll(".legend button"), e = 0; e < t.length; e++) {
                var a = t[e];
                "hourly-stats-money" === a.dataset.chartLine || "hourly-stats-reputation" === a.dataset.chartLine ? a.classList.add("active") : a.classList.remove("active")
            }
            if (14 === s.data.day) h.querySelector(".summary").innerHTML = "You win!<br>You made $" + i.format(s.data.money / 100) + " in 14 days!<br>Click Continue to return to the menu and play again!", h.querySelector(".forecast").classList.add("hidden"), s.data.day += 1;
            else if (d.isGameOver()) h.querySelector(".summary").innerHTML = "Bankruptcy!<br>You're out of business.<br>Click Continue to return to the menu and play again!", h.querySelector(".forecast").classList.add("hidden"), s.data.day += 1;
            else {
                h.querySelector(".summary").innerHTML = function getSummary() {
                    return 13 === s.data.day ? "One Day Left!<br>Tomorrow is your last day. Make as much money as you can!" : s.data.money >= 75e4 && !s.data.summaries.sevenThousand ? (s.data.summaries.sevenThousand = !0, "Seven Thousand Five Hundred Dollars and Then Some!") : s.data.money >= 5e5 && !s.data.summaries.fiveGrand ? (s.data.summaries.fiveGrand = !0, "Nukularific! You've Cleared Five Grand!") : s.data.money >= 2e5 && !s.data.summaries.twoThousand ? (s.data.summaries.twoThousand = !0, "Outta Sight!<br>You passed Two Thousand Dollars!") : s.data.money >= 1e5 && !s.data.summaries.grand ? (s.data.summaries.grand = !0, "Bonanza!<br>You've Cleared a Grand!") : s.data.money >= 5e4 && !s.data.summaries.fiveHundred ? (s.data.summaries.fiveHundred = !0, "Wow! You've made more than<br>Five Hundred Smackeroos!") : s.data.money >= 3e4 && !s.data.summaries.tenTimes ? (s.data.summaries.tenTimes = !0, "Congratulations!<br>You've made Ten Times the money you started with!") : s.data.money >= 2e4 && !s.data.summaries.twoHundred ? (s.data.summaries.twoHundred = !0, "Congratulations!<br>You broke the $200 mark!") : 0 === s.data.dayStats.cupsSold ? "The Big Zilcher!<br>You sold no coffee today. Try lowering the price." : s.data.reputation <= -.5 && !s.data.summaries.reputationTerrible ? (s.data.summaries.reputationTerrible = !0, "Your Reputation is Terrible!<br>Word around town: You're a crook.<br>Lower the price or increase quality to improve your reputation.") : s.data.reputation <= -.05 && !s.data.summaries.reputationYuckAlert ? (s.data.summaries.reputationYuckAlert = !0, "Yuck Alert!<br>Customers say you charge too much for bad-tasting coffee.<br>Lower the price or increase quality to improve your reputation.") : s.data.reputation >= .1 && !s.data.summaries.reputationGood ? (s.data.summaries.reputationGood = !0, "People Like You.<br>Customers say your coffee is priced just right.<br>Good on ya!") : s.data.reputation >= .5 && !s.data.summaries.reputationLove ? (s.data.summaries.reputationLove = !0, "You're the Talk of the Town!<br>Customers love your coffee and your prices.") : 0 === d.servings.count ? "You Ran Out of Stock.<br>Make sure to buy enough inventory at the start of each day.<br>Otherwise, you're just throwing away sales!" : s.data.dayStats.profits >= 5e3 ? "Baristallistic! You beat $50 in daily profits!" : s.data.dayStats.profits >= 2e3 ? "Wow! Strong showing today." : s.data.dayStats.profits >= 1e3 ? "Great! You made $" + i.format(s.data.dayStats.profits / 100) + " today." : s.data.dayStats.profits >= 500 ? "Way to go! You made $" + i.format(s.data.dayStats.profits / 100) + " today." : s.data.dayStats.profits > 0 ? "Not bad. You better than broke even today." : s.data.dayStats.profits <= -2e3 ? "Oh No! You lost $" + i.format(Math.abs(s.data.dayStats.profits) / 100) + " today.<br>Try to stay in the black tomorrow." : s.data.dayStats.profits <= -1e3 ? "Rough day today. You lost $" + i.format(Math.abs(s.data.dayStats.profits) / 100) + ".<br>Don't worry – you'll turn it around." : s.data.dayStats.profits <= -500 ? "Slow day today. Tomorrow'll be better." : s.data.dayStats.profits <= 0 ? "Bad news: You lost money today.<br>Good news: You didn't lose much." : "You're doing great!"
                }(), h.querySelector(".loses").innerHTML = function getLoses() {
                    var t = "";
                    if (s.data.inventoryMilk && (s.data.inventoryMilk = 0, t = "All your milk has spoiled."), s.data.day > 1) {
                        if (s.data.inventoryCoffee && Math.random() < 1 / 4) {
                            var e = Math.round(10 * Math.random()) / 10;
                            e > 0 && e < 1 && (s.data.invetoryCoffee *= e, t += "<br>" + Math.floor(100 * (1 - e)) + "% of your coffee has gone stale.")
                        }
                        s.data.inventorySugar && Math.random() < 1 / 6 && (e = Math.round(10 * Math.random()) / 10) > 0 && e < 1 && (s.data.inventorySugar *= e, t += "<br>Ants have invaded your sugar! You lost " + Math.floor(100 * (1 - e)) + "% of your sugar.")
                    }
                    return t
                }(), s.data.day += 1, s.data.temperature = n.integer(20, 81);
                var l = h.querySelector(".forecast .temperature");
                l.textContent = s.data.temperature + "° " + d.getTemperatureDescription(s.data.temperature), l.style.color = d.getTemperatureColor(s.data.temperature), l.parentNode.classList.remove("hidden")
            }
            h.classList.remove("hidden")
        }

        function hide() {
            h.classList.add("hidden")
        }
        l.onDayEnd(show), l.onNewDay(hide), h.querySelector("button.continue").addEventListener("click", (function() {
            c.save(s.data.money), d.isGameOver() || 15 === s.data.day ? (s.clear(), u.main.element.classList.remove("hidden"), u.main.element.classList.add("show"), setTimeout((function() {
                u.game.element.classList.add("hidden"), u.confirmQuit.element.classList.add("hidden"), hide()
            }), 1500)) : l.onNewDay.send();
            cmgAdBreakCall();
        })), e.exports = {
            show: show,
            hide: hide
        }
    }, {
        "./chart": 5,
        "./highscore": 11,
        "./numbers": 14,
        "./random": 17,
        "./screens": 19,
        "./shop": 20,
        "./signals": 22,
        "./state": 25
    }],
    10: [function(t, e, a) {
        "use strict";

        function findIn(t, e, a) {
            var i = t.querySelectorAll(e);
            if (a)
                for (var n = 0; n < i.length; n++) a(i[n]);
            return i
        }
        e.exports = {
            loadScript: function loadScript(t, e) {
                var a = document.createElement("script");
                return e && a.addEventListener("load", e), a.src = t, a.async = !1, document.body.appendChild(a), a
            },
            findIn: findIn,
            find: function find(t, e) {
                return findIn(document, t, e)
            },
            addClass: function addClass(t, e) {
                for (var a = 0; a < t.length; a++) t[a].classList.add(e)
            },
            removeClass: function removeClass(t, e) {
                for (var a = 0; a < t.length; a++) t[a].classList.remove(e)
            }
        }
    }, {}],
    11: [function(t, e, a) {
        "use strict";
        var i = t("./numbers"),
            n = t("./screens").main.element.querySelector(".highscore b");

        function load() {
            try {
                var t = parseFloat(localStorage.getItem("COFFEE_SHOP_HIGHSCORE"));
                if (isNaN(t) || !isFinite(t) || t < 0) return 100
            } catch (e) {
                return 100
            }
            return t
        }

        function update(t) {
            n.textContent = "$" + i.format(t / 100)
        }
        update(load()), e.exports = {
            load: load,
            save: function save(t) {
                try {
                    return t > load() && (localStorage.setItem("COFFEE_SHOP_HIGHSCORE", t), update(t)), !0
                } catch (e) {
                    return !1
                }
            }
        }
    }, {
        "./numbers": 14,
        "./screens": 19
    }],
    12: [function(t, e, a) {
        "use strict";
        var i = t("./colors"),
            n = t("./state"),
            s = t("./signals"),
            l = t("./screens").game.element.querySelector(".serve-inventory"),
            d = l.querySelectorAll("dd"),
            u = d[0],
            c = d[1],
            m = d[2],
            h = d[3],
            p = 0,
            f = 0,
            y = 0,
            g = 0;

        function start() {
            var t = n.data;
            p = t.inventoryCups, f = t.inventoryCoffee, y = t.inventoryMilk, g = t.inventorySugar, u.style.width = "90px", c.style.width = "90px", m.style.width = "90px", h.style.width = "90px", u.style.color = "#fff", u.style.borderColor = "#fff", c.style.color = "#fff", c.style.borderColor = "#fff", m.style.color = "#fff", m.style.borderColor = "#fff", h.style.color = "#fff", h.style.borderColor = "#fff", update(), show()
        }

        function update() {
            var t = n.data;
            u.textContent = 0 | t.inventoryCups, c.textContent = 0 | t.inventoryCoffee, m.textContent = 0 | t.inventoryMilk, h.textContent = 0 | t.inventorySugar;
            var e = t.inventoryCups / p,
                a = t.inventoryCoffee / f,
                s = y ? t.inventoryMilk / y : 0,
                l = g ? t.inventorySugar / g : 0;
            u.style.width = Math.floor(90 * e) + "px", c.style.width = Math.floor(90 * a) + "px", m.style.width = Math.floor(90 * s) + "px", h.style.width = Math.floor(90 * l) + "px";
            var d = i.hex2css(i.rgbMix(16711680, 16777215, e)),
                v = i.hex2css(i.rgbMix(16711680, 16777215, a)),
                b = i.hex2css(i.rgbMix(16711680, 16777215, s)),
                S = i.hex2css(i.rgbMix(16711680, 16777215, l));
            u.style.color = d, u.style.borderColor = d, c.style.color = v, c.style.borderColor = v, m.style.color = b, m.style.borderColor = b, h.style.color = S, h.style.borderColor = S
        }

        function show() {
            l.classList.remove("hidden")
        }

        function hide() {
            l.classList.add("hidden")
        }
        s.onDayStart(start), s.onDayEnd(hide), e.exports = {
            start: start,
            update: update,
            show: show,
            hide: hide
        }
    }, {
        "./colors": 6,
        "./screens": 19,
        "./signals": 22,
        "./state": 25
    }],
    13: [function(t, e, a) {
        "use strict";
        t("./polyfills");
        var i = t("./dom"),
            n = t("./state"),
            s = t("./slider"),
            l = t("./shop"),
            d = t("./screens"),
            u = (t("./credits"), t("./weather"), t("./inventory"), t("./reputation")),
            c = t("./balance"),
            m = (t("./day_stats"), t("./tutorial"), t("./signals")),
            h = t("./chart"),
            p = (t("./highscore"), t("./audio")),
            f = ["#05ed05", "#0505ed", "#ebebeb", "#058e05", "#32ea51", "#8e8e05", "#8eea51", "#05bc05", "#050551", "#8e8eea", "#9d9dea", "#ea0532", "#510505", "#ea32bc", "#ea5105"],
            y = document.getElementById("game");
        document.addEventListener("contextmenu", (function(t) {
            t.preventDefault()
        }));
        var g = 1,
            v = null,
            b = d.game.element.querySelector(".servings span"),
            S = d.game.element.querySelector(".limited span"),
            w = d.game.element.querySelector("button.start-day"),
            C = d.game.element.querySelector(".serve-price"),
            x = d.game.element.querySelector("button.skip-day"),
            L = new s(d.game.element.querySelector('.slider[data-state="recipeCoffee"]'), updateRecipe),
            k = new s(d.game.element.querySelector('.slider[data-state="recipeMilk"]'), updateRecipe),
            M = new s(d.game.element.querySelector('.slider[data-state="recipeSugar"]'), updateRecipe),
            T = new s(d.game.element.querySelector(".prepare .price .slider"), updateRecipe),
            E = new s(C.querySelector(".slider"), updateRecipe);

        function updateRecipe() {
            updateStartButton(), updateServings()
        }

        function updateStartButton() {
            w.disabled = n.data.tutorial || !(null !== v && n.data.inventoryCups > 0 && n.data.inventoryCoffee >= n.data.recipeCoffee && n.data.inventoryMilk >= n.data.recipeMilk && n.data.inventorySugar >= n.data.recipeSugar)
        }

        function updateServings() {
            var t = l.updateServings();
            b.textContent = t.count, S.textContent = t.limiter
        }

        function resize() {
            g = Math.min(window.innerWidth / 640, window.innerHeight / 480), y.style.transform = "scale(" + g + ", " + g + ")", v && v.resize(g), m.onResize.send(g)
        }

        function simulationReady() {
            w.textContent = "Start the Day", n.data && updateStartButton()
        }

        function hideMainMenu() {
            d.main.element.classList.remove("play"), d.main.element.classList.remove("show"), d.main.element.classList.add("hidden")
        }
        m.onDayStart((function() {
            E.setValue(n.data.price), C.classList.remove("hidden")
        })), m.onDayEnd((function() {
            C.classList.add("hidden")
        })), resize(), window.addEventListener("resize", resize), window.addEventListener("load", (function load() {
            document.body.classList.add("loaded"), d.main.element.classList.add("show"), i.loadScript("./scripts/libs/pixi.min.js"), i.loadScript("./scripts/libs/phaser.min.js", (function() {
                var e = t("./simulation");
                (v = new e(g)).load(simulationReady), window.simulation = v
            }))
        })), document.querySelector('button[data-screen="screen-game"]').addEventListener("click", (function() {
            n.create(), d.main.element.classList.add("play"), d.game.element.classList.remove("hidden"), setTimeout(m.onNewGame.send, 2900), setTimeout(m.onNewDay.send, 3e3), setTimeout(hideMainMenu, 4e3)
        }));
        var _ = d.game.element.querySelector(".prepare .inventory"),
            O = d.game.element.querySelector(".prepare .recipe");
        _.addEventListener("mouseenter", (function() {
            _.classList.add("expanded"), O.classList.remove("expanded"), d.tutorial2.element.classList.add("hidden")
        })), O.addEventListener("mouseenter", (function() {
            _.classList.remove("expanded"), O.classList.add("expanded")
        })), d.confirmQuit.element.querySelector("button.close").addEventListener("click", (function() {
            d.confirmQuit.element.classList.add("hidden")
        })), i.find(".tabs button", (function(t) {
            t.addEventListener("click", (function() {
                for (var t = this.parentNode, e = this.parentNode.parentNode.firstChild; e; e = e.nextSibling) 1 === e.nodeType && (e !== t ? (e.classList.remove("active"), document.querySelector(e.querySelector("button").dataset.tab).classList.add("hidden")) : (e.classList.add("active"), document.querySelector(e.querySelector("button").dataset.tab).classList.remove("hidden")))
            }))
        })), d.game.element.querySelector("button.quit").addEventListener("click", (function() {
            d.confirmQuit.element.classList.remove("hidden")
        })), d.confirmQuit.element.querySelector("button.quit").addEventListener("click", (function() {
            n.clear(), d.main.element.classList.remove("hidden"), d.main.element.classList.add("show"), setTimeout((function() {
                d.game.element.classList.add("hidden"), d.confirmQuit.element.classList.add("hidden")
            }), 1500)
        })), w.addEventListener("click", (function() {
            d.game.element.classList.add("play"), n.data.dayStats.startingMoney = n.data.money, n.data.dailyStats.expenditures.push(n.data.dailyStats.money[n.data.dailyStats.money.length - 1] - n.data.money), n.save(), v.play(), m.onDayStart.send()
        })), m.onNewDay((function() {
            n.data.day > 1 && (_.classList.add("expanded"), O.classList.remove("expanded"), updateServings(), T.setValue(n.data.price), d.game.element.classList.remove("play"))
        })), i.find(".legend button", (function(t) {
            t.addEventListener("click", (function() {
                if (this.classList.contains("active")) {
                    if (this.classList.remove("active"), e = this.dataset.chartLine) {
                        var t = document.querySelectorAll("#" + e + ",#" + e + "-min,#" + e + "-max");
                        i.removeClass(t, "visible"), i.removeClass(t, "active")
                    }
                } else {
                    var e;
                    if (this.classList.add("active"), e = this.dataset.chartLine) {
                        var a = document.getElementById(e).parentNode;
                        i.removeClass(a.querySelectorAll("polyline,text.value"), "active");
                        var n = a.querySelectorAll("#" + e + ",#" + e + "-min,#" + e + "-max");
                        i.addClass(n, "visible"), i.addClass(n, "active")
                    }
                    if (this.classList.contains("category"))
                        for (var s = this.parentNode, l = s.parentNode.children, d = 0; d < l.length; d++)
                            if (l[d] !== s) {
                                var u = l[d].querySelector("button.category");
                                u && u.classList.remove("active")
                            }
                }
            }))
        })), i.find("#screen-game .inventory", (function(t) {
            for (var e = t.querySelectorAll(".unit b"), a = {}, i = 0; i < e.length; i++) a[e[i].dataset.state] = e[i];
            var s = t.querySelectorAll("button");
            for (i = 0; i < s.length; i++) s[i].addEventListener("click", buy);
            var l = [],
                u = d.game.element.querySelector("button.undo");

            function buy() {
                var t = this.dataset.state,
                    e = parseFloat(this.dataset.qty),
                    i = parseFloat(this.dataset.price);
                i <= n.data.money && (n.data[t] += e, n.data.money -= i, n.data.dayStats.profits -= i, a[t].textContent = Math.floor(n.data[t]), l.push(this), u.disabled = !1, updateButtons(), p.play("audio_pay"), m.onInventoryBuy.send())
            }

            function updateButtons() {
                for (var t = 0; t < s.length; t++) {
                    var e = s[t],
                        a = parseFloat(e.dataset.price);
                    e.disabled = a > n.data.money
                }
            }
            u.addEventListener("click", (function() {
                var t = l[l.length - 1],
                    e = t.dataset.state,
                    i = parseFloat(t.dataset.qty),
                    s = parseFloat(t.dataset.price);
                n.data[e] -= i, n.data.money += s, n.data.dayStats.profits += s, a[e].textContent = Math.floor(n.data[e]), l.pop(), updateButtons(), p.play("audio_gain", .5), 0 === l.length && (u.disabled = !0), m.onInventoryUndo.send()
            })), m.onNewDay((function() {
                u.disabled = !0, l.length = 0, updateButtons(),
                    function updateDisplay() {
                        a.inventoryCups.textContent = n.data.inventoryCups, a.inventoryCoffee.textContent = Math.floor(n.data.inventoryCoffee), a.inventoryMilk.textContent = Math.floor(n.data.inventoryMilk), a.inventorySugar.textContent = Math.floor(n.data.inventorySugar)
                    }()
            }))
        })), m.onInventoryBuy(updateServings), m.onInventoryUndo(updateServings), m.onTutorialEnd(updateStartButton), m.onInventoryBuy(updateStartButton), m.onInventoryUndo(updateStartButton), m.onDayEnd((function() {
            x.disabled = !0, x.classList.add("hidden")
        })), m.onOutOfStock((function() {
            x.disabled = !1, x.classList.remove("hidden")
        })), d.game.element.querySelector("button.skip-day").addEventListener("click", (function() {
            m.onDaySkip.send(), x.disabled = !0
        })), m.onNewDay((function() {
            if (n.data.dayStats.profits = 0, n.data.dayStats.cupsSold = 0, n.data.hourlyStats.money.length = 0, n.data.hourlyStats.reputation.length = 0, n.data.hourlyStats.cupsSold.length = 0, n.data.hourlyStats.price.length = 0, d.game.element.querySelector(".stats").classList.add("hidden"), n.data.day > 2) {
                d.game.element.querySelector('button[data-tab="#game-tab-stats"]').parentNode.classList.remove("hidden");
                for (var t = [], e = 0; e < n.data.day; e++) t.push(e + 1);
                d.game.element.querySelector(".stats .chart").innerHTML = h(n.data.dailyStats, t, f, "daily-stats-", ["money", "reputation"]);
                var a = d.game.element.querySelectorAll(".legend button");
                for (e = 0; e < a.length; e++) {
                    var i = a[e];
                    "daily-stats-money" === i.dataset.chartLine || "daily-stats-reputation" === i.dataset.chartLine ? i.classList.add("active") : i.classList.remove("active")
                }
            } else d.game.element.querySelector('button[data-tab="#game-tab-stats"]').parentNode.classList.add("hidden");
            v && v.ready && v.game.state.start("Idle", !1, !1)
        })), m.onNewGame((function() {
            _.classList.remove("expanded"), O.classList.add("expanded"), L.setValue(n.data.recipeCoffee), k.setValue(n.data.recipeMilk), M.setValue(n.data.recipeSugar), T.setValue(n.data.price), c.update(), u.update()
        })), m.onLoad((function() {
            d.game.element.classList.contains("hidden") ? p.playMusic("music_menu", .75, 3e3) : v.game.state.start("Idle", !1, !1)
        })), window.state = n
    }, {
        "./audio": 1,
        "./balance": 2,
        "./chart": 5,
        "./credits": 7,
        "./day_stats": 9,
        "./dom": 10,
        "./highscore": 11,
        "./inventory": 12,
        "./polyfills": 15,
        "./reputation": 18,
        "./screens": 19,
        "./shop": 20,
        "./signals": 22,
        "./simulation": 23,
        "./slider": 24,
        "./state": 25,
        "./tutorial": 30,
        "./weather": 31
    }],
    14: [function(t, e, a) {
        "use strict";
        e.exports = {
            mod: function mod(t, e) {
                return t - e * Math.floor(t / e)
            },
            sum: function sum(t) {
                for (var e = 0, a = 0, i = t.length; a < i; a++) e += t[a];
                return e
            },
            clamp: function clamp(t, e, a) {
                return t < e ? e : t > a ? a : t
            },
            mix: function mix(t, e, a) {
                return t * (1 - a) + e * a
            },
            format: function format(t, e, a, i) {
                if (isNaN(t) || null == t) return "";
                null == e && (e = 2), null == a && (a = "."), null == i && (i = ",");
                var n = (t = function toFixed(t, e) {
                        return (+(Math.round(+(t + "e" + e)) + "e" + -e)).toFixed(e)
                    }(t, e)).split("."),
                    s = n[0],
                    l = n[1] ? a + n[1] : "";
                return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + i) + l
            }
        }
    }, {}],
    15: [function(t, e, a) {
        "use strict";
        Math.sign || (Math.sign = function(t) {
            return (t > 0) - (t < 0) || +t
        }), String.prototype.padStart || (String.prototype.padStart = function padStart(t, e) {
            return t >>= 0, e = String(void 0 !== e ? e : " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
        }), Array.from || (Array.from = function() {
            var t;
            try {
                t = Symbol.iterator ? Symbol.iterator : "Symbol(Symbol.iterator)"
            } catch (s) {
                t = "Symbol(Symbol.iterator)"
            }
            var e = Object.prototype.toString,
                isCallable = function(t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                a = Math.pow(2, 53) - 1,
                toLength = function(t) {
                    var e = function(t) {
                        var e = Number(t);
                        return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
                    }(t);
                    return Math.min(Math.max(e, 0), a)
                },
                i = function setGetItemHandler(e, a) {
                    var i = e && a[t]();
                    return function getItem(t) {
                        return e ? i.next() : a[t]
                    }
                },
                n = function getArray(t, e, a, i, n, s) {
                    for (var l = 0; l < a || n;) {
                        var d = i(l),
                            u = n ? d.value : d;
                        if (n && d.done) return e;
                        e[l] = s ? void 0 === t ? s(u, l) : s.call(t, u, l) : u, l += 1
                    }
                    if (n) throw new TypeError("Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1");
                    return e.length = a, e
                };
            return function from(e) {
                var a = this,
                    s = Object(e),
                    l = isCallable(s[t]);
                if (null == e && !l) throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");
                var d, u = arguments.length > 1 ? arguments[1] : void undefined;
                if (void 0 !== u) {
                    if (!isCallable(u)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (d = arguments[2])
                }
                var c = toLength(s.length),
                    m = isCallable(a) ? Object(new a(c)) : new Array(c);
                return n(d, m, c, i(l, s), l, u)
            }
        }()), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(t) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var e = Object(this), a = e.length >>> 0, i = arguments[1], n = i >> 0, s = n < 0 ? Math.max(a + n, 0) : Math.min(n, a), l = arguments[2], d = l === undefined ? a : l >> 0, u = d < 0 ? Math.max(a + d, 0) : Math.min(d, a); s < u;) e[s] = t, s++;
                return e
            }
        })
    }, {}],
    16: [function(t, e, a) {
        "use strict";

        function Pool(t, e, a, i, n) {
            if (null == t && (t = 0), null == e && (e = !0), null == a && (a = !1), 0 === t && (a = !0, t = 8), this._objects = Array.from(new Array(t).fill(null)), this.size = 0, this.grow = a, i && (this._factory = function() {
                    return i()
                }), n && (this._reset = function(t) {
                    n(t)
                }), e && i) {
                for (var s = 0; s < t; s++) this._objects[s] = this._factory();
                this.size = t
            }
        }
        Pool.prototype._factory = function() {
            return null
        }, Pool.prototype._reset = function() {}, Pool.prototype.get = function() {
            if (0 === this.size) {
                if (this.grow) return this._factory();
                throw new Error("Pool limit reached")
            }
            return this.size -= 1, this._objects[this.size]
        }, Pool.prototype.recycle = function(t) {
            if (this.size === this._objects.length) {
                if (!this.grow) throw new Error("Pool limit reached");
                this._objects = this._objects.concat(this._objects)
            }
            this._reset(t), this._objects[this.size] = t, this.size += 1
        }, Pool.prototype.clear = function() {
            this._objects.fill(null), this.size = 0
        }, e.exports = Pool
    }, {}],
    17: [function(t, e, a) {
        "use strict";
        var i = t("./numbers"),
            n = Math.random.bind();

        function integer(t, e) {
            return e === undefined && (e = t, t = 0), Math.trunc(t + (e - t) * n())
        }

        function index(t, e) {
            if (e && e.length) {
                var a = i.sum(e);
                if (a <= 0) return integer(t.length);
                for (var s = n() * a, l = e.length; l > 0 && a >= s;) a -= e[--l];
                return l
            }
            return integer(t.length)
        }
        n.sign = function sign() {
            return n() < .5 ? -1 : 1
        }, n.uniform = function uniform(t, e) {
            return t + (e - t) * n()
        }, n.integer = integer, n.index = index, n.choice = function choice(t, e) {
            return t[index(t, e)]
        }, n.shuffle = function shuffle(t) {
            for (var e, a, i = t.length; --i > 0;) e = integer(i + 1), a = t[i], t[i] = t[e], t[e] = a
        }, n.sample = function sample(t, e) {
            if (e > t.length) throw new Error("Sample larger than population");
            var a, i, n = new Array(e);
            if (e > t.length / 3) {
                var s = t.slice(0);
                for (a = 0; a < e; a++) i = integer(t.length - a), n[a] = s[i], s[i] = s[t.length - a - 1]
            } else {
                var l = new Array(e);
                for (a = 0; a < e; a++) {
                    do {
                        i = integer(t.length)
                    } while (l.indexOf(i) >= 0);
                    l[a] = i, n[a] = t[i]
                }
            }
            return n
        }, e.exports = n
    }, {
        "./numbers": 14
    }],
    18: [function(t, e, a) {
        "use strict";
        var i = t("./state"),
            n = t("./signals"),
            s = t("./screens").game.element.querySelector(".reputation>span");

        function update() {
            var t = Math.abs(100 * i.data.reputation);
            s.style.width = t >= 1 ? t + "px" : 0, i.data.reputation >= 0 ? (s.classList.remove("bad"), s.classList.add("good")) : (s.classList.add("bad"), s.classList.remove("good"))
        }
        n.onReputationchange(update), e.exports = {
            update: update
        }
    }, {
        "./screens": 19,
        "./signals": 22,
        "./state": 25
    }],
    19: [function(t, e, a) {
        "use strict";

        function _toUpperCase(t) {
            return t[1].toUpperCase()
        }
        for (var i = {}, n = document.querySelectorAll("section[id]"), s = 0; s < n.length; s++) {
            var l = n[s];
            i[l.id.replace("screen-", "").replace(/-(\w)?/g, _toUpperCase)] = {
                element: l,
                id: l.id
            }
        }
        e.exports = i
    }, {}],
    20: [function(t, e, a) {
        "use strict";
        var i = t("./numbers"),
            n = t("./colors"),
            s = t("./signals"),
            l = t("./state"),
            d = ["Cups", "Coffee", "Milk", "Sugar"],
            u = {
                coffee: {
                    min: 1,
                    max: 4
                },
                milk: {
                    min: 0,
                    max: 2
                },
                sugar: {
                    min: 0,
                    max: 4
                }
            },
            c = {
                limiter: null,
                count: 0
            };

        function updateServings() {
            for (var t = l.data, e = [t.inventoryCups, t.inventoryCoffee / t.recipeCoffee, t.recipeMilk ? t.inventoryMilk / t.recipeMilk : Infinity, t.recipeSugar ? t.inventorySugar / t.recipeSugar : Infinity], a = Infinity, i = -1, n = 0; n < e.length; n++) e[n] < a && (a = e[n], i = n);
            return c.limiter = d[i], c.count = Math.max(Math.floor(e[i]), 0), c
        }
        e.exports = {
            servings: c,
            updateServings: updateServings,
            buy: function buy(t) {
                var e = l.data;
                e.inventoryCups -= 1, e.inventoryCoffee -= l.data.recipeCoffee, e.inventoryMilk -= l.data.recipeMilk, e.inventorySugar -= l.data.recipeSugar, e.money += e.price, e.dayStats.profits += e.price, e.dayStats.cupsSold += 1, updateServings()
            },
            recipeValueByIngredientName: function recipeValueByIngredientName(t) {
                return "coffee" === t ? l.data.recipeCoffee : "milk" === t ? l.data.recipeMilk : "sugar" === t ? l.data.recipeSugar : void 0
            },
            getIdealRecipe: function getIdealRecipe() {
                return {
                    coffee: u.coffee.max,
                    milk: u.milk.max,
                    sugar: u.sugar.max
                }
            },
            getNormalizedPrice: function getNormalizedPrice() {
                return Math.min(l.data.price / 650, 1)
            },
            getQualityOfIngredient: function getQualityOfIngredient(t, e, a) {
                var n = u[e].min,
                    s = u[e].max - n,
                    l = (t - n) / s,
                    d = (a[e] - n) / s;
                return i.clamp(1 - Math.abs(l - d) + .2, 0, 1)
            },
            addReputation: function addReputation(t) {
                l.data.reputation = i.clamp(l.data.reputation + .01 * t, -1, 1), s.onReputationchange.send()
            },
            getTemperatureDescription: function getTemperatureDescription(t) {
                return t > 65 ? "warm" : t > 50 ? "cool" : t > 32 ? "cold" : "freezing"
            },
            getTemperatureColor: function getTemperatureColor(t) {
                return n.hex2css(n.rgbMix(8684799, 15108352, (t - 20) / 60))
            },
            getWeatherType: function getWeatherType(t) {
                return t > 65 ? "hot" : t > 50 ? "fair" : t > 32 ? "rainy" : "cold"
            },
            isGameOver: function isGameOver() {
                var t = 0;
                return l.data.inventoryCups < 1 && (t += 200), l.data.inventoryCoffee < 1 && (t += 1e3), t > l.data.money
            }
        }
    }, {
        "./colors": 6,
        "./numbers": 14,
        "./signals": 22,
        "./state": 25
    }],
    21: [function(t, e, a) {
        "use strict";

        function connect(t, e) {
            var a = "function" == typeof t ? {
                receiver: t,
                context: e
            } : t;
            if ("function" != typeof a.receiver) throw new Error("Can't connect receiver to a signal, receiver is not a function");
            for (var i = 0; i < this.receivers.length; i++) {
                var n = this.receivers[i];
                if (n.receiver === a.receiver && n.context == a.context && n.sender == a.sender) throw new Error("Can't connect receiver to a signal, this receiver with same context and same sender is already connected")
            }
            if ("undefined" != typeof a.count && (isNaN(a.count) || a.count < 0)) throw new Error('Invalid "count" parameter');
            (this.sending ? this._toConnect : this.receivers).push({
                callback: a.context ? a.receiver.bind(a.context) : a.receiver,
                receiver: a.receiver,
                sender: a.sender,
                context: a.context,
                count: a.count || Infinity
            })
        }

        function once(t, e) {
            var a = "function" == typeof t ? {
                receiver: t,
                context: e
            } : t;
            return a.count = 1, this.connect(a)
        }

        function disconnect(t, e) {
            var a = "function" == typeof t ? {
                receiver: t,
                context: e
            } : t;
            if ("function" != typeof a.receiver) throw new Error("Can't disconnect receiver from a signal, receiver is not a function");
            if (this.sending) this._toDisconnect.push(a);
            else
                for (var i = 0; i < this.receivers.length; i++) {
                    var n = this.receivers[i];
                    if (n.receiver === a.receiver && n.context === a.context && n.sender === a.sender) return void this.receivers.splice(i, 1)
                }
        }

        function send(t, ...e) {
            this.sending = !0;
            for (var a = 0; a < this.receivers.length; a++) {
                var i = this.receivers[a];
                null != i.sender && i.sender !== t || (i.callback(t, ...e), i.count -= 1, 0 === i.count && (this.receivers.splice(a, 1), a -= 1))
            }
            if (this.sending = !1, this._toDisconnect.length) {
                for (a = 0; a < this._toDisconnect.length; a++) this.disconnect(this._toDisconnect[a]);
                this._toDisconnect.length = 0
            }
            if (this._toConnect.length) {
                for (a = 0; a < this._toConnect.length; a++) this.receivers.push(this._toConnect[a]);
                this._toConnect.length = 0
            }
        }
        e.exports = function Signal() {
            function signal(...t) {
                connect.call(signal, ...t)
            }
            return Object.setPrototypeOf(signal, Signal.prototype), signal.sending = !1, signal.receivers = [], signal._toConnect = [], signal._toDisconnect = [], signal.connect = connect.bind(signal), signal.once = once.bind(signal), signal.disconnect = disconnect.bind(signal), signal.send = send.bind(signal), signal
        }
    }, {}],
    22: [function(t, e, a) {
        "use strict";
        var i = t("./signal");
        e.exports = {
            onLoad: new i,
            onResize: new i,
            onInventoryBuy: new i,
            onInventoryUndo: new i,
            onNewGame: new i,
            onNewDay: new i,
            onTutorialEnd: new i,
            onDayEnd: new i,
            onDayStart: new i,
            onOutOfStock: new i,
            onDaySkip: new i,
            onReputationchange: new i
        }
    }, {
        "./signal": 21
    }],
    23: [function(t, e, a) {
        "use strict";
        var i = t("./states/loading"),
            n = t("./states/day"),
            s = t("./states/Idle");

        function Simulation(t) {
            this.initialScale = t, this.ready = !1, this.readyCallback = null, this.game = window["phaserGameInstance"] = new Phaser.Game({
                canvas: document.querySelector("#screen-game canvas"),
                width: 1280,
                height: 960,
                antialias: !0,
                transparent: !0,
                resolution: 1,
                renderer: Phaser.CANVAS,
                preserveDrawingBuffer: !1,
                enableDebug: !1
            }), this.game.state.add("Idle", new s), this.game.state.add("Day", new n), this.game.state.add("Loading", new i)
        }
        Simulation.prototype.onReady = function() {
            this.ready = !0, this.readyCallback && this.readyCallback()
        }, Simulation.prototype.resize = function(t) {
            Phaser.DOM.getOffset(this.game.canvas, this.game.scale.offset), this.game.input.scale.set(1 / t * 2), this.initialScale = 0
        }, Simulation.prototype.load = function(t) {
            this.readyCallback = t, this.game.state.start("Loading", !1, !1, this.onReady, this)
        }, Simulation.prototype.play = function() {
            this.initialScale && this.resize(this.initialScale), this.game.state.start("Day", !1, !1)
        }, e.exports = Simulation
    }, {
        "./states/Idle": 26,
        "./states/day": 27,
        "./states/loading": 28
    }],
    24: [function(t, e, a) {
        "use strict";
        var i = t("./state"),
            n = t("./signals");

        function Slider(t, e) {
            "string" == typeof t && (t = document.querySelector(t)), this.mousedown = this.mousedown.bind(this), this.mousemove = this.mousemove.bind(this), this.mouseup = this.mouseup.bind(this), this.element = t, this.stateKey = t.dataset.state, this.handle = t.querySelector("button"), this.gameScale = 1, this.scale = parseFloat(t.dataset.scale) || 1, this.minValue = parseFloat(t.dataset.min), this.maxValue = parseFloat(t.dataset.max), this.valuePrefix = t.dataset.prefix || "", this.valuePrecision = parseFloat(t.dataset.precision) || 0, this.valueRounding = parseFloat(t.dataset.rounding) || 10, this.valueMultiplier = parseFloat(t.dataset.stateMultiplier) || 1, this.displayValue = document.querySelector(t.dataset.display), this.dragStartX = 0, this.handle.addEventListener("mousedown", this.mousedown, {
                passive: !0
            }), this.handle.addEventListener("touchstart", this.mousedown, {
                passive: !0
            }), n.onResize(this.resize, this), this.onChange = e
        }
        Slider.prototype.resize = function(t) {
            this.gameScale = t
        }, Slider.prototype.mousedown = function(t) {
            t.touches ? this.dragStartX = t.touches[0].clientX - this.handle.offsetLeft * this.gameScale * this.scale : this.dragStartX = t.clientX - this.handle.offsetLeft * this.gameScale * this.scale, document.addEventListener("touchmove", this.mousemove, !0), document.addEventListener("touchend", this.mouseup, !0), document.addEventListener("mousemove", this.mousemove, !0), document.addEventListener("mouseup", this.mouseup, !0)
        }, Slider.prototype.mousemove = function(t) {
            if (t.touches) var e = Math.min(Math.max((t.touches[0].clientX - this.dragStartX) / (this.gameScale * this.scale), 0), 213);
            else e = Math.min(Math.max((t.clientX - this.dragStartX) / (this.gameScale * this.scale), 0), 213);
            var a = Math.round((e / 213 * (this.maxValue - this.minValue) + this.minValue) * this.valueRounding) / this.valueRounding;
            i.data[this.stateKey] = a * this.valueMultiplier, (a !== Math.round(a) || this.valuePrefix) && (a = a.toFixed(this.valuePrecision)), this.handle.style.left = e + "px", this.handle.textContent = this.valuePrefix + a, this.displayValue && (this.displayValue.textContent = this.valuePrefix + a), this.onChange && this.onChange()
        }, Slider.prototype.mouseup = function() {
            document.removeEventListener("touchmove", this.mousemove, !0), document.removeEventListener("touchend", this.mouseup, !0), document.removeEventListener("mousemove", this.mousemove, !0), document.removeEventListener("mouseup", this.mouseup, !0)
        }, Slider.prototype.setValue = function(t) {
            var e = ((t /= this.valueMultiplier) - this.minValue) / (this.maxValue - this.minValue),
                a = Math.min(Math.max(213 * e, 0), 213);
            this.handle.style.left = a + "px", (t !== Math.round(t) || this.valuePrefix) && (t = t.toFixed(this.valuePrecision)), this.handle.textContent = this.valuePrefix + t, this.displayValue && (this.displayValue.textContent = this.valuePrefix + t), this.onChange && this.onChange()
        }, e.exports = Slider
    }, {
        "./signals": 22,
        "./state": 25
    }],
    25: [function(t, e, a) {
        "use strict";
        var i = null;

        function create() {
            return (i = {
                tutorial: !0,
                day: 1,
                temperature: 51,
                money: 3e3,
                inventoryCups: 0,
                inventoryCoffee: 0,
                inventoryMilk: 0,
                inventorySugar: 0,
                recipeCoffee: 1.9,
                recipeMilk: .2,
                recipeSugar: 2,
                price: 200,
                reputation: 0,
                idealRecipeCoffee: 4,
                idealRecipeMilk: 2,
                idealRecipeSugar: 4,
                summaries: {},
                dayStats: {
                    startingMoney: 0,
                    profits: 0,
                    cupsSold: 0
                },
                hourlyStats: {
                    money: [],
                    reputation: [],
                    cupsSold: [],
                    price: []
                },
                dailyStats: {
                    money: [],
                    reputation: [],
                    weather: [],
                    cupsSold: [],
                    price: [],
                    expenditures: [],
                    revenues: [],
                    profitsLosses: [],
                    recipeCoffee: [],
                    recipeMilk: [],
                    recipeSugar: [],
                    inventoryCups: [],
                    inventoryCoffee: [],
                    inventoryMilk: [],
                    inventorySugar: []
                }
            }).dailyStats.money.push(i.money), i.dailyStats.reputation.push(0), i.dailyStats.weather.push(i.temperature), i.dailyStats.cupsSold.push(0), i.dailyStats.price.push(i.price), i.dailyStats.expenditures.push(0), i.dailyStats.revenues.push(0), i.dailyStats.profitsLosses.push(0), i.dailyStats.recipeCoffee.push(i.recipeCoffee), i.dailyStats.recipeMilk.push(i.recipeMilk), i.dailyStats.recipeSugar.push(i.recipeSugar), i.dailyStats.inventoryCups.push(i.inventoryCups), i.dailyStats.inventoryCoffee.push(i.inventoryCoffee), i.dailyStats.inventoryMilk.push(i.inventoryMilk), i.dailyStats.inventorySugar.push(i.inventorySugar), save(), i
        }

        function save() {
            try {
                return localStorage.setItem("COFFEE_SHOP", JSON.stringify(i)), !0
            } catch (t) {
                return !1
            }
        }
        e.exports = {
            create: create,
            load: function load() {
                try {
                    if (!(i = JSON.parse(localStorage.getItem("COFFEE_SHOP")))) return create(), !1
                } catch (t) {
                    return create(), !1
                }
                return !0
            },
            save: save,
            clear: function clear() {
                try {
                    return localStorage.removeItem("COFFEE_SHOP"), !0
                } catch (t) {
                    return !1
                }
            },
            get data() {
                return i
            }
        }
    }, {}],
    26: [function(t, e, a) {
        "use strict";
        var i = t("../state"),
            n = t("../shop"),
            s = t("../audio");

        function Idle() {}
        Idle.prototype.create = function() {
            var t = n.getWeatherType(i.data.temperature),
                e = this.add.image(0, 0, t);
            e.alpha = 0, this.add.tween(e).to({
                alpha: 1
            }, 1e3, Phaser.Easing.Cubic.Out, !0).onComplete.add(this.onBackgroundFadeIn, this), this.add.image(81, 842, "game", "game/post.png").anchor.y = 1, "cold" === t ? s.playAmbient("ambient_cold") : "rainy" === t ? s.playAmbient("ambient_rainy") : s.playAmbient("ambient_normal"), s.playMusic("music_calm", .4, 5e3)
        }, Idle.prototype.onBackgroundFadeIn = function() {
            this.world.removeAll(), this.add.image(0, 0, n.getWeatherType(i.data.temperature)), this.add.image(81, 842, "game", "game/post.png").anchor.y = 1
        }, e.exports = Idle
    }, {
        "../audio": 1,
        "../shop": 20,
        "../state": 25
    }],
    27: [function(t, e, a) {
        "use strict";
        var i = t("../random"),
            n = t("../pool"),
            s = t("../weather"),
            l = t("../customer"),
            d = t("../tooltip"),
            u = t("../shop"),
            c = t("../signals"),
            m = t("../audio");

        function Day() {
            this.customerExit = this.customerExit.bind(this), this.customerPools = {};
            for (var t = 0; t < l.TYPES.length; t++) {
                var e = l.TYPES[t];
                this.customerPools[e] = new n(4, !1, !0, this.customerFactory.bind(this, e))
            }
            this.progress = 0, this.customersToSpawn = 0, this.timeToNextCustomer = 0, this.lastCustomerType = null, this.soldOutScheduled = !1, c.onDaySkip(this.daySkip, this)
        }
        Day.prototype.customerFactory = function(t) {
            var e = new l(this.game, 0, 0, t);
            return e.onExit = this.customerExit, e
        }, Day.prototype.customerExit = function(t) {
            t.parent.removeChild(t), this.customerPools[t.customerType].recycle(t)
        }, Day.prototype.create = function() {
            this.progress = 0, this.customersToSpawn = 40, this.timeToNextCustomer = 0, this.lastCustomerType = null, this.soldOutScheduled = !1, this.soldOutSign = this.add.image(542, 609, "game", "game/sold_out.png"), this.soldOutSign.visible = !1, this.time.events.add(.25 * Phaser.Timer.SECOND, this._audioMorning), m.playMusic("music_bold", .5, 3e3)
        }, Day.prototype._audioMorning = function() {
            m.play("morning")
        }, Day.prototype.spawnCustomer = function() {
            do {
                var t = i.choice(l.TYPES)
            } while (t === this.lastCustomerType);
            var e = this.customerPools[t].get();
            return e.spawn(), this.world.add(e), this.lastCustomerType = e.customerType, this.customersToSpawn -= 1, this.timeToNextCustomer += 1.275, e
        }, Day.prototype.sortScene = function(t, e) {
            return t instanceof d && e instanceof d ? t.sortOrder - e.sortOrder : t instanceof d || e instanceof d ? 1 : t.y - e.y
        }, Day.prototype.daySkip = function() {
            for (this.progress = 1, s.setTime(this.progress); state.data.hourlyStats.money.length < 13;) this.recordHourlyStats();
            this.recordDailyStats(), c.onDayEnd.send()
        }, Day.prototype.showSoldOutSign = function() {
            this.soldOutSign.visible = !0, c.onOutOfStock.send()
        }, Day.prototype.recordHourlyStats = function() {
            var t = state.data;
            t.hourlyStats.money.push(t.money), t.hourlyStats.reputation.push(t.reputation), t.hourlyStats.cupsSold.push(t.dayStats.cupsSold), t.hourlyStats.price.push(t.price)
        }, Day.prototype.recordDailyStats = function() {
            var t = state.data;
            t.dailyStats.money.push(t.money), t.dailyStats.reputation.push(t.reputation), t.dailyStats.weather.push(t.temperature), t.dailyStats.cupsSold.push(t.dayStats.cupsSold), t.dailyStats.price.push(t.price), t.dailyStats.revenues.push(t.money - t.dayStats.startingMoney), t.dailyStats.profitsLosses.push(t.dayStats.profits), t.dailyStats.recipeCoffee.push(t.recipeCoffee), t.dailyStats.recipeMilk.push(t.recipeMilk), t.dailyStats.recipeSugar.push(t.recipeSugar), t.dailyStats.inventoryCups.push(t.inventoryCups), t.dailyStats.inventoryCoffee.push(t.inventoryCoffee), t.dailyStats.inventoryMilk.push(t.inventoryMilk), t.dailyStats.inventorySugar.push(t.inventorySugar)
        }, Day.prototype.update = function() {
            var t = this.time.physicsElapsed;
            0 !== u.servings.count || this.soldOutScheduled || (this.time.events.add(3 * Phaser.Timer.SECOND, this.showSoldOutSign, this), this.soldOutScheduled = !0), 12 * this.progress > state.data.hourlyStats.money.length && this.recordHourlyStats(), this.progress < 1 && (this.progress += t / 60, s.setTime(this.progress), this.timeToNextCustomer -= t, this.progress >= 1 ? (state.data.hourlyStats.money.length < 13 && this.recordHourlyStats(), this.recordDailyStats(), c.onDayEnd.send()) : this.timeToNextCustomer <= 0 && this.customersToSpawn > 0 && this.spawnCustomer()), this.world.customSort(this.sortScene, this)
        }, e.exports = Day
    }, {
        "../audio": 1,
        "../customer": 8,
        "../pool": 16,
        "../random": 17,
        "../shop": 20,
        "../signals": 22,
        "../tooltip": 29,
        "../weather": 31
    }],
    28: [function(t, e, a) {
        "use strict";
        var i = t("../signals"),
            n = ["ambient_normal", "ambient_rainy", "ambient_cold", "audio_gain", "audio_pay", "consideration_bad", "consideration_good", "menu_button_beep1", "menu_button_beep2", "music_bold", "music_calm", "music_menu", "purchase", "reaction_mixed", "reaction_bad", "reaction_good", "morning"];

        function Loading() {
            this.callback = null, this.context = null
        }
        Loading.prototype.init = function(t, e) {
            this.callback = t, this.context = e
        }, Loading.prototype.preload = function() {
            this.stage.disableVisibilityChange = !0, this.scale.preUpdate = function() {}, this.load.image("cold", "images/game/backgrounds/cold.png"), this.load.image("fair", "images/game/backgrounds/fair.png"), this.load.image("hot", "images/game/backgrounds/hot.png"), this.load.image("rainy", "images/game/backgrounds/rainy.png"), this.load.atlasJSONHash("game", "images/game/game.png", "images/game/game.json"), this.load.atlasJSONHash("customers", "images/game/customers.png", "images/game/customers.json");
            for (var t = 0; t < n.length; t++) this.load.audio(n[t], "audio/" + n[t] + ".mp3")
        }, Loading.prototype.create = function() {
            this.camera.roundPx = !0, this.sound.setDecodedCallback(n, this.decoded, this)
        }, Loading.prototype.decoded = function() {
            i.onLoad.send(this.game), this.callback.call(this.context)
        }, e.exports = Loading
    }, {
        "../signals": 22
    }],
    29: [function(t, e, a) {
        "use strict";

        function Tooltip(t, e, a, i) {
            "number" == typeof i && (i = Tooltip.SENTENCES[i]), Phaser.Image.call(this, t, e, a, "game", i), this.anchor.set(.5, 1), this.alpha = 0, this.sortOrder = t.time.now, t.add.tween(this).to({
                alpha: 1
            }, 500, Phaser.Easing.Cubic.Out, !0), t.add.tween(this).to({
                y: "-20"
            }, 500, Phaser.Easing.Elastic.Out, !0).onComplete.addOnce(this.hide, this)
        }
        Tooltip.prototype = Object.create(Phaser.Image.prototype), Tooltip.prototype.constructor = Tooltip, Tooltip.SENTENCES = ["game/tooltips/0.png", "game/tooltips/1.png", "game/tooltips/2.png", "game/tooltips/3.png", "game/tooltips/4.png", "game/tooltips/5.png", "game/tooltips/6.png", "game/tooltips/7.png", "game/tooltips/8.png", "game/tooltips/9.png", "game/tooltips/10.png", "game/tooltips/11.png", "game/tooltips/12.png", "game/tooltips/13.png", "game/tooltips/14.png", "game/tooltips/15.png", "game/tooltips/16.png", "game/tooltips/17.png", "game/tooltips/18.png", "game/tooltips/19.png", "game/tooltips/20.png", "game/tooltips/21.png", "game/tooltips/22.png", "game/tooltips/23.png"], Tooltip.prototype.hide = function() {
            this.game.add.tween(this).to({
                y: "-250"
            }, 2500, Phaser.Easing.Cubic.Out, !0, 500), this.game.add.tween(this).to({
                alpha: 0
            }, 2e3, Phaser.Easing.Cubic.Out, !0, 1e3).onComplete.addOnce(this._destroy, this)
        }, Tooltip.prototype._destroy = function() {
            this.destroy()
        }, e.exports = Tooltip
    }, {}],
    30: [function(t, e, a) {
        "use strict";
        var i = t("./dom"),
            n = t("./numbers").clamp,
            s = t("./state"),
            l = t("./screens"),
            d = t("./signals");

        function showTutorial3() {
            l.tutorial3.element.classList.remove("hidden")
        }
        i.find("section.tutorial", (function(t) {
            var e = t.querySelector("button.show");
            e && e.addEventListener("click", (function() {
                this.classList.toggle("active"), s.data.tutorial = !s.data.tutorial
            }));
            var a = t.querySelector(".number"),
                u = t.querySelectorAll(".page"),
                c = t.querySelector("button.back"),
                m = t.querySelector("button.next"),
                h = 0;

            function showPage(t) {
                h = n(t, 0, u.length - 1);
                for (var e = 0; e < u.length; e++) e === h ? u[e].classList.remove("hidden") : u[e].classList.add("hidden");
                0 === h ? c.classList.add("hidden") : c.classList.remove("hidden"), a.textContent = h + 1 + "/" + u.length
            }
            c && c.addEventListener("click", (function() {
                showPage(h - 1)
            })), m && m.addEventListener("click", (function() {
                s.data.tutorial && h < u.length - 1 ? showPage(h + 1) : (t.classList.add("hidden"), s.data.tutorial && "screen-tutorial1" === t.id ? l.tutorial2.element.classList.remove("hidden") : "screen-tutorial3" === t.id && (s.data.tutorial = !1, d.onTutorialEnd.send()))
            })), d.onNewGame((function() {
                h = 0, e && e.classList.add("active"), t.classList.add("hidden"), "screen-tutorial1" === t.id && t.classList.remove("hidden"), i.addClass(u, "hidden"), u[0].classList.remove("hidden"), c && c.classList.add("hidden"), a && (a.textContent = "1/" + u.length)
            }))
        })), d.onInventoryBuy((function() {
            s.data.tutorial && s.data.inventoryCups > 0 && s.data.inventoryCoffee >= s.data.recipeCoffee && s.data.inventoryMilk >= s.data.recipeMilk && s.data.inventorySugar >= s.data.recipeSugar && setTimeout(showTutorial3, 250)
        })), e.exports = {}
    }, {
        "./dom": 10,
        "./numbers": 14,
        "./screens": 19,
        "./signals": 22,
        "./state": 25
    }],
    31: [function(t, e, a) {
        "use strict";
        var i = t("./signals"),
            n = t("./shop"),
            s = t("./screens").game.element,
            l = s.querySelector(".weather.small"),
            d = s.querySelector(".weather.big"),
            u = l.querySelector(".day"),
            c = d.querySelector(".day"),
            m = l.querySelector(".time"),
            h = d.querySelector(".time"),
            p = l.querySelector(".temp"),
            f = d.querySelector(".temp"),
            y = l.querySelector(".temp-desc"),
            g = d.querySelector(".temp-desc");

        function big() {
            l.classList.add("hidden"), d.classList.remove("hidden")
        }

        function small() {
            l.classList.remove("hidden"), d.classList.add("hidden")
        }

        function setDay(t) {
            var e = "DAY " + t;
            u.textContent = e, c.textContent = e
        }

        function setTime(t) {
            var e = 7 + 12 * t,
                a = 12 * t % 1 * 60,
                i = e >= 12 ? " PM" : " AM";
            e >= 13 && (e = e % 13 + 1);
            var n = String(0 | e).padStart(2, "0") + ":" + String(0 | a).padStart(2, "0") + i;
            m.textContent = n, h.textContent = n
        }

        function setTemperature(t) {
            var e = t + "°";
            p.textContent = e, f.textContent = e;
            var a = n.getTemperatureDescription(t);
            y.textContent = a, g.textContent = a;
            var i = n.getTemperatureColor(t);
            p.style.color = i, f.style.color = i, y.style.color = i, g.style.color = i
        }
        i.onDayStart(big), i.onDayEnd(small), i.onNewDay((function() {
            setDay(state.data.day), setTime(0), setTemperature(state.data.temperature)
        })), e.exports = {
            big: big,
            small: small,
            setDay: setDay,
            setTime: setTime,
            setTemperature: setTemperature
        }
    }, {
        "./screens": 19,
        "./shop": 20,
        "./signals": 22
    }]
}, {}, [13]);
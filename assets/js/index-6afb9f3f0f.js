function doWhenReady(e) { var t = function() { document.removeEventListener("DOMContentLoaded", t), window.removeEventListener("load", t), e(), e = function() {} }; "complete" === document.readyState ? e() : (document.addEventListener("DOMContentLoaded", t), window.addEventListener("load", t)) }

function getIso639(e) { var t = e && e.match(/^\w+/); if (t && !(3 < (t = "nb" === t[0] ? "no" : t[0]).length)) return t }

function getDevicePixelRatio() { return void 0 !== window.devicePixelRatio ? window.devicePixelRatio : void 0 !== window.msMatchMedia ? window.msMatchMedia("(min-resolution: 192dpi)").matches ? 2 : window.msMatchMedia("(min-resolution: 144dpi)").matches ? 1.5 : 1 : 1 }
window.Element && !Element.prototype.matches && (Element.prototype.matches = function(e) { for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;); return -1 < n }), window.attachedEvents = [], Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) { var t = this;
    do { if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode } while (null !== t && 1 === t.nodeType); return null });
var _ = _ || {};
_.now = Date.now || function() { return (new Date).getTime() }, _.throttle = function(n, r, a) { var o, i, s, l = null,
        c = 0;
    a = a || {};

    function u() { c = !1 === a.leading ? 0 : _.now(), l = null, s = n.apply(o, i), l || (o = i = null) } return function() { var e = _.now();
        c || !1 !== a.leading || (c = e); var t = r - (e - c); return o = this, i = arguments, t <= 0 || r < t ? (l && (clearTimeout(l), l = null), c = e, s = n.apply(o, i), l || (o = i = null)) : l || !1 === a.trailing || (l = setTimeout(u, t)), s } }, _.debounce = function(t, n, r) { var a, o, i, s, l, c = function() { var e = _.now() - s;
        e < n && 0 <= e ? a = setTimeout(c, n - e) : (a = null, r || (l = t.apply(i, o), a || (i = o = null))) }; return function() { i = this, o = arguments, s = _.now(); var e = r && !a; return a = a || setTimeout(c, n), e && (l = t.apply(i, o), i = o = null), l } };
var mw = mw || {};
mw.html = function() {
        function t(e) { switch (e) {
                case "'":
                    return "&#039;";
                case '"':
                    return "&quot;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;" } } return { escape: function(e) { return e.replace(/['"<>&]/g, t) }, element: function(e, t, n) { var r, a, o = "<" + e; for (a in t) { if (!0 === (r = t[a])) r = a;
                    else if (!1 === r) continue;
                    o += " " + a + '="' + this.escape(String(r)) + '"' } if (null == n) return o += "/>"; switch (o += ">", typeof n) {
                    case "string":
                        o += this.escape(n); break;
                    case "number":
                    case "boolean":
                        o += String(n); break;
                    default:
                        if (n instanceof this.Raw) o += n.value;
                        else { if (!(n instanceof this.Cdata)) throw new Error("mw.html.element: Invalid type of contents"); if (/<\/[a-zA-z]/.test(n.value)) throw new Error("mw.html.element: Illegal end tag found in CDATA");
                            o += n.value } } return o += "</" + e + ">" }, Raw: function(e) { this.value = e }, Cdata: function(e) { this.value = e } } }(), mw.storage = { localStorage: function() { try { return window.localStorage } catch (e) {} }(), get: function(e) { try { return mw.storage.localStorage.getItem(e) } catch (e) {} return !1 }, set: function(e, t) { try { return mw.storage.localStorage.setItem(e, t), !0 } catch (e) {} return !1 }, remove: function(e) { try { return mw.storage.localStorage.removeItem(e), !0 } catch (e) {} return !1 } }, mw.RegExp = { escape: function(e) { return e.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1") } },
    function(a, o, l, i, s, c) { "use strict";

        function u(e) { var t, n, s = this,
                r = e.length,
                a = 0,
                o = s.i = s.j = s.m = 0; for (s.S = [], s.c = [], r || (e = [r++]); a < l;) s.S[a] = a++; for (a = 0; a < l; a++) o = g(o + (t = s.S[a]) + e[a % r]), n = s.S[o], s.S[a] = n, s.S[o] = t;
            s.g = function(e) { var t = s.S,
                    n = g(s.i + 1),
                    r = t[n],
                    a = g(s.j + r),
                    o = t[a];
                t[n] = o, t[a] = r; for (var i = t[g(r + o)]; --e;) n = g(n + 1), o = t[a = g(a + (r = t[n]))], t[n] = o, t[a] = r, i = i * l + t[g(r + o)]; return s.i = n, s.j = a, i }, s.g(l) }

        function d(e, t, n, r) { for (e += "", r = n = 0; r < e.length; r++) t[g(r)] = g((n ^= 19 * t[g(r)]) + e.charCodeAt(r)); for (r in e = "", t) e += String.fromCharCode(t[r]); return e }

        function g(e) { return e & l - 1 }
        o.seedrandom = function(e, t) { var r, n = []; return e = d(function e(t, n, r, a, o) { r = [];
                o = typeof t; if (n && "object" == o)
                    for (a in t)
                        if (a.indexOf("S") < 5) try { r.push(e(t[a], n - 1)) } catch (e) {}
                        return r.length ? r : t + ("string" != o ? "\0" : "") }(t ? [e, a] : arguments.length ? e : [(new Date).getTime(), a, window], 3), n), d((r = new u(n)).S, a), o.seededrandom = function() { for (var e = r.g(6), t = c, n = 0; e < i;) e = (e + n) * l, t *= l, n = r.g(1); for (; s <= e;) e /= 2, t /= 2, n >>>= 1; return (e + n) / t }, e }, c = o.pow(l, 6), i = o.pow(2, i), s = 2 * i, d(o.random(), a) }([], Math, 256, 52),
    function() { "use strict"; var o, n = "/beacon/event",
            t = [],
            a = { extend: function(e, t) { var n, r = {}; for (n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && (r[n] = e[n]); for (n in t) Object.prototype.hasOwnProperty.call(t, n) && t[n] && (r[n] = t[n]); return r }, noop: function() {} };
        (function() { for (var e = 0; e < 256; e++) t[e] = (e + 256).toString(16).slice(1) })(), o = window.eventLoggingLite = { schema: {}, maxUrlSize: 2e3, byteToHex: t, checkUrlSize: function(e, t) { if (t.length > o.maxUrlSize) return "Url exceeds maximum length" }, generateRandomSessionId: function() { var e, t, n, r = new Array(8),
                    a = window.crypto || window.msCrypto; if (a && a.getRandomValues) e = new Uint8Array(8), a.getRandomValues(e);
                else
                    for (e = new Array(8), t = 0; t < 8; t++) 0 == (3 & t) && (n = 4294967296 * Math.random()), e[t] = n >>> ((3 & t) << 3) & 255; for (t = 0; t < 8; t++) r[t] = o.byteToHex[e[t]]; return r.join("") }, validate: function(e, t) { var n, r, a, o = []; if (!t || !t.properties) return o.push("Missing or empty schema"), o; for (n in e) t.properties.hasOwnProperty(n) || o.push("Undeclared property: " + n); for (n in t.properties) a = t.properties[n], e.hasOwnProperty(n) ? (r = e[n], a.enum && a.required && -1 === a.enum.indexOf(r) && o.push('Value "' + JSON.stringify(r) + '" for property "' + n + '" is not one of ' + JSON.stringify(a.enum))) : a.required && o.push("Missing property:", n); return o }, prepare: function(e, t) { for (var n = a.extend(e.defaults, t), r = o.validate(n, e); r.length;) console.log(r[r.length - 1]), r.pop(); return { event: n, revision: e.revision || -1, schema: e.name, webHost: location.hostname, wiki: "metawiki" } }, makeBeaconUrl: function(e) { var t = encodeURIComponent(JSON.stringify(e)); return n + "?" + t + ";" }, sendBeacon: /1|yes/.test(navigator.doNotTrack) ? a.noop : navigator.sendBeacon ? function(e) { try { navigator.sendBeacon(e) } catch (e) {} } : function(e) { document.createElement("img").src = e }, logEvent: function(e, t) { var n = o.prepare(e, t),
                    r = o.makeBeaconUrl(n);
                o.checkUrlSize(e, r) || o.sendBeacon(r) } } }(), window.wmTest = function(e, t) { var n, r, a, o, i, s, l, c, u = { popSize: /www.wikipedia.org/.test(location.hostname) ? 200 : 2, testGroups: !1, sessionLength: 9e5 },
            d = "portal_session_id",
            g = "portal_test_group_expires";

        function m(e) { return 1 === Math.floor(Math.seededrandom() * e + 1) }

        function h() { var e = "rejected"; return m(u.popSize) && (e = "baseline", u.testGroups && u.testGroups.test && m(10) && (e = m(2) ? u.testGroups.test : u.testGroups.control)), e } return n = function() { var e, t, n = [];

            function r(e) { var t = getIso639(e);
                t && n.indexOf(t) < 0 && n.push(t) } for (t in navigator.languages) r(navigator.languages[t]); return /Android/i.test(navigator.userAgent) && (e = navigator.userAgent.split(";"))[3] && r(e[3].trim()), r(navigator.language), r(navigator.userLanguage), r(navigator.browserLanguage), r(navigator.systemLanguage), n }(), o = location.hash.slice(1) === u.testGroups.test, c = !1, t.storage.localStorage && !/1|yes/.test(navigator.doNotTrack) && (i = t.storage.get(d), s = t.storage.get(g), l = (new Date).getTime(), i && s > parseInt(l, 10) ? c = i : (c = e.generateRandomSessionId(), t.storage.set(d, c)), t.storage.set(g, l + u.sessionLength)), (r = c) ? (Math.seedrandom(r), a = o ? u.testGroups.test : h()) : (a = "rejected", o = !0), u.testGroups && a === u.testGroups.test && (document.body.className += " " + a), { loggingDisabled: o, sessionId: r, userLangs: n, group: a, testGroups: u.testGroups, populationSize: u.popSize, getTestGroup: h } }(eventLoggingLite, mw),
    function(a, e) { "use strict"; var o, i, t, s, n, r, l = document.cookie.match(/GeoIP=.[^:]/),
            c = document.cookie.match(/GeoIP=.[^:].{2}[^:]/); if ("rejected" !== e.group && !e.loggingDisabled) { for (o = { name: "WikipediaPortal", revision: 15890769, defaults: { session_id: e.sessionId, event_type: "landing", referer: document.referrer || null, accept_language: e.userLangs.toString(), cohort: e.group }, properties: { session_id: { type: "string", required: !0 }, event_type: { type: "string", required: !0, enum: ["landing", "clickthrough", "select-language"] }, section_used: { type: "string", required: !1, enum: ["primary links", "search", "language search", "secondary links", "other languages", "other projects"] }, destination: { type: "string", required: !1 }, referer: { type: "string", required: !1 }, country: { type: "string", required: !1 }, accept_language: { type: "string", required: !0 }, cohort: { type: "string", required: !1 }, selected_language: { type: "string", required: !1 } } }, i = [{ name: "primary links", nodes: document.querySelectorAll('[data-el-section="primary links"]') }, { name: "search", nodes: document.querySelectorAll('[data-el-section="search"]') }, { name: "language search", nodes: document.querySelectorAll('[data-el-section="language search"]') }, { name: "secondary links", nodes: document.querySelectorAll('[data-el-section="secondary links"]') }, { name: "other languages", nodes: document.querySelectorAll('[data-el-section="other languages"]') }, { name: "other projects", nodes: document.querySelectorAll('[data-el-section="other projects"]') }], document.addEventListener("click", function(e) { var t, n = e || window.event,
                        r = n.target || n.srcElement;
                    r.matches("a, a *") && (t = function e(t) { return "A" !== t.tagName && t.parentElement ? e(t.parentElement) : t }(r), "search" === (s = { event_type: "clickthrough", destination: t.href, section_used: u(t) }).section_used && (s.selected_language = document.getElementById("searchLanguage").options[document.getElementById("searchLanguage").selectedIndex].lang), s.section_used && a.logEvent(o, s)) }), document.addEventListener("change", function(e) { var t = e || window.event,
                        n = t.target || t.srcElement; if ("searchLanguage" === n.id) { if (-1 === n.selectedIndex) return;
                        (s = { event_type: "select-language", selected_language: n.options[n.selectedIndex].lang }).selected_language && a.logEvent(o, s) } }), t = document.getElementsByTagName("form"), r = 0; r < t.length; r++) t[r].addEventListener("submit", g);
            l && (n = l.toString().split("=")[1], o.defaults.country = "US" === n && c ? c.toString().split("=")[1] : n, window.addEventListener("load", d)), window.addEventListener("load", d) }

        function u(e) { for (var t, n, r = {}, a = 0; a < i.length; a++)
                for (n = i[a].nodes, t = 0; t < n.length; t++) n[t].contains(e) && (r = i[a]); return r.name }

        function d() { s = { event_type: "landing" }, a.logEvent(o, s), s = null }

        function g(e) { var t = e || window.event,
                n = t.target || t.srcElement;
            null === s && (s = { event_type: "clickthrough", section_used: u(n), destination: n.action }), "search" === s.section_used && (s.selected_language = document.getElementById("searchLanguage").options[document.getElementById("searchLanguage").selectedIndex].lang), s.section_used && a.logEvent(o, s) } }(eventLoggingLite, wmTest), window.WMTypeAhead = function(e, t) { var k, E, c, i, u, n = "typeahead-suggestions",
            d = document.getElementById(n),
            r = document.getElementById(e),
            g = document.getElementById(t),
            s = Math.round(80 * getDevicePixelRatio());

        function l() { setTimeout(function() { var e = document.getElementById("api_opensearch");
                d.innerHTML = "", e && (e.src = !1), u.clear() }, 300) }

        function m(e) { for (var t, n, r, a, o, i, s, l, c, u, d, g, m, h, p, f = '<div class="suggestions-dropdown">', w = !1, v = "", y = "", b = 0; b < e.length; b++) e[b] && (y = (o = e[b]).description || "", w = !1, o.thumbnail && o.thumbnail.source && (w = (w = o.thumbnail.source.replace(/"/g, "%22")).replace(/'/g, "%27")), v = "", y && (v = "object" == typeof y && y[0] ? y[0].toString() : y.toString()), a = mw.html.element("p", { class: "suggestion-description" }, v), r = mw.html.element("h3", { class: "suggestion-title" }, new mw.html.Raw((i = o.title, s = E, p = h = m = g = d = u = c = l = void 0, g = mw.html.escape(mw.RegExp.escape(s)), m = new RegExp(g, "i"), h = i.search(m), p = mw.html.escape(i), 0 <= h && (l = h + g.length, c = i.substring(h, l), u = i.substring(0, h), d = i.substring(l, i.length), p = u + mw.html.element("em", { class: "suggestion-highlight" }, c) + d), p))), n = mw.html.element("div", { class: "suggestion-text" }, new mw.html.Raw(r + a)), t = mw.html.element("div", { class: "suggestion-thumbnail", style: !!w && "background-image:url(" + w + ")" }, ""), f += mw.html.element("a", { class: "suggestion-link", href: "https://" + k + ".wikipedia.org/wiki/" + encodeURIComponent(o.title.replace(/ /gi, "_")) }, new mw.html.Raw(n + t))); return f += "</div>" }

        function h(e, t) { for (var n, r = " active", a = 0; a < t.length; a++)(n = t[a]) !== e ? n.className = n.className.replace(r, "") : / active/.test(e.className) ? e.className = e.className.replace(r, "") : (e.className += r, u.setIndex(a)) } return d || ((d = document.createElement("div")).id = n, r.appendChild(d)), window.callbackStack = { queue: {}, index: -1, incrementIndex: function() { return this.index += 1, this.index }, addCallback: function(e) { var t = this.incrementIndex(); return this.queue[t] = e(t), t }, deleteSelfFromQueue: function(e) { delete this.queue[e] }, deletePrevCallbacks: function(e) { for (var t in this.deleteSelfFromQueue(e), this.queue) t < e && (this.queue[t] = this.deleteSelfFromQueue.bind(window.callbackStack, t)) } }, u = { index: -1, max: 6, setMax: function(e) { this.max = e }, increment: function(e) { return this.index += e, this.index < 0 && this.setIndex(this.max - 1), this.index === this.max && this.setIndex(0), this.index }, setIndex: function(e) { return e <= this.max - 1 && (this.index = e), this.index }, clear: function() { this.setIndex(-1) } }, window.portalOpensearchCallback = function(t) { var n, r, a, o, i, s = t,
                l = []; return function(e) { if (window.callbackStack.deletePrevCallbacks(s), document.activeElement === g) { for (r in n = e.query && e.query.pages ? e.query.pages : []) a = n[r], l[a.index - 1] = a; for (o = m(l), u.setMax(l.length), u.clear(), d.innerHTML = o, c = d.childNodes[0].childNodes, t = 0; t < c.length; t++)(i = c[t]).addEventListener("mouseenter", h.bind(this, i, c)), i.addEventListener("mouseleave", h.bind(this, i, c)) } } }, g.addEventListener("keydown", function(e) { var t, n, r, a = e || window.event,
                o = a.which || a.keyCode;
            d.firstChild && (40 !== o && 38 !== o || (n = (t = d.firstChild.childNodes)[r = 40 === o ? u.increment(1) : u.increment(-1)].firstChild.childNodes[0], g.value = n.textContent, h(i = !!t && t[r], t)), 13 === o && i && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, i.children[0].click())) }), window.addEventListener("click", function(e) { e.target.closest("#search-form") || l() }), { typeAheadEl: d, query: function(e, t) { var n, r, a, o = document.getElementById("api_opensearch"),
                    i = document.getElementsByTagName("head")[0];
                k = encodeURIComponent(t) || "en", 0 !== (E = encodeURIComponent(e)).length ? (n = "//" + k + ".wikipedia.org/w/api.php?", o && i.removeChild(o), (o = document.createElement("script")).id = "api_opensearch", r = window.callbackStack.addCallback(window.portalOpensearchCallback), a = { action: "query", format: "json", generator: "prefixsearch", prop: "pageprops|pageimages|description", redirects: "", ppprop: "displaytitle", piprop: "thumbnail", pithumbsize: s, pilimit: 6, gpssearch: e, gpsnamespace: 0, gpslimit: 6, callback: "callbackStack.queue[" + r + "]" }, o.src = n + function(e) { var t, n = []; for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t])); return n.join("&") }(a), i.appendChild(o)) : l() } } },
    function(e) { var t = document.getElementById("searchInput"),
            n = new e("search-input", "searchInput"),
            r = "oninput" in document ? "input" : "propertychange";
        t.addEventListener("focus", _.debounce(function() { n.query(t.value, document.getElementById("searchLanguage").value) }, 100)), t.addEventListener(r, _.debounce(function() { n.query(t.value, document.getElementById("searchLanguage").value) }, 100)) }((wmTest, WMTypeAhead)),
    function(i) { var o, s, r = wmTest.userLangs,
            l = document.querySelectorAll(".central-featured-lang"),
            a = document.querySelector(".central-featured"),
            e = i.storage.get("translationHash");

        function c(e) { var t; try { t = JSON.parse(e) } catch (e) { t = "" } return t }

        function u(e, t) { var n = e.getElementsByTagName("a")[0],
                r = t.name.replace(/<\/?[^>]+(>|$)/g, "");
            n.setAttribute("href", "//" + t.url), n.setAttribute("id", "js-link-box-" + t.lang), n.setAttribute("data-slogan", t.slogan || "The Free Encyclopedia"), n.setAttribute("title", r + " — " + t.siteName + " — " + (t.slogan || "")), e.setAttribute("lang", t.lang), e.getElementsByTagName("strong")[0].textContent = r, e.getElementsByTagName("bdi")[0].textContent = t.numPages + "+", e.getElementsByTagName("span")[0].textContent = t.entries || "" }

        function d() { var e, t, n, r, a = !0; for (l = document.querySelectorAll(".central-featured-lang"), r = 0; r < l.length && !0 === a; r++) t = l[r].getAttribute("lang"), a = 0 <= o.indexOf(t); for (r = 0; r < l.length; r++) a && (e = l[r]).className !== (n = "central-featured-lang lang" + (r + 1)) && (e.className = n) }

        function g(e, t) { var n, r, a, o;
            s[t] ? u(e, s[t]) : (n = e, r = t, (o = new XMLHttpRequest).open("GET", encodeURI("portal/wikipedia.org/assets/l10n/" + r + "-" + translationsHash + ".json"), !0), o.onload = function() { 200 === o.status && (a = c(this.responseText)) && (u(n, a), d(), (s = c(i.storage.get("storedTranslations")) || {})[r] = a, i.storage.set("storedTranslations", JSON.stringify(s))) }, o.send()) }
        s = c(i.storage.get("storedTranslations")) || {}, o = Array.prototype.map.call(l, function(e) { return e.getAttribute("lang") }), e !== translationsHash && (i.storage.set("translationHash", translationsHash), i.storage.remove("storedTranslations")), wmL10nVisible.ready || (function() { for (var e, t, n = 0; n < r.length; n++) e = r[n], 0 <= (t = o.indexOf(e)) ? t === n || o.splice(n, 0, o.splice(t, 1)[0]) : (o.splice(n, 0, e), o.pop()) }(), function() { for (var e, t, n, r = 0; r < o.length; r++) l = document.querySelectorAll(".central-featured-lang"), e = o[r], (t = document.querySelector(".central-featured-lang[lang=" + e + "]")) ? Array.prototype.indexOf.call(l, t) !== r && a.insertBefore(t, l[r]) : (g(n = function() { for (var e, t = null, n = o.length - 1; 0 <= n && null === t; n--) e = l[n].getAttribute("lang"), o.indexOf(e) < 0 && (t = l[n]); return t }(), e), a.insertBefore(n, l[r])), (t || n).setAttribute("dir", 0 <= rtlLangs.indexOf(e) ? "rtl" : "ltr") }(), d()) }(mw),
    function() { "use strict";

        function p(e) { return document.getElementById(e) }

        function f(e) { var t, n;
            document.querySelector && "www-wiktionary-org" === document.body.id && !e.match(/\W/) && (n = (t = document.querySelector('option[lang|="' + e + '"]')) && t.getAttribute("data-logo")) && document.body.setAttribute("data-logo", n) }

        function w() { return (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || "").toLowerCase().split("-")[0] }

        function v(e, t) { for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t)) }

        function y(e) { var t;
            0 === e.indexOf("zh") && ("mo" === (t = e.substring(3)) ? t = "hk" : "my" === t && (t = "sg"), t && 0 <= "cn,tw,hk,sg,".indexOf(t + ",") && (p("zh_wiki").href += "zh-" + t + "/", p("zh_others").href = p("zh_others").href.replace("wiki/", "zh-" + t + "/")), function(e) { var t, n, r, a = "data-convert-hans",
                    o = "data-converttitle-hans"; if (-1 !== "zh-hans,zh-cn,zh-sg,zh-my,".indexOf(e + ","))
                    for (r = ["zh_art", "zh_others", "zh_search", "zh_tag", "zh_top10", "zh-yue_wiki", "gan_wiki", "hak_wiki", "wuu_wiki"], t = 0; t < r.length; t += 1)(n = p(r[t])) && (n.hasAttribute(a) && v(n, n.getAttribute(a)), n.hasAttribute(o) && (n.title = n.getAttribute(o))) }(e)) }
        doWhenReady(function() { var e, t, n, r, a, o, i, s, l, c, u, d, g, m, h = ((l = document.cookie.match(/(?:^|\W)searchLang=([^;]+)/)) ? l[1] : w()).toLowerCase(); if (h && (y(h), e = getIso639(h), t = p("searchLanguage"))) { for (r = 0, a = (n = t.getElementsByTagName("option")).length; !o && r < a; r += 1) n[r].value === e && (o = e);!o && document.querySelector && (i = document.querySelector('.langlist a[lang|="' + e + '"]')) && (o = e, (s = document.createElement("option")).setAttribute("lang", e), s.setAttribute("value", e), v(s, i.textContent || i.innerText || e), t.appendChild(s)), o && (f(t.value = o), c = o, u = document.createElement("link"), d = window.location.hostname.split("."), g = d.pop(), m = d.pop(), u.rel = "preconnect", u.href = "//" + c + "." + m + "." + g, document.head.appendChild(u)) } }), doWhenReady(function() { var e, t, n, r = p("searchInput"),
                a = p("searchLanguage"); if (r)
                for (void 0 === r.autofocus ? r.focus() : window.scroll(0, 0), e = location.search && location.search.substr(1).split("&"), t = 0; t < e.length; t += 1)
                    if ("search" === (n = e[t].split("="))[0] && n[1]) { r.value = decodeURIComponent(n[1].replace(/\+/g, " ")); break }
            a.addEventListener("change", function() { var e, t, n;
                a.blur(), (e = a.value) && (t = w().match(/^\w+/), n = new Date, f(e), t && t[0] === e ? n.setTime(n.getTime() - 1) : n.setFullYear(n.getFullYear() + 1), document.cookie = "searchLang=" + e + ";expires=" + n.toUTCString() + ";domain=" + location.host + ";") }) }), doWhenReady(function() { var e = document.searchwiki && document.searchwiki.elements.uselang;
            e && (e.value = w()) }), doWhenReady(function() { var e, t, n, r, a, o = getDevicePixelRatio(),
                i = new Image; if (1 < o && void 0 === i.srcset)
                for (e = document.getElementsByTagName("img"), a = 0; a < e.length; a++) "string" == typeof(n = (t = e[a]).getAttribute("srcset")) && "" !== n && void 0 !== (r = function(e, t) { for (var n, r, a = { ratio: 1 }, o = t.split(/ *, */), i = 0; i < o.length; i++)(r = (n = o[i].match(/\s*(\S+)(?:\s*([\d.]+)w)?(?:\s*([\d.]+)h)?(?:\s*([\d.]+)x)?\s*/))[4] && parseFloat(n[4])) <= e && r > a.ratio && (a.ratio = r, a.src = n[1], a.width = n[2] && parseFloat(n[2]), a.height = n[3] && parseFloat(n[3])); return a }(o, n)).src && (t.setAttribute("src", r.src), void 0 !== r.width && t.setAttribute("width", r.width), void 0 !== r.height && t.setAttribute("height", r.height)) }) }(), window.mw || (window.mw = window.mediaWiki = { loader: { state: function() {} } }),
    function() { var e = document.getElementById("js-lang-list-button");

        function t() { / lang-list-active /g.test(document.body.className) ? (document.body.className = document.body.className.replace(" lang-list-active ", ""), mw.storage.set("lang-list-active", "false")) : (document.body.className += " lang-list-active ", mw.storage.set("lang-list-active", "true")) } "true" !== mw.storage.get("lang-list-active") && ! function(e) { for (var t, n = document.getElementsByTagName("a"), r = !0, a = 0; a < n.length && r; a++)(t = n[a].getAttribute("lang")) && 0 <= e.indexOf(t) && (r = !1); return r }(wmTest.userLangs) || t(), e.addEventListener("click", function() { t() }) }(),
    function(e, t, r, n) { var a, o, i, s, l = e.userLangs[0];

        function c(e) { var t; try { t = JSON.parse(e) } catch (e) { t = "" } return t } if ("en" !== e.userLangs[0])
            if (s = r.storage.get("translationHash"), (a = t === s && s && c(r.storage.get("storedTranslations")) || {})[l]) { if (i = a[l], wmL10nVisible.ready) return;
                g(l), d(i) } else(o = new XMLHttpRequest).open("GET", encodeURI("portal/wikipedia.org/assets/l10n/" + l + "-" + t + ".json"), !0), o.onreadystatechange = function() { if (4 === o.readyState) { if (200 !== o.status) return void wmL10nVisible.makeVisible(); if (i = c(this.responseText)) { if (e = l, t = i, (n = c(r.storage.get("storedTranslations")) || {})[e] = t, r.storage.set("storedTranslations", JSON.stringify(n)), wmL10nVisible.ready) return;
                        g(l), d(i) } } var e, t, n }, o.send();
        else wmL10nVisible.makeVisible();

        function u(e, t) { var n = 0; for (t = String(t).split("."); n < t.length;) { if (null == e) return;
                e = e[t[n++]] } return e }

        function d(e) { for (var t, n, r, a, o, i = document.querySelectorAll(".jsl10n"), s = new RegExp(/<a[^>]*>([^<]+)<\/a>/), l = 0; l < i.length; l++)
                if ("string" == typeof(r = u(e, n = (t = i[l]).getAttribute("data-jsl10n"))) && 0 < r.length) switch (n) {
                    case "app-links.other":
                        s.test(r) ? t.innerHTML = r : t.firstChild.textContent = r; break;
                    case "license":
                        t.innerHTML = r; break;
                    case "terms":
                        t.firstChild.textContent = r, (a = u(e, "terms-link")) && t.firstChild.setAttribute("href", a); break;
                    case "Privacy Policy":
                        t.firstChild.textContent = r, (o = u(e, "privacy-policy-link")) && t.firstChild.setAttribute("href", o); break;
                    default:
                        t.textContent = r, t.setAttribute("lang", e.lang) }
                wmL10nVisible.makeVisible() }

        function g(e) { document.documentElement.lang = e, 0 <= n.indexOf(e) ? document.dir = "rtl" : document.dir = "ltr" } }(wmTest, translationsHash, mw, rtlLangs);
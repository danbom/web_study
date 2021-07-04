
        function onLoad() {
            var e, t, a, n, o, s, c, l, r, i, u, d;
            (e = window),
                (t = document),
                (a = "script"),
                (n = "ga"),
                (e.GoogleAnalyticsObject = n),
                (e.ga =
                    e.ga ||
                    function () {
                        (e.ga.q = e.ga.q || []).push(arguments);
                    }),
                (e.ga.l = 1 * new Date()),
                (o = t.createElement(a)),
                (s = t.getElementsByTagName(a)[0]),
                (o.async = 1),
                (o.src = "https://www.google-analytics.com/analytics.js"),
                s.parentNode.insertBefore(o, s),
                ga("create", "UA-94005074-1", "auto"),
                ga("send", "pageview"),
                (c = window),
                (l = document),
                (r = "script"),
                c.fbq ||
                ((i = c.fbq =
                    function () {
                        i.callMethod
                            ? i.callMethod.apply(i, arguments)
                            : i.queue.push(arguments);
                    }),
                    c._fbq || (c._fbq = i),
                    ((i.push = i).loaded = !0),
                    (i.version = "2.0"),
                    (i.queue = []),
                    ((u = l.createElement(r)).async = !0),
                    (u.src = "https://connect.facebook.net/en_US/fbevents.js"),
                    (d = l.getElementsByTagName(r)[0]).parentNode.insertBefore(
                        u,
                        d
                    )),
                fbq("init", "1786065945027357"),
                fbq("track", "PageView"),
                loadCSS(
                    "https://alvarotrigo.com/angular-fullpage/public/css/non-critical.css"
                );
        }
        function loadCSS(e, t, a) {
            var n = window.document.createElement("link");
            window.document.styleSheets;
            (n.rel = "stylesheet"),
                (n.href = e),
                document
                    .querySelector("head")
                    .insertBefore(
                        n,
                        document.querySelector("#prefetch").nextSibling
                    );
        }
        window.addEventListener("load", onLoad);
        var ACTIVE = "active";
        function closest(e, t) {
            return e && 1 === e.nodeType
                ? e.matches(t)
                    ? e
                    : closest(e.parentNode, t)
                : null;
        }
        function areYouCrazy() {
            alert(
                "Really dude?\n\nYou though I would lose my precious time making these buttons work as if they were real?\nNo freaking way! :)"
            );
        }
        function onClickTab(e, t) {
            e.preventDefault();
            var a = t.getAttribute("href").substr(1);
            removeClass(document.querySelector(".shell-tab.active"), ACTIVE),
                addClass(t, ACTIVE),
                removeClass(document.querySelector(".active[data-tab]"), ACTIVE),
                addClass(
                    document.querySelector('[data-tab="' + a + '"]'),
                    ACTIVE
                );
        }
        function addClass(e, t) {
            return (
                e.classList ? e.classList.add(t) : (e.className += " " + t), e
            );
        }
        function removeClass(e, t) {
            return (
                e.classList
                    ? e.classList.remove(t)
                    : (e.className = e.className.replace(
                        new RegExp(
                            "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                            "gi"
                        ),
                        " "
                    )),
                e
            );
        }
        ["click", "touchstart"].forEach(function (e) {
            document.addEventListener(e, function (e) {
                var t = e.target;
                console.log(t),
                    closest(t, ".shell-tab")
                        ? onClickTab(e, t)
                        : closest(t, ".shell-header-actions") && areYouCrazy();
            });
        });
!(function (e, t) {
  function o(t) {
    return null != e.getElementById(t) && void 0 !== e.getElementById(t);
  }
  function n(t) {
    return e.getElementById(t);
  }
  function i(e) {
    e.style.display = "none";
  }
  function l(e) {
    e.style.display = "block";
  }
  function a(t) {
    var o = e.createElement("div");
    (o.id = "Fixd"),
      (o.className = "Aside"),
      (o.innerHTML = "<i class='menuBOdyL'>&times;</i><span></span>" + t),
      e.body.appendChild(o),
      (o.getElementsByTagName("i")[0].onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      }),
      (o.getElementsByTagName("span")[0].onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
  }
  function r(e) {
    (n(e).onclick = function () {
      n(e).getElementsByTagName("INPUT")[0].focus();
    }),
      (n(e).onsubmit = function () {
        var t = n(e).getElementsByTagName("INPUT")[0];
        if (
          ((t.onkeydown = function () {
            t.className = "";
          }),
          "" == t.value)
        )
          return !(t.className = "red");
      });
  }
  var s,
    d,
    c,
    u,
    m,
    p = function (t) {
      "string" == typeof t
        ? e.getElementById(t).parentNode.removeChild(e.getElementById(t))
        : t.parentNode.removeChild(t);
    };
  if (
    (o("OpenMenu") &&
      (n("OpenMenu").onclick = function () {
        l(n("ASIde")), (e.body.id = "Open" != e.body.id ? "Open" : "Clos");
      }),
    o("FoucSearsh") && r("FoucSearsh"),
    o("MainSrsh") && r("MainSrsh"),
    o("MobileAdsy") &&
      (t.innerWidth <= 768
        ? ((n("MobileAdsyHTML").innerHTML = n("MobileAdsy").innerText),
          p(n("MobileAdsy")),
          (adsbygoogle = window.adsbygoogle || []).push({}))
        : (p(n("MobileAdsyHTML")), p(n("MobileAdsy")))),
    o("MenuClos") &&
      (n("MenuClos").onclick = function () {
        i(n("ASIde")), (e.body.id = "Open" != e.body.id ? "Open" : "Clos");
      }),
    o("FixedClos") &&
      (n("FixedClos").onclick = function () {
        i(n("FixedApp"));
      }),
    o("CloseIconMenu") &&
      (n("CloseIconMenu").onclick = function () {
        i(n("ASIde")), (e.body.id = "Open" != e.body.id ? "Open" : "Clos");
      }),
    o("BroBar") &&
      ((n("BroBarAni").style.animation =
        "progres " + downloadSecend + "s linear"),
      setTimeout(function () {
        i(n("BroBar")),
          (n("DwnTxtDone").innerHTML =
            n("DwnTxtDone").getAttribute("data-done"));
      }, 1e3 * downloadSecend)),
    o("DwnPgLnk") &&
      setTimeout(function () {
        l(n("DwnPgLnk"));
      }, 1e3 * downloadSecend),
    o("AddCommentForm") &&
      (n("AddCommentForm").onsubmit = function () {
        return (
          n("ComArea").setAttribute("minlength", "3"),
          "" == n("ComArea").value && (n("ComArea").className = "red"),
          (n("ComArea").onkeydown = function () {
            n("ComArea").className = "";
          }),
          "none" == n("UserRateVal").value &&
            ((n("ComStars").className += " red"),
            (n("ComArea").placeholder = "يجب وضع تقييم"),
            setTimeout(function () {
              (n("ComStars").className = "stars"),
                (n("ComArea").placeholder = "اكتب تعليقك هنا …");
            }, 500)),
          "" != n("ComArea").value && "none" != n("UserRateVal").value && void 0
        );
      }),
    o("ComStars"))
  )
    for (
      var g = n("ComStars").getElementsByTagName("label"), f = 0;
      f < g.length;
      f++
    )
      g[f].onclick = function () {
        n("UserRateVal").value = this.getAttribute("data");
      };
  (t.onload = function () {
    o("SliderW") &&
      setTimeout(function () {
        for (
          var e,
            t = n("SliderU").getElementsByTagName("img"),
            o = 10 * (t.length - 1),
            i = 0;
          i < t.length;
          i++
        ) {
          t[i].setAttribute("src", t[i].getAttribute("data-src"));
          var l = t[i];
          (t[i].onclick = function () {
            a(
              "<img src='" +
                (this.getAttribute("data-src") || this.getAttribute("src")) +
                "'/>"
            );
          }),
            setTimeout(function () {
              (l.onload = function () {
                this.className += " done";
              }),
                (o += l.offsetWidth),
                (e = l.offsetHeight),
                (n("SliderU").style.width = o + "px"),
                (n("SliderU").style.height = e + "px"),
                (n("SliderW").style.height = "auto"),
                (n("SliderW").className += " done");
            }, 1e3);
        }
      }, 1500);
  }),
    o("AppPage") &&
      (((p = e.createElement("div")).id = "MobBtn"),
      (p.innerHTML = e.getElementsByClassName("app12")[0].innerHTML),
      (p = p),
      (s = s = e.getElementById("ScrollTopForFixed")).parentNode.insertBefore(
        p,
        s.nextSibling
      )),
    o("MaxReadMore") &&
      (n("MaxReadMore").onclick = function () {
        i(n("MaxReadMore")), (n("ReadMore").id = "");
      }),
    o("TopScroll") && (d = n("TopScroll")),
    o("ScrollTopForFixed") && (c = n("ScrollTopForFixed")),
    o("TopScroll"),
    o("ScrollTopForFixed"),
    o("TopScroll") && (u = d.getBoundingClientRect().top - 30),
    o("ScrollTopForFixed") && (m = c.getBoundingClientRect().top - 30),
    (t.onresize = function () {
      o("TopScroll") && (u = d.getBoundingClientRect().top - 30),
        o("ScrollTopForFixed") && (m = c.getBoundingClientRect().top - 30);
    }),
    (t.onscroll = function (t) {
      var i =
        e.documentElement.scrollTop ||
        e.body.parentNode.scrollTop ||
        e.body.scrollTop;
      o("TopScroll") && (d.style.top = u <= i ? i - u + "px" : "0px"),
        o("FixedApp") &&
          (m <= i
            ? n("FixedApp").setAttribute("show", "1")
            : n("FixedApp").setAttribute("show", "0"));
    }),
    (e.getElementsByClassName("mainbody")[0].style.minHeight =
      t.innerHeight -
      (e.getElementsByClassName("mainheader")[0].clientHeight +
        30 +
        e.getElementsByClassName("FooterM")[0]) +
      "px"),
    t.scrollTo(0, 0);
  var y,
    h = e.getElementsByClassName("YouTubeVideo");
  if (h.length > 0)
    for (y = 0; y < h.length; y++) {
      var T = h[y].getAttribute("data-id");
      (h[y].innerHTML =
        '<img src="https://i.ytimg.com/vi/' +
        T +
        '/maxresdefault.jpg"><i><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></i>'),
        (h[y].getElementsByTagName("i")[0].onclick = function () {
          this.parentNode.innerHTML =
            '<iframe src="https://www.youtube-nocookie.com/embed/' +
            T +
            '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
        });
    }
})(document, window);

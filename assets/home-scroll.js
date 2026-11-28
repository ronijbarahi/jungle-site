// Home page scroll-linked moments: studio photo parallax, pinned collage, "From idea to growth" band, floating CTA.
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var media = $('#zhm'), mimg = $('#zhmi'), pin = $('#zhp'), band = $('#zhb'), fc = $('#zfc'), close = $('#zhc');
  if (!media || !pin || !band) return;
  var wl = $('#zwl'), wr = $('#zwr'), c = [$('#zc1'), $('#zc2'), $('#zc3'), $('#zc4')];
  var b2 = $('#zb2'), bt = $('#zbt'), f = [$('#zf1'), $('#zf2'), $('#zf3'), $('#zf4')];
  function prog(el) { var r = el.getBoundingClientRect(); return Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))); }
  function cl(x, a, b) { return Math.min(1, Math.max(0, (x - a) / (b - a))); }
  var ticking = false;
  function frame() {
    ticking = false;
    var y = scrollY, vh = innerHeight, vw = innerWidth;
    fc.classList.toggle('show', y > vh * .8 && close.getBoundingClientRect().top > vh * .6);
    if (reduce) {
      [wl, wr].concat(c).forEach(function (e) { e.style.opacity = 1; });
      b2.style.opacity = 1; bt.style.opacity = 1; bt.style.position = 'static'; return;
    }
    var mr = media.getBoundingClientRect();
    if (mr.bottom > 0 && mr.top < vh) { var t = (mr.top + mr.height / 2 - vh / 2) / vh; mimg.style.transform = 'translateY(' + (t * -9) + '%)'; }
    var p = prog(pin), fade = cl(p, 0, .18) * (1 - cl(p, .86, 1));
    wl.style.opacity = fade; wr.style.opacity = fade;
    wl.style.transform = 'translate(' + (-(1 - cl(p, 0, .25)) * 8) + 'vw,-50%)';
    wr.style.transform = 'translate(' + ((1 - cl(p, 0, .25)) * 8) + 'vw,-50%)';
    var sp = [70, -40, 95, -65];
    c.forEach(function (el, i) {
      var d = (0.5 - p) * sp[i], o = cl(p, .02 + i * .03, .2 + i * .03) * (1 - cl(p, .9, 1));
      el.style.opacity = o; el.style.transform = 'translateY(' + d + 'vh)';
    });
    var q = prog(band), s2 = cl(q, .28, .5);
    b2.style.opacity = .12 + .88 * s2; b2.style.transform = 'translateY(' + ((1 - s2) * 16) + 'px)';
    f.forEach(function (el, i) {
      var w = el.offsetWidth, start = vw * 1.05, end = -w - vw * .05;
      var u = cl(q, [.04, .16, .30, .42][i], [.62, .74, .84, .92][i]);
      el.style.transform = 'translate(' + (start + (end - start) * u) + 'px,0)';
      el.style.opacity = (u > 0 && u < 1) ? 1 : 0;
    });
    var t2 = cl(q, .82, .96); bt.style.opacity = t2; bt.style.transform = 'translateY(' + ((1 - t2) * 24) + 'px)';
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); frame();
})();

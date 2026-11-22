(function () {
  'use strict';

  var SITE = window.SITE;
  var root = document.documentElement;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = { lang: 'en', opened: false };

  /* ---------------- helpers ---------------- */
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var BN_DIGITS = '০১২৩৪৫৬৭৮৯';
  function digits(str) {
    str = String(str);
    return state.lang === 'bn' ? str.replace(/[0-9]/g, function (d) { return BN_DIGITS[d]; }) : str;
  }
  function storage(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ---------------- wax seal art ---------------- */
  var sealCount = 0;
  function waxPath(cx, cy, r) {
    var d = '';
    var n = 160;
    for (var i = 0; i <= n; i++) {
      var a = (i / n) * Math.PI * 2;
      var rr = r + 3.2 * Math.sin(a * 11) + 1.4 * Math.sin(a * 5 + 1.3) + 0.9 * Math.sin(a * 17 + 0.4);
      d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(2) + ' ' + (cy + rr * Math.sin(a)).toFixed(2);
    }
    return d + 'Z';
  }
  function sealSVG() {
    var id = 'wax' + (++sealCount);
    var mono = esc(SITE.monogram);
    if (mono.indexOf('&amp;') > -1) {
      mono = mono.replace('&amp;', '<tspan font-family="Cormorant Garamond, serif" font-style="italic" font-size="15" dx="1" dy="-3">&amp;</tspan><tspan dx="1" dy="3">') + '</tspan>';
    }
    return '' +
      '<svg viewBox="0 0 120 120" aria-hidden="true">' +
        '<defs>' +
          '<radialGradient id="' + id + 'a" cx="36%" cy="30%" r="78%">' +
            '<stop offset="0" stop-color="#cfa676"/><stop offset=".45" stop-color="#946545"/><stop offset="1" stop-color="#4f2f1c"/>' +
          '</radialGradient>' +
          '<radialGradient id="' + id + 'b" cx="50%" cy="45%" r="55%">' +
            '<stop offset="0" stop-color="#9b6d4b"/><stop offset=".75" stop-color="#7a5236"/><stop offset="1" stop-color="#5a3a25"/>' +
          '</radialGradient>' +
        '</defs>' +
        '<path d="' + waxPath(60, 60, 52) + '" fill="url(#' + id + 'a)"/>' +
        '<circle cx="60" cy="60" r="38" fill="url(#' + id + 'b)" stroke="#3d2415" stroke-opacity=".55" stroke-width="1.6"/>' +
        '<circle cx="60" cy="60" r="33" fill="none" stroke="#e0bf91" stroke-opacity=".35" stroke-width=".8"/>' +
        '<ellipse cx="44" cy="38" rx="14" ry="6" fill="#fff" opacity=".12" transform="rotate(-30 44 38)"/>' +
        '<text x="60" y="69" text-anchor="middle" font-family="Pinyon Script, cursive" font-size="25" fill="#f1dcae" fill-opacity=".92" stroke="#3a2214" stroke-opacity=".55" stroke-width=".7" style="paint-order:stroke">' + mono + '</text>' +
      '</svg>';
  }
  $$('.seal-art').forEach(function (el) { el.innerHTML = sealSVG(); });

  /* ---------------- icons ---------------- */
  var ICONS = {
    flower: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2"><g transform="translate(24 24)">' +
      [0, 45, 90, 135, 180, 225, 270, 315].map(function (r) { return '<ellipse cx="0" cy="-11" rx="4.5" ry="9" transform="rotate(' + r + ')"/>'; }).join('') +
      '<circle r="4.5"/></g></svg>',
    rings: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="18" cy="28" r="11"/><circle cx="30" cy="28" r="11"/><path d="M27 13l3-5 3 5-3 3z"/></svg>',
    sparkle: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M24 4c1.5 10 5 13.5 15 15-10 1.5-13.5 5-15 15-1.5-10-5-13.5-15-15 10-1.5 13.5-5 15-15z"/><path d="M38 32c.6 3.5 1.8 4.7 5 5.3-3.2.6-4.4 1.8-5 5.3-.6-3.5-1.8-4.7-5-5.3 3.2-.6 4.4-1.8 5-5.3z"/></svg>'
  };
  var PH_FLOWER = '<svg viewBox="0 0 48 48" fill="currentColor"><g transform="translate(24 24)">' +
    [0, 72, 144, 216, 288].map(function (r) { return '<ellipse cx="0" cy="-10" rx="5.5" ry="10" transform="rotate(' + r + ')"/>'; }).join('') +
    '<circle r="4" fill="#f6ebe1"/></g></svg>';

  /* ---------------- rendering ---------------- */
  function renderLists(t) {
    $('#menuList').innerHTML = t.nav.map(function (n, i) {
      return '<li style="--i:' + i + '"><a class="menu__link" href="#' + n.id + '">' + esc(n.label) + '</a></li>';
    }).join('');

    $('#storyBody').innerHTML = t.story.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');

    $('#storyTimeline').innerHTML = t.story.milestones.map(function (m, i) {
      return '<li class="reveal" style="--i:' + i + '">' +
        '<span class="timeline__label">' + esc(m.label) + '</span>' +
        '<h3 class="timeline__title">' + esc(m.title) + '</h3>' +
        '<p class="timeline__text">' + esc(m.text) + '</p></li>';
    }).join('');

    var L = t.events.labels;
    $('#eventsList').innerHTML = t.events.items.map(function (e, i) {
      return '<article class="event event--featured reveal" style="--i:' + i + '">' +
        '<div class="event__icon">' + (ICONS[e.icon] || ICONS.sparkle) + '</div>' +
        '<h3 class="event__name">' + esc(e.name) + '</h3>' +
        '<p class="event__date">' + esc(e.date) + '</p>' +
        '<dl class="event__rows">' +
          '<div><dt>' + esc(L.time) + '</dt><dd>' + esc(e.time) + '</dd></div>' +
          '<div><dt>' + esc(L.venue) + '</dt><dd>' + esc(e.venue) +
            (e.address ? '<span class="event__addr">' + esc(e.address) + '</span>' : '') + '</dd></div>' +
          '<div><dt>' + esc(L.dress) + '</dt><dd>' + esc(e.dress) + '</dd></div>' +
        '</dl></article>';
    }).join('');

    $('#scheduleList').innerHTML = t.schedule.items.map(function (s, i) {
      return '<li class="reveal" style="--i:' + i + '">' +
        '<span class="schedule__time">' + esc(s.time) + '</span>' +
        '<span class="schedule__dot" aria-hidden="true"></span>' +
        '<span class="schedule__title">' + esc(s.title) + '</span></li>';
    }).join('');

    $('#galleryGrid').innerHTML = SITE.gallery.map(function (g, i) {
      var cap = g[state.lang] || g.en || '';
      if (g.src) {
        return '<figure class="gallery__item reveal" style="--i:' + (i % 3) + '">' +
          '<img src="' + esc(g.src) + '" alt="' + esc(cap) + '" loading="lazy">' +
          '<button type="button" data-full="' + esc(g.src) + '" aria-label="' + esc(cap) + '"></button>' +
          (cap ? '<figcaption class="gallery__caption">' + esc(cap) + '</figcaption>' : '') +
          '</figure>';
      }
      return '<figure class="gallery__item gallery__item--ph reveal" style="--i:' + (i % 3) + '">' +
        '<div class="gallery__ph">' + PH_FLOWER + '</div>' +
        '<figcaption class="gallery__caption">' + esc(cap) +
        '<span class="gallery__soon">' + esc(t.gallery.soon) + '</span></figcaption></figure>';
    }).join('');

    $('#faqList').innerHTML = t.faq.items.map(function (f, i) {
      return '<details class="reveal" style="--i:' + i + '"><summary>' + esc(f.q) + '</summary>' +
        '<p class="faq__a">' + esc(f.a) + '</p></details>';
    }).join('');
  }

  function applyLang(lang) {
    if (!SITE[lang]) lang = 'en';
    state.lang = lang;
    var t = SITE[lang];
    root.lang = lang;
    document.title = t.meta.title;

    $$('[data-i18n]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n'));
      if (v == null) return;
      if (el.hasAttribute('data-amp') && v.indexOf('&') > -1) {
        el.innerHTML = esc(v).replace(/&amp;/g, '<span class="amp">&amp;</span>');
      } else {
        el.textContent = v;
      }
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n-aria'));
      if (v != null) el.setAttribute('aria-label', v);
    });

    renderLists(t);

    var langBtn = $('#langBtn');
    langBtn.textContent = t.ui.langSwitch;
    langBtn.setAttribute('lang', lang === 'en' ? 'bn' : 'en');
    langBtn.setAttribute('aria-label', t.ui.langSwitchLabel);

    storage('lang', lang);
    equalizeCard();
    updateSoundBtn();
    tickCountdown();
    observeReveals();
  }

  /* ---------------- equal card size in both languages ---------------- */
  var fontsReady = false;
  function fillCard(t) {
    $$('.card [data-i18n]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n'));
      if (v != null) el.textContent = v;
    });
  }
  function equalizeCard() {
    if (!fontsReady) return;
    var panel = $('.card__panel');
    var cur = state.lang, other = cur === 'en' ? 'bn' : 'en';
    panel.style.minHeight = '';
    var h1 = panel.offsetHeight;
    root.lang = other; fillCard(SITE[other]);
    var h2 = panel.offsetHeight;
    root.lang = cur; fillCard(SITE[cur]);
    panel.style.minHeight = Math.ceil(Math.max(h1, h2)) + 'px';
  }
  if (document.fonts && document.fonts.load) {
    Promise.all([
      document.fonts.load('600 40px Atma', '\u09AE'),
      document.fonts.load('400 18px "Anek Bangla"', '\u09AE'),
      document.fonts.load('500 18px "Anek Bangla"', '\u09AE'),
      document.fonts.load('600 40px Atma', '\u09E7'),
      document.fonts.load('40px "Pinyon Script"', 'M'),
      document.fonts.load('italic 20px "Cormorant Garamond"', 'a'),
      document.fonts.load('400 40px "Cormorant Garamond"', '1'),
      document.fonts.load('400 12px Jost', 'A'),
      document.fonts.load('500 12px Jost', 'A')
    ]).catch(function () {}).then(function () { fontsReady = true; equalizeCard(); });
  } else {
    fontsReady = true;
  }
  // Resolves when fonts are in (or after 1.5s at most), so the card's final
  // size is known before it animates.
  function whenCardReady() {
    if (fontsReady) return Promise.resolve();
    return new Promise(function (res) {
      var iv = setInterval(function () { if (fontsReady) { clearInterval(iv); res(); } }, 50);
      setTimeout(function () { clearInterval(iv); fontsReady = true; equalizeCard(); res(); }, 1500);
    });
  }
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeCard, 150);
  });

  /* ---------------- links ---------------- */
  $('#directionsLink').href = SITE.mapsUrl;
  $('#facebookLink').href = SITE.facebookUrl;
  $('#mapFrame').src = SITE.mapsEmbed;

  /* ---------------- music ---------------- */
  // If SITE.music points to an MP3 it is played; otherwise a soft, romantic
  // music-box piece is generated in the browser. Either way it starts
  // on the tap that opens the envelope (browsers block sound before a tap).
  var Music = {
    started: false,
    muted: false,
    el: null,
    ctx: null,
    synth: null,
    start: function () {
      if (this.started) return;
      this.started = true;
      var self = this;
      if (SITE.music) {
        var a = new Audio(SITE.music);
        a.loop = true;
        a.volume = 0;
        a.muted = this.muted;
        a.addEventListener('playing', function () { fadeEl(a, 0.35, 1800); }, { once: true });
        a.addEventListener('error', function () { self.el = null; self.startSynth(); });
        this.el = a;
        var p = a.play();
        if (p && p.catch) p.catch(function () { self.startSynth(); });
      } else {
        this.startSynth();
      }
      updateSoundBtn();
    },
    startSynth: function () {
      if (this.synth) return;
      try { this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      this.synth = romanticPiece(this.ctx);
      this.synth.level(this.muted ? 0 : 1);
    },
    setMuted: function (m) {
      this.muted = m;
      if (this.el) this.el.muted = m;
      if (this.synth) this.synth.level(m ? 0 : 1);
      updateSoundBtn();
    },
    pauseForHidden: function (hidden) {
      if (this.el) { if (hidden) this.el.pause(); else if (!this.muted) this.el.play().catch(function () {}); }
      if (this.ctx) { if (hidden) this.ctx.suspend(); else this.ctx.resume(); }
    }
  };

  function fadeEl(a, target, ms) {
    var from = a.volume, t0 = performance.now();
    (function step(now) {
      var k = Math.min(1, (now - t0) / ms);
      a.volume = from + (target - from) * k;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }

  // Soft music-box piece with a faint string pad, through a generated hall reverb.
  function romanticPiece(ctx) {
    var sr = ctx.sampleRate;
    var master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    var warm = ctx.createBiquadFilter();
    warm.type = 'lowpass';
    warm.frequency.value = 2600;
    warm.connect(master);

    // Hall reverb from a decaying noise impulse
    var irLen = Math.floor(sr * 3.2), ir = ctx.createBuffer(2, irLen, sr);
    for (var ch = 0; ch < 2; ch++) {
      var d = ir.getChannelData(ch);
      for (var i = 0; i < irLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 3.2);
    }
    var hall = ctx.createConvolver();
    hall.buffer = ir;
    var wet = ctx.createGain();
    wet.gain.value = 0.42;
    hall.connect(wet); wet.connect(warm);

    var bus = ctx.createGain();
    bus.gain.value = 0.8;
    bus.connect(warm); bus.connect(hall);

    function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

    function voice(type, freq, detune, pan) {
      var o = ctx.createOscillator();
      o.type = type; o.frequency.value = freq; o.detune.value = detune || 0;
      if (ctx.createStereoPanner) {
        var pn = ctx.createStereoPanner(); pn.pan.value = pan || 0;
        o.connect(pn);
        return { osc: o, out: pn };
      }
      return { osc: o, out: o };
    }

    // Warm string pad
    function pad(notes, t, len) {
      notes.forEach(function (m, idx) {
        [-6, 6].forEach(function (det, k) {
          var v = voice('triangle', hz(m), det, (k ? 0.35 : -0.35) * (idx % 2 ? 1 : -1));
          var g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, t);
          g.gain.linearRampToValueAtTime(0.009, t + 2.2);
          g.gain.setValueAtTime(0.009, t + len - 0.6);
          g.gain.linearRampToValueAtTime(0.0001, t + len + 2.2);
          v.out.connect(g); g.connect(bus);
          v.osc.start(t); v.osc.stop(t + len + 2.4);
        });
      });
    }

    // Music-box note: sine with a soft bell partial, gentle decay
    function bell(m, t, vel, pan) {
      var f = hz(m), g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vel, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
      [[1, 1], [3.01, 0.1], [2, 0.08]].forEach(function (h) {
        var v = voice('sine', f * h[0], 0, pan || 0), hg = ctx.createGain();
        hg.gain.value = h[1];
        v.out.connect(hg); hg.connect(g);
        v.osc.start(t); v.osc.stop(t + 2.9);
      });
      g.connect(bus);
    }

    // Like the first version: music-box broken chords, C – Am – F – G,
    // with the same melody, but slower and softer.
    var chords = [[60, 64, 67, 72], [57, 60, 64, 69], [53, 57, 60, 65], [55, 59, 62, 67]];
    var pattern = [0, 2, 1, 3, 2, 1, 3, 2];
    var melody = [76, null, 74, null, 72, null, 74, 76, 72, null, 71, null, 69, null, 71, 72,
                  69, null, 67, null, 65, null, 67, 69, 71, null, 74, null, 72, null, null, null];
    var beat = 0.5, next = ctx.currentTime + 0.3, step = 0;

    function schedule() {
      while (next < ctx.currentTime + 2.5) {
        var bar = Math.floor(step / 8) % 4;
        var chord = chords[bar];
        if (step % 8 === 0) {
          pad(chord, next, beat * 8);
          bell(chord[0] - 12, next, 0.05, -0.2);
        }
        bell(chord[pattern[step % 8]] + 12, next, 0.04, -0.15);
        var n = melody[step % 32];
        if (n) bell(n, next, 0.065, 0.2);
        next += beat;
        step++;
      }
    }
    schedule();
    setInterval(schedule, 500);

    return {
      level: function (v) {
        var now = ctx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setTargetAtTime(v * 0.5, now, v ? 1.2 : 0.25);
      }
    };
  }

  function updateSoundBtn() {
    var btn = $('#soundBtn');
    var t = SITE[state.lang].ui;
    var on = state.opened ? (Music.started && !Music.muted) : !Music.muted;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? t.soundOff : t.soundOn);
  }

  $('#soundBtn').addEventListener('click', function () {
    if (!state.opened) { Music.muted = !Music.muted; updateSoundBtn(); return; }
    if (!Music.started) { Music.muted = false; Music.start(); return; }
    Music.setMuted(!Music.muted);
  });

  document.addEventListener('visibilitychange', function () {
    if (Music.started) Music.pauseForHidden(document.hidden);
  });

  /* ---------------- envelope ---------------- */
  function openEnvelope(instant) {
    if (state.opened) return;
    state.opened = true;

    if (instant) {
      root.classList.add('is-opening', 'is-revealed', 'is-opened');
      root.classList.remove('is-locked');
      updateSoundBtn();
      return;
    }

    if (!Music.muted) Music.start();
    updateSoundBtn();

    var fast = reduceMotion ? 0.05 : 1;
    root.classList.add('is-opening');
    setTimeout(function () {
      whenCardReady().then(function () {
        requestAnimationFrame(function () { root.classList.add('is-revealed'); });
      });
    }, 1450 * fast);
    setTimeout(function () {
      root.classList.add('is-opened');
      root.classList.remove('is-locked');
    }, 2300 * fast);
  }

  $('#seal').addEventListener('click', function () { openEnvelope(false); });
  // Tapping anywhere on the envelope also opens it
  $('#envelope').addEventListener('click', function (e) {
    if (e.target.closest('.seal')) return;
    openEnvelope(false);
  });

  /* ---------------- menu ---------------- */
  var menu = $('#menu'), menuBtn = $('#menuBtn');
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) menuBtn.focus({ preventScroll: true });
  }
  menuBtn.addEventListener('click', function () {
    if (!state.opened) return; // menu is disabled on the envelope
    setMenu(!menu.classList.contains('is-open'));
  });
  $('#menuClose').addEventListener('click', function () { setMenu(false); });
  menu.addEventListener('click', function (e) {
    var link = e.target.closest('.menu__link');
    if (!link) return;
    e.preventDefault();
    var target = document.getElementById(link.getAttribute('href').slice(1));
    setMenu(false);
    openEnvelope(true);
    if (target) setTimeout(function () { target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); }, 80);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('is-open')) setMenu(false);
    closeLightbox();
  });

  /* ---------------- language ---------------- */
  $('#langBtn').addEventListener('click', function () { applyLang(state.lang === 'en' ? 'bn' : 'en'); });

  /* ---------------- countdown ---------------- */
  var target = new Date(SITE.weddingDate).getTime();
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function tickCountdown() {
    var diff = target - Date.now();
    var grid = $('#countdownGrid'), done = $('#countdownDone');
    if (diff <= 0) {
      grid.hidden = true;
      done.hidden = false;
      return;
    }
    var s = Math.floor(diff / 1000);
    var vals = {
      days: String(Math.floor(s / 86400)),
      hours: pad(Math.floor(s / 3600) % 24),
      minutes: pad(Math.floor(s / 60) % 60),
      seconds: pad(s % 60)
    };
    $$('.countdown__num').forEach(function (el) { el.textContent = digits(vals[el.getAttribute('data-unit')]); });
  }
  setInterval(tickCountdown, 1000);

  /* ---------------- reveal on scroll ---------------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }) : null;

  function observeReveals() {
    $$('.reveal:not(.is-in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('is-in');
    });
  }

  /* ---------------- controls contrast ---------------- */
  var darkSections = $$('[data-dark]');
  function updateChrome() {
    var probe = 90;
    var dark = darkSections.some(function (s) {
      var r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    root.classList.toggle('on-light', !dark);
    root.classList.toggle('scrolled', state.opened && window.scrollY > 60);
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateChrome(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', updateChrome);

  /* ---------------- petals ---------------- */
  if (!reduceMotion) {
    var wrap = $('.petals');
    var count = window.innerWidth < 640 ? 7 : 13;
    for (var p = 0; p < count; p++) {
      var el = document.createElement('span');
      el.className = 'petal';
      var size = 9 + Math.random() * 10;
      var dur = 13 + Math.random() * 12;
      el.style.cssText =
        'left:' + (Math.random() * 100).toFixed(1) + '%;' +
        '--s:' + size.toFixed(1) + 'px;' +
        '--d:' + dur.toFixed(1) + 's;' +
        '--delay:' + (-Math.random() * dur).toFixed(1) + 's;' +
        '--drift:' + ((Math.random() - 0.5) * 30).toFixed(1) + 'vw;' +
        '--rot:' + Math.round(180 + Math.random() * 540) + 'deg;';
      el.innerHTML = '<i></i>';
      wrap.appendChild(el);
    }
  }

  /* ---------------- lightbox ---------------- */
  var lightbox = $('#lightbox');
  function closeLightbox() { lightbox.hidden = true; }
  $('#galleryGrid').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-full]');
    if (!b) return;
    $('img', lightbox).src = b.getAttribute('data-full');
    lightbox.hidden = false;
  });
  lightbox.addEventListener('click', closeLightbox);

  /* ---------------- init ---------------- */
  var params = new URLSearchParams(location.search);
  var initialLang = params.get('lang') || storage('lang') || 'en';
  applyLang(initialLang);

  // Every visit starts at the sealed envelope, at the top of the page
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);

  // In-page links scroll smoothly without adding #section to the address bar
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains('menu__link')) return;
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  updateChrome();
})();

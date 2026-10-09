(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = {
    lang: localStorage.getItem("lang") || "id",
    factCat: "all",
    charPart: "all",
    showSpoilers: false,
    revealed: new Set(),
  };

  const t = (key) => STR[state.lang][key] ?? STR.id[key] ?? key;
  const L = (obj) => obj[state.lang] ?? obj.id;
  const locale = () => (state.lang === "id" ? "id-ID" : "en-US");
  const fmtDate = (d) => new Date(d).toLocaleDateString(locale(), { day: "numeric", month: "short", year: "numeric" });
  const fmtMonth = (ym) => new Date(`${ym}-01`).toLocaleDateString(locale(), { month: "long", year: "numeric" });
  const isHidden = (item) => item.spoiler && !state.showSpoilers && !state.revealed.has(item.id);

  /* ── Images ───────────────────────────────────
     media() membuat slot gambar. Kalau file tidak ada:
     - ph=true  → tampil placeholder halftone berisi label
     - ph=false → seluruh slot dihapus */
  const media = (src, alt, { ph = true, label = "", cls = "", pos = "" } = {}) => `
    <div class="media ${cls}" data-ph="${ph ? 1 : 0}">
      ${ph ? `<span class="media__ph"><b>${esc(label || alt)}</b><small>${esc(t("media.missing"))}</small></span>` : ""}
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"${pos ? ` style="object-position:${esc(pos)}"` : ""}>
    </div>`;

  const onImgError = (img) => {
    const box = img.closest(".media");
    if (box?.dataset.ph === "0") box.remove();
    else { box?.classList.add("is-missing"); img.remove(); }
  };
  document.addEventListener("error", (e) => { if (e.target.tagName === "IMG") onImgError(e.target); }, true);
  // Gambar statis di HTML bisa gagal sebelum script ini jalan
  $$(".media img").forEach((img) => { if (img.complete && !img.naturalWidth) onImgError(img); });

  const factImg = (p) => p.img ?? `assets/img/facts/${p.id}.webp`;

  /* ── Language ─────────────────────────────── */
  function applyLang() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));

    const items = t("ticker");
    $("#ticker").innerHTML = [...items, ...items, ...items, ...items].map((s) => `<span>${esc(s)}</span>`).join("");

    renderAll();
    if ($("#article").open) openArticle($("#article").dataset.id);
  }

  function renderAll() {
    renderIntro();
    renderStart();
    renderFactFilters();
    renderFacts();
    renderCharFilters();
    renderChars();
    renderTimeline();
    renderGallery();
  }

  $$(".lang__btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("lang", state.lang);
      applyLang();
    })
  );

  // Kedua toggle spoiler (fun fact & karakter) saling sinkron
  $$(".spoiler-toggle").forEach((el) =>
    el.addEventListener("change", () => {
      state.showSpoilers = el.checked;
      $$(".spoiler-toggle").forEach((o) => (o.checked = el.checked));
      renderFacts();
      renderChars();
    })
  );

  /* ── Intro & panduan mulai ─────────────────── */
  function renderIntro() {
    $("#intro-specs").innerHTML = t("intro.specs").map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("#intro-reasons").innerHTML = t("intro.reasons")
      .map(([title, text], i) => `<li class="reason"><span class="reason__n">0${i + 1}</span><h4>${esc(title)}</h4><p>${esc(text)}</p></li>`)
      .join("");
  }

  function renderStart() {
    $("#start-steps").innerHTML = t("start.steps")
      .map((st, i) => `
        <li class="step">
          <span class="step__n">${i + 1}</span>
          <p class="step__meta">${esc(st.meta)}</p>
          <h3 class="step__title">${esc(st.title)}</h3>
          <p class="step__text">${esc(st.text)}</p>
          <a class="btn btn--light" href="${esc(st.url)}" target="_blank" rel="noopener">${esc(st.cta)} ↗</a>
        </li>`)
      .join("");
  }

  /* ── Fun facts ────────────────────────────── */
  const sortedPosts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const readMins = (p) => Math.max(1, Math.round(L(p.body).join(" ").split(/\s+/).length / 200));

  function renderFactFilters() {
    const counts = POSTS.reduce((m, p) => ((m[p.cat] = (m[p.cat] || 0) + 1), m), {});
    const cats = [["all", t("facts.all"), POSTS.length], ...Object.keys(CATEGORIES).map((k) => [k, L(CATEGORIES[k]), counts[k] || 0])];
    $("#fact-filters").innerHTML = cats
      .map(([k, label, n]) => `<button class="chip" role="tab" data-cat="${k}" aria-selected="${state.factCat === k}">${esc(label)}<span class="chip__n">${n}</span></button>`)
      .join("");
  }

  $("#fact-filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.factCat = chip.dataset.cat;
    renderFactFilters();
    renderFacts();
  });

  function renderFacts() {
    const list = sortedPosts.filter((p) => state.factCat === "all" || p.cat === state.factCat);
    if (!list.length) {
      $("#facts-grid").innerHTML = `<p class="section__sub">${esc(t("facts.empty"))}</p>`;
      return;
    }
    $("#facts-grid").innerHTML = list
      .map((p, i) => {
        const num = String(POSTS.length - POSTS.indexOf(p)).padStart(2, "0");
        const hidden = isHidden(p);
        // Kartu terakhir melebar agar baris terakhir grid 3 kolom tidak bolong
        const rest = (list.length - 3) % 3;
        const fill = i === list.length - 1 && i > 2 && rest ? (rest === 1 ? "fact--full" : "fact--wide") : "";
        const cls = ["fact", fill, i === 0 ? "fact--lead" : "", p.spoiler ? "is-spoiler" : "", p.spoiler && !hidden ? "is-revealed" : ""].join(" ");
        return `
          <button class="${cls}" data-id="${p.id}" style="animation-delay:${i * 40}ms">
            ${i === 0 && !hidden ? media(factImg(p), L(p.title), { ph: false, cls: "media--wide", pos: p.imgPos }) : ""}
            <span class="fact__no">Nº ${num} · <span class="fact__cat">${esc(L(CATEGORIES[p.cat]))}</span></span>
            ${p.spoiler ? `<span class="spoiler-tag">${esc(hidden ? t("facts.spoilerHidden") : t("facts.spoiler"))}</span>` : ""}
            <h3 class="fact__title">${esc(L(p.title))}</h3>
            <p class="fact__excerpt">${esc(L(p.excerpt))}</p>
            <span class="fact__more">${esc(t("facts.read"))} · ${readMins(p)} ${esc(t("facts.minRead"))}</span>
          </button>`;
      })
      .join("");
  }

  $("#facts-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".fact");
    if (!card) return;
    const post = POSTS.find((p) => p.id === card.dataset.id);
    if (isHidden(post)) {
      state.revealed.add(post.id);
      renderFacts();
      $(`.fact[data-id="${post.id}"]`)?.focus();
      return;
    }
    openArticle(post.id);
  });

  /* ── Article dialog ───────────────────────── */
  const dialog = $("#article");

  function openArticle(id) {
    const p = POSTS.find((x) => x.id === id);
    if (!p) return;
    dialog.dataset.id = id;
    $("#article-cover").innerHTML = media(factImg(p), L(p.title), { ph: false, cls: "media--wide", pos: p.imgPos });
    $("#share-toast").textContent = "";
    $("#article-cat").textContent = L(CATEGORIES[p.cat]) + (p.spoiler ? ` · ${t("facts.spoiler")}` : "");
    $("#article-title").textContent = L(p.title);
    $("#article-meta").textContent = `${fmtDate(p.date)} · ${readMins(p)} ${t("facts.minRead")}`;
    $("#article-body").innerHTML = L(p.body).map((para) => `<p>${esc(para)}</p>`).join("");
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  }

  // Bagikan: Web Share API di HP, salin link di desktop. Link #fact-<id> langsung membuka artikelnya.
  $("#share-btn").addEventListener("click", async () => {
    const p = POSTS.find((x) => x.id === dialog.dataset.id);
    const url = `${location.origin}${location.pathname}#fact-${p.id}`;
    const data = { title: L(p.title), text: `${t("share.text")} ${L(p.title)}`, url };
    if (navigator.share && matchMedia("(pointer: coarse)").matches) {
      try { return await navigator.share(data); } catch { return; /* dibatalkan pengguna */ }
    }
    $("#share-toast").textContent = (await copyText(url)) ? t("share.copied") : url;
  });

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch { /* coba cara lama */ }
    const ta = Object.assign(document.createElement("textarea"), { value: text, readOnly: true });
    ta.style.cssText = "position:fixed;opacity:0";
    dialog.append(ta); ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }

  function openFromHash() {
    const m = location.hash.match(/^#fact-([\w-]+)$/);
    if (!m) return;
    const p = POSTS.find((x) => x.id === m[1]);
    if (p) { state.revealed.add(p.id); renderFacts(); openArticle(p.id); }
  }
  window.addEventListener("hashchange", openFromHash);

  /* ── Characters ───────────────────────────── */
  function renderCharFilters() {
    const parts = [["all", t("chars.all")], ["1", "Part 1"], ["2", "Part 2"]];
    $("#char-filters").innerHTML = parts
      .map(([k, label]) => {
        const n = k === "all" ? CHARACTERS.length : CHARACTERS.filter((c) => String(c.part) === k).length;
        return `<button class="chip" data-part="${k}" aria-selected="${state.charPart === k}">${esc(label)}<span class="chip__n">${n}</span></button>`;
      })
      .join("");
  }

  $("#char-filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.charPart = chip.dataset.part;
    renderCharFilters();
    renderChars();
  });

  function renderChars() {
    $("#chars-grid").innerHTML = CHARACTERS
      .filter((c) => state.charPart === "all" || String(c.part) === state.charPart)
      .map((c, i) => {
        const hidden = isHidden(c);
        return `
          <article class="char ${hidden ? "is-hidden" : ""}" data-id="${c.id}" style="animation-delay:${i * 35}ms">
            ${media(c.img, c.name, { label: c.name, cls: "media--portrait" })}
            <div class="char__body">
              <p class="char__role">Part ${c.part} · ${esc(L(c.role))}</p>
              <h3 class="char__name">${esc(c.name)}</h3>
              ${hidden
                ? `<button class="spoiler-tag spoiler-tag--btn" data-reveal="${c.id}">${esc(t("facts.spoilerHidden"))}</button>`
                : `<p class="char__bio">${esc(L(c.bio))}</p>
                   <p class="char__ability"><b>${esc(t("chars.ability"))}</b> ${esc(L(c.ability))}</p>`}
            </div>
          </article>`;
      })
      .join("");
  }

  $("#chars-grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-reveal]");
    if (!btn) return;
    state.revealed.add(btn.dataset.reveal);
    renderChars();
  });

  /* ── Timeline ─────────────────────────────── */
  function renderTimeline() {
    $("#timeline-list").innerHTML = TIMELINE
      .map((ev) => `
        <li class="tl">
          <time class="tl__date" datetime="${ev.date}">${esc(fmtMonth(ev.date))}</time>
          <h3 class="tl__title">${esc(L(ev.title))}</h3>
          <p class="tl__text">${esc(L(ev.text))}</p>
        </li>`)
      .join("");
  }

  /* ── Gallery + lightbox ───────────────────── */
  function renderGallery() {
    // Grid 4 kolom: item pertama 2×2 + 4 item kecil, sisanya baris 4 item.
    // Item terakhir melebar menutup sisa kolom di baris terakhir.
    const rest = (GALLERY.length - 5) % 4;
    $("#gallery-grid").innerHTML = GALLERY
      .map((g, i) => {
        const fill = i === GALLERY.length - 1 && i > 4 && rest ? `shot--fill${rest}` : "";
        return `
        <figure class="shot ${i === 0 ? "shot--big" : ""} ${fill}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(L(g.caption))}">
          ${media(g.img, L(g.caption), { label: L(g.caption) })}
          <figcaption>${esc(L(g.caption))}</figcaption>
        </figure>`;
      })
      .join("");
  }

  const lightbox = $("#lightbox");
  function openShot(fig) {
    if (!fig || fig.querySelector(".is-missing")) return;
    const g = GALLERY[fig.dataset.i];
    $("#lightbox-img").src = g.img;
    $("#lightbox-img").alt = L(g.caption);
    $("#lightbox-cap").textContent = L(g.caption);
    lightbox.showModal();
  }
  $("#gallery-grid").addEventListener("click", (e) => openShot(e.target.closest(".shot")));
  $("#gallery-grid").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openShot(e.target.closest(".shot")); }
  });

  // Tutup dialog lewat tombol × atau klik backdrop
  $$("dialog").forEach((d) => {
    d.addEventListener("click", (e) => { if (e.target === d || e.target.closest("[data-close]")) d.close(); });
  });

  /* ── Nav ──────────────────────────────────── */
  const toggle = $(".nav__toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); }
  });

  const navLinks = $$("a", links);
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.setAttribute("aria-current", String(a.hash === `#${en.target.id}`)));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  ["top", "intro", "start", "facts", "characters", "timeline", "gallery"].forEach((id) => spy.observe(document.getElementById(id)));

  /* ── Init ─────────────────────────────────── */
  $("#stat-facts").textContent = POSTS.length;
  $("#stat-chars").textContent = CHARACTERS.length;
  applyLang();
  openFromHash();
})();

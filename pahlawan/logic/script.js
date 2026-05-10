
// ══════════════════════════════════════════
// NARRATIVE DATA
// ══════════════════════════════════════════
const narratives = {
  tanMalaka: [
    {
      year: '1927',
      place: 'Konferensi Komintern — Moskow',
      situation: 'Komintern telah memutuskan: PKI harus melancarkan pemberontakan bersenjata melawan Belanda sekarang juga. Sebagai agen Komintern di Asia Tenggara, kamu sudah bertemu para pemimpin PKI. Kamu tahu — mereka tidak siap. Militan baru sedikit, senjata hampir tidak ada, dan rakyat belum terorganisir. Ini akan menjadi pembantaian, bukan revolusi. Tapi Moskow tidak mau mendengar analisismu.',
      question: 'Kamu punya 24 jam sebelum keputusan itu berlaku. Apa yang kamu lakukan?',
      choices: [
        { text: 'Patuhi perintah Komintern demi solidaritas gerakan internasional. Disiplin organisasi lebih penting dari analisis individu.', scores: {pragmatis:2} },
        { text: 'Tolak secara terbuka dan keluar dari Komintern. Pemberontakan yang salah timing akan menghancurkan gerakan selama puluhan tahun.', scores: {berani:3, idealis:1} },
        { text: 'Pura-pura setuju, lalu secara diam-diam sabotase implementasinya dari dalam dan arahkan pemimpin lokal untuk tidak bergerak.', scores: {pragmatis:2, berani:1} }
      ],
      truth: {
        title: 'Tan Malaka Memilih Penolakan Terbuka',
        text: 'Tan Malaka menolak keputusan Komintern secara terbuka dan berpisah dari organisasi itu. Ia bahkan mengirim surat peringatan kepada pemimpin PKI, yang kemudian diabaikan. Pemberontakan PKI 1926–1927 terjadi dan gagal total. Belanda menghancurkan PKI, mengeksekusi pemimpin-pemimpinnya, dan mengasingkan ribuan anggotanya ke Boven Digoel. Tan Malaka sendiri masuk dalam pelarian selama dua dekade — berpindah dari satu negara ke negara lain.',
        lesson: 'Keberanian intelektual tidak selalu berarti kemenangan segera. Tan Malaka terbukti benar secara analitis — tapi kebenaran itu datang dengan harga: ia menjadi orang yang dibuang oleh semua pihak, kiri maupun kanan.'
      }
    },
    {
      year: '1943',
      place: 'Manila — Di Bawah Pendudukan Jepang',
      situation: 'Jepang telah menggulingkan kolonialisme Barat dari Asia. Mereka menawarkan kerja sama: kamu diizinkan bergerak bebas di bawah perlindungan mereka, bahkan dibantu secara finansial — asalkan mendukung propaganda "Asia untuk Asia." Bagi banyak orang ini terlihat seperti kesempatan emas untuk mengorganisir gerakan dari dalam. Tapi kamu tahu: Jepang hanyalah imperialisme dengan wajah berbeda.',
      question: 'Jepang menawarkan tangan. Apa sikapmu?',
      choices: [
        { text: 'Ambil tawaran itu — musuh dari musuhku adalah kawanku. Gunakan fasilitas Jepang untuk membangun kekuatan rakyat.', scores: {pragmatis:3} },
        { text: 'Tolak total — imperialisme tetaplah imperialisme, apapun bungkus dan bahasanya. Tidak ada kompromi.', scores: {idealis:3} },
        { text: 'Ambil fasilitas Jepang untuk bertahan, tapi gunakan waktu ini untuk menulis, berpikir, dan menyiapkan gerakan independen secara diam-diam.', scores: {pragmatis:2, idealis:1, berani:1} }
      ],
      truth: {
        title: 'Tan Malaka Memilih Jalan Ketiga yang Kompleks',
        text: 'Tan Malaka memilih sikap yang sulit dikategorikan — ia tidak menjadi alat propaganda Jepang, tapi juga tidak bersembunyi total. Ia memanfaatkan periode ini untuk menulis Madilog (Materialisme, Dialektika, Logika), karya filsafat terbesarnya. Ketika kemerdekaan diproklamasikan Agustus 1945, ia muncul kembali dari persembunyian dengan jaringan pemikiran dan gerakan yang telah matang selama dua dekade pengasingan.',
        lesson: 'Pragmatisme bukan pengkhianatan — kadang bertahan hidup dan terus berpikir adalah bentuk perlawanan yang paling revolusioner.'
      }
    }
  ],
  sjahrir: [
    {
      year: '1946',
      place: 'Jakarta — Meja Perundingan Linggarjati',
      situation: 'Kamu adalah Perdana Menteri pertama Indonesia. Di hadapanmu ada perwakilan Belanda yang bersedia mengakui Republik — tapi dengan syarat: wilayah RI hanya mencakup Jawa, Madura, dan Sumatera. Sisanya tetap di bawah kontrol Belanda dalam "persemakmuran" yang definisinya masih kabur. Di belakangmu, tokoh-tokoh militer dan politisi — termasuk Tan Malaka — berteriak: ini pengkhianatan. Mereka ingin merdeka 100% atau tidak sama sekali.',
      question: 'Penamu sudah di atas kertas. Apakah kamu tanda tangan?',
      choices: [
        { text: 'Tanda tangani. Pengakuan internasional adalah fondasi yang bisa dibangun lebih lanjut. Satu langkah mundur, dua langkah maju.', scores: {pragmatis:3} },
        { text: 'Tolak. Kemerdekaan yang dicukil-cukil bukan kemerdekaan. Mundur dari meja perundingan.', scores: {idealis:3} },
        { text: 'Minta penundaan. Cari dulu dukungan PBB dan Amerika Serikat sebelum menandatangani apapun.', scores: {pragmatis:1, idealis:1, berani:1} }
      ],
      truth: {
        title: 'Sjahrir Menandatangani — dan Dibayar dengan Jabatannya',
        text: 'Sjahrir menandatangani Perjanjian Linggarjati pada November 1946. Reaksi domestik sangat keras — ia akhirnya jatuh dari kursi Perdana Menteri pada Juni 1947. Ironinya, hanya dua bulan kemudian, Belanda sendiri yang melanggar perjanjian itu dengan melancarkan Agresi Militer I. Ini membuktikan argumen Sjahrir: yang dibutuhkan bukan kelegalan perang, melainkan legitimasi internasional yang memaksa dunia berpihak pada Indonesia.',
        lesson: 'Sjahrir terbukti benar secara diplomatik — namun politik domestik tidak pernah menunggu sejarah untuk membuktikan kamu benar. Ia kehilangan kursinya sebelum kebenaran itu terungkap.'
      }
    },
    {
      year: '1962',
      place: 'Jakarta — Era Demokrasi Terpimpin Sukarno',
      situation: 'Sukarno menerapkan "Demokrasi Terpimpin" — memusatkan kekuasaan, membubarkan parlemen terpilih, membungkam oposisi. Kamu, sebagai pendiri PSI dan salah satu intelektual paling dihormati di Indonesia, adalah suara yang paling keras menentang. Beberapa kawan memilih diam demi keselamatan. Sukarno memberi sinyal: diam dan aman, atau bersuara dan tanggung risikonya.',
      question: 'Kamu akan pilih yang mana?',
      choices: [
        { text: 'Diam dan masuk ke dalam sistem — ubah kebijakan dari dalam, bukan dari luar.', scores: {pragmatis:3} },
        { text: 'Tetap bersuara keras. Demokrasi lebih penting dari keselamatanku sendiri.', scores: {berani:3, idealis:1} },
        { text: 'Mundur dari politik aktif tapi terus mendidik generasi berikutnya melalui tulisan dan diskusi privat.', scores: {idealis:2, pragmatis:1} }
      ],
      truth: {
        title: 'Sjahrir Memilih untuk Bersuara — dan Dipenjara',
        text: 'Sjahrir memilih untuk tetap bersuara. Pada 1962, ia ditangkap oleh rezim Sukarno dan dipenjarakan tanpa proses pengadilan. Kesehatannya merosot tajam selama masa tahanan. Ia kemudian diizinkan berobat ke luar negeri dan meninggal di Zurich pada April 1966 — hanya setahun setelah Sukarno kehilangan kekuasaan. Ia tidak pernah sempat menyaksikan kemenangan demokratik yang ia perjuangkan sepanjang hidupnya.',
        lesson: 'Ada bentuk kekalahan yang jauh lebih mulia dari kemenangan yang diraih dengan diam. Sjahrir kalah dalam hidupnya, tapi ia meninggalkan cetak biru tentang apa artinya berpihak pada prinsip ketika itu berbahaya.'
      }
    }
  ]
};

// ══════════════════════════════════════════
// TIMELINE DATA
// ══════════════════════════════════════════
const timelineEvents = [
  { year: 1897, char: 'tm', label: 'Tan Malaka lahir', detail: 'Ibrahim Datuk Tan Malaka lahir di Suliki, Sumatera Barat. Ia berasal dari keluarga bangsawan Minangkabau yang sederhana. Sejak kecil ia dikenal cerdas dan kritis.', title: 'Kelahiran Tan Malaka' },
  { year: 1909, char: 'sj', label: 'Sjahrir lahir', detail: 'Sutan Sjahrir lahir di Padang Panjang, Sumatera Barat. Seperti Tan Malaka, ia berasal dari ranah Minang — dua pemikir besar Indonesia yang tumbuh dari tanah yang sama tapi menempuh jalan yang sangat berbeda.', title: 'Kelahiran Sutan Sjahrir' },
  { year: 1921, char: 'tm', label: 'Bergabung PKI', detail: 'Tan Malaka bergabung dengan Partai Komunis Indonesia dan dengan cepat menjadi salah satu pemimpinnya. Ia juga mendirikan sekolah Sarekat Islam di Semarang untuk mendidik kaum buruh.', title: 'Tan Malaka Bergabung PKI' },
  { year: 1927, char: 'tm', label: 'Berpisah dari Komintern', detail: 'Tan Malaka menentang keputusan Komintern yang memerintahkan pemberontakan PKI. Ia berpisah dari organisasi internasional itu dan memulai perjalanan panjangnya sebagai pemikir independen yang tidak terikat pada satu blok ideologi.', title: 'Persimpangan Pertama dengan Komintern' },
  { year: 1934, char: 'sj', label: 'Pengasingan Boven Digoel', detail: 'Sjahrir diasingkan oleh pemerintah kolonial Belanda ke Boven Digoel, Papua — kamp pengasingan yang ditakuti. Di sana ia menulis surat-surat yang kemudian terkenal sebagai dokumen humanis tentang kehidupan di pengasingan.', title: 'Sjahrir di Boven Digoel' },
  { year: 1945, char: 'tm', label: 'Tan Malaka muncul kembali', detail: 'Setelah dua dekade dalam pelarian melewati 11 negara, Tan Malaka muncul kembali di Indonesia sesaat setelah kemerdekaan diproklamasikan. Ia datang dengan Madilog dan visi Merdeka 100% yang telah ia matangkan selama puluhan tahun.', title: 'Kembali ke Indonesia' },
  { year: 1946, char: 'sj', label: 'PM pertama Indonesia', detail: 'Sjahrir menjadi Perdana Menteri pertama Indonesia. Ia memimpin negosiasi dengan Belanda dan menandatangani Perjanjian Linggarjati yang kontroversial — sebuah keputusan yang membuatnya jatuh dari kursi PM tapi terbukti benar secara diplomatik.', title: 'Sjahrir sebagai PM' },
  { year: 1949, char: 'tm', label: 'Eksekusi Tan Malaka', detail: 'Tan Malaka dieksekusi oleh militer Indonesia pada Februari 1949 di Jawa Timur. Hingga kini detail eksekusinya masih diselimuti misteri. Ia tidak pernah mendapat pengadilan yang adil dari negara yang ia perjuangkan.', title: 'Akhir Tan Malaka' },
  { year: 1966, char: 'sj', label: 'Sjahrir wafat di Zurich', detail: 'Setelah dipenjara selama beberapa tahun tanpa pengadilan oleh rezim Sukarno, Sjahrir diizinkan berobat ke luar negeri. Ia meninggal di Zurich pada April 1966, hanya setahun setelah Sukarno jatuh. Ia tidak sempat menyaksikan demokratisasi yang ia impikan.', title: 'Akhir Sjahrir' }
];

// ══════════════════════════════════════════
// WARISAN DATA (simulated aggregate)
// ══════════════════════════════════════════
const warisanData = [
  {
    question: 'Konferensi Komintern 1927 — Apa yang akan kamu lakukan?',
    choices: [
      { label: 'Patuhi demi solidaritas', pct: 18 },
      { label: 'Tolak terbuka', pct: 61 },
      { label: 'Sabotase dari dalam', pct: 21 }
    ]
  },
  {
    question: 'Negosiasi Linggarjati 1946 — Kamu tanda tangan?',
    choices: [
      { label: 'Ya, tanda tangani', pct: 43 },
      { label: 'Tidak, tolak', pct: 37 },
      { label: 'Tunda, cari dukungan PBB', pct: 20 }
    ]
  },
  {
    question: 'Di bawah Demokrasi Terpimpin — Pilihan Sjahrir?',
    choices: [
      { label: 'Diam, ubah dari dalam', pct: 24 },
      { label: 'Tetap bersuara', pct: 58 },
      { label: 'Mundur, didik generasi baru', pct: 18 }
    ]
  },
  {
    question: 'Perspektif yang dipilih penjelajah',
    choices: [
      { label: 'Tan Malaka', pct: 54 },
      { label: 'Sutan Sjahrir', pct: 46 }
    ]
  }
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentChar = null;
let currentScenarioIndex = 0;
let profile = { pragmatis: 0, idealis: 0, berani: 0 };
let truthVisible = false;

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) setTimeout(() => target.classList.add('active'), 10);
}

function goToModes() { showScreen('s-modes'); }

function showNarrative() {
  showScreen('s-narrative');
  document.getElementById('char-select').style.display = 'flex';
  document.getElementById('scenario-view').classList.remove('active');
  document.getElementById('profile-result').classList.remove('active');
  closeTruth();
}

function showDialogue() { showScreen('s-dialogue'); }

function showTimeline() {
  showScreen('s-timeline');
  renderTimeline();
}

function showWarisan() {
  showScreen('s-warisan');
  renderWarisan();
}

// ══════════════════════════════════════════
// NARRATIVE ENGINE
// ══════════════════════════════════════════
function startNarrative(char) {
  currentChar = char;
  currentScenarioIndex = 0;
  profile = { pragmatis: 0, idealis: 0, berani: 0 };
  document.getElementById('char-select').style.display = 'none';
  document.getElementById('scenario-view').classList.add('active');
  document.getElementById('profile-result').classList.remove('active');
  const label = char === 'tanMalaka' ? 'Perspektif: Tan Malaka' : 'Perspektif: Sutan Sjahrir';
  document.getElementById('narr-char-label').innerHTML = `<span>${label}</span>`;
  renderScenario();
}

function renderScenario() {
  const scenarios = narratives[currentChar];
  const s = scenarios[currentScenarioIndex];
  document.getElementById('s-year').textContent = s.year;
  document.getElementById('s-place').textContent = s.place;
  document.getElementById('s-progress').textContent = `Momen ${currentScenarioIndex + 1} / ${scenarios.length}`;
  document.getElementById('s-situation').textContent = s.situation;
  document.getElementById('s-question').textContent = s.question;

  const choicesEl = document.getElementById('s-choices');
  choicesEl.innerHTML = '';
  const letters = ['A', 'B', 'C'];
  s.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span>${c.text}</span>`;
    btn.onclick = () => makeChoice(i);
    choicesEl.appendChild(btn);
  });
  closeTruth();
}

function makeChoice(idx) {
  const s = narratives[currentChar][currentScenarioIndex];
  const choice = s.choices[idx];

  Object.entries(choice.scores).forEach(([key, val]) => {
    if (profile[key] !== undefined) profile[key] += val;
  });

  document.querySelectorAll('.choice-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === idx) b.style.borderColor = 'var(--gold)';
    else b.style.opacity = '0.4';
  });

  showTruth(s.truth);
}

function showTruth(truth) {
  document.getElementById('truth-title').textContent = truth.title;
  document.getElementById('truth-text').textContent = truth.text;
  document.getElementById('truth-lesson').textContent = truth.lesson;
  const isLast = currentScenarioIndex >= narratives[currentChar].length - 1;
  document.getElementById('btn-truth-next').textContent = isLast ? 'Lihat Profil Intelektualmu →' : 'Lanjut ke Momen Berikutnya →';
  document.getElementById('truth-layer').classList.add('visible');
  truthVisible = true;
}

function closeTruth() {
  document.getElementById('truth-layer').classList.remove('visible');
  truthVisible = false;
}

function nextScenario() {
  closeTruth();
  currentScenarioIndex++;
  const scenarios = narratives[currentChar];
  if (currentScenarioIndex >= scenarios.length) {
    showProfile();
  } else {
    setTimeout(renderScenario, 400);
  }
}

function showProfile() {
  document.getElementById('scenario-view').classList.remove('active');
  const result = document.getElementById('profile-result');
  result.classList.add('active');

  const max = Math.max(profile.pragmatis, profile.idealis, profile.berani);
  const dominant = Object.keys(profile).find(k => profile[k] === max);

  const archetypes = {
    pragmatis: { name: 'Sang Arsitek', desc: 'Kamu adalah pemikir yang percaya bahwa hasil nyata lebih penting dari kemurnian ide. Seperti diplomat yang memahami bahwa dunia bergerak dalam kompromi — kamu tidak meninggalkan prinsip, tapi kamu tahu kapan harus bernegosiasi dengan realitas.' },
    idealis: { name: 'Sang Penjaga Api', desc: 'Kamu memilih prinsip bahkan ketika itu berbahaya. Bagi kamu, kemerdekaan bukan hanya soal wilayah atau pengakuan — ia adalah soal martabat yang tidak bisa dinegosiasikan. Kamu mungkin kalah dalam jangka pendek, tapi sejarah sering membuktikan orang sepertimu.' },
    berani: { name: 'Sang Pemberani Sunyi', desc: 'Kamu berani berdiri sendiri — bahkan melawan arus, bahkan melawan kawan seperjuangan. Keberanian intelektual adalah tanda tanganmu. Kamu tidak takut pada konsekuensi, tapi kamu juga tahu bahwa keberanian tanpa arah hanya keberanian.' }
  };

  const arch = archetypes[dominant];
  document.getElementById('p-archetype').textContent = arch.name;
  document.getElementById('p-desc').textContent = arch.desc;

  const total = Object.values(profile).reduce((a, b) => a + b, 0) || 1;

  setTimeout(() => {
    ['pragmatis', 'idealis', 'berani'].forEach(key => {
      const pct = Math.round((profile[key] / total) * 100);
      document.getElementById(`bar-${key}`).style.width = pct + '%';
      document.getElementById(`val-${key}`).textContent = pct + '%';
    });
  }, 300);
}

// ══════════════════════════════════════════
// AI DIALOGUE (Anthropic API)
// ══════════════════════════════════════════
const TM_SYSTEM = `Kamu adalah Tan Malaka (Ibrahim Datuk Tan Malaka), revolusioner dan filsuf Indonesia kelahiran 1897. Kamu adalah Marxis independen — kamu pernah menolak perintah Komintern karena kamu percaya pada analisis sendiri. Kamu menulis Madilog (Materialisme, Dialektika, Logika) dan menggagas Merdeka 100% — tidak ada kompromi dengan imperialisme dalam bentuk apapun. Kamu pernah 20 tahun dalam pelarian melewati 11 negara. Kamu dieksekusi oleh militer Indonesia sendiri pada 1949 tanpa pengadilan.

Respond dalam bahasa Indonesia. Jawab sebagai Tan Malaka dari sudut pandang filosofinya yang khas — tegas, intelektual, tidak takut kontroversial, anti-imperialisme. Gunakan pemikiran materialisme dialektika. Panjang respons: 2-3 paragraf yang tajam dan berisi. Kamu boleh tidak setuju dengan Sjahrir jika relevan.`;

const SJ_SYSTEM = `Kamu adalah Sutan Sjahrir, negarawan dan intelektual Indonesia kelahiran 1909. Kamu adalah seorang sosialis demokrat dan humanis yang percaya pada kekuatan diplomasi, dialog, dan demokrasi. Sebagai PM pertama Indonesia, kamu memilih jalur negosiasi yang banyak dikritik — tapi terbukti benar secara strategis. Kamu pernah dipenjara oleh Belanda di Boven Digoel dan menulis surat-surat yang sangat indah kepada istrimu dari penjara. Kamu juga dipenjara oleh rezim Sukarno di akhir hidupmu.

Respond dalam bahasa Indonesia. Jawab sebagai Sjahrir dari sudut pandangnya yang reflektif, diplomatis, dan penuh nuansa. Kamu percaya pada rasionalitas dan humanisme. Panjang respons: 2-3 paragraf yang dalam dan terukur. Kamu boleh berbeda pendapat dengan Tan Malaka jika relevan, tapi dengan cara yang menghormati argumentasi.`;

async function callClaude(systemPrompt, question) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: question }]
    })
  });
  const data = await response.json();
  if (data.content && data.content[0]) return data.content[0].text;
  throw new Error('Respons tidak valid');
}

function addMessage(panelId, text, isThinking = false) {
  const panel = document.getElementById(panelId);
  const div = document.createElement('div');
  div.className = 'message-bubble';
  if (isThinking) {
    div.innerHTML = '<span class="message-thinking">Sedang merespons...</span>';
    div.id = panelId + '-thinking';
  } else {
    div.textContent = text;
  }
  panel.appendChild(div);
  panel.scrollTop = panel.scrollHeight;
  return div;
}

function addQuestionBanner(panelId, question) {
  const panel = document.getElementById(panelId);
  const div = document.createElement('div');
  div.style.cssText = 'font-family:"Special Elite",monospace;font-size:10px;letter-spacing:2px;color:var(--muted);padding:8px 0;border-top:1px solid var(--border);margin-top:8px;';
  div.textContent = '→ ' + question;
  panel.appendChild(div);
  panel.scrollTop = panel.scrollHeight;
}

async function askBoth() {
  const input = document.getElementById('dial-input');
  const question = input.value.trim();
  if (!question) return;

  const btn = document.getElementById('btn-ask');
  btn.disabled = true;
  input.value = '';

  addQuestionBanner('msg-tm', question);
  addQuestionBanner('msg-sj', question);

  const tmThink = addMessage('msg-tm', '', true);
  const sjThink = addMessage('msg-sj', '', true);

  try {
    const [tmResp, sjResp] = await Promise.all([
      callClaude(TM_SYSTEM, question),
      callClaude(SJ_SYSTEM, question)
    ]);

    tmThink.innerHTML = tmResp + '<div class="message-source">— Tan Malaka, dalam karakter berdasarkan Madilog & catatan historis</div>';
    sjThink.innerHTML = sjResp + '<div class="message-source">— Sutan Sjahrir, dalam karakter berdasarkan Perjuangan Kita & catatan historis</div>';
  } catch (err) {
    tmThink.innerHTML = '<em style="color:var(--red-light);">Tidak dapat menjangkau API. Pastikan koneksi aktif dan coba lagi.</em>';
    sjThink.innerHTML = '<em style="color:var(--blue-light);">Tidak dapat menjangkau API. Pastikan koneksi aktif dan coba lagi.</em>';
  }

  document.getElementById('msg-tm').scrollTop = document.getElementById('msg-tm').scrollHeight;
  document.getElementById('msg-sj').scrollTop = document.getElementById('msg-sj').scrollHeight;
  btn.disabled = false;
}

function useSuggestion(el) {
  document.getElementById('dial-input').value = el.textContent;
  document.getElementById('dial-input').focus();
}

// Enter key to submit
document.getElementById('dial-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askBoth(); }
});

// ══════════════════════════════════════════
// TIMELINE
// ══════════════════════════════════════════
function renderTimeline() {
  const el = document.getElementById('tl-events');
  el.innerHTML = '';
  timelineEvents.forEach(ev => {
    const item = document.createElement('div');
    item.className = `tl-event ${ev.char}`;
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-year">${ev.year}</div>
      <div class="tl-event-label">${ev.label}</div>
      <div class="tl-char-tag">${ev.char === 'tm' ? 'Tan Malaka' : 'Sjahrir'}</div>
    `;
    item.onclick = () => showTimelineDetail(ev);
    el.appendChild(item);
  });
}

function showTimelineDetail(ev) {
  const card = document.getElementById('tl-detail');
  document.getElementById('tl-d-year').textContent = ev.year;
  document.getElementById('tl-d-title').textContent = ev.title;
  document.getElementById('tl-d-text').textContent = ev.detail;
  card.classList.add('visible');
}

// ══════════════════════════════════════════
// WARISAN KOLEKTIF
// ══════════════════════════════════════════
function renderWarisan() {
  const grid = document.getElementById('stats-grid');
  grid.innerHTML = '';
  warisanData.forEach(w => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    let barsHtml = w.choices.map(c => `
      <div class="stat-bar-item">
        <div class="stat-bar-meta">
          <span class="stat-bar-choice">${c.label}</span>
          <span class="stat-bar-pct">${c.pct}%</span>
        </div>
        <div class="stat-bar-track"><div class="stat-bar-fill" data-pct="${c.pct}"></div></div>
      </div>
    `).join('');
    card.innerHTML = `<div class="stat-question">${w.question}</div><div class="stat-bar-group">${barsHtml}</div>`;
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.stat-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 200);
}

// ══════════════════════════════════════════
// LANDING TYPEWRITER
// ══════════════════════════════════════════
const tagline = '"Kamu bukan hanya membaca sejarah. Kamu hidup di dalamnya."';
let ti = 0;
const taglineEl = document.getElementById('tagline-text');
function typeTagline() {
  if (ti < tagline.length) {
    taglineEl.textContent += tagline[ti++];
    setTimeout(typeTagline, 38);
  }
}
setTimeout(typeTagline, 800);

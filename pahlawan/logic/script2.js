
/* ═══════════════════════════════════════════════════
   QUIZ DATA (20 soal Tan Malaka)
═══════════════════════════════════════════════════ */
const QUIZ = [
  {q:"Di provinsi mana Tan Malaka lahir?",o:["Sumatera Barat","Jawa Tengah","Riau","Sumatera Utara"],a:0},
  {q:"Nama lengkap asli Tan Malaka adalah?",o:["Sutan Ibrahim Gelar Datuk Sutan Malaka","Ibrahim Ali Tan","Sutan Sjahrir Malaka","Datuk Ibrahim Malaka"],a:0},
  {q:"MADILOG singkatan dari?",o:["Materialisme, Dialektika, Logika","Marxisme, Dialog, Logistik","Massa, Dialek, Logika","Manifesto, Dialektika, Logika"],a:0},
  {q:"Tahun berapa Tan Malaka menulis 'Naar de Republiek Indonesia'?",o:["1925","1928","1932","1920"],a:0},
  {q:"Berapa negara yang menjadi tempat pengasingan Tan Malaka?",o:["11 negara","7 negara","15 negara","5 negara"],a:0},
  {q:"Tan Malaka wafat di kota mana?",o:["Kediri","Surabaya","Yogyakarta","Madiun"],a:0},
  {q:"Nama samaran Tan Malaka saat berada di Filipina?",o:["Alisio Rivera","Hasan Gozali","Ilyas Husein","Ossorio"],a:0},
  {q:"Siapa yang menjuluki Tan Malaka 'Bapak Republik Indonesia'?",o:["Muhammad Yamin","Soekarno","Hatta","Sjahrir"],a:0},
  {q:"Tan Malaka menjadi Ketua PKI pada usia berapa?",o:["24 tahun","30 tahun","28 tahun","22 tahun"],a:0},
  {q:"Di mana Tan Malaka menyamar sebagai mandor saat menulis Madilog?",o:["Banten","Jakarta","Sumatera Barat","Banda Neira"],a:0},
  {q:"Nama koalisi yang didirikan Tan Malaka pada 4 Januari 1946?",o:["Persatuan Perjuangan","Partai Murba","PARI","Front Nasional"],a:0},
  {q:"Tan Malaka ditetapkan sebagai Pahlawan Nasional pada tahun?",o:["1963","1955","1970","1960"],a:0},
  {q:"PARI singkatan dari?",o:["Partai Republik Indonesia","Persatuan Anti Riel","Partai Rakyat Indonesia","Persatuan Revolusi Indonesia"],a:0},
  {q:"Buku autobiografi Tan Malaka ditulis dari penjara berjudul?",o:["Dari Penjara ke Penjara","Madilog","Gerpolek","Massa Aksi"],a:0},
  {q:"Perjanjian mana yang ditolak Tan Malaka karena dianggap pengkhianatan?",o:["Linggarjati","Renville","KMB","Roem-Royen"],a:0},
  {q:"Sejarawan Belanda yang meneliti Tan Malaka selama puluhan tahun?",o:["Harry Albert Poeze","Pieter van Dam","Jan Petrus","David Levering"],a:0},
  {q:"Sekolah guru yang dihadiri Tan Malaka di Bukittinggi?",o:["Kweekschool","Volkschool","Hollandsche School","MULO"],a:0},
  {q:"Tan Malaka menolak perintah dari siapa untuk memberontak pada 1927?",o:["Komintern","PKI","Belanda","Jepang"],a:0},
  {q:"Gerpolek berisi strategi?",o:["Gerilya, Politik, Ekonomi","Gerakan, Polisi, Ekonomi","Gerilya, Perjuangan, Ekonomi","Gerakan, Politik, Ekologi"],a:0},
  {q:"Jenderal yang bersama Tan Malaka dalam Persatuan Perjuangan?",o:["Jenderal Sudirman","Jenderal Nasution","Jenderal Gatot Subroto","Jenderal Urip Sumoharjo"],a:0}
];

/* ═══════════════════════════════════════════════════
   LEADERBOARD
═══════════════════════════════════════════════════ */
const SB_URL = 'https://kzcvxoliikziinxyiakr.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6Y3Z4b2xpaWt6aWlueHlpYWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MTEzMTgsImV4cCI6MjA5Mzk4NzMxOH0.3WrYyW1pO8EF2CDbYmdIyb8VgXTZvV8Hemq0MqMxwfY';
const SB_HDR = { 'apikey': SB_KEY, 'Authorization': 'Bearer '+SB_KEY, 'Content-Type': 'application/json' };
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

async function addScore(name,score,game){
  await fetch(`${SB_URL}/rest/v1/scores`, {
    method:'POST', headers:SB_HDR,
    body:JSON.stringify({name,score,game,date:new Date().toLocaleDateString('id')})
  });
  renderLB('all');
}
async function renderLB(filter){
  const el = document.getElementById('lb-content');
  el.innerHTML='<p class="lb-empty">Memuat...</p>';
  let url=`${SB_URL}/rest/v1/scores?select=*&order=score.desc&limit=10`;
  if(filter!=='all') url+=`&game=eq.${filter}`;
  const res = await fetch(url,{headers:SB_HDR});
  const s = await res.json();
  if(!Array.isArray(s)||!s.length){ el.innerHTML='<p class="lb-empty">Belum ada skor. Mainkan game dulu!</p>'; return; }
  const medals=['🥇','🥈','🥉'];
  let h='<table class="lb-table"><thead><tr><th>#</th><th>Nama</th><th>Game</th><th style="text-align:right">Skor</th></tr></thead><tbody>';
  s.forEach((x,i)=>{
    h+=`<tr><td class="lb-rank">${medals[i]||i+1}</td><td>${esc(x.name)}</td><td class="lb-game-tag">${x.game==='shooter'?'🚀 Shooter':'🐦 Flappy'}</td><td class="lb-score">${x.score}</td></tr>`;
  });
  el.innerHTML=h+'</tbody></table>';
}
function lbFilter(f,btn){
  document.querySelectorAll('.lb-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderLB(f);
}

/* ═══════════════════════════════════════════════════
   NAME MODAL
═══════════════════════════════════════════════════ */
let playerName = '';
let pendingGame = '';
function askName(game){
  if(playerName){ if(game==='shooter')startShooter(); else startFlappy(); return; }
  pendingGame = game;
  document.getElementById('name-modal').classList.remove('hidden');
  setTimeout(()=>document.getElementById('name-input').focus(),50);
}
function confirmName(){
  const v = document.getElementById('name-input').value.trim();
  if(!v){ document.getElementById('name-input').style.borderColor='#c0392b'; return; }
  playerName = v;
  document.getElementById('name-modal').classList.add('hidden');
  if(pendingGame==='shooter') startShooter(); else startFlappy();
}
document.getElementById('name-input').addEventListener('keydown',e=>{ if(e.key==='Enter') confirmName(); });

/* ═══════════════════════════════════════════════════
   GAME SWITCH
═══════════════════════════════════════════════════ */
function switchGame(g){
  document.querySelectorAll('.game-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+g).classList.add('active');
  document.getElementById('panel-shooter').classList.toggle('hidden', g!=='shooter');
  document.getElementById('panel-flappy').classList.toggle('hidden', g!=='flappy');
}

/* ═══════════════════════════════════════════════════
   QUIZ ENGINE
═══════════════════════════════════════════════════ */
function runQuiz(ids, onCorrect){
  // ids: {overlay, q, opts, fb, tf}
  const {overlay,q:qEl,opts:optsEl,fb:fbEl,tf:tfEl} = ids;
  const item = QUIZ[Math.floor(Math.random()*QUIZ.length)];
  document.getElementById(qEl).textContent = item.q;
  document.getElementById(fbEl).textContent = '';
  const fill = document.getElementById(tfEl);
  fill.style.width = '100%';
  const optsDiv = document.getElementById(optsEl);
  optsDiv.innerHTML = '';
  document.getElementById(overlay).classList.remove('hidden');

  let timeLeft = 10;
  let answered = false;
  let iv = setInterval(()=>{
    timeLeft -= 0.1;
    fill.style.width = Math.max(0, timeLeft/10*100)+'%';
    if(timeLeft<=0){
      clearInterval(iv);
      if(!answered){
        document.getElementById(fbEl).textContent='⏱ Waktu habis! Coba lagi.';
        document.getElementById(fbEl).style.color='#c0392b';
        setTimeout(()=>runQuiz(ids,onCorrect),1100);
      }
    }
  },100);

  item.o.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.className='qopt'; btn.textContent=opt;
    btn.onclick=()=>{
      if(answered)return;
      clearInterval(iv); answered=true;
      if(i===item.a){
        btn.classList.add('correct');
        document.getElementById(fbEl).textContent='✓ Benar!';
        document.getElementById(fbEl).style.color='#27ae60';
        const bonus = Math.ceil(timeLeft/10*5);
        setTimeout(()=>{ document.getElementById(overlay).classList.add('hidden'); onCorrect(bonus); },700);
      } else {
        btn.classList.add('wrong');
        optsDiv.querySelectorAll('.qopt')[item.a].classList.add('correct');
        document.getElementById(fbEl).textContent='✗ Salah! Coba lagi.';
        document.getElementById(fbEl).style.color='#c0392b';
        setTimeout(()=>runQuiz(ids,onCorrect),1600);
      }
    };
    optsDiv.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════════════
   SPACE SHOOTER
═══════════════════════════════════════════════════ */
const sc = document.getElementById('sc');
const sx = sc.getContext('2d');
const SW = sc.width, SH = sc.height;

let SS = { on:false, score:0, bullets:10, player:{x:190,y:440,w:36,h:28,spd:5},
           projs:[], enemies:[], keys:{}, dir:1, espd:0.9, frame:0, raf:null };

function shooterBegin(){ askName('shooter'); }
function startShooter(){
  document.getElementById('s-start').classList.add('hidden');
  document.getElementById('s-over').classList.remove('hidden')||document.getElementById('s-over').classList.add('hidden');
  initShooter();
}
function initShooter(){
  SS.score=0; SS.bullets=10; SS.player.x=190; SS.projs=[]; SS.dir=1; SS.espd=0.9; SS.frame=0;
  SS.enemies=[];
  for(let r=0;r<3;r++) for(let c=0;c<6;c++)
    SS.enemies.push({x:38+c*56,y:50+r*46,w:34,h:24,alive:true});
  sUI(); SS.on=true;
  if(SS.raf)cancelAnimationFrame(SS.raf);
  sLoop();
}
function sUI(){ document.getElementById('s-score-ui').textContent=SS.score; document.getElementById('s-bullet-ui').textContent=SS.bullets; }

const sQuizIds = {overlay:'s-quiz',q:'s-q',opts:'s-opts',fb:'s-fb',tf:'s-tf'};
function sAskQuiz(){
  SS.on=false;
  runQuiz(sQuizIds,(bonus)=>{
    SS.bullets = 3 + bonus;
    sUI(); SS.on=true; sLoop();
  });
}

document.addEventListener('keydown',e=>{
  SS.keys[e.key]=true;
  if(e.key===' ' && !document.getElementById('panel-shooter').classList.contains('hidden')){
    e.preventDefault();
    if(SS.on) sShoot();
  }
});
document.addEventListener('keyup',e=>{ SS.keys[e.key]=false; });
sc.addEventListener('click',()=>{ if(SS.on) sShoot(); });

let touchSX=0;
sc.addEventListener('touchstart',e=>{ touchSX=e.touches[0].clientX; },{passive:true});
sc.addEventListener('touchmove',e=>{
  if(!SS.on)return;
  const dx=e.touches[0].clientX-touchSX;
  SS.player.x=Math.max(0,Math.min(SW-SS.player.w,SS.player.x+dx*0.6));
  touchSX=e.touches[0].clientX;
  e.preventDefault();
},{passive:false});
sc.addEventListener('touchend',()=>{ if(SS.on)sShoot(); });

function sShoot(){
  if(SS.bullets<=0){ SS.on=false; setTimeout(sAskQuiz,80); return; }
  SS.bullets--;
  SS.projs.push({x:SS.player.x+SS.player.w/2-2,y:SS.player.y,w:4,h:13,spd:9});
  sUI();
  if(SS.bullets===0) setTimeout(()=>{ if(SS.projs.length===0){ SS.on=false; sAskQuiz(); }},400);
}

function sLoop(){
  if(!SS.on)return;
  SS.raf=requestAnimationFrame(sLoop);
  SS.frame++;

  // Player move
  if(SS.keys['ArrowLeft']||SS.keys['a']||SS.keys['A']) SS.player.x=Math.max(0,SS.player.x-SS.player.spd);
  if(SS.keys['ArrowRight']||SS.keys['d']||SS.keys['D']) SS.player.x=Math.min(SW-SS.player.w,SS.player.x+SS.player.spd);

  // Projs
  SS.projs.forEach(p=>p.y-=p.spd);
  SS.projs=SS.projs.filter(p=>p.y>-20);

  // Enemies move
  let wall=false;
  SS.enemies.forEach(e=>{ if(!e.alive)return; e.x+=SS.dir*SS.espd; if(e.x+e.w>=SW||e.x<=0)wall=true; });
  if(wall){ SS.dir*=-1; SS.enemies.forEach(e=>{ if(e.alive)e.y+=14; }); SS.espd=Math.min(3,SS.espd+0.06); }

  // Collisions
  SS.projs.forEach((p,pi)=>{
    SS.enemies.forEach(e=>{
      if(!e.alive)return;
      if(p.x<e.x+e.w && p.x+p.w>e.x && p.y<e.y+e.h && p.y+p.h>e.y){
        e.alive=false; SS.projs[pi]=null; SS.score+=10; sUI();
      }
    });
  });
  SS.projs=SS.projs.filter(Boolean);

  // Enemy reaches player line?
  const alive=SS.enemies.filter(e=>e.alive);
  if(alive.some(e=>e.y+e.h>=SS.player.y)){ sGameOver(); return; }

  // All dead → new wave
  if(alive.length===0){
    SS.score+=50; sUI(); SS.espd+=0.2;
    for(let r=0;r<3;r++) for(let c=0;c<6;c++)
      SS.enemies.push({x:38+c*56,y:50+r*46,w:34,h:24,alive:true});
  }

  // Bullets empty + no projs in air
  if(SS.bullets<=0 && SS.projs.length===0 && SS.on){ SS.on=false; sAskQuiz(); }

  sDraw();
}

function sDraw(){
  sx.fillStyle='#0d0d0d'; sx.fillRect(0,0,SW,SH);
  // Grid
  sx.strokeStyle='rgba(255,255,255,0.025)'; sx.lineWidth=1;
  for(let x=0;x<SW;x+=40){ sx.beginPath();sx.moveTo(x,0);sx.lineTo(x,SH);sx.stroke(); }
  for(let y=0;y<SH;y+=40){ sx.beginPath();sx.moveTo(0,y);sx.lineTo(SW,y);sx.stroke(); }

  // Player ship
  sx.fillStyle='#c8a951';
  sx.beginPath();
  sx.moveTo(SS.player.x+SS.player.w/2,SS.player.y);
  sx.lineTo(SS.player.x+SS.player.w,SS.player.y+SS.player.h);
  sx.lineTo(SS.player.x,SS.player.y+SS.player.h);
  sx.closePath(); sx.fill();
  sx.fillStyle='rgba(200,169,81,0.25)';
  sx.fillRect(SS.player.x+SS.player.w/2-5,SS.player.y+SS.player.h,10,8);

  // Projectiles
  sx.fillStyle='#c8a951';
  SS.projs.forEach(p=>sx.fillRect(p.x,p.y,p.w,p.h));

  // Enemies
  SS.enemies.forEach((e,i)=>{
    if(!e.alive)return;
    const pulse=Math.sin(SS.frame*0.06+i)*0.1+0.9;
    sx.fillStyle=`rgba(192,57,43,${pulse})`;
    sx.fillRect(e.x,e.y,e.w,e.h);
    sx.fillStyle='#ffcc00';
    sx.fillRect(e.x+5,e.y+5,7,7); sx.fillRect(e.x+e.w-12,e.y+5,7,7);
    sx.fillRect(e.x+5,e.y+e.h-8,e.w-10,4);
  });

  // HUD bar
  sx.fillStyle='rgba(200,169,81,0.12)'; sx.fillRect(0,SH-30,SW,30);
  sx.fillStyle='#c8a951'; sx.font='12px -apple-system,sans-serif';
  sx.textAlign='left'; sx.fillText('Skor: '+SS.score,12,SH-10);
  sx.textAlign='right'; sx.fillText('Peluru: '+SS.bullets,SW-12,SH-10);
}

function sGameOver(){
  SS.on=false; cancelAnimationFrame(SS.raf);
  addScore(playerName,SS.score,'shooter');
  document.getElementById('s-over-txt').textContent=`Skor kamu: ${SS.score} — Tersimpan di leaderboard!`;
  document.getElementById('s-over').classList.remove('hidden');
}
function shooterRestart(){ document.getElementById('s-over').classList.add('hidden'); initShooter(); }

// Initial draw
sx.fillStyle='#0d0d0d'; sx.fillRect(0,0,SW,SH);
sx.fillStyle='rgba(200,169,81,0.15)'; sx.font='14px -apple-system,sans-serif'; sx.textAlign='center';
sx.fillText('Klik "Mulai Bermain" untuk mulai',SW/2,SH/2);

/* ═══════════════════════════════════════════════════
   FLAPPY BIRD
═══════════════════════════════════════════════════ */
const fc = document.getElementById('fc');
const fx = fc.getContext('2d');
const FW = fc.width, FH = fc.height;

let FS = { on:false, score:0, flaps:0, raf:null, frame:0, quizOpen:false,
  bird:{x:85,y:240,vy:0,r:17}, pipes:[], grav:0.42, flapPwr:-8.5, pspd:2.4 };

function flappyBegin(){ askName('flappy'); }
function startFlappy(){
  document.getElementById('f-start').classList.add('hidden');
  document.getElementById('f-over').classList.add('hidden');
  initFlappy();
}
function initFlappy(){
  FS.score=0; FS.flaps=0; FS.bird={x:85,y:240,vy:0,r:17};
  FS.pipes=[]; FS.frame=0; FS.pspd=2.4; FS.quizOpen=false; FS.on=true;
  fUI();
  if(FS.raf)cancelAnimationFrame(FS.raf);
  fLoop();
}
function fUI(){ document.getElementById('f-score-ui').textContent=FS.score; document.getElementById('f-flap-ui').textContent=FS.flaps; }

const fQuizIds = {overlay:'f-quiz',q:'f-q',opts:'f-opts',fb:'f-fb',tf:'f-tf'};
function tryFlap(){
  if(FS.quizOpen||!FS.on)return;
  FS.on=false; FS.quizOpen=true;
  runQuiz(fQuizIds,()=>{
    FS.bird.vy=FS.flapPwr; FS.flaps++;
    FS.quizOpen=false; FS.on=true; fUI(); fLoop();
  });
}

document.addEventListener('keydown',e=>{
  if(e.key===' ' && !document.getElementById('panel-flappy').classList.contains('hidden')){
    if(!document.getElementById('panel-shooter').classList.contains('hidden'))return;
    e.preventDefault(); tryFlap();
  }
});
fc.addEventListener('click',tryFlap);
fc.addEventListener('touchend',e=>{ e.preventDefault(); tryFlap(); },{passive:false});

function fLoop(){
  if(!FS.on)return;
  FS.raf=requestAnimationFrame(fLoop);
  FS.frame++;

  FS.bird.vy+=FS.grav; FS.bird.y+=FS.bird.vy;

  // Spawn pipes
  if(FS.frame%115===0){
    const gap=145, gy=75+Math.random()*(FH-gap-120);
    FS.pipes.push({x:FW,gy,gap,passed:false});
  }
  FS.pipes.forEach(p=>p.x-=FS.pspd);
  FS.pipes=FS.pipes.filter(p=>p.x>-60);

  FS.pipes.forEach(p=>{
    if(!p.passed && p.x+50<FS.bird.x){
      p.passed=true; FS.score++;
      FS.pspd=Math.min(4.2,FS.pspd+0.06); fUI();
    }
  });

  // Collision
  const b=FS.bird;
  if(b.y-b.r<=0||b.y+b.r>=FH-28){ fGameOver(); return; }
  for(const p of FS.pipes){
    if(b.x+b.r>p.x && b.x-b.r<p.x+50){
      if(!(b.y-b.r>p.gy && b.y+b.r<p.gy+p.gap)){ fGameOver(); return; }
    }
  }

  fDraw();
}

function fDraw(){
  // Sky
  const g=fx.createLinearGradient(0,0,0,FH);
  g.addColorStop(0,'#0d0d1a'); g.addColorStop(1,'#1a1030');
  fx.fillStyle=g; fx.fillRect(0,0,FW,FH);

  // Stars
  fx.fillStyle='rgba(255,255,255,0.35)';
  for(let i=0;i<18;i++){
    fx.fillRect((i*79+FS.frame*0.15)%FW, (i*41)%(FH-40), 1.5,1.5);
  }

  // Pipes
  FS.pipes.forEach(p=>{
    fx.fillStyle='#264d1a'; fx.fillRect(p.x,0,50,p.gy);
    fx.fillStyle='#264d1a'; fx.fillRect(p.x,p.gy+p.gap,50,FH);
    fx.fillStyle='#357a24';
    fx.fillRect(p.x-4,p.gy-14,58,14);
    fx.fillRect(p.x-4,p.gy+p.gap,58,14);
  });

  // Ground
  fx.fillStyle='#182e10'; fx.fillRect(0,FH-28,FW,28);

  // Bird
  const b=FS.bird;
  const ang=Math.max(-Math.PI/6,Math.min(Math.PI/2.5,b.vy*0.08));
  fx.save(); fx.translate(b.x,b.y); fx.rotate(ang);
  fx.fillStyle='#c8a951';
  fx.beginPath(); fx.ellipse(0,0,b.r,b.r*0.82,0,0,Math.PI*2); fx.fill();
  fx.fillStyle='#fff'; fx.beginPath(); fx.arc(7,-5,6,0,Math.PI*2); fx.fill();
  fx.fillStyle='#111'; fx.beginPath(); fx.arc(9,-5,3.5,0,Math.PI*2); fx.fill();
  fx.fillStyle='#e67e22';
  fx.beginPath(); fx.moveTo(b.r-2,0); fx.lineTo(b.r+9,-3); fx.lineTo(b.r+9,3); fx.closePath(); fx.fill();
  fx.fillStyle='#a08030';
  fx.beginPath(); fx.ellipse(-4,5,11,6,-0.3,0,Math.PI*2); fx.fill();
  fx.restore();

  // Score HUD
  fx.fillStyle='rgba(0,0,0,0.45)'; fx.fillRect(0,0,FW,36);
  fx.fillStyle='#c8a951'; fx.font='bold 17px -apple-system,sans-serif';
  fx.textAlign='center'; fx.fillText(FS.score,FW/2,24);
}

function fGameOver(){
  FS.on=false; cancelAnimationFrame(FS.raf);
  addScore(playerName,FS.score,'flappy');
  document.getElementById('f-over-txt').textContent=`Skor kamu: ${FS.score} — Tersimpan di leaderboard!`;
  document.getElementById('f-over').classList.remove('hidden');
}
function flappyRestart(){ document.getElementById('f-over').classList.add('hidden'); initFlappy(); }

// Initial draw
(()=>{
  const g=fx.createLinearGradient(0,0,0,FH);
  g.addColorStop(0,'#0d0d1a'); g.addColorStop(1,'#1a1030');
  fx.fillStyle=g; fx.fillRect(0,0,FW,FH);
  fx.fillStyle='rgba(200,169,81,0.15)'; fx.font='14px -apple-system,sans-serif'; fx.textAlign='center';
  fx.fillText('Klik "Mulai Bermain" untuk mulai',FW/2,FH/2);
})();

/* ═══════════════════════════════════════════════════
   JOURNEY
═══════════════════════════════════════════════════ */
const chapters = [
  {
    meta:'Bab 1 · 1897–1913 · Suliki, Sumatera Barat',
    title:'Anak Datuk dari Tanah Minang',
    text:'Sutan Ibrahim lahir di Nagari Pandam Gadang, sebuah nagari kecil di kaki bukit Suliki, Lima Puluh Kota. Lahir dari keluarga bangsawan Minangkabau — ayahnya seorang buruh tani, ibunya putri tokoh terpandang desa. Sejak kecil ia dididik dalam ilmu agama dan pencak silat.\n\nGurunya di Kweekschool Bukittinggi, GH Horensma, langsung mengenali kecerdasan yang tidak biasa. Ia mendorong Tan Malaka untuk melanjutkan pendidikan ke Belanda — sesuatu yang sangat langka bagi anak pribumi di era kolonial.',
    fact:'Nama "Tan Malaka" adalah gelar adat dari garis keturunan ibunya — bukan nama lahir. Ia menerimanya pada usia 16 tahun. Gelar itu kemudian menjadi satu-satunya nama yang dikenal dunia.'
  },
  {
    meta:'Bab 2 · 1913–1921 · Belanda & Semarang',
    title:'Di Negeri Penjajah, Menemukan Senjata',
    text:'Di Rijkskweekschool Belanda, Tan Malaka bukan hanya belajar menjadi guru — ia bertemu dengan pemikiran Karl Marx dan Friedrich Engels. Di sini pandangan dunianya berubah sepenuhnya.\n\nKembali ke Indonesia, ia mengajar di perkebunan tembakau Deli dan menyaksikan betapa kejamnya sistem kolonial pada buruh kontrak. Pengalaman ini mengubahnya dari seorang guru menjadi seorang aktivis yang tidak bisa tinggal diam.',
    fact:'Tan Malaka tidak pernah menjadi Marxis buta. Ia melihat Marxisme sebagai alat analisis, bukan dogma — dan karena itu ia berani menantang Moskow ketika Moskow salah arah.'
  },
  {
    meta:'Bab 3 · 1921–1927 · Internasional',
    title:'Pemimpin Termuda, Musuh Terkuat',
    text:'Pada 1921, Tan Malaka menjadi Ketua PKI di usia 24 tahun — pemimpin partai komunis termuda di Asia Tenggara. Ia berbicara di hadapan Komintern di Moskow, mengusulkan persatuan antara komunisme dan Pan-Islamisme — sebuah gagasan yang mengejutkan seluruh forum.\n\nPada 1925, ia menulis Naar de Republiek Indonesia dari Kanton, Tiongkok — menjadi orang pertama yang menuliskan "Republik Indonesia" secara formal, 20 tahun sebelum Proklamasi.',
    fact:'Ketika Komintern memerintahkan pemberontakan PKI 1927, Tan Malaka menentang keras. Ia dikeluarkan. Pemberontakan itu kemudian gagal total — membuktikan analisis Tan Malaka benar.'
  },
  {
    meta:'Bab 4 · 1942–1945 · Banten & Jakarta',
    title:'Menyamar, Menulis, Menunggu',
    text:'Selama pendudukan Jepang, Tan Malaka menyamar sebagai mandor "Ilyas Husein" di tambang batu bara Bayah, Banten. Di tengah penyamaran dan pengawasan ketat, ia menulis Madilog — sistem filsafat pertama dan satu-satunya yang lahir dari tanah Indonesia.\n\nSetelah Proklamasi 17 Agustus 1945, ia keluar dari persembunyian dan menggunakan nama aslinya kembali untuk pertama kali setelah 20 tahun.',
    fact:'Madilog ditulis tanpa perpustakaan, tanpa referensi, hanya dari ingatan — di sebuah gubuk kecil sambil berpura-pura menjadi mandor. Ratusan halaman filsafat itu diselesaikan dalam kondisi yang hampir mustahil.'
  },
  {
    meta:'Bab 5 · 1946–1949 · Yogyakarta & Kediri',
    title:'Dipenjara oleh Negara yang Ia Gagas',
    text:'Tan Malaka mendirikan Persatuan Perjuangan bersama Jenderal Sudirman — menuntut kemerdekaan 100% dan menolak perundingan Linggarjati. Pemerintah menuduhnya merencanakan kudeta. Ia ditangkap dan dijadikan tahanan politik oleh Republik yang ia perjuangkan lebih dulu dari siapapun.\n\nPada 21 Februari 1949, Tan Malaka dieksekusi di kaki Gunung Wilis, Kediri — bukan oleh Belanda, tapi oleh tentara Indonesia sendiri. Lokasi makamnya hingga hari ini masih misteri.',
    fact:'Presiden Soekarno menetapkan Tan Malaka sebagai Pahlawan Nasional pada 28 Maret 1963 — 14 tahun setelah ia dibunuh oleh negara itu sendiri. Salah satu ironi paling getir dalam sejarah Republik Indonesia.'
  }
];

(function renderChapters(){
  const c = document.getElementById('ch-container');
  chapters.forEach((ch,i)=>{
    const d = document.createElement('div');
    d.className='ch-card'+(i===0?' active':'');
    d.id='ch-'+i;
    const pars = ch.text.split('\n\n').map(p=>`<p>${p}</p>`).join('');
    d.innerHTML=`
      <p class="ch-meta">${ch.meta}</p>
      <h3 class="ch-title">${ch.title}</h3>
      <div class="ch-text">${pars}</div>
      <div class="ch-fact"><div class="ch-fact-lbl">💡 Fakta Penting</div><div class="ch-fact-text">${ch.fact}</div></div>
      <button class="btn-primary" onclick="nextChapter(${i})">${i<chapters.length-1?'Babak Berikutnya →':'Selesai ✓'}</button>
    `;
    c.appendChild(d);
  });
})();

function nextChapter(from){
  document.getElementById('ch-'+from).classList.remove('active');
  document.getElementById('cd-'+from).classList.remove('active');
  document.getElementById('cd-'+from).classList.add('done');
  if(from+1<chapters.length){
    document.getElementById('ch-'+(from+1)).classList.add('active');
    document.getElementById('cd-'+(from+1)).classList.add('active');
    document.getElementById('ch-'+(from+1)).scrollIntoView({behavior:'smooth',block:'start'});
  } else {
    document.getElementById('ch-done').classList.add('active');
    document.getElementById('ch-done').scrollIntoView({behavior:'smooth'});
  }
}

/* Init */
renderLB('all');
<template>
  <div class="about-page">

    <!-- ─────────────────────────────────────
         PAGE HERO
    ───────────────────────────────────── -->
    <section class="page-hero section-py">
      <div class="blob blob-1" aria-hidden="true" />
      <div class="blob blob-2" aria-hidden="true" />

      <div class="container page-hero-inner">

        <div class="page-hero-text">
          <p class="section-label">Get to know me</p>
          <h1 class="section-title mb-4">
            About <span class="text-gradient">Me</span>
          </h1>
          <p class="hero-lead">
            I'm a Front-End Developer based in Mansoura, Egypt 🇪🇬, specializing in Vue.js and Nuxt.js.
            I have 1 year of professional experience building responsive, scalable web applications —
            including the Scraapy e-commerce platform at Bahiz Technology.
          </p>
          <div class="hero-btns">
            <NuxtLink to="/#contact" class="btn-primary-custom">
              Let's Work Together ✦
            </NuxtLink>
            <a href="/cv.pdf" download class="btn-outline-custom">
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>
          </div>
        </div>

        <!-- Avatar -->
        <div class="page-hero-avatar">
          <div class="big-avatar glass-card">
              <img src="~/assets/images/avatar.jpeg" alt="Yousef Khaled" class="big-avatar-photo" />
              <div class="av-ring av-ring-1" />
              <div class="av-ring av-ring-2" />
            </div>
          <!-- quick facts -->
          <div class="quick-facts glass-card">
            <div v-for="fact in quickFacts" :key="fact.label" class="qf-row">
              <span class="qf-icon">{{ fact.icon }}</span>
              <span class="qf-label">{{ fact.label }}</span>
              <span class="qf-value">{{ fact.value }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         STORY / TIMELINE
    ───────────────────────────────────── -->
    <section class="story-section section-py">
      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">My Journey</p>
          <h2 class="section-title">
            Experience & <span class="text-gradient">Education</span>
          </h2>
        </div>

        <div class="timeline">
          <div
            v-for="(item, i) in timeline"
            :key="i"
            class="timeline-item"
            :class="item.type"
          >
            <div class="tl-dot">
              <span>{{ item.icon }}</span>
            </div>
            <div class="tl-card glass-card">
              <div class="tl-header">
                <div>
                  <span class="tl-type font-mono">{{ item.type }}</span>
                  <h3 class="tl-title">{{ item.title }}</h3>
                  <p class="tl-place">{{ item.place }}</p>
                </div>
                <span class="tl-date font-mono">{{ item.date }}</span>
              </div>
              <p class="tl-desc">{{ item.desc }}</p>
              <div v-if="item.tags" class="tl-tags">
                <span v-for="t in item.tags" :key="t" class="about-tag">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         VALUES
    ───────────────────────────────────── -->
    <section class="values-section section-py">
      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">What Drives Me</p>
          <h2 class="section-title">
            My <span class="text-gradient">Values</span>
          </h2>
        </div>

        <div class="values-grid">
          <div v-for="v in values" :key="v.title" class="value-card glass-card">
            <div class="value-icon">{{ v.icon }}</div>
            <h4 class="value-title">{{ v.title }}</h4>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         INTERESTS
    ───────────────────────────────────── -->
    <section class="interests-section section-py">
      <div class="container">

        <div class="interests-grid">

          <div class="interests-text">
            <p class="section-label">Beyond the Screen</p>
            <h2 class="section-title mb-4">
              Hobbies & <span class="text-gradient">Interests</span>
            </h2>
            <p class="int-para">
              I believe great developers are well-rounded people. Outside of work,
              I'm constantly learning, exploring, and staying curious about the world
              around me.
            </p>
            <p class="int-para">
              Whether it's reading about psychology, watching tech talks, or
              experimenting with new design tools — I'm always feeding my curiosity.
            </p>
          </div>

          <div class="interests-cards">
            <div v-for="interest in interests" :key="interest.title" class="interest-item glass-card">
              <span class="int-icon">{{ interest.icon }}</span>
              <div>
                <h5 class="int-title">{{ interest.title }}</h5>
                <p class="int-sub">{{ interest.sub }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────
         TESTIMONIALS
    ───────────────────────────────────── -->
    <section class="testimonials-section section-py">
      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">What Others Say</p>
          <h2 class="section-title">
            <span class="text-gradient">Testimonials</span>
          </h2>
        </div>

        <div class="testimonials-grid">
          <div v-for="t in testimonials" :key="t.name" class="testimonial-card glass-card">
            <div class="quote-icon">"</div>
            <p class="t-quote">{{ t.quote }}</p>
            <div class="t-author">
              <div class="t-avatar">{{ t.avatar }}</div>
              <div>
                <p class="t-name">{{ t.name }}</p>
                <p class="t-role">{{ t.role }}</p>
              </div>
              <div class="t-stars">
                <span v-for="i in 5" :key="i" class="text-warning">★</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         CTA
    ───────────────────────────────────── -->
    <section class="cta-section section-py">
      <div class="cta-blob" aria-hidden="true" />
      <div class="container text-center" style="position:relative; z-index:1">
        <p class="section-label" style="justify-content:center">Ready to collaborate?</p>
        <h2 class="section-title mb-4">
          Let's Build Something <span class="text-gradient">Amazing</span>
        </h2>
        <p class="cta-sub">
          I'm currently available for freelance work and full-time opportunities.
          If you have a project that you want to get started or think you need my help —
          let's talk.
        </p>
        <div class="cta-btns">
          <NuxtLink to="/#contact" class="btn-primary-custom">
            Start a Conversation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </NuxtLink>
          <NuxtLink to="/#projects" class="btn-outline-custom">
            View My Work
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About — Yousef Khaled',
  meta: [{ name: 'description', content: 'Learn more about Yousef Khaled — Frontend Developer, his journey, values, and experience.' }]
})

/* ── Quick facts ── */
const quickFacts = [
  { icon: '📍', label: 'Location',   value: 'Mansoura, Egypt' },
  { icon: '💼', label: 'Role',       value: 'Front-End Developer' },
  { icon: '🎓', label: 'Degree',     value: 'B.Sc. Information Systems' },
  { icon: '⏳', label: 'Experience', value: '1 Year' },
  { icon: '🌐', label: 'Languages',  value: 'Arabic, English' },
  { icon: '✅', label: 'Available',  value: 'Open to work' },
]

/* ── Timeline ── */
const timeline = [
  {
    type: 'work',
    icon: '💼',
    title: 'Front-End Developer',
    place: 'Bahiz Technology and Information — Scraapy',
    date: '2025 – 2026',
    desc: 'Developed and maintained responsive web applications using Vue.js and Nuxt.js. Built reusable UI components with Vue 3, PrimeVue and Bootstrap. Integrated REST APIs using Axios, implemented authentication, Pinia state management, and Arabic/English localization with RTL/LTR support.',
    tags: ['Vue 3', 'Nuxt.js', 'Pinia', 'Bootstrap', 'PrimeVue', 'Axios', 'RTL/LTR'],
  },
  {
    type: 'education',
    icon: '🎓',
    title: 'Bachelor\'s Degree in Information Systems',
    place: 'Nile Higher Institute — Egypt',
    date: '2023 – 2027',
    desc: 'Currently studying Information Systems with relevant coursework in Web Development, Database Systems, Software Engineering, and Information Systems. Expected graduation 2027.',
    tags: ['Web Development', 'Databases', 'Software Engineering', 'Information Systems'],
  },
]

/* ── Values ── */
const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    desc: 'I believe in writing clean, maintainable code. Every component I build is reusable, readable, and built to last.'
  },
  {
    icon: '⚡',
    title: 'Performance',
    desc: 'Fast, responsive UIs are non-negotiable. I focus on optimised rendering, lazy loading, and smooth user experiences.'
  },
  {
    icon: '🌐',
    title: 'Localization',
    desc: 'I care about reaching all users. I have real experience building fully bilingual Arabic/English apps with RTL/LTR support.'
  },
  {
    icon: '🤝',
    title: 'Teamwork',
    desc: 'Good products come from good collaboration. I communicate clearly and work well with designers, backend devs, and stakeholders.'
  },
  {
    icon: '📚',
    title: 'Always Learning',
    desc: 'The frontend world moves fast. I dedicate time every week to staying up to date with new tools, patterns, and best practices.'
  },
  {
    icon: '🛒',
    title: 'E-Commerce Focus',
    desc: 'I have hands-on experience building e-commerce features: product pages, cart, checkout flows, search, and order management.'
  },
]

/* ── Interests ── */
const interests = [
  { icon: '💻', title: 'Open Source',    sub: 'Contributing & exploring GitHub projects' },
  { icon: '📖', title: 'Reading',        sub: 'Tech articles & self-improvement books' },
  { icon: '🎨', title: 'UI Design',      sub: 'Component design & micro-interactions' },
  { icon: '🎵', title: 'Music',          sub: 'Lo-fi & ambient while coding' },
  { icon: '🛒', title: 'E-Commerce',     sub: 'Building & exploring online platforms' },
  { icon: '🌍', title: 'Localization',   sub: 'Multi-language & RTL web experiences' },
]

/* ── Testimonials ── */
const testimonials = [
  {
    quote: 'Yousef has a strong eye for detail and delivers clean, well-structured Vue components. His work on the Scraapy platform was impressive — especially the bilingual RTL/LTR implementation.',
    name: 'Team Lead',
    role: 'Bahiz Technology — Scraapy',
    avatar: '👨‍💼',
  },
  {
    quote: 'Working with Yousef was smooth from start to finish. He understood the requirements quickly, integrated APIs cleanly, and delivered responsive UIs on time.',
    name: 'Project Manager',
    role: 'Bahiz Technology — Scraapy',
    avatar: '👩‍💼',
  },
  {
    quote: 'Yousef built the Raw Rentals frontend with great attention to the Arabic UX. The RTL layout and responsive design across all devices was exactly what we needed.',
    name: 'Client',
    role: 'Raw Rentals Project',
    avatar: '🧑‍💻',
  },
]
</script>

<style scoped>
/* ══════════════════════════════════
   Page Hero
══════════════════════════════════ */
.about-page { background: var(--clr-bg); }

.page-hero {
  position: relative;
  overflow: hidden;
  padding-top: 140px;
  background: var(--clr-bg-2);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
}
.blob-1 {
  width: 500px; height: 500px;
  background: rgba(99,102,241,.15);
  top: -100px; right: -80px;
}
.blob-2 {
  width: 350px; height: 350px;
  background: rgba(6,182,212,.1);
  bottom: -60px; left: -60px;
}

.page-hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-lead {
  font-size: 1.05rem;
  color: var(--clr-text-muted);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 32px;
}
.hero-btns { display: flex; flex-wrap: wrap; gap: 14px; }

/* Avatar */
.page-hero-avatar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.big-avatar {
  width: 200px;
  height: 240px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--clr-border);
}
.big-avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  display: block;
}
.av-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(99,102,241,.3);
  animation: ripple 3s ease-in-out infinite;
}
.av-ring-1 { inset: -16px; animation-delay: 0s; }
.av-ring-2 { inset: -32px; animation-delay: 0.8s; }
@keyframes ripple {
  0%,100% { opacity: .5; transform: scale(1); }
  50%      { opacity: .15; transform: scale(1.04); }
}

.quick-facts {
  padding: 16px 20px;
  min-width: 240px;
}
.qf-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--clr-border);
  font-size: 0.86rem;
}
.qf-row:last-child { border-bottom: none; }
.qf-icon  { font-size: 1rem; width: 22px; text-align: center; }
.qf-label { color: var(--clr-text-muted); flex: 1; }
.qf-value { color: var(--clr-text); font-weight: 600; }

/* ══════════════════════════════════
   Timeline
══════════════════════════════════ */
.story-section { background: var(--clr-bg); }

.timeline {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* vertical line */
.timeline::before {
  content: '';
  position: absolute;
  left: 22px;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--clr-primary), var(--clr-accent), transparent);
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  position: relative;
}

.tl-dot {
  width: 46px; height: 46px;
  border-radius: 50%;
  background: var(--clr-bg-card);
  border: 2px solid var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 16px rgba(99,102,241,.3);
}
.timeline-item.education .tl-dot {
  border-color: var(--clr-accent);
  box-shadow: 0 0 16px rgba(6,182,212,.3);
}

.tl-card {
  flex: 1;
  padding: 24px 28px;
}
.tl-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}
.tl-type {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--clr-primary-2);
  margin-bottom: 4px;
  display: block;
}
.timeline-item.education .tl-type { color: var(--clr-accent); }
.tl-title { font-size: 1.1rem; font-weight: 700; color: var(--clr-text); }
.tl-place { font-size: 0.88rem; color: var(--clr-text-muted); margin-top: 2px; }
.tl-date  {
  font-size: 0.78rem;
  color: var(--clr-text-dim);
  white-space: nowrap;
  background: rgba(255,255,255,.04);
  border: 1px solid var(--clr-border);
  padding: 4px 10px;
  border-radius: 20px;
  flex-shrink: 0;
}
.tl-desc  { font-size: 0.9rem; color: var(--clr-text-muted); line-height: 1.7; margin-bottom: 14px; }
.tl-tags  { display: flex; flex-wrap: wrap; gap: 6px; }

/* ══════════════════════════════════
   Values
══════════════════════════════════ */
.values-section { background: var(--clr-bg-2); }
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.value-card { padding: 28px; }
.value-icon  { font-size: 2.2rem; margin-bottom: 14px; }
.value-title { font-size: 1rem; font-weight: 700; color: var(--clr-text); margin-bottom: 8px; }
.value-desc  { font-size: 0.88rem; color: var(--clr-text-muted); line-height: 1.7; }

/* ══════════════════════════════════
   Interests
══════════════════════════════════ */
.interests-section { background: var(--clr-bg); }
.interests-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.int-para {
  font-size: 1rem;
  color: var(--clr-text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}
.interests-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.interest-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
}
.int-icon  { font-size: 1.7rem; flex-shrink: 0; }
.int-title { font-size: 0.92rem; font-weight: 700; color: var(--clr-text); margin-bottom: 2px; }
.int-sub   { font-size: 0.78rem; color: var(--clr-text-muted); }

/* ══════════════════════════════════
   Testimonials
══════════════════════════════════ */
.testimonials-section { background: var(--clr-bg-2); }
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
.testimonial-card { padding: 32px; position: relative; }
.quote-icon {
  font-size: 4rem;
  line-height: 1;
  color: var(--clr-primary);
  opacity: .3;
  font-family: Georgia, serif;
  position: absolute;
  top: 16px; left: 24px;
}
.t-quote {
  font-size: 0.92rem;
  color: var(--clr-text-muted);
  line-height: 1.75;
  margin-bottom: 24px;
  padding-top: 24px;
}
.t-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.t-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(99,102,241,.15);
  border: 1px solid rgba(99,102,241,.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}
.t-name { font-size: 0.9rem; font-weight: 700; color: var(--clr-text); }
.t-role { font-size: 0.78rem; color: var(--clr-text-dim); }
.t-stars { margin-left: auto; font-size: 0.85rem; }

/* ══════════════════════════════════
   CTA
══════════════════════════════════ */
.cta-section {
  background: var(--clr-bg);
  position: relative;
  overflow: hidden;
}
.cta-blob {
  position: absolute;
  width: 600px; height: 600px;
  background: rgba(99,102,241,.1);
  border-radius: 50%;
  filter: blur(130px);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
}
.cta-sub {
  font-size: 1rem;
  color: var(--clr-text-muted);
  max-width: 540px;
  margin: 0 auto 36px;
  line-height: 1.75;
}
.cta-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}

/* ══════════════════════════════════
   Shared
══════════════════════════════════ */
.about-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(99,102,241,.12);
  border: 1px solid rgba(99,102,241,.22);
  color: var(--clr-primary-2);
}
.mb-section { margin-bottom: 56px; }

/* ══════════════════════════════════
   Responsive
══════════════════════════════════ */
@media (max-width: 1024px) {
  .interests-grid { grid-template-columns: 1fr; gap: 36px; }
}

@media (max-width: 768px) {
  .page-hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .page-hero-avatar { order: -1; }
  .hero-btns        { justify-content: center; }
  .quick-facts      { width: 100%; }

  .tl-header        { flex-direction: column; gap: 8px; }
  .interests-cards  { grid-template-columns: 1fr; }
  .testimonials-grid{ grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .page-hero { padding-top: 110px; }
  .big-avatar { width: 170px; height: 170px; }
  .big-avatar-emoji { font-size: 4rem; }
  .timeline::before { left: 19px; }
  .tl-dot { width: 40px; height: 40px; font-size: 1rem; }
  .values-grid { grid-template-columns: 1fr; }
}
</style>

<template>
  <div class="portfolio">

    <!-- ─────────────────────────────────────
         HERO
    ───────────────────────────────────── -->
    <section class="hero section-py" id="home">

      <!-- Animated background blobs -->
      <div class="hero-blob hero-blob-1" aria-hidden="true" />
      <div class="hero-blob hero-blob-2" aria-hidden="true" />
      <div class="hero-grid"            aria-hidden="true" />

      <div class="container hero-container">

        <!-- Left: text -->
        <div class="hero-text">

          <div class="hero-greeting">
            <span class="greeting-dot" />
            <span class="font-mono">Hi there, I'm</span>
          </div>

          <h1 class="hero-name">
            Yousef<br>
            <span class="text-gradient">Khaled</span>
          </h1>

          <div class="hero-role font-mono">
            <span class="role-prefix">const role =</span>
            <span class="role-value">"{{ roles[roleIndex] }}"</span>
            <span class="role-cursor">|</span>
          </div>

          <p class="hero-desc">
            Front-End Developer specializing in Vue.js and Nuxt.js, with 1 year of professional experience
            building responsive and scalable web applications. Experienced in e-commerce platforms,
            REST APIs integration, and Arabic/English localization.
          </p>

          <div class="hero-cta">
            <a href="#projects" class="btn-primary-custom" @click.prevent="scrollTo('#projects')">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" class="btn-outline-custom" @click.prevent="scrollTo('#contact')">
              Let's Talk
            </a>
          </div>

          <!-- Stats row -->
          <div class="hero-stats">
            <div v-for="s in stats" :key="s.label" class="hero-stat">
              <span class="stat-num text-gradient">{{ s.value }}</span>
              <span class="stat-lbl">{{ s.label }}</span>
            </div>
          </div>

        </div>

        <!-- Right: avatar card -->
        <div class="hero-visual">
          <div class="avatar-wrapper">
            <div class="avatar-ring" />
            <div class="avatar-img">
              <img src="~/assets/images/avatar.jpeg" alt="Yousef Khaled" class="avatar-photo" />
            </div>

            <!-- Floating badges -->
            <div class="float-badge float-badge-1 glass-card">
              <span>⚡</span> Vue 3 + Nuxt 4
            </div>
            <div class="float-badge float-badge-2 glass-card">
              <span>🎨</span> UI / UX
            </div>
            <div class="float-badge float-badge-3 glass-card">
              <span>🚀</span> Open to work
            </div>
          </div>
        </div>

      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint" @click="scrollTo('#about')">
        <span class="font-mono">scroll</span>
        <div class="scroll-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </div>

    </section>

    <!-- ─────────────────────────────────────
         ABOUT
    ───────────────────────────────────── -->
    <section id="about" class="about-section section-py">
      <div class="container">

        <div class="about-grid">

          <!-- Left: code card -->
          <div class="about-code-card glass-card">
            <div class="code-header">
              <span class="dot dot-r" /><span class="dot dot-y" /><span class="dot dot-g" />
              <span class="font-mono code-filename">yousef.config.ts</span>
            </div>
            <pre class="code-body font-mono"><span class="c-kw">const</span> <span class="c-var">yousef</span> = {
  <span class="c-key">name</span>:       <span class="c-str">"Yousef Khaled"</span>,
  <span class="c-key">role</span>:       <span class="c-str">"Front-End Developer"</span>,
  <span class="c-key">location</span>:  <span class="c-str">"Mansoura, Egypt 🇪🇬"</span>,
  <span class="c-key">experience</span>: <span class="c-num">1</span>,
  <span class="c-key">education</span>: <span class="c-str">"B.Sc. Information Systems"</span>,
  <span class="c-key">company</span>:   <span class="c-str">"Bahiz Technology – Scraapy"</span>,
  <span class="c-key">languages</span>: [
    <span class="c-str">"Arabic"</span>, <span class="c-str">"English"</span>
  ],
  <span class="c-key">passions</span>: [
    <span class="c-str">"Vue.js / Nuxt.js"</span>,
    <span class="c-str">"E-Commerce"</span>,
    <span class="c-str">"Clean UI"</span>
  ],
  <span class="c-key">available</span>: <span class="c-bool">true</span>
}</pre>
          </div>

          <!-- Right: text -->
          <div class="about-text">
            <p class="section-label">About Me</p>
            <h2 class="section-title mb-4">
              Passionate about building<br>
              <span class="text-gradient">great web experiences</span>
            </h2>

            <p class="about-para">
              I'm a <strong>Front-End Developer</strong> specializing in Vue.js and Nuxt.js, with
              <strong>1 year of professional experience</strong> at Bahiz Technology building the
              Scraapy e-commerce platform. I focus on building responsive, scalable web applications
              with clean, maintainable code.
            </p>
            <p class="about-para">
              I have hands-on experience in reusable UI components, REST API integration, state
              management with Pinia, authentication flows, and Arabic/English localization with
              full RTL/LTR support.
            </p>

            <div class="about-tags">
              <span v-for="tag in aboutTags" :key="tag" class="about-tag">{{ tag }}</span>
            </div>

            <div class="about-actions">
              <a href="/cv.pdf" download class="btn-primary-custom">
                Download CV
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
              <a href="#contact" class="btn-outline-custom" @click.prevent="scrollTo('#contact')">Contact Me</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────
         SKILLS
    ───────────────────────────────────── -->
    <section id="skills" class="skills-section section-py">
      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">What I Know</p>
          <h2 class="section-title">
            My <span class="text-gradient">Tech Stack</span>
          </h2>
          <p class="section-sub">Technologies I work with every day to build modern products</p>
        </div>

        <!-- Category tabs -->
        <div class="skill-tabs">
          <button
            v-for="cat in skillCategories"
            :key="cat"
            class="skill-tab"
            :class="{ active: activeSkillCat === cat }"
            @click="activeSkillCat = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Skills grid -->
        <div class="skills-grid">
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="skill-card glass-card"
          >
            <div class="skill-icon">{{ skill.icon }}</div>
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar-wrap">
              <div class="skill-bar" :style="{ width: skill.level + '%' }" />
            </div>
            <span class="skill-level font-mono">{{ skill.level }}%</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         PROJECTS
    ───────────────────────────────────── -->
    <section id="projects" class="projects-section section-py">
      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">My Work</p>
          <h2 class="section-title">
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <p class="section-sub">A selection of things I've built recently</p>
        </div>

        <!-- Featured project (large) -->
        <div class="featured-project glass-card mb-4">
          <div class="fp-visual" :style="{ background: projects[0].gradient }">
            <img src="~/assets/images/hero-Clysw3YR.png" alt="Yousef Khaled" class="fp-avatar" />
            <span class="fp-badge">Featured</span>
          </div>
          <div class="fp-info">
            <span class="font-mono project-num">01.</span>
            <h3 class="fp-title">{{ projects[0].title }}</h3>
            <p class="fp-desc">{{ projects[0].description }}</p>
            <div class="fp-tags">
              <span v-for="t in projects[0].tags" :key="t" class="tech-tag">{{ t }}</span>
            </div>
            <div class="fp-links">
              <a :href="projects[0].live" target="_blank" class="btn-primary-custom">
                Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              <a :href="projects[0].github" target="_blank" class="btn-outline-custom">
                GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Other projects grid -->
        <div class="projects-grid">
          <div
            v-for="(project, i) in projects.slice(1)"
            :key="project.title"
            class="project-card glass-card"
          >
            <div class="pc-visual" :style="{ background: project.gradient }">
              <span class="pc-emoji">{{ project.emoji }}</span>
            </div>
            <div class="pc-body">
              <span class="font-mono project-num">0{{ i + 2 }}.</span>
              <h4 class="pc-title">{{ project.title }}</h4>
              <p class="pc-desc">{{ project.description }}</p>
              <div class="pc-tags">
                <span v-for="t in project.tags" :key="t" class="tech-tag">{{ t }}</span>
              </div>
              <div class="pc-links">
                <a :href="project.live"   target="_blank" class="pc-link">Live ↗</a>
                <a :href="project.github" target="_blank" class="pc-link">GitHub ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="https://github.com" target="_blank" class="btn-outline-custom">
            See All Projects on GitHub ↗
          </a>
        </div>

      </div>
    </section>

    <!-- ─────────────────────────────────────
         CONTACT
    ───────────────────────────────────── -->
    <section id="contact" class="contact-section section-py">

      <div class="contact-blob" aria-hidden="true" />

      <div class="container">

        <div class="text-center mb-section">
          <p class="section-label">Get In Touch</p>
          <h2 class="section-title">
            Let's Work <span class="text-gradient">Together</span>
          </h2>
          <p class="section-sub">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div class="contact-grid">

          <!-- Info cards -->
          <div class="contact-info">

            <div v-for="item in contactInfo" :key="item.label" class="contact-info-card glass-card">
              <div class="ci-icon">{{ item.icon }}</div>
              <div>
                <p class="ci-label">{{ item.label }}</p>
                <a :href="item.href" class="ci-value">{{ item.value }}</a>
              </div>
            </div>

            <div class="contact-social glass-card">
              <p class="ci-label mb-3">Find me on</p>
              <div class="social-row">
                <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" :aria-label="s.label" class="social-btn-sm">
                  <span v-html="s.icon" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Yousef Khaled — Frontend Developer' })

/* ── Smooth scroll ── */
function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ── Hero role typer ── */
const roles = ['Front-End Developer', 'Vue.js & Nuxt.js Expert', 'UI Component Builder', 'E-Commerce Developer']
const roleIndex = ref(0)
onMounted(() => {
  setInterval(() => { roleIndex.value = (roleIndex.value + 1) % roles.length }, 2800)
})

/* ── Stats ── */
const stats = [
  { value: '1+',  label: 'Years Exp.' },
  { value: '2+',  label: 'Projects' },
  { value: '1',   label: 'Company' },
  { value: '2027', label: 'Graduation' },
]

/* ── About tags ── */
const aboutTags = ['Vue 3', 'Nuxt.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Bootstrap', 'PrimeVue', 'Pinia', 'REST APIs', 'Git', 'SEO', 'RTL/LTR', 'Axios']

/* ── Skills ── */
const skillCategories = ['All', 'Frontend', 'Tools']
const activeSkillCat  = ref('All')

const skills = [
  { name: 'Vue.js',           icon: '💚', level: 90, cat: 'Frontend' },
  { name: 'Nuxt.js',          icon: '🟢', level: 88, cat: 'Frontend' },
  { name: 'JavaScript ES6+',  icon: '�', level: 88, cat: 'Frontend' },
  { name: 'HTML5',            icon: '🧡', level: 95, cat: 'Frontend' },
  { name: 'CSS3',             icon: '�', level: 92, cat: 'Frontend' },
  { name: 'Bootstrap',        icon: '💜', level: 88, cat: 'Frontend' },
  { name: 'PrimeVue',         icon: '🔵', level: 80, cat: 'Frontend' },
  { name: 'Pinia',            icon: '🍍', level: 82, cat: 'Frontend' },
  { name: 'REST APIs / Axios',icon: '�', level: 85, cat: 'Frontend' },
  { name: 'Responsive Design',icon: '📱', level: 90, cat: 'Frontend' },
  { name: 'Git / GitHub',     icon: '🐙', level: 85, cat: 'Tools'    },
  { name: 'VS Code',          icon: '💙', level: 95, cat: 'Tools'    },
  { name: 'SEO Optimization', icon: '�', level: 75, cat: 'Tools'    },
  { name: 'RTL / LTR',        icon: '🌐', level: 88, cat: 'Tools'    },
]

const filteredSkills = computed(() =>
  activeSkillCat.value === 'All'
    ? skills
    : skills.filter(s => s.cat === activeSkillCat.value)
)

/* ── Projects ── */
const projects = [
  {
    title: 'Scraapy — E-Commerce Platform',
    description: 'Full e-commerce platform built at Bahiz Technology. Includes product pages, cart, search, checkout flows, order management, and Arabic/English localization with RTL/LTR support.',
    tags: ['Nuxt.js', 'Vue 3', 'Pinia', 'Bootstrap', 'REST APIs', 'Axios'],
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    live: 'https://www.scraapypro.sa/',
    github: 'https://github.com/yousefkhaled127',
  },
  {
    title: 'Raw Rentals',
    description: 'Real estate rental platform with full Arabic RTL support. Features property listings, search & filter, and a smooth user experience across all devices.',
    tags: ['Vue 3', 'Nuxt.js', 'Bootstrap', 'REST APIs', 'RTL Support'],
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    live: 'https://rawrentalesnzuh.vercel.app/ar',
    github: 'https://github.com/yousefkhaled127',
  },
]

/* ── Contact info ── */
const contactInfo = [
  { icon: '📧', label: 'Email',    value: 'yousefkhaled8050@gmail.com', href: 'mailto:yousefkhaled8050@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Mansoura, Egypt 🇪🇬',        href: '#' },
  { icon: '�', label: 'Phone',    value: '01028810359',                 href: 'tel:+201028810359' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yousefkhaled127',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
]
</script>

<style scoped>
/* ══════════════════════════════════
   Shared helpers
══════════════════════════════════ */
.mb-section { margin-bottom: 56px; }
.section-sub {
  color: var(--clr-text-muted);
  font-size: 1rem;
  margin-top: 12px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}
.w-100 { width: 100%; justify-content: center; }

/* ══════════════════════════════════
   HERO
══════════════════════════════════ */
.hero {
  position: relative;
  overflow: hidden;
  padding-top: 140px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* bg blobs */
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.hero-blob-1 {
  width: 600px; height: 600px;
  background: rgba(99,102,241,0.18);
  top: -150px; right: -100px;
}
.hero-blob-2 {
  width: 400px; height: 400px;
  background: rgba(6,182,212,0.12);
  bottom: 0; left: -80px;
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.hero-container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* greeting */
.hero-greeting {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  margin-bottom: 16px;
}
.greeting-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34,197,94,.25);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
  50%      { box-shadow: 0 0 0 7px rgba(34,197,94,.0); }
}

.hero-name {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

/* role typer */
.hero-role {
  font-size: 1rem;
  color: var(--clr-text-muted);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.role-prefix { color: var(--clr-primary-2); }
.role-value  { color: var(--clr-accent); }
.role-cursor {
  color: var(--clr-primary);
  animation: blink 1s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

.hero-desc {
  font-size: 1.05rem;
  color: var(--clr-text-muted);
  line-height: 1.75;
  max-width: 500px;
  margin-bottom: 36px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 44px;
}

/* stats */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--clr-border);
}
.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stat-num {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1;
}
.stat-lbl {
  font-size: 0.78rem;
  color: var(--clr-text-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* avatar */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
}
.avatar-ring {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: var(--gradient-hero) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: spin 12s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--gradient-card);
  border: 1px solid var(--clr-border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* floating badges */
.float-badge {
  position: absolute;
  padding: 8px 14px;
  border-radius: 40px;
  font-size: 0.78rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  animation: float 4s ease-in-out infinite;
}
.float-badge-1 { top: 10px;    right: -30px; animation-delay: 0s; }
.float-badge-2 { bottom: 40px; left: -40px;  animation-delay: 1s; }
.float-badge-3 { bottom: -10px; right: 10px; animation-delay: 2s; }
@keyframes float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

/* scroll hint */
.scroll-hint {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 48px;
  font-size: 0.75rem;
  color: var(--clr-text-dim);
  cursor: pointer;
  transition: color 0.2s;
}
.scroll-hint:hover { color: var(--clr-primary-2); }
.scroll-arrow {
  width: 34px; height: 34px;
  border: 1px solid var(--clr-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s ease-in-out infinite;
}
@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(5px); }
}

/* ══════════════════════════════════
   ABOUT
══════════════════════════════════ */
.about-section { background: var(--clr-bg-2); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* code card */
.about-code-card {
  padding: 0;
  overflow: hidden;
}
.code-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--clr-border);
}
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-r { background: #ff5f57; }
.dot-y { background: #febc2e; }
.dot-g { background: #28c840; }
.code-filename { font-size: 0.8rem; color: var(--clr-text-muted); margin-left: 8px; }

.code-body {
  padding: 24px;
  font-size: 0.85rem;
  line-height: 1.9;
  white-space: pre;
  overflow-x: auto;
  margin: 0;
}
.c-kw  { color: #c792ea; }
.c-var { color: #82aaff; }
.c-key { color: #f78c6c; }
.c-str { color: #c3e88d; }
.c-num { color: #f78c6c; }
.c-bool{ color: #ff5874; }

.about-para {
  color: var(--clr-text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 16px;
}
.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.about-tag {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 500;
  background: rgba(99,102,241,0.12);
  border: 1px solid rgba(99,102,241,0.25);
  color: var(--clr-primary-2);
}
.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* ══════════════════════════════════
   SKILLS
══════════════════════════════════ */
.skill-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}
.skill-tab {
  padding: 8px 22px;
  border-radius: 50px;
  border: 1.5px solid var(--clr-border);
  background: transparent;
  color: var(--clr-text-muted);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
}
.skill-tab:hover  { border-color: var(--clr-primary); color: var(--clr-text); }
.skill-tab.active { background: var(--gradient-hero); border-color: transparent; color: #fff; }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
}
.skill-card {
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.skill-icon  { font-size: 2rem; }
.skill-name  { font-size: 0.88rem; font-weight: 600; color: var(--clr-text); }
.skill-bar-wrap {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 2px;
  overflow: hidden;
}
.skill-bar {
  height: 100%;
  background: var(--gradient-hero);
  border-radius: 2px;
  transition: width 0.8s ease;
}
.skill-level { font-size: 0.75rem; color: var(--clr-text-dim); }

/* ══════════════════════════════════
   PROJECTS
══════════════════════════════════ */
.projects-section { background: var(--clr-bg-2); }

/* Featured */
.featured-project {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  overflow: hidden;
}
.fp-visual {
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.fp-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  display: block;
}
.fp-badge  {
  position: absolute;
  top: 16px; left: 16px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
}
.fp-info {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}
.fp-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--clr-text);
}
.fp-desc { font-size: 0.95rem; color: var(--clr-text-muted); line-height: 1.7; }
.fp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.fp-links { display: flex; flex-wrap: wrap; gap: 12px; }

/* Project grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.project-card { overflow: hidden; padding: 0; }
.pc-visual {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pc-emoji { font-size: 3.5rem; }
.pc-body  { padding: 20px; }
.pc-title { font-size: 1.1rem; font-weight: 700; margin: 6px 0 8px; color: var(--clr-text); }
.pc-desc  { font-size: 0.85rem; color: var(--clr-text-muted); line-height: 1.65; margin-bottom: 12px; }
.pc-tags  { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.pc-links { display: flex; gap: 16px; }
.pc-link  {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--clr-primary-2);
  transition: color 0.2s;
}
.pc-link:hover { color: var(--clr-accent); }

/* Shared tech tag */
.tech-tag {
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  background: rgba(99,102,241,0.12);
  border: 1px solid rgba(99,102,241,0.22);
  color: var(--clr-primary-2);
}
.project-num { font-size: 0.82rem; color: var(--clr-accent); }

/* ══════════════════════════════════
   CONTACT
══════════════════════════════════ */
.contact-section {
  position: relative;
  overflow: hidden;
}
.contact-blob {
  position: absolute;
  width: 500px; height: 500px;
  background: rgba(99,102,241,0.1);
  border-radius: 50%;
  filter: blur(120px);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.contact-grid {
  display: flex;
  justify-content: center;
}

.contact-info { display: flex; flex-direction: column; gap: 16px; min-width: 360px; max-width: 480px; width: 100%; }

.contact-info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
}
.ci-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(99,102,241,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.ci-label { font-size: 0.78rem; color: var(--clr-text-dim); margin-bottom: 3px; }
.ci-value {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--clr-text);
  transition: color 0.2s;
}
.ci-value:hover { color: var(--clr-primary-2); }

.contact-social { padding: 20px 24px; }
.social-row { display: flex; gap: 10px; }
.social-btn-sm {
  width: 40px; height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--clr-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--clr-text-muted);
  transition: all 0.25s;
}
.social-btn-sm:hover {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.4);
  color: var(--clr-primary-2);
  transform: translateY(-2px);
}

/* ══════════════════════════════════
   RESPONSIVE
══════════════════════════════════ */

/* ── Large tablets / small desktops ── */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .featured-project { grid-template-columns: 1fr; }
  .fp-visual { height: 260px; }
  .contact-grid { justify-content: center; }
}

/* ── Tablets ── */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  .hero-visual {
    display: flex;
    justify-content: center;
    order: -1;
  }
  .avatar-wrapper { width: 200px; height: 200px; }
  .float-badge { display: none; }
  .hero-desc   { margin: 0 auto 32px; }
  .hero-cta    { justify-content: center; }
  .hero-stats  { justify-content: center; }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .about-code-card { order: 2; }
  .about-text      { order: 1; }

  .projects-grid { grid-template-columns: repeat(2, 1fr); }

  .contact-info { min-width: unset; max-width: 100%; }
}

/* ── Mobile ── */
@media (max-width: 576px) {
  .hero { padding-top: 100px; min-height: auto; }
  .hero-name { font-size: 2.2rem; }
  .hero-role { font-size: 0.82rem; flex-wrap: wrap; }
  .hero-stats { gap: 16px; }
  .stat-num   { font-size: 1.3rem; }
  .hero-cta   { flex-direction: column; align-items: center; }
  .hero-cta .btn-primary-custom,
  .hero-cta .btn-outline-custom { width: 100%; justify-content: center; }

  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .skill-tab   { padding: 6px 14px; font-size: 0.8rem; }

  .featured-project { grid-template-columns: 1fr; }
  .fp-visual  { height: 200px; }
  .fp-info    { padding: 20px; }
  .fp-title   { font-size: 1.3rem; }

  .projects-grid { grid-template-columns: 1fr; }

  .section-py { padding-top: 56px; padding-bottom: 56px; }
}
</style>

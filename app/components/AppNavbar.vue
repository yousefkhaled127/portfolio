<template>
  <header class="navbar-wrapper" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <nav class="navbar-inner container">

      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo" @click="closeMenu">
        <span class="logo-bracket font-mono">&lt;</span>
        <span class="logo-name">Yousef</span>
        <span class="logo-dot text-gradient">.</span>
        <span class="logo-bracket font-mono">/&gt;</span>
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="nav-link-item"
            :class="{ active: activeSection === link.href.slice(1) }"
            @click.prevent="scrollTo(link.href)"
          >
            <span class="link-num font-mono">{{ link.num }}</span>
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <a
        href="#contact"
        class="btn-primary-custom hire-btn"
        @click.prevent="scrollTo('#contact')"
      >
        Hire Me ✦
      </a>

      <!-- Mobile Hamburger -->
      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>

    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-menu">
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              :class="{ active: activeSection === link.href.slice(1) }"
              @click.prevent="scrollTo(link.href); closeMenu()"
            >
              <span class="link-num font-mono">{{ link.num }}</span>
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="mobile-cta">
          <a
            href="#contact"
            class="btn-primary-custom"
            @click.prevent="scrollTo('#contact'); closeMenu()"
          >
            Hire Me ✦
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled    = ref(false)
const menuOpen      = ref(false)
const activeSection = ref('home')

const navLinks = [
  { num: '01.', label: 'About',    href: '#about'    },
  { num: '02.', label: 'Skills',   href: '#skills'   },
  { num: '03.', label: 'Projects', href: '#projects' },
  { num: '04.', label: 'Contact',  href: '#contact'  },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  menuOpen.value = false
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  /* scroll → isScrolled + active section */
  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  const onScroll = () => {
    isScrolled.value = window.scrollY > 60

    /* detect which section is in view */
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 120) {
        activeSection.value = id
        break
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  /* close menu on outside click */
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (menuOpen.value && !target.closest('.navbar-wrapper')) {
      menuOpen.value = false
    }
  })
})
</script>

<style scoped>
/* ── Wrapper ── */
.navbar-wrapper {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: all 0.35s ease;
}

.navbar-wrapper.scrolled {
  padding: 10px 0;
  background: rgba(10, 15, 30, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

/* ── Inner layout ── */
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* ── Logo ── */
.nav-logo {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 1px;
  transition: opacity 0.2s;
  flex-shrink: 0;
}
.nav-logo:hover  { opacity: 0.8; }
.logo-bracket    { color: var(--clr-text-muted); font-size: 1rem; }

/* ── Desktop nav links ── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  transition: all 0.25s ease;
  border: 1px solid transparent;
  white-space: nowrap;
}
.nav-link-item:hover,
.nav-link-item.active {
  color: var(--clr-text);
  background: rgba(99,102,241,0.12);
  border-color: rgba(99,102,241,0.25);
}
.nav-link-item.active { color: var(--clr-primary-2); }

.link-num { font-size: 0.72rem; color: var(--clr-primary-2); }

/* ── CTA button (desktop only) ── */
.hire-btn {
  display: none;
  flex-shrink: 0;
  font-size: 0.88rem;
  padding: 9px 22px;
}

/* ── Hamburger ── */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: rgba(99,102,241,0.1);
  border: 1px solid rgba(99,102,241,0.25);
  border-radius: 10px;
  cursor: pointer;
  padding: 9px;
  transition: all 0.25s;
  flex-shrink: 0;
}
.hamburger:hover { background: rgba(99,102,241,0.2); }
.hamburger span {
  display: block;
  height: 2px;
  background: var(--clr-text);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile Menu ── */
.mobile-menu {
  background: rgba(8, 12, 26, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--clr-border);
  padding: 16px 0 24px;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-menu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  transition: all 0.2s;
  border: 1px solid transparent;
}
.mobile-menu a:hover,
.mobile-menu a.active {
  color: var(--clr-text);
  background: rgba(99,102,241,0.1);
  border-color: rgba(99,102,241,0.2);
}
.mobile-menu a.active { color: var(--clr-primary-2); }

.mobile-cta {
  padding: 16px 16px 0;
  border-top: 1px solid var(--clr-border);
  margin-top: 12px;
}
.mobile-cta .btn-primary-custom {
  width: 100%;
  justify-content: center;
  font-size: 0.95rem;
  padding: 12px;
}

/* ── Responsive breakpoints ── */

/* show desktop nav from md up */
@media (min-width: 768px) {
  .nav-links  { display: flex; }
  .hire-btn   { display: inline-flex; }
  .hamburger  { display: none; }
}

/* hide desktop nav on mobile */
@media (max-width: 767px) {
  .nav-links { display: none; }
  .hire-btn  { display: none; }
}

/* slightly smaller links on medium screens */
@media (min-width: 768px) and (max-width: 1024px) {
  .nav-link-item { padding: 6px 10px; font-size: 0.82rem; }
  .link-num      { display: none; }
  .hire-btn      { padding: 8px 16px; font-size: 0.82rem; }
}

/* ── Transitions ── */
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.28s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to     { opacity: 0; transform: translateY(-10px); }
</style>

<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-inner">

        <!-- Logo + tagline -->
        <div class="footer-brand">
          <span class="nav-logo font-mono">
            <span class="logo-bracket">&lt;</span>Yousef<span class="text-gradient">.</span><span class="logo-bracket">/&gt;</span>
          </span>
          <p class="footer-tagline">
            Building digital experiences with clean code & creative design.
          </p>
        </div>

        <!-- Nav -->
        <nav class="footer-nav">
          <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>

        <!-- Social -->
        <div class="footer-social">
          <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label" target="_blank" rel="noopener" class="social-btn">
            <span v-html="s.icon" />
          </a>
        </div>

      </div>

      <div class="footer-bottom">
        <span class="font-mono">© {{ year }} Yousef Khaled — All rights reserved.</span>
        <span class="footer-made">Made with <span class="text-gradient">♥</span> using Nuxt 4</span>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  },
]
</script>

<style scoped>
.footer {
  background: var(--clr-bg-2);
  border-top: 1px solid var(--clr-border);
  padding: 60px 0 32px;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--clr-border);
}

/* Brand */
.footer-brand {
  max-width: 300px;
}
.nav-logo {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--clr-text);
  display: inline-flex;
  gap: 2px;
  margin-bottom: 12px;
}
.logo-bracket { color: var(--clr-text-muted); }
.footer-tagline {
  font-size: 0.88rem;
  color: var(--clr-text-muted);
  line-height: 1.6;
}

/* Nav */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-nav a {
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  transition: color 0.2s;
}
.footer-nav a:hover { color: var(--clr-primary-2); }

/* Social */
.footer-social {
  display: flex;
  gap: 10px;
}
.social-btn {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--clr-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-text-muted);
  transition: all 0.25s ease;
}
.social-btn:hover {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.4);
  color: var(--clr-primary-2);
  transform: translateY(-2px);
}

/* Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 28px;
  font-size: 0.82rem;
  color: var(--clr-text-dim);
}
.footer-made { color: var(--clr-text-dim); }

@media (max-width: 640px) {
  .footer-inner { flex-direction: column; gap: 28px; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>

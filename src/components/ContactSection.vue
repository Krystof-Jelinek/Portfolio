<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import emailIcon from '@/assets/email-icon.png'
import phoneIcon from '@/assets/phone-icon.png'
import linkedinIcon from '@/assets/linkedin-icon.png'

const { t } = useI18n()
</script>

<template>
  <div
    style="
      height: 500px;
      background: red;
      color: white;
      font-size: 50px;
    "
  >
    CONTACT TEST
  </div>

  <footer id="contact" class="footer">
    <div class="container">
      <div class="contact-wrapper">

        <h2>{{ t('contact.title') }}</h2>

        <p>
          {{ t('contact.subtitle') }}
        </p>

        <div class="contact-grid">

          <a
            href="mailto:krys.jelinek@seznam.cz"
            class="contact-card"
          >
            <img
              :src="emailIcon"
              alt="Email"
              class="contact-icon"
            />

            <h3>{{ t('contact.email') }}</h3>

            <p>krys.jelinek@seznam.cz</p>
          </a>

          <a  href="tel:+420777737241"3  class="contact-card"4>
            <img
              :src="phoneIcon"
              alt="Phone"
              class="contact-icon"
            />

            <h3>{{ t('contact.phone') }}</h3>

            <p>+420 777 737 241</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kry%C5%A1tof-jel%C3%ADnek-b51296245/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <img
              :src="linkedinIcon"
              alt="LinkedIn"
              class="contact-icon"
            />

            <h3>LinkedIn</h3>

            <p>
              {{ t('contact.linkedin') }}
            </p>
          </a>

        </div>

        <p class="thanks">
          {{ t('contact.thankYou') }}
        </p>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #E9F1FA;
  padding: 3rem 1rem;
  scroll-margin-top: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-wrapper {
  background: #F8FBFF;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0px 6px 15px rgba(0, 171, 228, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.contact-wrapper h2 {
  font-size: 2.5rem;
  color: #333;
}

.contact-wrapper p {
  color: #666;
  text-align: center;
}

.contact-grid {
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.contact-card {
  flex: 1;

  background: white;

  padding: 2rem 1.5rem;

  border-radius: 10px;

  text-align: center;

  text-decoration: none;

  box-shadow: 0px 4px 10px rgba(0, 171, 228, 0.3);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);

  box-shadow: 0px 8px 20px rgba(0, 171, 228, 0.5);
}

.contact-card[href^="mailto"]:hover {
  background-color: rgba(255, 0, 0, 0.1);
}

.contact-card[href^="tel"]:hover {
  background-color: rgba(0, 255, 0, 0.1);
}

.contact-card[href*="linkedin"]:hover {
  background-color: rgba(0, 0, 255, 0.1);
}

.contact-icon {
  width: 60px;
  height: 60px;

  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.5rem;
  color: #333;

  margin-bottom: 0.5rem;
}

.contact-card p {
  color: #666;
}

.thanks {
  max-width: 800px;
}

@media (max-width: 768px) {
  .contact-wrapper {
    padding: 2rem;
  }

  .contact-wrapper h2 {
    font-size: 2rem;
  }

  .contact-grid {
    flex-direction: column;
  }

  .contact-card {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
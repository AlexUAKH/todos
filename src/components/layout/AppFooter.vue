<template>
  <footer class="footer">
    <div class="_container">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul class="footer__links">
            <li class="footer__link" v-for="link in links" :key="link.title">
              <router-link :to="link.to">{{ link.title }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__copyright">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { title: "Terms & Conditions", to: "/" },
  { title: "Privacy", to: "/" },
  { title: "Notice at Collection", to: "/" },
  { title: "CA Privacy Hub", to: "/" },
  { title: "Contact Us", to: "/" },
  { title: "Sitemap", to: "/" }
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.footer {
  background: $footer-background;
  &__content {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $white;
  }

  &__logo {
    flex: 0 0 56px;
    width: 56px;
    height: 35px;
    margin-right: 30px;

    & img {
      max-width: 100%;
    }
  }

  &__links {
    display: flex;
    flex-wrap: wrap;

    & li:not(:last-child) {
      margin-right: 20px;
    }
  }

  &__link {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
    padding: 2px;
  }

  &__copyright {
    color: $white;
    margin: 20px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.6%;
  }
  @media (min-width: $md) {
    &__content {
      padding: 30px 0;
    }
    &__copyright {
      margin: 35px 0;
    }
  }
}
</style>

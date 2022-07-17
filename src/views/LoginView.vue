<template>
  <main class="main">
    <div class="main__head">
      <div class="_container">
        <div class="main__title">
          Welcome to <br />Business Analytics Online
        </div>
      </div>
    </div>
    <div class="_container">
      <div class="main__content">
        <LoginForm class="main__login" />
        <p class="main__text">
          <span class="main__text_bold">Business Analytics</span> — a new,
          convenient tool for managing and forecasting your business
          performance, which will help analyze your own finances and cash flows,
          visualize your reporting, business processes, KPI's
        </p>
        <div class="main__advantages">
          <div class="advantage__item">
            <div class="advantage__title">Interactive Reporting</div>
            <div class="advantage__text">
              In just a few clicks, you can connect your data from 1C, CRM
              (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay),
              Logistic (Nova Poshta), Google Analytics and many more systems
              that reflect different aspects of business activities.
            </div>
          </div>
          <div class="advantage__item">
            <div class="advantage__title">Automated data updates</div>
            <div class="advantage__text">
              The application automatically updates and structures the data in
              just 60 seconds, saving you time and money.
            </div>
          </div>
          <div class="advantage__item">
            <div class="advantage__title">Data Security</div>
            <div class="advantage__text">
              The Bank guarantees the safety of your personal data, ensuring
              their integrity and confidentiality.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.main {
  padding-bottom: 20px;
  background: $white;
  &__head {
    height: 245px;
    background: url("@/assets/img/background.png") no-repeat 20% 0;
    background-size: cover;
    display: flex;
    align-items: end;
  }
  &__title {
    max-width: 630px;
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 1.6;
    margin-bottom: 30px;
    color: $white;
  }
  &__content {
    margin-top: 20px;
  }
  &__login {
    margin: 0 auto 20px;
  }
  &__text {
    &_bold {
      font-weight: 700;
    }
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: $dark;
  }
  &__advantages {
    margin-top: 15px;
  }
  @media (min-width: $md) {
    &__head {
      height: 300px;
      background-position: 0;
    }
    &__title {
      max-width: 630px;
      font-size: 40px;
      margin-bottom: 35px;
    }
  }
  @media (min-width: $lg) {
    padding-bottom: 40px;
    &__head {
      background-position: 0 50%;
    }
    &__title {
      font-size: 55px;
      margin-bottom: 45px;
    }
    &__content {
      max-width: 665px;
      margin-top: 40px;
    }
    &__login {
      width: 32%;
      margin-bottom: 0;
      position: absolute;
      transform: translate(0, -50%);
      top: 20px;
      right: 16px;
      z-index: 10;
    }
    &__text {
      padding-left: 10px;
    }
  }
  @media (min-width: $xl) {
    &__head {
      height: 457px;
      background-position: 0;
    }
    &__title {
      margin-bottom: 70px;
    }
    &__login {
      width: 480px;
    }
  }
}
.advantage {
  &__item {
    padding: 0 0 0 35px;
    position: relative;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 23px;
      height: 17px;
      background: url("@/assets/img/checkedIcon.svg") 0 0;
      top: 4px;
      left: 6px;
    }
  }
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.6;
    color: $dark;
    margin-bottom: 0;
  }
  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    color: $dark;
  }
  @media (min-width: $lg) {
    &__item {
      padding: 0 0 0 48px;
      max-width: 630px;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &::before {
        left: 10px;
      }
    }
    &__title {
      margin-bottom: 10px;
    }
  }
}
._container {
  position: relative;
}
</style>

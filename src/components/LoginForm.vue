<template>
  <div class="card">
    <div class="card__content">
      <div v-if="error" class="card__error">Name or password are incorrect</div>
      <form @submit.prevent="submit" class="card__form" autocomplete="off">
        <BaseInput
          label="Name"
          type="text"
          v-model="form.name.value"
          :invalid="!form.name.valid && form.name.touched"
          @blur="form.name.setTouched()"
          :errors="form.name.errors"
        />
        <BaseInput
          label="Password"
          type="password"
          v-model="form.password.value"
          :invalid="!form.password.valid && form.password.touched"
          @blur="form.password.setTouched()"
          :errors="form.password.errors"
        />
        <BaseButton
          :height="53"
          fullWidth
          :loading="loading"
          :disabled="loading || !valid"
        >
          Login
        </BaseButton>
      </form>
      <router-link to="/login" class="card__link">Forgot password</router-link>
    </div>
    <div class="card__footer">
      <router-link to="/">Register now</router-link>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useForm } from "@/hooks/form";
import { minLength, required } from "@/helpers/validators";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const error = ref(false);
const loading = ref(false);
const form = useForm({
  name: {
    value: "",
    validators: { required }
  },
  password: {
    value: "",
    validators: { required, minLength: minLength(5) }
  }
});
const router = useRouter();

const valid = computed(() => {
  return Object.values(form).every((control) => control.valid);
});

const submit = () => {
  if (valid.value) {
    error.value = false;
    loading.value = true;
    setTimeout(() => {
      if (form.name.value === "Admin" && form.password.value === "12345") {
        console.log("success");
        loading.value = false;
        router.push("/todo");
      } else {
        error.value = true;
      }
      loading.value = false;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.card {
  max-width: 480px;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  &__error {
    color: $error;
    margin-bottom: 5px;
    text-align: center;
  }
  &__content {
    padding: 30px 30px 25px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 20px;
  }

  &__link {
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.15;
    color: #056dae;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 63px;
    background-color: $footer-background;
    color: $dark;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 1.2;

    & a {
      color: inherit;
    }
  }
}
</style>

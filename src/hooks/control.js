import { reactive, ref, watch } from "vue";

export const useControl = (formControl = {}) => {
  const valid = ref(false);
  const value = ref(formControl.value);
  const touched = ref(false);
  const errors = reactive({});

  const assign = (val) => {
    valid.value = true;
    Object.keys(formControl.validators ?? {}).forEach((validator) => {
      const { isValid, error } = formControl.validators[validator](val);
      errors[validator] = error;
      if (!isValid) {
        valid.value = false;
      }
    });
  };
  watch(value, assign);
  assign(formControl.value);
  const setTouched = () => {
    touched.value = true;
  };
  return {
    valid,
    value,
    errors,
    touched,
    setTouched
  };
};

import { reactive, computed } from "vue";
import { useControl } from "@/hooks/control";

export const useForm = (formControls = {}) => {
  const form = reactive({});
  Object.entries(formControls).forEach(([key, value]) => {
    form[key] = useControl(value);
  });

  form["valid"] = computed(() => {
    return Object.keys(form)
      .filter((key) => key !== "valid")
      .every((key) => form[key].valid);
  });
  return form;
};

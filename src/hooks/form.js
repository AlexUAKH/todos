import { reactive } from "vue";
import { useControl } from "@/hooks/control";

export const useForm = (formControls = {}) => {
  const form = reactive({});
  Object.entries(formControls).forEach(([key, value]) => {
    form[key] = useControl(value);
  });

  return form;
};

// js/app.js
// Requiere que Vue (global build) y data.js (cvData) se carguen antes.
const { createApp, ref, watch, watchEffect } = Vue;

createApp({
  setup() {
    const cv = cvData;

    // --- Tema claro / escuro ---
    const getInitialTheme = () => {
      try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
      } catch (_) {}
      return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const theme = ref(getInitialTheme());

    watchEffect(() => {
      document.documentElement.dataset.theme = theme.value;
      try {
        localStorage.setItem("theme", theme.value);
      } catch (_) {}
    });

    const toggleTheme = () => {
      theme.value = theme.value === "dark" ? "light" : "dark";
    };

    // --- Modal de proyecto (<dialog>) ---
    const selected = ref(null);
    const dialog = ref(null);

    watch(selected, (project) => {
      if (project && dialog.value && !dialog.value.open) dialog.value.showModal();
    });


    const onBackdrop = (event) => {
      if (event.target === dialog.value) dialog.value.close();
    };

    return { cv, theme, toggleTheme, selected, dialog, onBackdrop };
  },
}).mount("#app");
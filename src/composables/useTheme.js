import { ref, onMounted } from "vue";

export default function useTheme() {
  // Set dark as the default theme
  const theme = ref("dark");

  // Set theme class on body
  const updateThemeClasses = (newTheme) => {
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = theme.value === "dark" ? "light" : "dark";
    theme.value = newTheme;
    sessionStorage.setItem("theme", newTheme);
    updateThemeClasses(newTheme);
  };

  // Initialize theme
  onMounted(() => {
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      // Check OS preference only if no saved theme exists
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Only override default if OS prefers light mode
      if (!prefersDark) {
        theme.value = "light";
      }
    }

    updateThemeClasses(theme.value);
  });

  return {
    theme,
    toggleTheme,
  };
}

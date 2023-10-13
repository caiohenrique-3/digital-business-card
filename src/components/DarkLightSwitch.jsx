import { useEffect, useState } from "react";

function DarkLightSwitch() {
  const darkTheme = {
    "--bg-color": "#0d1321",
    "--header-bg-color": "#1d2d44",
    "--photo-bg-color": "#1d2d44",
    "--regular-text-color": "white",
    "--text-color-2": "#909090",
    "--link-text-color": "#add8e6",
    "--header-text-color": "white",
    "--photo-border-color": "white",
    "--button-bg-color": "white",
    "--button-color": "black",
    "--link-decoration-color": "white",
    "--focus-outline-color": "purple",
    "--media-icon-color": "white",
  };

  const lightTheme = {
    "--bg-color": "white",
    "--header-bg-color": "black",
    "--header-text-color": "white",
    "--photo-bg-color": "#ccc",
    "--regular-text-color": "black",
    "--text-color-2": "#202020",
    "--link-text-color": "blue",
    "--link-decoration-color": "black",
    "--photo-border-color": "black",
    "--button-bg-color": "black",
    "--button-color": "white",
    "--focus-outline-color": "red",
    "--media-icon-color": "black",
  };

  const isDarkModeEnabled = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkModeEnabled, setDarkModeEnabled] = useState(isDarkModeEnabled);

  function toggleTheme() {
    const isDarkMode = !darkModeEnabled;
    const theme = isDarkMode ? darkTheme : lightTheme;
    const root = document.documentElement;

    for (const [variable, value] of Object.entries(theme)) {
      root.style.setProperty(variable, value);
    }

    setDarkModeEnabled(isDarkMode);
  }

  // Executed every page reload
  useEffect(() => {
    const darkModeListener = (e) => {
      if (e.matches) {
        setDarkModeEnabled(true);
      } else {
        setDarkModeEnabled(false);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", darkModeListener);

    return () => mediaQuery.removeEventListener("change", darkModeListener);
  }, []);

  return (
    <>
      {darkModeEnabled && (
        <button
          id="light-mode-button"
          onClick={toggleTheme}
        >
          <span className="sr-only">Toggle Light Mode</span>
          <i className="fa fa-sun" aria-hidden="true"></i>
        </button>
      )}

      {!darkModeEnabled && (
        <button
          id="dark-mode-button"
          onClick={toggleTheme}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <i className="fa fa-moon" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

export default DarkLightSwitch;

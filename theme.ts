import { buildLegacyTheme } from "sanity";

const props = {
  "--app-white": "#fff",
  "--app-black": "#1a1a1a",
  "--app-brand": "#52daf2",
  "--app-red": "#db4437",
  "--app-yellow": "#f4b400",
  "--app-green": "#0f9d58",
};

export const sanityTheme = buildLegacyTheme({
  "--black": props["--app-black"],
  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--app-black"],
  "--component-text-color": props["--app-white"],
  "--brand-primary": props["--app-brand"],

  "--default-button-color": "#666",
  "--default-button-primary-color": props["--app-brand"],
  "--default-button-success-color": props["--app-green"],
  "--default-button-danger-color": props["--app-red"],
  "--default-button-warning-color": props["--app-yellow"],

  "--state-info-color": props["--app-brand"],
  "--state-success-color": props["--app-green"],
  "--state-danger-color": props["--app-red"],
  "--state-warning-color": props["--app-yellow"],

  "--main-navigation-color": props["--app-black"],
  "--main-navigation-color--inverted": props["--app-white"],

  "--focus-color": props["--app-brand"],
});

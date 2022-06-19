module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
    fontFamily: {
      sans: ["Inter", "IBM Plex Sans KR"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

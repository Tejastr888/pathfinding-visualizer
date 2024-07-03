/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#6333eabf",
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#7f46e5bf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#ab82f6bf",
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#62d3ee",
          },
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#a11d48bf",
            borderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#ea580cbf",
          },
          "75%": {
            transform: "scale(1.6)",
            backgroundColor: "#ab923cbf",
          },
          "90%": {
            transform: "scale(0.8)",
            backgroundColor: "#ade68a",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

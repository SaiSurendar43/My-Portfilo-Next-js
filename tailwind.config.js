/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlide: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "ease-in-out" },
          "50%": { transform: "translateY(-10px)", animationTimingFunction: "ease-in-out" },
        },
      },
      animation: {
        "fade-in-slide": "fadeInSlide 0.6s ease-in-out",
        "slide-left": "slideInLeft 0.5s ease-in-out",
        "slide-right": "slideInRight 0.5s ease-in-out",
        "bounce": "bounce 1s infinite",
      },
      borderColor: {
        "white-transparent": "rgba(255, 255, 255, 0.6)",
      },
      borderWidth: {
        "1": "0.1rem",
      },
      textColor: {
        "custom-color": "rgba(153, 38, 240, 0.95)",
        "custom-color-secondary": "rgba(209, 34, 227, 0.95)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, rgba(153, 38, 240, 0.95), rgba(209, 34, 227, 0.95))",
        "custom-text": "linear-gradient(to right, #9926f0, #d122e3)",
      },
      boxShadow: {
        custom: "0 4px 10px rgba(0, 0, 0, 0.1)",
        customInset: `
        inset 0 -82px 68px 0 rgb(96 68 144 / 18%),
        inset 0 -98px 100px -108px rgb(202 172 255 / 10%),
        inset 0 4px 18px 0 rgb(154 146 210 / 15%),
        inset 0 1px 40px 0 rgb(227 222 255 / 15%)`,
        customInset2: `inset 0 39px 56px -56px rgba(255, 255, 255, 0.25), 
                      inset 0 7px 21px 0 rgba(255, 255, 255, 0.20), 
                      inset 0 -82px 68px 0 rgba(96, 68, 144, 0.18), 
                      inset 0 -98px 100px -108px rgba(202, 172, 255, 0.10), 
                      inset 0 4px 18px 0 rgba(154 146, 210, 0.15), 
                      inset 0 1px 40px 0 rgba(227, 222, 255, 0.15)`,
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans"],
        syne: ["Syne"],
        fellfrench: ['"IM FELL French Canon"', "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat"],
        "dm-sans": ["DM Sans", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

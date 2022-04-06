module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#223a66',
        'main-normal': '#6F8BA4',
        'pink-color': '#e12454',
      },
    },
    screens: {
      'xm': '400px',
      '2xm': '375px',
      'sm': '640px',
      'md': '768px',
      'tablet': '992px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'topBanner': "url('/src/assets/images/banner.jpg')",
      'statistic': "url('/src/assets/images/doctor-image-4.jpg')",
      'doctorBg': "url('/src/assets/images/doctor-image-3.jpg')",
    },
    fontFamily: {
      'exo': ["Exo", 'sans-serif'],
    },
  },
  plugins: [],
}
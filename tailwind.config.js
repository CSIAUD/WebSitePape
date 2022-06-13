module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: { 
    neumorphismSize: {
      xs: '0.05em',
      sm: '0.1em',
      default: '0.2em',
      lg: '0.4em',
      xl: '0.8em',
      '2xl': '1em'
    },
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'brown': "rgb(181,136,96 )",
        'green': "rgb(99, 181,96 )",
      },
      spacing:{
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      gap: {
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      height: {
        'menuMobile': "calc(100vh - 5rem)",
      },
      dropShadow: {
        'icon': [
          '1px 1px 4px rgba(255, 255, 255, 0.5)',
          '1px 0px 4px rgba(255, 255, 255, 0.5)',
          '1px -1px 4px rgba(255, 255, 255, 0.5)',
          '0px -1px 4px rgba(255, 255, 255, 0.5)',
          '-1px -1px 4px rgba(255, 255, 255, 0.5)',
          '-1px -0px 4px rgba(255, 255, 255, 0.5)',
          '-1px 1px 4px rgba(255, 255, 255, 0.5)',
          '0px 1px 4px rgba(255, 255, 255, 0.5)'
        ],
      },
      inset: {
        'full': '100%',
      },
      transitionTimingFunction: {
        'out-backward': 'cubic-bezier(.4,.4,.4,1.3)',
      }
    }
  },
  plugins: [require('tailwindcss-neumorphism')],
}

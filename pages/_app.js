import 'tailwindcss/tailwind.css'
// import mixpanel from 'mixpanel-browser';
// // or with require() syntax:
// // const mixpanel = require('mixpanel-browser');

// // Enabling the debug mode flag is useful during implementation,
// // but it's recommended you remove it for production
// mixpanel.init('b1fe62e77d332c49f378bce11d03ef35', {debug: true}); 
// mixpanel.track('Sign up');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

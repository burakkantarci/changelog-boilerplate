import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
// import mixpanel from 'mixpanel-browser';
// // or with require() syntax:
// // const mixpanel = require('mixpanel-browser');

// // Enabling the debug mode flag is useful during implementation,
// // but it's recommended you remove it for production
// mixpanel.init('b1fe62e77d332c49f378bce11d03ef35', {debug: true}); 
// mixpanel.track('Sign up');

const users = [
  {
    "username": "burak",
    "password": "password2",
    "mail":  "burak@thundra.io",
    "detail": "First name must contain at least three characters."
  },
  {
    "username": "ismail",
    "password": "password3",
    "mail":  "ismail@thundra.io",
    "detail": "First name must contain at least three characters."
  },
  {
    "username": "piril",
    "password": "password4",
    "mail":  "piril@thundra.io",
    "detail": "First name must contain at least three characters."
  },
  {
    "username": "ozan",
    "password": "password4",
    "mail":  "ozan@thundra.io",
    "detail": "First name must contain at least three characters."
  },
  {
    "username": "beril",
    "password": "password4",
    "mail":  "beril@thundra.io",
    "detail": "First name must contain at least three characters."
  }
]

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(users[Math.floor(Math.random() * 4)]);
 
  useEffect(() => {
   
  });

  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/segment.js"></script>
        <script type="text/javascript" src="/static/heap.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

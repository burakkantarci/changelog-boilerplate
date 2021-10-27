import Head from 'next/head'
import { useRouter } from "next/router";

export default function Profile() {

  const router = useRouter()

  const handleClick = (e, clickItem , path) => {
    e.preventDefault();
    analytics.track( clickItem + ' Clicked', {
      name: 'Burak Kantarcı',
      email: 'burak@thundra.io',
      time: Date.now()
    })
    router.push(path)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Thundra Analytics - Profile</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <button onClick={(e) => handleClick(e, "Dashboard" , "/dashboard")} class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
          Go to dashboard
        </button>

        <h1 className="text-3xl font-bold text-gray-700 py-2">
          This is profile
        </h1>

        <button onClick={(e) => handleClick(e, "Sign Out", "/")} class="text-indigo-500 font-bold py-2 px-4 rounded">
          Sign Out
        </button>
        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

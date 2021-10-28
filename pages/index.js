import Head from 'next/head'
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter()

  const handleClick = (e, clickItem , path) => {
    e.preventDefault();
    analytics.track( clickItem + ' Clicked', {})
    router.push(path)
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Thundra Analytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <div className="text-lg">
          Welcome to
        </div>
        <h1 className="text-3xl font-bold text-indigo-600">
          Thundra Analytics Boilerplate
        </h1>
        <div class="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 mt-8 flex flex-col w-1/3">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
          </div>
          <div class="mb-6">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
          </div>
          <div class="flex items-center justify-between">
            <button onClick={(e) => handleClick(e, "Sign In","/dashboard")} class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </div>

        
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

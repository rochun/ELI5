import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>r/ELI5</title>
      </Head>
      <main>
        <h1 className="">Home</h1>
      </main>
    </>
  )
}

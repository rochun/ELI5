import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import SearchField from '@/components/SearchField'
import ResponseField from '@/components/ResponseField'
import React, {useState} from 'react'

interface Response {
  query: string,
  response: string,
  timestamp: string,
  id: string;
}

export default function Home() {

  const [response, setResponse] = useState<Response | undefined>(undefined);

  return (
    <>
      <Head>
        <title>r/ELI5</title>
      </Head>
      <main>
        {console.log('page refresh', response)}
        <NavBar />
        <SearchField setResponse={setResponse}/>
        <ResponseField response={response}/>
      </main>
    </>
  )
}

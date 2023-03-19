import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import SearchField from '@/components/SearchField'
import ResponseField from '@/components/ResponseField'
import React, {useState} from 'react'
import { Response } from '../types/types'

export default function Home() {

  const [response, setResponse] = useState<Response | undefined>(undefined);

  return (
    <>
      <Head>
        <title>r/ELI5</title>
      </Head>
      <main>
        <NavBar />
        <SearchField setResponse={setResponse}/>
        <ResponseField response={response}/>
      </main>
    </>
  )
}

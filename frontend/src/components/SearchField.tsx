import React, { ChangeEvent, useState } from 'react';
import axios from 'axios'
import { Response } from '../types/types'

interface Props {
  setResponse: (value: Response) => void,
}

export default function SearchField({setResponse}: Props) {

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(searchInput);
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('here')
    axios.get('http://localhost:5050/chatgpt', {
      params: {
        message: searchInput
      },
    })
      .then((res) => {
        console.log(res);
        setResponse({
          query: searchInput,
          response: res.data.choices[0].message.content,
          timestamp: res.data.created,
          id: res.data.id
        })
        // setSearchInput('');
        // e.target.reset();
      })
      .catch((err) => console.log(err));

  }

  return (
    <div className='max-w-[780px] w-[60%] mx-auto'>
      <form className="m-4 flex" onSubmit={handleSubmit}>
    	  <input className=" w-[100%] rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Enter a question or keyword" onChange={handleChange}/>
		    <button className="px-4 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 border-yellow-500 border-t border-b border-r">Query</button>
	    </form>
    </div>
  )
}
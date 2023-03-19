import React from 'react';
import Typed from 'react-typed'
import { Response } from '../types/types'

interface Props {
  response: Response | undefined
}
export default function ResponseField({ response } : Props) {
  return (
    <div>
      {console.log('rendered')}
      {response ? (
        <div className='max-w-[800px] w-[60%] h-[40vh] mx-auto border-2 border-orange-400 rounded-lg'>
          <p className='p-6'>
            <Typed
              key={response.id}
              strings={[response.response]}
              typeSpeed={15}
            />
          </p>
        </div>)
        : null}
    </div>
  )
}
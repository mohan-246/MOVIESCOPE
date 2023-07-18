import React from 'react'
import { MoreCard } from './MoreCard'
import { useParams } from 'react-router-dom'

export const MoreList = ({More}) => {
  const { topic } = useParams();

  return (<div className='flex-col flex gap-y-5 bg-slate-100'>
  <div className='bg-slate-900 h-[70px]'>
  <div className='float-left font-sans text-white h-8 uppercase  text-3xl font-extrabold m-4 '>{topic}</div>
  </div>
 
    {More.map((m) => <MoreCard key={m.id} M={m}/>)}
    </div>
  )
}

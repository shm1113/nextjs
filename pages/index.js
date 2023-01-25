import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Count } from '@/components/Count'
import React, {useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

function CountDummy({value, onChangeValue}){
  return <>
          <input type="button" value="+" onClick={()=>{
            onChangeValue(value+1);
          }}/>
        </>
}

export default function Home() {
  const [count, setCount] = useState(10);
  return (
    <>
    <h1>Count</h1>
      <Count  down={true}></Count>
      {value}
      <CountDummy value={count} onChangeValue={(oldValue)=> {
        setCount(oldValue);
      }}></CountDummy>
    </>
  )
}

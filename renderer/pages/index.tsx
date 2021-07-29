import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import {useLoading} from "../hooks/useLoading";

const IndexPage = () => {
  useEffect(() => {
    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', (_event, args) => {
      alert(args)
    })
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  const [toggleLoading, Loading] = useLoading()

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <button onClick={toggleLoading}>Load</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/main">
          <a>Main</a>
        </Link>
      </p>
      <Loading/>
    </Layout>
  )
}

export default IndexPage

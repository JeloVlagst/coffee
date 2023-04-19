import '@/styles/globals.css'
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google'

const edu_vic = Edu_VIC_WA_NT_Beginner({subsets:['latin']})

export default function App({ Component, pageProps }) {
  return (
    <main className={edu_vic.className}>
      <Component {...pageProps} />
    </main>
  )
}

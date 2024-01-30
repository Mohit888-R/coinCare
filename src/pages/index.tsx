import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeImage from '@/components/HomeImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomeImage/>
    </div>
  )
}

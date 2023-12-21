import { ModeToggle } from '@/components/toggle-mode'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '@/public/family.jpg'
import {
  Card,
  CardTitle,
} from "@/components/ui/card"


import React from 'react'

function Dashboard() {
  return (
    <>
    <nav className=' px-6 py-4 bg-slate-200 dark:bg-slate-800 w-full '>
      <div className='max-w-screen-lg flex items-center  justify-between mx-auto'>

      <div>FamilyMomentsHub</div>
      <Input placeholder='Search....' className='w-[40rem]' />
      <ModeToggle />
      </div>

    </nav>
    <div className="flex flex-wrap justify-between mt-8 mx-6">
    <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>

        <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>

        <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>

        {/* // 2nd row */}
        <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>

        <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>

        <Link href="/gallery">
        <Card className="w-[600px] h-[400px] shadow-lg rounded-lg mb-4">
          <div className="relative h-[90%] w-[100%]">
            <Image
              src={image1}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col h-[10%] justify-end">
            <CardTitle className="flex justify-center text-xl mb-2">Family 1</CardTitle>
          </div>
        </Card>
        </Link>
      </div>
    </>
  )
}

export default Dashboard
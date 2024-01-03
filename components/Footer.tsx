'use client'
import Link from 'next/link'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from './ui/menubar'
import {Globe, RadioTower, Settings2} from 'lucide-react'

function Footer() {
  return (
<>

 <Link
className='group flex flex-col items-center justify-center w-[30%] h-[fit-content] cursor-pointer transition-colors duration-300 '
 href='#'
 >
    <Globe className='w-[20px] h-[20px] group-hover:text-amber-600 transition-colors duration-100'/>
 <p >Leagues</p>
 </Link>
 <Link
 className='group flex flex-col items-center border-r-2 border-l-2 justify-center w-[30%] h-[fit-content] cursor-pointer transition-colors duration-300'
 href='#'
 >
    <RadioTower className='w-[20px] h-[20px] group-hover:text-amber-600 transition-colors duration-100'/>
<p>Live</p>
 </Link>
 <Link
 className='group flex flex-col items-center justify-center w-[30%] h-[fit-content] cursor-pointer transition-colors duration-300'
 href='#'
 >
    <Settings2 className='w-[20px] h-[20px] group-hover:text-amber-600 transition-colors duration-100'/>
<p>Settings</p>
 </Link>

     </>
  
  )
}

export default Footer
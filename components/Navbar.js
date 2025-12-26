import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-20 bg-orange-700 flex items-center justify-between px-6 text-white'>
            <div className="logo font-bold text-3xl">
                <Link href={"/"} >Vexo </Link>
            </div>
            <ul className='flex justify-center items-center gap-5'>
                <li className='hover:underline underline-offset-4 decoration-yellow-50'><Link href={"/  "}>Home</Link></li>
                <li className='hover:underline underline-offset-4 decoration-yellow-50'><Link href={"/about"}>About</Link></li>
                <li className='hover:underline underline-offset-4 decoration-yellow-50'><Link href={"/shorten"}>Shorten</Link></li>
                <li className='hover:underline underline-offset-4 decoration-yellow-50'><Link href={"/contact"}>Contact</Link></li>
                <li className='flex gap-3'>
                    <Link href={"/shorten"}><button className='bg-orange-500 cursor-pointer text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 transition'>
                        Try Now!</button></Link>
                    <Link href={"/github"}><button className='bg-orange-500 cursor-pointer text-white font-bold px-4 py-2 rounded-md hover:bg-orange-600 transition'>
                        Github</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

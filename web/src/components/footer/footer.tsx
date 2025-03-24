import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#252C36] py-[14px] px-[1rem] md:px-[60px] flex-col gap-[1rem] flex md:flex-row justify-between items-center'>
        <div className='flex'>© 2025 Block Play. All rights reserved</div>
        <ul className='flex gap-3 items-center flex-wrap justify-center'>
            <li><Link href={'/'} className='whitespace-nowrap'>Privacy Policy</Link></li>
            <li><Link href={'/'} className='whitespace-nowrap'>Terms & Conditions</Link></li>
            <li><Link href={'/'}><img src='/assets/images/Linkedin.png' alt='Linkedin'/></Link></li>
            <li><Link href={'/'}><img src='/assets/images/facebook.png' alt='facebook'/></Link></li>
            <li><Link href={'/'}><img src='/assets/images/Twitter.png' alt='Twitter'/></Link></li>
        </ul>
    </div>
  )
}

export default Footer
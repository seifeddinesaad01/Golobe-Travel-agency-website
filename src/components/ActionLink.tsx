import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ActionLink = ({ text, icon, href }: { text: string, icon: any, href: string }) => {
    return (
        <Link
            href={href}
            className='flex items-center justify-start gap-2'>
            <Image src={icon} alt="icon"
            />
            <p>{text}</p>
        </Link>
    )
}

export default ActionLink
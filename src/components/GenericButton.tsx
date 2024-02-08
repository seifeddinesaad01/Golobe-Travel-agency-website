import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GenericButton = ({ icon, text, href, className }: any) => {
    return (
        <div className={className}>
            <Link href={href || ""} prefetch={false}>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#8ed4bbff",
                        padding: "1rem",
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}>
                    <Image src={icon} alt="icon" />
                    {text && <p>{text}</p>}
                </button>
            </Link>
        </div>
    )
}

export default GenericButton
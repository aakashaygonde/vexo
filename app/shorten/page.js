"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // setGenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${result.shorturl}`)
                // alert(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`)
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`)
                seturl("")
                setShorturl("")
                // console.log(result)
                // alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-2xl bg-orange-100 my-16 p-8 rounded-lg flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-4'>
                <input type="text"
                    value={url}
                    className='px-4 p-2 rounded-md focus:outline-orange-400 border border-orange-300'
                    placeholder='Enter your URL'
                    onChange={(e) => { seturl(e.target.value) }} />
                <input type="text"
                    value={shorturl}
                    className='px-4 p-2 rounded-md focus:outline-orange-400 border border-orange-300'
                    placeholder='Enter your preferred short URL text '
                    onChange={(e) => { setShorturl(e.target.value) }} />
                <button onClick={generate} className='bg-orange-500 cursor-pointer text-white font-bold my-2 px-4 py-2 rounded-md hover:bg-orange-600 transition'>
                    Generate</button>
            </div>

            {generated && <>
                <span className='font-bold text-lg'>Your Short URL :</span> <code><Link target='_blank' href={generated}>{generated}</Link>
                </code>
            </>
            }
        </div>
    )
}

export default page

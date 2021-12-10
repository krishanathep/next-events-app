import React from 'react'
import { useRouter } from 'next/router'

export default function EventPage() {
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h1>Event Page {router.query.id}</h1>
        </div>
    )
}

import React from 'react'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Event.module.css'

export default function EventPage({evt}) {

    return (
        <div>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={'/'}>
                        <a>Edit Event</a>
                    </Link>
                    <a href="#" className={styles.delete}>Delete Event</a>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params:{slug}}){
    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json()

    return{
        props: {
            evt: events[0],
        },
        revalidate: 1
    }
}

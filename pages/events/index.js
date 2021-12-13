import React from 'react'

import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'

export default function Events({events}) {
  return (
    <div>
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt)=>(
        <EventItem key={evt.id} evt={evt} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  //const res = await fetch('http://localhost:3000/api/events')
  const res =await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events},
    revalidate: 1
  }
}
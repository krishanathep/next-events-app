import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'

export default function Home({events}) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.data.length === 0 && <h3>No Events to Show</h3>}

      {events.data.map((evt)=>(
        <EventItem key={evt.attributes.id} evt={evt} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res =await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events},
    revalidate: 1
  }
}
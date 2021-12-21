import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Event.module.css";

export default function EventPage({ evt }) {
  console.log(evt)
  const deleteEvent = (e) => {
    console.log(deleteEvent);
  };
  return (
    <div>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a className={styles.edit}>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
        <span>
          {evt.data.attributes.date} at {evt.data.attributes.time}
        </span>
        <h1>{evt.data.attributes.name}</h1>
        {evt.data.attributes.image && (
          <div className={styles.image}>
            <Image src={evt.data.attributes.image} width={960} height={600} />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.data.attributes.performers}</p>
        <h3>Description:</h3>
        <p>{evt.data.attributes.description}</p>
        <h3>Venue: {evt.data.attributes.venue}</h3>
        <p>{evt.data.attributes.address}</p>
        <Link href="/events">
          <a className={styles.back}>Go Back</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.data.map((evt) => ({
    params: { id: String(evt.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/api/events/${params.id}`);
  const evt = await res.json();

  return {
    props: { evt }
  };
}

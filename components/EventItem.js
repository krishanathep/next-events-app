import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import React from "react";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.attributes.image ? evt.attributes.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.attributes.date} at {evt.attributes.time}
        </span>
        <h3>{evt.attributes.name}</h3>
      </div>
      <div className={styles.button}>
        <Link href={`/events/${evt.id}`}>Details</Link>
      </div>
    </div>
  );
}

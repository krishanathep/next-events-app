import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import { useRouter } from "next/router";
import { API_URL } from '@/config/index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function add() {
  const [values, setValues] = useState({
    name: "Test",
    performers: "Test",
    venue: "Test",
    address: "Test",
    date: "01/04/2021",
    time: "Test",
    description: "Test",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values)

    // validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
     
    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/api/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })

    if(!res.ok) {
      toast.error('Something Went Wrong!')
    } else {
      const evt = await res.json()
      router.push(`/api/events/${evt.id}`)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer/>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label>Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Performers</label>
            <input
              type="text"
              id="performers"
              name="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="text"
              id="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label>Event Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </form>
    </div>
  );
}

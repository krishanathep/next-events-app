import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import { useRouter } from "next/router";

export default function add() {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleInputChange = (e) => {
      const { name,value } = e.target
      setValues({ ...values, [name]: value })
  }

  return (
    <div>
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label for="">Event Name</label>
            <input 
            type="text" 
            id='name'
            name='name'
            value={values.name}
            onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

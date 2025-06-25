import { useState } from "react"

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        people: 1,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation made for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.people} people.`);
        setFormData({
            name: '',
            date: '',
            time: '',
            people: 1,
        })
    }
    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <h2>Reservation Form</h2>
            <label htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="date">
                Date:
            </label>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <label htmlFor="time">
                Time:
            </label>
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <label htmlFor="people">
                People:
            </label>
            <select
                name="people"
                value={formData.people}
                onChange={handleChange}>
                <option value="1">One person</option>
                <option value="2">Two people</option>
                <option value="3">Three people</option>
                <option value="4">Four people</option>
                <option value="5">Five people</option>
                <option value="6">Six people</option>
                <option value="7">Seven people</option>
                <option value="8">Eight people</option>
            </select>
            <button className="submit-reservation" type="submit">Reserve a table</button>
        </form>
    )
}
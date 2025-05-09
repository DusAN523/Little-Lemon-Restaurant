import React, { useState } from "react";
import "./ReservationForm.css";

const initialState = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "",
};

export default function ReservationForm({ onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.date) errs.date = "Date is required";
    else if (new Date(form.date) < new Date().setHours(0, 0, 0, 0))
      errs.date = "Date must be in the future";
    if (!form.time) errs.time = "Time is required";
    if (!form.guests) errs.guests = "Number of guests is required";
    else if (isNaN(form.guests) || Number(form.guests) < 1)
      errs.guests = "At least 1 guest required";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setForm(initialState);
        onSuccess();
      }, 800);
    }
  }

  return (
    <div className="reservation-form-container">
      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <h2>Reserve a Table</h2>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
            type="email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Date
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            disabled={submitting}
            type="date"
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>
        <label>
          Time
          <input
            name="time"
            value={form.time}
            onChange={handleChange}
            disabled={submitting}
            type="time"
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </label>
        <label>
          Number of Guests
          <input
            name="guests"
            value={form.guests}
            onChange={handleChange}
            disabled={submitting}
            type="number"
            min="1"
            max="20"
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </label>
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Reserve"}
        </button>
      </form>
    </div>
  );
}

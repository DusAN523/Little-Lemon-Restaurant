// src/components/ReservationForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  it("shows validation errors on empty submit", () => {
    render(<ReservationForm onSuccess={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /reserve/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });

  it("calls onSuccess on valid submit", async () => {
    const onSuccess = jest.fn();
    render(<ReservationForm onSuccess={onSuccess} />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2099-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByRole('button', { name: /reserve/i }));
    // Wait for async submit
    await screen.findByText(/submitting/i);
    // Wait for onSuccess to be called
    setTimeout(() => {
      expect(onSuccess).toHaveBeenCalled();
    }, 1000);
  });
});

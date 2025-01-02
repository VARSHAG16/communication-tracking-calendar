import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for click events

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
  });

  const handleDateClick = (info) => {
    setNewEvent({ ...newEvent, date: info.dateStr });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />

      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>Event Title:</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              required
            />
            <label>Date:</label>
            <input type="text" value={newEvent.date} disabled />
            <button type="submit">Add Event</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarView;

import React from 'react';
import './Schedule.css';

export function Schedule() {
  const scheduleData = [
    { time: "06:00 AM", class: "Strength & Power", trainer: "Marcus" },
    { time: "07:30 AM", class: "Functional Cond.", trainer: "Sarah" },
    { time: "12:00 PM", class: "Open Gym", trainer: "Staff" },
    { time: "05:00 PM", class: "Strength & Power", trainer: "Marcus" },
    { time: "06:30 PM", class: "Functional Cond.", trainer: "Sarah" },
  ];

  return (
    <section id="schedule" className="section bg-secondary">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="section-header">
              <h2>Class Schedule</h2>
              <p>We offer classes throughout the day to fit your routine. Open gym is available between scheduled sessions.</p>
            </div>
            
            <div className="schedule-table-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Coach</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, i) => (
                    <tr key={i}>
                      <td className="schedule-time">{row.time}</td>
                      <td>{row.class}</td>
                      <td className="text-muted">{row.trainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="schedule-image-container">
            <img src="/class.jpg" alt="Group class in session" className="schedule-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

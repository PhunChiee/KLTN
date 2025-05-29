import React, { useState } from "react";
import DashboardLayout from '../layout/DashboardLayout';
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const months = {
  "Tháng 1, 2025": 31,
  "Tháng 2, 2025": 28,
  "Tháng 3, 2025": 31,
  "Tháng 4, 2025": 30,
  "Tháng 5, 2025": 31,
  "Tháng 6, 2025": 30,
  "Tháng 7, 2025": 31,
  "Tháng 8, 2025": 31,
  "Tháng 9, 2025": 30,
  "Tháng 10, 2025": 31,
  "Tháng 11, 2025": 30,
  "Tháng 12, 2025": 31,
};

const colors = [
  "#EF4444", // red
  "#F59E0B", // yellow
  "#10B981", // green
  "#3B82F6", // blue
  "#8B5CF6", // purple
  "#EC4899", // pink
];

const Calendar = () => {
  const [monthIndex, setMonthIndex] = useState(4); // Tháng 5
  const monthNames = Object.keys(months);
  const currentMonth = monthNames[monthIndex];
  const daysInMonth = months[currentMonth];
  const [expandedDays, setExpandedDays] = useState({});
  const [events, setEvents] = useState({});
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ title: "", startTime: "", endTime: "" });

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const nextMonth = () => {
    setMonthIndex((prev) => (prev + 1) % monthNames.length);
    setExpandedDays({});
  };

  const prevMonth = () => {
    setMonthIndex((prev) => (prev - 1 + monthNames.length) % monthNames.length);
    setExpandedDays({});
  };

  const handleAddEvent = (day) => {
    setShowForm(day);
    setFormData({ title: "", startTime: "", endTime: "" });
  };

  const handleSubmitEvent = (day) => {
    const key = `${currentMonth}-${day}`;
    const newEvent = {
      title: formData.title,
      startTime: formData.startTime,
      endTime: formData.endTime,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setEvents((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), newEvent],
    }));
    setShowForm(null);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
        <h1 className="text-2xl font-bold text-[#76B7E0]">Lịch trình</h1>
      </div>

      {/* Calendar */}
      <div className="p-6 text-gray-800">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-2 hover:bg-gray-200 rounded-full">
            <ChevronLeft />
          </button>
          <h2 className="text-2xl font-semibold">{currentMonth}</h2>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded-full">
            <ChevronRight />
          </button>
        </div>

        <div className="space-y-2">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const key = `${currentMonth}-${day}`;
            return (
              <div key={day} className="border rounded overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleDay(day)}
                  className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                >
                  <span>
                    {day < 10 ? `0${day}` : day}, {currentMonth}
                  </span>
                  <span>{expandedDays[day] ? "▲" : "▼"}</span>
                </button>

                {expandedDays[day] && (
                  <div className="px-4 py-2 bg-white border-t space-y-2 text-left">
                    {(events[key] || []).map((event, idx) => (
                      <div
                        key={idx}
                        className="w-full px-4 py-2 rounded-md text-sm shadow-sm flex items-center"
                        style={{
                            backgroundColor: `${event.color}20`,
                            borderLeft: `6px solid ${event.color}`,
                        }}
                        >
                        <span className="text-gray-700 font-medium mr-2">
                            {event.startTime} - {event.endTime}
                        </span>
                        <span className="text-black">{event.title}</span>
                        </div>

                    ))}

                    {showForm === day ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Tên sự kiện"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className="w-full px-3 py-1 border rounded text-sm"
                        />
                        <div className="flex gap-2">
                          <input
                            type="time"
                            value={formData.startTime}
                            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                            className="w-1/2 px-3 py-1 border rounded text-sm"
                          />
                          <input
                            type="time"
                            value={formData.endTime}
                            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                            className="w-1/2 px-3 py-1 border rounded text-sm"
                          />
                        </div>
                        <button
                          onClick={() => handleSubmitEvent(day)}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                        >
                          Lưu sự kiện
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddEvent(day)}
                        className="mt-2 inline-flex items-center text-sm text-green-600 hover:underline"
                      >
                        <Plus size={16} className="mr-1" /> Thêm sự kiện
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;

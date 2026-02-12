import React, { useState, useEffect } from "react";

function New_Task() {
  document.title = "Add New Task";

  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [inputData, setInputData] = useState({
    name: "",
    Description: "",
    Sdate: "",
    Edate: "",
    Status: "",
    Priority: "",
  });

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!inputData.name || !inputData.Status || !inputData.Priority) {
      alert("Please fill Title, Status, and Priority");
      return;
    }

    const newTasks = [...tasks, inputData];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    // Reset form
    setInputData({
      name: "",
      Description: "",
      Sdate: "",
      Edate: "",
      Status: "",
      Priority: "",
    });

    alert("Task added successfully!");
  };

  return (
    <div className="d-flex justify-content-center py-5" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div className="card shadow-sm p-4 rounded-4" style={{ width: "600px", backgroundColor: "#2a2a40", color: "#fff" }}>
        <h2 className="text-center mb-4 fw-bold">Add New Task</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputData.name}
              onChange={handleInput}
              placeholder="Task title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Description" className="form-label fw-semibold">
              Description
            </label>
            <textarea
              className="form-control"
              name="Description"
              value={inputData.Description}
              onChange={handleInput}
              rows="3"
              placeholder="Task details"
            ></textarea>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="Sdate" className="form-label fw-semibold">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                name="Sdate"
                value={inputData.Sdate}
                onChange={handleInput}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="Edate" className="form-label fw-semibold">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                name="Edate"
                value={inputData.Edate}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="Status" className="form-label fw-semibold">
                Status
              </label>
              <select
                className="form-select"
                name="Status"
                value={inputData.Status}
                onChange={handleInput}
              >
                <option value="">Select</option>
                <option>Pending</option>
                <option>Complete</option>
                <option>Progress</option>
                <option>Deployed</option>
                <option>Deferred</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="Priority" className="form-label fw-semibold">
                Priority
              </label>
              <select
                className="form-select"
                name="Priority"
                value={inputData.Priority}
                onChange={handleInput}
              >
                <option value="">Select</option>
                <option>P0</option>
                <option>P1</option>
                <option>P2</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 fw-bold"
            style={{ backgroundColor: "#5d5dc0", color: "#fff" }}
          >
            Add Task
          </button>
        </form>

        {/* {tasks.length > 0 && (
          <div className="mt-5">
            <h5 className="fw-semibold mb-3">Saved Tasks</h5>
            <ul className="list-group list-group-flush">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-start"
                  style={{ backgroundColor: "#3a3a5a", color: "#fff", border: "none", marginBottom: "8px", borderRadius: "6px" }}
                >
                  <div>
                    <div className="fw-bold">{task.name}</div>
                    <small>{task.Description}</small>
                  </div>
                  <span className="badge bg-primary rounded-pill">{task.Status}</span>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default New_Task;

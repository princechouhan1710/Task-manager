import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  document.title = "Dashboard";
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "btn-warning";
      case "Complete":
        return "btn-success";
      case "Progress":
        return "btn-primary";
      case "Deferred":
        return "btn-secondary";
      case "Deployed":
        return "btn-info";
      default:
        return "btn-outline-primary";
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1e1e2f" }} className="p-4">
      <h2 className="text-white mb-5 text-center fw-bold">Dashboard</h2>

      {tasks.length > 0 ? (
        <div className="row g-4">
          {tasks.map((task, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 shadow-sm position-relative d-flex flex-column justify-content-between"
                style={{ backgroundColor: "#2a2a40", color: "#fff", borderRadius: "12px" }}
              >
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2 rounded-circle"
                  style={{ width: "28px", height: "28px", padding: 0, lineHeight: "1" }}
                >
                  &times;
                </button>

                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold mb-2">{task.name}</h5>
                  <p className="text-muted flex-grow-1">{task.Description}</p>

                  <div className="d-flex justify-content-between mb-3 small">
                    <div>
                      <div className="fw-semibold">Start</div>
                      <div>{task.Sdate}</div>
                    </div>
                    <div>
                      <div className="fw-semibold">End</div>
                      <div>{task.Edate}</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center p-3 pt-0">
                  <span className="badge bg-secondary">{task.Priority}</span>
                  <button className={`btn btn-sm rounded-pill ${getStatusColor(task.Status)}`}>
                    {task.Status}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 py-5">
          <h4 className="text-white fw-semibold">No Tasks Yet</h4>
          <p className="text-muted text-center w-50">
            You currently have no tasks. Click the button below to add your first task.
          </p>
          <button
            className="btn btn-primary mt-3 w-25 px-4"
            onClick={() => navigate("/Dashboard/NewTask")}
          >
            + Add New Task
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

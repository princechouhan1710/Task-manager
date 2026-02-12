import React, { useEffect, useState } from "react";

function TaskStats() {
  document.title = "Task Stats";

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  const completed = tasks.filter((item) => item.Status?.toLowerCase() === "complete");
  const pending = tasks.filter((item) => item.Status?.toLowerCase() === "pending");
  const progress = tasks.filter((item) => item.Status?.toLowerCase() === "progress");
  const deployed = tasks.filter((item) => item.Status?.toLowerCase() === "deployed");
  const deferred = tasks.filter((item) => item.Status?.toLowerCase() === "deferred");

  const stats = [
    { title: "Total Tasks", count: tasks.length, color: "#0D6EFD", initial: "T" },
    { title: "Pending Tasks", count: pending.length, color: "#FFC107", initial: "P" },
    { title: "Progress Tasks", count: progress.length, color: "#17A2B8", initial: "P" },
    { title: "Completed Tasks", count: completed.length, color: "#28A745", initial: "C" },
    { title: "Deployed Tasks", count: deployed.length, color: "#0DCAF0", initial: "D" },
    { title: "Deferred Tasks", count: deferred.length, color: "#DC3545", initial: "D" },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#1e1e2f", minHeight: "100vh" }}
    >
      <h1 className="text-center text-white mb-5">Task Stats</h1>

      <div className="row g-4 justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
            <div
              className="card h-100 shadow-sm"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title text-dark">{stat.title}</h5>

                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                  <h2 className="mb-0 text-dark ps-5">{stat.count}</h2>

                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center text-white"
                    style={{
                      width: "49px",
                      height: "49px",
                      backgroundColor: stat.color,
                      fontWeight: "700",
                    }}
                  >
                    {stat.initial}
                  </div>
                </div>

                <p className="text-muted mb-0 small">Compared to last month</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskStats;

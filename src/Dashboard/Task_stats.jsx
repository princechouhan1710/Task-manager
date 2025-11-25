import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Task_stats() {
    document.title = "Task Stats";

  const dispatch = useDispatch();

  const { products: data } = useSelector((state) => state.productReducer);

 const completed = data?.filter(
    (item) => item.Status?.toLowerCase() === "complete"
  );
    const Pending = data?.filter(
        (item) => item.Status?.toLowerCase() === "pending"
    );
   const Progress = data?.filter(
    (item) => item.Status?.toLowerCase() === "progress"
  );
   const Depolyed = data?.filter(
    (item) => item.Status?.toLowerCase() === "deployed"
  );
   const Deferred = data?.filter(
    (item) => item.Status?.toLowerCase() === "deferred"
  );
  return (
    <div className="ww">
            <h1 className=' m-auto text-center p-3'>Tast stats</h1>
            <div className="d-flex flex-rowcard flex-wrap  justify-content-center gap-5">
                <div className="box1 ">
                    <h5>Total Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{data.length}</h5> <h2 className="h2">T</h2></div>
                    <p>110 last month</p>
                </div>
                  
                <div className="box1 ">
                    <h5>Pending Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{Pending.length}</h5> <h2 className="h2" style={{ background: "rgb(15, 118, 110)"}}>P</h2></div>
                    <p>110 last month</p>
                </div>
                <div className="box1 ">
                    <h5>Progress Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{Progress.length}</h5> <h2 className="h2" style={{ background: "rgb(245, 158, 11)"}}>P</h2></div>
                    <p>110 last month</p>
                </div>
                <div className="box1 ">
                    <h5>Complete Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{completed.length}</h5> <h2 className="h2" style={{ background: "rgb(190, 24, 93)"}}>C</h2></div>
                    <p>110 last month</p>
                </div>
                <div className="box1 ">
                    <h5>Depolyed Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{Depolyed.length}</h5> <h2 className="h2" style={{ background: "rgb(245, 158, 11)"}}>D</h2></div>
                    <p>110 last month</p>
                </div>
                <div className="box1 ">
                    <h5>Deferred Task</h5>
                   <div className="d-flex justify-content-between"> <h5 className="p-2">{Deferred.length}</h5> <h2 className="h2" style={{ background: "rgb(15, 118, 110)"}}>D</h2></div>
                    <p>110 last month</p>
                </div>

                   

      
            </div>
            
            </div>
  )
}

export default Task_stats

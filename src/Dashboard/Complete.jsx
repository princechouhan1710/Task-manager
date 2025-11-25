import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Complete() {
  
  document.title = "Complete";

  const dispatch = useDispatch();

  const { products: data } = useSelector((state) => state.productReducer);

 const completedData = data?.filter(
    (item) => item.Status?.toLowerCase() === "complete"
  );
  return (
    
    <div className="w-100 p-5 overflow-auto m-auto h-100 vw-100 ">
      <div className="d-flex  flex-wrap gap-3 w-100 justify-content-between  h-fit">
        {completedData?.length > 0 ? (
          completedData.map((v, i) => (
            
            <div
              key={v._id || i}
              className="flex-grow  card cardd" 
            >
              <div className="inner"> <div>{v.name}</div>
              <p>{v.Priority}</p></div>
              
              <p className="text-center"> {v.Description}</p>
              <div className="d-flex justify-content-around">
<div>
  <p>Start date:</p>
<p>{v.Sdate}</p>
</div>
             <div> <p>End Date:</p>
             <p> {v.Edate}</p></div>
             
              </div>
              
            
              
<div className="d-flex  justify-content-end ">
              <button
                className="button text-center border border-0 mx-4"
                
              >
              {v.Status} 
              </button>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-white">No Products Found</h4>
        )}
      </div>
    </div>
  );
}

export default Complete;

import React, { useState } from 'react'

import { addproduct } from '../redux/action/Productaction';
import { useDispatch } from 'react-redux';
function New_Task() {
    
    document.title = "Task";
    let dispatch = useDispatch()
    let [loading, setLoading] = useState(false)
      let [inputdata, setinputdata] = useState({
        name: "", Description: "", Sdate: "", Edate: "", Status: "", Priority: ""
    })
    
        let inputhandler = (e) => {
            e.preventDefault();
            setinputdata({ ...inputdata, [e.target.name]: e.target.value });
        }
        let submitHandler = async (e) => {
            e.preventDefault();
            dispatch(addproduct({ ...inputdata }))
        }
     
        
  return (
    <div>
      
       
     <div className='vw-75'>
<h1 className='text-center p-4'>Add New Task</h1>
                <form className=' m-auto my-4 p-5 bg-secondary-subtle' onSubmit={submitHandler} style={{width:"600px"}}>
                     <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">Title</label>
                        <input type="text" className="form-control" name="name"  onChange={inputhandler} placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <textarea className="form-control" name="Description"  onChange={inputhandler} rows="3" ></textarea>
                    </div>
                       <div className="mb-4  d-flex  justify-content-between ">
                        <div className='col-md-5'>

                            <label htmlFor="Sdate" className="form-label">Start Date</label>
                            <input type="Date" className="form-control" name="Sdate"  onChange={inputhandler} placeholder="Name" />
                        </div>
              <div className='col-md-5'>
                            <label htmlFor="Edate" className="form-label">End Date</label>
                            <input type="Date" className="form-control" name="Edate" onChange={inputhandler} placeholder="Name" /></div>
                  
                    </div>
                    <div className="d-flex justify-content-between ">
                    <div className="col-md-5">
            <label htmlFor="inputState" className="form-label">Status</label>
            <select id="inputState" className="form-select"   onChange={inputhandler} name="Status">
             <option >Select</option>
              <option >Pending</option>
              <option>Complete</option>
              <option>Progress</option>
              <option>Deployed</option>
              <option>Deferred</option>
            </select>
          </div>
           <div className="col-md-5">
            <label htmlFor="inputState" className="form-label">Priority</label>
            <select id="inputState" className="form-select"  onChange={inputhandler} name="Priority">
             <option >Select</option>
              <option >P0</option>
              <option>P1</option>
              <option>P2</option>
            </select>
          </div>
          </div>
                    <button className='btn text-white p-2 w-100 my-3' type='Submit' style={{    background:" #5d5dc0"}}>Add</button>
                </form>
 
            </div>
    </div>
  )
}

export default New_Task

 


// mport React, { Component } from 'react'
 
// export default class Controlled extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "harry", Description: "hello", Sdate:""
//         }
//     }
//     componentDidMount() {
//         if (this.props.isUpdate) {
//             this.setState({
//                 name: this.props.data[this.props.updateIndex].name,
//                 Description: this.props.data[this.props.updateIndex].Description,
//                 Sdate: this.props.data[this.props.updateIndex].Sdate,
//                 Edate: this.props.data[this.props.updateIndex].Edate,
                
//                 Status: this.props.data[this.props.updateIndex].Status,
                
//                 Priority: this.props.data[this.props.updateIndex].Priority

//             })
//         }
//     }
//     render() {
//         let { title, Description ,Sdate,Edate,Status,Priority } = this.state;
//         let { data, addData, isUpdate, updateIndex, updatedata } = this.props;
//         let submitHandler = (event) => {
//             event.preventDefault();
//             if (isUpdate) {
//                 updatedata(updateIndex, { title, Description ,Sdate,Edate,Status,Priority })
//             } else {
//                 addData({ title, Description ,Sdate,Edate,Status,Priority })
//             }
//         }




//         let inputhandler = (event) => {
//             console.log(event.target.name)
//             console.log("a")
//             this.setState({ [event.target.title]: event.target.value })
//         }

//         return (
//             <div className='w-75'>
// <h1 className='text-center p-4'>Add New Task</h1>
//                 <form className='w-50 m-auto my-4 p-5 bg-secondary-subtle' onSubmit={submitHandler}>
//                      <div className="mb-3">
//                         <label htmlFor="name" className="form-label">Name</label>
//                         <input type="text" className="form-control" name="name" value={name} onChange={inputhandler} placeholder="Name" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="Description" className="form-label">Description</label>
//                         <textarea className="form-control" name="Description" value={Description} onChange={inputhandler} rows="3" ></textarea>
//                     </div>
//                        <div className="mb-4  d-flex  justify-content-between ">
//                         <div className='col-md-5'>

//                             <label htmlFor="Sdate" className="form-label">Start Date</label>
//                             <input type="Date" className="form-control" name="Sdate" value={Sdate} onChange={inputhandler} placeholder="Name" />
//                         </div>
//               <div className='col-md-5'>
//                             <label htmlFor="Edate" className="form-label">Start Date</label>
//                             <input type="Date" className="form-control" name="Edate" value={Edate} onChange={inputhandler} placeholder="Name" /></div>
                  
//                     </div>
//                     <div className="d-flex justify-content-between ">
//                     <div className="col-md-5">
//             <label htmlFor="inputState" className="form-label">Status</label>
//             <select id="inputState" className="form-select" value={Status} onChange={inputhandler} name="Status">
//               <option >Pending</option>
//               <option>Complete</option>
//               <option>Progress</option>
//               <option>Deployed</option>
//               <option>deffred</option>
//             </select>
//           </div>
//            <div className="col-md-5">
//             <label htmlFor="inputState" className="form-label">Priority</label>
//             <select id="inputState" className="form-select" value={Priority} onChange={inputhandler} name="Priority">
//               <option >P0</option>
//               <option>P1</option>
//               <option>P2</option>
//             </select>
//           </div>
//           </div>
//                     <button className='btn btn-secondary' type='submit'>{isUpdate ? "Update" : "Submit"}</button>
//                 </form>
 
//             </div>
//         )
//     }
// }
 
 









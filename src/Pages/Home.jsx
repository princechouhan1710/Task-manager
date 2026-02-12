import React from 'react'

function Home() {
  return (
    <div className='overflow-hidden'>
      <div className=" m-5 d-flex justify-content-between gap-5 " >
        <div className='w-50  p-5' data-aos="fade-right" data-aos-duration="5000">
        <h1 className='cblue ' style={{fontFamily:"Pacifico" ,
        }}>Task Craft</h1>
       <h2 className="cblue">
  Plan, Track & Achieve Your Goals Seamlessly
</h2>
<p>
  Turn your to‑dos into done — manage tasks, set priorities, and track your progress effortlessly with tools built for focus and productivity.
</p>

<button className="btn btn-primary">Get Started</button>
      </div>
      <div className='w-50 p-5'  data-aos="fade-left" data-aos-duration="5000">
      <img width={"75%"} src="https://task-apps-client.vercel.app/assets/Hero-Dq9GjtoB.png" alt="" />
      
      </div>
      </div>
      <div className='d-flex justify-content-around p-3 w-100'  style={{background: "#eef4ff"}}>
        <div className='text-center'>
            <h2 className='cblue'>+5,200</h2>
            <p>Happy user</p>
        </div>
         <div className='text-center'>
            <h2 className='cblue'>+4,500</h2>
            <p>Paid user</p>
        </div>
         <div className='text-center'>
            <h2 className='cblue'>+10,000</h2>
            <p>Viewer</p>
        </div>
         <div className='text-center'>
            <h2 className='cblue'>+15,000</h2>
            <p>Total Task</p>
        </div>
      </div>
       <div className=" m-5 d-flex justify-content-center align-items-center">
        <div className='w-50  p-5' data-aos="fade-right" data-aos-duration="5000">
       
        <h2 className='cblue'>Create and Manage
Tasks Effortlessly
</h2>
<h4>
Add tasks with just a few clicks, assign deadlines, set
priorities, and track progress in real time.</h4>
      </div>
      <div className='w-50 p-5 '  data-aos="fade-left" data-aos-duration="5000">
      <img width={"75%"} height={"300px"} src="https://task-apps-client.vercel.app/assets/Add-CJ7-u2yK.png" alt="" />
      
      </div>
      </div>
        <div className=" m-5 d-flex justify-content-center align-items-center">
             <div className='w-50 text-center m-auto p-5' data-aos="fade-right" data-aos-duration="5000" >
      <img width={"50%"} height={"400px"} src="https://task-apps-client.vercel.app/assets/Read-DpExJjCs.png" alt="" />
      
      </div>
        <div className='w-50  p-5'  data-aos="fade-left" data-aos-duration="5000">
       
        <h2 className='cblue'>Read and Stay on
Top of Every Task
</h2>
<h4>Quickly review task details, deadlines, and priorities in
one organized view.</h4>
      </div>
     
      </div>
      <div className=" m-5 d-flex justify-content-between align-items-center">
        <div className='w-50  p-5' data-aos="fade-right" data-aos-duration="5000">
       
        <h2 className='cblue'>Check Tasks with
Ease
</h2>
<h4>
Track progress effortlessly by marking completed tasks
and reviewing pending ones..</h4>
      </div>
      <div className='w-50 p-5 '  data-aos="fade-left" data-aos-duration="5000">
      <img width={"75%"} height={"300px"} src="https://task-apps-client.vercel.app/assets/Check-CeHOafp9.png" alt="" />
      
      </div>
      </div>
       <div className=" m-5 d-flex justify-content-center align-items-center">
             <div className='w-50 text-center m-auto p-5' data-aos="fade-right" data-aos-duration="5000" >
      <img width={"75%"} height={"300px"} src="https://task-apps-client.vercel.app/assets/Delete-DrilGtWo.png" alt="" />
      
      </div>
        <div className='w-50  p-5'  data-aos="fade-left" data-aos-duration="5000">
       
        <h2 className='cblue'>Delete Tasks with
Confidence
</h2>
<h4>Easily remove tasks you no longer need, keeping your
workspace clutter-free.</h4>
      </div>
     
      </div>
      <div className=" m-5 d-flex justify-content-center align-items-center">
        <div className='w-50  p-5' data-aos="fade-right" data-aos-duration="5000">
       
        <h2 className='cblue'>Pin Tasks for Quick
Access
</h2>
<h4>
Keep your most important tasks front and center by
pinning them to the top.</h4>
      </div>
      <div className='w-50 p-5 '  data-aos="fade-left" data-aos-duration="5000">
      <img width={"75%"} height={"300px"} src="https://task-apps-client.vercel.app/assets/Pin-BlR10jqK.png" alt="" />
      
      </div>
      </div>
      <div className='d-flex flex-column gap-2 p-5 text-white' >
        <h1 className='text-center cblue' style={{fontFamily:"Pacifico"}}>Customer Review</h1>
        <div className='border bblue  rounded-4' data-aos="fade-right" data-aos-duration="10000"  style={{padding:"30px 100px 30px 50px"}} >
          <p>This task manager app is a game-changer! It’s incredibly easy to use, and the intuitive design helps me plan, organize, and track tasks effortlessly. I love the ability to set priorities,deadlines, and
reminders. It’s perfect for staying productive and ensuring nothing gets overlooked. Highly recommend it to everyone!</p>
<h6>by Jeny</h6>
<p>4.5 ⭐⭐⭐⭐</p>
        </div>
         
        <div className='border bblue  rounded-4' data-aos="fade-left" data-aos-duration="10000" style={{padding:"30px 100px 30px 50px"}} > 
          <p>This app has made managing my daily tasks so much easier! The clean interface and helpful features like reminders and progress tracking keep me on top of everything. It’s reliable, efficient,
and customizable to suit my needs. A must-have tool for staying organized and productive!
</p>
<h6>by Samantha K</h6>
<p>4.5 ⭐⭐⭐⭐</p>
        </div>
         
        <div className='border bblue  rounded-4' data-aos="fade-right" data-aos-duration="10000" style={{padding:"30px 100px 30px 50px"}} >
          <p>A fantastic tool for staying organized! The ability to create, prioritize, and track tasks is seamless. It’s perfect for both personal and work use, and the reminders ensure I never miss a deadline.
Highly satisfied with this app!</p>
<h5>by Priya Sharma</h5>
<p>4.5 ⭐⭐⭐⭐</p>
        </div>
         
        <div className='border bblue  rounded-4'  data-aos="fade-left" data-aos-duration="10000" style={{padding:"30px 100px 30px 50px"}} >
          <p>This task manager simplifies everything! I love how I can easily manage my schedule, set deadlines, and check off completed tasks. It’s user-friendly, efficient, and keeps me productive
throughout the day. Definitely worth using!</p>
<h5>by Emily Green</h5>
<p>4.5 ⭐⭐⭐⭐</p>
        </div>

      </div>
      <div className='m-auto text-center d-flex flex-column gap-3 w-75 '  data-aos="fade-left" data-aos-duration="5000">
        <h1>Join Our News Letter</h1>
        <h2>
Signup for our email newspaper to get updates and more</h2>
<input type="text" className='w-100 p-2 border-0 rounded-3' style={{background:"gray"}}/>
<button className="btn btn-primary py-2 px-3 m-auto rounded-2">Subscribe</button>
      </div>
    </div>
  )
}

export default Home

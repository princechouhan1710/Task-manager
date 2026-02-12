import React from 'react'

function Contact() {
  return (
    
   <div className='p-3 fs-5'>
       <h1 className='text-center p-2' style={{fontFamily:"Pacifico"}}>Contact Me</h1>
        <div className='' data-aos="fade-right" data-aos-duration="10000"  style={{padding:"30px 100px 30px 50px"}} >
          <p className='w-50 text-center m-auto'> We’d love to hear from you! Whether you have questions, feedback, or need
assistance, feel free to reach out. Our team is here to help and will get back to you
as soon as possible. Let’s stay connected!</p>
<div className='my-3 '>
<div className='box  bg-dark m-auto border  border-bottom-0' style={{height:"100px" ,width:"75%"}}>
    
    </div>
<div className='d-flex m-auto w-75 justify-content-center border border-top-0 border-bottom-0'>
    <div className='box  bg-dark ' style={{height:"130px" ,width:"25%"}}>
    
    </div>
    <form className='border p-5 w-100  '>
  <div class="form-row  ">
   <div className="d-flex gap-3">
     <div class="form-group col-md-6 ">
      <label for="input">First Name:-</label>
      <input type="text" class="form-control my-2" id="inputEmail4" placeholder='First Name'/>
    </div>
    <div class="form-group col-md-6 ">
      <label for="text">Last Name :-</label>
      <input type="text" class="form-control my-2" id="inputPassword4" placeholder='Last Name'/>
    </div>
   
   </div>
  </div>
 <div className="d-flex gap-3">
     <div class="form-group col-md-6 ">
    <label for="inputAddress">Email</label>
    <input type="email" class="form-control my-2" id="inputAddress" placeholder="abc@gmail.com"/>
  </div>
  <div class="form-group col-md-6 ">
    <label for="inputAddress2">Phone Number</label>
    <input type="number" class="form-control my-2" id="inputAddress2" placeholder="0000000000"/>
  </div>
 </div>
  {/* <div class="form-group col-md-12"> */}
    <div class="form-group col-md-12  ">
      <label for="inputCity">What do you have in mind:-</label>
      <textarea name="" className='form-control my-2' id="" placeholder='...'></textarea>
    {/* </div> */}
    
  
  </div>
  <button type="submit" class="btn btn-dark px-3 my-2 w-100 m">Submit</button>
</form>
<div className='box  bg-dark ' style={{height:"130px" ,width:"25%"}}>
    
    </div>
   
</div>
 <div class="social-media-links m-auto  border border-top-0 w-75 p-4 d-flex gap-3 justify-content-center">
          <a href="#" id="ix94i-2">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
          </a>
          <a href="#" id="izldf-2">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
          </a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact

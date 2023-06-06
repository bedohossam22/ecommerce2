import React from 'react';

export default function Formdetails(){
 
 

  return (
    <div className='form-container '>
      <div className='formz'>
        <div className='Login-form beta'>
    <form>
      <label>
        <h1>Login</h1>
        <input type="text"  placeholder='UserName'  />
      
      </label>
      <br />
      <label>
       
        <input type="text"  placeholder='Password'  />
      </label>
      <br />
      <button className='fire' type="submit">LogIn</button>
    </form>
    </div>
    <div className='Register-form alpha'>
      <label>
        <h1>Register</h1>
        <input type='text' placeholder='UserName'/>
      </label>
      <br />
      <label>
       
        <input type="text"  placeholder='Your Email' />
        <input type="text"  placeholder='Password'  />
        <input type="text"  placeholder='Confirm Password'  />
      </label>
      <br />
      <button className='fire' type="submit">LogIn</button>
     
    </div>
    </div>
    </div>
  );
}

import React from 'react';
import './index.css';

const SignIn = () =>
  <React.Fragment>
    <div className={"sitem container card bg-light mb-4 border-info"}>
     <div className={"card-header text-white bg-dark"}>
       <h5>Please sign in</h5>
     </div>
     <form>
       <div class="form-group">
         <label for="InputEmail">Username</label>
         <input type="username" class="form-control" id="InputEmail" aria-describedby="emailHelp"/>
         <small id="emailHelp" class="form-text text-muted">Please provide your username</small>
        </div>
       <div class="form-group">
         <label for="InputPassword">Password</label>
         <input type="password" class="form-control" id="InputPassword"/>
       </div>
       <button type="submit" class="btn btn-primary w-60">Sign In</button>
     </form>
    </div>
  </React.Fragment>

export default SignIn;

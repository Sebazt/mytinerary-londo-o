import React from "react"
import "./signin.css"


function signIn() {


  return (

    <div className="container-signin">
          <div class="center">
        <h1>Sign Up</h1>
        <form>
          <div class="inputbox">
            <input type="text" required="required"/>
              <span>Email</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required"/>
              <span>Password</span>
          </div>
          <div class="inputbox">
            <input type="button" value="submit"/>
          </div>
        </form>
      </div>
    </div>

  );
}

export default signIn;
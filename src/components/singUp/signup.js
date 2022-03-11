import React from "react";
import "./signup.css";
import { Link as LinkRouter } from "react-router-dom";

function SingUp() {
  return (
    <div className="container-signup">
      <div class="container-form">
        <h1 className="titulo-form">Sign Up</h1>
        <form>
          <div class="inputbox">
            <input type="text" required="required" />
            <span>First Name</span>
          </div>

          <div class="inputbox">
            <input type="text" required="required" />
            <span>Last Name</span>
          </div>

          <div class="inputbox">
            <input type="text" required="required" />
            <span>E-mail</span>
          </div>

          <div class="inputbox">
            <input type="text" required="required" />
            <span>Password</span>
          </div>

          <div class="inputbox">
            <input type="text" required="required" />
            <span>Photo URL</span>
          </div>

          <label for="country">
            <select for="country" class="inputbox">
              <option>Choose your country</option>
            </select>
          </label>

          <div class="inputbox">
            <button><input type="button" value="submit" />Sign Up !</button>
          </div>

          <button className="button-callhome2">
            Sign Up With Google
            <span></span>
          </button>

            <div>
            <h2 className="h2-callhome">
              Already have an account? <LinkRouter to={"/signin"}><span>Sign in here !</span></LinkRouter>
            </h2>
           </div>
          

        </form>
      </div>
    </div>
  );
}

export default SingUp;

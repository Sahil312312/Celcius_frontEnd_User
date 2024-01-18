import React from 'react'

const loginpage = () => {
  return (
    <div>
    <div class="main">  	
    <input type="checkbox" id="chk" aria-hidden="true"/>

        <div class="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="Username" required=""/>
                <input type="email" name="email" placeholder="Enter Email Id" required=""/>
                <input type="password" name="pswd" placeholder=" Password" required=""/>
                <input type="password" name="pswd" placeholder="Confirm Password" required=""/>
                <button>Sign up for Celcium</button>
            </form>
        </div>

        <div class="login">
            <form>
                <label for="chk" aria-hidden="true"><u>Login Here</u></label>
                <input type="email" name="email" placeholder="Email" required=""/>
                <input type="password" name="pswd" placeholder="Password" required=""/>
                <button>Loginhfvrhvrfe</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default loginpage
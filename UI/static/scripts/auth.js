document.write(
`<div id='main'>\
  <form id='authform' class='auth' action='home.html'>\
    <label class='signup'>first name<span>*</span>\
      <input type='text' name='first_name' id='first'\
      placeholder='first name'></input>\
    </label>\
    <label class='signup'>family name<span>*</span>\
      <input type='text' name='family_name' id='family_name'\
      placeholder='family name'></input>\
    </label>\
    <label class='signin'>user Name<span>*</span>\
      <input type='text' name='user_name' id='user_name'\
      placeholder='enter user name or email'></input>\
    </label>\
    <label class='signup'>user Name\
      <input type='text' name='user_name' id='user_name'\
      placeholder='enter preferred user name'></input>\
    </label>\
    <label class='signup'>email<span>*</span>\
      <input name='email' type='email' id='email' placeholder='email'></input>\
    </label>\
    <label class='signup'>phone\
      <input type='tel' class='signup' id='phone' placeholder='phone number'>\
      </input>\
    </label>\
    <label class='signup signin'>password<span>*</span>\
    <div class='with_eye universal' onclick='disp(this)'>\
      <input type='password' id='password' placeholder='password'></input>\
        <div class='eye universal' onmousedown='see(this)'>\
          <div id='pupil'></div>\
        </div>\
      </div>\
    </label>\
    <label class='signup'>confirm password<span>*</span>\
    <div class='with_eye universal' onclick='disp(this)'>\
      <input type='password' id='confirm_password' oninput='checkRepeat()'\ placeholder='confirm password'></input>\
        <div class='eye universal' onmousedown='see(this)'>\
          <div id='pupil'></div>\
        </div>\
      </div>\
    </label>\
      <span id='repeat_error'>The passwords do not match!</span>\
    <label class='signin'>Signin as:\
      <select id='role' onchange='redirect()' required oninvalid='this.setCustomValidity("please select user type")'>\
        <option value=''>--select--</option>\
        <option>Client</option>\
        <option>Admin</option>\
      </select>\
    </label>\
    <button type='submit' id='submit_auth' class='signin signup'>submit</button>\
  </form>\
</div>`);

# mern-register

Register using jwt and logout.<br>

Using MERN stack.<br>
DB: MongoDB Atlas<br>
<br>
Back-End deployed: Render<br>
Front-End deployed: Netlify<br>

***Please wait for ~30 secs initially since server goes to sleep due to inactivity.***<br>

Live site: https://mern-register-server.onrender.com/<br>

--------------------
***Project requirements:***<br>
<br>
Functionality:<br>
 <br>
-Registration page: The user should be able to register with their first name, last name, email address, and password. When they click the "register" button, the user should be created in the database and the user should be redirected to the "home" page.<br>
 <br>
-Home page: The user should see the text "Welcome {first name} {last name}". If the user refreshes the browser, they should still be logged in. There should also be a log out button. When the user clicks the log out button, the session should be deleted and the user should be redirected back to the registration page.<br>
 <br>
Requirements:<br>
 <br>
-Add validation to ensure that the user is making valid inputs (e.g. that the email address has a valid format and the password is at least 6 characters long). The first name and last name fields are required.<br>
-For the frontend, use React and TypeScript.<br>
-For the backend, use NodeJS, Express, and MongoDB.<br>

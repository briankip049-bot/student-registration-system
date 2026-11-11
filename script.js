const form=document.getElementById("registrationform");
const message=document.getElementById("message");
const password=document.getElementById("password");
const confirm password=document.getElementById("confirmpassword");

function checkpassword(){
if(password.value!==confirmpassword.value){
confirmpassword.setcustomvalidity("passwords do not match!");
}else{
confirmpassword.setcustomvalidity("");
}
}
passwword.addEventListener("input",checkpassword);
confirmpassword.addEventListener("input",checkpassword);
form.addEventLitsener("submit",function(event){
event.preventDefault();
   const studentName =
        document.getElementById("studentName").value.trim();

    const admission =
        document.getElementById("admission").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const gender =
        document.querySelector('input[name="gender"]:checked').value;

    const course =
        document.getElementById("course").value;

    const year =
        document.getElementById("year").value;


    // 8. GET SELECTED ACTIVITIES

    const activities = document.querySelectorAll(
        'input[name="activities"]:checked'
    );

    const selectedActivities = [];

    activities.forEach(function(activity) {

        selectedActivities.push(activity.value);

    });


    // 9. CHECK PASSWORD MATCHING

    checkPassword();

    if (!form.reportValidity()) {

        return;

    }


    // 10. DISPLAY SUCCESS MESSAGE

    message.style.color = "green";

    message.textContent =
        "Registration successful! Welcome, " + studentName;


    // 11. DISPLAY STUDENT DETAILS IN THE CONSOLE

    console.log("STUDENT REGISTRATION DETAILS");

    console.log("Full Name: " + studentName);

    console.log("Admission Number: " + admission);

    console.log("Email: " + email);

    console.log("Phone Number: " + phone);

    console.log("Gender: " + gender);

    console.log("Course: " + course);

    console.log("Year of Study: " + year);

    console.log("Activities: " + selectedActivities.join(", "));


});


// 12. CLEAR MESSAGE WHEN FORM IS RESET

form.addEventListener("reset", function() {

    message.textContent = "";

});



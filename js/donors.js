/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  $(document).ready(function(){
    $("#form").submit(function(){
      // event.preventDefault();
      var fName = $("#fname").val();
      var lName = $("#lname").val();
      var emailAddress = $("#mail").val();
      var bloodGroup = $("#selects option:selected").val();

      

      alert("Hi "+ fName+" " + lName+" your email is "+" "+ emailAddress +" and of blood group "+" "+bloodGroup);
      alert("we shall link you to the donor in a short while via your email");

    
    
    });

// This code isn't working
    $(".regForm").submit(function(){
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var occupation = $("#occupation").val();
      var dateOfBirth = $("#dob").val();
      var donor = $("#donor").val();
      var workEmail = $("#email").val();
      var orgName = $("#orgName").val();
      var ehrSystem = $("#ehr").val();
      var orgType = $("#orgType").val();
      var everDonated = $("#everDonated").val();
      var wouldDonate = $("#wouldDonate").val();
      var phoneNumber = $("#phoneNumber").val();
      var message = $("#mess").val();
      

      alert(firstName)
      alert(lastName)
      alert(occupation)
      alert(dateOfBirth)
      alert(donor)
      alert(workEmail)

    })

    
  });









 
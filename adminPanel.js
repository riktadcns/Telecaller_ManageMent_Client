
    document.addEventListener("DOMContentLoaded", () => {
 
        document.getElementById("dashboardLink").addEventListener("click", showDashboard);
        document.getElementById("subAdminLink").addEventListener("click", showSubAdminForm);
        document.getElementById("numberBoyLink").addEventListener("click", showNumberBoyForm);
        document.getElementById("telecallerLink").addEventListener("click", showTelecallerForm);
        document.getElementById("profileLink").addEventListener("click", showProfileDropdown);
        document.getElementById("allNumbersLink").addEventListener("click", showAllNumbers);
    

        const assignNumbersLink = document.getElementById("assignNumbersLink");
        if (assignNumbersLink) {
            assignNumbersLink.addEventListener("click", assignNumberClicked);
        }
    });

    function hideAllViews() {
        document.getElementById("registrationContainer").style.display = "none";
        document.getElementById("profileContent").style.display = "none";
        document.getElementById("numbersContent").style.display = "none";
        // Add more view hiding here
    }
  
      function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      }
  
      function showDashboard() {
        hideAllViews();
      }
      function showSubAdminForm() {
        hideAllViews();
        // Show Sub Admin Registration Form
        document.getElementById("registrationContainer").style.display = "block";
        document.getElementById("subAdminRegistration").style.display = "block";
        document.getElementById("numberBoyRegistration").style.display = "none";
        document.getElementById("telecallerRegistration").style.display = "none";
        document.getElementById("profileContent").style.display = "none";
  
      }
  
      function showNumberBoyForm() {
        hideAllViews();
        // Show Number Boy Registration Form
        document.getElementById("registrationContainer").style.display = "block";
        document.getElementById("subAdminRegistration").style.display = "none";
        document.getElementById("numberBoyRegistration").style.display = "block";
        document.getElementById("telecallerRegistration").style.display = "none";
        document.getElementById("profileContent").style.display = "none";
      
      }
  
      function showTelecallerForm() {
        hideAllViews();
        // Show Telecaller Registration Form
        
        document.getElementById("registrationContainer").style.display = "block";
        document.getElementById("subAdminRegistration").style.display = "none";
        document.getElementById("numberBoyRegistration").style.display = "none";
        document.getElementById("telecallerRegistration").style.display = "block";
        document.getElementById("profileContent").style.display = "none";
       
      }
  
      async function createSubAdmin() {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          alert("Authentication token is missing. Please log in again.");
          return;
        }
  
        const subAdminUsername = document.getElementById("subAdminUsername").value;
        const subAdminPassword = document.getElementById("subAdminPassword").value;
  
        if (!subAdminUsername) {
          alert("Sub Admin's username is required.");
          return;
        }
  
        try {
          const response = await fetch("/api/admin/Create-SubAdmin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
              userName: subAdminUsername,
              password: subAdminPassword,
            }),
          });
  
          if (response.status === 200) {
            alert("Sub Admin created successfully.");
         
          } else {
            const responseData = await response.json();
            alert(`Failed to create Sub Admin: ${responseData.message}`);
          }
        } catch (error) {
          console.error(error);
          alert("Failed to connect to the server");
        }
      }
  
      async function createNumberBoy() {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          alert("Authentication token is missing. Please log in again.");
          return;
        }
  
        const numberBoyUsername = document.getElementById("numberBoyUsername").value;
        const numberBoyPassword = document.getElementById("numberBoyPassword").value;
  
        if (!numberBoyUsername) {
          alert("Number Boy's username is required.");
          return;
        }
  
        try {
          const response = await fetch("/api/admin/Create-NumberBoy", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
              userName: numberBoyUsername,
              password: numberBoyPassword,
            }),
          });
  
          if (response.status === 200) {
            alert("Number Boy created successfully.");
          } else {
            const responseData = await response.json();
            alert(`Failed to create Number Boy: ${responseData.message}`);
          }
        } catch (error) {
          console.error(error);
          alert("Failed to connect to the server");
        }
      }
  
      async function createTelecaller() {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          alert("Authentication token is missing. Please log in again.");
          return;
        }
  
        const telecallerUsername = document.getElementById("telecallerUsername").value;
        const telecallerPassword = document.getElementById("telecallerPassword").value;
  
        try {
          const response = await fetch("/api/admin/Create-Telecaller", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
              userName: telecallerUsername,
              password: telecallerPassword,
            }),
          });
  
          if (response.status === 200) {
            alert("Telecaller created successfully.");
            sessionStorage.setItem("telecallerId", data.telecallerId);
            const data = await response.json();

                // Store telecallerId and accessToken in session storage
                sessionStorage.setItem("telecallerId", data._id.ObjectId);
                sessionStorage.setItem("accessToken", data.token.accessToken);
           
          } else {
            const responseData = await response.json();
            alert(`Failed to create Number Boy: ${responseData.message}`);
          }
        } catch (error) {
          console.error(error);
          // alert("Failed to connect to the server");
        }
      }
  
      function showProfileDropdown() {
        hideAllViews();
        const profileDropdown = document.getElementById("profileDropdown");
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
        document.getElementById("registrationContainer").style.display = "none";
        document.getElementById("subAdminRegistration").style.display = "none";
        document.getElementById("numberBoyRegistration").style.display = "none";
        document.getElementById("telecallerRegistration").style.display = "none";
        document.getElementById("profileContent").style.display = "none";
        document.getElementById("numberEntryForm").style.display = "none";
        // document.getElementById("numberBoyLogin").style.display = "none";
        localStorage.setItem("telecallerId", telecallerId);
        localStorage.setItem("subAdminId", subAdminId);
        localStorage.setItem("numberBoyId", numberBoyId);
   
            
      }
  

  
   
       function showAllNumbersFrom(){
        hideAllViews();
        document.getElementById("registrationContainer").style.display = "none";
        document.getElementById("subAdminRegistration").style.display = "none";
        document.getElementById("numberBoyRegistration").style.display = "none";
        document.getElementById("telecallerRegistration").style.display = "none";
        document.getElementById("profileContent").style.display = "none";
        document.getElementById("allNumbersLink").style.display = "block";
      }
     function showAllNumbers() {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    alert("Authentication token is missing. Please log in again.");
    return;
  }

  fetch("/api/admin/View-All-Numbers", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch number data");
      }
    })
    .then((data) => {
    
      const numbersContent = document.getElementById("numbersContent");
      numbersContent.style.display = "block";
      numbersContent.innerHTML = "";
      data.forEach((number) => {
        const numberContainer = document.createElement("div");

        const freshNewNum = document.createElement("p");
        freshNewNum.textContent = `Fresh New Number: ${number.freshNewNum}`;

        const remarksNew = document.createElement("p");
        remarksNew.textContent = `Remarks New: ${number.remarksNew}`;

        const freshOldNum = document.createElement("p");
        freshOldNum.textContent = `Fresh Old Number: ${number.freshOldNum}`;

        const remarksOld = document.createElement("p");
        remarksOld.textContent = `Remarks Old: ${number.remarksOld}`;

        const entryDate = document.createElement("p");
        entryDate.textContent = `Entry Date: ${number.entryDate}`;
        numberContainer.appendChild(freshNewNum);
        numberContainer.appendChild(remarksNew);
        numberContainer.appendChild(freshOldNum);
        numberContainer.appendChild(remarksOld);
        numberContainer.appendChild(entryDate);

        numbersContent.appendChild(numberContainer);
      });
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });

  }
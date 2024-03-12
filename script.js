// V1.0 LibraryMS

const username = "lib@here"; //predefined for testing
const password = "lib@here";//predefined for testing

const loginScreen = document.getElementById("login");
const loginBtn = document.getElementById("loginbtn");

const logoutMS = document.getElementById("logout");
const libraryMSHome = document.getElementById("libraryMS");

const usernameField = document.getElementById("lib-username");
const passwordField = document.getElementById("lib-password");
const createNewCustomerForm = document.getElementById("createNewCustomerForm");
const createNewCustomerBtn = document.getElementById("createCustomerBtn");

const removeCustField = document.getElementById("removeCustField");
const deleteCustBtn = document.getElementById("deleteCustBtn");




// to validate password and username and login - letting user/librarian see the homepage (right now its just basic, will make it better through iterations )
loginBtn.addEventListener('click', login)
function login() {
    const pass = passwordField.value
    const user = usernameField.value

    if (pass == password && user == username) {
        console.log("Access Allowed");
        loginScreen.style.display = "none";
        libraryMSHome.style.display = "block";

        logoutMS.addEventListener('click', logout)

        // Logout function to logout and go back to login page
        function logout() {
            console.log("you are logged out successfully");
            libraryMSHome.style.display = "none";
            loginScreen.style.display = "block";

        }



        createNewCustomerBtn.addEventListener('click', () => {
            const newCustomer = new FormData(createNewCustomerForm);
            addCust(newCustomer); //Adding new customer/patron by calling addCust()Func

            console.log(newCustomerObject);

        })

        // Function for Adding new Customer 
        let custList = [];
        function addCust(newCust) {
            const newCustomerObject = Object.fromEntries(newCust.entries());
            /* Adding extra key of ID into the Object [this is to make sure each created patrons is uniquely Identifyable, 
                also helps in removing them in case we need to eg. 
                1) Subcription to library expired, or 
                2) patrons/customer unsubscribes voluntarily or,
                3) patrons/customer is blacklisted so he/she doesnt need to be in list of active customer]
          
         */ 
            newCustomerObject.id = uniqueID();
            custList.push(newCustomerObject);
            // console.log(custList[0].id)
            // console.log(custList)

        }
        // to add unique ID to each Customer
        function uniqueID() {
            return Math.floor(Math.random() * 1000000) + Date.now();
        }



    deleteCustBtn.addEventListener("click", () => {
        const custID = removeCustField.value;
        console.log(custID);
      
        custList = removeCustomer(custID, custList); // Update the original list with filtered result
        // console.log(custList);
      });
      
      function removeCustomer(customerID, customerList) {
        console.log(customerID);
        console.log("Items before filtering:", customerList);
        const filteredList = customerList.filter((item) => customerID != item.id);
        console.log("Items after filtering:", filteredList);
        return filteredList;
      }
      



} else {
    // Password incorrect leads to message prompt :
    console.log("access denied, username or password is incorrect");
    // loginScreen.style.display = "block";
}

}

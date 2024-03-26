// import 'bookregister' from './data.js'

// V1.0 LibraryMS
// const username = "@librarian"; //predefined for testing
// const password = "lib@here"; //predefined for testing

const password = document.getElementById("lib-password").value;
const username = document.getElementById("lib-username").value;
const loginScreen = document.getElementById("login");
const loginBtn = document.getElementById("loginbtn");
const logoutMS = document.getElementById("logout");
const libraryMSHome = document.getElementById("libraryMS");
const usernameField = document.getElementById("lib-username");
const passwordField = document.getElementById("lib-password");
const createNewPatronForm = document.getElementById("createNewPatronForm");
const createNewPatronBtn = document.getElementById("createNewPatronBtn");
const removeCustField = document.getElementById("removeCustField");
const deleteCustBtn = document.getElementById("deleteCustBtn");
const patronID_check = document.getElementById("patronID_check");
const fetchPatronDetailsBtn = document.getElementById("fetchpatrondetails");

const issueDetailsTbl_patronID = document.getElementById(
    "issueDetailsTbl_patronID"
);
const issueDetailsTbl_patronName = document.getElementById(
    "issueDetailsTbl_patronName"
);
const issueDetailsTbl_patronPhone = document.getElementById(
    "issueDetailsTbl_patronPhone"
);

// to validate password and username and login - letting user/librarian see the homepage (right now its just basic, will make it better through iterations )

const issueDetailsTbl_bookIssued = document.getElementById(
    "issueDetailsTbl_bookIssued"
);
const issueDetailsTbl_authorName = document.getElementById(
    "issueDetailsTbl_authorName"
);
const issueDetailsTbl_dateOfIssue = document.getElementById(
    "issueDetailsTbl_dateOfIssue"
);
const issueDetailsTbl_publisher = document.getElementById(
    "issueDetailsTbl_publisher"
);
const issueDetailsTbl_dateOfReturn = document.getElementById(
    "issueDetailsTbl_dateOfReturn"
);
const issueDetailsTbl_late = document.getElementById("issueDetailsTbl_late");
const bookIssuedTblData = document.getElementById("bookIssuedTblData");
const searchBookDetails_mdl = document.getElementById("searchBookDetails_mdl");
const book_name_mdl = document.getElementById("book_name_mdl");
const divDataSec = document.querySelector(".div-data-sec");
const fetched_bk_id = document.getElementById("fetched_bk_id");
const fetched_bk_name = document.getElementById("fetched_bk_name");
const fetched_bk_available = document.getElementById("fetched_bk_available");


//This is just a dummy AUTH, its not recommended to store passwords like this, it  should be Hashed properly and then saved for security 
const pass ="lib@here";
const user =  "@librarian";
// 


loginBtn.addEventListener("click", login);
function login() {
 

    if (pass == password && user == username) {
        console.log("Access Allowed");
        loginScreen.style.display = "none";
        libraryMSHome.style.display = "block";

        logoutMS.addEventListener("click", logout);

        // Logout function to logout and go back to login page
        function logout() {
            console.log("you are logged out successfully");
            libraryMSHome.style.display = "none";
            loginScreen.style.display = "block";
        }
    } else {
        console.log("access denied, username or password is incorrect");
        loginScreen.style.display = "block";
    }
}

// auth ends

createNewPatronBtn.addEventListener("click", () => {
    const newPatronomer = new FormData(createNewPatronForm);
    addCust(newPatronomer); //Adding new customer/patron by calling addCust()Func
});
// patronList of all patrons registered
let patronList = [
    {
        patronName: "Chandler",
        patronPhone: "9203928393",
        patronEmail: "chandler@friends.com",
        residentialAddress:
            " Grove Street in West Village, Manhattan, New York City",
        membershipPeriod: "2",
        id: 1710399883333,
    },
    {
        patronName: "Ross",
        patronPhone: "8903928395",
        patronEmail: "ross@friends.com",
        residentialAddress:
            " Grove Street in West Village, Manhattan, New York City",
        membershipPeriod: "10",
        id: 1710399883332,
    },
    {
        patronName: "Joey",
        patronPhone: "7603928377",
        patronEmail: "joey@friends.com",
        residentialAddress:
            " Grove Street in West Village, Manhattan, New York City",
        membershipPeriod: "1",
        id: 1710399883331,
    },
];

console.log(patronList);

// book register of Books in library having all details of books
let bookregister = [
    {
        id: "book-1825",
        bookName: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        publisherName: "J. B. Lippincott & Co.",
        totalNoOfCopies: 50,
        issued: 25,
        lost: 2,
    },

    {
        id: "book-1826",
        bookName: "1984",
        authorName: "George Orwell",
        publisherName: "Secker & Warburg",
        totalNoOfCopies: 35,
        issued: 20,
        lost: 1,
    },

    {
        id: "book-1827",
        bookName: "Pride and Prejudice",
        authorName: "Jane Austen",
        publisherName: "Thomas Egerton",
        totalNoOfCopies: 45,
        issued: 30,
        lost: 3,
    },

    {
        id: "book-1828",
        bookName: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        publisherName: "Charles Scribner's Sons",
        totalNoOfCopies: 40,
        issued: 18,
        lost: 2,
    },
    {
        id: "book-1829",
        bookName: "The Hitchhiker's Guide to the Galaxy",
        authorName: "Douglas Adams",
        publisherName: "Pan Books",
        totalNoOfCopies: 25,
        issued: 15,
        lost: 0,
    },
    {
        id: "book-1830",
        bookName: "Dune",
        authorName: "Frank Herbert",
        publisherName: "Chilton Books",
        totalNoOfCopies: 60,
        issued: 35,
        lost: 4,
    },
];

console.log(bookregister);
// savedList of Book Issued to the Respective Patron against a patronID
let patronBookIssueListObj = [
    {
        patronID: 1710399883332,
        bookIssued: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        publisherName: "J. B. Lippincott & Co.",
        DateOfIssue: new Date("2023-12-01"), // Replace with actual issue date
        DateOfReturn: new Date("2023-12-20"), // Initially set to null as book isn't returned yet
        late: "yes", // Replace with actual due date
    },
    {
        patronID: 1710399883332,
        bookIssued: "1984",
        authorName: "George Orwell",
        publisherName: "Secker & Warburg",
        DateOfIssue: new Date("2023-12-06"), // Replace with actual issue date
        DateOfReturn: new Date("2023-12-26"), // Initially set to null as book isn't returned yet
        late: "yes", // Replace with actual due date
    },
    {
        patronID: 1710399883332,
        bookIssued: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        publisherName: "Charles Scribner's Sons",
        DateOfIssue: new Date("2023-12-03"), // Replace with actual issue date
        DateOfReturn: new Date("2023-12-23"), // Initially set to null as book isn't returned yet
        late: "yes", // Replace with actual due date
    },
    {
        patronID: 1710399883331,
        bookIssued: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        publisherName: "Charles Scribner's Sons",
        DateOfIssue: new Date("2023-12-11"), // Replace with actual issue date
        DateOfReturn: new Date("2023-09-13"), // Initially set to null as book isn't returned yet
        late: "No", // Replace with actual due date
    },

    {
        patronID: 1710399883331,
        bookIssued: "1984",
        authorName: "George Orwell",
        publisherName: "Secker & Warburg",
        DateOfIssue: new Date("2023-12-11"), // Replace with actual issue date
        DateOfReturn: new Date("2023-09-12"), // Initially set to null as book isn't returned yet
        late: "No", // Replace with actual due date
    },

    {
        patronID: 1710399883333,
        bookIssued: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        publisherName: "Charles Scribner's Sons",
        DateOfIssue: new Date("2023-09-01"), // Replace with actual issue date
        DateOfReturn: new Date("2023-12-10"), // Initially set to null as book isn't returned yet
        late: "No", // Replace with actual due date
    },
];

// created Book register section , having details like book name. author, publisher, total no. of copies, issued no of copies, and lost copies.

const showallbooks = document.getElementById("showallbooks");
const searchByBookId = document.getElementById("searchByBookId");
const bookreg_bookIDsearch = document.getElementById("bookreg_bookIDsearch");
const bookregisterTblData = document.getElementById("bookregisterTblData");
const bookRegister_issue_bookname = document.getElementById("bookRegister_issue_bookname");
const bookRegister_issue_authorname = document.getElementById("bookRegister_issue_authorname");
const bookRegister_issue_publisher = document.getElementById("bookRegister_issue_publisher");
const bookRegister_issue_avlcopies = document.getElementById("bookRegister_issue_avlcopies");
const bookRegister_issue_issued = document.getElementById("bookRegister_issue_issued");
const bookRegister_issue_patronID = document.getElementById("bookRegister_issue_patronID");





showallbooks.addEventListener("click", () => renderBookRegister(bookregister)); // Assuming `bookregister` holds your book data

function renderBookRegister(collections) {
    console.log("working");
    bookregisterTblData.innerHTML = "";

    collections.forEach((bookItem) => {
        let buttonId = `issueButton-${bookItem.id}`;
        let row = `<tr class="datarow">
                <td><button data-bkid="${bookItem.id
            }" class="btn btn-success"  onclick="bookRegisterIssueBookApprove(this)" id=${buttonId} data-bs-toggle="modal" data-bs-target="#bookRegister_mdl_issue" >Issue</button></td>
                <td>${bookItem.bookName}</td>
                <td>${bookItem.authorName}</td>
                <td>${bookItem.publisherName}</td>
                <td>${bookItem.totalNoOfCopies}</td>
                <td>${bookItem.issued}</td>
                <td>${bookItem.totalNoOfCopies - bookItem.lost - bookItem.issued
            }</td>  
                <td>${bookItem.lost}</td>
            </tr>`;

        bookregisterTblData.innerHTML += row;
    });
}

// function issueSelected(bookItem) {
//   console.log(bookItem.id);
//   console.log(bookItem.bookName);
// }

function bookRegisterIssueBookApprove(e) {
    let _bkId = e.dataset.bkid;
    let _final = bookregister.filter((f) => f.id == _bkId);
    console.log(_final);

    _final.forEach((book)=>{
       bookRegister_issue_bookname.value = book.bookName;
       bookRegister_issue_authorname.value = book.authorName;
       bookRegister_issue_publisher.value = book.publisherName;
       bookRegister_issue_avlcopies.value= (book.totalNoOfCopies - book.lost) - book.issued;
       bookRegister_issue_patronID.focus();
    });
}


searchByBookId.addEventListener("click", () => {
   const bookId = bookreg_bookIDsearch.value;

    renderByBookID(bookregister, bookId);
});

function renderByBookID(collections, BookId) {
    const matchIndex = collections.findIndex((book) => BookId == book.id);
    console.log(matchIndex);
    if (matchIndex == -1) {
        console.log("Not found");
    } else {
        console.log("found at index : " + matchIndex + " book ID :" + BookId);
        
        let row = `<tr class="datarow">
        <td><button data-bkid="${collections[matchIndex].id
    }" class="btn btn-success"  onclick="bookRegisterIssueBookApprove(this)"  data-bs-toggle="modal" data-bs-target="#bookRegister_mdl_issue" >Issue</button></td>
        <td>${collections[matchIndex].bookName}</td>
        <td>${collections[matchIndex].authorName}</td>
        <td>${collections[matchIndex].publisherName}</td>
        <td>${collections[matchIndex].totalNoOfCopies}</td>
        <td>${collections[matchIndex].issued}</td>
        <td>${collections[matchIndex].totalNoOfCopies - collections[matchIndex].lost - collections[matchIndex].issued
    }</td>  
        <td>${collections[matchIndex].lost}</td>
    </tr>`;

bookregisterTblData.innerHTML += row;



        fetchissueDetails(patronID, patronList, matchIndex);
    }
    // collections.map(()=>)
}
//  function to fetch patron details

fetchPatronDetailsBtn.addEventListener("click", () => {
    let patronIDCheckVal = patronID_check.value;
    console.log(patronIDCheckVal);
    searchPatron(patronIDCheckVal, patronList, patronBookIssueListObj);
    console.log("clicked");
});

//  here we search partons using patronID
function searchPatron(patronID, patronList, patronBookIssueListObj) {
    const matchIndex = patronList.findIndex((patron) => patronID == patron.id);
    console.log(matchIndex);
    if (matchIndex == -1) {
        issueDetailsTbl_patronID.innerText = "no data";
        issueDetailsTbl_patronName.innerText = "no data";
        issueDetailsTbl_patronPhone.innerText ="no data";

    } else {
        console.log("found at index : " + matchIndex + " patron ID :" + patronID);
        fetchissueDetails(patronID, patronList, matchIndex);
    }
    // here we are filtering out matches against patron ID and adding the issue details of books in a new array
    // which we further pass onto renderBookIssuedDetails() as (collections)

    let collections = patronBookIssueListObj
        .filter((issue) => issue.patronID == patronID)
        .map((issue) => ({ ...issue }));
    // TEST : patronBookIssueListObj.findIndex((issueInfo)=>{
    //     if(patronID == issueInfo.patronID){
    //        return console.log("found a match" + issueInfo.patronID + "bookName :" +issueInfo.bookName+ "DateOfIssue :"+ issueInfo.DateOfIssue)
    //     }
    // })
    console.log(collections);
    renderBookIssuedDetails(collections);
}

function fetchissueDetails(patronID, patronList, matchIndex) {
    console.log(patronID);
    console.log(patronList);
    console.log(matchIndex);
    issueDetailsTbl_patronID.innerText = patronID;
    issueDetailsTbl_patronName.innerText = patronList[matchIndex].patronName;
    issueDetailsTbl_patronPhone.innerText = patronList[matchIndex].patronPhone;
}

//  here we render the rows into the table after populating it with data
function renderBookIssuedDetails(collections) {
    bookIssuedTblData.innerHTML = "";
    collections.forEach((item) => {
        let row = `<tr>
            <td>${item.bookIssued}</td>
            <td>${item.authorName}</td>
            <td>${item.publisherName}</td>
            <td>${item.DateOfIssue.toLocaleDateString("en-UK")}</td>
            <td>${item.DateOfReturn.toLocaleDateString("en-UK")}</td>
            <td>${item.late}</td>
            </tr>`;
        bookIssuedTblData.innerHTML += row;
    });
}
// Function for Adding new Customer
function addCust(newPatron) {
    const newPatronObject = Object.fromEntries(newPatron.entries());
    /* Adding extra key of ID into the Object [this is to make sure each created patrons is uniquely Identifyable, 
          also helps in removing them in case we need to eg. 
          1) Subcription to library expired, or 
          2) patrons/customer unsubscribes voluntarily or,
          3) patrons/customer is blacklisted so he/she doesnt need to be in list of active customer]
    
   */
    newPatronObject.id = uniqueID();
    patronList.push(newPatronObject);
    // console.log(patronList[0].id)
    console.log(patronList);
}
function uniqueID() {
    return Math.floor(Math.random() * 1000000) + Date.now();
}

// deleteCustBtn.addEventListener("click", () => {
//     const patronID = removeCustField.value;
//     // console.log(patronID);
//     patronList = removeCustomer(patronID, patronList); // Update the original list with filtered result
//     // console.log(patronList);
// });

function removeCustomer(patronID, patronList) {
    console.log(patronID);

    console.log("Items before filtering:", patronList);
    // this is to find the index of the exact item that has the patronID we trying to search for
    // to give us a performace improvement to look into the exact index in the patronList to filter it and exclude out of the array

    const indexMatch = patronList.findIndex((patron) => patronID == patron.id);
    console.log(indexMatch);

    if (indexMatch !== -1) {
        const filteredList = patronList.filter(
            (item, index) => index != indexMatch
        );
        console.log("Items after filtering:", filteredList);
        errlog_ID_NotFound.style.display = "none";
        successLogFoundandRemoved.style.display = "block";
        successLogFoundandRemoved.textContent = `Customer (${patronID}) Successfully Deleted!`;
        return filteredList;
        //  here we stored it in filteredList after exclusion of the item, we will now return the value and change the original value of patronList
    } else {
        // if we cant find customer,, in case ID is invalid then we should prompt:  Customer not found, log informative message and return original list
        successLogFoundandRemoved.style.display = "none";
        errlog_ID_NotFound.style.display = "block";

        errlog_ID_NotFound.textContent = "No such Customer ID exists: " + patronID;
        return patronList;
    }
}


searchBookDetails_mdl.addEventListener("click", () => {
    bookName = book_name_mdl.value;
    console.log("working");
    fetchBookDetailInModal(bookregister, bookName);
});

// Details fetched to be shown in the issue book modal

function fetchBookDetailInModal(collections, bookName) {
    ;
    console.log("this" + fetched_bk_available);
    _bookName = bookName.toUpperCase();
    console.log("working");
    const matchIndex = collections.findIndex(
        (book) => _bookName.trim() === book.bookName.toUpperCase()
    );

    console.log(matchIndex);
    if (matchIndex == -1) {
        console.log("Not found");
    } else {
        console.log("found at index : " + matchIndex + " Book Name :" + bookName);
        // fetchissueDetails(patronID, patronList, matchIndex);
        divDataSec.style.display = "block";
        console.log(collections[matchIndex].id);

        fetched_bk_id.textContent = collections[matchIndex].id;
        fetched_bk_name.textContent = collections[matchIndex].bookName;
        fetched_bk_available.textContent = (collections[matchIndex].totalNoOfCopies - collections[matchIndex].lost) - collections[matchIndex].issued;
    }
}



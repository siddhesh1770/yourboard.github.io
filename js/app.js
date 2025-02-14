// scanVaccineByPin returns bool if it found vaccine

function scanVaccineByPin(pincode, date) {
  //date = dd-mm-yyyy
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`;
  let r = new XMLHttpRequest();
  r.open("GET", url);
  r.responseType = "json";
  r.send();
  r.onload = function () {
    const vaccData = r.response;
    for (var i = 0; i < vaccData.sessions.length; i++) {
      var session = vaccData.sessions[i];
      if (session.fee_type == "Free") {
        window.open("https://selfregistration.cowin.gov.in/");
        return false;
      } else {
        return true;
      }
    }
  };
}
function setupCalendarCard(isNewCard) {
  console.log("Calendar Card Was Created");
  if (isNewCard) {
    //Registry for
  }
}
function startCowinTracker(i) {
  let p = document.getElementById(`pincode${i}`);
  let d = document.getElementById(`cowinDate${i}`); //yyyy-mm-dd
  let killSwitch = document.getElementById(`killSwitch${i}`);
  let pincode = p.value;
  let date = d.value;
  let dd = date.slice(8, 10);
  let mm = date.slice(5, 7);
  let yyyy = date.slice(0, 4);
  date = dd + "-" + mm + "-" + yyyy; // date = dd-mm-yyyy now

  // console.log(pincode);
  // console.log(date);
}
function closeNoteCard(id, i) {
  let reD = JSON.parse(localStorage.getItem("notesSerial"));
  for (let bosdai = 0; bosdai < reD.notes.length; bosdai++) {
    // console.log(bosdai)
    let yalgar = reD.notes[bosdai];
    let hulu = yalgar.id;
    if (hulu == "null") {
      // console.log(hulu);
    } else {
      if (hulu == `${i}`) {
        reD.notes.splice(bosdai, 1);
        localStorage.setItem("notesSerial", JSON.stringify(reD));
      }
      // let content = reD.notes[bosdai].content;
      // let elem = document.createElement("div");
      // elem.setAttribute("class", "cardLayout");
      // elem.setAttribute(`id`, `card${hulu}`); // new
      // document.querySelector("div.playground").appendChild(elem);
      // setupNotesCardTextArea(hulu, true, content);
    }
  }
  id.remove();
}
function setupCowinCard(i) {
  // let mainArea = document.getElementById('mainArea');
  // let elem = document.createElement('div');
  document.getElementById(`card${i}`).innerHTML = `<div class="cowinh3">
    <h3>Cowin Tracker</h3><br>
<div class="pincode" id="">
    <label for="">Enter pincode - </label>
    <input type="text" id="pincode${i}" class="pincodeAccept" maxlength="6">
    <button id="setPicode">Set</button>
</div><br>
<div class="date1">
    <label>Select Date - </label>
    <input type="date" id="cowinDate${i}">
</div><br>
<div class="searchBtnCowin">
    <button class="newBtn" id="cowinTrackBtn${i}" onclick="startCowinTracker(${i});">Track</button>

</div>
<br><br></div>`;

  //test
  // let script1 = document.createElement('script');
  // script1.innerHTML = `console.log('bhosda')`
  // document.head.appendChild(script1);
  //test
  // let newScript = document.createElement('script');
  // newScript.innerHTML = `console.log(${i} I am here Do not worry)`
  // document.getElementsByTagName('body').appendChild(newScript);
}
function retriveNotes() {
  if (localStorage.getItem("notesSerial") != null) {
    let reD = JSON.parse(localStorage.getItem("notesSerial"));
    for (let bosdai = 0; bosdai < reD.notes.length; bosdai++) {
      // console.log(bosdai)
      let yalgar = reD.notes[bosdai];
      let hulu = yalgar.id;
      if (hulu == "null") {
        console.log(hulu);
      } else {
        let content = reD.notes[bosdai].content;
        let elem = document.createElement("div");
        elem.setAttribute("class", "cardLayout");
        elem.setAttribute(`id`, `card${hulu}`); // new
        document.querySelector("div.playground").appendChild(elem);
        setupNotesCardTextArea(hulu, true, content);
      }
    }
  }
}
function setupNotesCardTextArea(i, isRetrive, content) {
  {
    // console.log(`I created New Notes Card ${i}`);
    let script1 = document.createElement("script");
    // add event listener script here
    document.head.appendChild(script1);
    let content1 = "";
    if (content == "hello") {
      content = content1;
    }
    document.getElementById(
      `card${i}`
    ).innerHTML = `<span style="font-weight: bolder; font-size: 22px; margin-left:100px">Notes<span style="margin-left:50px"><button class="cardCloseBtn" onclick="closeNoteCard(card${i}, ${i})">Close</button></span></span>
    <br>
    <textarea placeholder="Write here something" name="" class="notesClass" id="notesCardInput${i}">${content}</textarea>`;
    let fool = `textarea${i}`;
    // let foo = '${fool}'
    // script1.innerHTML =

    script1.innerHTML = `let textarea${i} = document.getElementById('notesCardInput${i}');
    document.getElementById('notesCardInput${i}').addEventListener('input', function getText() {
        let objFuck = JSON.parse(localStorage.getItem('notesSerial'));
        let hell1770 = document.getElementById(this.id).value;
        let ulluBanaya = false;
        for (let jhalak = 0; jhalak < objFuck.notes.length; jhalak++){
          let jhalakDikhlaja = objFuck.notes[jhalak];
          if (jhalakDikhlaja.id == ${i}){
            ulluBanaya = true;
          }
        }
        if (!ulluBanaya){
          objFuck["notes"].push({"id":${i},notesSerial${i}:"","content":"${content}"})
        }
        for (let akad = 0; akad< objFuck.notes.length; akad++){
          let akadDikha = objFuck.notes[akad];
          if (akadDikha.id == ${i}){
            objFuck.notes[akad].content = hell1770;
          }
        }
        objFuck.notes.notesSerial${i} = hell1770;
        localStorage.setItem('notesSerial', JSON.stringify(objFuck));
        // localStorage.setItem('notesCardInput${i}', document.getElementById(this.id).value);
    });`;
    document.head.appendChild(script1);
  }
}
function createNewCard() {
  let choice = document.getElementById("userCardOption").value;
  if (choice == "none") {
    alert("Please Select Card Type");
    return;
  }
  if (localStorage.getItem("cardSerial") === null) {
    //new
    localStorage.setItem("cardSerial", "0"); //new
  } //new
  let elem = document.createElement("div");
  elem.setAttribute("class", "cardLayout");
  let i = parseInt(localStorage.getItem("cardSerial"));
  elem.setAttribute(`id`, `card${i}`); // new
  document.querySelector("div.playground").appendChild(elem);
  // new

  if (choice === "cowinTracker") {
    setupCowinCard(i);
  } else if (choice === "notes") {
    setupNotesCardTextArea(i, false, "hello");
  } else if (choice === "calendar") {
    setupCalendarCard(true);
  } // add other invokes in elif
  i = i + 1;
  localStorage.setItem("cardSerial", i); //new
}
function buildNavBar() {
  let navBar = document.createElement("nav");
  navBar.setAttribute("class", "noselect navBarHello");
  navBar.setAttribute("id", "navBar");
  navBar.innerHTML = `<div class="logo">My Dashboard</div>
  <input type="checkbox" id="click" />
  <label for="click" class="menu-btn">
    <i class="fas fa-bars"></i>
  </label>
  <ul>
    <li onclick=""><a class="active" href="#">Home</a></li>
    <li onclick="setupDonatePage()"><a href="#">Donate</a></li>
    <li onclick="setupAboutPage()"><a href="#">About</a></li>
    <li onclick="setupContactUsPage()"><a href="#">Contact Us</a></li>
    <li onclick="setupFeedbackPage()"><a href="#">Feedback</a></li>
  </ul>`;
  let script = document.getElementById("hello");
  document.body.insertBefore(navBar, script);
}
function buildHomeControlBar() {
  let homeControlBar = document.createElement("div");
  homeControlBar.setAttribute("class", "noselect");
  homeControlBar.setAttribute("id", "newBtnArea");
  homeControlBar.innerHTML = `<span class="labelForNewBtn"
  >Hey User, Click Here to create new card.</span
>
<div class="select-style" style="width: 200px">
  <select class="inside-saga" id="userCardOption">
    <option value="none">Select Your New card</option>
    <option value="cowinTracker">Cowin Tracker</option>
    <option value="stockTracker">Stock Price Tracker</option>
    <option value="notes">Notes</option>
    <option value="calendar">Calendar</option>
    <option value="spotify">Spotify Controller</option>
  </select>
</div>
<button class="newBtn" id="newCardBtn1">+ Create New Card</button>`;
  let script = document.getElementById("hello");
  document.body.insertBefore(homeControlBar, script);
}
function buildHeadingBar(message) {
  let headingBar = document.createElement("div");
  headingBar.setAttribute("noselect heading");
  headingBar.innerHTML = `${message}`;
  let script = document.getElementById("hello");
  document.insertBefore(headingBar, script);
}
function buildHomeMainArea() {
  let mainArea = document.createElement("div");
  let script = document.getElementById("hello");
  mainArea.setAttribute("class", "playground noselect");
  mainArea.setAttribute("id", "mainArea");
  document.insertBefore(mainArea, script);
}
function buildFooter() {
  // Pending
}
// -------------------load up schedule start-----------------------
if (localStorage.getItem("notesSerial") === null) {
  let obj432 = {
    notes: [
      { id: "null", notesSerialNull: "null", name: "Collection of Notes" },
    ],
  }; //Important
  localStorage.setItem("notesSerial", JSON.stringify(obj432));
}
retriveNotes();
// -------------------load up schedule end-----------------------

// -----------------Event Listeners----------------------------------------
document.getElementById("newCardBtn").addEventListener("click", function () {
  let btnId = this.id;
  createNewCard(btnId);
});

// let textarea = document.getElementById('notesCardInput');
// textarea.addEventListener('input', function getText() {
//     localStorage.setItem('notesCardInput', `${textarea.value}`);
// });

// document.getElementById().addEventListener('click', function () {
//     let idSerial = (this.id);
//     idSerial = idSerial.slice(13, 14);
//     console.log(idSerial);
// });

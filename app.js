
function getData() {
    const username = document.getElementById("username").textContent;
    const title = document.getElementById("titlefield").value;
    const val = document.getElementById("exampleFormControlTextarea4").value;
    const time = new Date();
    const dateformat = time.getHours() + ":" + time.getMinutes() + " " + time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear();
    // console.log(val + " " + dateformat)

    var create = document.createElement('DIV');
    create.innerHTML = `<div class="container card animate__animated animate__fadeIn" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text" style="font-weight:bold">${username}</p>
  <h5 class="card-title"required>${title} <span style="float:right"><button onclick="edditablefunction()" type="submit" id="edit-button" class="btn btn-danger">Edit</button> <i id="savebtn" onclick="savebtns()" style="visibility:hidden ; color:#00ab66; cursor:pointer" class="fa-solid fa-floppy-disk"></i></span></h5>
  <h6 class="card-subtitle mb-2 text-muted"></h6>
  <p class="card-text" id="edditablecontent" required> ${val}</p>
  <p class="card-text" ><i class="fa-solid fa-clock"></i> ${dateformat}</p>
  
  </div>
  </div></br>`


    document.body.appendChild(create)
}


//eddit button functionality
function edditablefunction(){
    
    const eddit_btn = document.getElementById("edit-button");
    const paragraph = document.getElementById("edditablecontent");
    const savebtn = document.getElementById("savebtn");
    paragraph.contentEditable = true;
    // paragraph.style.border = "none";
    eddit_btn.style.display = "none";
    savebtn.style.visibility = "visible";
}

function savebtns(){
    // const savebtnone = document.getElementById("savebtn");
    const paragraphone = document.getElementById("edditablecontent");
    paragraphone.contentEditable =false;


}






// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');

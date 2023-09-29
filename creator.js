//declared global variables of all data i need saved
//added square brackets to make into arrays
var teacherGrade9 = []; 
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeNone = [];
var teacherClub = [];
var teacherCategory = [];
var teacherAnnouncementDetails = [];

//variable counter and intialized  to zero in global scope
var counter = 0;

//links creator js to button in html
function getTeacherDetails(){
  
// gets element object from html from id which s written in the string. .checked is for checkboxes  .value is for dropdowns & textareas
teacherGrade9[counter] = document.getElementById("htmlTGrade9").checked;
teacherGrade10[counter] = document.getElementById("htmlTGrade10").checked;
teacherGrade11[counter] = document.getElementById("htmlTGrade11").checked;
teacherGrade12[counter] = document.getElementById("htmlTGrade12").checked;
teacherGradeNone[counter] = document.getElementById("htmlTGradeNone").checked;
teacherClub[counter] = document.getElementById("htmlTClub").value;
teacherCategory[counter] = document.getElementById("htmlTCategory").value;
teacherAnnouncementDetails[counter] = document.getElementById("htmlTAnnouncement").value;

//stores eveything in local storage("key", value), local storage sotres all information inputed by teacher forever
 //The sessionStorage property stores data for one session (data is lost when the browser tab is closed)
  //JSON.stringify stores arrays as a string becuse only strings can be saved in local storage
localStorage.setItem("teacherGrade9Key", JSON.stringify (teacherGrade9));
localStorage.setItem("teacherGrade10Key", JSON.stringify (teacherGrade10));
localStorage.setItem("teacherGrade11Key", JSON.stringify (teacherGrade11));
localStorage.setItem("teacherGrade12Key", JSON.stringify (teacherGrade12));
localStorage.setItem("teacherGradeNoneKey", JSON.stringify (teacherGradeNone));
localStorage.setItem("teacherClubKey", JSON.stringify (teacherClub));
localStorage.setItem("teacherCategoryKey", JSON.stringify (teacherCategory));
localStorage.setItem("teacherDetailsKey", JSON.stringify (teacherAnnouncementDetails));

  //inccremenrs the value of teh counter, and the next announcement  is added to array
  counter++;
  
}

function getExistingAnnouncements(){

  //JSON.parse lets you
  if(JSON.parse(localStorage.getItem("teacherGrade9Key")) != null){
  teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
  teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
  teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
  teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
  teacherGradeNone = JSON.parse(localStorage.getItem("teacherGradeNoneKey"));
  teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
  teacherCategory = JSON.parse(localStorage.getItem("teacherCategoryKey"));
  teacherAnnouncementDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

    counter = teacherGrade9.length;
  }
}

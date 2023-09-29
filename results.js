// declaring variable that I want from teacher creator page and student search page
// makes variable into arrays by adding square brackets
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeNone = [];
var teacherClub = [];
var teacherCategory = [];
var teacherAnnouncementDetails = [];
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeNone;
var studentClub;
var studentCategory;

//collecccts announcements which match student search criiteria
var annouoncementTextHolder= " ";

function displayResults(){
//JSON.parse retrivies arrays
  //  gets values/info from localstoarge  and displays it on the student search page
teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
teacherGradeNone = JSON.parse(localStorage.getItem("teacherGradeNoneKey"));
teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
teacherCategory = JSON.parse(localStorage.getItem("teacherCategoryKey"));
teacherAnnouncementDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"));
studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"));
studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"));
studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"));
studentGradeNone = JSON.parse(localStorage.getItem("studentGradeNoneKey"));
studentClub = JSON.parse(localStorage.getItem("studentClubKey"));
studentCategory = JSON.parse(localStorage.getItem("studentCategoryKey"));

//when a match is found the teacher's announcement details is added to teh announccmeetextholder which stores annoucment details
for (let i = 0; i < teacherGrade9.length; i++){
if (
  ((teacherGrade9[i]===studentGrade9 && teacherGrade9[i]===true) || (teacherGrade10[i]===studentGrade10 && teacherGrade10[i]===true) ||(teacherGrade11[i]===studentGrade11 && teacherGrade11[i]===true)|| (teacherGrade12[i]===studentGrade12 && teacherGrade12[i]===true) || (teacherGradeNone[i]===studentGradeNone && teacherGradeNone[i]===true) || (teacherGradeNone[i]===studentGrade10 && teacherGradeNone[i]===true) || (teacherGradeNone[i]===studentGrade11 && teacherGradeNone[i]===true) || (teacherGradeNone[i]===studentGrade12 && teacherGradeNone[i]===true) || (teacherGrade9[i]===studentGradeNone && teacherGrade9[i]===true) || (teacherGrade10[i]===studentGradeNone && teacherGrade10[i]===true) || (teacherGrade11[i]===studentGradeNone && teacherGrade11[i]===true) || (teacherGrade12[i]===studentGradeNone && teacherGrade12[i]===true)) && (teacherClub[i]===studentClub) && (teacherCategory[i]===studentCategory)
) {
  
  ///this adds the current announcement details to whatever has previously been added to the announcementTextHolder,
  annouoncementTextHolder += teacherAnnouncementDetails[i];
}

}
 document.getElementById("htmlSAnnouncement").innerHTML = annouoncementTextHolder; 
}
//The .innerHTML is a property we can use to insert/change content of an element. 
//if nothing is found this is shown 
if (annouoncementTextHolder === ""){
  document.getElementById("htmlSAnnouncement").innerHTML="Cant find";
}else {
  document.getElementById("htmlSAnnouncement").innerHTML = annouoncementTextHolder
}

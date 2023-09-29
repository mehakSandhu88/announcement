//global variable of all data needed to be save from student inputs 
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeNone;
var studentClub;
var studentCategory;

//function links button and js
function getStudentDetails(){
studentGrade9 = document.getElementById("htmlSGrade9").checked;
studentGrade10 = document.getElementById("htmlSGrade10").checked;
  studentGrade11 = document.getElementById("htmlSGrade11").checked;
  studentGrade12 = document.getElementById("htmlSGrade12").checked;
  studentGradeNone = document.getElementById("htmlSGradeNone").checked;
  studentClub = document.getElementById("htmlSClub").value;
  studentCategory = document.getElementById("htmlSCategory").value;

//stores everything in local storage
localStorage.setItem("studentGrade9Key", studentGrade9);
localStorage.setItem("studentGrade10Key", studentGrade10);
localStorage.setItem("studentGrade11Key", studentGrade11);
localStorage.setItem("studentGrade12Key", studentGrade12);
localStorage.setItem("studentGradeNoneKey", studentGradeNone);
localStorage.setItem("studentClubKey", studentClub);
localStorage.setItem("studentCategoryKey", studentCategory);

}

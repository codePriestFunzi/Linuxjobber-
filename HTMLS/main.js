const sliderDefaultValue = [0, 0, 0, 0, 0]

function rangeChange (param) {
  var slider = document.getElementById(param)
  const sliderValue = slider.value
  var output = document.getElementById('myrange' + param)
  output.innerHTML = slider.value
  sliderDefaultValue[param - 1] = sliderValue
  var newSliderValue = sliderDefaultValue.filter((e, index) => {
    return index != param - 1
  })

  if (newSliderValue.includes(sliderValue)) {
    document.getElementById('errorDiv').classList.add('d-block')
    document.querySelector('.done').style.display = 'none'
  } else {
    document.getElementById('errorDiv').classList.remove('d-block')
    document.querySelector('.done').style.display = 'block'
  }
}

function student () {
  document.querySelector('.course_study').style.display = 'block'
  document.querySelector('.yes1').style.display = 'block'
  document.querySelector('.no1').style.display = 'none'
}

function noStudent () {
  document.querySelector('.course_study').style.display = 'none'
  document.querySelector('.yes1').style.display = 'none'
  document.querySelector('.no1').style.display = 'block'
}

function noGraduate () {
  document.querySelector('.graduate').style.display = 'block'
  document.querySelector('.yesGraduate').style.display = 'none'
  document.querySelector('.yes2').style.display = 'none'
  document.querySelector('.no2').style.display = 'block'
}

function yesGraduate () {
  document.querySelector('.yesGraduate').style.display = 'block'
  document.querySelector('.graduate').style.display = 'none'
  document.querySelector('.yes2').style.display = 'block'
  document.querySelector('.no2').style.display = 'none'
}

function noPostgraduate () {
  document.querySelector('.completed').style.display = 'none'
  document.querySelector('.next').style.display = 'block'
  document.querySelector('.yes3').style.display = 'none'
  document.querySelector('.no3').style.display = 'block'
}

function postGraduate () {
  document.querySelector('.completed').style.display = 'block'
  document.querySelector('.yes3').style.display = 'block'
  document.querySelector('.no3').style.display = 'none'
}

function completed () {
  document.querySelector('.next').style.display = 'block'
  document.querySelector('.notCompleted').style.display = 'none'
  document.querySelector('.yes4').style.display = 'block'
  document.querySelector('.no4').style.display = 'none'
}

function notCompleted () {
  document.querySelector('.notCompleted').style.display = 'block'
  document.querySelector('.next').style.display = 'block'
  document.querySelector('.yes4').style.display = 'none'
  document.querySelector('.no4').style.display = 'block'
}

function next () {
  document.querySelector('.two').style.display = 'block'
  document.querySelector('.one').style.display = 'none'
}

function done () {
  document.querySelector('.three').style.display = 'block'
  document.querySelector('.two').style.display = 'none'
}

// functions for topics and students
function showTopics () {
    document.querySelector('.students').style.display = 'none'
    document.querySelector('.courses').style.display = 'block'
}

function showStudents () {
  document.querySelector('.students').style.display = 'block'
  document.querySelector('.courses').style.display = 'none'
}

function showVideo (){
  document.querySelector('.notes').style.display = 'none'
  document.querySelector('.videos').style.display = 'block'
  document.querySelector('.labs').style.display = 'none'
  document.querySelector('.chat').style.display = 'none'
}

function showNotes (){
  document.querySelector('.notes').style.display = 'block'
  document.querySelector('.videos').style.display = 'none'
  document.querySelector('.labs').style.display = 'none'
  document.querySelector('.chat').style.display = 'none'
}

function showLab (){
  document.querySelector('.notes').style.display = 'none'
  document.querySelector('.videos').style.display = 'none'
  document.querySelector('.labs').style.display = 'block'
  document.querySelector('.chat').style.display = 'none'
}
function showChat (){
  document.querySelector('.notes').style.display = 'none'
  document.querySelector('.videos').style.display = 'none'
  document.querySelector('.labs').style.display = 'none'
  document.querySelector('.chat').style.display = 'block'
}


// function for showing particupants
function showParticipants (){
   document.querySelector('.block').style.display = 'block'
}

var input = document.getElementById( 'file-upload' );
var infoArea = document.getElementById( 'file-upload-filename' );

input.addEventListener( 'change', showFileName );

function showFileName( event ) {
  
  // the change event gives us the input it occurred in 
  var input = event.srcElement;
  
  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName = input.files[0].name;
  
  // use fileName however fits your app best, i.e. add it into a div
  infoArea.textContent = fileName;
}

// functions for feedback
function closeFeedBack() {
  document.querySelector(".closefeedback").style.display ="none"
}

function openFeedBack() {
  document.querySelector(".closefeedback").style.display ="block"
}


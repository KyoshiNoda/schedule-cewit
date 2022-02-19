const daysChecked = document.querySelectorAll(".checkbox");
// const submitButton = document.querySelector("button");
const forms = document.querySelector("form");

let daysPicked =[]; 
forms.addEventListener("submit",function (e){
    e.preventDefault();
    const courseTitle = forms.elements.courseTitle.value;
    const color = forms.elements.color.value;
    const time = forms.elements.time.value;
    const location = forms.elements.location.value;
    const professor = forms.elements.professor.value;
    console.log(courseTitle);
    console.log(color);

    daysChecked.forEach(checkbox =>{
        if(checkbox.checked){
            daysPicked.push(true);
        }
        else{
            daysPicked.push(false);
        }
    });
    console.log(daysPicked);
    console.log(time);
    console.log(location);
    console.log(professor);
});
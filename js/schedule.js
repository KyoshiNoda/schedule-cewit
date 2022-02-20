const daysChecked = document.querySelectorAll('.checkbox');
const timeSlots = document.querySelectorAll('.grid-hour');
const gridItems = document.getElementsByClassName('grid-item');
let daysPicked = [];
const submitButton = document.getElementById('submit-form');
const forms = document.querySelector('form');
// const week = document.querySelectorAll('.schedule-day.part1');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const courseInput = document.querySelector('#courseTitle');
  const colorInput = document.querySelector('#colorPicker');

  const mondayCheckbox = document.querySelector('.monday-checkbox');
  const tuesdayCheckbox = document.querySelector('.tuesday-checkbox');
  const wednesdayCheckbox = document.querySelector('.wednesday-checkbox');
  const thursdayCheckbox = document.querySelector('.thursday-checkbox');
  const fridayCheckbox = document.querySelector('.friday-checkbox');

  const dropDownMenu = document.querySelector('#time-slots');
  const locationInput = document.querySelector('.location-input');
  const professorInput = document.querySelector('.professor-input');

  // Fill in array
  daysChecked.forEach((checkbox) => {
    if (checkbox.checked) {
      daysPicked.push(true);
    } else {
      daysPicked.push(false);
    }
  });

  let index = 0;
  for (let gridItem of gridItems) {
    if (gridItem.innerText === dropDownMenu.value) {
      for (let i = 0; i < daysPicked.length; i++) {
        if (daysPicked[i]) {
          gridItems[index + i + 1].style.backgroundColor = colorInput.value;
          gridItems[
            index + i + 1
          ].innerText = `${courseInput.value}\n${locationInput.value}\n${professorInput.value}`;
        }
      }
    }
    index++;
  }

  daysPicked = [];
  courseTitle.value = '';
  colorInput.value = '';
  locationInput.value = '';
  professorInput.value = '';
  dropDownMenu.value = '';
  daysChecked.forEach((box) => (box.checked = false));
});

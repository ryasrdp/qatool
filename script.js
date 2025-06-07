// JavaScript to handle input and display the output
document.getElementById('submitButton').addEventListener('click', function() {
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const genderError = document.getElementById('genderError');

  firstNameError.textContent = '';
  lastNameError.textContent = '';
  genderError.textContent = '';

  // Get the values from the input fields
  const userFirstName = document.getElementById('userFirstName').value.trim();
  const userMiddleName = document.getElementById('userMiddleName').value.trim();
  const userLastName = document.getElementById('userLastName').value.trim();
  const userBirthDate = document.getElementById('userBirthDate').value;
  const userBirthPlace = document.getElementById('userBirthPlace').value.trim();
  const userNationality = document.getElementById('userNationality').value.trim();
  const userCitizenship = document.getElementById('userCitizenship').value.trim();
  const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
  const maritalStatusRadioButtons = document.querySelectorAll('input[name="maritalStatus"]');
  const hasChildrenRadioButtons = document.querySelectorAll('input[name="hasChildren"]');

  const educationLevel = document.getElementById('educationLevel').value;
  const institutionName = document.getElementById('institutionName').value.trim();
  const graduationYear = document.getElementById('graduationYear').value.trim();
  const specialization = document.getElementById('specialization').value.trim();
  const otherEducation = document.getElementById('otherEducation').value.trim();

  let selectedGender = '';
  let selectedMaritalStatus = '';
  let selectedHasChildren = '';

  let isValid = true;

  if (userFirstName === '') {
    firstNameError.textContent = 'First Name is required.';
    isValid = false;
  }

  if (userLastName === '') {
    lastNameError.textContent = 'Last Name is required.';
    isValid = false;
  }

  let genderSelected = false;
  for (const radioButton of genderRadioButtons) {
    if (radioButton.checked) {
      selectedGender = radioButton.value;
      genderSelected = true;
      break;
    }
  }

  let maritalStatusSelected = false;
  for (const radioButton of maritalStatusRadioButtons) {
    if (radioButton.checked) {
      selectedMaritalStatus = radioButton.value;
      maritalStatusSelected = true;
      break;
    }
  }

  let hasChildrenSelected = false;
  for (const radioButton of hasChildrenRadioButtons) {
    if (radioButton.checked) {
      selectedHasChildren = radioButton.value;
      hasChildrenSelected = true;
      break;
    }
  }

  if (!genderSelected) {
    genderError.textContent = 'Gender is required.';
    isValid = false;
  } else {
    genderError.textContent = '';
  }

  if (!isValid) {
    return;
  }


  // Display the text in the table cells
  document.getElementById('outputUserFirstName').textContent = userFirstName;
  document.getElementById('outputUserMiddleName').textContent = userMiddleName;
  document.getElementById('outputUserLastName').textContent = userLastName;
  document.getElementById('outputUserBirthDate').textContent = userBirthDate;
  document.getElementById('outputUserBirthPlace').textContent = userBirthPlace;
  document.getElementById('outputUserNationality').textContent = userNationality;
  document.getElementById('outputUserCitizenship').textContent = userCitizenship;
  document.getElementById('outputUserGender').textContent = selectedGender;
  document.getElementById('outputMaritalStatus').textContent = selectedMaritalStatus;
  document.getElementById('outputHasChildren').textContent = selectedHasChildren;

  // Display the education information in the table cells
  document.getElementById('outputEducationLevel').textContent = educationLevel;
  document.getElementById('outputInstitutionName').textContent = institutionName;
  document.getElementById('outputGraduationYear').textContent = graduationYear;
  document.getElementById('outputSpecialization').textContent = specialization;
  document.getElementById('outputOtherEducation').textContent = otherEducation;
});

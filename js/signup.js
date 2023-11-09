
const progressSteps = document.querySelectorAll('.progress-step');
const forms = document.querySelectorAll('.form-step');
const serviceForm = document.querySelector('#service-form');
const teamMemberForm = document.querySelector('#team-member-form');
const backButton = document.querySelector('#back-btn');
const saveProfileButton = document.querySelector('#save-profile-btn');
const nextButton = document.querySelector('#next-btn');

let FORM_NUMBER = 0;

FORM_NUMBER === 0 ? backButton.classList.add('d-none') : backButton.classList.remove('d-none');

const updateForm = (state) => {
  state === 'next-btn' ? FORM_NUMBER++ : FORM_NUMBER--;
  forms.forEach(form => {
    form.classList.contains('active') && form.classList.remove('active');
  });
  forms[FORM_NUMBER].classList.add('active');
  FORM_NUMBER === 0 ? backButton.classList.add('d-none') : backButton.classList.remove('d-none');
  
  if(FORM_NUMBER === 4){
    nextButton.classList.add('d-none');
    saveProfileButton.classList.remove('d-none')
  }else{
    nextButton.classList.remove('d-none');
    saveProfileButton.classList.add('d-none');
  }
  updateProgressSteps()
}

const updateProgressSteps = () => {
  progressSteps.forEach(step => {
    step.classList.contains('active') && step.classList.remove('active');
  });
  progressSteps[FORM_NUMBER].classList.add('active');
}

const addNewService = () => {
  serviceForm.classList.remove('d-none');
  document.getElementById('new-service-btn').classList.add('d-none');
}

const saveService = () => {
  serviceForm.classList.add('d-none');
  document.getElementById('new-service-btn').classList.remove('d-none');
}

const addNewTeamMember = () => {
  teamMemberForm.classList.remove('d-none');
  document.getElementById('new-team-member-btn').classList.add('d-none');
}

const saveTeamMember = () => {
  teamMemberForm.classList.add('d-none');
  document.getElementById('save-team-member-btn').classList.remove('d-none');
}

const saveProfile = () => {

}

//Event listeners
document.getElementById('next-btn').addEventListener('click', () => updateForm('next-btn'));
document.getElementById('back-btn').addEventListener('click', () => updateForm('back-btn'));
document.getElementById('new-service-btn').addEventListener('click', addNewService);
document.getElementById('save-service').addEventListener('click', saveService);
document.getElementById('new-team-member-btn').addEventListener('click', addNewTeamMember);
document.getElementById('save-team-member-btn').addEventListener('click', saveTeamMember);
document.getElementById('save-profile-btn').addEventListener('click', saveProfile);

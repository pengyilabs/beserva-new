const progressSteps = document.querySelectorAll('.progress-step');
const forms = document.querySelectorAll('.form-step');
const serviceForm = document.querySelector('#service-form');
const teamMemberForm = document.querySelector('#team-member-form');
const backButton = document.querySelector('#back-btn');
const saveProfileButton = document.querySelector('#save-profile-btn');
const nextButton = document.querySelector('#next-btn');
const services = document.querySelectorAll('service-item');


let FORM_NUMBER = 0;
const SERVICES = [];
const TEAM_MEMBERS = [];

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
  document.getElementById('services-list').classList.add('d-none');
}

const saveService = () => {
  const category = document.getElementById('service-category').value;
  const name = document.getElementById('service-name').value;
  const price = document.getElementById('service-price').value;

  serviceForm.classList.add('d-none');
  document.getElementById('new-service-btn').classList.remove('d-none');
  document.getElementById('services-list').classList.remove('d-none');

  const serviceItem = 
    `<div class="service-item card mb-2 border-secondary" id="${services.length}">
      <div class="card-body d-flex justify-content-between">
        <div>
          <span class="fs-7 text-gray">${category}</span>
          <h6 class="mb-0">${name}</h6>
          <span class="text-gray">${price}</span>
        </div>
        <div>
          <button class="btn btn-link">
            <i class="bi bi-pen" style="color: $gray"></i>
          </button>
          <button class="btn btn-link">
            <i class="bi bi-trash" style="color: $gray"></i>
          </button>
        </div>
      </div>
    </div>`

  SERVICES.push(serviceItem);
  const servicesString = SERVICES.join(',').replace(',' , '');
  document.getElementById('services-list').innerHTML = servicesString;
}

const addNewTeamMember = () => {
  teamMemberForm.classList.remove('d-none');
  document.getElementById('new-team-member-btn').classList.add('d-none');
  document.getElementById('members-list').classList.add('d-none');
}

const saveTeamMember = () => {
  const category = document.getElementById('member-category').value;
  const name = document.getElementById('member-name').value;

  teamMemberForm.classList.add('d-none');
  document.getElementById('new-team-member-btn').classList.remove('d-none');
  document.getElementById('members-list').classList.remove('d-none');

  const memberItem = 
  `<div class="member-item card mb-2 border-secondary" id="${services.length}">
    <div class="card-body d-flex justify-content-between">
      <div class="d-flex">
        <div class="rounded-circle>
          <img src='assets/images/profile/review-profile-photo.png'>
        </div>
        <div>
          <span class="fs-7 text-gray">${category}</span>
          <h6 class="mb-0">${name}</h6>
          <span class="text-success fs-7">3 services</span>
        </div>
      </div>
      <div>
        <button class="btn btn-link">
          <i class="bi bi-pen" style="color: $gray"></i>
        </button>
        <button class="btn btn-link">
          <i class="bi bi-trash" style="color: $gray"></i>
        </button>
      </div>
    </div>
  </div>`

  TEAM_MEMBERS.push(memberItem);
  const memberString = TEAM_MEMBERS.join(',').replace(',' , '');
  document.getElementById('members-list').innerHTML = memberString;
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

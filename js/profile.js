const submenuItems = document.querySelectorAll('.submenu-item');
const sections = document.querySelectorAll('.profile-content');

let SECTION_ID = "info";

const updateSectionContent = (sectionId) => {
  SECTION_ID = sectionId;

  sections.forEach(section => {
    console.log(section);
    section.classList.contains('active') && section.classList.remove('active');
    section.id === SECTION_ID && section.classList.add('active');
  });
  updateSubMenu();
}

const updateSubMenu = () => {
  submenuItems.forEach(item => {
    item.classList.contains('active') && item.classList.remove('active');
    item.id === SECTION_ID && item.classList.add('active');
  })
}

submenuItems.forEach(item => {
  item.addEventListener('click', () => updateSectionContent(item.id));
});
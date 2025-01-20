// Filter skills based on the selected category
const skillButtons = document.querySelectorAll('.skill-btn');
const skillItems = document.querySelectorAll('.skill-item');
const ListItems = document.querySelectorAll('.nav-items li');
const anchor = document.querySelectorAll('.nav-items li a');

anchor.forEach((e)=>{
  e.addEventListener('click', (a)=>{
    anchor.forEach(btn => btn.classList.remove('clickOne'));
    a.target.classList.add('clickOne');
    ListItems.forEach(li => li.classList.remove('box-shadow'));
    let parent = e.parentElement;
    parent.classList.add('box-shadow');
  })
})

// Add click event listeners to buttons
skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active class from all buttons
    skillButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add the active class to the clicked button
    button.classList.add('active');

    // Get the data-filter value
    const filter = button.getAttribute('data-filter');
    
    // Show/hide skill items based on filter
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});
function toggleMenu() {
  const nav = document.querySelector(".nav-items");
  nav.classList.toggle("active");
}
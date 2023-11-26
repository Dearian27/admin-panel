document.addEventListener('DOMContentLoaded', function() {
  function showContent(route) {
    const sections = document.querySelectorAll('.container section');
    console.log(sections)
    sections.forEach(section => {
      const sectionRoute = section.getAttribute('data-route');
      console.log(sectionRoute, route);
      if (sectionRoute === route) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  window.addEventListener('popstate', function(event) {
    event.preventDefault();
    const route = window.location.pathname;
    showContent(route);
  });

  const initialRoute = window.location.pathname;
  console.log(initialRoute)
  showContent(initialRoute);
});


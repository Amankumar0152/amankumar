function filterProjects(category) {
    let projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.style.display = 'none'; // Hide all cards initially
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // Show only matching category cards
        }
    });
}

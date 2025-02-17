// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to projects
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
});

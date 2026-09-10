document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar nav a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // --- Lógica de botones de proyectos---
    const botones = document.querySelectorAll('.proyecto-btn');
    const paneles = document.querySelectorAll('.proyecto-panel');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            botones.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            paneles.forEach(panel => panel.hidden = true);

            const idProyecto = boton.dataset.proyecto;
            document.getElementById(idProyecto).hidden = false;
        });
    });
});
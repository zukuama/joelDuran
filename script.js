document.addEventListener("DOMContentLoaded", function () {
    const abrirModal = document.getElementById("abrirModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modalFormulario = document.getElementById("modalFormulario");
    const siAsistire = document.getElementById("siAsistire");
    const noAsistire = document.getElementById("noAsistire");
    const formulario = document.getElementById("formulario");

    abrirModal.addEventListener("click", function () {
        modalFormulario.style.display = "block";
    });

    cerrarModal.addEventListener("click", function () {
        modalFormulario.style.display = "none";
    });

    siAsistire.addEventListener("click", function () {
        window.location.href = "https://wa.link/o9l0d4";
        modalFormulario.style.display = "none";
    });

    noAsistire.addEventListener("click", function () {
        window.location.href = "https://wa.link/qn9909";
        modalFormulario.style.display = "none";
    });
});
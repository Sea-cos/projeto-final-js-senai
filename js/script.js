function toggleAcc(btn) {
    const item = btn.closest('.acc-item');
    const isOpen = item.classList.contains('open');
    item.closest('.accordion').querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

//Scripts universais das paginas de exemplos:
function abrirModal() {
    const html = document.documentElement.outerHTML;
    document.getElementById('codigo').textContent = html;
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        fecharModal();
    }
}
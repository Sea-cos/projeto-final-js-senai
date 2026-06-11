function toggleAcc(btn) {
    const item = btn.closest('.acc-item');
    const isOpen = item.classList.contains('open');
    item.closest('.accordion').querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}
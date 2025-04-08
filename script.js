function showSuccess(event) {
    event.preventDefault();
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'block';
    
    // Simula o envio do formulário
    setTimeout(() => {
        event.target.submit();
    }, 2000);
}

// Anima labels quando o input está preenchido
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== '') {
            input.previousElementSibling.style.transform = 'translateY(0)';
            input.previousElementSibling.style.fontSize = '0.9em';
        } else {
            input.previousElementSibling.style.transform = 'translateY(25px)';
            input.previousElementSibling.style.fontSize = '1em';
        }
    });
});
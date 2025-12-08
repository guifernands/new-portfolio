copiaEmail();

function copiaEmail() {
    const emailLink = document.querySelector('.btn-copia');
    const emailIcon = document.querySelector('#icone-email');
    const emailText = document.querySelector('#texto-email');

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();

        const email = emailLink.getAttribute('data-email');

        // area de transferencia 
        navigator.clipboard.writeText(email).then(() => {
            
            emailLink.classList.add('copiado-sucesso');

            // troca de icones
            emailIcon.classList.remove('fa-envelope');
            emailIcon.classList.add('fa-check');

            const textoOriginal = emailText.innerText;
            emailText.innerText = "Copiado!";

            setTimeout(() => {
                emailLink.classList.remove('copiado-sucesso');
                emailIcon.classList.remove('fa-check');
                emailIcon.classList.add('fa-envelope');
                emailText.innerText = textoOriginal;
            }, 2000);
        });
    });
}
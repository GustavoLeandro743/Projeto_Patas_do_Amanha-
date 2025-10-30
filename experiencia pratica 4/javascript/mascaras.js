document.addEventListener('DOMContentLoaded', function() {
    
    /* ======================================================= */
    /* A. NAVEGAÇÃO INTERATIVA (Menu Hambúrguer)               */
    /* ======================================================= */
    
    const menuToggleButton = document.getElementById('menu-toggle'); 
    const mobileMenuContent = document.getElementById('mobile-menu-content'); 

    if (menuToggleButton && mobileMenuContent) {
        menuToggleButton.addEventListener('click', function() {
            // Alterna a classe 'active' para mostrar/esconder o menu
            mobileMenuContent.classList.toggle('active');
            
            // Opcional: Alterna a classe 'is-open' no botão para animação de X
            menuToggleButton.classList.toggle('is-open'); 
        });
    }

    /* ======================================================= */
    /* B. FUNÇÕES DE MÁSCARA JS (Máscaras Interativas)         */
    /* ======================================================= */

    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    /**
     * Aplica a máscara ao valor de um input.
     */
    function applyMask(input, mask) {
        let i = 0;
        const originalValue = input.value.replace(/\D/g, ''); 
        let maskedValue = '';

        if (!originalValue) return;

        for (let m = 0; m < mask.length; m++) {
            if (i >= originalValue.length) break;

            const maskChar = mask[m];

            if (maskChar === '0') {
                // Espera um dígito
                maskedValue += originalValue[i];
                i++;
            } else if (maskChar !== '9') {
                // Caractere fixo
                maskedValue += maskChar;
            }
        }
        input.value = maskedValue;
    }

    // 1. MÁSCARA CPF: 000.000.000-00
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            applyMask(e.target, '000.000.000-00');
        });
    }

    // 2. MÁSCARA TELEFONE: (00) 90000-0000 (Adaptável ao 9º dígito)
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, '');
            let mask = '';

            // 11 dígitos para celular (com DDD)
            if (value.length > 10) {
                mask = '(00) 00000-0000'; 
            } else {
                // 10 dígitos para fixo
                mask = '(00) 0000-0000';  
            }
            applyMask(e.target, mask);
        });
    }

    // 3. MÁSCARA CEP: 00000-000
    if (cepInput) {
        cepInput.addEventListener('input', (e) => {
            applyMask(e.target, '00000-000');
        });
    }
});
// FUNÇÕES DE MÁSCARA JS (Obrigatório para Máscaras Interativas)
document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    /**
     * Aplica a máscara ao valor de um input.
     * @param {HTMLInputElement} input - O elemento input.
     * @param {string} mask - A string de máscara, ex: '000.000.000-00'.
     */
    function applyMask(input, mask) {
        let i = 0;
        // Remove todos os não-dígitos para limpeza do valor
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
                // Caractere fixo (ponto, traço, parênteses)
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

            // Se for 11 dígitos, aplica máscara de celular (99999-9999)
            if (value.length > 10) {
                mask = '(00) 00000-0000'; 
            } else {
                // Se for 10 ou menos, aplica máscara de telefone fixo (9999-9999)
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

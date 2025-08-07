document.addEventListener('DOMContentLoaded', function() {
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const cepError = document.getElementById('cep-error');
    const cepSuccess = document.getElementById('cep-success');
    
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        
        e.target.value = value;
    });
    
    cepInput.addEventListener('blur', function() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length === 8) {
            consultarCEP(cep);
        } else if (cep.length > 0) {
            showError();
        }
    });
    
    function consultarCEP(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    showError();
                    clearFields();
                } else {
                    showSuccess();
                    fillFields(data);
                }
            })
            .catch(() => {
                showError();
                clearFields();
            });
    }
    
    function fillFields(data) {
        ruaInput.value = data.logradouro || '';
        bairroInput.value = data.bairro || '';
        cidadeInput.value = data.localidade || '';
        estadoInput.value = data.uf || '';
    }
    
    function clearFields() {
        ruaInput.value = '';
        bairroInput.value = '';
        cidadeInput.value = '';
        estadoInput.value = '';
    }
    
    function showError() {
        cepError.style.display = 'block';
        cepSuccess.style.display = 'none';
        cepInput.style.borderColor = '#e74c3c';
    }
    
    function showSuccess() {
        cepError.style.display = 'none';
        cepSuccess.style.display = 'block';
        cepInput.style.borderColor = '#2ecc71';
        
        setTimeout(() => {
            cepSuccess.style.display = 'none';
            cepInput.style.borderColor = '#ddd';
        }, 2000);
    }
});
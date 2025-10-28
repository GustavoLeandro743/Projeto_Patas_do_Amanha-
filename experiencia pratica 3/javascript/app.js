document.addEventListener('DOMContentLoaded', function() {
    
    const appContent = document.getElementById('app-content');
    const navDesktopLinks = document.querySelectorAll('.nav-desktop a');
    const navMobileLinks = document.querySelectorAll('.nav-mobile a');

    /* ======================================================= */
    /* A. NAVEGAÇÃO INTERATIVA (Menu Hambúrguer) - Reutilizada */
    /* ======================================================= */
    
    const menuToggleButton = document.getElementById('menu-toggle'); 
    const mobileMenuContent = document.getElementById('mobile-menu-content'); 

    if (menuToggleButton && mobileMenuContent) {
        menuToggleButton.addEventListener('click', function() {
            mobileMenuContent.classList.toggle('active');
            menuToggleButton.classList.toggle('is-open'); 
        });
        // Fecha o menu móvel ao clicar em um link
        navMobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuContent.classList.remove('active');
                menuToggleButton.classList.remove('is-open');
            });
        });
    }

    /* ======================================================= */
    /* B. SISTEMA DE TEMPLATES JS (Templates Literais)         */
    /* ======================================================= */

    // Template para a página Home (Conteúdo de index.html)
    function homeTemplate() {
        return `
            <section id="historia" class="content-block">

                <section class="grid-12-cols">
                    
                    <h2 class="col-12">Nossa Missão, Visão e Valores</h2>
                    
                    <div class="card col-4">
                        <h3>Missão</h3>
                        <p>Proteger os animais e incentivar a adoção responsável...</p>
                    </div>
                    
                    <div class="card col-4">
                        <h3>Visão</h3>
                        <p>Ser referência nacional no resgate e reabilitação animal...</p>
                    </div>

                    <div class="card col-4">
                        <h3>Valores</h3>
                        <p>Transparência, Compaixão e Compromisso...</p>
                    </div>
                    
                </section>

                <h2>Nossa Inspiração e Missão</h2>
                <img src="../img/capaPatas1.jpg" alt="Patas do Amanhã: Onde cada pata encontra um novo começo." class="main-hero-image">
                <p>A ONG Patas do Amanhã nasceu de uma tragédia e de uma promessa, na cidade de Vila Serena, em 2012. Sua fundadora, Ana Lúcia, era uma bióloga de 35 anos que dedicava seu tempo livre ao resgate informal de cães e gatos abandonados. [...] São necessários cerca de 300 mil reais por mês para sustentá-lo e são as doações, parcerias e vendas na loja que tornam esse sonho possível</p>
                
                <h3>Nossos Pilares</h3>
                <ul>
                    <li>Resgate e Reabilitação de Animais em Risco.</li>
                    <li>Promoção da Adoção Responsável.</li>
                    <li>Educação Comunitária e Conscientização.</li>
                </ul>
            </section>

            <section id="transparencia" class="content-block">
                <h2>Transparência e Dados Institucionais</h2>
                <table>
                    <thead><tr><th>Item</th><th>Detalhe Oficial</th></tr></thead>
                    <tbody>
                        <tr><td>CNPJ</td><td>15.678.901/0001-45</td></tr>
                        <tr><td>Sede (Endereço)</td><td>Rua da Esperança, Nº 125 - Bairro Novo Horizonte - Vila Serena/VS</td></tr>
                        <tr><td>E-mail Institucional</td><td><a href="mailto:contato@patasdoamanha.org.br">contato@patasdoamanha.org.br</a></td></tr>
                    </tbody>
                </table>
            </section>
        `;
    }

    // Template para a página Projetos (Conteúdo de projetos.html)
    function projetosTemplate() {
        return `
            <section class="content-block">
                <h1>🐾 Projetos que Transformam Vidas</h1> 
                <p>Saiba como cada projeto da Patas do Amanhã ajuda a construir um futuro melhor.</p>
            </section>
            
            <section id="programas" class="grid-12-cols">
                
                <h2 class="col-12">Nossos Programas Atuais</h2>
                <img src="../img/pata1.png" alt="Patas do Amanhã: Onde cada pata encontra um novo começo." class="main-hero-image col-12">

                <article class="card col-12 col-md-6">
                    <h3>Programa de Adoção Responsável</h3>
                    <p>Processo rigoroso de triagem, orientação e feiras de adoção periódicas para garantir lares seguros e cheios de amor.</p>
                    <div class="tag tag-adocao">Adoção</div>
                    <button class="btn btn-secondary">Ver Animais</button>
                </article>

                <article class="card col-12 col-md-6">
                    <h3>Campanhas de Castração e Microchipagem</h3>
                    <p>Organizamos campanhas regulares de castração gratuita ou a baixo custo para a comunidade, visando controlar a população de animais de rua.</p>
                    <div class="tag tag-voluntario">Prevenção</div>
                    <button class="btn btn-primary">Saiba Mais</button>
                </article> 
                
                <article class="card col-12 col-md-6">
                    <h3>Resgate e Reabilitação de Risco</h3>
                    <p>Nossa equipe de emergência atua no resgate de animais em situação de extremo perigo, oferecendo tratamento veterinário 24h e fisioterapia.</p>
                    <div class="tag tag-adocao">Resgate</div>
                    <button class="btn btn-secondary">Apoiar</button>
                </article>

                <article class="card col-12 col-md-6">
                    <h3>Educação e Conscientização Comunitária</h3>
                    <p>Realizamos palestras em escolas e centros comunitários para conscientizar sobre os direitos dos animais e a importância da guarda responsável.</p>
                    <div class="tag tag-voluntario">Educação</div>
                    <button class="btn btn-primary">Voluntariar</button>
                </article>
                
            </section>

            <section id="contribuir" class="content-block" style="background-color: var(--color-primary-light);">
                <h2>Junte Suas Patas às Nossas!</h2> 
                
                <div class="grid-12-cols">
                    <article class="col-12 col-md-6">
                        <h3>🤝 Voluntariado: Amigos do Amanhã</h3> 
                        <p>Contribua com seu tempo e talento no cuidado diário dos animais, organização de eventos ou transporte.</p>
                        <a href="#cadastro" class="btn btn-primary">Quero ser Voluntário!</a>
                    </article>
                    
                    <article class="col-12 col-md-6">
                        <h3>💰 Apoio Financeiro: Doação Segura</h3>
                        <p>Sua doação cobre custos veterinários, alimentação e manutenção. Contribua via PIX ou transferência bancária.</p>
                        <a href="#home" class="btn btn-secondary">Fazer Doação</a> 
                    </article>
                </div>
            </section>
        `;
    }

    // Template para a página Cadastro (Conteúdo de cadastro.html)
    function cadastroTemplate() {
        return `
            <section class="content-block">
                <h1>Cadastro de Voluntários e Interessados</h1>
                <p>Preencha o formulário e faça parte da nossa família.</p>
            </section>
            
            <section class="formulario-container content-block">
                <h2 class="col-12">Seja um Amigo do Amanhã</h2>
                <img src="../img/pata2.jpg" alt="Patas do Amanhã: Onde cada pata encontra um novo começo." class="main-hero-image">
                
                <div id="cadastro-feedback"></div>

                <form action="#" method="post" id="cadastroForm" class="grid-12-cols"> 
                    
                    <fieldset class="col-12">
                        <legend>Dados Pessoais (Campos Obrigatórios)</legend>
                        
                        <div class="form-field col-12 col-md-6">
                            <label for="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome" required placeholder="Seu nome e sobrenome">
                        </div>
                        <div class="form-field col-12 col-md-6">
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required placeholder="seu.email@dominio.com">
                        </div>
                        
                        <div class="form-field col-12 col-md-4">
                            <label for="cpf">CPF:</label>
                            <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Formato exigido: 000.000.000-00" placeholder="000.000.000-00">
                        </div>
                        <div class="form-field col-12 col-md-4">
                            <label for="telefone">Telefone (Celular):</label>
                            <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" title="Formato exigido: (00) 90000-0000 ou (00) 0000-0000" placeholder="(00) 90000-0000">
                        </div>
                        <div class="form-field col-12 col-md-4">
                            <label for="nascimento">Data de Nascimento:</label>
                            <input type="date" id="nascimento" name="nascimento" required>
                        </div>
                    </fieldset>

                    <fieldset class="col-12">
                        <legend>Endereço</legend>

                        <div class="form-field col-12 col-md-4">
                            <label for="cep">CEP:</label>
                            <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" title="Formato exigido: 00000-000" placeholder="00000-000">
                        </div>
                        <div class="form-field col-12 col-md-8">
                            <label for="endereco">Endereço (Rua e Número):</label>
                            <input type="text" id="endereco" name="endereco" required placeholder="Rua da Esperança, 125">
                        </div>
                        
                        <div class="form-field col-12 col-md-6">
                            <label for="cidade">Cidade:</label>
                            <input type="text" id="cidade" name="cidade" required placeholder="Vila Serena">
                        </div>
                        <div class="form-field col-12 col-md-6">
                            <label for="estado">Estado:</label>
                            <select id="estado" name="estado" required>
                                <option value="" disabled selected>Selecione seu Estado</option>
                                <option value="SP">São Paulo</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="BA">Bahia</option>
                                </select>
                        </div>
                    </fieldset>
                    
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Enviar e Fazer Parte</button>
                        <button type="button" class="btn btn-secondary" id="limparForm">Limpar Formulário</button>
                    </div>
                    
                </form>
            </section>
        `;
    }


    /* ======================================================= */
    /* C. ROTEADOR SPA BÁSICO (Single Page Application)        */
    /* ======================================================= */

    const routes = {
        '#home': { template: homeTemplate, title: 'Patas do Amanhã | Início' },
        '#projetos': { template: projetosTemplate, title: 'Patas do Amanhã | Projetos' },
        '#cadastro': { template: cadastroTemplate, title: 'Patas do Amanhã | Cadastro', postLoad: setupCadastroLogic },
        '': { template: homeTemplate, title: 'Patas do Amanhã | Início' } // Rota padrão
    };

    /**
     * Carrega e injeta o conteúdo da página com base no hash do URL.
     */
    function loadPage() {
        const path = window.location.hash || ''; 
        const route = routes[path] || routes[''];
        
        document.title = route.title;
        appContent.innerHTML = route.template();

        // Executa a função pós-carregamento (Setup de Máscaras + Lógica do Formulário)
        if (route.postLoad) {
            route.postLoad();
        }
        
        window.scrollTo(0, 0); 
    }

    // Inicializa o roteador e carrega a página inicial
    window.addEventListener('hashchange', loadPage);
    
    // Adiciona listener para cliques em links que usam hash (caso o navegador não dispare hashchange)
    navDesktopLinks.forEach(link => link.addEventListener('click', loadPage));
    navMobileLinks.forEach(link => link.addEventListener('click', loadPage));
    
    loadPage(); 


    /* ======================================================= */
    /* D. LÓGICA DE CADASTRO, MÁSCARAS E LOCAL STORAGE        */
    /* ======================================================= */

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
                maskedValue += originalValue[i];
                i++;
            } else if (maskChar !== '9') {
                maskedValue += maskChar;
            }
        }
        input.value = maskedValue;
    }

    /**
     * Configura as máscaras e o manipulador de SUBMISSÃO do formulário.
     */
    function setupCadastroLogic() {
        const cadastroForm = document.getElementById('cadastroForm');
        const feedbackContainer = document.getElementById('cadastro-feedback');
        const limparButton = document.getElementById('limparForm');

        // Configuração das MÁSCARAS
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');

        if (cpfInput) {
            cpfInput.addEventListener('input', (e) => applyMask(e.target, '000.000.000-00'));
        }

        if (telefoneInput) {
            telefoneInput.addEventListener('input', (e) => {
                const value = e.target.value.replace(/\D/g, '');
                let mask = value.length > 10 ? '(00) 00000-0000' : '(00) 0000-0000';
                applyMask(e.target, mask);
            });
        }

        if (cepInput) {
            cepInput.addEventListener('input', (e) => applyMask(e.target, '00000-000'));
        }

        // LÓGICA DE SUBMISSÃO E LOCAL STORAGE
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Impede o envio padrão e a recarga da página

                // 1. Coleta os dados do formulário
                const formData = new FormData(cadastroForm);
                const voluntario = {};
                for (const [key, value] of formData.entries()) {
                    voluntario[key] = value;
                }
                voluntario.dataCadastro = new Date().toLocaleDateString('pt-BR');


                // 2. Recupera a lista existente do Local Storage
                const voluntariosJSON = localStorage.getItem('voluntariosPatas');
                const listaVoluntarios = voluntariosJSON ? JSON.parse(voluntariosJSON) : [];

                // 3. Adiciona o novo voluntário e salva
                listaVoluntarios.push(voluntario);
                localStorage.setItem('voluntariosPatas', JSON.stringify(listaVoluntarios));

                
                // 4. Feedback Interativo para o Usuário
                feedbackContainer.innerHTML = `
                    <div class="alert alert-success">
                        <strong>✅ Sucesso!</strong> Seu cadastro foi salvo localmente e você agora faz parte dos Amigos do Amanhã.
                        <p>Total de Voluntários Cadastrados Localmente: <strong>${listaVoluntarios.length}</strong></p>
                    </div>
                `;
                
                // Oculta a mensagem após alguns segundos (melhora a usabilidade)
                setTimeout(() => {
                    feedbackContainer.innerHTML = '';
                }, 8000); 

                // 5. Limpa o formulário após o sucesso
                cadastroForm.reset(); 
                
                // Opcional: Mostra o primeiro voluntário salvo no console para verificação
                console.log('Voluntário Salvo:', voluntario);
                console.log('Local Storage Atualizado. Total:', listaVoluntarios.length);
            });
            
            // LÓGICA para Limpar Formulário (Botão Secundário)
            if (limparButton) {
                limparButton.addEventListener('click', function() {
                    cadastroForm.reset();
                    feedbackContainer.innerHTML = ''; // Limpa a mensagem de sucesso se houver
                });
            }
        }
    }
});
// ===========================================
// FUNÇÃO PARA TROCAR ENTRE CLARO E ESCURO
// ===========================================

function trocarTema() {
    // Pega o elemento body (corpo da página)
    const body = document.body;
    
    // Pega o botão pelo ID
    const botao = document.getElementById('botao-tema');
    
    // Verifica se o body TEM a classe 'dark'
    if (body.classList.contains('dark')) {
        // Se TEM, remove (volta para claro)
        body.classList.remove('dark');
        botao.textContent = '🌙 Modo Escuro';
        
        // Salva a escolha no navegador
        localStorage.setItem('tema', 'claro');
        
        // Mensagem no console (F12 para ver)
        console.log('☀️ Tema mudou para CLARO');
        
    } else {
        // Se NÃO TEM, adiciona (muda para escuro)
        body.classList.add('dark');
        botao.textContent = '☀️ Modo Claro';
        
        // Salva a escolha no navegador
        localStorage.setItem('tema', 'escuro');
        
        // Mensagem no console (F12 para ver)
        console.log('🌙 Tema mudou para ESCURO');
    }
}

// ===========================================
// CARREGA O TEMA SALVO QUANDO ABRE A PÁGINA
// ===========================================

// Quando a página carrega completamente
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('📄 Página carregou! Verificando tema salvo...');
    
    // Verifica se tem tema salvo no localStorage
    const temaSalvo = localStorage.getItem('tema');
    
    // Pega os elementos que vamos modificar
    const body = document.body;
    const botao = document.getElementById('botao-tema');
    
    if (temaSalvo === 'escuro') {
        // Se foi salvo como escuro, aplica o tema escuro
        body.classList.add('dark');
        botao.textContent = '☀️ Modo Claro';
        console.log('🌙 Carregou tema ESCURO salvo');
    } else {
        // Se não tem nada salvo ou está como claro
        console.log('☀️ Carregou tema CLARO (padrão)');
    }
    
    console.log('✅ Sistema de Dark Mode iniciado!');
    console.log('💡 Dica: Clique no botão no canto superior direito para trocar o tema');
});

// ===========================================
// BONUS: ATALHO DE TECLADO (OPCIONAL)
// ===========================================

// Permite trocar tema com a tecla "D"
document.addEventListener('keydown', function(evento) {
    // Se pressionou a tecla "D" ou "d"
    if (evento.key === 'D' || evento.key === 'd') {
        trocarTema();
        console.log('⌨️ Tema trocado com a tecla D!');
    }
});

// ===========================================
// FUNÇÕES EXTRAS PARA TESTAR NO CONSOLE
// ===========================================

// Função para resetar o tema (limpar localStorage)
function resetarTema() {
    localStorage.removeItem('tema');
    location.reload(); // Recarrega a página
    console.log('🔄 Tema resetado para padrão!');
}

// Função para verificar qual tema está ativo
function qualTema() {
    if (document.body.classList.contains('dark')) {
        console.log('🌙 Tema atual: ESCURO');
        return 'escuro';
    } else {
        console.log('☀️ Tema atual: CLARO');
        return 'claro';
    }
}

// ===========================================
// MENSAGEM DE BOAS-VINDAS NO CONSOLE
// ===========================================

console.log('🎨 Sistema de Dark Mode carregado!');
console.log('📋 Comandos disponíveis no console:');
console.log('   - trocarTema() → Alterna entre claro/escuro');
console.log('   - qualTema() → Mostra tema atual');
console.log('   - resetarTema() → Volta ao padrão');
console.log('⌨️ Atalho: Pressione a tecla "D" para trocar rapidamente!');
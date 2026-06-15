// ==========================================
// 1. CONTROLADOR CENTRAL DE NAVEGAÇÃO SPA
// ==========================================
function navigateTo(screenId) {
    // Evita recarregamento de tela caso o gatilho venha de um evento de formulário
    if (typeof event !== 'undefined' && event) {
        event.preventDefault();
    }

    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.scrollTop = 0;
    }

    // Gerenciador do Menu Inferior Global (some na tela de login)
    const bottomNav = document.getElementById('global-nav');
    if (bottomNav) {
        if (screenId === 'screen-login') {
            bottomNav.style.display = 'none';
        } else {
            bottomNav.style.display = 'flex';
        }
    }
}

// ==========================================
// 2. COMPONENTES INTERATIVOS ADICIONAIS
// ==========================================
function selectDay(element) {
    const days = document.querySelectorAll('.day-card');
    days.forEach(day => day.classList.remove('active'));
    element.classList.add('active');
}

function selectCategory(element) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(b => b.style.borderColor = 'rgba(255,255,255,0.1)');
    element.style.borderColor = '#fca5f1';
}

function updateUrgency(value) {
    const label = document.getElementById('urgency-label');
    if (value == 1) label.innerText = "Baixa";
    if (value == 2) label.innerText = "Média";
    if (value == 3) label.innerText = "Alta";
}

function filterTasks(tabType) {
    if (typeof event !== 'undefined' && event) {
        event.preventDefault();
    }
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    
    if (typeof event !== 'undefined') {
        event.currentTarget.classList.add('active');
    }
}

// Inicializador Global de Eventos
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    navigateTo('screen-login');

    // Suporte complementar para ações internas de listagem de tarefas
    const actionControls = document.querySelectorAll('.circle-check, .task-action-btn');
    actionControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede a abertura involuntária de detalhes ao marcar/fechar
            const parentTask = control.closest('.task-item');
            if (parentTask) {
                const isDone = parentTask.style.opacity === '0.4';
                parentTask.style.opacity = isDone ? '1' : '0.4';
                parentTask.style.textDecoration = isDone ? 'none' : 'line-through';
            }
        });
    });
});
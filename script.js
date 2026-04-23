// Dados dos filmes
const filmes = {
    'homem-aranha': {
        titulo: 'Homem-Aranha: No Aranhaverso',
        ano: '2026',
        sinopse: 'Miles Morales retorna em uma aventura multiversal épica, enfrentando novos vilões e descobrindo poderes nunca imaginados. Uma jornada visual impressionante que redefine o que significa ser o Homem-Aranha.',
        diretor: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
        duracao: '2h 12min',
        genero: 'Animação, Ação, Aventura'
    },
    'avatar': {
        titulo: 'Avatar: Fogo e Cinzas',
        ano: '2026',
        sinopse: 'Jake Sully e Neytiri enfrentam uma nova ameaça na lua Pandora. Uma batalha épica pela sobrevivência de seu povo e pela preservação da natureza selvagem do planeta.',
        diretor: 'James Cameron',
        duracao: '3h 10min',
        genero: 'Ficção Científica, Aventura, Drama'
    },
    'de-volta-futuro': {
        titulo: 'De Volta para o Futuro',
        ano: '1985 (Relançamento 2026)',
        sinopse: 'Clássico dos anos 80! Marty McFly viaja no tempo em um DeLorean e precisa garantir que seus pais se apaixonem para que ele possa existir. Uma aventura atemporal.',
        diretor: 'Robert Zemeckis',
        duracao: '1h 56min',
        genero: 'Aventura, Comédia, Ficção Científica'
    }
};

// Animação de carregamento
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Animações de scroll
    observerCards();
});

// Observer para animação de entrada
function observerCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    document.querySelectorAll('.filme-card, .em-breve').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Modal dos filmes
document.querySelectorAll('.filme-card').forEach(card => {
    card.addEventListener('click', () => {
        const filmeId = card.dataset.filme;
        const filme = filmes[filmeId];
        
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <h3>${filme.titulo}</h3>
            <p><strong>Estreia:</strong> 24 de Abril de 2026</p>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Duração:</strong> ${filme.duracao}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <hr style="margin: 1.5rem 0; border: 1px solid rgba(255,215,0,0.3);">
            <p>${filme.sinopse}</p>
        `;
        
        document.getElementById('modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Formulário de contato
const form = document.getElementById('contato-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envio
        const btn = form.querySelector('.btn-submit');
        const textoOriginal = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            document.getElementById('sucesso').style.display = 'block';
            form.reset();
            btn.textContent = textoOriginal;
            btn.disabled = false;
            
            // Scroll suave para mensagem
            document.getElementById('sucesso').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 1500);
    });
}

// Menu ativo
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Efeito parallax no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

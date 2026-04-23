/* ====================================
   CineEstreia - JavaScript
   A "Mágica" do site
   ==================================== */

// ---------- 1. LOADER (Animação de carregamento) ----------
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove do DOM após a transição
            setTimeout(() => loader.remove(), 800);
        }, 900);
    }
});

// ---------- 2. CONTADOR ANIMADO DE FILMES ----------
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('movie-counter');
    if (counter) {
        const cards = document.querySelectorAll('.card');
        const total = cards.length;
        let atual = 0;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && atual === 0) {
                    const intervalo = setInterval(() => {
                        atual++;
                        counter.textContent = atual;
                        if (atual >= total) {
                            clearInterval(intervalo);
                        }
                    }, 250);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(counter);
    }
});

// ---------- 3. MENU MOBILE (Toggle) ----------
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Fecha o menu ao clicar em um link
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }
});

// ---------- 4. EFEITO DE HOVER APRIMORADO NOS CARDS ----------
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Efeito de inclinação 3D ao mover o mouse
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `translateY(-15px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });

        // Feedback ao clicar (antes de abrir nova aba)
        card.addEventListener('click', function(e) {
            const titulo = this.getAttribute('data-titulo');
            console.log(`🎬 Abrindo detalhes do filme: ${titulo}`);
        });
    });
});

// ---------- 5. FORMULÁRIO DE CONTATO (Mensagem de sucesso) ----------
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');
    const success = document.getElementById('form-success');

    if (form && success) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validação básica
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !mensagem) {
                alert('⚠️ Por favor, preencha todos os campos!');
                return;
            }

            // Simula envio
            const btn = form.querySelector('.btn-enviar');
            const textoOriginal = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                success.classList.add('show');
                success.textContent = `✅ Obrigado, ${nome.split(' ')[0]}! Mensagem enviada com sucesso. Retornaremos em breve.`;
                form.reset();
                btn.textContent = textoOriginal;
                btn.disabled = false;

                // Esconde a mensagem após 6 segundos
                setTimeout(() => {
                    success.classList.remove('show');
                }, 6000);
            }, 1200);
        });
    }
});

// ---------- 6. SCROLL SUAVE PARA LINKS ANCORADOS ----------
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const alvo = document.querySelector(href);
            if (alvo) {
                e.preventDefault();
                alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ---------- 7. ANIMAÇÃO DO HEADER AO ROLAR ----------
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let ultimoScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollAtual = window.scrollY;

        if (scrollAtual > 100) {
            header.style.boxShadow = '0 6px 25px rgba(139, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        }

        ultimoScroll = scrollAtual;
    });
});

// ---------- 8. BOTÃO LOGIN (Apenas estético) ----------
document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.querySelector('.btn-login');
    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            alert('🎬 Área de login em breve! Fique ligado nas próximas atualizações.');
        });
    }
});

console.log('%c🎬 CineEstreia carregado com sucesso!', 'color: #d4af37; font-size: 16px; font-weight: bold;');
console.log('%cBem-vindo à magia do cinema!', 'color: #b30000; font-size: 12px;');

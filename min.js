gsap.registerPlugin(ScrollTrigger);

/**
 * Inicializa las animaciones de la sección de beneficios
 */
function initBenefitsAnimations() {
    // Seleccionar todos los bloques de beneficios
    const benefitBlocks = document.querySelectorAll('.benefit-block');

    // Iterar sobre cada bloque y crear su animación
    benefitBlocks.forEach((block, index) => {
        const text = block.querySelector('.benefit-text');
        const imageWrapper = block.querySelector('.image-wrapper');

        // Crear timeline para cada bloque
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: block,
                start: 'top 80%',      // Inicia cuando el bloque llega al 80% del viewport
                end: 'top 30%',        // Termina cuando llega al 30%
                toggleActions: 'play none none reverse', // play al entrar, reverse al salir
            }
        });

        // ================================
        // ANIMACIÓN DEL TEXTO
        // Entra desde abajo hacia arriba
        // ================================
        tl.fromTo(text, 
            {
                opacity: 0,
                y: 60,              // Empieza 60px abajo
            },
            {
                opacity: 1,
                y: 0,               // Llega a su posición original
                duration: 1.1,        // Duración de 1 segundo
                ease: 'power3.out'  // Suavizado exponencial
            }
        );

        // ================================
        // ANIMACIÓN DE LA IMAGEN
        // Entra desde derecha hacia izquierda
        // ================================
        tl.fromTo(imageWrapper,
            {
                opacity: 0,
                x: 150,             // Empieza 150px a la derecha
            },
            {
                opacity: 1,
                x: 0,               // Llega a su posición original
                duration: 1.2,      // Ligeramente más lenta que el texto
                ease: 'power3.out'
            },
            '-=0.7'                 // Empieza 0.7s antes de que termine la animación anterior
        );

        // ================================
        // ANIMACIÓN DEL BLOQUE COMPLETO
        // Fade-in general para unificar
        // ================================
        tl.to(block,
            {
                opacity: 1,
                duration: 0.3
            },
            0                       // Empieza al mismo tiempo (posición 0)
        );
    });

    // ================================
    // ANIMACIÓN DEL TÍTULO PRINCIPAL
    // ================================
    gsap.from('.benefits h2', {
        scrollTrigger: {
            trigger: '.benefits',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,                     // Entra desde arriba
        duration: 1,
        ease: 'power2.out'
    });
}

// ================================
// INICIALIZACIÓN
// ================================
// Opción 1: Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initBenefitsAnimations);

function initProcessAnimations() {
    
    // ================================
    // ANIMACIÓN DEL TÍTULO
    // Entra desde abajo con fade-in
    // ================================
    gsap.to('.process h2', {
        scrollTrigger: {
            trigger: '.process',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            // markers: true, // Descomenta para debug
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // ================================
    // ANIMACIONES DE LOS PASOS
    // Esferas en secuencia con rebote
    // ================================
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        const stepNumber = step.querySelector('.step-number');
        const stepContent = step.querySelector('.step-content');
        
        // Timeline para cada paso
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.process-steps',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        // ================================
        // ANIMACIÓN DE LA ESFERA (REBOTE)
        // Cada esfera entra con delay secuencial
        // ================================
        tl.to(stepNumber, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'bounce.out',     // ✨ Efecto de rebote
            delay: index * 0.3      // Retraso secuencial: 0s, 0.3s, 0.6s, 0.9s
        });

        // ================================
        // ANIMACIÓN DEL CONTENIDO
        // Aparece después de que la esfera termine de rebotar
        // ================================
        tl.to(step, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.2              // Pequeño delay después del rebote
        }, `-=0.2`);                // Se solapa ligeramente con el final del rebote

        // ================================
        // EFECTO DE PULSO EN EL NÚMERO (opcional)
        // Pequeño pulso al finalizar la animación
        // ================================
        tl.to(stepNumber, {
            scale: 1.1,
            duration: 0.2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: 1
        });
    });

    // ================================
    // ANIMACIÓN ADICIONAL: Hover en las esferas
    // ================================
    const stepNumbers = document.querySelectorAll('.step-number');
    
    stepNumbers.forEach(number => {
        number.addEventListener('mouseenter', () => {
            gsap.to(number, {
                scale: 1.15,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        number.addEventListener('mouseleave', () => {
            gsap.to(number, {
                scale: 1,
                duration: 0.3,
                ease: 'back.in(1.7)'
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Inicializar animaciones del proceso
    initProcessAnimations();
});

gsap.registerPlugin(ScrollTrigger);

// Cards en orden correcto
const cards = [
    document.querySelector(".card-3d:nth-child(1)"),
    document.querySelector(".card-3d:nth-child(2)"),
    document.querySelector(".card-3d:nth-child(3)")
];

cards.forEach((card, i) => {
    gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1.15,
            delay: i * 0.25,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".plans-3d",
                start: "top 80%",
                toggleActions: "play none none none",
            }
        }
    );
});


/*-----ANIMACIÓN PARA SECCIÓN ABOUT US-------- */
gsap.to(".about-images img:nth-child(1)", {
    x: 0,
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
    delay: 0.3
  });

  gsap.to(".about-images img:nth-child(2)", {
    x: 0,
    opacity: 1,
    duration: 1.6,
    ease: "power3.out",
    delay: 0.6
  });

  gsap.to(".about-content", {
    x: 0,
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
    delay: 1.1
  });

  /*---------ANIMACIÓN PARA SECCIÓN PLANES--------*/
  gsap.utils.toArray(".plan-card").forEach((card, i) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay: i * 0.2,
        ease: "power3.out"
    });
});
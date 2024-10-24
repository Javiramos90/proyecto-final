const imageContainers = document.querySelectorAll('.image-container');

        imageContainers.forEach(container => {
            const image = container.querySelector('img');
            const textBox = container.querySelector('.text-box');

            // Evento mouseover para mostrar la caja de texto
            image.addEventListener('mouseover', () => {
                textBox.style.display = 'block';
                // Posicionar la caja de texto debajo de la imagen
                const rect = image.getBoundingClientRect();
                textBox.style.top = `${rect.bottom + window.scrollY}px`;
                textBox.style.left = `${rect.left + window.scrollX}px`;
            });

            // Evento mouseout para ocultar la caja de texto
            image.addEventListener('mouseout', () => {
                textBox.style.display = 'none';
            });
        });





// Información sobre cada lugar
// const placesInfo = {
//     almeria: "La Alcazaba de Almería es una fortaleza y conjunto monumental de la ciudad de Almería.",
//     cadiz: "La Catedral de Cádiz es una de las construcciones religiosas más importantes de Andalucía.",
//     cordoba: "La Mezquita-Catedral de Córdoba es un monumento de la época musulmana.",
//     huelva: "El Rocío es una aldea en Huelva famosa por su romería religiosa.",
//     granada: "La Alhambra es un palacio y fortaleza de la ciudad de Granada.",
//     jaen: "La Catedral de Jaén es un monumento renacentista.",
//     malaga: "Málaga es una ciudad costera famosa por su historia y playas.",
//     sevilla: "La Torre del Oro es una torre albarrana situada en la margen del río Guadalquivir en Sevilla."
// };

// // Seleccionar todas las imágenes
// const images = document.querySelectorAll('#image-gallery img');

// // Caja de información
// const infoBox = document.getElementById('info-box');

// // Función para mostrar la información
// images.forEach(image => {
//     image.addEventListener('click', function() {
//         const placeId = this.getAttribute('data-id');
//         infoBox.textContent = placesInfo[placeId];
//         infoBox.style.display = 'block';
//     });
// });
        
        
        // Datos que aparecerán al pasar el mouse
        // const infoData = {
        //     almeria: "Almería: La Alcazaba, una fortaleza histórica.",
        //     cadiz: "Cádiz: La catedral y su impresionante arquitectura.",
        //     cordoba: "Córdoba: La Mezquita, una joya de la arquitectura islámica.",
        //     huelva: "Huelva: El Rocío, conocido por su famosa peregrinación.",
        //     granada: "Granada: La Alhambra, un palacio y fortaleza.",
        //     jaen: "Jaén: La Catedral de Jaén, un majestuoso edificio.",
        //     malaga: "Málaga: Famosa por sus playas y la Alcazaba.",
        //     sevilla: "Sevilla: La Torre del Oro, a orillas del río Guadalquivir."
        // };

        // // Seleccionar todas las imágenes
        // const images = document.querySelectorAll('img');
        // const infoBox = document.getElementById('infoBox');

        // images.forEach(img => {
        //     img.addEventListener('mouseenter', (e) => {
        //         const id = e.target.getAttribute('data-id');
        //         const text = infoData[id];

        //         // Mostrar el texto y posicionarlo
        //         infoBox.textContent = text;
        //         infoBox.style.display = 'block';
        //         infoBox.style.left = e.pageX + 'px';
        //         infoBox.style.top = e.pageY + 'px';
        //     });

        //     img.addEventListener('mouseleave', () => {
        //         infoBox.style.display = 'none';
        //     });

        //     img.addEventListener('mousemove', (e) => {
        //         // Seguir al ratón con el texto desplegable
        //         infoBox.style.left = e.pageX + 'px';
        //         infoBox.style.top = e.pageY + 'px';
        //     });
        // });

//     //imagenes con texto desplegable.

//        // Seleccionar todas las cajas de imágenes
//         const imageBoxes = document.querySelectorAll('.image-box');

//         // Añadir eventos a cada caja
//         imageBoxes.forEach(box => {
//             // Cuando el ratón entra
//             box.addEventListener('mouseenter', function() {
//                 const overlay = this.querySelector('.text-overlay');
//                 overlay.style.bottom = '0';
                
//                 // Efecto de zoom en la imagen
//                 const img = this.querySelector('img');
//                 img.style.transform = 'scale(1.1)';
//             });

//             // Cuando el ratón sale
//             box.addEventListener('mouseleave', function() {
//                 const overlay = this.querySelector('.text-overlay');
//                 overlay.style.bottom = '-100%';
                
//                 // Quitar el zoom de la imagen
//                 const img = this.querySelector('img');
//                 img.style.transform = 'scale(1)';
//             });
//         });

//         // Función para agregar nuevas imágenes dinámicamente
//         function addNewImage(imgSrc, title, description) {
//             const gallery = document.querySelector('.gallery');
            
//             const newBox = document.createElement('div');
//             newBox.className = 'image-box';
            
//             newBox.innerHTML = `
//                 <img src="${imgSrc}" alt="${title}">
//                 <div class="text-overlay">
//                     <h3>${title}</h3>
//                     <p>${description}</p>
//                 </div>
//             `;

//             // Agregar los mismos eventos al nuevo elemento
//             newBox.addEventListener('mouseenter', function() {
//                 const overlay = this.querySelector('.text-overlay');
//                 overlay.style.bottom = '0';
//                 const img = this.querySelector('img');
//                 img.style.transform = 'scale(1.1)';
//             });

//             newBox.addEventListener('mouseleave', function() {
//                 const overlay = this.querySelector('.text-overlay');
//                 overlay.style.bottom = '-100%';
//                 const img = this.querySelector('img');
//                 img.style.transform = 'scale(1)';
//             });

//             gallery.appendChild(newBox);
//         }

// //carrusel de imagenes con texto desplegable.
// const carousel = document.querySelector('.carousel');
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const dotsContainer = document.querySelector('.dots-container');

// let currentIndex = 0;
// const slidesToShow = window.innerWidth <= 768 ? 1 : 3;
// const totalSlides = slides.length;

// // Crear dots para navegación
// for (let i = 0; i < Math.ceil(totalSlides / slidesToShow); i++) {
//     const dot = document.createElement('div');
//     dot.classList.add('dot');
//     if (i === 0) dot.classList.add('active');
//     dot.addEventListener('click', () => goToSlide(i * slidesToShow));
//     dotsContainer.appendChild(dot);
// }

// function updateDots() {
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === Math.floor(currentIndex / slidesToShow)) {
//             dot.classList.add('active');
//         }
//     });
// }

// function updateCarousel() {
//     const slideWidth = slides[0].offsetWidth + 20; // Incluye el gap
//     carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     updateDots();
// }

// function goToSlide(index) {
//     currentIndex = index;
//     if (currentIndex < 0) {
//         currentIndex = totalSlides - slidesToShow;
//     } else if (currentIndex > totalSlides - slidesToShow) {
//         currentIndex = 0;
//     }
//     updateCarousel();
// }

// // Event Listeners para los botones
// prevButton.addEventListener('click', () => {
//     goToSlide(currentIndex - slidesToShow);
// });

// nextButton.addEventListener('click', () => {
//     goToSlide(currentIndex + slidesToShow);
// });

// // Responsive handling
// window.addEventListener('resize', () => {
//     const newSlidesToShow = window.innerWidth <= 768 ? 1 : 3;
//     if (newSlidesToShow !== slidesToShow) {
//         location.reload(); // Recargar para ajustar el carrusel
//     }
// });

// // Autoplay
// let autoplayInterval = setInterval(() => {
//     goToSlide(currentIndex + slidesToShow);
// }, 5000);

// // Pausar autoplay al hover
// carousel.addEventListener('mouseenter', () => {
//     clearInterval(autoplayInterval);
// });

// carousel.addEventListener('mouseleave', () => {
//     autoplayInterval = setInterval(() => {
//         goToSlide(currentIndex + slidesToShow);
//     }, 5000);
// });

// // Touch events para móviles
// let touchStartX = 0;
// let touchEndX = 0;

// carousel.addEventListener('touchstart', (e) => {
//     touchStartX = e.touches[0].clientX;
//     clearInterval(autoplayInterval);
// });

// carousel.addEventListener('touchend', (e) => {
//     touchEndX = e.changedTouches[0].clientX;
//     handleSwipe();
//     autoplayInterval = setInterval(() => {
//         goToSlide(currentIndex + slidesToShow);
//     }, 5000);
// });

// function handleSwipe() {
//     const swipeDistance = touchEndX - touchStartX;
//     if (Math.abs(swipeDistance) > 50) { // Umbral mínimo para considerar un swipe
//         if (swipeDistance > 0) {
//             goToSlide(currentIndex - slidesToShow);
//         } else {
//             goToSlide(currentIndex + slidesToShow);
//         }
//     }
// }

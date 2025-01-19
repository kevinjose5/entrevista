 // Script para controlar o scroll
 const scrollWrapper = document.getElementById('scrollWrapper');
 const prevButton = document.getElementById('prev');
 const nextButton = document.getElementById('next');
 const itemWidth = 815; // Largura fixa de cada item (igual ao CSS)
 let currentIndex = 0;

 // Avança para o próximo item
 nextButton.addEventListener('click', () => {
   const totalItems = scrollWrapper.children.length;
   if (currentIndex < totalItems - 1) {
     currentIndex++;
     scrollWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
   }
 });

 // Retorna para o item anterior
 prevButton.addEventListener('click', () => {
   if (currentIndex > 0) {
     currentIndex--;
     scrollWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
   }
 });
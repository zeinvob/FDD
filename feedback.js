document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pagination = document.querySelector('.pagination');
    

    const slidesPerGroup = 1;
    const dragThreshold = 50;
    

    let currentGroup = 0;
    const totalGroups = Math.ceil(slides.length / slidesPerGroup);
    let isDragging = false;
    let startPosX = 0;
  
    // initialize slider
    function initSlider() {
      setSlideSizes();
      createPagination();
      updateSliderPosition();
      setupEventListeners();
    }
  
    
    function setSlideSizes() {
      // remove any width-setting from JavaScript
      slides.forEach(slide => {
        slide.style.flex = ''; // clear any flex basis
        slide.style.width = ''; // clear any width 
      });

      // calculate total slider width based on 100% slides + gaps
      const totalWidth = (slides.length * 100);
      console.log(totalWidth);
      slider.style.width = totalWidth;
    }
    
    // reate pagination dots
    function createPagination() {
      pagination.innerHTML = '';
      for (let i = 0; i < totalGroups; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (i === currentGroup) dot.classList.add('active');
        dot.addEventListener('click', () => goToGroup(i));
        pagination.appendChild(dot);
      }
    }
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentGroup * 100}%)`;
      slider.style.transition = 'transform 0.5s ease-in-out';
      updatePagination();
    }
  
    function updatePagination() {
      const dots = document.querySelectorAll('.pagination-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGroup);
      });
    }
  

    function goToGroup(groupIndex) {
        if (groupIndex < 0) {
          groupIndex = totalGroups - 1; // go to last group if before first
        } else if (groupIndex >= totalGroups) {
          groupIndex = 0; // go to first group if after last
        }
        
        currentGroup = groupIndex;
        updateSliderPosition();
      }
      
      function nextGroup() {
        if (currentGroup === totalGroups - 1) {
          goToGroup(0);
        } else {
          goToGroup(currentGroup + 1);
        }
      }
      
      function prevGroup() {
        if (currentGroup === 0) {
          goToGroup(totalGroups - 1);
        } else {
          goToGroup(currentGroup - 1);
        }
      }
      
  
    function setupEventListeners() {
      nextBtn.addEventListener('click', nextGroup);
      prevBtn.addEventListener('click', prevGroup);
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextGroup();
        if (e.key === 'ArrowLeft') prevGroup();
      });
      
      // touch events
      slider.addEventListener('touchstart', touchStart, { passive: true });
      slider.addEventListener('touchmove', touchMove, { passive: false });
      slider.addEventListener('touchend', touchEnd);
      
      // mouse events
      slider.addEventListener('mousedown', dragStart);
      slider.addEventListener('mousemove', drag);
      slider.addEventListener('mouseup', dragEnd);
      slider.addEventListener('mouseleave', dragEnd);
    }
  
    // touch handlers
    function touchStart(e) {
      startPosX = e.touches[0].clientX;
      isDragging = true;
      slider.style.transition = 'none';
    }
  
    function touchMove(e) {
      if (!isDragging) return;
      const currentPosition = e.touches[0].clientX;
      const diff = currentPosition - startPosX;
      e.preventDefault();
      slider.style.transform = `translateX(calc(-${currentGroup * 100}% + ${diff}px))`;
    }
  
    function touchEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      
      const endPosX = e.changedTouches[0].clientX;
      const diff = endPosX - startPosX;
      
      if (diff < -dragThreshold) nextGroup();
      else if (diff > dragThreshold) prevGroup();
      else updateSliderPosition();
    }
  
    // mouse drag handlers
    function dragStart(e) {
      startPosX = e.clientX;
      isDragging = true;
      slider.style.transition = 'none';
      slider.style.cursor = 'grabbing';
    }
  
    function drag(e) {
      if (!isDragging) return;
      const currentPosition = e.clientX;
      const diff = currentPosition - startPosX;
      slider.style.transform = `translateX(calc(-${currentGroup * 100}% + ${diff}px))`;
    }
  
    function dragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      slider.style.cursor = 'grab';
      
      const endPosX = e.clientX;
      const diff = endPosX - startPosX;
      
      if (diff < -dragThreshold) nextGroup();
      else if (diff > dragThreshold) prevGroup();
      else updateSliderPosition();
    }
  
    initSlider();
  });
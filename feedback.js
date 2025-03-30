document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pagination = document.querySelector('.pagination');
    
    // Configuration
    const slidesPerGroup = 1;
    const dragThreshold = 50;
    
    // State variables
    let currentGroup = 0;
    const totalGroups = Math.ceil(slides.length / slidesPerGroup);
    let isDragging = false;
    let startPosX = 0;
  
    // Initialize slider
    function initSlider() {
      setSlideSizes();
      createPagination();
      updateSliderPosition();
      setupEventListeners();
    }
  
    
    function setSlideSizes() {
      // Remove any width-setting from JavaScript
      slides.forEach(slide => {
        slide.style.flex = ''; // Clear any flex basis set by JS
        slide.style.width = ''; // Clear any width set by JS
      });

      // Calculate total slider width based on 100% slides + gaps
      const totalWidth = (slides.length * 100);
      console.log(totalWidth);
      slider.style.width = totalWidth;
    }
    
    // Create pagination dots (one per group)
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
  
    // Update slider position
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentGroup * 100}%)`;
      slider.style.transition = 'transform 0.5s ease-in-out';
      updatePagination();
    }
  
    // Update pagination dots
    function updatePagination() {
      const dots = document.querySelectorAll('.pagination-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGroup);
      });
    }
  
    // Go to specific group
    function goToGroup(groupIndex) {
        // Handle wrap-around for infinite loop
        if (groupIndex < 0) {
          groupIndex = totalGroups - 1; // Go to last group if before first
        } else if (groupIndex >= totalGroups) {
          groupIndex = 0; // Go to first group if after last
        }
        
        currentGroup = groupIndex;
        updateSliderPosition();
      }
      
      // Next group with loop
      function nextGroup() {
        if (currentGroup === totalGroups - 1) {
          // If at last group, go to first
          goToGroup(0);
        } else {
          // Otherwise go to next group
          goToGroup(currentGroup + 1);
        }
      }
      
      // Previous group with loop
      function prevGroup() {
        if (currentGroup === 0) {
          // If at first group, go to last
          goToGroup(totalGroups - 1);
        } else {
          // Otherwise go to previous group
          goToGroup(currentGroup - 1);
        }
      }
      
  
    // Setup event listeners
    function setupEventListeners() {
      // Navigation buttons
      nextBtn.addEventListener('click', nextGroup);
      prevBtn.addEventListener('click', prevGroup);
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextGroup();
        if (e.key === 'ArrowLeft') prevGroup();
      });
      
      // Touch events
      slider.addEventListener('touchstart', touchStart, { passive: true });
      slider.addEventListener('touchmove', touchMove, { passive: false });
      slider.addEventListener('touchend', touchEnd);
      
      // Mouse events
      slider.addEventListener('mousedown', dragStart);
      slider.addEventListener('mousemove', drag);
      slider.addEventListener('mouseup', dragEnd);
      slider.addEventListener('mouseleave', dragEnd);
    }
  
    // Touch handlers
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
  
    // Mouse drag handlers
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
  
    // Initialize the slider
    initSlider();
  });
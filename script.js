<!-- JavaScript for Image Sliders -->
  <script>
    document.querySelectorAll('.image-slider').forEach(slider => {
      const beforeImg = slider.querySelector('.before');
      const handle = slider.querySelector('.slider-handle');

      handle.addEventListener('mousedown', initDrag);

      function initDrag(e) {
        e.preventDefault();
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', stopDrag);

        function drag(e) {
          const sliderRect = slider.getBoundingClientRect();
          let position = e.clientX - sliderRect.left;

          // Limit position between 0 and slider width
          position = Math.max(0, Math.min(position, sliderRect.width));
          handle.style.left = `${position}px`;
          beforeImg.style.clipPath = `inset(0 ${sliderRect.width - position}px 0 0)`;
        }

        function stopDrag() {
          window.removeEventListener('mousemove', drag);
          window.removeEventListener('mouseup', stopDrag);
        }
      }
    });

    function saveContact() {
      alert("Contact saved to your device!");
    }
  </script>
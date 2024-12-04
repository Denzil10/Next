<<<<<<< HEAD
// GSAP Animations
gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.5 });

// Video logic
// function toggleExpand(element) {
//   const videoModal = document.createElement('div');
//   videoModal.id = 'video-modal';
//   videoModal.innerHTML = `
//       <video id="expanded-video" controls>
//           <source src="${element.querySelector('video').src}" type="video/mp4">
//       </video>
//   `;
  
//   // Style the modal
//   videoModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 1000;';
  
//   // Add click listener to close modal
//   videoModal.addEventListener('click', (e) => {
//       if (e.target === videoModal) {
//           document.body.removeChild(videoModal);
//       }
//   });

//   // Handle escape key
//   document.addEventListener('keydown', function closeOnEscape(e) {
//       if (e.key === 'Escape' && document.getElementById('video-modal')) {
//           document.body.removeChild(videoModal);
//           document.removeEventListener('keydown', closeOnEscape);
//       }
//   });

//   // Add modal to body and play video
//   document.body.appendChild(videoModal);
//   const expandedVideo = document.getElementById('expanded-video');
//   element.querySelector('video').pause();
//   expandedVideo.play();
// }

// Video logic
function toggleExpand(element) {
  const videoModal = document.createElement('div');
  videoModal.id = 'video-modal';
  videoModal.innerHTML = `
      <video id="expanded-video" controls autoplay>
          <source src="${element.querySelector('video').src}" type="video/mp4">
          Your browser does not support HTML5 video.
      </video>
  `;

  // Style the modal
  videoModal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; margin: auto;
      background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center;
      align-items: center; z-index: 1000;
  `;

  // Close modal on outside click
  videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
          document.body.removeChild(videoModal);
      }
  });

  // Append modal to the body
  document.body.appendChild(videoModal);
}


// Start playing all videos on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-card video').forEach(video => video.play());
});

// Course section 
document.addEventListener('DOMContentLoaded', function() {
    const courseDetails = document.getElementById('course-details');
    const courseTitle = document.getElementById('course-title');
    const courseDescription = document.getElementById('course-description');
    const courseSlots = document.getElementById('course-slots');
    const whatsappBtn = document.getElementById('whatsapp-btn');
  
    const courses = {
      'ai-ml': {
        title: 'AI & Machine Learning',
        description: 'Deep dive into AI and Machine Learning with live and recorded classes.',
        slots: [
          { time: 'Mon, Wed, Fri (5pm - 6pm)', price: 'INR 5000', discount: true },
          { time: 'Saturday (2pm - 4pm)', price: 'INR 4500', discount: false },
          { time: 'Sunday (10am - 12pm)', price: 'INR 4000', discount: true }
        ]
      },
      'web-dev': {
        title: 'Web Development',
        description: 'Learn to build dynamic websites using HTML, CSS, JavaScript, and React.',
        slots: [
          { time: 'Tue, Thu (6pm - 8pm)', price: 'INR 5500', discount: true },
          { time: 'Weekend (Sat & Sun, 3pm - 5pm)', price: 'INR 6000', discount: false }
        ]
      },
      'data-science': {
        title: 'Data Science',
        description: 'Master data analysis, visualization, and machine learning using Python.',
        slots: [
          { time: 'Mon, Wed, Fri (7pm - 8pm)', price: 'INR 7000', discount: true },
          { time: 'Sunday (11am - 1pm)', price: 'INR 6500', discount: false }
        ]
      }
    };
  
    document.querySelectorAll('.course-card').forEach(button => {
      button.addEventListener('click', function() {
        const courseId = this.getAttribute('data-course');
        const course = courses[courseId];
  
        courseTitle.textContent = course.title;
        courseDescription.textContent = course.description;
  
        // Populate slots with discount tag and selection behavior
        courseSlots.innerHTML = '';
        course.slots.forEach(slot => {
          const slotBox = document.createElement('button');
          slotBox.className = 'slot-box';
          slotBox.textContent = `${slot.time} - ${slot.price}`;
          if (slot.discount) {
            const discountTag = document.createElement('span');
            discountTag.className = 'discount-tag';
            discountTag.textContent = '20% OFF';
            slotBox.appendChild(discountTag);
          }
  
          slotBox.addEventListener('click', function() {
            document.querySelectorAll('.slot-box').forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
          });
  
          courseSlots.appendChild(slotBox);
        });
  
        // Show the course details section
        courseDetails.style.display = 'flex';
  
        // WhatsApp button logic
        whatsappBtn.addEventListener('click', function() {
          window.open('https://wa.me/?text=I%20am%20interested%20in%20the%20' + encodeURIComponent(course.title) + ' course!', '_blank');
        });
      });
    });
  });  

function toggleBold(button) {
    button.classList.toggle('selected');
}

// document.addEventListener('DOMContentLoaded', function () {
//     const liveRadio = document.getElementById('live');
//     const recordedRadio = document.getElementById('recorded');
//     const courseCards = document.querySelectorAll('.course-card');

//     // Function to filter courses
//     function filterCourses() {
//         courseCards.forEach(card => {
//             const courseTags = card.getAttribute('data-type').split(' ');

//             if (
//                 (liveRadio.checked && (courseTags.includes('live') || courseTags.includes('batch'))) ||
//                 (recordedRadio.checked && courseTags.includes('recorded')) ||
//                 (!liveRadio.checked && !recordedRadio.checked)
//             ) {
//                 card.parentElement.style.display = 'block';
//             } else {
//                 card.parentElement.style.display = 'none';
//             }
//         });
//     }

//     // Event listeners for the radio buttons
//     liveRadio.addEventListener('change', filterCourses);
//     recordedRadio.addEventListener('change', filterCourses);

//     // Initial filter on page load
//     filterCourses();
// });

=======
// GSAP Animations
gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.5 });

// Video logic
// function toggleExpand(element) {
//   const videoModal = document.createElement('div');
//   videoModal.id = 'video-modal';
//   videoModal.innerHTML = `
//       <video id="expanded-video" controls>
//           <source src="${element.querySelector('video').src}" type="video/mp4">
//       </video>
//   `;
  
//   // Style the modal
//   videoModal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 1000;';
  
//   // Add click listener to close modal
//   videoModal.addEventListener('click', (e) => {
//       if (e.target === videoModal) {
//           document.body.removeChild(videoModal);
//       }
//   });

//   // Handle escape key
//   document.addEventListener('keydown', function closeOnEscape(e) {
//       if (e.key === 'Escape' && document.getElementById('video-modal')) {
//           document.body.removeChild(videoModal);
//           document.removeEventListener('keydown', closeOnEscape);
//       }
//   });

//   // Add modal to body and play video
//   document.body.appendChild(videoModal);
//   const expandedVideo = document.getElementById('expanded-video');
//   element.querySelector('video').pause();
//   expandedVideo.play();
// }

// Video logic
function toggleExpand(element) {
  const videoModal = document.createElement('div');
  videoModal.id = 'video-modal';
  videoModal.innerHTML = `
      <video id="expanded-video" controls autoplay>
          <source src="${element.querySelector('video').src}" type="video/mp4">
          Your browser does not support HTML5 video.
      </video>
  `;

  // Style the modal
  videoModal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; margin: auto;
      background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center;
      align-items: center; z-index: 1000;
  `;

  // Close modal on outside click
  videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
          document.body.removeChild(videoModal);
      }
  });

  // Append modal to the body
  document.body.appendChild(videoModal);
}


// Start playing all videos on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-card video').forEach(video => video.play());
});

// Course section 
document.addEventListener('DOMContentLoaded', function() {
    const courseDetails = document.getElementById('course-details');
    const courseTitle = document.getElementById('course-title');
    const courseDescription = document.getElementById('course-description');
    const courseSlots = document.getElementById('course-slots');
    const whatsappBtn = document.getElementById('whatsapp-btn');
  
    const courses = {
      'ai-ml': {
        title: 'AI & Machine Learning',
        description: 'Deep dive into AI and Machine Learning with live and recorded classes.',
        slots: [
          { time: 'Mon, Wed, Fri (5pm - 6pm)', price: 'INR 5000', discount: true },
          { time: 'Saturday (2pm - 4pm)', price: 'INR 4500', discount: false },
          { time: 'Sunday (10am - 12pm)', price: 'INR 4000', discount: true }
        ]
      },
      'web-dev': {
        title: 'Web Development',
        description: 'Learn to build dynamic websites using HTML, CSS, JavaScript, and React.',
        slots: [
          { time: 'Tue, Thu (6pm - 8pm)', price: 'INR 5500', discount: true },
          { time: 'Weekend (Sat & Sun, 3pm - 5pm)', price: 'INR 6000', discount: false }
        ]
      },
      'data-science': {
        title: 'Data Science',
        description: 'Master data analysis, visualization, and machine learning using Python.',
        slots: [
          { time: 'Mon, Wed, Fri (7pm - 8pm)', price: 'INR 7000', discount: true },
          { time: 'Sunday (11am - 1pm)', price: 'INR 6500', discount: false }
        ]
      }
    };
  
    document.querySelectorAll('.course-card').forEach(button => {
      button.addEventListener('click', function() {
        const courseId = this.getAttribute('data-course');
        const course = courses[courseId];
  
        courseTitle.textContent = course.title;
        courseDescription.textContent = course.description;
  
        // Populate slots with discount tag and selection behavior
        courseSlots.innerHTML = '';
        course.slots.forEach(slot => {
          const slotBox = document.createElement('button');
          slotBox.className = 'slot-box';
          slotBox.textContent = `${slot.time} - ${slot.price}`;
          if (slot.discount) {
            const discountTag = document.createElement('span');
            discountTag.className = 'discount-tag';
            discountTag.textContent = '20% OFF';
            slotBox.appendChild(discountTag);
          }
  
          slotBox.addEventListener('click', function() {
            document.querySelectorAll('.slot-box').forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
          });
  
          courseSlots.appendChild(slotBox);
        });
  
        // Show the course details section
        courseDetails.style.display = 'flex';
  
        // WhatsApp button logic
        whatsappBtn.addEventListener('click', function() {
          window.open('https://wa.me/?text=I%20am%20interested%20in%20the%20' + encodeURIComponent(course.title) + ' course!', '_blank');
        });
      });
    });
  });  

function toggleBold(button) {
    button.classList.toggle('selected');
}

// document.addEventListener('DOMContentLoaded', function () {
//     const liveRadio = document.getElementById('live');
//     const recordedRadio = document.getElementById('recorded');
//     const courseCards = document.querySelectorAll('.course-card');

//     // Function to filter courses
//     function filterCourses() {
//         courseCards.forEach(card => {
//             const courseTags = card.getAttribute('data-type').split(' ');

//             if (
//                 (liveRadio.checked && (courseTags.includes('live') || courseTags.includes('batch'))) ||
//                 (recordedRadio.checked && courseTags.includes('recorded')) ||
//                 (!liveRadio.checked && !recordedRadio.checked)
//             ) {
//                 card.parentElement.style.display = 'block';
//             } else {
//                 card.parentElement.style.display = 'none';
//             }
//         });
//     }

//     // Event listeners for the radio buttons
//     liveRadio.addEventListener('change', filterCourses);
//     recordedRadio.addEventListener('change', filterCourses);

//     // Initial filter on page load
//     filterCourses();
// });

>>>>>>> 31ad2a0afc2910ca373cb723c04d287b088416d3

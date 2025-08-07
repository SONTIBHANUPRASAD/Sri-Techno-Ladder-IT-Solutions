// function openCourseStructure() {
//   const newWindow = window.open('', '_blank', 'width=600,height=400');
 
//   newWindow.document.close();
// }
// D:\Sri Techno Ladder IT Solutions\Course_Structure
function openCourseStructure() {
  const wordFileUrl = "Course_Structure/PHP_Training_Course_Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure1() {
  const wordFileUrl = "Course_Structure/Selenium Course Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure2() {
  const wordFileUrl = "Course_Structure/C Training Course Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}

function openCourseStructure3() {
  const wordFileUrl = "Course_Structure/Python.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}

function openCourseStructure4() {
  const wordFileUrl = "Course_Structure/Testing.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure5() {
  const wordFileUrl = "Course_Structure/HTML JavaScript Training Course Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure6() {
  const wordFileUrl = "Course_Structure/C++ Course Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure7() {
  const wordFileUrl = "Course_Structure/Core Java Training Content Overview.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure8() {
  const wordFileUrl = "Course_Structure/Unix.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure9() {
  const wordFileUrl = "Course_Structure/MS.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure10() {
  const wordFileUrl = "Course_Structure/SQL.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
function openCourseStructure11() {
  const wordFileUrl = "Course_Structure/Oracle.pdf"; // Replace with actual path or URL
  window.open(wordFileUrl, '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonials.length - 1;
        }
        showTestimonial(currentTestimonial);
    });
    
    nextBtn.addEventListener('click', function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 992) {
                    nav.style.display = 'none';
                }
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
});

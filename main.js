/// Menangani toggle menu pada perangkat mobile
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x"); 
});

// Validasi Formulir Kontak
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 

  const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
  const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
  const message = contactForm.querySelector("textarea").value;

  // Validasi sederhana
  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  // Menampilkan pesan konfirmasi
  alert(`Thank you, ${name}! Your message has been sent successfully.`);

  // Reset form
  contactForm.reset();
});

// Smooth scroll untuk navigasi menu
document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, 
        behavior: "smooth",
      });
    }
  });
});

// Tambahkan hover effect pada ikon media sosial
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.color = "#ff6f61"; 
  });

  icon.addEventListener("mouseout", () => {
    icon.style.color = ""; 
  });
});

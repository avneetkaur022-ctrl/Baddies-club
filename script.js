// BADDIES CLUB — script.js

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Add smooth behaviour to navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = link.getAttribute("href");

    if (!target || target === "#") return;

    const element = document.querySelector(target);

    if (element) {
      event.preventDefault();

      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Subtle 3D movement for club cards
document.querySelectorAll(".pillar").forEach(card => {
  card.addEventListener("mousemove", event => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// Signup form
const signupForm = document.getElementById("signupForm");
const status = document.getElementById("status");

if (signupForm) {
  signupForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value;

    if (!name || !email || !password) {
      status.textContent = "Please fill in every field.";
      return;
    }

    if (password.length < 8) {
      status.textContent = "Your password needs at least 8 characters.";
      return;
    }

    // Supabase authentication will be connected here next.
    status.textContent =
      "You're on the list ✦ Welcome to Baddies Club.";

    status.style.color = "#d96e87";

    signupForm.reset();
  });
}

// Small reveal animation when sections enter the screen
const revealElements = document.querySelectorAll(
  ".pillar, .editorial-main, .editorial-small, .tier, .quote, .signup-box"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform += " translateY(25px)";
  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  revealObserver.observe(element);
});

// Reveal class
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".visible").forEach(element => {
    element.style.opacity = "1";
    element.style.transform = "";
  });
});

// Make observed elements visible
const style = document.createElement("style");

style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: none !important;
  }
`;

document.head.appendChild(style);

// Keyboard-friendly escape handling
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.activeElement?.blur();
  }
});

console.log("✦ BADDIES CLUB IS LIVE ✦");
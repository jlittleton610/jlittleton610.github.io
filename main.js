/* ----- NAVIGATION MENU TOGGLE ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

const navMenu = document.getElementById("myNavMenu");
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'responsive' to close the menu on mobile
    if (window.innerWidth <= 900) {
      navMenu.classList.remove('responsive');
    }
  });
});

/* ----- NAV SHADOW ON SCROLL ----- */
window.onscroll = function () {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

/* ----- TYPING EFFECT, SKILL FILTERS, SCROLL REVEAL, WORK CAROUSEL ----- */
document.addEventListener("DOMContentLoaded", () => {
  /* TYPING EFFECT */
  new Typed(".typedText", {
    strings: ["Data Engineer", "GIS Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  /* SKILL FILTER TOGGLE */
  const skillButtons = document.querySelectorAll(".skill-filter-btn");
  const skillTags = document.querySelectorAll(".skill-tag");

  skillButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = btn.dataset.skill;
      skillTags.forEach((tag) => {
        tag.classList.toggle("highlight", selected === "all" || tag.dataset.type === selected);
      });
    });
  });

  /* SCROLL REVEAL ANIMATIONS */
  const sr = ScrollReveal({ origin: "top", distance: "80px", duration: 2000, reset: true });

  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });
  sr.reveal(".top-header");
  sr.reveal(".about-info", { origin: "left", delay: 100 });
  sr.reveal(".skills-box", { origin: "right", delay: 100 });
  sr.reveal(".job-list", { origin: "left", delay: 100});
  sr.reveal(".job-details", { origin: "right", delay: 100});
  sr.reveal(".education-list", { origin: "right", delay: 100});
  sr.reveal(".school-details", { origin: "left", delay: 100});
  sr.reveal(".project-spotlight", { origin: "top", delay: 100});
  sr.reveal(".project-cards", { origin: "bottom", delay: 100});
  sr.reveal(".carousel-container", { delay: 100, origin: "bottom" });
  sr.reveal(".timeline-item", { delay: 100, interval: 200, origin: "left" });

  /* JOB CARD SWITCHING */
const jobCards = document.querySelectorAll(".job-card");
const jobDetails = document.getElementById("job-details");

const jobsContent = {
  esri: `
    <ul>
      <li>Created and maintained real-time data feeds for Esri Living Atlas</li>
      <li>Engineered scalable ETL pipelines</li>
      <li>Collaborated across teams for high-impact GIS solutions</li>
    </ul>
  `,
  enplan: `
    <ul>
      <li>Created data automation ETL processes for various datasets.</li>
      <li>Established business metrics pipeline, including report generation for email marketing initiatives, active subscription numbers, and client/subscriber activities.</li>
      <li>Lead end-to-end product development, including overseeing the design of map product tools and data systems.</li>
      <li>Engineered custom outreach platforms for clients, involving web scraping and data cleaning techniques to compile contact lists for disaster response.</li>
      <li>Directed email marketing campaigns for a list of 250k contacts, utilizing HTML, CSS, and Photoshop for content creation.</li>
      <li>Managed IT operations, ensure system functionality, network administration, and oversee employee onboarding/offboarding processes.</li>
      <li>Lead ENPLAN Geospatial development. Assist MapPort and Environmental Planning GIS requirements.</li>
      <li>Updated and maintained company webpages following SEO best practices.</li>
      <li>Provided technical support to clients and offer training and supervision to employees and volunteers.</li>
    </ul>
  `,
  shasta: `
    <ul>
      <li>Cleaned and updated disparate geospatial data for county web maps.</li>
      <li>Collaborated with county departments to fulfill project requirements./li>
    </ul>
  `
};

jobCards.forEach(card => {
  card.addEventListener("click", () => {
    jobCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const selectedJob = card.getAttribute("data-job");
    jobDetails.innerHTML = jobsContent[selectedJob];

    // NEW: Scroll to top of job section smoothly
    document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* EDUCATION CARD SWITCHING */
const educationCards = document.querySelectorAll(".education-card");
const schoolDetails = document.getElementById("school-details");

const educationContent = {
  chico: `
    <h4>Key Courses:</h4>
    <ul>
      <li>Business Systems Analysis</li>
      <li>ERP: Systems Config and Use</li>
      <li>Systems Project Management</li>
      <li>Distributed Systems Management</li>
      <li>Database Application Development</li>
      <li>Database Design</li>
      <li>Algorithms and Data Structures</li>
      <li>Survey of Management / Survey of Marketing</li>
      <li>Enterprise Tech Integration / Corporate Tech Integration</li>
      <li>Data Communications & Networking</li>
    </ul>
  `,
  "shasta-gis": `
    <h4>Key Courses:</h4>
    <ul>
      <li>GIS Spatial Analysis</li>
      <li>GIS Data Design and Capture</li>
      <li>Introduction to Remote Sensing</li>
      <li>Java Programming</li>
      <li>Visual Basic Programming</li>
      <li>Introduction to Web Design</li>
    </ul>
  `,
  "shasta-quant": `
    <h4>Key Courses:</h4>
    <ul>
      <li>Introduction to Statistics</li>
      <li>Calculus 3B</li>
      <li>C++ Language Programming</li>
    </ul>
  `
};

educationCards.forEach(card => {
  card.addEventListener("click", () => {
    educationCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const selectedSchool = card.getAttribute("data-school");
    schoolDetails.innerHTML = educationContent[selectedSchool];

    // NEW: Scroll to top of education section smoothly
    document.getElementById("education").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


/* PROJECT CARD SWITCHING */
const projectCards = document.querySelectorAll(".project-card");
const spotlightBg = document.getElementById("spotlight-bg");
const spotlightContent = document.querySelector(".project-spotlight-content");

const projectContent = {
  portfolio: {
    title: "Current Portfolio Website",
    description: "The latest version of my personal website to showcase my experience, skills, and projects. Built with HTML, CSS, and lightweight vanilla JavaScript.",
    image: "images/new_portfolio1920.jpg",
    link: "https://github.com/jlittleton610/current-portfolio"
  },
  "portfolio-old": {
    title: "Old Portfolio Website",
    description: "The first iteration of my portfolio, built with HTML, CSS, and Bootstrap. Focused on building a clean and simple responsive layout.",
    image: "images/portfolio_page_1080.jpg",
    link: "https://github.com/jlittleton610/portfolio"
  },
  "coming-soon1": {
    title: "Coming Soon 1",
    description: "",
    image: "",
    link: ""
  },
  "coming-soon2": {
    title: "Coming Soon 2",
    description: "",
    image: "",
    link: ""
  }
};

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    projectCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const selectedProject = card.getAttribute("data-project");
    const content = projectContent[selectedProject];

    if (content) {
      spotlightBg.style.backgroundImage = `url('${content.image}')`;

      spotlightContent.innerHTML = `
        <h3>${content.title}</h3>
        <p>${content.description}</p>
        <a href="${content.link}" target="_blank" class="btn">View Project</a>
      `;
    } else {
      // fallback if project doesn't exist
      spotlightContent.innerHTML = `
        <h3>Project Not Found</h3>
      `;
      spotlightBg.style.backgroundImage = "";
    }
  });
});

// Set default on page load
document.addEventListener("DOMContentLoaded", () => {
  const defaultProject = "portfolio"; 
  const content = projectContent[defaultProject];

  spotlightBg.style.backgroundImage = `url('${content.image}')`;
  spotlightTitle.textContent = content.title;
  spotlightDescription.textContent = content.description;
  spotlightLink.href = content.link;
});

/* NAV LINK HIGHLIGHT ON SCROLL AND CLICK */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveLink() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // Adjusts when highlight triggers (tweak if needed)
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
}

// Run on scroll
window.addEventListener('scroll', changeActiveLink);

// Also run immediately when page loads
changeActiveLink();

// Run on nav click too
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});

});
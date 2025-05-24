/* ----- NAVIGATION MENU TOGGLE ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

const navMenu = document.getElementById("myNavMenu");
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navMenu.classList.remove('responsive');
    }
  });
});

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


document.addEventListener("DOMContentLoaded", () => {

  // Typing effect for the header
  new Typed(".typedText", {
    strings: ["Data Engineer", "GIS Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  // Skill filter functionality
  const skillButtons = document.querySelectorAll(".skill-filter-btn");
  const skillTags = document.querySelectorAll(".skill-tag");

  skillButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = btn.dataset.skill;
      skillTags.forEach((tag) => {
        const types = tag.dataset.type.split(' ');
        tag.classList.toggle("highlight", selected === "all" || types.includes(selected));
      });
    });
  });

  const allBtn = document.querySelector('.skill-filter-btn[data-skill="all"]');
  if (allBtn && allBtn.classList.contains('active')) {
    skillTags.forEach(tag => tag.classList.add('highlight'));
  }

  // ScrollReveal animations
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

  // Job and Education details functionality
  const jobCards = document.querySelectorAll(".job-card");
  const jobDetails = document.getElementById("job-details");
  const jobsContent = {
    esri: `<ul><li>Created and maintained real-time data feeds for Esri Living Atlas</li><li>Engineered scalable ETL pipelines</li><li>Collaborated across teams for high-impact GIS solutions</li></ul>`,
    enplan: `<ul><li>Built ETL pipelines for diverse datasets and client deliverables.</li><li>Developed business metrics dashboards and email campaign reports.</li><li>Led product development for GIS tools and internal data systems.</li><li>Created outreach platforms using web scraping and data cleaning.</li><li>Directed campaigns to 250k+ contacts using HTML, CSS, and Photoshop.</li><li>Managed IT infrastructure, networks, and onboarding workflows.</li><li>Led geospatial development for ENPLAN and MapPort support.</li><li>Maintained SEO-optimized websites and technical documentation.</li><li>Trained users and provided technical support to staff and clients.</li></ul>`,
    shasta: `<ul><li>Cleaned and updated disparate geospatial data for county web maps.</li><li>Collaborated with county departments to fulfill project requirements.</li></ul>`
  };

  jobCards.forEach(card => {
    card.addEventListener("click", () => {
      jobCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const selectedJob = card.getAttribute("data-job");
      jobDetails.innerHTML = jobsContent[selectedJob];
      document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const educationCards = document.querySelectorAll(".education-card");
  const schoolDetails = document.getElementById("school-details");
  const educationContent = {
    chico: `<h4>Key Courses:</h4><ul><li>Business Systems Analysis</li><li>ERP: Systems Config and Use</li><li>Systems Project Management</li><li>Distributed Systems Management</li><li>Database Application Development</li><li>Database Design</li><li>Algorithms and Data Structures</li><li>Survey of Management / Survey of Marketing</li><li>Enterprise Tech Integration / Corporate Tech Integration</li><li>Data Communications & Networking</li></ul>`,
    "shasta-gis": `<h4>Key Courses:</h4><ul><li>GIS Spatial Analysis</li><li>GIS Data Design and Capture</li><li>Introduction to Remote Sensing</li><li>Java Programming</li><li>Visual Basic Programming</li><li>Introduction to Web Design</li></ul>`,
    "shasta-quant": `<h4>Key Courses:</h4><ul><li>Introduction to Statistics</li><li>Calculus 3B</li><li>C++ Language Programming</li></ul>`
  };

  educationCards.forEach(card => {
    card.addEventListener("click", () => {
      educationCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      const selectedSchool = card.getAttribute("data-school");
      schoolDetails.innerHTML = educationContent[selectedSchool];
      document.getElementById("education").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Project spotlight functionality
  const projectCards = document.querySelectorAll(".project-card");
  const spotlightBg = document.getElementById("spotlight-bg");
  const spotlightContent = document.querySelector(".project-spotlight-content");
  const projectContent = {
    portfolio: {
      title: "Current Portfolio Website",
      description: "The latest version of my personal website to showcase my experience, skills, and projects. Built with HTML, CSS, and lightweight vanilla JavaScript.",
      image: "images/new_portfolio1920.jpg",
      link: "https://github.com/jlittleton610/jlittleton610.github.io"
    },
    "portfolio-old": {
      title: "Old Portfolio Website",
      description: "The first iteration of my portfolio, built with HTML, CSS, and Bootstrap. Focused on building a clean and simple responsive layout.",
      image: "images/portfolio_page_1080.jpg",
      link: "https://github.com/jlittleton610/jlittleton610.github.io/tree/main/old_portfolio"
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

        spotlightContent.innerHTML = `<h3>${content.title}</h3><p>${content.description}</p><a href="${content.link}" target="_blank" class="btn">View Project</a>`;
      } else {
        spotlightContent.innerHTML = `<h3>Project Not Found</h3>`;
        spotlightBg.style.backgroundImage = "";
      }
    });
  });

  // Set default project spotlight
  spotlightBg.style.backgroundImage = "";
  spotlightContent.innerHTML = `<h3>Select a project below!</h3>`;

  // Smooth scrolling for navigation links
  function changeActiveLink() {
    const navHeight = 90; // fixed navbar height
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let scrollY = window.scrollY + navHeight + 1;

    let currentSectionId = sections[0].id; // fallback

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active-link");
      }
    });
  }

window.addEventListener('scroll', changeActiveLink);
window.addEventListener('DOMContentLoaded', changeActiveLink);

  changeActiveLink();
});

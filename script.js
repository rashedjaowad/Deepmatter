// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Mobile navigation toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.animation =
        entry.target.style.animation || entry.target.className.includes("fade-in-left")
          ? "fadeInLeft 0.8s ease-out forwards"
          : entry.target.className.includes("fade-in-right")
            ? "fadeInRight 0.8s ease-out forwards"
            : "fadeInUp 0.8s ease-out forwards"
    }
  })
}, observerOptions)

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
  animatedElements.forEach((el) => observer.observe(el))
})

// Company management functionality
let isEditing = false
const companies = [
  "TechFlow Solutions",
  "Global Manufacturing Corp",
  "Education First Foundation",
  "HealthCare Innovations",
  "Financial Services Group",
  "Retail Dynamics",
]

function toggleEdit() {
  isEditing = !isEditing
  const editButton = document.getElementById("edit-text")
  const addForm = document.getElementById("add-company-form")

  editButton.textContent = isEditing ? "Done" : "Edit"

  if (isEditing) {
    addForm.classList.add("active")
    addEditButtons()
  } else {
    addForm.classList.remove("active")
    removeEditButtons()
  }
}

function addCompany() {
  const input = document.getElementById("company-name")
  const companyName = input.value.trim()

  if (companyName) {
    companies.push(companyName)
    input.value = ""
    renderCompanies()
    if (isEditing) {
      addEditButtons()
    }
  }
}

function removeCompany(index) {
  companies.splice(index, 1)
  renderCompanies()
  if (isEditing) {
    addEditButtons()
  }
}

function renderCompanies() {
  const grid = document.getElementById("companies-grid")
  grid.innerHTML = companies
    .map(
      (company, index) => `
        <div class="company-item" data-company="${company}">
            <div class="company-logo">
                <i class="fas fa-building"></i>
                <span>${company}</span>
            </div>
        </div>
    `,
    )
    .join("")
}

function addEditButtons() {
  const companyItems = document.querySelectorAll(".company-item")
  companyItems.forEach((item, index) => {
    if (!item.querySelector(".edit-controls")) {
      const controls = document.createElement("div")
      controls.className = "edit-controls"
      controls.style.cssText = `
                position: absolute;
                top: -8px;
                right: -8px;
                display: flex;
                gap: 4px;
            `

      const uploadBtn = document.createElement("label")
      uploadBtn.innerHTML = '<i class="fas fa-upload"></i>'
      uploadBtn.style.cssText = `
                width: 24px;
                height: 24px;
                background: #3b82f6;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 10px;
            `

      const fileInput = document.createElement("input")
      fileInput.type = "file"
      fileInput.accept = "image/*"
      fileInput.style.display = "none"
      fileInput.addEventListener("change", (e) => handleLogoUpload(e, index))

      uploadBtn.appendChild(fileInput)

      const removeBtn = document.createElement("button")
      removeBtn.innerHTML = '<i class="fas fa-times"></i>'
      removeBtn.style.cssText = `
                width: 24px;
                height: 24px;
                background: #ef4444;
                color: white;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 10px;
            `
      removeBtn.onclick = () => removeCompany(index)

      controls.appendChild(uploadBtn)
      controls.appendChild(removeBtn)
      item.style.position = "relative"
      item.appendChild(controls)
    }
  })
}

function removeEditButtons() {
  document.querySelectorAll(".edit-controls").forEach((control) => {
    control.remove()
  })
}

function handleLogoUpload(event, index) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const companyItem = document.querySelectorAll(".company-item")[index]
      const logo = companyItem.querySelector(".company-logo")
      logo.innerHTML = `<img src="${e.target.result}" alt="${companies[index]} logo" style="max-height: 48px; max-width: 100%; object-fit: contain; filter: grayscale(100%); transition: filter 0.3s ease;">`

      // Add hover effect
      companyItem.addEventListener("mouseenter", () => {
        logo.querySelector("img").style.filter = "grayscale(0%)"
      })
      companyItem.addEventListener("mouseleave", () => {
        logo.querySelector("img").style.filter = "grayscale(100%)"
      })
    }
    reader.readAsDataURL(file)
  }
}

// Form submission
document.getElementById("demo-form").addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to your server
  console.log("Form submitted:", data)

  // Show success message
  alert("Thank you! We'll be in touch soon to schedule your demo.")

  // Reset form
  e.target.reset()
})

// Add enter key support for company name input
document.getElementById("company-name").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addCompany()
  }
})

// Parallax effect for hero shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".hero-shape")

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5
    shape.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add stagger animation delays to work cards
document.addEventListener("DOMContentLoaded", () => {
  const workCards = document.querySelectorAll(".work-card")
  workCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  const storyCards = document.querySelectorAll(".story-card")
  storyCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})

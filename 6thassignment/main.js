// Sound Effects
const clickSound = new Audio('click.mp3'); // Ensure this sound file is in the same directory

function playClickSound() {
    clickSound.currentTime = 0; // Reset the sound to play from the start
    clickSound.play();
}

// Display Date and Time
function displayDateTime() {
    const now = new Date();
    document.getElementById("date-time").textContent = now.toLocaleString("en-US", {
        month: "long", day: "numeric", year: "numeric",
        hour: "numeric", minute: "numeric", second: "numeric"
    });
}
setInterval(displayDateTime, 1000);

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("night-theme");
    const theme = document.body.classList.contains("night-theme") ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Save theme preference
});

// Apply saved theme on page load
document.body.classList.toggle("night-theme", localStorage.getItem('theme') === 'dark');

// User Authentication
const loginUsernameInput = document.getElementById("login-username");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// Login functionality
loginBtn.addEventListener("click", () => {
    const username = loginUsernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username); // Store username in local storage
        alert(`Welcome, ${username}!`);
        updateLoginState();
        playClickSound(); // Play sound on login
    } else {
        alert("Please enter a username.");
    }
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem('username'); // Clear username from local storage
    updateLoginState();
    playClickSound(); // Play sound on logout
});

// Function to update login state
function updateLoginState() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById("login-section").style.display = 'none';
        document.getElementById("logout-btn").style.display = 'inline';
        document.getElementById("date-time").textContent = `Welcome, ${username}!`;
    } else {
        document.getElementById("login-section").style.display = 'block';
        document.getElementById("logout-btn").style.display = 'none';
    }
}

// Initialize login state on page load
updateLoginState();

// Dynamic Greeting Input for Index Page
const greetingInput = document.getElementById("greeting-input");
if (greetingInput) {
    document.getElementById("set-greeting").addEventListener("click", () => {
        const name = greetingInput.value.trim();
        document.getElementById("date-time").textContent = `Welcome, ${name || 'Guest'}!`;
        greetingInput.value = "";
        playClickSound(); // Play sound on setting greeting
    });
}

// Star Rating Functionality for Opportunities
document.querySelectorAll('.star-rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');
    const opportunityId = ratingContainer.getAttribute('data-id');

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');

            // Update star color based on rating
            stars.forEach((s) => {
                s.style.color = s.getAttribute('data-value') <= ratingValue ? 'gold' : 'gray';
            });

            alert(`You rated opportunity ID ${opportunityId} with ${ratingValue} stars!`);
            playClickSound(); // Play sound on rating
            // Save this rating in localStorage
            localStorage.setItem(`rating-${opportunityId}`, ratingValue);
        });
    });

    // Load saved ratings if they exist
    const savedRating = localStorage.getItem(`rating-${opportunityId}`);
    if (savedRating) {
        stars.forEach((s) => {
            s.style.color = s.getAttribute('data-value') <= savedRating ? 'gold' : 'gray';
        });
    }
});

// Random Quote Functionality for Index Page
const quotes = ["Inspiring quote 1", "Inspiring quote 2", "Inspiring quote 3"];
if (document.getElementById("new-quote-btn")) {
    document.getElementById("new-quote-btn").addEventListener("click", () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote-display").textContent = randomQuote;
        playClickSound(); // Play sound on quote generation
    });
}

// Background Color Change for Index Page
if (document.getElementById("color-btn")) {
    document.getElementById("color-btn").addEventListener("click", () => {
        const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        playClickSound(); // Play sound on color change
    });
}

// Subscribe Modal Functionality for Index Page
const subscribeBtn = document.getElementById("subscribe-btn");
const popupForm = document.getElementById("popup-form");
const closeBtn = document.querySelector(".modal-close");

if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
        popupForm.style.display = "flex";
        playClickSound(); // Play sound on subscribe button click
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        popupForm.style.display = "none";
        playClickSound(); // Play sound on modal close
    });
}

window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = "none";
    }
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Account Information Form - Validation and Submission
if (document.getElementById("account-form")) {
    document.getElementById("account-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || !email) {
            alert("Please fill in all fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Profile updated successfully!");
        document.getElementById("personal-greeting").textContent = `Welcome, ${username}!`;
        playClickSound(); // Play sound on profile update
    });

    // Reset Form Button
    document.getElementById("reset-button").addEventListener("click", () => {
        document.getElementById("account-form").reset();
        alert("Form reset successfully!");
        playClickSound(); // Play sound on reset
    });
}

// Multi-Step Form Navigation
if (document.getElementById("multi-step-form")) {
    let currentStep = 1;

    document.getElementById("next-step").addEventListener("click", () => {
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "block";
        currentStep = 2;
        playClickSound(); // Play sound on next step
    });

    document.getElementById("back-step").addEventListener("click", () => {
        document.getElementById("step-2").style.display = "none";
        document.getElementById("step-1").style.display = "block";
        currentStep = 1;
        playClickSound(); // Play sound on back step
    });

    document.getElementById("finish-setup").addEventListener("click", () => {
        const interest = document.getElementById("interest-select").value;
        alert(`Setup complete! Your interest is set to ${interest}.`);
        document.getElementById("multi-step-form").style.display = "none";
        playClickSound(); // Play sound on finish setup
    });
}

// Search Page Functionality
const opportunities = [
    { id: 1, title: 'Volunteer Program in Africa', category: 'volunteer', description: 'Make a difference in communities across Africa through volunteering.' },
    { id: 2, title: 'Scholarship in Europe', category: 'scholarship', description: 'Get a full scholarship for a semester in Europe to enhance your education.' },
    { id: 3, title: 'Travel Grants for Asia', category: 'grant', description: 'Explore Asia with travel grants available for cultural exchange.' },
];

if (document.getElementById('search-button')) {
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const resultsList = document.getElementById('results-list');

    // Render Opportunities to the List
    const renderOpportunities = (opps) => {
        resultsList.innerHTML = opps.map(opportunity => `
            <li class="opportunity-item" data-id="${opportunity.id}">
                ${opportunity.title}
            </li>
        `).join('');
    };

    // Show Opportunity Details in Modal
    const modal = document.getElementById('opportunity-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    resultsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('opportunity-item')) {
            const id = Number(event.target.getAttribute('data-id'));
            const opportunity = opportunities.find(op => op.id === id);
            modalTitle.textContent = opportunity.title;
            modalDescription.textContent = opportunity.description;
            modal.style.display = 'flex';
            playClickSound(); // Play sound on opportunity selection
        }
    });

    // Close Modal
    const modalClose = document.getElementById('modal-close');
    modalClose.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === modal) modal.style.display = 'none';
    });

    // Filter Opportunities
    document.getElementById('search-button').addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        let filteredOpportunities;

        switch (category) {
            case 'volunteer':
                filteredOpportunities = opportunities.filter(opportunity => 
                    opportunity.category === 'volunteer' && 
                    opportunity.title.toLowerCase().includes(query)
                );
                break;
            case 'scholarship':
                filteredOpportunities = opportunities.filter(opportunity => 
                    opportunity.category === 'scholarship' && 
                    opportunity.title.toLowerCase().includes(query)
                );
                break;
            case 'grant':
                filteredOpportunities = opportunities.filter(opportunity => 
                    opportunity.category === 'grant' && 
                    opportunity.title.toLowerCase().includes(query)
                );
                break;
            default:
                filteredOpportunities = opportunities.filter(opportunity => 
                    opportunity.title.toLowerCase().includes(query)
                );
                break;
        }
        renderOpportunities(filteredOpportunities);
        playClickSound(); // Play sound on search
    });

    // Apply Filters on Category Change
    categorySelect.addEventListener('change', () => {
        document.getElementById('search-button').click();
    });

    // Initial Render of All Opportunities
    renderOpportunities(opportunities);
}

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("night-theme");
    const theme = document.body.classList.contains("night-theme") ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Save theme preference

    // Update button text based on theme
    themeToggleBtn.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Night Mode';
});

// Apply saved theme on page load
document.body.classList.toggle("night-theme", localStorage.getItem('theme') === 'dark');

// ChatGPT API Integration
async function interactWithChatGPT(prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer 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`, // Replace with your API key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 150
            })
        });
        const data = await response.json();
        document.getElementById('chatgpt-response').textContent = data.choices[0].text;
    } catch (error) {
        console.error('Error interacting with ChatGPT:', error);
        document.getElementById('chatgpt-response').textContent = 'Error fetching response. Please try again.';
    }
}

document.getElementById('chatgpt-submit')?.addEventListener('click', () => {
    const promptInput = document.getElementById('chatgpt-prompt').value.trim();
    if (promptInput) {
        interactWithChatGPT(promptInput);
    } else {
        alert('Please enter a prompt.');
    }
});

// Responsive Navigation Handling
function adjustNavigationForMobile() {
    const navItems = document.querySelectorAll('nav ul li');
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            item.style.display = 'block';
            item.style.marginBottom = '10px';
        });
    } else {
        navItems.forEach(item => {
            item.style.display = 'inline-block';
            item.style.marginBottom = '0';
        });
    }
}
window.addEventListener('resize', adjustNavigationForMobile);
adjustNavigationForMobile(); // Initial call

// Multi-Step Form Handling
let currentStep = 1;
document.getElementById('next-step')?.addEventListener('click', () => {
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    currentStep = 2;
});

document.getElementById('back-step')?.addEventListener('click', () => {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
    currentStep = 1;
});

document.getElementById('finish-setup')?.addEventListener('click', () => {
    const interest = document.getElementById('interest-select').value;
    alert(`Setup complete! Your interest is set to ${interest}.`);
    document.getElementById('multi-step-form').style.display = 'none';
});

// Account Form Handling
document.getElementById('account-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (username && email) {
        alert('Profile updated successfully!');
        const user = JSON.parse(localStorage.getItem('user'));
        user.username = username;
        user.email = email;
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('reset-button')?.addEventListener('click', () => {
    document.getElementById('account-form').reset();
    alert('Form reset successfully!');
});

// Dynamic Greeting Input (Optional Feature)
const greetingInput = document.getElementById("greeting-input");
document.getElementById("set-greeting")?.addEventListener("click", () => {
    const name = greetingInput?.value.trim() || 'Guest';
    alert(`Hello, ${name}!`);
    greetingInput.value = ""; // Clear input
});

// Star Rating Interaction
document.querySelectorAll('.star-rating').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.star');
    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');
            stars.forEach((s) => {
                s.style.color = s.getAttribute('data-value') <= ratingValue ? 'gold' : 'gray';
            });
            alert(`You rated this ${ratingValue} stars!`);
        });
    });
});

// Random Quote Functionality
const quotes = ["Inspiring quote 1", "Inspiring quote 2", "Inspiring quote 3"];
document.getElementById("new-quote-btn")?.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-display").textContent = randomQuote;
});

// Search Functionality
const opportunities = [
    { id: 1, title: 'Volunteer Program in Africa', category: 'volunteer', description: 'Impact communities through meaningful volunteer work.' },
    { id: 2, title: 'Scholarship in Europe', category: 'scholarship', description: 'Enhance your education with a full scholarship in Europe.' },
    { id: 3, title: 'Travel Grants for Asia', category: 'grant', description: 'Explore Asia through cultural exchange travel grants.' }
];

document.getElementById('search-button')?.addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    const resultsList = document.getElementById('results-list');

    let filteredOpportunities = opportunities.filter(opportunity => {
        return (!category || opportunity.category === category) &&
               (!query || opportunity.title.toLowerCase().includes(query));
    });

    // Save filtered opportunities in localStorage
    localStorage.setItem('searchResults', JSON.stringify(filteredOpportunities));

    resultsList.innerHTML = filteredOpportunities.map(opportunity => `
        <li class="opportunity-item" data-id="${opportunity.id}">
            ${opportunity.title}
        </li>
    `).join('');

    document.querySelectorAll('.opportunity-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = Number(item.getAttribute('data-id'));
            const opportunity = opportunities.find(op => op.id === id);
            if (opportunity) {
                alert(`Title: ${opportunity.title}\nDescription: ${opportunity.description}`);
            }
        });
    });
});

// On Page Load: Display previous search results from localStorage
window.addEventListener('load', () => {
    const storedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (storedResults) {
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = storedResults.map(opportunity => `
            <li class="opportunity-item" data-id="${opportunity.id}">
                ${opportunity.title}
            </li>
        `).join('');
    }
});


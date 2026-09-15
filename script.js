const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-menu-links a");
const mobileCta = document.querySelector(".mobile-menu-cta");


function openMenu() {
    mobileMenu.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}


function closeMenu() {
    mobileMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}


menuToggle.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);


mobileLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});


mobileCta.addEventListener("click", closeMenu);

// =====================================================
// PORTFOLIO CHAT ASSISTANT
// =====================================================

const portfolioChat = document.querySelector(".portfolio-chat");
const chatToggle = document.querySelector(".chat-toggle");
const chatClose = document.querySelector(".chat-close");
const chatBody = document.querySelector(".chat-body");

if (portfolioChat && chatToggle && chatClose && chatBody) {

    const defaultChat = `
        <div class="chat-message assistant-message">
            Hi! I'm Paula's portfolio assistant 👋
            <br><br>
            What would you like to explore?
        </div>

        <div class="chat-options">

            <button class="chat-option" data-question="work">
                Explore my work
            </button>

            <button class="chat-option" data-question="services">
                What can Paula build?
            </button>

            <button class="chat-option" data-question="process">
                How does she work?
            </button>

            <button class="chat-option" data-question="contact">
                Start a project
            </button>

        </div>
    `;


    // OPEN CHAT
    chatToggle.addEventListener("click", () => {
    portfolioChat.classList.toggle("is-open");
});


    // CLOSE CHAT
    chatClose.addEventListener("click", () => {
        portfolioChat.classList.remove("is-open");
    });


    // SHOW RESPONSE
    function showResponse(question) {

        let response = "";

        if (question === "work") {

            response = `
                <strong>Want to see the work?</strong>
                <br><br>
                Explore selected projects covering website design,
                UX/UI, development and conversion-focused experiences.
                <br><br>
                <a href="#work" class="chat-response-link">
                    View my work ↗
                </a>
            `;

        } else if (question === "services") {

            response = `
                <strong>What can Paula build?</strong>
                <br><br>
                Websites, landing pages, sales funnels, responsive
                interfaces and conversion-focused digital experiences.
                <br><br>
                <a href="#services" class="chat-response-link">
                    Explore services ↗
                </a>
            `;

        } else if (question === "process") {

            response = `
                <strong>How does she work?</strong>
                <br><br>
                I start with the business goal, structure the user
                journey, design the experience and then build it
                responsively.
                <br><br>
                <a href="#about" class="chat-response-link">
                    Learn about my approach ↗
                </a>
            `;

        } else if (question === "contact") {

            response = `
                <strong>Let's talk about your project.</strong>
                <br><br>
                Tell me what you're building and what you need help with.
                <br><br>
                <a href="#contact" class="chat-response-link">
                    Start a conversation ↗
                </a>
            `;
        }


        chatBody.innerHTML = `
            <div class="chat-message assistant-message">
                ${response}
            </div>

            <button class="chat-back">
                ← Back to options
            </button>
        `;


        chatBody.querySelector(".chat-back").addEventListener("click", () => {
            chatBody.innerHTML = defaultChat;
            attachChatOptions();
        });


        // Close chat after clicking a section link
        const responseLink = chatBody.querySelector(".chat-response-link");

        if (responseLink) {
            responseLink.addEventListener("click", () => {
                portfolioChat.classList.remove("is-open");
            });
        }
    }


    // ATTACH OPTION EVENTS
    function attachChatOptions() {

        const options = chatBody.querySelectorAll(".chat-option");

        options.forEach((option) => {

            option.addEventListener("click", () => {
                showResponse(option.dataset.question);
            });

        });
    }


    // INITIAL OPTIONS
    attachChatOptions();

}
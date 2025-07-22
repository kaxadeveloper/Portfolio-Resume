document.addEventListener("DOMContentLoaded", () => {
    // 1. Typing animation for h1
    const h1 = document.querySelector("h1");
    const text = "I'm Kaxa Developer";
    let index = 0;
    h1.textContent = "";

    function typeText() {
        if (index < text.length) {
            h1.textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // 2. Contact alert on link click
    const contactLink = document.querySelector("a");
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("📞 Call: 07 7200 3000\n📧 Email: hello@kaxa-dev.com");
    });

    // 3. Highlight skills on click
    const skills = document.querySelectorAll("ul li");
    skills.forEach((li) => {
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
            li.style.backgroundColor = "#29415e";
            li.style.color = "#fff";
        });
    });

    // 4. Fade in quote icon
    const icon = document.querySelector("i.fas");
    icon.style.opacity = 0;
    icon.style.transition = "opacity 2s ease-in";

    setTimeout(() => {
        icon.style.opacity = 0.3;
    }, 1000);
});

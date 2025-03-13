document.addEventListener("DOMContentLoaded", function() {
    // Fix toggle buttons
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Fix sidebar toggle
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    } else {
        console.error("Sidebar elements not found!");
    }
});

function updateCount(element, type) {
    let countElement = element.querySelector("span");
    let count = parseInt(element.getAttribute("data-count"));
    let isLiked = element.classList.contains("active");

    if (type === 'like') {
        count = isLiked ? count - 1 : count + 1; // Like toggle
        element.classList.toggle("active");
    } else {
        count += 1; // Always increment for comments & reposts
    }

    element.setAttribute("data-count", count);
    countElement.innerText = formatCount(count);
}

// Format numbers: 10K, 10.1K, 10.2K etc.
function formatCount(num) {
    if (num >= 10000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return num;
}

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
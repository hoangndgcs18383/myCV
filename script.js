/* --- JAVASCRIPT SECTION --- */
const modal = document.getElementById('game-modal');
const frame = document.getElementById('game-frame');
const modalTitle = document.getElementById('modal-title');
const spinner = document.getElementById('loading-spinner');
const msgBox = document.getElementById('msg-box');

/**
 * Mở trình phát game
 */
function playGame(title, url) {
    if (url === 'YOUR_LINK_HERE' || !url) {
        showMessage(`Thông báo: Link WebGL cho game "${title}" đang được cập nhật!`);
        return;
    }

    modalTitle.innerText = `Bản Build Demo: ${title}`;
    spinner.style.display = 'flex';
    frame.src = url;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    frame.onload = function () {
        spinner.style.display = 'none';
    };
}

/**
 * Đóng trình phát game
 */
function closeGame() {
    modal.style.display = 'none';
    frame.src = '';
    document.body.style.overflow = 'auto';
}

/**
 * Hiển thị thông báo (thay alert)
 */
function showMessage(text) {
    msgBox.innerText = text;
    msgBox.classList.add('show');
    setTimeout(() => {
        msgBox.classList.remove('show');
    }, 3000);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGame();
});

// Hiệu ứng Fade In cho các section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});
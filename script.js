
const btn = document.querySelector('.share-btn');
const shareSocial = document.getElementById('share-social-icons');

function shareSocialMedia() {
    shareSocial.classList.toggle('active');
}

btn.addEventListener('click', shareSocialMedia);
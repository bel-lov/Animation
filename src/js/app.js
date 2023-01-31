const btn = document.querySelector('.btn');
const borderText = document.querySelector('.border-text')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (borderText.classList.contains('show-content')) {
        borderText.classList.remove('show-content');
        borderText.style.height = 0;
        return;
    }
    borderText.style.height = '150px';
    borderText.classList.add('show-content');
})


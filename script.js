const keyInput = document.body.addEventListener('keypress', e => {
    document.querySelector('.starter').style.display= 'none'
    document.querySelector('.lineOne').style.display= 'block'
    document.querySelector('.lineTwo').style.display= 'block'
    let span = document.querySelector('span')
    console.log('e.key :', e.key);
    if (e.key == ' ') {
        span.textContent = 'Space'
    } else {
        span.textContent = e.key
    }

    document.querySelector('.lineTwo').textContent = e.which
})
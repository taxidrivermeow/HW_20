(() => {
    const imgList = document.getElementById('imgList');
    const imgAlert = document.getElementById('imgAlert');
    const imgContent = document.getElementById('imgContent');
    const imgDB = [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
        '/images/9.jpg',
        '/images/10.jpg',
    ];

    const render = () => {
        imgDB.forEach((src) => {
            let imgDiv = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src', src);
            img.setAttribute('alt', 'House');
            imgDiv.appendChild(img);
            imgList.appendChild(imgDiv);
        });
    }

    imgList.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'img') {
            imgContent.setAttribute('src', e.target.src);
            imgAlert.classList.remove('hide');
        }
    });

    imgAlert.addEventListener('click', (e) => {
        if (e.target.classList.contains('hide-alert')) {
            imgAlert.classList.add('hide');
        }
    });

    render();
})()
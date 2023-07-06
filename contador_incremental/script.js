let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    /* twitter */

    let imgTwitter = document.getElementById('card__img--twitter')
    imgTwitter.setAttribute('src', './assets/img/icons8-twitter.gif');
    let numberTwitter = document.getElementById('card__number--twitter')
    let contadorTwitter = 0
    let intervaloTwitter = setInterval(() => {
        contadorTwitter += 100
        numberTwitter.innerText = contadorTwitter

        if (contadorTwitter === 12000) {
            clearInterval(intervaloTwitter)
            btn.innerText = 'reStart'
            btn.addEventListener('mouseover', function () {
                numberTwitter.innerText = 0
                numberYoutube.innerText = 0
                numberFacebook.innerText = 0
                imgTwitter.src = './assets/img/icons8-twitter-50.png'
                imgYoutube.src = './assets/img/icons8-youtube-50.png'
                imgFacebook.src = './assets/img/icons8-facebook-50.png'
            })

            btn.addEventListener('mouseleave', function () {
                btn.innerText = 'Pincha Aqui'
            })

        }

    }, 50);

    /* youtube */

    let imgYoutube = document.getElementById('card__img--youtube')
    imgYoutube.setAttribute('src', './assets/img/icons8-youtube.gif');
    let numberYoutube = document.getElementById('card__number--youtube')
    let contadorYoutube = 0
    let intervaloYoutube = setInterval(() => {
        contadorYoutube += 100
        numberYoutube.innerText = contadorYoutube

        if (contadorYoutube === 5000) {
            clearInterval(intervaloYoutube)
        }

    }, 50);

    /* facebook */
    let imgFacebook = document.getElementById('card__img--facebook')
    imgFacebook.setAttribute('src', './assets/img/icons8-facebook.gif');
    let numberFacebook = document.getElementById('card__number--facebook')
    let contadorFacebook = 0
    let intervaloFacebook = setInterval(() => {
        contadorFacebook += 100
        numberFacebook.innerText = contadorFacebook

        if (contadorFacebook === 7500) {
            clearInterval(intervaloFacebook)
        }

    }, 50);

})






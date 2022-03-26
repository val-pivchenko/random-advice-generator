const id = document.querySelector('.id')
const quote = document.querySelector('.quote')
const shuffleBtn = document.querySelector('.shuffle')

function opacityZero() {
    id.style.opacity = 0
    quote.style.opacity = 0
}
function opacityOne() {
    id.style.opacity = 1
    quote.style.opacity = 1
}

const getAdvice = async () => {
    opacityZero()
    await axios.get('https://api.adviceslip.com/advice')
        .then((res) => {
            id.innerText = `Advice #${res.data.slip.id}`
            quote.innerText = `"${res.data.slip.advice}"`
        }
        )
        .catch((err) => {
            console.log(err)
        })
    opacityOne()
}

shuffleBtn.addEventListener('click', getAdvice)
const featBtn = document.querySelector('.feat-btn')
const servBtn = document.querySelector('.serv-btn')
const lists = document.querySelectorAll('nav ul li')

featBtn.addEventListener('click', () => {
    const featShow = document.querySelector('.feat-show')
    const first = document.querySelector('.first')

    featShow.classList.toggle('show')
    first.classList.toggle('rotate')
})

servBtn.addEventListener('click', () => {
    const servShow = document.querySelector('.serv-show')
    const second = document.querySelector('.second')

    servShow.classList.toggle('show')
    second.classList.toggle('rotate')
})

// 특정 list를 클릭했을 때, 그 list만 컬러를 입히고, 다른 list의 컬러는 없애는 부분이 안됨.


// ----
const btn = document.querySelector('.btn')
const sidebar = document.querySelector('.sidebar')
btn.addEventListener('click', () => {
    btn.classList.toggle('click')
    sidebar.classList.toggle('show')
})
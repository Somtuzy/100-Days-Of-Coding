const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const count = document.querySelector('#count')

const changeColor = () => {

    if(count.textContent < 0){
        count.style.color = 'red'
    } else if (count.textContent > 0 && count.textContent !== 17){
        count.style.color = 'green'
    } else {
        count.style.color = 'white'
    }
    
}

decrease.addEventListener('click', () =>{
    count.textContent = parseFloat(count.textContent) - 1;
    changeColor()
})

increase.addEventListener('click', () =>{
    count.textContent = parseFloat(count.textContent) + 1;
    changeColor()
})


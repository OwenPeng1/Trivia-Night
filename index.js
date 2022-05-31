let numLikes=0
let numDislikes = 0

imageLikes = document.querySelector("#like-count")
    likesBttn = document.querySelector('#like-button')
    likesBttn.addEventListener("click", function(){
        numLikes++
        imageLikes.textContent = `${numLikes} Likes`})

imageDislikes = document.querySelector("#dislike-count")
    dislikesBttn = document.querySelector('#dislike-button')
    dislikesBttn.addEventListener("click", function(){
        numDislikes++
        imageDislikes.textContent = `${numDislikes} Dislikes`})

fetch('http://numbersapi.com/random/trivia?json')
    .then(resp => resp.json())
    .then(data => {
        const fact = document.querySelector("#fact-setup")
        fact.textContent = data.text

        const container = document.querySelector('#fact-container')
        container.appendChild(fact)
       
        
    })

const nextButton = document.querySelector("#next-button")
nextButton.addEventListener("click", function(e){
    e.preventDefault()
    fetch('http://numbersapi.com/random/trivia?json')
    .then(resp => resp.json())
    .then(data => {
        const randomFact = document.querySelector("#fact-setup")
        randomFact.textContent = data.text

        const container = document.querySelector('#fact-container')
        container.appendChild(randomFact)
    })
    numLikes = 0
    numDislikes=0
    imageLikes.textContent = `${numLikes} Likes`
    imageDislikes.textContent = `${numDislikes} Dislikes`
})

const submitBttn = document.querySelector('#submit-form')
submitBttn.addEventListener("submit", function(e){
    e.preventDefault()
    const Num = document.querySelector("#submit").value
    fetch(`http://numbersapi.com/${Num}/trivia?json`)
    .then(resp => resp.json())
    .then(fetch => {
        const newFact = document.querySelector("#fact-setup")
        newFact.textContent = fetch.text

        const container = document.querySelector("#fact-container")
        container.appendChild(newFact)

    })

    numLikes = 0
    numDislikes=0
    imageLikes.textContent = `${numLikes} Likes`
    imageDislikes.textContent = `${numDislikes} Dislikes`
})


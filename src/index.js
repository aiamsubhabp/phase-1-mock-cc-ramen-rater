// write your code here
document.addEventListener('DOMContentLoaded', () => {
    displayRamenImages()
    addRamen()
    addSubmitListener()
    
})

function displayRamenImages() {
    fetch('http://localhost:3000/ramens')
        .then (r => r.json())
        .then (ramens => {
            ramens.forEach(ramen => renderRamenImage(ramen))
            displayRamenInfo(ramens[0])
        })
}

function renderRamenImage(ramen) {
    const ramenImageContainer = document.getElementById("ramen-menu")
    const ramenImg = document.createElement('img')

    ramenImg.src = ramen.image

    ramenImageContainer.append(ramenImg)

    ramenImg.addEventListener('click', () => displayRamenInfo(ramen))
}

function displayRamenInfo(ramen) {
    const ramenDetailImg = document.getElementById('detail-image')
    const ramenName = document.getElementById('ramen-name')
    const restaurantName = document.getElementById('restaurant-name')
    const ratingDisplay = document.getElementById('rating-display')
    const commentDisplay = document.getElementById('comment-display')

    ramenDetailImg.src = ramen.image
    ramenName.innerText = ramen.name
    restaurantName.innerText = ramen.restaurant
    ratingDisplay.innerText = ramen.rating
    commentDisplay.innerText = ramen.comment
}

function addRamen() {
    const newName = document.getElementById('new-name').value
    const newRest = document.getElementById('new-restaurant').value
    const newImg = document.getElementById('new-image').value
    const newRate = document.getElementById('new-rating').value
    const newComment = document.getElementById('new-comment').value

    const newRamen = {
        'name': newName,
        'restaurant': newRest,
        'image': newImg,
        'rating': newRate,
        'comment': newComment
    }

    const ramenImageContainer = document.getElementById("ramen-menu")
    const ramenImg = document.createElement('img')

    ramenImg.src = newRamen.image

    ramenImageContainer.append(ramenImg)

    ramenImg.addEventListener('click', () => displayRamenInfo(newRamen))


}

function addSubmitListener() {
    const ramenForm = document.getElementById("new-ramen");

    ramenForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addRamen();
        ramenForm.reset();
    })
}
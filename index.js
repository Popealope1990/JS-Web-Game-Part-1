function newImage(image, left, bottom){
    const character = document.createElement('img')
    character.src = image
    character.style.position = 'fixed'
    character.style.left = left + 'px'
    character.style.bottom = bottom + 'px'
    document.body.append(character)
    return character
}

function newItem(image, left, bottom){
    const newItem = newImage(image, left, bottom)
    // item.src = item
    // item.style.position = 'fixed'
    // item.style.left = left + 'px'
    // item.style.bottom = bottom + 'px'
    // document.body.append(item)
    // return item

    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
}

// function backgroundImage(image, bottom){
//     const backgroundImage = document.createElement('img')
//     backgroundImage.src = image
//     backgroundImage.style = 'flex'
//     backgroundImage.style
//     backgroundImage.style.bottom = bottom + 'px'
// }


newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)



newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// backgroundImage('assets/sky.png', 400)
const song = (number) => {
    for(let i = number; i > 0; i--){
        if(i === 1) { 
            console.log('1 bottle of beer on the wall, 1 bottle of beer, take it down pass it around no more bottles of beer on the wall')
            return
        }
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, take one down pass it around ${i - 1} bottles of beer on the wall`)
    }
}

module.exports = song
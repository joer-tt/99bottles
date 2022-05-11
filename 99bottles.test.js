const song = require('./99bottles')

describe('99bottles', () => {
    test('song', () => {
        console.log = jest.fn()
        song(2)
        expect(console.log).toHaveBeenCalledWith('2 bottles of beer on the wall, 2 bottles of beer, take one down pass it around 1 bottles of beer on the wall')
        expect(console.log).toHaveBeenCalledWith('1 bottle of beer on the wall, 1 bottle of beer, take it down pass it around no more bottles of beer on the wall')
    })
})
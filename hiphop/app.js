var hiphop = require('./hiphop')

var adLibs = hiphop.adLibs
var artists = hiphop.artists

console.log(hiphop.nimasSecretFavouriteArtist)

console.log(artists)
console.log(adLibs(process.argv[2]))


adLibs("Kanye West") // WONT PRINT ANYTHING

console.log(adLibs("Kanye West")) // THIS IS HOW

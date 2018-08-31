var artists = [
    {
        name: "Kanye West"
    },
    {
        name: "John Lennon"
    },
    {
        name: "Kendrick Lamar"
    }
]

var nimasSecretFavouriteArtist = "Taylor Swift"

function adLibs(name) {
    // return the relevant adlib

    if (name === "Lady Leshurr") {
        return "Brrrttt-ah!"
    } else if (name === "Mos Def") {
        return "Bucka buck bucka bucka"
    } else if (name === nimasSecretFavouriteArtist) {
        return "I'm taylor swift"
    } else {
        return "Hey what's up I'm nima"
    }
}

module.exports = {
    artists: artists,
    adLibs: adLibs // adLibs("artistName")
}
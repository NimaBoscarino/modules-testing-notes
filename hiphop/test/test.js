var hiphop = require('../hiphop')
var adLibs = hiphop.adLibs

var assert = require('assert');

describe('HipHop Adlibs', function() {
    it('should say "Bucka buck bucka bucka" when the artist is Mos Def', function() {
        assert.equal(adLibs("Mos Def"), "Bucka buck bucka bucka"); // good!
    });
    it('should say "Brrrttt-ah!" when the artist is Lady Leshurr', function() {
        assert.equal(adLibs("Lady Leshurr"), "asdasdas-ah!"); // fails!
    });
});

// console.log('mos def', adLibs("Mos Def") === "Bucka buck bucka bucka")
// console.log(adLibs("Nicki Minaj") === "asdasdasd")
// console.log(adLibs("Lady Leshurr") === "asdasd")
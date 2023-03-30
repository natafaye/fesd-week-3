// https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

const mispelled = function (word1, word2) {
    // if they're exactly the same
    if (word1 === word2) {
        return true
    }

    // if one letter added to beginning or end
    if (Math.abs(word1.length - word2.length) === 1 && (word1.includes(word2) || word2.includes(word1))) {
        return true
    }

    // if one letter switched
    if (word1.length === word2.length) {
        let differentCounter = 0
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                differentCounter++
                // If we just found our second difference
                if (differentCounter > 1) {
                    return false
                }
            }
        }
        return true
    }

    return false
}
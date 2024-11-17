var longestCommonPrefix = function(strs) {
    const minLength = findMinLength(strs)
    let prefix = ""
    for(let i=0; i < minLength; i++){
        const char = strs[0][i]
        for (let j=0; j < strs.length; j++){
            const str = strs[j]
            if (str[i] !== char) return prefix
        }
        prefix += char
    }
    return prefix
};

function findMinLength(strs){
    if(strs.length === 0) return 0

    let minLength = Infinity
    for(let i=0; i < strs.length; i++){
        if(strs[i].length < minLength) minLength = strs[i].length
    }
    return minLength
}
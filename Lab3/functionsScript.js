//1-
function pascalCase(name){
    var uppercase = name.split(" ").map(word => {
        if (word.length === 0)
            return '';
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ")
    return uppercase;
}

//2-
function longest(sentence){
    var long = sentence.split(" ").sort((a, b) => b.length - a.length )
    return long[0];
}

//3-
function sort(kelma){
    var alpha = kelma.split("").sort().join("")
    return alpha;
}

//4-
function commonElements(arr1, arr2){
    let common = arr1.filter((check) => arr2.includes(check));
    return common;
}

//5-
function rmdup(arr){
    let unique = [... new Set(arr)];
    return unique;
}
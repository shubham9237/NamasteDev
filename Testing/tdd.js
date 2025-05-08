module.exports = (x) => {
    if(!x) return null;

    const reverseString = x.split("").reverse().join("")
    if(reverseString == x){
        return true;
    }else {
        return false;
    }
}
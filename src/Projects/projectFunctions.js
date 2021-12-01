function skillsString(arr){
    let string = "";
    for (var i = 0; i < arr.length; i++) {
        if (i === 0){
            string += arr[i]
        }
        else{
            string += "," + arr[i]
        }
    }
    return string;
}

export {skillsString};
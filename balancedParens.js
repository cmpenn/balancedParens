// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Bala)(nced."

// Write your solution below:

// function balanced(str){
    
//     for(i=0; i<str.length; i++){
//         if(str.startsWith('(') && str.endsWith(')')){
//             return true
//         }else{
//             return false
//         }
//     }

// }

// console.log(balanced(sample2))

function balanced(str){
    count1 = 0
    count2 = 0
    for(i=0; i<str.length; i++){
         if(count1 > count2) return false
       if (str[i] == ")"){
        count1 += 1
       }
    }
    for(i = 0; i<str.length; i++){
        if(count1 > count2) return false
        if(str[i] == '('){
            count2 += 1
        }
    }
    if(count1 === count2){
        return true
    }else{
        return false
    }

}

console.log(balanced(sample4))
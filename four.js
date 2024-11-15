let list1 = [1 , 2 , 3 , 3]
const list2 = [4,4,5,6]
const newlist1 = [...new Set (list1)]
const newlist2 = [...new Set (list2)]
const list12 = [...newlist1, ...newlist2]
console.log(list12)
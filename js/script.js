let arr=[3,4,5,6];

/* for(let i=0; i<arr.length; i++){
    arr[i]=arr[i]*2
}
console.log(arr) */

let a=arr.map(function(item){
    return item*2 
})
console.log(a)

//객체안의 배열 보여주기

const userList=[
    {
        userId:"1",
        fistName:"jiyoung",
        lastName:"cho",
        phone:"010-1234-5678",
        address:"seoul"
    },
    {
        userId:"2",
        fistName:"mike",
        lastName:"cho",
        phone:"010-1234-5678",
        address:"seoul"
    },
    {
        userId:"3",
        fistName:"jenny",
        lastName:"cho",
        phone:"010-1234-5678",
        address:"seoul"
    }
]

const newUserList=userList.map((user) => {
    userId:user.userId
})
console.log(newUserList)
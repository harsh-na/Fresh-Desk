const users=[]

//addUser, removeUser, getUser, getUsersInRoom

const addUser=({id,username,room})=>{
    //Clean the data
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //Validate the data
    if(!username||!room){
        return{
            error:'Username and room are required!'
        }
    }
//check for existing user
const existingUser=users.find((user)=>{
    return user.room===room &&user.username===username
})

//validate username
if(existingUser){
    return{
        error:'Username is in use'
    }
}
//store user
const user={id,username,room}
users.push(user)
return {user}
}



const removeUser=(id)=>{
    const index=users.findIndex((user)=>{
        return user.id===id
    })
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}


//creating getUser
const getUser=(id)=>{
    return users.find((user)=>user.id===id)
}

const getUsersInRoom=(room)=>{
    room=room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}



//testing purpose
// addUser({
//     id:20,
//     username:'harshit',
//     room:'kanpur'
// })
// addUser({
//     id:21,
//     username:'samarth',
//     room:'kanpur'
// })
// addUser({
//     id:20,
//     username:'krishnay',
//     room:'kanpur'
// })

// const user=getUser(2015)
// console.log(user)

// const userList=getUsersInRoom('kanpur')
// console.log(userList)

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

/*async function asAw(){
    setTimeout(() => {
        return("Inside setTimeout");
    }, 5000);
    //console.log("This is async and await function")
}

 //console.log(asAw())

 asAw().then((data)=>{
     console.log(data)
 })*/

likeCode=async()=>{
    
  return new Promise((likingPost)=>{
    setTimeout(()=>{
    likingPost("Liked the post created")
  });
})
}

commentCode=async()=>{
    
    return new Promise((commentingPost)=>{
      setTimeout(()=>{
      commentingPost("comment the post created")
    });
  })
  }

 

 async function createPost(){
    var post=new Promise((cPost)=>{
        setTimeout(()=>{
         cPost("Post Created Successfully")
        },5000)
    });
    var[post,like,comment]=await Promise.all([
        post,
        likCode(),
        commentCode()])
createPost()

    }
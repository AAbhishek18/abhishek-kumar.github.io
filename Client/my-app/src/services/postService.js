import axios from "axios"




class Post{
   
    create(formData){
    const  url ="http://localhost:4000/api/register"
    const  config={
        headers:{
            'Content-Type':'application/json'
    }
    }
   return  axios.post(url,JSON.stringify(formData),config)
}
}

export default  new Post()






// class Post{
//     constructor(){
//         this.post = axios.create({
//             baseURL: process.env.REACT_APP_API_URL,
//             withCredentials: true
//         })
//     }

//     getAllPosts(){
//         return this.post.get("/posts")
//         .then(({data}) => data)
//     }

//     getOnePost(id){
//         return this.post.get(`/posts/${id}`)
//         .then(({data}) => data)
//     }

//     createPost(title, description, imageUrl){
//         return this.post.post("/posts", {title, description, imageUrl})
//         .then(({data}) => data)
//     }

//     updatePost(id, title, description, imageUrl){
//         return this.post.put(`/posts/${id}`, {title, description, imageUrl})
//         .then(({data}) => data)
//     }

//     deletePost(id){
//         return this.post.delete(`/posts/${id}`)
//         .then(({data}) => data)
//     }
// }

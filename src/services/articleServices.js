import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setArticles)=> {
    axiosWithAuth().get('http://localhost:5000/api/articles')
    .then(res=>{
        setArticles(res.data)
    })
    .catch(er=>{
        console.log(er)
    })

}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
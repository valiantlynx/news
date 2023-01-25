import axios from "axios"

export const news = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?'
})

export const getPostsPage = async (theme = 1) => {
    const response = await companies.get(`q=${theme}&apiKey=d3a68d3a93a54948a016a1553bc4d20c`)
    //console.log(response)
    return response
}

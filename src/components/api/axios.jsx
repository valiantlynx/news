import axios from "axios"

export const news = axios.create({
    baseURL: 'https://newsapi.org/v2/everything'
})
export const topNews = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines'
})
export const getPostsPage = async (tema = "kenya") => {
    const response = await news.get(`?q=${tema}&apiKey=838674747d4742299653d7e6d252ae35`)
    //console.log(response.data.articles)
    return response.data.articles
}
export const getTopPostsPage = async (tema = "no") => {
    const response = await topNews.get(`?country=${tema}&apiKey=838674747d4742299653d7e6d252ae35`)
    //console.log(response.data.articles)

    // sort according to if they have images
    let articles = response.data.articles
    articles.forEach(article => article.urlToImage ? article.urlToImage : article.urlToImage = "/no_image.jpg")
    return articles
}
export const getTopGeneralPostsPage = async (tema = "science") => {
    const response = await topNews.get(`?category=${tema}&apiKey=838674747d4742299653d7e6d252ae35`)
    //console.log(response.data.articles)
    return response.data.articles
}
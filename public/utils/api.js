const baseurl = 'http://localhost:1717/api/'
module.exports = {
    getArticleList: baseurl + 'article/getList',
    detailArticle: baseurl + 'article/getById', //编辑文章
}
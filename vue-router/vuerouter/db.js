const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {
  let data = { article:[], users: [] }

  for (let i = 1; i <= 10; i++) {
    data.article.push({
      id: i,
      title: Random.cword(10, 20),
      content: Random.cparagraph(100)
    })

    data.users.push({
      id: i,
      name: Random.cword(5, 10)
    })
  }

  return data
}
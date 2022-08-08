const Mock = require('mockjs');

const Random = Mock.Random;

module.exports = () => {
    const data = {
        news: []
    }

    for (let i = 0; i < 21; i++) {
        data.news.push({
            id: i,
            title: Random.cword(10, 20),
            content: Random.cparagraph(10)
        });
    }

    return data;
}


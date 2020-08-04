if (typeof window === 'undefined') {
    global.window = {}
}
const express = require('express');
const { renderToString } = require('react-dom/server'); //通过renderToString,把组件渲染成字符串

const SSR = require('../dist/search-server'); //通过文件名-server进行命名

//创建一个server
const server = (port) => {
    //实例化express
    const app = express()
    //设置静态目录dist
    app.use(express.static('dist'))
    //路由
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        res.status(200).send(html); //返回一个字符串
    })

    app.listen(port, () => {
        console.log('Server is runnig on port:', port);
    })
}

server(process.env.PORT || 3000); //端口

//用模板包装起来
const renderMarkup = (str) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="root">
${str}
</div>
</body>
</html>`
}


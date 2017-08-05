var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title : 'Article-one',
    heading: 'article-one',
    content : `<p>
                this is the content for my article.
            </p>
            <p>
                This is the best thing ever.yeah!!
            </p>
            <p>
                Hello!How are you?
            </p>`
},
    'article-two': { 
    title : 'Article-two',
    heading: 'article-two',
    content : `<p>
                this is the content for my article.
            </p>
            <p>
                This is the best thing ever.yeah!!
            </p>
            <p>
                Hello!How are you?
            </p>`
     },
    'article-three': { 
        title : 'Article-three',
        heading: 'article-three',
        content: `<p>
                this is the content for my article.
                </p>
                <p>
                    This is the best thing ever.yeah!!
                </p>
                <p>
                    Hello!How are you?
                </p>`
        }
};
    

function createTemplate(data){
var title = data.title;
var content = data.content;
var heading = data.heading;
var htmlTemplate = 
`<html>
    <head>
        <title> ${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
     <div class ='container'>  
        <div>
            <a href='/'>HOME</a>
        </div>
        <div>
            <h3>
                ${heading}
            </h3>
        </div>
        <div>
           ${content}
        </div>
     </div>    
    </body>
</html>`

return htmlTemplate;
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articleName",function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

/*var counter = 0;
app.get("/counter",function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'silentworkeratwork',
    database:'silentworkeratwork',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
}
var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article-one',
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
    title: 'Article-two',
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
        title: 'Article-three',
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
var titles = data.title;
var content = data.content;
var heading = data.heading;
var htmlTemplate = 
`<html>
    <head>
        <title> ${titles}</title>
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
</html>`;

return htmlTemplate;
}


var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names= [];
app.get('/submit-name',function(req,res){
   var name= req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM user',function(err,result){
       if(err){
            res.status(500).send(err.toString());
       }else{
           res.send(LSON.stringify(result));
       }
       
    });
});

app.get("/:articleName",function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



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

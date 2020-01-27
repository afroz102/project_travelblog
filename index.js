const express = require('express');
const app = express();
const multer = require('multer');
const exphbs = require('express-handlebars');

const db = require('./models/index.js');
const postControllers = require('./controllers/post.js');
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const fileStorage = multer.diskStorage({});
const upload = multer({ storage: fileStorage });
var cpUpload = upload.fields([
	{ name: 'image', maxCount: 2 }
]);

// Configure Handlebars
const hbs = exphbs.create({ extname: '.hbs'});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


app.get('/', postControllers.getPost);
app.get('/login',function (req, res) { 
    res.render('login'); 
});
app.get('/about', function (req, res) { 
    res.render('aboutTheBlogger'); 
});
app.get('/destinations', function (req, res) { 
    res.render('destination'); 
});
app.get('/foods', function (req, res) { 
    res.render('foods'); 
});
app.get('/hotels', function (req, res) { 
    res.render('hotels') 
});

app.post('/login', postControllers.login);
app.get('/post/new', postControllers.addPost);
app.post('/post/new', cpUpload, postControllers.addNewPost);
// app.post('/post/new', cpUpload, postControllers.addPost);
// app.post('/comment:id', postControllers.postComment);
// Start the app on pre defined port number
const env = process.env.NODE_ENV || 'default';
const PORT = process.env.PORT || 3000;
db.connect()
	.then(function () {
		app.listen(PORT, function () {
			console.log("Application has started in environment " + env + " and running on port: ", PORT);
			//console.log(process.env);
		}).on('error', function (error) {
			console.log("Unable to start app. Error >>>>", error);
		});
	}).catch(function (error) {
		console.log("Failed to setup connecton with database.", error);
	});	
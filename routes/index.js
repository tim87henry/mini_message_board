var express = require('express');
var router = express.Router();

// Sample messages
const messages = [
  {
    text: "Forza Italia",
    user: "Gilardino",
    added: new Date()
  },
  {
    text: "Buongiorno",
    user: "Luca Toni",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message board', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.userMessage, user: req.body.userName, added: new Date()});
  res.redirect('/')
});

module.exports = router;

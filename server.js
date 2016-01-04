'use strict';

const express = require('express');
const kue     = require('kue');

// Constants
const PORT = 8080;

// App
const app = express();
const queue = kue.createQueue({
  redis: process.env.REDIS_URL
});

app.get('/', function(req, res) {
  var job = queue.create('notify', {
    time: new Date(),
  }).save(function(err){
    if (err) {
      console.log('error occurred queuing job:', err);
      res.send('error occurred queuing job: ' + err);
    } else {
      console.log('success queuing job:', job.id);
      res.send('success queuing job: ' + job.id);
    }
  })
})

app.listen(PORT);
console.log('Runing on http://localhost:' + PORT);

'use strict';

const kue   = require('kue');
const queue = kue.createQueue({
  redis: process.env.REDIS_URL
});

queue.process('notify', function(job, done){
  console.log(job.data);
  console.log('sucess processing job:', job.id);
  done();
})

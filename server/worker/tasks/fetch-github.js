/* eslint-disable no-await-in-loop */
const fetch = require('node-fetch');
const redis = require('redis');
const bluebird = require('bluebird');

const client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const baseQuery = 'https://jobs.github.com/positions.json';

module.exports = async function fetchGithub() {
  let onPage = 0;
  let resultCount = 1;
  const allResults = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseQuery}?page=${onPage}`);
    const jobs = await res.json();
    allResults.push(...jobs);
    resultCount = jobs.length;
    console.log('Got ', jobs.length, ' jobs');
    onPage += 1;
  }
  console.log('Got ', allResults.length, ' total jobs');


  //
  const jrJobs = allResults.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes('senior')
      || jobTitle.includes('manager')
      || jobTitle.includes('architect')
      || jobTitle.includes('sr.')) {
      return false;
    }
    return true;
  });
  console.log('Filtered down to ', jrJobs.length, ' jobs');


  const success = await client.setAsync('github', JSON.stringify(jrJobs));
  console.log({ success });
};

module.exports();

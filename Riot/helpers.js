const axios = require('axios');
const { APIKEY } = require('./config.js');

function summoner(cb, username, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${username}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(data))
    .catch(err => cb(err));
}

function gameHistory(cb, id, region = 'NA1', params = {}) {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
    params,
  })
    .then(data => cb(data))
    .catch(err => cb(err));
}

function matchData(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(data))
    .catch(err => cb(err));
}

function gameTimeline(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matches/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(data))
    .catch(err => cb(err));
}

function gameData(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/timelines/by-match/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(data))
    .catch(err => cb(err));
}

function gameHistoryByUsername(cb, username, region = 'NA1', params = {}) {
  summoner((summonerData) => {
    // console.log('\n\n\nSummoner data: \n', summonerData);
    gameHistory(cb, summonerData.data.accountId, region, params);
  }, username, region);
}

module.exports = {
  summoner,
  gameHistory,
  matchData,
  gameTimeline,
  gameData,
  gameHistoryByUsername,
};

const axios = require('axios');
const { APIKEY } = require('./config.js');

function summoner(cb, username, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${username}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

function gameHistory(cb, id, region = 'NA1', params = {}) {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
    params,
  })
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

function matchData(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

function matches(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matches/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

function timelines(cb, id, region = 'NA1') {
  axios.get(`https://${region}.api.riotgames.com/lol/match/v3/timelines/by-match/${id}`, {
    headers: {
      'X-Riot-Token': APIKEY,
    },
  })
    .then(data => cb(null, data))
    .catch(err => cb(err));
}

function gameHistoryByUsername(cb, username, region = 'NA1', params = {}) {
  summoner((err, summonerData) => {
    if(err) { cb(err); } else {

      // console.log('\n\n\nSummoner data: \n', summonerData);
      gameHistory(cb, summonerData.data.accountId, region, params);
    }
  }, username, region);
}

function matchDataByUsername(cb, username, region = 'NA1', params = {}) {
  // const games = {};
  gameHistoryByUsername((err, gameHistoryData) => {
    // console.log('gameHistory Data: ', gameHistoryData);
    if (err) {
      console.error(err);
    } else {
      const gamesPromises = gameHistoryData.data.matches.map((game) => {
        return axios.get(`https://${region}.api.riotgames.com/lol/match/v3/matches/${game.gameId}`, {
          headers: {
            'X-Riot-Token': APIKEY,
          },
        });
      });
      Promise.all(gamesPromises)
        .then((gamesData) => { cb(null, gamesData.map(game => game.data)); })
        .catch(err => cb(err));
    }
  }, username, region, params);
}

module.exports = {
  summoner,
  gameHistory,
  matchData,
  matches,
  timelines,
  gameHistoryByUsername,
  matchDataByUsername,
};

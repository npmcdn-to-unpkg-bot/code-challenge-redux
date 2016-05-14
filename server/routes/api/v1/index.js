const express = require('express');
const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.json({ up: true });
});

router.get('/challenge', (req, res) => {
  const user = req.user;
  user.highestChallenge = 0; // hard-coded for now
  res.json(user);
});


module.exports = router;

const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send("This is the backend App for DUZE.")
});

module.exports = router;
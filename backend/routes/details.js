const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json({
        "key": "value",
    })
});

module.exports = router
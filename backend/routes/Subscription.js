const router = require('express').Router();
let Subscription = require('../models/subscription.model');

/* 
Netflix - 665432098675243567
www.duzeapi.com/Subscription/ => GET    
www.duzeapi.com/Subscription/find/665432098675243567 => GET
www.duzeapi.com/Subscription/delete/665432098675243567  => DELETE
www.duzeapi.com/Subscription/update/665432098675243567 => POST
www.duzeapi.com/Subscription/add => POST
*/

router.route('/').get((req, res) => {
    Subscription.find()
        .then(subscriptions => res.json(subscriptions))
        .catch(err => res.status(400).json('[ERROR] ' + err));
});
// fetch(duze.com/Subscriptions/delete/456765434231) => json
router.route('/find/:id').get((req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => res.json(subscription))
        .catch(err => res.status(400).json('[ERROR] ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Subscription.findByIdAndDelete(req.params.id)
        .then(() => res.json('Subscirption deleted successfully'))
        .catch(err => res.status(400).json('[ERROR]  ' + err));
});

router.route('/update/:id').post((req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => {
            subscription.name = req.body.name;
            subscription.category = req.body.category;
            subscription.date_purchased = Date.parse(req.body.date_purchased);
            subscription.trial = req.body.trial;
            subscription.payment_type = req.body.payment_type;
            subscription.payment_freq = req.body.payment_freq;
            subscription.sub_payment = Number(req.body.sub_payment);
            subscription.auto_pay = req.body.auto_pay;
            subscription.annual_payment = 12 * req.body.sub_payment;

            subscription.save()
                .then(() => res.json('Subscription Updated Successfully'))
                .catch(err => res.status(400).json('[ERROR] ' + err));
        })
        .catch(err => res.status(400).json('[ERROR] ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const date_purchased = Date.parse(req.body.date_purchased);
    const trial = req.body.trial;
    const payment_type = req.body.payment_type;
    const payment_freq = req.body.payment_freq;
    const sub_payment = Number(req.body.sub_payment);
    const auto_pay = req.body.auto_pay;
    const annual_payment = 12 * req.body.sub_payment;

    let trial_ending = null;
    if (trial) {
        trial_ending = Date.parse(req.body.trial_ending);
    };

    const newSubscription = new Subscription({
        name,
        category,
        date_purchased,
        trial,
        trial_ending,
        payment_type,
        payment_freq,
        sub_payment,
        auto_pay,
        annual_payment,
    });

    newSubscription.save()
        .then(() => res.json("New subscription added!"))
        .catch(err => res.status(400).json('[ERROR]' + err))
})

module.exports = router
const router = require('express').Router();
let Subscription = require('../models/subscription.model');

function updateNextPayment(Subscription) {
    let starting_date = Subscription.date_purchased;
    let new_pay_date = new Date();
    let today = new Date();

    if (starting_date.getDate() >= today.getDate()) {
        new_pay_date.setMonth(today.getMonth());
        new_pay_date.setDate(starting_date.getDate());
        new_pay_date.setYear(today.getFullYear());
    } else {
        new_pay_date.setMonth(today.getMonth() + 1);
        new_pay_date.setDate(starting_date.getDate());
        if (new_pay_date.getMonth() == 0) {
            new_pay_date.setYear(today.getFullYear() + 1);
        } else { new_pay_date.setYear(today.getFullYear()); }
    }

    Subscription.next_payment = new_pay_date;
    return Subscription;
}

router.route('/').get((req, res) => {
    Subscription.find()
        .then(subscriptions => subscriptions.map(updateNextPayment))
        .then(subscriptions => res.json(subscriptions))
        .catch(err => res.status(400).json('[ERROR] ' + err));
});

router.route('/find/:id').get((req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => updateNextPayment(subscription))
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
        .then(async(subscription) => {
            subscription.name = req.body.name;
            subscription.category = req.body.category;
            subscription.date_purchased = Date.parse(req.body.date_purchased);
            subscription.sub_type = req.body.sub_type;
            const check_trial_up = await (() => {
                if (subscription.sub_type === 'Trial') {
                    subscription.trial_ending = Date.parse(req.body.trial_ending);
                }
            });
            subscription.payment_type = req.body.payment_type;
            subscription.payment_freq = req.body.payment_freq;
            subscription.sub_payment = Number(req.body.sub_payment);
            subscription.auto_pay = req.body.auto_pay;
            subscription.annual_payment = 12 * req.body.sub_payment;
            subscription.next_payment = req.body.next_payment;

            check_trial_up();

            subscription.save()
                .then(() => res.json('Subscription Updated Successfully'))
                .catch(err => res.status(400).json('[ERROR] ' + err));
        })
        .catch(err => res.status(400).json('[ERROR] ' + err));
});

router.route('/add').post(async(req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const date_purchased = Date.parse(req.body.date_purchased);
    const sub_type = req.body.sub_type;
    const payment_type = req.body.payment_type;
    const payment_freq = req.body.payment_freq;
    const sub_payment = Number(req.body.sub_payment);
    const auto_pay = req.body.auto_pay;
    const annual_payment = 12 * req.body.sub_payment;
    const next_payment = req.body.next_payment;

    let trial_ending = null;
    const check_trial = await (() => {
        if (sub_type === 'Trial') {
            trial_ending = Date.parse(req.body.trial_ending);
        }
    });
    check_trial();

    const newSubscription = new Subscription({
        name,
        category,
        date_purchased,
        sub_type,
        trial_ending,
        payment_type,
        payment_freq,
        sub_payment,
        auto_pay,
        annual_payment,
        next_payment
    });
    newSubscription.save()
        .then(() => res.json("New subscription added!"))
        .catch(err => res.status(400).json('[ERROR]' + err))
})

module.exports = router

function updateNextPayment(Subscription) {
    let starting_date = Subscription.date_purchased;
    let new_pay_date = new Date();
    let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let yyyy = today.getFullYear();

    if (starting_date.getDate() <= today.getDate()) {
        new_pay_date.setMonth(today.getMonth());
        new_pay_date.setDate(starting_date.getDate());
        new_pay_date.setYear(today.getYear());
    }
    else {
        new_pay_date.setMonth(today.getMonth() + 1);
        new_pay_date.setDate(starting_date.getDate());
        if (new_pay_date.getMonth() == 0) {
            new_pay_date.setYear(today.getYear() + 1);
        }
        else { new_pay_date.setYear(today.getYear()); }
    }

    return new_pay_date;
  }
  
  let sub = {
      "date_purchased": new Date("April 17, 2020") 
  }
  date = updateNextPayment(sub);
  console.log(date.toString());
  

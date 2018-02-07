

//-----------------------------------------------------------

let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log('swiggy rejecting promise..');
                //reject('food not wit us Î');
                setTimeout(() => {
                    console.log('swiggy resolving promise..');
                    resolve('Biryani..');
                }, 2000)
            }, 3000)
        });
        return promise;
    }
};
//-----------------------------------------------------------


//-----------------------------------------------------------

let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolving/reject promise..');
                resolve('BEER');
                //reject('No Beer');
            }, 2000);
        });
        return promise;
    }
};
//-----------------------------------------------------------
//-----------------------------------------------------------

let person = {
    doWork: function () {
        console.log('person working.....');
        console.log('feels hungry.. req food on swiggy module');
        let promise1 = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise , defer actions to future');
        Promise.race([promise1, promise2])
            .then(
            (result) => {
                console.log('yummy ' + result);
            },
            (error) => {
                console.log('ooops ' + error);
            });
        console.log('cont.. further work.... ends..');

    }
};

person.doWork();

//-----------------------------------------------------------
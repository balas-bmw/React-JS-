

function doTopic1() {
    let tnrName = "Nag"; // moved to heap when ending doTopic1
    try {
        console.log(tnrName + ' teaching topic-1');
        // throw new Error('hate-topic-1');
        function doTopic2() {
            console.log(tnrName + ' teaching topic-2');
            throw new Error('hate-topic-2');
            console.log('teaching topic-2 ends');
        }
        // doTopic2(); // sync
        setTimeout(doTopic2, 5000); // async

        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}
doTopic1();
module.exports.verify = (card, cb) =>{
    //verfication
    //this is a call backs,I/O and db call etc.
    console.log('card verified');
    for(let i = 0; i<10; i++){
        cb();
    }
}
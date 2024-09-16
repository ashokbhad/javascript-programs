// I promise, Will share the notes
const promiseNotes = new Promise((resolve, rejected) => {
    // you guys wait till 3 PM
    // resolve("Hey.. Here you go.. Takes these notes");
    rejected("Sorry. Guys. I didn't get time..");
});
promiseNotes.then((success) => {
    console.log(success);
}).catch((rejected) => {
    console.log(rejected);
}).finally(() => {
    console.log('I must have notes');
});
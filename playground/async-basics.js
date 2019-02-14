console.log('Starting app');

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);

console.log('Finishing up');

setTimeout(() => {
    console.log('Inside of callback');
}, 1000);

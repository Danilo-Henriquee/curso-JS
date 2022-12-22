function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Minha promise')
            resolve();
        }, 2000);
    });
}

export default async function() {
    await promise();
}
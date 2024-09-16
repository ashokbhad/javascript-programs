
async function add() {
    return 20 + 20;
}
try {
    let result = await add();
    console.log(result);
} catch (error) {
    console.log(error);

}
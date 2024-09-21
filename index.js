async function dadjokes (){
    try {
        const jokes= await fetch ("");
        return await jokes.json();

    } catch (error) {
        console.log("no jokes found")
    }
}
dadjokes()
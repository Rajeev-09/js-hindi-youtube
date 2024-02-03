// Immediately Invoked function expressions(IIFE)
    
// global execution se problem hoti h kie bar toh global 
// variable ko declare se htne ke liye hm iife ka use karte hn


// example of named iife

(function chai() {
    console.log("Db Connected");
})();    // kha pe semi colon lgna jaruri h execution kar ke liye varna nich ka code nhi chl gya

// ()() yehi h iife

// example of simple iife

((name) => {
    console.log(`Db Connected too ${name}`);
})("Rajeev");    // kha pe semi colon lgna jaruri h execution kar ke liye

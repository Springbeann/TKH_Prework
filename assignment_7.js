let assignment_7 = (names_array) => {
    let odds = [];
    let evens = [];
    names_array.forEach(e => {
        if (e.length%2 == 0) {
            evens.push(e)
        } else {
          
        }
    });
    evens.forEach(e => {
        e[0] = "b"
    });
    odds.forEach(e => {
        e[e.length - 1] = "c"
    });
    console.log(odds, evens)
    return evens;
}
let names_array = ["Kamili", "Adam", "Dave", "Miles", "Nikki", "future hendrix"];
console.log(assignment_7(names_array));

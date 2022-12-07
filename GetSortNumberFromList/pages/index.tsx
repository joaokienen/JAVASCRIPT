const sorted : string[] = [];
const mager = ['0', '1', '2', '3', '4', '5', '6'];
for (var i = 0; i < 1; i++){
    const expanYs = mager[Math.floor(Math.random() * mager.length)]; 
    sorted.push(expanYs);
}

const mixZ1 = sorted[0];

// Or
/*
    const mixZvilgas = Math.floor(Math.random() * 21);
    const mixZvilgax = mixZvilgas.toString();
*/

export { mixZ1 }
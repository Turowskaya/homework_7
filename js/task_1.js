var task1 = [];

start:
    for (var i = 1; i <= 1000; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j === 0) continue start;
       }

    task1.push(i);
    console.log(task1);
}
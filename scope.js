
     let a = 1, b = 2, c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8
    console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8
      })();
    })();
  })();
})();
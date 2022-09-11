const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

console.log(permutator([1, 2]));

////// version 2
//permutations with repetitions, ES5
function test() {
  "use strict";

  // permutationsWithRepetition :: Int -> [a] -> [[a]]
  var permutationsWithRepetition = function (n, as) {
    return as.length > 0
      ? foldl1(curry(cartesianProduct)(as), replicate(n, as))
      : [];
  };

  // GENERIC FUNCTIONS -----------------------------------------------------

  // cartesianProduct :: [a] -> [b] -> [[a, b]]
  var cartesianProduct = function (xs, ys) {
    return [].concat.apply(
      [],
      xs.map(function (x) {
        return [].concat.apply(
          [],
          ys.map(function (y) {
            return [[x].concat(y)];
          })
        );
      })
    );
  };

  // foldl1 :: (a -> a -> a) -> [a] -> a
  var foldl1 = function (f, xs) {
    return xs.length > 0 ? xs.slice(1).reduce(f, xs[0]) : [];
  };

  // replicate :: Int -> a -> [a]
  var replicate = function (n, a) {
    var v = [a],
      o = [];
    if (n < 1) return o;
    while (n > 1) {
      if (n & 1) o = o.concat(v);
      n >>= 1;
      v = v.concat(v);
    }
    return o.concat(v);
  };

  // curry :: ((a, b) -> c) -> a -> b -> c
  var curry = function (f) {
    return function (a) {
      return function (b) {
        return f(a, b);
      };
    };
  };
  // TEST -----------------------------------------------------------------
  // show :: a -> String
  var show = function (x) {
    return JSON.stringify(x);
  }; //, null, 2);

  return show(permutationsWithRepetition(2, [1, 2, 3]));

  //--> [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]
}
console.log(test());

//version 3
//permutations with repetitions, ES5
function test() {
  "use strict";

  // permutationsWithRepetition :: Int -> [a] -> [[a]]
  var permutationsWithRepetition = function (n, as) {
    return as.length > 0
      ? foldl1(curry(cartesianProduct)(as), replicate(n, as))
      : [];
  };

  // GENERIC FUNCTIONS -----------------------------------------------------

  // cartesianProduct :: [a] -> [b] -> [[a, b]]
  var cartesianProduct = function (xs, ys) {
    return [].concat.apply(
      [],
      xs.map(function (x) {
        return [].concat.apply(
          [],
          ys.map(function (y) {
            return [[x].concat(y)];
          })
        );
      })
    );
  };

  // foldl1 :: (a -> a -> a) -> [a] -> a
  var foldl1 = function (f, xs) {
    return xs.length > 0 ? xs.slice(1).reduce(f, xs[0]) : [];
  };

  // replicate :: Int -> a -> [a]
  var replicate = function (n, a) {
    var v = [a],
      o = [];
    if (n < 1) return o;
    while (n > 1) {
      if (n & 1) o = o.concat(v);
      n >>= 1;
      v = v.concat(v);
    }
    return o.concat(v);
  };

  // curry :: ((a, b) -> c) -> a -> b -> c
  var curry = function (f) {
    return function (a) {
      return function (b) {
        return f(a, b);
      };
    };
  };
  // TEST -----------------------------------------------------------------
  // show :: a -> String
  var show = function (x) {
    return JSON.stringify(x);
  }; //, null, 2);

  return show(permutationsWithRepetition(2, [1, 2, 3]));

  //--> [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]]
}
console.log(test());

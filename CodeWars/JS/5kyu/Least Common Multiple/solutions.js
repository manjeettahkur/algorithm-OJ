var lcm = function () {
  // TODO: Program me
  var args = [].slice.call(arguments);

  if (args.length == 1) return args[0];

  args = args.sort(function(a,b){return b-a});

  return args.reduce(lcm1);
};

function gcd(m, n) { return n === 0 ? m : gcd(n, m % n); }
function lcm1(m, n) { return m * n / gcd(m, n); }
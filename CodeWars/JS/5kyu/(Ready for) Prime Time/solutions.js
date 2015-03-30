function prime(num) {
    // Generate an array containing every prime number between 0 and the num specified (inclusive)
    var result = [];
        for (var i = 0, len = num; i <= len; i++) {
                if (isPrime(i)) result.push(i);
        }

    return result;
}

function isPrime(n) {
        if(n < 2) return false;
        if(n == 2 || n == 3) return true;
        if (n % 2 == 0) return false;
        
        for(var i = 3; i < n; i += 2) {
                if(n%i == 0) return false;
        }

        return true;
}
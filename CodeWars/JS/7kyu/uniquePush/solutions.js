//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
    var resultBoolean = false;
    var isDuplicate = false;
    var phoneNumber = obj.phoneNumber;

    if (phoneNumber) {
        arr.forEach(function(ele, index) {
            if (phoneNumber == ele.phoneNumber) {
                isDuplicate = true;
            }
        })
        if (!isDuplicate) {
            console.log("isDuplicate false");
            arr.push(obj);
            return true;
        }
    } 
    return false;
}

// for test
arr = [{"name":"bob","phoneNumber":1234},{"name":"joe","phoneNumber":12345}];
obj = {"name":"bob","phoneNumber":1234}
uniquePush(arr, obj);


function average(arr) {
    if (arr === undefined || arr.length === undefined) {
        return 0;
    }

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

function getAverageScore(data) {
    var result = {};
    var sum = 0;
    var totalAvg = 0;
    var count = 0;

    for (var key in data) {
        var avg = average(data[key]);
        result[key] = avg;
        sum += avg;
        count++;
    }

    if (count > 0) {
        totalAvg = sum / count;
    }
    result["average"] = totalAvg;
    return result;
}

export async function changeStatus(ele, date, current) {
    let currentEle = ele
    console.log(currentEle);
    if (current == "done") {
        currentEle.NotDoneDates.push(date);
        currentEle.DoneDates.splice(currentEle.DoneDates.indexOf(date), 1);
    } else if (current == "not done") {
        currentEle.NotDoneDates.splice(currentEle.NotDoneDates.indexOf(date), 1);
    } else {
        currentEle.DoneDates.push(date);
    }
    currentEle.DoneDates.sort(function (a, b) {
        return new Date(a) - new Date(b);
    });
    currentEle.NotDoneDates.sort(function (a, b) {
        return new Date(a) - new Date(b);
    });
    currentEle.BestStreak = findLongestConseqSubseq(currentEle.DoneDates);
    currentEle.Current = findLastConseqSubseq(currentEle.DoneDates);
    currentEle.TotalTracked = currentEle.DoneDates.length + currentEle.NotDoneDates.length;
    currentEle.TotalDone = currentEle.DoneDates.length;
    await setData(currentEle);
    return current;
}

async function setData(sent) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(sent);
    console.log(raw);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };
    // let data;
    await fetch("http://localhost:5000/setData", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // data = result;
            // return result;
            // location.reload();
        })
        .catch(error => console.log('error', error));
    // return data;
}


function makeArrOfDate(arr) {
    arr = arr.map((ele) => { return (new Date(ele + " 00:00:00 GMT")) / 86400000; })
    return arr;
}

function findLastConseqSubseq(arr) {
    let n = arr.length;
    arr = makeArrOfDate(arr);
    let ans = 1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] == arr[i + 1] - 1) {
            ans += 1;
        } else {
            console.log(ans);
            return ans;
        }
    }
    return ans;
}

// [1,2,3,5,6,8,9]
function findLongestConseqSubseq(arr) {
    let n = arr.length;
    arr = makeArrOfDate(arr);
    let S = new Set();
    for (let i = 0; i < n; i++)
        S.add(arr[i]);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (!S.has(arr[i] - 1)) {
            let j = arr[i];
            while (S.has(j))
                j++;
            ans = Math.max(ans, j - arr[i]);
        }
    }
    console.log(ans)
    return ans;
}

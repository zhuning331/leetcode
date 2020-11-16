/*
 * @lc app=leetcode id=811 lang=javascript
 *
 * [811] Subdomain Visit Count
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const countDomainArray = [];
    for (let i = 0; i < cpdomains.length; i++) {
        const splited = cpdomains[i].split(' ');
        const count = splited[0];
        const subdomain = splited[1].split('.');
        let countDomainObj = {};
        for (let j = 0; j < subdomain.length; j++) {
            let tempArray = [];
            for (let k = j; k < subdomain.length; k++) {
                tempArray.push(subdomain[k]);
            }
            countDomainObj[tempArray.join('.')] = +count;
        }
        countDomainArray.push(countDomainObj);
    } 
    const result = [];
    for (let i = 0; i < countDomainArray.length; i++) {
        let sum = 0;
        for (const key in countDomainArray[i]) {
            if (countDomainArray[i].hasOwnProperty(key)) {
                sum += countDomainArray[i][key];
                for (let j = 0; j < countDomainArray.length; j++) {
                    for (const key1 in countDomainArray[j]) {
                        if (key1 === key && i !== j) {
                            sum += countDomainArray[j][key1];   
                        }
                    }
                }
                let resultStr = sum + ' ' + key;
                if (result.indexOf(resultStr) === -1) {
                    result.push(resultStr);
                }
                sum = 0;
            }
        }
    }
    return result;
};
// @lc code=end


function isValidDate(input) {
    return typeof input.getMonth === "function";
}
// Because currently only arrays have .join
// Maybe there's a better way out there?
function joinObj(obj, seperator) {
    const out = [];
    let k;
    for (k in obj) {
        out.push(k);
    }
    return out.join(seperator);
}
function CountryCodeToDateFormat(countryInput) {
    // Written by Will Morrison 2018-04-05
    //https://en.wikipedia.org/wiki/Date_format_by_country
    //https://www.worldatlas.com/aatlas/ctycodes.htm
    // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd?page=2&tab=scoredesc#tab-top

    const countryFormatType = {
        default: "YYYY-MM-DD",
        ISO8601: "YYYY-MM-DD",
        INTERNATIONAL: "YYYY-MM-DD",
        PLN: "dd.MM.yyyy",
        eFV: "yyyy-MM-dd",
        USA: "M/d/yyyy",
        GBR: "d MMMM yyyy",
        NLD: "dd-MM-yyyy",
        CHN: "yy年MM月dd日",
        // EXPAND ME!
    };
    if (!countryInput) {
        countryInput = "default";
    }
    if (!(countryInput in countryFormatType)) {
        return countryInput;
    }
    // Build Regex Dynamically based on the list above.
    // Should end up with something like this "/(INTERNATIONAL+|USA+|GBR+|CHN+)/g"
    const countryMatchRegex = joinObj(countryFormatType, "|");
    const regEx = new RegExp(countryMatchRegex, "g");
    countryInput = countryInput.replace(regEx, function (countryCode) {
        return countryFormatType[countryCode];
    });

    return countryInput;
}

function DateToString(inDate, formatString) {
    // Written by Will Morrison 2018-04-05

    // Validate that we're working with a date
    if (!isValidDate(inDate)) {
        inDate = new Date(inDate);
    }
    formatString = CountryCodeToDateFormat(formatString);

    const dateObject = {
        M: inDate.getMonth() + 1,
        d: inDate.getDate(),
        D: inDate.getDate(),
        h: inDate.getHours(),
        m: inDate.getMinutes(),
        s: inDate.getSeconds(),
        y: inDate.getFullYear(),
        Y: inDate.getFullYear(),
    };
    // Build Regex Dynamically based on the list above.
    // Should end up with something like this "/([Yy]+|M+|[Dd]+|h+|m+|s+)/g"
    const dateMatchRegex = joinObj(dateObject, "+|") + "+";
    const regEx = new RegExp(dateMatchRegex, "g");
    formatString = formatString.replace(regEx, function (formatToken) {
        const datePartValue = dateObject[formatToken.slice(-1)];
        const tokenLength = formatToken.length;

        // A conflict exists between specifying 'd' for no zero pad -> expand to '10' and specifying yy for just two year digits '01' instead of '2001'.  One expands, the other contracts.
        // so Constrict Years but Expand All Else
        if (formatToken.indexOf("y") < 0 && formatToken.indexOf("Y") < 0) {
            // Expand single digit format token 'd' to multi digit value '10' when needed
            const tokenLength = Math.max(
                formatToken.length,
                datePartValue.toString().length
            );
        }
        const zeroPad =
            datePartValue.toString().length < formatToken.length
                ? "0".repeat(tokenLength)
                : "";
        return (zeroPad + datePartValue).slice(-tokenLength);
    });

    return formatString;
}
Date.prototype.ToString = function (formatStr) {
    return DateToString(this.toDateString(), formatStr);
};

// test
// console.log("prototype", Date.prototype);
// console.log(new Date().ToString("yyyy-MM-dd"));
// console.log(new Date().ToString("yyyy.MM.dd"));
// console.info("eFV: " + DateToString("Sun May 11,2014", "PLN"));
// console.info("PLN: " + DateToString("Sun May 11,2014", "PLN"));
// console.info(new Date("Sun Dec 11,2014").ToString("yyyy-M-d"));
// console.info(new Date("Sun Dec 11,2014").ToString("yyyy-M-d"));
// console.info(new Date("05/04/2018").ToString("MM/DD/yy"));
// console.info(new Date("05/04/2018").ToString("yyyy.MM.dd"));
// console.info("USA: " + DateToString("Sun May 11,2014", "USA"));
// console.info("CHN: " + DateToString("Sun May 11,2014", "CHN"));
// console.info("Still not really working... (Below)");
// console.info("GBR: " + DateToString("Sun May 11,2014", "GBR")); // TBD doesn't expand to month name as it should

export { DateToString as default };

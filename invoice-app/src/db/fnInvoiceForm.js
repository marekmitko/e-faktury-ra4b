


// https://stackoverflow.com/questions/72873880/how-to-add-prefix-to-object-keys-in-javascript

export const createPrefixObjectKeys = (prefix) => (source) => {
    
    const prefixedSourceTuples = Object.entries(source).map(
        ([key, value]) => [
        `${prefix}${key}`,
        value
        ]
    );

return Object.fromEntries(prefixedSourceTuples);
};


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// key.replace(/([0-9]|[1-9][0-9])/, '').replace('_pro__','')

export const removePrefixObjectKeys = (source) => {
    
    const prefixedSourceTuples = Object.entries(source).map(
        ([key, value]) => { 
            const newKey = key.replace(/([0-9]|[1-9][0-9])/, '').replace('__', '');
            return ([`${newKey}`, value ]); 
        }
    );

return Object.fromEntries(prefixedSourceTuples);
};


export const transformArrayProducts = (arrProducts) => {
    if(arrProducts.length === 0) return null;
    const newArray = [];
    arrProducts.map((obj, idx) => newArray.push(removePrefixObjectKeys(obj)));
    
    return newArray;

};








    const transform = data => ({
        ...data,
        fullName: `${data.firstName} ${data.lastName}`
    });




 const transformInvForm = (data) => {
    const sanitizedData = {};
    for (const key in data) {
        if (typeof data[key] === "string" && data[key].length === 0) continue;
        sanitizedData[key] = data[key]; 
    }
    return sanitizedData;
};
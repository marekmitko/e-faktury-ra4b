



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
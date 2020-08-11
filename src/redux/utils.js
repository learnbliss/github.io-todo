export const deleteKeyInObj = (key, obj) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj
};

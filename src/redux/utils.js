export const deleteKeyInObj = (key, obj) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj
};

export const upperCase = (text) => {
    return text.replace(/^([A-zА-яё])/, (match) => {
        return match.toUpperCase()
    })
};

export const renameKeyInObj = (oldProp, newProp, {[oldProp]:old, ...others}) => ({
    [newProp]: old,
    ...others
});

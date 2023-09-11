export const paginate = (array, page, perpage) => {
    const startIndex = (page - 1) * perpage;
    const endIndex = startIndex + perpage;
    return array.slice(startIndex, endIndex);
};

import Categories from '../MockData/mockData.js';

const categories = { Categories };

export const getCategories = () => {
    new Promise((resolve, reject) => {
        resolve(categories);
    });
    return categories.Categories;
};
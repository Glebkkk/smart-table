import {createComparison, defaultRules} from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор
const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    Object.keys(indexes).forEach((elementName) => {
        elements[elementName].append(
            ...Object.values(indexes[elementName]).map(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                return option;
            })
        );
    });

    return (data, state, action) => {
        // @todo: #4.2 — обработать очистку поля
        if (action && action.name === 'clear') {
    const field = action.dataset.field;

    const parent = action.closest('label');

    if (parent) {
        const input = parent.querySelector('input');
        if (input) {
            input.value = '';
        }
    }

    if (state[field] !== undefined) {
        state[field] = '';
    }
}

        // @todo: #4.5 — отфильтровать данные используя компаратор
       const totalFrom = parseFloat(state.totalFrom);
const totalTo = parseFloat(state.totalTo);

return data.filter(row => {
    if (!isNaN(totalFrom) && row.total < totalFrom) {
        return false;
    }

    if (!isNaN(totalTo) && row.total > totalTo) {
        return false;
    }

    return compare(row, state);
});
    }
}
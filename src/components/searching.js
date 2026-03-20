export function initSearching(searchField) {
    return (data, state) => {
        const value = state[searchField];

        // 👉 если ничего не ввели — ничего не фильтруем
        if (!value) return data;

        const search = value.toLowerCase();

        return data.filter(row => {
            return (
                row.date.toLowerCase().includes(search) ||
                row.customer.toLowerCase().includes(search) ||
                row.seller.toLowerCase().includes(search)
            );
        });
    };
}
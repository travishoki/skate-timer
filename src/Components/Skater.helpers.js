export const getClassName = (selectedSkaterId, id) => {
    if (!selectedSkaterId) {
        return null;
    }

    return selectedSkaterId === id ? 'active' : 'inactive';
}

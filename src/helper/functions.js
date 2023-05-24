export const isInCart = (state, id) => {
    const resualt = !! state.selectedItems.find(item => item.id === id )
    return resualt;
}


export const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}


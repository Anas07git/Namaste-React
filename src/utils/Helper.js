function filterResto(searchVal, restaurants) {
     const filtered=restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchVal.toLowerCase()))

     return filtered
}

export default filterResto
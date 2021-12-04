const filterMap = {
  brand: {
    filterFn: (brandValue) => {
      if (brandValue.length > 0) {
        return (item) => brandValue.includes(item.brand);
      }
      return () => true;
    },
  },
  size: {
    filterFn: (sizeValue) => {
      if (sizeValue.length > 0) {
        return (item) => item.size.map((sized) => sizeValue.includes(sized));
      }
      return () => true;
    },
  },
  idealFor: {
    filterFn: (idealValue) => {
      if (idealValue.length > 0) {
        return (item) => idealValue.includes(item.idealFor);
      }
      return () => true;
    },
  },
};

export const filterTheProducts = (selectedFilters, allProducts) => {
  if (!allProducts) {
    return [];
  }
  let filteredSearchResults = allProducts;
  Object.keys(selectedFilters).map((selectedFilterKey) => {
    if (selectedFilters[selectedFilterKey].length === 0) {
      return true;
    }
    const filterFn = filterMap[selectedFilterKey].filterFn(
      selectedFilters[selectedFilterKey]
    );
    filteredSearchResults = filteredSearchResults.filter(filterFn);
  });
  return filteredSearchResults;
};

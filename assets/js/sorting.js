const sorting = {
  byText(a, b){
    if (a.text < b.text)
      return -1;
    if (a.text > b.text)
      return 1;
    return 0;
  },
  byID(a, b) {
    if (a.id < b.id)
      return -1;
    if (a.id > b.id)
      return 1;
    return 0;
  },
  byValue(a, b) {
    if (a.value < b.value)
      return -1;
    if (a.value > b.value)
      return 1;
    return 0;
  },
  byName(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
};

export default sorting

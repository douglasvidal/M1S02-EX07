function State() {
  this.textMultiplicationTable = null;
}

const state = new State();

export function init() {
  state.textMultiplicationTable = document.querySelector(".multiplication-table-text");
}

export function multiplicationTableElement() {
  return state.textMultiplicationTable;
}

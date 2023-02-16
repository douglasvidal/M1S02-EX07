import * as multiplicationTableService from "../services/multiplication-table-service.js";
import * as sectionController from "./section-controller.js";

function State() {
  this.buttonMultiplicationTable = null;
  this.inputNumber = null;
}

const state = new State();

export function init() {
  state.buttonMultiplicationTable = document.querySelector(
    "#multiplication-table"
  );
  state.inputNumber = document.querySelector("#price");

  state.buttonMultiplicationTable.addEventListener(
    "click",
    handleButtonMultiplicationTableClick
  );
}

function handleButtonMultiplicationTableClick(event) {
  event.preventDefault();
  multiplicationTableService.multiply(
    sectionController.multiplicationTableElement(),
    state.inputNumber.value
  );
}

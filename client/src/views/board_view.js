const CreateAppend = require('../helpers/create_append.js');

const BoardView = function (element) {
  this.element = element;
};

BoardView.prototype.bindEvents = function () {
  this.renderBoard(15);
};

BoardView.prototype.renderBoard = function (dimensions) {
  for (let colID = 1; colID <= dimensions; colID++) {
    const colDiv = new CreateAppend('div', "", this.element);
    colDiv.id = colID;
    colDiv.classList.add('board');
    for (let rowID = 1; rowID <= dimensions; rowID++) {
      const rowDiv = new CreateAppend('div', `${colID},${rowID}`, colDiv);
      rowDiv.id = `${colID},${rowID}`;
      rowDiv.classList.add('board');
    }
  }
};

module.exports = BoardView;

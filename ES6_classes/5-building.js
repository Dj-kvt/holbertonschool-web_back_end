// 5-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Check if the subclass has implemented evacuationWarningMessage
    if (new.target !== Building) { // if not instantiated directly from Building
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}

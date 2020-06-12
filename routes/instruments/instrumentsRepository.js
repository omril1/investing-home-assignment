const { asyncQuery } = require('../../dbConnection');

module.exports = {
  addInstrument(instrument) {
    console.log('Creating an instrument', instrument);
    return asyncQuery({
      sql: `INSERT INTO instruments 
      ( name, symbol , instrumentType ) VALUES 
      ( ?   , ?      , ?              )`,
      values: [instrument.name, instrument.symbol, instrument.instrumentType],
    });
  },
  getAllInstruments() {
    return asyncQuery({ sql: 'SELECT * FROM instruments' });
  },
  /** @param {number} id */
  deleteInstrument(id) {
    return asyncQuery({ sql: 'DELETE FROM instruments WHERE instrumentId = ?', values: [id] });
  },
};

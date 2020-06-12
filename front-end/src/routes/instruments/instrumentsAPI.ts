export interface Instrument {
  instrumentId: 1;
  name: string;
  symbol: string;
  instrumentType: string;
}

const BASE_URL = '/instruments';

const instrumentsAPI = {
  addInstrument: (instrument: Instrument) =>
    fetch(BASE_URL, {
      body: JSON.stringify(instrument),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }),
  getAllInstruments: () => fetch(BASE_URL, { headers: { Accepts: 'application/json' } }).then(r => r.json()),
  deleteInstrument: (id: number) => fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }),
};

export default instrumentsAPI;

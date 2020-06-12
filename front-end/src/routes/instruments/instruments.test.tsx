import * as React from 'react';
import instrumentsApi from './instrumentsApi';
import InstrumentsList from './InstrumentsList';
import { mount } from 'enzyme';

// prettier-ignore
// cSpell:disable
const mockData = [
  { instrumentId: 1     , name: 'Euro US Dollar'                          , symbol: 'EUR/USD', instrumentType: 'currency'  },
  { instrumentId: 10    , name: 'Euro SwissFranc'                         , symbol: 'EUR/CHF', instrumentType: 'currency'  },
  { instrumentId: 9     , name: 'Euro JapaneseYen'                        , symbol: 'EUR/JPY', instrumentType: 'currency'  },
  { instrumentId: 956731, name: 'Investing.com EuroIndex'                 , symbol: 'inveur' , instrumentType: 'indice'    },
  { instrumentId: 2124  , name: 'US DollarEuro'                           , symbol: 'USD/EUR', instrumentType: 'currency'  },
  { instrumentId: 976573, name: 'Sygnia Itrix Euro Stoxx 50ETF'           , symbol: 'SYGEUJ' , instrumentType: 'etf'       },
  { instrumentId: 997393, name: 'NewWave EUR Currency Exchange TradedNote', symbol: 'NEWEURJ', instrumentType: 'etf'       },
  { instrumentId: 998227, name: 'Diesel European GasoilFutures'           , symbol: 'DSEL1c1', instrumentType: 'commodity' },
  { instrumentId: 175   , name: 'Euro Stoxx50'                            , symbol: 'STOXX50', instrumentType: 'indice'    },
  { instrumentId: 15978 , name: 'Euronet WorldwideInc'                    , symbol: 'EEFT'   , instrumentType: 'equities'  },
  { instrumentId: 6     , name: 'Euro BritishPound'                       , symbol: 'EUR/GBP', instrumentType: 'currency'  },
  { instrumentId: 15    , name: 'Euro AustralianDollar'                   , symbol: 'EUR/AUD', instrumentType: 'currency'  },
  { instrumentId: 16    , name: 'Euro CanadianDollar'                     , symbol: 'EUR/CAD', instrumentType: 'currency'  },
  { instrumentId: 52    , name: 'Euro New ZealandDollar'                  , symbol: 'EUR/NZD', instrumentType: 'currency'  },
  { instrumentId: 1487  , name: 'Australian DollarEuro'                   , symbol: 'AUD/EUR', instrumentType: 'currency'  },
  { instrumentId: 1525  , name: 'Canadian DollarEuro'                     , symbol: 'CAD/EUR', instrumentType: 'currency'  },
];
// cSpell:enable

const getAllInstrumentsSpy = jest.spyOn(instrumentsApi, 'getAllInstruments').mockResolvedValue(mockData);

beforeEach(() => getAllInstrumentsSpy.mockClear());

describe('InstrumentsList component', () => {
  describe('on mount', () => {
    it('should call the get all instruments API', () => {
      mount(<InstrumentsList />);

      expect(getAllInstrumentsSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('initial state', () => {
    it('should have no items in the list', () => {
      const wrapper = mount(<InstrumentsList />);
      const instruments = wrapper.find('Instrument');

      expect(instruments.length).toBe(0);
    });
  });

  describe('after API promise resolved', () => {
    it('should render 16 list items', async () => {
      const wrapper = mount(<InstrumentsList />);

      await Promise.resolve();
      wrapper.update();

      const instruments = wrapper.find('Instrument');
      expect(instruments.length).toBe(16);
    });

    describe('filtering behavior', () => {
      it('should filter the results to a single item', async () => {
        const wrapper = mount(<InstrumentsList />);
        wrapper.find('#search').simulate('change', { target: { value: 'USD/EUR' } });
        await Promise.resolve();
        wrapper.update();

        const instruments = wrapper.find('Instrument');
        expect(instruments.length).toBe(1);
      });

      it('should filter on multiple fields ignoring case', async () => {
        const wrapper = mount(<InstrumentsList />);
        wrapper.find('#search').simulate('change', { target: { value: 'US' } });
        await Promise.resolve();
        wrapper.update();

        const instruments = wrapper.find('Instrument');
        expect(instruments.length).toBe(4);
      });
    });
  });
});

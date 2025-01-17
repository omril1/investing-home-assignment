START TRANSACTION;

CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE instruments (
  instrumentId INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(41) NOT NULL,
  symbol VARCHAR(7) NOT NULL,
  instrumentType VARCHAR(9) NOT NULL
);

INSERT INTO instruments
( instrumentId, name                                       , symbol   , instrumentType ) VALUES
( 1           , 'Euro US Dollar'                           , 'EUR/USD', 'currency'     ),
( 10          , 'Euro Swiss Franc'                         , 'EUR/CHF', 'currency'     ),
( 9           , 'Euro Japanese Yen'                        , 'EUR/JPY', 'currency'     ),
( 956731      , 'Investing.com Euro Index'                 , 'inveur' , 'indice'       ),
( 2124        , 'US Dollar Euro'                           , 'USD/EUR', 'currency'     ),
( 976573      , 'Sygnia Itrix Euro Stoxx 50 ETF'           , 'SYGEUJ' , 'etf'          ),
( 997393      , 'NewWave EUR Currency Exchange Traded Note', 'NEWEURJ', 'etf'          ),
( 998227      , 'Diesel European Gasoil Futures'           , 'DSEL1c1', 'commodity'    ),
( 175         , 'Euro Stoxx 50'                            , 'STOXX50', 'indice'       ),
( 15978       , 'Euronet Worldwide Inc'                    , 'EEFT'   , 'equities'     ),
( 6           , 'Euro British Pound'                       , 'EUR/GBP', 'currency'     ),
( 15          , 'Euro Australian Dollar'                   , 'EUR/AUD', 'currency'     ),
( 16          , 'Euro Canadian Dollar'                     , 'EUR/CAD', 'currency'     ),
( 52          , 'Euro New Zealand Dollar'                  , 'EUR/NZD', 'currency'     ),
( 1487        , 'Australian Dollar Euro'                   , 'AUD/EUR', 'currency'     ),
( 1525        , 'Canadian Dollar Euro'                     , 'CAD/EUR', 'currency'     );

COMMIT;

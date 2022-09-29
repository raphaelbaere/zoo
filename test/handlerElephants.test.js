const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Is HandlerElephants a function?', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('HandlerElephants without params return undefined?', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('HandlerElephants passing an object, returns an error?', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('HandlerElephants passing an invalid string, returns null?', () => {
    expect(handlerElephants('abc')).toBe(null);
  });
  it('HandlerElephants passing "availability", returns the days available for visit?', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('HandlerElephants passing "location", returns the location where the elephants are?', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('HandlerElephants passing "popularity", returns the popularity of the elephants?', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('HandlerElephants passing "count", returns the quantity of elephants in the zoo?', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('HandlerElephants passing "names", returns the names of the elephants in the zoo?', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('HandlerElephants passing "averageAge", returns the average age of the elephants?', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});

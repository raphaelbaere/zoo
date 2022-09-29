const getOpeningHours = require('../src/getOpeningHours');

const { hours } = require('../data/zoo_data');

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se quando não passado parâmetros, retorna hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Testa se ao passar um dia inválido, lança um erro.', () => {
    expect(() => getOpeningHours('Londray', '5:35-PM')).toThrow();
  });
  it('Testa se ao passar minutos não números, lança um erro.', () => {
    expect(() => getOpeningHours('Monday', '5:ab-PM')).toThrow();
  });
  it('Testa se ao passar horas não números, lança um erro.', () => {
    expect(() => getOpeningHours('Monday', 'ab:35-PM')).toThrow();
  });
  it('Testa se ao passar uma abreviação inválida, lança um erro.', () => {
    expect(() => getOpeningHours('Monday', '5:35-YM')).toThrow();
  });
  it('Testa se ao passar uma hora inválida, lança um erro.', () => {
    expect(() => getOpeningHours('Monday', '15:35-PM')).toThrow();
  });
  it('Testa se ao passar um minuto inválido, lança um erro.', () => {
    expect(() => getOpeningHours('Monday', '5:75-PM')).toThrow();
  });
  it('Testa se quando passado uma hora em que o Zoo está aberto, retorna a frase correta', () => {
    expect(getOpeningHours('Tuesday', '3:35-PM')).toBe(open);
  });
  it('Testa se quando passado uma hora em que o Zoo está fechado, retorna a frase correta', () => {
    expect(getOpeningHours('Sunday', '8:00-PM')).toBe(closed);
  });
  it('Testa se o dia for Monday, retorna que o parque está fechado!', () => {
    expect(getOpeningHours('Monday', '8:00-PM')).toBe(closed);
  });
  it('Testa se o dia for Sunday, e as horas 12:59-PM transforma corretamente', () => {
    expect(getOpeningHours('Sunday', '12:59-PM')).toBe(open);
  });
  it('Testa se o dia for Sunday, e as horas 12:59-AM transforma corretamente', () => {
    expect(getOpeningHours('Sunday', '12:59-AM')).toBe(closed);
  });
});

// /components/menu/menu.js

// Pizzas
import { pizzas as englishPizzas } from './english/pizzas';
import { pizzas as spanishPizzas } from './spanish/pizzas';
import { pizzas as portuguesePizzas } from './portuguese/pizzas';
import { pizzas as germanPizzas } from './german/pizzas';
import { pizzas as italianPizzas } from './italian/pizzas';
import { pizzas as frenchPizzas } from './french/pizzas';
import { pizzas as dutchPizzas } from './dutch/pizzas';
import { pizzas as russianPizzas } from './russian/pizzas';
import { pizzas as ukrainianPizzas } from './ukrainian/pizzas';

// Entries
import { entries as englishEntries } from './english/entries';
import { entries as spanishEntries } from './spanish/entries';
import { entries as portugueseEntries } from './portuguese/entries';
import { entries as germanEntries } from './german/entries';
import { entries as italianEntries } from './italian/entries';
import { entries as frenchEntries } from './french/entries';
import { entries as dutchEntries } from './dutch/entries';
import { entries as russianEntries } from './russian/entries';
import { entries as ukrainianEntries } from './ukrainian/entries';

// Pastas
import { pastas as englishPastas } from './english/pastas';
import { pastas as spanishPastas } from './spanish/pastas';
import { pastas as portuguesePastas } from './portuguese/pastas';
import { pastas as germanPastas } from './german/pastas';
import { pastas as italianPastas } from './italian/pastas';
import { pastas as frenchPastas } from './french/pastas';
import { pastas as dutchPastas } from './dutch/pastas';
import { pastas as russianPastas } from './russian/pastas';
import { pastas as ukrainianPastas } from './ukrainian/pastas';

// Salads
import { salads as englishSalads } from './english/salads';
import { salads as spanishSalads } from './spanish/salads';
import { salads as portugueseSalads } from './portuguese/salads';
import { salads as germanSalads } from './german/salads';
import { salads as italianSalads } from './italian/salads';
import { salads as frenchSalads } from './french/salads';
import { salads as dutchSalads } from './dutch/salads';
import { salads as russianSalads } from './russian/salads';
import { salads as ukrainianSalads } from './ukrainian/salads';

// Risottos
import { risottos as englishRisottos } from './english/risottos';
import { risottos as spanishRisottos } from './spanish/risottos';
import { risottos as portugueseRisottos } from './portuguese/risottos';
import { risottos as germanRisottos } from './german/risottos';
import { risottos as italianRisottos } from './italian/risottos';
import { risottos as frenchRisottos } from './french/risottos';
import { risottos as dutchRisottos } from './dutch/risottos';
import { risottos as russianRisottos } from './russian/risottos';
import { risottos as ukrainianRisottos } from './ukrainian/risottos';

// Meats
import { meats as englishMeats } from './english/meats';
import { meats as spanishMeats } from './spanish/meats';
import { meats as portugueseMeats } from './portuguese/meats';
import { meats as germanMeats } from './german/meats';
import { meats as italianMeats } from './italian/meats';
import { meats as frenchMeats } from './french/meats';
import { meats as dutchMeats } from './dutch/meats';
import { meats as russianMeats } from './russian/meats';
import { meats as ukrainianMeats } from './ukrainian/meats';

// Fish
import { fish as englishFish } from './english/fish';
import { fish as spanishFish } from './spanish/fish';
import { fish as portugueseFish } from './portuguese/fish';
import { fish as germanFish } from './german/fish';
import { fish as italianFish } from './italian/fish';
import { fish as frenchFish } from './french/fish';
import { fish as dutchFish } from './dutch/fish';
import { fish as russianFish } from './russian/fish';
import { fish as ukrainianFish } from './ukrainian/fish';

// Desserts
import { desserts as englishDesserts } from './english/desserts';
import { desserts as spanishDesserts } from './spanish/desserts';
import { desserts as portugueseDesserts } from './portuguese/desserts';
import { desserts as germanDesserts } from './german/desserts';
import { desserts as italianDesserts } from './italian/desserts';
import { desserts as frenchDesserts } from './french/desserts';
import { desserts as dutchDesserts } from './dutch/desserts';
import { desserts as russianDesserts } from './russian/desserts';
import { desserts as ukrainianDesserts } from './ukrainian/desserts';

// Menu of the Day
import { menuOfDay as englishMenuOfDay } from './english/menu_of_day';
import { menuOfDay as spanishMenuOfDay } from './spanish/menu_of_day';
import { menuOfDay as portugueseMenuOfDay } from './portuguese/menu_of_day';
import { menuOfDay as germanMenuOfDay } from './german/menu_of_day';
import { menuOfDay as italianMenuOfDay } from './italian/menu_of_day';
import { menuOfDay as frenchMenuOfDay } from './french/menu_of_day';
import { menuOfDay as dutchMenuOfDay } from './dutch/menu_of_day';
import { menuOfDay as russianMenuOfDay } from './russian/menu_of_day';
import { menuOfDay as ukrainianMenuOfDay } from './ukrainian/menu_of_day';

// Drinks
import { drinks as englishDrinks } from './english/drinks';
import { drinks as spanishDrinks } from './spanish/drinks';
import { drinks as portugueseDrinks } from './portuguese/drinks';
import { drinks as germanDrinks } from './german/drinks';
import { drinks as italianDrinks } from './italian/drinks';
import { drinks as frenchDrinks } from './french/drinks';
import { drinks as dutchDrinks } from './dutch/drinks';
import { drinks as russianDrinks } from './russian/drinks';
import { drinks as ukrainianDrinks } from './ukrainian/drinks';

// Exporting the combined menu
export const menus = {
  pizzas: {
    english: englishPizzas,
    spanish: spanishPizzas,
    portuguese: portuguesePizzas,
    german: germanPizzas,
    italian: italianPizzas,
    french: frenchPizzas,
    dutch: dutchPizzas,
    russian: russianPizzas,
    ukrainian: ukrainianPizzas
  },
  entries: {
    english: englishEntries,
    spanish: spanishEntries,
    portuguese: portugueseEntries,
    german: germanEntries,
    italian: italianEntries,
    french: frenchEntries,
    dutch: dutchEntries,
    russian: russianEntries,
    ukrainian: ukrainianEntries
  },
  pastas: {
    english: englishPastas,
    spanish: spanishPastas,
    portuguese: portuguesePastas,
    german: germanPastas,
    italian: italianPastas,
    french: frenchPastas,
    dutch: dutchPastas,
    russian: russianPastas,
    ukrainian: ukrainianPastas
  },
  salads: {
    english: englishSalads,
    spanish: spanishSalads,
    portuguese: portugueseSalads,
    german: germanSalads,
    italian: italianSalads,
    french: frenchSalads,
    dutch: dutchSalads,
    russian: russianSalads,
    ukrainian: ukrainianSalads
  },
  risottos: {
    english: englishRisottos,
    spanish: spanishRisottos,
    portuguese: portugueseRisottos,
    german: germanRisottos,
    italian: italianRisottos,
    french: frenchRisottos,
    dutch: dutchRisottos,
    russian: russianRisottos,
    ukrainian: ukrainianRisottos
  },
  meats: {
    english: englishMeats,
    spanish: spanishMeats,
    portuguese: portugueseMeats,
    german: germanMeats,
    italian: italianMeats,
    french: frenchMeats,
    dutch: dutchMeats,
    russian: russianMeats,
    ukrainian: ukrainianMeats
  },
  fish: {
    english: englishFish,
    spanish: spanishFish,
    portuguese: portugueseFish,
    german: germanFish,
    italian: italianFish,
    french: frenchFish,
    dutch: dutchFish,
    russian: russianFish,
    ukrainian: ukrainianFish
  },
  desserts: {
    english: englishDesserts,
    spanish: spanishDesserts,
    portuguese: portugueseDesserts,
    german: germanDesserts,
    italian: italianDesserts,
    french: frenchDesserts,
    dutch: dutchDesserts,
    russian: russianDesserts,
    ukrainian: ukrainianDesserts
  },
  menuOfDay: {
    english: englishMenuOfDay,
    spanish: spanishMenuOfDay,
    portuguese: portugueseMenuOfDay,
    german: germanMenuOfDay,
    italian: italianMenuOfDay,
    french: frenchMenuOfDay,
    dutch: dutchMenuOfDay,
    russian: russianMenuOfDay,
    ukrainian: ukrainianMenuOfDay
  },
  drinks: {
    english: englishDrinks,
    spanish: spanishDrinks,
    portuguese: portugueseDrinks,
    german: germanDrinks,
    italian: italianDrinks,
    french: frenchDrinks,
    dutch: dutchDrinks,
    russian: russianDrinks,
    ukrainian: ukrainianDrinks
  }
};

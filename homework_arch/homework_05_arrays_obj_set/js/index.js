import unify from "./utils/unify/unify";
import reverse from "./utils/reverse/reverse";
import getMap from "./utils/get-map/get-map";
import getPropsSum from "./utils/get-props-sum/get-props-sum";
import getArithmeticMean from "./utils/get-arithmetic-mean/get-arithmetic-mean";
import getTypes from "./utils/get-types/get-types";
import filterByRange from "./utils/filter-by-range/filter-by-range";
import compareToAnagram from "./utils/compare-to-anagram/compare-to-anagram";

import Calc from "./classes/calc/calc";
import Viewer from "./classes/viewer/viewer";
import Mutant from "./classes/mutant/mutant";
import getUniq from "./utils/get-uniq/get-uniq";

window.tasks = {
  task1: {
    desc: `На вход поступает массив, вывести массив, удалив повторяемые значения`,
    run: unify
  },

  task1Alt: {
    desc: `На вход поступает массив, вывести массив, удалив неуникальные значения`,
    run: getUniq
  },

  task2: {
    desc: `На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать`,
    run: reverse
  },

  task3: {
    desc: `На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект,
    где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один`,
    run: getMap
  },

  task4: {
    desc: `На вход поступает объект, вывести сумму числовых свойств объекта`,
    run: getPropsSum
  },

  task5: {
    desc: `На вход поступает массив с числами, вывести среднее арифметическое элементов массива`,
    run: getArithmeticMean
  },

  task6: {
    desc: `Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле,
    хранящее текущее значение и методы сложения, вычитания, умножения и деления,
    принимающие число и манипулирующий свойством значения в соответствии с назначением метода,
    а так же функцию, сбрасывающую значение в ноль`,
    run: () => new Calc()
  },

  task7: {
    desc: `Функция принимает смешанный массив (содержащий значения чисел, строк и объектов),
    вернуть объект с полями numbers, strings и objects, содержащими массив со значениями,
    соответствующими названию поля.`,
    run: getTypes
  },

  task8: {
    desc: `Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,
    значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)`,
    run: filterByRange
  },

  task9: {
    desc: `Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false`,
    run: compareToAnagram
  },

  task10: {
    desc: `Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую
    (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты)
    сама функция в консоль выводиться не должна.`,
    run: (obj) => new Viewer(obj)
  },

  task11: {
    desc: `Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства),
    метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable,
    enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства).
    Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено`,
    run: () => new Mutant()
  },
};

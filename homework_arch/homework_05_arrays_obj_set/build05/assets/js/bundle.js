!function n(u,i,o){function a(e,t){if(!i[e]){if(!u[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(l)return l(e,!0);throw(r=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",r}r=i[e]={exports:{}},u[e][0].call(r.exports,function(t){return a(u[e][1][t]||t)},r,r.exports,n,u,i,o)}return i[e].exports}for(var l="function"==typeof require&&require,t=0;t<o.length;t++)a(o[t]);return a}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,r.default=function(){var e=this;this.__curVal=0,this.setVal=function(t){return e.__checkIsNaN(t)||(e.__curVal=t),e},this.getVal=function(){return e.__curVal},this.reset=function(){return e.__curVal=0,e},this.sum=function(t){return e.__checkIsNaN(t)||(e.__curVal+=t),e},this.minus=function(t){return e.__checkIsNaN(t)||(e.__curVal-=t),e},this.div=function(t){return e.__checkIsNaN(t)||(e.__curVal/=t),e},this.multiply=function(t){return e.__checkIsNaN(t)||(e.__curVal*=t),e},this.__checkIsNaN=function(t){t=!Number.isFinite(t);return t&&(e.__curVal=NaN),t}}},{}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,r.default=function(){var n=this;this.setProp=function(t,e,r){Object.defineProperty(n,t,Object.assign({value:void 0,writable:!0,configurable:!0,enumerable:!0},{value:e},r))}}},{}],3:[function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,u,i=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){a=!0,u=t}finally{try{o||null==r.return||r.return()}finally{if(a)throw u}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,r.default=function(){var e=this;this.obj=Object.assign({},0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}),this.print=function(){var t=Object.entries(e.obj).map(function(t){var e=n(t,2),t=e[0],e=e[1];return"".concat(t,": ").concat(e)}).join(",");return console.log(t),t},Object.defineProperty(this,"print",{enumerable:!1})}},{}],4:[function(t,e,r){"use strict";var n=p(t("./utils/unify/unify")),u=p(t("./utils/reverse/reverse")),i=p(t("./utils/get-map/get-map")),o=p(t("./utils/get-props-sum/get-props-sum")),a=p(t("./utils/get-arithmetic-mean/get-arithmetic-mean")),l=p(t("./utils/get-types/get-types")),c=p(t("./utils/filter-by-range/filter-by-range")),s=p(t("./utils/compare-to-anagram/compare-to-anagram")),f=p(t("./classes/calc/calc")),d=p(t("./classes/viewer/viewer")),y=p(t("./classes/mutant/mutant")),t=p(t("./utils/get-uniq/get-uniq"));function p(t){return t&&t.__esModule?t:{default:t}}window.tasks={task1:{desc:"На вход поступает массив, вывести массив, удалив повторяемые значения",run:n.default},task1Alt:{desc:"На вход поступает массив, вывести массив, удалив неуникальные значения",run:t.default},task2:{desc:"На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать",run:u.default},task3:{desc:"На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект,\n    где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один",run:i.default},task4:{desc:"На вход поступает объект, вывести сумму числовых свойств объекта",run:o.default},task5:{desc:"На вход поступает массив с числами, вывести среднее арифметическое элементов массива",run:a.default},task6:{desc:'Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле,\n    хранящее текущее значение и методы сложения, вычитания, умножения и деления,\n    принимающие число и манипулирующий свойством значения в соответствии с назначением метода,\n    а так же функцию, сбрасывающую значение в ноль',run:function(){return new f.default}},task7:{desc:"Функция принимает смешанный массив (содержащий значения чисел, строк и объектов),\n    вернуть объект с полями numbers, strings и objects, содержащими массив со значениями,\n    соответствующими названию поля.",run:l.default},task8:{desc:"Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,\n    значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)",run:c.default},task9:{desc:"Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false",run:s.default},task10:{desc:'Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую\n    (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты)\n    сама функция в консоль выводиться не должна.',run:function(t){return new d.default(t)}},task11:{desc:"Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства),\n    метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable,\n    enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства).\n    Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено",run:function(){return new y.default}}}},{"./classes/calc/calc":1,"./classes/mutant/mutant":2,"./classes/viewer/viewer":3,"./utils/compare-to-anagram/compare-to-anagram":5,"./utils/filter-by-range/filter-by-range":6,"./utils/get-arithmetic-mean/get-arithmetic-mean":7,"./utils/get-map/get-map":8,"./utils/get-props-sum/get-props-sum":9,"./utils/get-types/get-types":10,"./utils/get-uniq/get-uniq":11,"./utils/reverse/reverse":12,"./utils/unify/unify":13}],5:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t,e){if(void 0!==t&&void 0!==e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[e.length-1-r])return!1;return!0}}},{}],6:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function n(t){var e,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1/0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1/0;if(t)return n<r&&(r=(e=[n,r])[0],n=e[1]),t.filter(function(t){return r<=t&&t<=n})}r.default=n},{}],7:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){return t&&0!==t.length?t.reduce(function(t,e){return t+=e},0)/t.length:void 0}},{}],8:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){return t?t.reduce(function(t,e){return 2<=e.length&&(t["".concat(e[0])]=e[1]),t},{}):void 0}},{}],9:[function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,u,i=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){a=!0,u=t}finally{try{o||null==r.return||r.return()}finally{if(a)throw u}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){return t&&0!==Object.keys(t).length?Object.entries(t).reduce(function(t,e){e=n(e,2)[1];return t+=Number.isFinite(e)?e:0},0):void 0}},{}],10:[function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;function u(t){return t?t.reduce(function(t,e){switch(n(e)){case"number":t.numbers.push(e);break;case"string":t.strings.push(e);break;case"object":t.objects.push(e)}return t},{numbers:[],strings:[],objects:[]}):void 0}r.default=u},{}],11:[function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,u,i=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){a=!0,u=t}finally{try{o||null==r.return||r.return()}finally{if(a)throw u}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){if(void 0!==t){t=t.reduce(function(t,e){return t.has(e)?t.set(e,t.get(e)+1):t.set(e,1),t},new Map);return Array.from(t).reduce(function(t,e){var r=n(e,2),e=r[0];return 1===r[1]&&t.push(e),t},[])}}},{}],12:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){return t?t.map(function(t,e,r){return r[r.length-1-e]}):void 0}},{}],13:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(t){return t?Array.from(new Set(t)):void 0}},{}]},{},[4]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY2xhc3Nlcy9jYWxjL2NhbGMuanMiLCJzcmMvanMvY2xhc3Nlcy9tdXRhbnQvbXV0YW50LmpzIiwic3JjL2pzL2NsYXNzZXMvdmlld2VyL3ZpZXdlci5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy91dGlscy9jb21wYXJlLXRvLWFuYWdyYW0vY29tcGFyZS10by1hbmFncmFtLmpzIiwic3JjL2pzL3V0aWxzL2ZpbHRlci1ieS1yYW5nZS9maWx0ZXItYnktcmFuZ2UuanMiLCJzcmMvanMvdXRpbHMvZ2V0LWFyaXRobWV0aWMtbWVhbi9nZXQtYXJpdGhtZXRpYy1tZWFuLmpzIiwic3JjL2pzL3V0aWxzL2dldC1tYXAvZ2V0LW1hcC5qcyIsInNyYy9qcy91dGlscy9nZXQtcHJvcHMtc3VtL2dldC1wcm9wcy1zdW0uanMiLCJzcmMvanMvdXRpbHMvZ2V0LXR5cGVzL2dldC10eXBlcy5qcyIsInNyYy9qcy91dGlscy9nZXQtdW5pcS9nZXQtdW5pcS5qcyIsInNyYy9qcy91dGlscy9yZXZlcnNlL3JldmVyc2UuanMiLCJzcmMvanMvdXRpbHMvdW5pZnkvdW5pZnkuanMiXSwibmFtZXMiOlsiciIsImUiLCJuIiwidCIsIm8iLCJpIiwiZiIsImMiLCJyZXF1aXJlIiwidSIsImEiLCJFcnJvciIsImNvZGUiLCJwIiwiZXhwb3J0cyIsImNhbGwiLCJsZW5ndGgiLCIxIiwibW9kdWxlIiwiX3RoaXMiLCJ0aGlzIiwiX19jdXJWYWwiLCJzZXRWYWwiLCJuZXdWYWwiLCJfX2NoZWNrSXNOYU4iLCJnZXRWYWwiLCJyZXNldCIsInN1bSIsIm51bSIsIm1pbnVzIiwiZGl2IiwibXVsdGlwbHkiLCJpc05hTiIsIk51bWJlciIsImlzRmluaXRlIiwiTmFOIiwic2V0UHJvcCIsImtleSIsInZhbHVlIiwib3B0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJvYmoiLCJhcmd1bWVudHMiLCJwcmludCIsInJlc3VsdCIsImVudHJpZXMiLCJtYXAiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsInZhbCIsImNvbmNhdCIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiX3VuaWZ5IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yZXZlcnNlIiwiX2dldE1hcCIsIl9nZXRQcm9wc1N1bSIsIl9nZXRBcml0aG1ldGljTWVhbiIsIl9nZXRUeXBlcyIsIl9maWx0ZXJCeVJhbmdlIiwiX2NvbXBhcmVUb0FuYWdyYW0iLCJfY2FsYyIsIl92aWV3ZXIiLCJfbXV0YW50IiwiX2dldFVuaXEiLCJ3aW5kb3ciLCJ0YXNrcyIsInRhc2sxIiwiZGVzYyIsInJ1biIsInRhc2sxQWx0IiwidGFzazIiLCJ0YXNrMyIsInRhc2s0IiwidGFzazUiLCJ0YXNrNiIsInRhc2s3IiwidGFzazgiLCJ0YXNrOSIsInRhc2sxMCIsInRhc2sxMSIsImZpcnN0U3RyIiwic2Vjb25kU3RyIiwiaW5kZXgiLCJhcnIiLCJib3JkZXJNaW4iLCJJbmZpbml0eSIsImJvcmRlck1heCIsImZpbHRlciIsImVsIiwicmVkdWNlIiwicGFpcnMiLCJwYWlyIiwia2V5cyIsInJlcyIsIl90eXBlb2YiLCJudW1iZXJzIiwicHVzaCIsInN0cmluZ3MiLCJvYmplY3RzIiwiZWxlbWVudHNBbW91bnQiLCJoYXMiLCJzZXQiLCJnZXQiLCJNYXAiLCJBcnJheSIsImZyb20iLCJ1bmlxIiwiYXJyYXkiLCJTZXQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLElBQUFFLEVBQUEsbUJBQUFDLFNBQUFBLFFBQUEsSUFBQUYsR0FBQUMsRUFBQSxPQUFBQSxFQUFBRixHQUFBLEdB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QU9yQixPQUFPSyxHQUNOLENBQ0RFLFFBQVMsR0FDVEUsUUFBUyxHQUNUQyxRQUFTLFVBQ05qRSxFLDJqQ0N2QlcsU0FBQ2tELEdBQ2YsUUFBWWxELElBQVJrRCxFQUFKLENBSU1nQixFQUFpQmhCLEVBQUlNLE9BQU8sU0FBQy9DLEVBQUs4QyxHQU10QyxPQUxJOUMsRUFBSTBELElBQUlaLEdBQ1Y5QyxFQUFJMkQsSUFBSWIsRUFBSTlDLEVBQUk0RCxJQUFJZCxHQUFNLEdBRTFCOUMsRUFBSTJELElBQUliLEVBQUksR0FFUDlDLEdBQ04sSUFBSTZELEtBRVAsT0FBT0MsTUFBTUMsS0FBS04sR0FBZ0JWLE9BQU8sU0FBQ2lCLEVBQUQvRCxHQUF5QixJQUFBQyxFQUFBQyxFQUFBRixFQUFBLEdBQWpCRyxFQUFpQkYsRUFBQSxHQUtoRSxPQUplLElBRGlEQSxFQUFBLElBRTlEOEQsRUFBS1YsS0FBS2xELEdBR0w0RCxHQUNOLE8saUhDcEJXLFNBQUN2QixHQUFELE9BQVNBLEVBQU1BLEVBQUl6QyxJQUFJLFNBQUM4QyxFQUFJTixFQUFPeUIsR0FBWixPQUFzQkEsRUFBTUEsRUFBTXJHLE9BQVMsRUFBSTRFLFVBQVVqRCxJLGlIQ0FsRixTQUFDa0QsR0FBRCxPQUFTQSxFQUFNcUIsTUFBTUMsS0FBSyxJQUFJRyxJQUFJekIsU0FBUWxEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBDYWxjKCkge1xuICB0aGlzLl9fY3VyVmFsID0gMDtcblxuICB0aGlzLnNldFZhbCA9IChuZXdWYWwpID0+IHtcbiAgICBpZiAodGhpcy5fX2NoZWNrSXNOYU4obmV3VmFsKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fX2N1clZhbCA9IG5ld1ZhbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGlzLmdldFZhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5fX2N1clZhbDtcbiAgfTtcblxuICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuX19jdXJWYWwgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHRoaXMuc3VtID0gKG51bSkgPT4ge1xuICAgIGlmICh0aGlzLl9fY2hlY2tJc05hTihudW0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9fY3VyVmFsICs9IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGlzLm1pbnVzID0gKG51bSkgPT4ge1xuICAgIGlmICh0aGlzLl9fY2hlY2tJc05hTihudW0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9fY3VyVmFsIC09IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGlzLmRpdiA9IChudW0pID0+IHtcbiAgICBpZiAodGhpcy5fX2NoZWNrSXNOYU4obnVtKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fX2N1clZhbCAvPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhpcy5tdWx0aXBseSA9IChudW0pID0+IHtcbiAgICBpZiAodGhpcy5fX2NoZWNrSXNOYU4obnVtKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fX2N1clZhbCAqPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhpcy5fX2NoZWNrSXNOYU4gPSAobnVtKSA9PiB7XG4gICAgY29uc3QgaXNOYU4gPSAhTnVtYmVyLmlzRmluaXRlKG51bSk7XG5cbiAgICBpZiAoaXNOYU4pIHtcbiAgICAgIHRoaXMuX19jdXJWYWwgPSBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjO1xuIiwiZnVuY3Rpb24gTXV0YW50KCkge1xuICB0aGlzLnNldFByb3AgPSAoa2V5LCB2YWx1ZSwgb3B0KSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0b3IgPSB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIE9iamVjdC5hc3NpZ24oZGVmYXVsdERlc2NyaXB0b3IsIHt2YWx1ZX0sIG9wdCkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNdXRhbnQ7XG4iLCJmdW5jdGlvbiBWaWV3ZXIob2JqID0ge30pIHtcbiAgdGhpcy5vYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG4gIHRoaXMucHJpbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0XG4gICAgICAuZW50cmllcyh0aGlzLm9iailcbiAgICAgIC5tYXAoKFtrZXksIHZhbF0pID0+IGAke2tleX06ICR7dmFsfWApXG4gICAgICAuam9pbihgLGApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBgcHJpbnRgLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyO1xuIiwiaW1wb3J0IHVuaWZ5IGZyb20gXCIuL3V0aWxzL3VuaWZ5L3VuaWZ5XCI7XG5pbXBvcnQgcmV2ZXJzZSBmcm9tIFwiLi91dGlscy9yZXZlcnNlL3JldmVyc2VcIjtcbmltcG9ydCBnZXRNYXAgZnJvbSBcIi4vdXRpbHMvZ2V0LW1hcC9nZXQtbWFwXCI7XG5pbXBvcnQgZ2V0UHJvcHNTdW0gZnJvbSBcIi4vdXRpbHMvZ2V0LXByb3BzLXN1bS9nZXQtcHJvcHMtc3VtXCI7XG5pbXBvcnQgZ2V0QXJpdGhtZXRpY01lYW4gZnJvbSBcIi4vdXRpbHMvZ2V0LWFyaXRobWV0aWMtbWVhbi9nZXQtYXJpdGhtZXRpYy1tZWFuXCI7XG5pbXBvcnQgZ2V0VHlwZXMgZnJvbSBcIi4vdXRpbHMvZ2V0LXR5cGVzL2dldC10eXBlc1wiO1xuaW1wb3J0IGZpbHRlckJ5UmFuZ2UgZnJvbSBcIi4vdXRpbHMvZmlsdGVyLWJ5LXJhbmdlL2ZpbHRlci1ieS1yYW5nZVwiO1xuaW1wb3J0IGNvbXBhcmVUb0FuYWdyYW0gZnJvbSBcIi4vdXRpbHMvY29tcGFyZS10by1hbmFncmFtL2NvbXBhcmUtdG8tYW5hZ3JhbVwiO1xuXG5pbXBvcnQgQ2FsYyBmcm9tIFwiLi9jbGFzc2VzL2NhbGMvY2FsY1wiO1xuaW1wb3J0IFZpZXdlciBmcm9tIFwiLi9jbGFzc2VzL3ZpZXdlci92aWV3ZXJcIjtcbmltcG9ydCBNdXRhbnQgZnJvbSBcIi4vY2xhc3Nlcy9tdXRhbnQvbXV0YW50XCI7XG5pbXBvcnQgZ2V0VW5pcSBmcm9tIFwiLi91dGlscy9nZXQtdW5pcS9nZXQtdW5pcVwiO1xuXG53aW5kb3cudGFza3MgPSB7XG4gIHRhc2sxOiB7XG4gICAgZGVzYzogYNCd0LAg0LLRhdC+0LQg0L/QvtGB0YLRg9C/0LDQtdGCINC80LDRgdGB0LjQsiwg0LLRi9Cy0LXRgdGC0Lgg0LzQsNGB0YHQuNCyLCDRg9C00LDQu9C40LIg0L/QvtCy0YLQvtGA0Y/QtdC80YvQtSDQt9C90LDRh9C10L3QuNGPYCxcbiAgICBydW46IHVuaWZ5XG4gIH0sXG5cbiAgdGFzazFBbHQ6IHtcbiAgICBkZXNjOiBg0J3QsCDQstGF0L7QtCDQv9C+0YHRgtGD0L/QsNC10YIg0LzQsNGB0YHQuNCyLCDQstGL0LLQtdGB0YLQuCDQvNCw0YHRgdC40LIsINGD0LTQsNC70LjQsiDQvdC10YPQvdC40LrQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRj2AsXG4gICAgcnVuOiBnZXRVbmlxXG4gIH0sXG5cbiAgdGFzazI6IHtcbiAgICBkZXNjOiBg0J3QsCDQstGF0L7QtCDQv9C+0YHRgtGD0L/QsNC10YIg0LzQsNGB0YHQuNCyLCDRgNC10LLQtdGA0YHQuNGA0L7QstCw0YLRjCDQt9C90LDRh9C10L3QuNGPICjQv9C+0LTQvtCx0L3QviDQvNC10YLQvtC00YMgcmV2ZXJzZSkg0LzQtdGC0L7QtCByZXZlcnNlINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMYCxcbiAgICBydW46IHJldmVyc2VcbiAgfSxcblxuICB0YXNrMzoge1xuICAgIGRlc2M6IGDQndCwINCy0YXQvtC0INC/0L7RgdGC0YPQv9Cw0LXRgiDQvNCw0YHRgdC40LIsINGB0L7QtNC10YDQttCw0YnQuNC5INC80LDRgdGB0LjQstGLLCDQsiDQutC+0YLQvtGA0YvRhSDRhdGA0LDQvdC40YLRgdGPINC00LLQsCDRjdC70LXQvNC10L3RgtCwLiDQn9GA0LXQvtCx0YDQsNC30L7QstCw0YLRjCDQvNCw0YHRgdC40LIg0LIg0L7QsdGK0LXQutGCLFxuICAgINCz0LTQtSDQutC70Y7Rh9Cw0LzQuCDRj9Cy0LvRj9GO0YLRgdGPINC90YPQu9C10LLQvtC5INC40L3QtNC10LrRgSDQstC70L7QttC10L3QvdGL0YXRi9GFINC80LDRgdGB0LjQstC+0LIsINCwINC30L3QsNGH0LXQvdC40Y/QvNC4INGP0LLQu9GP0Y7RgtGB0Y8g0Y3Qu9C10LzQtdC90YLRiyDRgSDQuNC90LTQtdC60YHQvtC8INC+0LTQuNC9YCxcbiAgICBydW46IGdldE1hcFxuICB9LFxuXG4gIHRhc2s0OiB7XG4gICAgZGVzYzogYNCd0LAg0LLRhdC+0LQg0L/QvtGB0YLRg9C/0LDQtdGCINC+0LHRitC10LrRgiwg0LLRi9Cy0LXRgdGC0Lgg0YHRg9C80LzRgyDRh9C40YHQu9C+0LLRi9GFINGB0LLQvtC50YHRgtCyINC+0LHRitC10LrRgtCwYCxcbiAgICBydW46IGdldFByb3BzU3VtXG4gIH0sXG5cbiAgdGFzazU6IHtcbiAgICBkZXNjOiBg0J3QsCDQstGF0L7QtCDQv9C+0YHRgtGD0L/QsNC10YIg0LzQsNGB0YHQuNCyINGBINGH0LjRgdC70LDQvNC4LCDQstGL0LLQtdGB0YLQuCDRgdGA0LXQtNC90LXQtSDQsNGA0LjRhNC80LXRgtC40YfQtdGB0LrQvtC1INGN0LvQtdC80LXQvdGC0L7QsiDQvNCw0YHRgdC40LLQsGAsXG4gICAgcnVuOiBnZXRBcml0aG1ldGljTWVhblxuICB9LFxuXG4gIHRhc2s2OiB7XG4gICAgZGVzYzogYNCh0L7Qt9C00LDRgtGMINGE0YPQvdC60YbQuNGOLdC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LTQu9GPINC+0LHRitC10LrRgtCwIFwi0LrQsNC70YzQutGD0LvRj9GC0L7RgFwiLCDQvtCx0YrQtdC60YIg0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0L/QvtC70LUsXG4gICAg0YXRgNCw0L3Rj9GJ0LXQtSDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INC4INC80LXRgtC+0LTRiyDRgdC70L7QttC10L3QuNGPLCDQstGL0YfQuNGC0LDQvdC40Y8sINGD0LzQvdC+0LbQtdC90LjRjyDQuCDQtNC10LvQtdC90LjRjyxcbiAgICDQv9GA0LjQvdC40LzQsNGO0YnQuNC1INGH0LjRgdC70L4g0Lgg0LzQsNC90LjQv9GD0LvQuNGA0YPRjtGJ0LjQuSDRgdCy0L7QudGB0YLQstC+0Lwg0LfQvdCw0YfQtdC90LjRjyDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lgg0YEg0L3QsNC30L3QsNGH0LXQvdC40LXQvCDQvNC10YLQvtC00LAsXG4gICAg0LAg0YLQsNC6INC20LUg0YTRg9C90LrRhtC40Y4sINGB0LHRgNCw0YHRi9Cy0LDRjtGJ0YPRjiDQt9C90LDRh9C10L3QuNC1INCyINC90L7Qu9GMYCxcbiAgICBydW46ICgpID0+IG5ldyBDYWxjKClcbiAgfSxcblxuICB0YXNrNzoge1xuICAgIGRlc2M6IGDQpNGD0L3QutGG0LjRjyDQv9GA0LjQvdC40LzQsNC10YIg0YHQvNC10YjQsNC90L3Ri9C5INC80LDRgdGB0LjQsiAo0YHQvtC00LXRgNC20LDRidC40Lkg0LfQvdCw0YfQtdC90LjRjyDRh9C40YHQtdC7LCDRgdGC0YDQvtC6INC4INC+0LHRitC10LrRgtC+0LIpLFxuICAgINCy0LXRgNC90YPRgtGMINC+0LHRitC10LrRgiDRgSDQv9C+0LvRj9C80LggbnVtYmVycywgc3RyaW5ncyDQuCBvYmplY3RzLCDRgdC+0LTQtdGA0LbQsNGJ0LjQvNC4INC80LDRgdGB0LjQsiDRgdC+INC30L3QsNGH0LXQvdC40Y/QvNC4LFxuICAgINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQvNC4INC90LDQt9Cy0LDQvdC40Y4g0L/QvtC70Y8uYCxcbiAgICBydW46IGdldFR5cGVzXG4gIH0sXG5cbiAgdGFzazg6IHtcbiAgICBkZXNjOiBg0KTRg9C90LrRhtC40Y8g0L/RgNC40L3QuNC80LDQtdGCINC80LDRgdGB0LjQsiDRh9C40YHQtdC7INC4INC00LLQsCDRh9C40YHQu9C+0LLRi9GFINC30L3QsNGH0LXQvdC40Y8sINCy0LXRgNC90YPRgtGMINC90L7QstGL0Lkg0LzQsNGB0YHQuNCyLCDRgdC+0LTQtdGA0LbQsNGJ0LjQuSDRjdC70LXQvNC10L3RgtGLINC/0LXRgNCy0L7Qs9C+INC80LDRgdGB0LjQstCwLFxuICAgINC30L3QsNGH0LXQvdC40LUg0LrQvtGC0L7RgNGL0YUg0L/QvtC/0LDQtNCw0LXRgiDQv9C+0LQg0LTQuNCw0L/QsNC30L7QvSDQv9C10YDQtdC00LDQvdC90YvRhSDQsiDRhNGD0L3QutGG0LjRjiDRh9C40YHQtdC7ICjQstGC0L7RgNC+0LUg0L/QtdGA0LXQtNCw0L3QvdC+0LUg0YfQuNGB0LvQviDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSDQv9C10YDQstC+0LPQvilgLFxuICAgIHJ1bjogZmlsdGVyQnlSYW5nZVxuICB9LFxuXG4gIHRhc2s5OiB7XG4gICAgZGVzYzogYNCk0YPQvdC60YbQuNGPINC/0YDQuNC90LjQvNCw0LXRgiDQtNCy0LUg0YHRgtGA0L7QutC4LiDQktGL0LLQtdGB0YLQuCB0cnVlLCDQtdGB0LvQuCDRgdGC0YDQvtC60Lgg0Y/QstC70Y/RjtGC0YHRjyDQsNC90LDQs9GA0LDQvNC80LDQvNC4LCDQsiDQv9GA0L7RgtC40LLQvdC+0Lwg0YHQu9GD0YfQsNC1IGZhbHNlYCxcbiAgICBydW46IGNvbXBhcmVUb0FuYWdyYW1cbiAgfSxcblxuICB0YXNrMTA6IHtcbiAgICBkZXNjOiBg0KHQvtC30LTQsNGC0Ywg0L7QsdGK0LXQutGCLCDQstGL0LLQvtC00Y/RidC40Lkg0LIg0LrQvtC90YHQvtC70Ywg0LLRgdC1INC60LvRjtGH0Lgg0Lgg0LfQvdCw0YfQtdC90LjRjyDQvtCx0YrQtdC60YLQsCDQsiDRhNC+0YDQvNCw0YLQtSBcItC60LvRjtGHOiDQt9C90LDRh9C10L3QuNC1XCIg0YfQtdGA0LXQtyDQt9Cw0L/Rj9GC0YPRjlxuICAgICjRgdGH0LjRgtCw0YLRjCwg0YfRgtC+INC30L3QsNGH0LXQvdC40LXQvCDQutC70Y7Rh9CwINC+0LHRitC10LrRgtCwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQvtCx0YrQtdC60YLQvtC8INC40LvQuCDQvNCw0YHRgdC40LLQvtC8LCDRgdC+0LTQtdGA0LbQsNGJ0LjQvNC4INC+0LHRitC10LrRgtGLKVxuICAgINGB0LDQvNCwINGE0YPQvdC60YbQuNGPINCyINC60L7QvdGB0L7Qu9GMINCy0YvQstC+0LTQuNGC0YzRgdGPINC90LUg0LTQvtC70LbQvdCwLmAsXG4gICAgcnVuOiAob2JqKSA9PiBuZXcgVmlld2VyKG9iailcbiAgfSxcblxuICB0YXNrMTE6IHtcbiAgICBkZXNjOiBg0KHQvtC30LTQsNGC0Ywg0YTRg9C90LrRhtC40Y4t0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQtNC70Y8g0L7QsdGK0LXQutGC0LAsINGB0L7QtNC10YDQttCw0YnQtdCz0L4g0LzQtdGC0L7QtNGLIHNlclByb3AgKNGD0YHRgtCw0L3QvtCy0LjRgtGMINC30L3QsNGH0LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCksXG4gICAg0LzQtdGC0L7QtCDQv9GA0LjQvdC40LzQsNC10YIg0LrQu9GO0YfRjCAo0YHRgtGA0L7QutCwKSwg0LfQvdCw0YfQtdC90LjQtSAo0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QvtC1KSDQuCDQvtCx0YrQtdC60YIg0YHQviDRgdCy0L7QudGB0YLQstCw0LzQuCB3cml0YWJsZSwgY29uZmlndXJhYmxlLFxuICAgIGVudW1lcmFibGUgKNGA0LDQt9GA0LXRiNC10L3QuNC1INC/0LXRgNC10LfQsNC/0LjRgdC4INGB0LLQvtC50YHRgtCy0LAsINGA0LDQt9GA0LXRiNC10L3QuNC1INC/0LXRgNC10YfQuNGB0LvQtdC90LjRjyDRgdCy0L7QudGB0YLQstCwINC4INGA0LDQt9GA0LXRiNC10L3QuNC1INGD0LTQsNC70LXQvdC40Y8g0YHQstC+0LnRgdGC0LLQsCkuXG4gICAg0JXRgdC70Lgg0LrQsNC60L7QtS3RgtC+INC40Lcg0YHQstC+0LnRgdGC0LIg0LIg0L7QsdGK0LXQutGC0LUg0L7RgtGB0YPRgtGB0YLQstGD0LXRgiwg0LTQtdC50YHRgtCy0LjQtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0YDQsNC30YDQtdGI0LXQvdC+YCxcbiAgICBydW46ICgpID0+IG5ldyBNdXRhbnQoKVxuICB9LFxufTtcbiIsImNvbnN0IGNvbXBhcmVUb0FuYWdyYW0gPSAoZmlyc3RTdHIsIHNlY29uZFN0cikgPT4ge1xuICBpZiAoZmlyc3RTdHIgPT09IHVuZGVmaW5lZCB8fCBzZWNvbmRTdHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZmlyc3RTdHIubGVuZ3RoICE9PSBzZWNvbmRTdHIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpcnN0U3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChmaXJzdFN0cltpbmRleF0gIT09IHNlY29uZFN0cltzZWNvbmRTdHIubGVuZ3RoIC0gMSAtIGluZGV4XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZVRvQW5hZ3JhbTtcbiIsImNvbnN0IGZpbHRlckJ5UmFuZ2UgPSAoYXJyLCBib3JkZXJNaW4gPSAtSW5maW5pdHksIGJvcmRlck1heCA9IEluZmluaXR5KSA9PiB7XG4gIGlmICghYXJyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChib3JkZXJNYXggPCBib3JkZXJNaW4pIHtcbiAgICBbYm9yZGVyTWluLCBib3JkZXJNYXhdID0gW2JvcmRlck1heCwgYm9yZGVyTWluXTtcbiAgfVxuXG4gIHJldHVybiBhcnIuZmlsdGVyKChlbCkgPT4gYm9yZGVyTWluIDw9IGVsICYmIGVsIDw9IGJvcmRlck1heCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJCeVJhbmdlO1xuIiwiY29uc3QgZ2V0QXJpdGhtZXRpY01lYW4gPSAoYXJyKSA9PiAoYXJyICYmIGFyci5sZW5ndGggIT09IDApID8gYXJyLnJlZHVjZSgoc3VtLCBudW0pID0+IHtcbiAgc3VtICs9IG51bTtcbiAgcmV0dXJuIHN1bTtcbn0sIDApIC8gYXJyLmxlbmd0aCA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXJpdGhtZXRpY01lYW47XG4iLCJjb25zdCBnZXRNYXAgPSAocGFpcnMpID0+IHBhaXJzID8gcGFpcnMucmVkdWNlKChtYXAsIHBhaXIpID0+IHtcbiAgaWYgKHBhaXIubGVuZ3RoID49IDIpIHtcbiAgICBtYXBbYCR7cGFpclswXX1gXSA9IHBhaXJbMV07XG4gIH1cblxuICByZXR1cm4gbWFwO1xufSwge30pIDogdW5kZWZpbmVkO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXA7XG4iLCJjb25zdCBnZXRQcm9wc1N1bSA9IChvYmopID0+IChvYmogJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApID8gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKHJlcywgWywgdmFsXSkgPT4ge1xuICByZXMgKz0gTnVtYmVyLmlzRmluaXRlKHZhbCkgPyB2YWwgOiAwO1xuXG4gIHJldHVybiByZXM7XG59LCAwKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvcHNTdW07XG4iLCJjb25zdCBnZXRUeXBlcyA9IChhcnIpID0+IGFyciA/IGFyci5yZWR1Y2UoKHJlcywgZWwpID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgZWwpIHtcbiAgICBjYXNlIGBudW1iZXJgOlxuICAgICAgcmVzLm51bWJlcnMucHVzaChlbCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYHN0cmluZ2A6XG4gICAgICByZXMuc3RyaW5ncy5wdXNoKGVsKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBgb2JqZWN0YDpcbiAgICAgIHJlcy5vYmplY3RzLnB1c2goZWwpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSwge1xuICBudW1iZXJzOiBbXSxcbiAgc3RyaW5nczogW10sXG4gIG9iamVjdHM6IFtdXG59KSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VHlwZXM7XG4iLCJjb25zdCBnZXRVbmlxID0gKGFycikgPT4ge1xuICBpZiAoYXJyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgZWxlbWVudHNBbW91bnQgPSBhcnIucmVkdWNlKChtYXAsIGVsKSA9PiB7XG4gICAgaWYgKG1hcC5oYXMoZWwpKSB7XG4gICAgICBtYXAuc2V0KGVsLCBtYXAuZ2V0KGVsKSArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuc2V0KGVsLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwgbmV3IE1hcCgpKTtcblxuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50c0Ftb3VudCkucmVkdWNlKCh1bmlxLCBbdmFsLCBhbW91bnRdKSA9PiB7XG4gICAgaWYgKGFtb3VudCA9PT0gMSkge1xuICAgICAgdW5pcS5wdXNoKHZhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXE7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVuaXE7XG4iLCJjb25zdCByZXZlcnNlID0gKGFycikgPT4gYXJyID8gYXJyLm1hcCgoZWwsIGluZGV4LCBhcnJheSkgPT4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMSAtIGluZGV4XSkgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IHJldmVyc2U7XG4iLCJjb25zdCB1bmlmeSA9IChhcnIpID0+IGFyciA/IEFycmF5LmZyb20obmV3IFNldChhcnIpKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0IGRlZmF1bHQgdW5pZnk7XG4iXX0=
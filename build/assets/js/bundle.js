!function r(n,u,f){function c(t,e){if(!u[t]){if(!n[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(o)return o(t,!0);throw(i=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",i}i=u[t]={exports:{}},n[t][0].call(i.exports,function(e){return c(n[t][1][e]||e)},i,i.exports,r,n,u,f)}return u[t].exports}for(var o="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,t,i){"use strict";e=e("./utils/fib/fib");window.tasks={task1:{desc:"Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи),\n    функция должна вернуть значение числа. Использовать рекурсию.",run:e.getFib},task2:{desc:"Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи),\n    функция должна вернуть значение числа. Использовать рекурсию.",run:e.getFibWithCache}}},{"./utils/fib/fib":2}],2:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getFibWithCache=i.getFib=void 0,i.getFib=function e(t){switch(t){case 0:return 0;case 1:return 1;default:return e(t-2)+e(t-1)}};function r(e){return e in r.fibCache||(r.fibCache[e]=r(e-2)+r(e-1)),r.fibCache[e]}(i.getFibWithCache=r).fibCache={0:0,1:1}},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdXRpbHMvZmliL2ZpYi5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJfZmliIiwid2luZG93IiwidGFza3MiLCJ0YXNrMSIsImRlc2MiLCJydW4iLCJnZXRGaWIiLCJ0YXNrMiIsImdldEZpYldpdGhDYWNoZSIsImZpYkNhY2hlIiwiMCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUFBLElBQUFKLEVBQUFHLEdBQUEsQ0FBQSxJQUFBSixFQUFBSSxHQUFBLENBQUEsSUFBQUUsRUFBQSxtQkFBQUMsU0FBQUEsUUFBQSxJQUFBRixHQUFBQyxFQUFBLE9BQUFBLEVBQUFGLEdBQUEsR0FBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEdBQUEsR0FBQSxNQUFBSyxFQUFBLElBQUFDLE1BQUEsdUJBQUFOLEVBQUEsTUFBQU8sS0FBQSxtQkFBQUYsRUFBQUcsRUFBQVgsRUFBQUcsR0FBQSxDQUFBUyxRQUFBLElBQUFiLEVBQUFJLEdBQUEsR0FBQVUsS0FBQUYsRUFBQUMsUUFBQSxTQUFBZCxHQUFBLE9BQUFJLEVBQUFILEVBQUFJLEdBQUEsR0FBQUwsSUFBQUEsSUFBQWEsRUFBQUEsRUFBQUMsUUFBQWQsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxRQUFBLElBQUEsSUFBQUwsRUFBQSxtQkFBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxJQUFBRCxFQUFBRCxFQUFBRSxJQUFBLE9BQUFELEVBQUEsQ0FBQSxDQUFBYSxFQUFBLENBQUEsU0FBQVQsRUFBQVUsRUFBQUosZ0JDQUFLLEVBQUFYLEVBQUEsbUJBRUFZLE9BQU9DLE1BQVEsQ0FDYkMsTUFBTyxDQUNMQyxLQUFJLHFKQUVKQyxJQUFLTCxFQUFBTSxRQUdQQyxNQUFPLENBQ0xILEtBQUkscUpBRUpDLElBQUtMLEVBQUFRLG1CLG1KQ1pNLFNBQVRGLEVBQVV2QixHQUNkLE9BQVFBLEdBQ04sS0FBSyxFQUNILE9BQU8sRUFFVCxLQUFLLEVBQ0gsT0FBTyxFQUVULFFBQ0UsT0FBT3VCLEVBQU92QixFQUFJLEdBQUt1QixFQUFPdkIsRUFBSSxLQUloQixTQUFsQnlCLEVBQW1CekIsR0FDdkIsT0FBSUEsS0FBS3lCLEVBQWdCQyxXQUl6QkQsRUFBZ0JDLFNBQVMxQixHQUFLeUIsRUFBZ0J6QixFQUFJLEdBQUt5QixFQUFnQnpCLEVBQUksSUFIbEV5QixFQUFnQkMsU0FBUzFCLEkscUJBT3BCMEIsU0FBVyxDQUN6QkMsRUFBSyxFQUNMWixFQUFLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge2dldEZpYiwgZ2V0RmliV2l0aENhY2hlfSBmcm9tIFwiLi91dGlscy9maWIvZmliXCI7XG5cbndpbmRvdy50YXNrcyA9IHtcbiAgdGFzazE6IHtcbiAgICBkZXNjOiBg0KDQtdCw0LvQuNC30L7QstCw0YLRjCDRhNGD0L3QutGG0LjRjiwg0L/RgNC40L3QuNC80LDRjtGJ0YPRjiDRh9C40YHQu9C+ICjQuNC90LTQtdC60YEg0LIg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdC+0YHRgtC4INCk0LjQsdC+0L3QsNGH0YfQuCksXG4gICAg0YTRg9C90LrRhtC40Y8g0LTQvtC70LbQvdCwINCy0LXRgNC90YPRgtGMINC30L3QsNGH0LXQvdC40LUg0YfQuNGB0LvQsC4g0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGA0LXQutGD0YDRgdC40Y4uYCxcbiAgICBydW46IGdldEZpYlxuICB9LFxuXG4gIHRhc2syOiB7XG4gICAgZGVzYzogYNCg0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YTRg9C90LrRhtC40Y4sINC/0YDQuNC90LjQvNCw0Y7RidGD0Y4g0YfQuNGB0LvQviAo0LjQvdC00LXQutGBINCyINC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3QvtGB0YLQuCDQpNC40LHQvtC90LDRh9GH0LgpLFxuICAgINGE0YPQvdC60YbQuNGPINC00L7Qu9C20L3QsCDQstC10YDQvdGD0YLRjCDQt9C90LDRh9C10L3QuNC1INGH0LjRgdC70LAuINCY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgNC10LrRg9GA0YHQuNGOLmAsXG4gICAgcnVuOiBnZXRGaWJXaXRoQ2FjaGVcbiAgfVxufTtcbiIsImNvbnN0IGdldEZpYiA9IChuKSA9PiB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiAwO1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDE7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldEZpYihuIC0gMikgKyBnZXRGaWIobiAtIDEpO1xuICB9XG59O1xuXG5jb25zdCBnZXRGaWJXaXRoQ2FjaGUgPSAobikgPT4ge1xuICBpZiAobiBpbiBnZXRGaWJXaXRoQ2FjaGUuZmliQ2FjaGUpIHtcbiAgICByZXR1cm4gZ2V0RmliV2l0aENhY2hlLmZpYkNhY2hlW25dO1xuICB9XG5cbiAgZ2V0RmliV2l0aENhY2hlLmZpYkNhY2hlW25dID0gZ2V0RmliV2l0aENhY2hlKG4gLSAyKSArIGdldEZpYldpdGhDYWNoZShuIC0gMSk7XG5cbiAgcmV0dXJuIGdldEZpYldpdGhDYWNoZS5maWJDYWNoZVtuXTtcbn07XG5nZXRGaWJXaXRoQ2FjaGUuZmliQ2FjaGUgPSB7XG4gIFwiMFwiOiAwLFxuICBcIjFcIjogMVxufTtcblxuZXhwb3J0IHtnZXRGaWIsIGdldEZpYldpdGhDYWNoZX07XG4iXX0=

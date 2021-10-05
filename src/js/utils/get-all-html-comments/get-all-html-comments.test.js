import getAllHTMLComments from "./get-all-html-comments";

describe(`getAllHTMLComments`, () => {
  it(`should work correctly`, () => {
    const mockStr = `<!--К1<article class="task">-->
            <h2 class="task__title">Задача #1</h2>
            <p class="task__desc">Написать скрипт, предлогающий пользователю ввести две строки через запятую.
              Вывести сообщение true, если вторая строка содержится в первый, в противном случае false,
              регистр при проверке не учитывать. Для запуска нажмите "Старт"</p>
            <button class="start-button task__start-button" type="button">Старт</button>
            <form class="task__work-area" method="get" action="#">
            <!--К2<label class="area-name" for="t1-output-promt">-->
                Входные данные:
                <textarea class="text-area task__text-area" id="t1-output-promt" readonly></textarea>
              </label>
            <!--           К3   <p class="err"></p>   -->
              <label class="area-name" for="t1-output-str1">
                Первая строка:
<!--К5  <textarea class="text-area task__text-area" id="t1-output-str1" readonly></textarea>К5-->
              </label>
              <label class="area-name" for="t1-output-str2">
                Вторая строка:
                <textarea class="text-area task__text-area" id="t1-output-str2" readonly></textarea>
            </label><!--К6</label>--><!--К7</label>--></label><!--К8<label class="area-name" for="t1-output-result">-->
                Результат:
                <textarea class="text-area text-area--type_result task__text-area" id="t1-output-result" readonly></textarea>
              </label>
            </form>
<!--     К9     </article>-->`;


    expect(getAllHTMLComments(mockStr))
      .toStrictEqual([`К1<article class="task">`, `К2<label class="area-name" for="t1-output-promt">`,
        `К3   <p class="err"></p>`, `К5  <textarea class="text-area task__text-area" id="t1-output-str1" readonly></textarea>К5`,
        `К6</label>`, `К7</label>`, `К8<label class="area-name" for="t1-output-result">`, `К9     </article>`]);


    expect(getAllHTMLComments(`qwerty`)).toStrictEqual([]);
    expect(getAllHTMLComments()).toStrictEqual([]);
  });
});

export const initial = [
  {
    text: "Для начала давай определимся на какую вакансию ты претендуешь?",
    answers: [
      { text: "Веб-дизайнер", value: 1 },
      { text: "Тестировщик", value: 2 },
      { text: "Джуниор фронтенд разработчик", value: 3 },
    ],
  },

  {
    text: "Есть ли у тебя опыт?",
    answers: [
      { text: "Больше 5 лет работаю по этой специальности", value: 20 },
      { text: "Ну немножко поработать успел", value: 10 },
      {
        text: "Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",
        value: 0,
      },
    ],
  },
];

export const designer = [
  {
    text: "В какой программе делаешь макеты?",
    answers: [
      { text: "Figma", value: 15 },
      { text: "Photoshop", value: -10 },
      { text: "В такой, о которой вы не слышали", value: 0 },
    ],
  },

  {
    text: "Любишь играться со шрифтами?",
    answers: [
      { text: "Я живу этим", value: 20 },
      { text: "Если очень попросите", value: 10 },
      { text: "Я сам/сама создаю шрифты", value: 30 },
      { text: "Нет, в игры не играю", value: -5 },
    ],
  },

  {
    text: "А белый цвет сможешь белее сделать?",
    answers: [
      {
        text: "Я же говорил(а), что этого заказчика забанить надо",
        value: 15,
      },
      {
        text: "Пусть заказчик приедет и на Ретине посмотрит ещё разок",
        value: 5,
      },
      { text: "Конечно сделаю, если #fff недостаточно", value: -10 },
    ],
  },

  {
    text: "Последний вопрос: в какую стороны расти планируешь?",
    answers: [
      { text: "До арт-дира, естественно", value: 20 },
      {
        text: "В какую-то одну сферу хочу, но пока не знаю какую",
        value: 10,
      },
      {
        text: "Пока расту в ширину",
        value: 0,
      },
    ],
  },

  {
    text: "Кстати, а оценку задач ты как даёшь?",
    answers: [
      { text: "По часам", value: 1.5 },
      { text: "По дням", value: 1.2 },
      { text: "По наитию", value: 0.7 },
    ],
  },
];

export const developer = [
  {
    text: "Начнём с простого, div от span отличишь?",
    answers: [
      {
        text: "Естественно, первый для контейнеров, второй для текста",
        value: 15,
      },
      { text: "Код пишут компьютеры, пусть они и отличают", value: 10 },
      { text: "Думаю, что да", value: -5 },
    ],
  },

  {
    text: "Окей, а с JS у тебя как?",
    answers: [
      { text: "Я как-то больше по JQuery", value: -30 },
      { text: "Норм, прошёл курс", value: 5 },
      { text: "На чистом JS уже не первый год пишу", value: 20 },
    ],
  },

  {
    text: "Насколько ты любишь PHP?",
    answers: [],
  },

  {
    text: "Сколько дней в неделю планируешь ходить в офис?",
    answers: [
      { text: "Я хочу работать удалённо", value: -20 },
      { text: "3-4 дня в неделю будет норм", value: 5 },
      { text: "Я перееду в ваш офис, крепитесь", value: 20 },
    ],
  },

  {
    text: "Кстати, а оценку задач ты как даёшь?",
    answers: [
      { text: "По часам", value: 1.8 },
      { text: "По дням", value: 1.3 },
      { text: "По наитию", value: 0.6 },
    ],
  },
];

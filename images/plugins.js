﻿var cityList = ['Абакан', 'Абан', 'Абатский', 'Абрамовский маяк', 'Агата', 'Агаякан', 'Агзу', 'Агинское', 'Агинское', 'Айхал', 'Акша', 'Акьяр', 'Алапаевск', 'Алатырь', 'Алдан', 'Алейская', 'Александров', 'Александров-Гай', 'Александровск-Сахалинский', 'Александровский Шлюз', 'Александровский з-д', 'Александровское', 'Александровское', 'Аллах-Юнь', 'Алтай', 'Алыгджер', 'Амазар', 'Амга', 'Амдерма', 'Анабар', 'Анадырь', 'Анапа', 'Андрея', 'Андрюшкино', 'Анна', 'Антипаюта', 'Анучино', 'Апатиты', 'Апука', 'Аргаяш', 'Арзгир', 'Арка', 'Армавир', 'Армань', 'Арсеньев', 'Артезиан', 'Артем', 'Артемовск', 'Артемовский', 'Архангельск', 'Архара', 'Аршан', 'Аскиз', 'Астраханка', 'Астрахань', 'Ахты', 'Ачинск', 'Аян', 'Бабаево', 'Бабушкин', 'Баган', 'Багдарин', 'Баево', 'Байдуков', 'Байкальск', 'Байкит', 'Бакалы', 'Бактор', 'Бакчар', 'Балаганск', 'Баладек', 'Балаково', 'Балахта', 'Балашов', 'Балей', 'Балтийск', 'Балыгычан', 'Барабаш', 'Барабинск', 'Бараниха', 'Баргузин', 'Баргузинский Заповедник    \t', 'Барзас', 'Барнаул', 'Батагай', 'Батагай-Алыта', 'Батамай', 'Батомга', 'Батурино', 'Бахта', 'Баяндай', 'Беклемишево', 'Белая Гора', 'Белая глина', 'Белгород', 'Белово', 'Белогорка', 'Белогорск', 'Белозерск', 'Белый Яр', 'Белый', 'Беля', 'Бердигестях', 'Березники', 'Березняки', 'Березовка', 'Березово', 'Березово', 'Бестяхск', 'Бея', 'Бийск', 'Бийск-Зональная', 'Бикин', 'Билибино', 'Биробиджан', 'Бирск', 'Бисер', 'Бисер', 'Бисерть', 'Бичевая', 'Бичура', 'Благовещенск', 'Благодарный', 'Богородское', 'Боготол', 'Богучаны', 'Бодайбо', 'Боковская', 'Бологое', 'Болотное', 'Болхов', 'Большая Глушица', 'Большая Лепринда', 'Большая Мурта', 'Большерецк', 'Большеречье', 'Большие Кайбицы', 'Большие Уки', 'Большое Голоустное', 'Большой Он', 'Большой Порог', 'Большой Улуй', 'Бомнак', 'Бор', 'Борзя', 'Борисоглебск', 'Борогонцы', 'Бохан', 'Бохапча', 'Братолюбовка', 'Братск', 'Братск', 'Бреды', 'Бродокалмак', 'Брохово', 'Брянск', 'Бугрино', 'Бугульма', 'Бугуруслан', 'Буденновск', 'Бузулук', 'Буй', 'Буйнакск', 'Букукун', 'Бурукан', 'Бухта Амбарчик', 'Бухта Провидения', 'Буяга', 'Быково', 'Бысса', 'Вайда Губа', 'Вал', 'Валькаркай', 'Ванавара', 'Ванжиль-Кынак', 'Ваховск', 'Великие Луки', 'Великий Новгород', 'Великий Устюг', 'Вельмо', 'Вельск', 'Венгерово', 'Верещагино', 'Верещагино', 'Верхневилюйск', 'Верхнее Дуброво', 'Верхнее Пенжино', 'Верхнеимбатск', 'Верхний Амыл', 'Верхний Баскунчак', 'Верхний Уфалей', 'Верхняя Гутара', 'Верхняя Тойма', 'Верхняя Томь', 'Верховье Умри', 'Верховье р. Лотты', 'Верховье', 'Верхотурье', 'Верхоянск', 'Верхоянский Перевоз', 'Веселая Горка', 'Весляна', 'Ветлуга', 'Викулово', 'Вилюйск', 'Винницы', 'Висим', 'Витим', 'Владивосток', 'Владикавказ', 'Владимир', 'Внуково', 'Водопадная', 'Вожега', 'Вознесенье', 'Волгоград', 'Волжская ГМО', 'Волово', 'Вологда', 'Волоколамск', 'Волосово', 'Волчиха', 'Воньеган', 'Воркута', 'Ворогово', 'Воронеж', 'Воскресенское', 'Восток', 'Восточная', 'Воткинск', 'Вохма', 'Вуктыл', 'Выборг', 'Выкса', 'Вытегра', 'Вышний Волочек', 'Вяземская', 'Вязники', 'Вязьма', 'Вятские Поляны', 'ГМО им. Е.К.Федорова', 'ГМО им. Е.Т.Кренкеля', 'Гагарин', 'Гайны', 'Гамов', 'Гари', 'Гвасюги', 'Гдов', 'Геленджик', 'Георгиевка', 'Гигант', 'Гижига', 'Глазов', 'Глубинное', 'Голышманово', 'Горекацан', 'Горин', 'Горно-Алтайск', 'Городище', 'Городовиковск', 'Горячий Ключ', 'Горячинск', 'Готня', 'Гоуджекит', 'Гридино', 'Грозный', 'Губа Дроздовка', 'Губаха', 'Гуга', 'Гусь-Хрустальный', 'Гыдоямо', 'Далматово', 'Дальнереченск', 'Даниловка', 'Дарасун', 'Даровское', 'Двинский Березняк', 'Дебессы', 'Делянкир', 'Демьянское', 'Депутатский', 'Дербент', 'Джалинда', 'Джалинда', 'Джана', 'Джарджан', 'Джека Лондона', 'Джикимда', 'Джубга', 'Дзержинское', 'Дивное', 'Дмитров', 'Дмитровск-Орловский', 'Дно', 'Довольное', 'Должанская', 'Долиновка', 'Домодедово', 'Доно', 'Дорожный', 'Дуван', 'Дудинка', 'Егорьевск', 'Ейск', 'Екатеринбург', 'Екатерино-Никольское', 'Елабуга', 'Елань', 'Елатьма', 'Елец', 'Емеск', 'Енисейск', 'Ербогачен', 'Ермаковское', 'Ерофей Павлович', 'Ершов', 'Ессей', 'Ефимовская', 'Ефремов', 'Железнодорожный', 'Жердевка', 'Жигалово', 'Жиганск', 'Жижгин', 'Жиздра', 'Жуковка', 'Забайкальск', 'Завитая', 'Залари', 'Замакта', 'Заметчино', 'Зареченск', 'Заринск', 'Зашеек', 'Заярск', 'Звериноголовское', 'Здвинск', 'Зерноград', 'Зея', 'Зилаир', 'Зима', 'Зимовники', 'Златоуст', 'Змеиногорск', 'Золотой', 'Зырянка', 'Иваново', 'Ивдель', 'Игарка', 'Игнашино', 'Игрим', 'Идринское', 'Ижевск', 'Ижма', 'Ика', 'Илирней', 'Иловля', 'Ильинский', 'Им. М.В. Попова', 'Им. Полины Осипенко', 'Им.Е.К.Федорова', 'Инга', 'Индига', 'Индигирская', 'Инза', 'Инсар', 'Иоли', 'Ирбейское', 'Ирбит-Фомино', 'Иркутск', 'Исилькуль', 'Исить', 'Искитим', 'Ича', 'Ишим', 'Иэма', 'Йошкар-Ола', 'Кабанск', 'Кавалерово', 'Казань', 'Казачинское', 'Казачинское', 'Казым', 'Казыр', 'Кайластуй', 'Калакан', 'Калач', 'Калачинск', 'Калгачиха', 'Калевала', 'Калининград', 'Калининск', 'Калуга', 'Каменск-Уральский', 'Каменск-Шахтинский', 'Каменское', 'Камень-на-Оби', 'Камышлов', 'Канадей', 'Канаш', 'Кандалакша', 'Каневка', 'Каневская', 'Канин Нос', 'Канку', 'Канск', 'Кантегир', 'Каньон', 'Карасук', 'Каратузское', 'Карафтит', 'Карачев', 'Каргасок', 'Каргат', 'Каргополь', 'Карпогоры', 'Карталы', 'Карымская', 'Катав-Ивановск', 'Катанда', 'Катугино', 'Кача', 'Качуг', 'Кашин', 'Кашира', 'Кашкаранцы', 'Кегали', 'Кедва-Вом', 'Кедон', 'Келлог', 'Кемерово', 'Кемчуг', 'Кемь-Порт', 'Кербо', 'Кизильское', 'Кизляр', 'Килеер', 'Кильмезь', 'Кингисепп', 'Кинешма', 'Киренск', 'Кириши', 'Киров', 'Кировский', 'Кирс', 'Кирсанов', 'Киселевск', 'Клин', 'Клухорский перевал', 'Ключи', 'Ключи', 'Ковда', 'Ковдор', 'Когалым', 'Кожевниково', 'Козыревск', 'Козьмодемьянск', 'Койнас', 'Колба', 'Колгуев Северный', 'Колежма', 'Колмъявр', 'Кологрив', 'Коломна', 'Колпашево', 'Колывань', 'Кольцово', 'Комака', 'Коммунар', 'Комрво', 'Комсомольск-на-Амуре', 'Комсомольский', 'Кондома', 'Кондопога', 'Конево', 'Константиновск', 'Конь-Колодезь', 'Коркодон', 'Корсаков', 'Корф', 'Коса', 'Кослан', 'Кострома', 'Котельнич', 'Коткино', 'Котлас', 'Кочево', 'Коченёво', 'Кочки', 'Кочубей', 'Кош-Агач', 'Крапивино', 'Красная Гора', 'Красногвардейское', 'Краснодар', 'Красное поселение', 'Красное', 'Красноозерск', 'Красноселькупск', 'Краснослободск', 'Красноуфимск', 'Краснощеково', 'Краснощелье', 'Красноярск', 'Красные Баки', 'Красный Кут', 'Красный Холм', 'Красный Чикой', 'Красный Яр', 'Красный Яр', 'Крест-Хальджай', 'Кресты Таймырские', 'Крестях', 'Крещенка', 'Кроноки', 'Кропоткин', 'Крымск', 'Ксеньевская', 'Кубанская', 'Куганаволок', 'Кудымкар', 'Кузедеево', 'Кузьмовка', 'Култук', 'Кулу', 'Кумены', 'Куминская', 'Кунгур', 'Купино', 'Кур', 'Курагино', 'Курган', 'Курейка', 'Курильск', 'Курск', 'Куртамыш', 'Курумкан', 'Курун-Урях', 'Кушва', 'Кущевская', 'Кызыл', 'Кызыл-Озек', 'Кыкер', 'Кыра', 'Кырен', 'Кытлым', 'Кыштовка', 'Кюсюр', 'Кяхта', 'Лабазная', 'Лаган', 'Лазо', 'Лаишево', 'Лальск', 'Ларьяк', 'Лебяжье', 'Лебяжье', 'Лев Толстой', 'Ленинское', 'Ленск', 'Лермонтовка', 'Лесозаводск', 'Леуши', 'Лешуконское', 'Ливны', 'Липецк', 'Лиски', 'Литке', 'Ловозеро', 'Лодейное поле', 'Локшак', 'Лопча', 'Лосиноборское', 'Лукоянов', 'Лысково', 'Лысьва', 'Льгов', 'М. Лопатка', 'Магадан', 'Магдагачи', 'Магнитогорск', 'Мадаун', 'Мазаново', 'Майкоп', 'Майск', 'Максатиха', 'Макушино', 'Малая кема', 'Малиново', 'Малоярославец', 'Малые Дербеты', 'Малые Кармакулы', 'Мама', 'Мангут', 'Маргаритово', 'Мариинск', 'Марково', 'Марресаля', 'Маслянино', 'Матвеев Курган', 'Махачкала', 'Мача', 'Маячный', 'Медвежьегорск', 'Междуреченск', 'Мезень', 'Мелеуз', 'Мельничное', 'Менза', 'Миасс', 'Миллерово', 'Мильково', 'Минеральные воды', 'Минусинск', 'Мирный', 'Михайловск', 'Мичуринск', 'Могзон', 'Могоча', 'Можайск', 'Можга', 'Моздок', 'Молодежная', 'Молчаново', 'Монды', 'Монерон', 'Мончегорск', 'Мопау', 'Моржовая', 'Моржовец', 'Морки', 'Морозовск', 'Моршанск', 'Мосальск', 'Мосеево', 'Москва', 'Мотыгино', 'Мошково', 'Мугур-Аксы', 'Мудьюг', 'Мужи', 'Мурманск', 'Мурмаши', 'Муслюмово', 'Мутный Материк', 'Мухоршибирь', 'Мценск', 'Мыс Алевина', 'Мыс Африка', 'Мыс Белый Нос', 'Мыс Биллингса', 'Мыс Братьев', 'Мыс Кигилях', 'Мыс Костантиновский', 'Мыс Микулкин', 'Мыс Озерный', 'Мыс Салаурова', 'Мыс Стерлигова', 'Мыс Терпения', 'Мыс Уэлен', 'Мыс Шмидта', 'Нагорный', 'Нагорское', 'Надым', 'Назарово', 'Назимово', 'Называевск', 'Нальчик', 'Намцы', 'Напас', 'Наро-Фоминск', 'Нарьян-Мар', 'Находка', 'Начики', 'Невельск', 'Невинномыск', 'Невьянск', 'Нелькан', 'Немчиновка', 'Ненастная', 'Неожиданный', 'Нера', 'Нерой', 'Нерчинск', 'Нерчинский Завод', 'Несь', 'Нефтеюганск', 'Ниванкуль', 'Нижне-Тамбовское', 'Нижне-Усинское', 'Нижнеангарск', 'Нижневартовск', 'Нижнесортымск', 'Нижнеудинск', 'Нижнеянск', 'Нижний Новгород', 'Нижний Тагил', 'Нижний Цасучей', 'Нижний Чир', 'Нижняя Пеша', 'Никель', 'Николаевск-на-Амуре', 'Николаевская', 'Николо-Полома', 'Никольск', 'Никольское', 'Ничатка', 'Новая Ладога', 'Новиково', 'Ново-Александровск', 'Ново-Иерусалим', 'Ново-Касторное', 'Новобирилюссы', 'Новокузнецк', 'Новолазаревская', 'Новороссийск', 'Новоселенгинск', 'Новосибирск', 'Новочунка', 'Новый Васюган', 'Новый Оскол', 'Новый Порт', 'Новый Торьял', 'Новый Уренгой', 'Ноглики', 'Ножовка', 'Нолинск', 'Нора', 'Норильск', 'Норск', 'Ноябрьск', 'Ныврово', 'Ныда', 'Нюрба', 'Нюя', 'Нязепетровск', 'Няксимволь', 'Няндома', 'Обловка', 'Облучье', 'Обоянь', 'Обская ГМО', 'Обьячево', 'Огурцово', 'Одесское', 'Озерки', 'Озерная', 'Озеро Таймыр', 'Озинки', 'Оймякон', 'Октябрьская', 'Октябрьское', 'Окунев Нос', 'Ола', 'Олекминск', 'Оленек', 'Оленья Речка', 'Оловянная', 'Олонец', 'Ольга', 'Омолон', 'Омск', 'Омсукчан', 'Онгудай', 'Онега', 'Опарино', 'Опочка', 'Орджоникидзевская', 'Ордынское', 'Орел', 'Оренбург', 'Орлик', 'Орлинга', 'Оса', 'Оссора', 'Осташков', 'Остров  Айон', 'Остров  Валаам', 'Остров  Вилькицкого', 'Остров  Голомянный', 'Остров  Русский', 'Остров  Спафарьева', 'Остров  Харлов', 'Остров Большой Ушканий', 'Остров Большой Шантар', 'Остров Визе', 'Остров Врангеля', 'Остров Диксон', 'Остров Котельный', 'Остров Преображения', 'Остров Тюлений', 'Острова Дунай', 'Острова Известий', 'Острова Челно-Вершины', 'Оха', 'Оханск', 'Охотничий', 'Охотск', 'Охотский Перевоз', 'Павелец', 'Павлово', 'Павловск', 'Павловский Посад', 'Павловское', 'Павлоградка', 'Паданы', 'Падун', 'Палана', 'Палатка', 'Памятная', 'Пангоды', 'Парабель', 'Партизанск', 'Пачелма', 'Певек', 'Пенза', 'Первомайское', 'Первомайское', 'Перелюб', 'Переславль-Залесский', 'Пермь', 'Петровск', 'Петровский Завод', 'Петрозаводск', 'Петрокрепость', 'Петропавловка', 'Петропавловск-Камчатский', 'Петропавловский Маяк', 'Петрунь', 'Петухово', 'Петушки', 'Печора', 'Пильво', 'Пинега', 'Пионерский', 'Пировское', 'Питляр', 'Погиби', 'Пограничное', 'Пограничный', 'Подгорное', 'Покровка', 'Покровская', 'Полигус', 'Половинное', 'Полтавка', 'Полтавка', 'Полуй', 'Полярный', 'Полярный', 'Помоздино', 'Понил', 'Поныри', 'Поронайск', 'Посевная', 'Поспелиха', 'Посьет', 'Пошехонье-Володарск', 'Поярково', 'Преображение', 'Приаргунск', 'Приволжск', 'Приморско-Ахтарск', 'Пролив Санникова', 'Промышленная', 'Прохладная', 'Прохоркино', 'Псков', 'Пугачев', 'Пудино', 'Пудож', 'Пустошь', 'Пушкинские Горы', 'Пущино', 'Пыщуг', 'Пялица', 'Пятигорск', 'Ра-Из', 'Радужный', 'Разнаволок', 'Реболы', 'Ребриха', 'Ревда', 'Ремонтное', 'Ржев', 'Родино', 'Родниковая', 'Романовка', 'Рославль', 'Ростов', 'Ростов-на-Дону', 'Рощино', 'Рощиной', 'Ртищево', 'Рубцовск', 'Рудная Пристань', 'Русская Поляна', 'Рыбинск', 'Рыльск', 'Ряжск', 'Рязань', 'Салемал', 'Салехард', 'Самара', 'Самарка', 'Санага', 'Сангары', 'Санкт-Петербург', 'Саныяхтат', 'Саранпауль', 'Саранск', 'Сарапул', 'Саратов', 'Саргатское', 'Саров', 'Сарыг-Сеп', 'Саскылах', 'Сасово', 'Светлоград', 'Светлолобово', 'Светлый', 'Свиягино', 'Свободный', 'Святой Нос', 'Северное', 'Северо-Енисейск', 'Северо-Курильск', 'Северодвинск', 'Североуральск', 'Сегежа', 'Сеген-Кюель', 'Сегжема', 'Сеймчан', 'Сектагли', 'Селты', 'Семячик', 'Сенгейский Шар', 'Сергач', 'Сергеевка', 'Сергокала', 'Серов', 'Серов', 'Серпухов', 'Сеяха', 'Сидоровск', 'Симушир', 'Сковородино', 'Славгород', 'Славянск-на-Кубани', 'Сладково', 'Слаутное', 'Смидович', 'Смоленск', 'Советск', 'Советская Гавань', 'Советская Речка', 'Совхоз Эльген', 'Совхоз им.Ленина', 'Сого-Хая', 'Солекуль', 'Солнечная', 'Соловьевск', 'Солонешное', 'Сопочная карга', 'Сортавала', 'Сосновка', 'Сосновка', 'Сосново', 'Сосново-Озерское', 'Сосуново', 'Сосьва', 'Софийский Прииск', 'Сочи (Адлер)', 'Спас-Деменск', 'Среднеколымск', 'Средний Васюган', 'Средний Калар', 'Средникан', 'Средняя Олекма', 'Сретенск', 'Ставрополь', 'Старица', 'Старица', 'Старый Оскол', 'Степановка', 'Стерлитамак', 'Столб', 'Стрелка', 'Сузун', 'Сукпай', 'Сунтар', 'Суон-Тит', 'Суоярви', 'Сура', 'Сургут', 'Сусуман', 'Сухана', 'Сухиничи', 'Сухобузимское', 'Сызрань', 'Сыктывкар', 'Сым', 'Сысерть', 'Сытомино', 'Таборы', 'Тавда', 'Таганрог', 'Таежная', 'Тазовский', 'Тайга', 'Тайгонос', 'Таймылыр', 'Тайшет', 'Таксимо', 'Талая', 'Талон', 'Тальменка', 'Тамбей', 'Тамбов', 'Тангуй', 'Танхой', 'Танюрер', 'Тара', 'Тарко-Сале', 'Тасеево', 'Тасса', 'Татарск', 'Таурово', 'Таштып', 'Тверь', 'Теви', 'Тевриз', 'Тегульдет', 'Тегультя', 'Телемба', 'Темников', 'Теплый Ключ', 'Тереховка', 'Териберка', 'Терней', 'Тетюши', 'Тивяку', 'Тигиль', 'Тикси', 'Тилишма', 'Тим', 'Тимирязевский', 'Тисуль', 'Тихвин', 'Тихорецк', 'Тобольск', 'Тогул', 'Тогучин', 'Токо', 'Толмачево', 'Толька', 'Тольятти', 'Томмот', 'Томпа', 'Томпо', 'Томск', 'Тонгулах', 'Тоора-Хем', 'Топки', 'Торбеево', 'Торжок', 'Торопец', 'Тотьма', 'Третьяково', 'Троицк', 'Троицко-Печорское', 'Троицкое', 'Троицкое', 'Трубчевск', 'Туапсе', 'Тугулым', 'Тула', 'Тулун', 'Тума', 'Туманная', 'Тумнин', 'Тунгокочен', 'Тунка', 'Туой-Хая', 'Тупик', 'Тура', 'Турий Рог', 'Туринск', 'Турочак', 'Туруханск', 'Турчасово', 'Тутончаны', 'Тында', 'Тырка', 'Тюкалинск', 'Тюмень', 'Тюмети', 'Тюхтет', 'Тяжин', 'Тяня', 'Уакит', 'Убинское', 'Угино', 'Углегорск', 'Угловское', 'Угут', 'Удское', 'Уега', 'Ужаниха', 'Ужур', 'Улан-Удэ', 'Улеты', 'Улья', 'Ульяновск', 'Умба', 'Унеча', 'Уни', 'Ура-Губа', 'Урми', 'Уруп', 'Урюпинск', 'Усолье-Сибирское', 'Усть-Антосе', 'Усть-Баргузин', 'Усть-Воямполка', 'Усть-Заза', 'Усть-Илимск', 'Усть-Ишим', 'Усть-Кабырза', 'Усть-Камо', 'Усть-Камчатск', 'Усть-Кан', 'Усть-Кара', 'Усть-Кара', 'Усть-Каренга', 'Усть-Кокса', 'Усть-Кулом', 'Усть-Кут', 'Усть-Лабинск', 'Усть-Мая', 'Усть-Миль', 'Усть-Мома', 'Усть-Нюкжа', 'Усть-Озерное', 'Усть-Олой', 'Усть-Омчуг', 'Усть-Ордынский', 'Усть-Тарка', 'Усть-Уда', 'Усть-Умальта', 'Усть-Уса', 'Усть-Уса', 'Усть-Хайрюзово', 'Усть-Цильма', 'Усть-Чаркы', 'Усть-Юдома', 'Усугли', 'Уфа', 'Ухта', 'Учами', 'Учур', 'Ушки', 'Уяр', 'Фролово', 'Хабардино', 'Хабаровск', 'Хабары', 'Хакасская', 'Хамар-Дабан', 'Ханты-Мансийск', 'Харабали', 'Хасавюрт', 'Хатанга', 'Хатырык-Хомо', 'Хвалынск', 'Хейджан', 'Хилок', 'Хову-Аксы', 'Ходовариха', 'Холмогоры', 'Холмск', 'Хорей-Вер', 'Хоринск', 'Хороль', 'Хоседа-Хард', 'Хуларин', 'Хулугли', 'Цакир', 'Целина', 'Целинное', 'Целинное', 'Центральный рудник', 'Цимлянск', 'Циммермановка', 'Цып-Наволок', 'Чаваньга', 'Чадан', 'Чаингда', 'Чайковский', 'Чаны', 'Чара', 'Чарышское', 'Чаун', 'Чебоксары', 'Чекунда', 'Челябинск', 'Чемал', 'Чемдальск', 'Чемурнаут', 'Червянка', 'Чердынь', 'Черемушки', 'Черемхово', 'Черемхово', 'Череповец', 'Черкесск', 'Черлак', 'Чермоз', 'Чернушка', 'Чернышевский', 'Черняево', 'Черняховск', 'Черский', 'Чертково', 'Черусти', 'Чистоозерное', 'Чистополь', 'Чита', 'Чокурдах', 'Чугуевка', 'Чулпаново', 'Чулым', 'Чульман', 'Чумикан', 'Чумпурук', 'Чурапча', 'Чюльбю', 'Шабалино', 'Шадринск', 'Шаим', 'Шалинское', 'Шамары', 'Шангалы', 'Шарыпово', 'Шарья', 'Шатрово', 'Шахты', 'Шахунья', 'Шебалино', 'Шевли', 'Шелаболиха', 'Шелагонцы', 'Шелехова', 'Шелопугино', 'Шенкурск', 'Шербакуль', 'Шереметьево', 'Шилка', 'Шимановск', 'Шира', 'Шойна', 'Шумиха', 'Шумиха', 'Щетинкино', 'Ыныкчан', 'Ытык-Кель', 'Эгвекинот', 'Эйк', 'Экимчан', 'Элиста', 'Эльтон', 'Энгозеро', 'Энкан', 'Эньмувеем', 'Эрзин', 'Эссо', 'Югоренок', 'Южно-Курильск', 'Южно-Сахалинск', 'Южно-Сухокумск', 'Южноуральск', 'Юильск', 'Юмурчен', 'Юрга', 'Юрты', 'Юрьев-Польский', 'Юрьевец', 'Юста', 'Юшкозеро', 'Ягодное', 'Яйлю', 'Яковлевка', 'Якутск', 'Якша', 'Ялуторовск', 'Ямкун', 'Янаул', 'Янискоски', 'Янов Стан', 'Янск', 'Яранск', 'Яренск', 'Ярольин', 'Ярославль', 'Ярцево', 'Яшкуль', 'Яя'];
var peoples = [{
    "fio": "Иноземцева Надежда",
    "image": "http://static.best-gooods.ru/img/women/women1.jpg",
    "sex": 0
}, {
    "fio": "Тотенкова Регина",
    "image": "http://static.best-gooods.ru/img/women/women2.jpg",
    "sex": 0
}, {
    "fio": "Курдина Эмилия",
    "image": "http://static.best-gooods.ru/img/women/women3.jpg",
    "sex": 0
}, {
    "fio": "Стаина Анна",
    "image": "http://static.best-gooods.ru/img/women/women4.jpg",
    "sex": 0
}, {
    "fio": "Чуличкова Анастасия",
    "image": "http://static.best-gooods.ru/img/women/women5.jpg",
    "sex": 0
}, {
    "fio": "Шеркова Евгения",
    "image": "http://static.best-gooods.ru/img/women/women6.jpg",
    "sex": 0
}, {
    "fio": "Андрюхина Нина",
    "image": "http://static.best-gooods.ru/img/women/women7.jpg",
    "sex": 0
}, {
    "fio": "Катериночкина Анфиса",
    "image": "http://static.best-gooods.ru/img/women/women8.jpg",
    "sex": 0
}, {
    "fio": "Головина Анна",
    "image": "http://static.best-gooods.ru/img/women/women9.jpg",
    "sex": 0
}, {
    "fio": "Чупрова Екатерина",
    "image": "http://static.best-gooods.ru/img/women/women10.jpg",
    "sex": 0
}, {
    "fio": "Холопова Виктория",
    "image": "http://static.best-gooods.ru/img/women/women11.jpg",
    "sex": 0
}, {
    "fio": "Крупина Мария",
    "image": "http://static.best-gooods.ru/img/women/women12.jpg",
    "sex": 0
}, {
    "fio": "Полевщикова Кристина",
    "image": "http://static.best-gooods.ru/img/women/women13.jpg",
    "sex": 0
}, {
    "fio": "Пьянкова Диана",
    "image": "http://static.best-gooods.ru/img/women/women14.jpg",
    "sex": 0
}, {
    "fio": "Буланова Яна",
    "image": "http://static.best-gooods.ru/img/women/women15.jpg",
    "sex": 0
}, {
    "fio": "Цейдлерина Мария",
    "image": "http://static.best-gooods.ru/img/women/women16.jpg",
    "sex": 0
}, {
    "fio": "Щеголева Светлана",
    "image": "http://static.best-gooods.ru/img/women/women17.jpg",
    "sex": 0
}, {
    "fio": "Янкелевич Алина",
    "image": "http://static.best-gooods.ru/img/women/women18.jpg",
    "sex": 0
}, {
    "fio": "Якушевич Наталья",
    "image": "http://static.best-gooods.ru/img/women/women19.jpg",
    "sex": 0
}, {
    "fio": "Фомичева Диана",
    "image": "http://static.best-gooods.ru/img/women/women20.jpg",
    "sex": 0
}, {
    "fio": "Пережогина Виктория",
    "image": "http://static.best-gooods.ru/img/women/women21.jpg",
    "sex": 0
}, {
    "fio": "Ячменькова Василиса",
    "image": "http://static.best-gooods.ru/img/women/women22.jpg",
    "sex": 0
}, {
    "fio": "Рябова Дарья",
    "image": "http://static.best-gooods.ru/img/women/women23.jpg",
    "sex": 0
}, {
    "fio": "Домышева Юлия",
    "image": "http://static.best-gooods.ru/img/women/women24.jpg",
    "sex": 0
}, {
    "fio": "Милова Татьяна",
    "image": "http://static.best-gooods.ru/img/women/women25.jpg",
    "sex": 0
}, {
    "fio": "Шипицына Анна",
    "image": "http://static.best-gooods.ru/img/women/women26.jpg",
    "sex": 0
}, {
    "fio": "Протасова Евгения",
    "image": "http://static.best-gooods.ru/img/women/women27.jpg",
    "sex": 0
}, {
    "fio": "Молодыха Алиса",
    "image": "http://static.best-gooods.ru/img/women/women28.jpg",
    "sex": 0
}, {
    "fio": "Коржева Ксения",
    "image": "http://static.best-gooods.ru/img/women/women29.jpg",
    "sex": 0
}, {
    "fio": "Кузнецова Вероника",
    "image": "http://static.best-gooods.ru/img/women/women30.jpg",
    "sex": 0
}, {
    "fio": "Сукина Алиса",
    "image": "http://static.best-gooods.ru/img/women/women31.jpg",
    "sex": 0
}, {
    "fio": "Перова ﻿Агата",
    "image": "http://static.best-gooods.ru/img/women/women32.jpg",
    "sex": 0
}, {
    "fio": "Коржакова Ольга",
    "image": "http://static.best-gooods.ru/img/women/women33.jpg",
    "sex": 0
}, {
    "fio": "Ёжина Вероника",
    "image": "http://static.best-gooods.ru/img/women/women34.jpg",
    "sex": 0
}, {
    "fio": "Абрамович Валентина",
    "image": "http://static.best-gooods.ru/img/women/women35.jpg",
    "sex": 0
}, {
    "fio": "Крылова Наталья",
    "image": "http://static.best-gooods.ru/img/women/women36.jpg",
    "sex": 0
}, {
    "fio": "Проскуркина Александра",
    "image": "http://static.best-gooods.ru/img/women/women37.jpg",
    "sex": 0
}, {
    "fio": "Терехова Юлия",
    "image": "http://static.best-gooods.ru/img/women/women38.jpg",
    "sex": 0
}, {
    "fio": "Труфанова Варвара",
    "image": "http://static.best-gooods.ru/img/women/women39.jpg",
    "sex": 0
}, {
    "fio": "Батурина Марина",
    "image": "http://static.best-gooods.ru/img/women/women40.jpg",
    "sex": 0
}, {
    "fio": "Васнецова Нина",
    "image": "http://static.best-gooods.ru/img/women/women41.jpg",
    "sex": 0
}, {
    "fio": "Перевалова Надежда",
    "image": "http://static.best-gooods.ru/img/women/women42.jpg",
    "sex": 0
}, {
    "fio": "Рошета Любовь",
    "image": "http://static.best-gooods.ru/img/women/women43.jpg",
    "sex": 0
}, {
    "fio": "Мосякова Татьяна",
    "image": "http://static.best-gooods.ru/img/women/women44.jpg",
    "sex": 0
}, {
    "fio": "Носова Анастасия",
    "image": "http://static.best-gooods.ru/img/women/women45.jpg",
    "sex": 0
}, {
    "fio": "Типалова Юнона",
    "image": "http://static.best-gooods.ru/img/women/women46.jpg",
    "sex": 0
}, {
    "fio": "Колесникова Инесса",
    "image": "http://static.best-gooods.ru/img/women/women47.jpg",
    "sex": 0
}, {
    "fio": "Якуничева Анна",
    "image": "http://static.best-gooods.ru/img/women/women48.jpg",
    "sex": 0
}, {
    "fio": "Левина Евгения",
    "image": "http://static.best-gooods.ru/img/women/women49.jpg",
    "sex": 0
}, {
    "fio": "Агафонова Виктория",
    "image": "http://static.best-gooods.ru/img/women/women50.jpg",
    "sex": 0
}, {
    "fio": "Дуркина Антонина",
    "image": "http://static.best-gooods.ru/img/women/women51.jpg",
    "sex": 0
}, {
    "fio": "Игошина Мария",
    "image": "http://static.best-gooods.ru/img/women/women52.jpg",
    "sex": 0
}, {
    "fio": "Званцова Светлана",
    "image": "http://static.best-gooods.ru/img/women/women53.jpg",
    "sex": 0
}, {
    "fio": "Хлопонина Елена",
    "image": "http://static.best-gooods.ru/img/women/women54.jpg",
    "sex": 0
}, {
    "fio": "Суботина Изабелла",
    "image": "http://static.best-gooods.ru/img/women/women55.jpg",
    "sex": 0
}, {
    "fio": "Дроздова Марфа",
    "image": "http://static.best-gooods.ru/img/women/women56.jpg",
    "sex": 0
}, {
    "fio": "Милютина Изабелла",
    "image": "http://static.best-gooods.ru/img/women/women57.jpg",
    "sex": 0
}, {
    "fio": "Гнусарева Ангелина",
    "image": "http://static.best-gooods.ru/img/women/women58.jpg",
    "sex": 0
}, {
    "fio": "Домаш Вячеслав",
    "image": "http://static.best-gooods.ru/img/men/men1.jpg",
    "sex": 1
}, {
    "fio": "Лагутов Руслан",
    "image": "http://static.best-gooods.ru/img/men/men2.jpg",
    "sex": 1
}, {
    "fio": "Степанков Радислав",
    "image": "http://static.best-gooods.ru/img/men/men3.jpg",
    "sex": 1
}, {
    "fio": "Перешивкин Ростислав",
    "image": "http://static.best-gooods.ru/img/men/men4.jpg",
    "sex": 1
}, {
    "fio": "Кобзев Платон",
    "image": "http://static.best-gooods.ru/img/men/men5.jpg",
    "sex": 1
}, {
    "fio": "Кабанов Игнатий",
    "image": "http://static.best-gooods.ru/img/men/men6.jpg",
    "sex": 1
}, {
    "fio": "Чепурин Николай",
    "image": "http://static.best-gooods.ru/img/men/men7.jpg",
    "sex": 1
}, {
    "fio": "Крымов Изяслав",
    "image": "http://static.best-gooods.ru/img/men/men8.jpg",
    "sex": 1
}, {
    "fio": "Собчак Евгений",
    "image": "http://static.best-gooods.ru/img/men/men9.jpg",
    "sex": 1
}, {
    "fio": "Былинкин Максим",
    "image": "http://static.best-gooods.ru/img/men/men10.jpg",
    "sex": 1
}, {
    "fio": "Архипов Сергей",
    "image": "http://static.best-gooods.ru/img/men/men11.jpg",
    "sex": 1
}, {
    "fio": "Донцов Самсон",
    "image": "http://static.best-gooods.ru/img/men/men12.jpg",
    "sex": 1
}, {
    "fio": "Стаин Владилен",
    "image": "http://static.best-gooods.ru/img/men/men13.jpg",
    "sex": 1
}, {
    "fio": "Лызлов Владислав",
    "image": "http://static.best-gooods.ru/img/men/men14.jpg",
    "sex": 1
}, {
    "fio": "Ягужинский Аристарх",
    "image": "http://static.best-gooods.ru/img/men/men15.jpg",
    "sex": 1
}, {
    "fio": "Фризов Владимир",
    "image": "http://static.best-gooods.ru/img/men/men16.jpg",
    "sex": 1
}, {
    "fio": "Крупнов Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men17.jpg",
    "sex": 1
}, {
    "fio": "Ябловский Вадим",
    "image": "http://static.best-gooods.ru/img/men/men18.jpg",
    "sex": 1
}, {
    "fio": "Гусенков Самсон",
    "image": "http://static.best-gooods.ru/img/men/men19.jpg",
    "sex": 1
}, {
    "fio": "Панфёров Семён",
    "image": "http://static.best-gooods.ru/img/men/men20.jpg",
    "sex": 1
}, {
    "fio": "Ясинский Павел",
    "image": "http://static.best-gooods.ru/img/men/men21.jpg",
    "sex": 1
}, {
    "fio": "Тетерев Глеб",
    "image": "http://static.best-gooods.ru/img/men/men22.jpg",
    "sex": 1
}, {
    "fio": "Шлыков Николай",
    "image": "http://static.best-gooods.ru/img/men/men23.jpg",
    "sex": 1
}, {
    "fio": "Козлов Илья",
    "image": "http://static.best-gooods.ru/img/men/men24.jpg",
    "sex": 1
}, {
    "fio": "Амалиев Максим",
    "image": "http://static.best-gooods.ru/img/men/men25.jpg",
    "sex": 1
}, {
    "fio": "Паулкин Ефим",
    "image": "http://static.best-gooods.ru/img/men/men26.jpg",
    "sex": 1
}, {
    "fio": "Колганов Герман",
    "image": "http://static.best-gooods.ru/img/men/men27.jpg",
    "sex": 1
}, {
    "fio": "Саламатов Николай",
    "image": "http://static.best-gooods.ru/img/men/men28.jpg",
    "sex": 1
}, {
    "fio": "Сподарев Степан",
    "image": "http://static.best-gooods.ru/img/men/men29.jpg",
    "sex": 1
}, {
    "fio": "Бочкарёв Владимир",
    "image": "http://static.best-gooods.ru/img/men/men30.jpg",
    "sex": 1
}, {
    "fio": "Опекунов Вячеслав",
    "image": "http://static.best-gooods.ru/img/men/men31.jpg",
    "sex": 1
}, {
    "fio": "Телицын Тимофей",
    "image": "http://static.best-gooods.ru/img/men/men32.jpg",
    "sex": 1
}, {
    "fio": "Ямлиханов Андрей",
    "image": "http://static.best-gooods.ru/img/men/men33.jpg",
    "sex": 1
}, {
    "fio": "Малиновский Владислав",
    "image": "http://static.best-gooods.ru/img/men/men34.jpg",
    "sex": 1
}, {
    "fio": "Гребнев Ростислав",
    "image": "http://static.best-gooods.ru/img/men/men35.jpg",
    "sex": 1
}, {
    "fio": "Кузанов Леонид",
    "image": "http://static.best-gooods.ru/img/men/men36.jpg",
    "sex": 1
}, {
    "fio": "Ягфаров Серафим",
    "image": "http://static.best-gooods.ru/img/men/men37.jpg",
    "sex": 1
}, {
    "fio": "Цитников Всеволод",
    "image": "http://static.best-gooods.ru/img/men/men38.jpg",
    "sex": 1
}, {
    "fio": "Владимиров Артём",
    "image": "http://static.best-gooods.ru/img/men/men39.jpg",
    "sex": 1
}, {
    "fio": "Банин Александр",
    "image": "http://static.best-gooods.ru/img/men/men40.jpg",
    "sex": 1
}, {
    "fio": "Капица Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men41.jpg",
    "sex": 1
}, {
    "fio": "Колбин Клавдий",
    "image": "http://static.best-gooods.ru/img/men/men42.jpg",
    "sex": 1
}, {
    "fio": "Володин Зиновий",
    "image": "http://static.best-gooods.ru/img/men/men43.jpg",
    "sex": 1
}, {
    "fio": "Уланов Иван",
    "image": "http://static.best-gooods.ru/img/men/men44.jpg",
    "sex": 1
}, {
    "fio": "Седых Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men45.jpg",
    "sex": 1
}, {
    "fio": "Туровский Лев",
    "image": "http://static.best-gooods.ru/img/men/men46.jpg",
    "sex": 1
}, {
    "fio": "Яснов Ефим",
    "image": "http://static.best-gooods.ru/img/men/men47.jpg",
    "sex": 1
}, {
    "fio": "Москвин ﻿Артем",
    "image": "http://static.best-gooods.ru/img/men/men48.jpg",
    "sex": 1
}, {
    "fio": "Измайлов Герман",
    "image": "http://static.best-gooods.ru/img/men/men49.jpg",
    "sex": 1
}, {
    "fio": "Цыганов Егор",
    "image": "http://static.best-gooods.ru/img/men/men50.jpg",
    "sex": 1
}, {
    "fio": "Голумбовский Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men51.jpg",
    "sex": 1
}, {
    "fio": "Аничков Кирилл",
    "image": "http://static.best-gooods.ru/img/men/men52.jpg",
    "sex": 1
}, {
    "fio": "Канаш Степан",
    "image": "http://static.best-gooods.ru/img/men/men53.jpg",
    "sex": 1
}, {
    "fio": "Клепахов Дмитрий",
    "image": "http://static.best-gooods.ru/img/men/men54.jpg",
    "sex": 1
}, {
    "fio": "Колесников Анатолий",
    "image": "http://static.best-gooods.ru/img/men/men55.jpg",
    "sex": 1
}, {
    "fio": "Цветков Леонид",
    "image": "http://static.best-gooods.ru/img/men/men56.jpg",
    "sex": 1
}, {
    "fio": "Мишин Ефим",
    "image": "http://static.best-gooods.ru/img/men/men57.jpg",
    "sex": 1
}, {
    "fio": "Борисов Митрофан",
    "image": "http://static.best-gooods.ru/img/men/men58.jpg",
    "sex": 1
}];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
peoples = shuffleArray(peoples);
var mainNow = 0;
var cityName = '';
function detectCity() {
    var geolocation = ymaps.geolocation;
    cityName = geolocation.city;
}
$(function () {
    ymaps.ready(detectCity);
});
function addTopLine(isMobile) {
    isMobile = isMobile ? isMobile : false;
    var allToday = new Date().getHours() * 100 + Math.floor(Math.random() * 1000);
    var now = mainNow != 0 ? mainNow : getRandomInt(45, 150);
    mainNow = now;
    var todayBuy = getRandomInt(50, 100) + new Date().getHours();
    if (allToday <= todayBuy) {
        todayBuy = Math.floor(allToday / 2) + 2;
    }
    var allHeight = isMobile ? 34 : 36;
    var html = '<style>.top-line span.mobile{height: 35px;padding-top: 10px;font-size: 12px !important;box-sizing: border-box;}' +
        'body{padding-top:34px !important;}' +
        '.top-line span{font-family: Arial !important;font-size:21px !important;}' +
        '.top-line .all-today.mobile{display:none;}' +
        '.tm-block-navbar{top: 36px !important;}' +
        '.all-today{background-image: url(http://static.best-gooods.ru/img/all.png);height: 28px;padding-left: 45px;background-repeat: no-repeat;background-position: 5px;margin-left: 10px;display: inline-block;padding-top: 8px;margin-top: 0;}' +
        '.now{background-image: url(http://static.best-gooods.ru/img/now.png);height: 28px;padding-left: 45px;background-repeat: no-repeat;background-position: 5px;margin-left: 10px;display: inline-block;padding-top: 8px;margin-top: 0;border-left: 3px solid #E4E4E4;}' +
        '.today-buy{background-image: url(http://static.best-gooods.ru/img/buy.png);height: 28px;padding-left: 45px;background-repeat: no-repeat;background-position: 5px;margin-left: 10px;display: inline-block;padding-top: 8px;margin-top: 0;border-left: 3px solid #E4E4E4;}' +
        '.top-line .now.mobile{border-left:0;}</style>' +
        '<div class="top-line" style="overflow: hidden;box-sizing: border-box; z-index: 99999;height:'+allHeight+'px; text-align:center;background: #F1EDEE; position: fixed; width:100%;top:0; left:0;">' +
        '<div style="font-size: 21px;color: #000;display:inline-block;">' +
        '<span class="all-today '+(isMobile ? 'mobile' : '')+'">Посетителей сегодня: <strong>' + allToday + '</strong></span>' +
        '<span class="now '+(isMobile ? 'mobile' : '')+'">Сейчас на сайте: <strong>' + now + '</strong></span>' +
        '<span class="today-buy '+(isMobile ? 'mobile' : '')+'">Покупок сегодня: <strong>' + todayBuy + '</strong></span>' +
        '</div></div>';
    $(html).appendTo($(document.body));
}
function showTips(bill, bill2) {
    this.bill = bill;
    this.bill2 = bill2;
    this.showItem = 0;
    this.generateHTML = function (image, fio, city, bill, bill2, sex) {
        var top = 50;
        if ($('.freezing-info').length) {
            top = 229;
        }
        var nowMoney = bill;
        if(getRandomInt(0,1)){
            nowMoney = bill2;
        }
        return (
        '<div class="notify" style="font-family: \'Roboto\', sans-serif; z-index:991000;display: none;opacity:0.1;background: #363636;border-radius:10px;padding:30px;width:330px;height:110px;position:fixed;top:' + top + 'px;right:20px;box-sizing: border-box;color: white;">' +
        '<img src="' + image + '" width="50" height="50" style="width:50px;box-sizing:content-box; height: 50px; padding-right:20px; float: left;">' +
        '<div class="notify-text" style="font-size: 14px;line-height:normal;">' + fio + ', г. ' + city + ', сделал' + (sex ? '' : 'а') + ' заказ на ' + nowMoney + ', кол-во 1шт</div>' +
        '</div>'
        );
    };
    this.addItem = function (html) {
        $(html).appendTo($(document.body));
        $('.notify').css('display', 'block');
        $('.notify').animate({
            opacity: 1.0
        }, 'slow');
    };
    this.bindEvent = function () {
        setTimeout(function () {
            $('.notify').animate({
                opacity: 0.1
            }, 'slow', function () {
                $('.notify').css('display', 'none');
                $('.notify').remove();
            });
        }, 6000);
    };
    this.getIntervalAction = function () {
        var self = this;
        return function () {
            var item = peoples[self.showItem];
            if (!item) {
                self.showItem = -1;
                var item = peoples[0];
            }
            self.showItem++;
            var city = cityName;

            if (getRandomInt(0, 1)) {
                city = cityList[getRandomInt(0, 1306)];
            }
            var html = self.generateHTML('images/yico.png', item.fio, city, self.bill, self.bill2, item.sex);
            self.addItem(html);
            self.bindEvent();
        }
    };
    setInterval(this.getIntervalAction(), 25000);
}
function addDeliveryPopup() {
    this.generateHTML = function (city) {
        return (
        '<div class="delivery-notify" style="font-family: Arial; z-index: 991000;background: #363636;border: 1px solid white;padding:30px;padding-top: 17px;width:270px;height:80px;position:fixed;bottom:0px;left:0px;box-sizing: border-box;color: white;">' +
        '<div class="close-delivery-notify" style="width:15px;height:15px;cursor: pointer;position:absolute;right:0;top:0;border:1px solid #fff; font-size: 22px;line-height: 0.6;text-align: center;">&times;</div>' +
        '<div class="notify-text">Действует быстрая доставка в г.' + city + '</div>' +
        '</div>'
        );
    };
    this.bindEvents = function () {
        $('.close-delivery-notify').on('click', function () {
            $('.delivery-notify').remove();
        });
        $(document).on('wheel', function () {
            if ($(document).scrollTop() + $(window).height() == $(document).height()) {
                if ($('.delivery-notify').length) {
                    $('.delivery-notify').remove();
                }
            }
        });
    };
    this.getShowAction = function () {
        var self = this;
        return function () {
            var html = self.generateHTML(cityName);
            $(html).appendTo($(document.body));
            self.bindEvents();
        };
    };

    setTimeout(this.getShowAction(), 15000);
}
function showSwimmer() {
    var count = mainNow != 0 ? mainNow : getRandomInt(45, 150);
    var bottom = 6;
    if ($('.delivery-notify').length) {
        bottom = 88;
    }
    mainNow = count;
    var html = '<div class="swimmer" style="font-family: Arial; font-size: 12px;z-index:991001;position: fixed; bottom:' + bottom + 'px; left: 6px; width:265px;height: 73px;background: #FFFFEA; border-radius: 5px; border:1px solid #000; padding: 10px;box-sizing: border-box;">' +
        '<div class="close-swimmer" style="cursor:pointer;width: 13px;height: 13px;font-size: 22px;line-height: 0.65;position: absolute;top: 10px;right:10px; background: white;color:#9C8B74;border: 1px solid #9C8B74; border-radius: 3px;">&times;</div>' +
        '<img src="http://static.best-gooods.ru/img/swimmer.png" style="width:50px; height: 50px; float: left;padding-right: 10px;border:0;">' +
        'Сейчас  ' + count + ' пользователей просматривают эту страницу вместе с вами.' +
        '</div>';
    $(html).appendTo($(document.body));
    $('.close-swimmer').on('click', function () {
        $('.swimmer').remove();
    });
    setInterval(function () {
        if ($('.delivery-notify').length) {
            $('.swimmer').css('bottom', 88);
        } else {
            $('.swimmer').css('bottom', 6);
        }
    }, 1000);
}
function freezeMoney(balance, dollar) {
    var html = '<style>' +
        '.freezing-info-packages {font-size: 20px;color: #000000;padding-top: 12px;z-index: 2;position: relative;line-height: 1;}' +
        '.freezing-close {position: absolute;top: -14px;right: 4px;width: 20px;height: 20px;display: block;}' +
        '.freezing-info:before {content: "";position: absolute;height: 198px;width: 280px;top: 0;right: 0;margin-top: -26px;background: url("http://static.best-gooods.ru/img/buyer-ice.png") no-repeat;}' +
        '.freezing-info{font-family: Arial; z-index: 991000;color: black;width: 329px;height: 125px;position: fixed;background: url("http://static.best-gooods.ru/img/buyer-bg.png") no-repeat;box-sizing: border-box;padding: 10px 30px;top:56px;right:0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}' +
        '.freezing-info-price {font-size: 22px;color: #02aced;z-index: 2;position: relative;margin-left: 3px;}' +
        '.freezing-info-title {font-size: 21px;color: #000000;z-index: 2;position: relative;text-transform: uppercase;line-height: 1.3;}' +
        '.freezing-close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}' +
        '.freezing-close:after {-webkit-transform: rotate(-45deg);-ms-transform: rotate(-45deg);transform: rotate(-45deg);}' +
        '.freezing-close:before, ' +
        '.freezing-close:after {content: "";position: absolute;width: 100%;height: 2px;background: #ffffff;}' +
        '</style>' +
        '<div class="freezing-info">' +
        '<div class="freezing-info-title">Мы заморозили цену!</div>' +
        '<div class="freezing-info-price">1$ = <span class="dynamic-freezing-info--price">' + dollar + ' рублей</span></div>' +
        '<div class="freezing-info-packages">Осталось <span class="packages-count">' + balance + '</span> штук <br>по старому курсу' +
        '</div>' +
        '<a href="#close" class="freezing-close"></a>' +
        '</div>';
    $(html).appendTo($(document.body));
    $('.freezing-close').on('click', function (e) {
        $('.freezing-info').remove();
        e.preventDefault();
        e.stopPropagation();
    });
}
function addCityToComment() {
    var names = $('.vk-comment-name');
    for (var i = 0; i < names.length; i++) {
        var item = $(names[i]);
        if (getRandomInt(0, 1)) {
            var newText = item.text() + ' г.' + cityName;
            item.text(newText);
        } else {
            var newText = item.text() + ' г.' + cityList[getRandomInt(0, 1306)];
            item.text(newText);
        }
    }
}
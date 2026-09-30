# Жастар арасындағы азарттық ойындар

Интерактивті зерттеу сайты, қазақ және ағылшын тілдерінде. Автор: **Мадени Батырхан / Batyrkhan Madeni**. HTML, CSS және JavaScript; сервер, тәуелділіктер және API кілттері қажет емес.

## Тілдер / Languages

Бірінші кіргенде тіл таңдау экраны ашылады. Тек тіл таңдауы `localStorage` ішінде сақталады; жауаптар сақталмайды. Шапкадағы ҚАЗ / EN ауыстырғышы ағымдағы бөлімді сақтайды, бірақ бет жадындағы жауаптар жаңартқанда өшеді. Тікелей сілтемелер: `?lang=kk#research` және `?lang=en#research`. Браузер қоймасы бұғатталса да URL параметрі жұмыс істейді.

`language.js` loads the selected edition. `app.js` / `app.en.js` provide the simulations; `research.js` / `research.en.js` provide the research pages and legal exercises. Keep both editions aligned when changing content, scoring or simulation rules. Both use the same aggregate `survey-results.json` file. Source links open original legal documents; English summaries are explanatory translations. Questionnaire downloads are available in both languages.

## Vercel арқылы жариялау

1. Vercel-де **Add New → Project** таңдаңыз.
2. `Batyrbro-55/batyrmad` репозиторийін импорттаңыз.
3. Framework Preset: **Other**. Root Directory: репозиторий түбірі.
4. `vercel.json` параметрлерін қолданыңыз: жинақтау және орнату командалары бос; Output Directory — `public`.
5. **Deploy** батырмасын басыңыз. Environment Variables қажет емес.

## Файлдар

- `public/index.html` — сайт қаңқасы және бөлімдер навигациясы.
- `public/research.css` — зерттеу басылымының бейімделетін дизайны.
- `public/research.js` — зерттеу, құқықтық талдау, кейстер және жарнаманы талдау.
- `public/style.css`, `public/app.js` — автомат, тәуекел тесті және калькулятор.
- `public/survey-results.json` — тек нақты жиынтық нәтижелер; қазір `pending`.
- `public/survey-questionnaire.txt` — жүктелетін анкета жобасы.
- `docs/survey-data.md` — деректерді жинауға және жариялауға дайындау.

## Зерттеу деректерінің мәртебесі

Сауалнама нәтижелері әлі жиналмаған. Онлайн жинау қызметі қосылмаған; анкета терезесі тек алдын ала қарауға арналған. Сайтта ойдан шығарылған статистика жоқ. Нақты деректерді енгізу тәртібі `docs/survey-data.md` файлында берілген. PDF қорытындысы келесі кезеңге қалдырылған.

## Жергілікті іске қосу

Python орнатылған болса: `python -m http.server 8000 --directory public`, содан кейін браузерде `http://localhost:8000` ашыңыз.

## Модель

Нақты ақша қолданылмайды. Автоматтың төрт барабанында төрт символ бар. Ұтыс ықтималдығы — 6,25%; шартты RTP — 75%. Бұл нақты оператордың ойыны емес, ережелері ашық оқу моделі. Сауалнама диагноз қоймайды, жауаптар серверге жіберілмейді.

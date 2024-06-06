//конспект: как создаются тесты. Зарезервированы специальные названия
// функций, одно из ниx - test. Пишем test  и описываем
// что должно произойти. Т е test это функция в которую мы прописываем
// название в виде строки. В названии пишем не просто имя, а указываем
// что должно произойти, именно по этому мы прописываем имя в виде строки
// Также название является параметром функции, в тестах является первым
// параметром, а вторым параметром мы прописываем саму функцию, которая
// и будет являтся тестом.

import {mult, splitIntoWords, sum} from "./01";

// название теста: "сумма должна быть правильной"
test('sum should be correct', () => {

    //data т е подготовительный этап или данные
    const a = 1;
    const b = 2;
    const c = 3;

    //action действие которое мы выполняем
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    //expect result ожидаем получить какой-то результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

// название теста: "умножение должно быть правильным"
test('multiply should be correct', () => {
    //data т е подготовительный этап или данные
    const a = 1;
    const b = 2;
    const c = 3;

    //action действие которое мы выполняем
    const result1 = mult(a,b);
    const result2 = mult(b,c);

    //expect result ожидаем получить какой-то результат
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

// название теста: "разбиение на слова должно быть правильным"
test ('splitting into words should be correct', () => {
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friend");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})
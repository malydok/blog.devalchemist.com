---
title: Zmienne i przekazywanie przez referencję w JS
date: "2019-05-06"
description: ""
---

Zadano mi dziś ciekawe pytanie. Zerknijcie na kod i zobaczcie, czy jego rozszyfrowanie sprawia wam trudność:

```js
let a = { color: "red" }
const reassign = b => {
  b = { size: 10 }
  console.log(b) // ?
}
reassign(a)
console.log(a) // ?
```

I jak?

Dlaczego `a` nie jest nadpisane nowym obiektem, przecież `b` powinno być równe `a`?

Każdy ucząc się JS słyszał zapewne o tym, jak to obiekty przekazywane są do funkcji przez referencję. Jednak czy mamy z tym do czynienia w powyższym przypadku?

Nie mamy. Chodzi tu tylko o zmianę wartości zmiennej.

## Przeanalizujmy kod linia po linii

1.  deklarujemy zmienną `a`, nadając jej wartość obiektu, gdzie ta wartość to tak naprawdę wskaźnik na miejsce w pamięci, gdzie ten obiekt się znajduje,

```
Zmienne     Pamięć
a _________ { color: 'red' }
```

2.  deklarujemy zmienną `reassign`, nadając jej jako wartość funkcję,
3.  wywołujemy `reassign` podając `a` jako parametr,
4.  tworzy się nowy [kontekst wywołania](https://www.youtube.com/watch?v=Hb0RG60gwh8), **deklaruje zmienną** `b` i ustawia jej wartość na wartość `a`, czyli `b` wskazuje teraz na ten sam obiekt, co `a`,

```
Zmienne     Pamięć
a _________ { color: 'red' }
b _________/
```

5.  przypisuje do `b` nowy wskaźnik na nowo utworzony obiekt,

```
Zmienne     Pamięć
a _________ { color: 'red' }
b _________ { size: 10 }
```

6.  loguje `b`, kończy się wywołanie funkcji, loguje `a`.

Nie pozostaje już chyba żadna wątpliwość, co zostanie wyplute do konsoli. Czy skorzystaliśmy tu jednak z faktu, że obiekty przekazywane są do funkcji jako referencje? Nie, ale mogliśmy przed krokiem 5, kiedy `b` wskazywał jeszcze na pierwszy obiekt i można go było zmodyfikować, np. tak:

```js
b.size = 10
console.log(a) // { color: 'red', size: 10 }
```

Nowością dla początkującego może być fakt, że przekazanie do funkcji zmiennej `a` nie jest równoważne temu, że `b` _będzie_ zmienną `a`. Nie, jest to osobna zmienna stworzona na potrzeby tej funkcji. Można sobie to wyobrazić tak:

```js
let a = { color: "red" }
const reassign = a => {
  let b = a // to się dzieje automagicznie!
  b = { size: 10 }
}
reassign(a)
```

Trzeba rozdzielić myślenie o nazwach zmiennych i ich wartościach. W problemie nie dotykamy wartości obiektu (referencji), a zajmujemy się tylko zmienną `b` modyfikując na co ma wskazywać. Warto mieć w głowie model zmiennych i pamięci jak zademonstrowany w krokach wyżej.

## Bez obiektów

Powiedzmy, że zmodyfikuję nasz problem w następujący sposób:

```js
let a = 1
const reassign = b => {
  b = 2
}
reassign(a)
```

Zniknęły obiekty, nie ma referencji. Jaki będzie wynik?

Taki sam, bo w zasadzie zmieniło się tylko tyle, że zamiast wskazywać na obiekt wskazujemy teraz na liczbę.

## Patrz na kontekst wywołania i zasięg zmiennych

```js
let a = 1
const reassign = a => {
  a = 2
}
reassign(a)
```

Czy powyższa zmiana `b` na `a` wewnątrz funkcji zmienia cokolwiek w programie?

Nie, wewnętrzne `a` istnieje w innym scope od `a` zewnętrznego i dostęp do nich zależy od kontekstu wywołania, w którym aktualnie przebywa program. W trakcie wywołania `reassign` będzie to `1 -> 2`, a w globalnym kontekście zawsze `1`.

Zrozumienie kontekstu (execution context), zasięgu zmiennych (scope) i jak te zmienne są przechowywane w pamięci to bardzo ważna wiedza przy zabawie z JS. Nie jest to specjalnie trudne bez wchodzenia z szczegóły, a zrozumienie tutaj przełoży się na łatwiejsze przyswojenie mechanizmu domknięć (closure).

## Przykład z tyłka

Jeśli rozumiecie ten pierwszy problem to zobaczycie też, że nie ma on zupełnie sensu w realnym świecie a przynajmniej zapala czerwone lampki poprawności kodu. Nadpisanie wartości argumentu zaraz po jego otrzymaniu w funkcji - to na co mi ten argument?

Może `b` powinno być zmienną wewnątrz funkcji?

```js
const reassign = () => {
  const b = { size: 10 }
}
```

Jeśli chcielibyśmy nadpisać zmienną poza funkcją moglibyśmy napisać tak:

```js
let a = { color: "red" }
const reassign = () => {
  a = { size: 10 }
}
reassign()
```

Jednak `reassign` ma teraz wpływ na rzeczy poza jej scope (posiada side-effecty) przez co jest trudniejsza do zrozumienia i przetestowania, a kod do zdebugowania. A można:

```js
let a = { color: "red" }
const reassign = () => {
  return { size: 10 }
}
a = reassign()
```

Dzięki czemu `reassign` jest pure (bez side-effectów), a programiści <3 pure functions.

---

Mam nadzieję, że ten artykuł ma trochę sensu. Można mnie złapać i zadawać pytania na [discordzie Type of Web](https://discord.typeofweb.com/), zapraszam.

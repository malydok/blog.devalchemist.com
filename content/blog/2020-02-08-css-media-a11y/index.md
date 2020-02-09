---
title: "Preferencje użytkownika w CSS @media"
date: "2020-02-08"
description: "Nowe w poziomie 5 CSSWG reguły @media do preferencji użytkownika"
---

W specyfikacji [Media Queries poziomu 5](https://drafts.csswg.org/mediaqueries-5) wprowadzane są nowe reguły @media pozwalające na szanowanie ustawień użytkownika w paru zakresach. Dwa najbardziej konkretne z nich wspierane są już przez większość przeglądarek i na tych się skupię, wspominając krótko o reszcie propozycji.

## Ruch

Gdy tylko w sieci Web pojawiła się taka możliwość autorzy stron zaczęli dodawać do swoich stron wszelakie animacje. Początkowo mogły być to elementy `<marquee>` lub animowane GIFy, później Flash stworzył czego dusza zapragnęła, dziś korzystamy z dobrodziejstw JS i animacji CSS. Czy ktokolwiek zatrzymał się jednak na chwilę i pomyślał, czy każdemu użytkownikowi fikuśne animacje odpowiadają?

Aż [do 35% dorosłych powyżej wieku 40 lat](https://vestibular.org/understanding-vestibular-disorder) doświadczyło jakiejś formy zaburzenia przedsionka ucha wewnętrznego, które służy wykrywaniu pozycji głowy lub odczuwaniu przyspieszenia w aucie czy windzie ([propriocepcji](https://pl.wikipedia.org/wiki/Propriocepcja)). Niespodziewany, szybki ruch jest w stanie u takich osób wywołać zawroty głowy i nudności.

Dzięki nowej regule `prefers-reduced-motion` ([w MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)) możemy ograniczyć lub wyłączyć potencjalnie szkodliwe animacje dla osób, które tę regułę w swoim systemie zdefiniowały.
Mamy tu do wyboru dwie wartości: `no-preference` oraz `reduce`.

Według podejścia [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) należałoby zdefiniować style najpierw bez animacji by następnie dodać je dla użytkowników, którym one nie przeszkadzają, np. tak:

```css
.element {
  /* brak animacji */
}
@media (prefers-reduced-motion: no-preference) {
  .element {
    animation: animate 1s;
  }
}
```

Dla istniejących stron, które chciałyby wprowadzić tę regułę dość radykalnie, bo usuwając wszystkie CSSowe animacje, można użyć skryptu sugerowanego przez [a11yproject.com](https://a11yproject.com/posts/understanding-vestibular-disorders/):

```css
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.001s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001s !important;
  }
}
```

> W narzędziach deweloperskich Chrome możemy emulować przełączanie tej reguły w szufladzie "Rendering" pod nazwą "Emulate CSS media feature prefers-reduced-motion". Pro-tip: jeśli nie możesz jej znaleźć, wciśnij <kbd>Ctrl Shift P</kbd> w otwartych devtoolsach i wyszukaj "rendering".

Jak tylko zobaczymy szersze wsparcie tej techniki na stronach to myślę, że nie jestem jedyny, który widzi jej zastosowanie również we własnych eksploracjach internetu. Żadnych animacji, wszystko instant!

## Kolor

Dark mode stał się ostatnio tak popularny, że mało jest już stron czy aplikacji desktopowych nie dających swoim użytkownikom możliwości wybrania między ciemnym i jasnym motywem.

Naturalnie stało się to polem walki o wyższość jednej opcji nad drugą, która zwykle sprowadza się do argumentów ad "moja racja jest najmojsza". Nic w tym dziwnego, bo jak się okazuje, wybór ten dla większości populacji jest kwestią preferencji nie wpływającej na wydajność czytania, choć średnio [motyw jasny na tym polu wygrywa](https://www.nngroup.com/articles/dark-mode). Osoby z zaćmą i pokrewnymi schorzeniami mogą jednak odczuć poprawę po przejściu na motyw ciemny, a długoterminowe czytanie w jasnych motywach może mieć związek z krótkowzrocznością, więc powinniśmy uszanować wybór użytkownika w tym zakresie.

Na pomoc i w zastępstwie (lub dodatkowo do) przycisków zmiany motywu przychodzi nam reguła `prefers-color-scheme` ([w MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)). Dostępne w niej wartości `no-preference`, `light` i `dark` umożliwią nam podporządkowanie wyglądu strony ustawieniom systemu odwiedzającego.

W przypadku stron domyślnie jasnych i korzystając ze zmiennych CSS możnaby napisać:

```css
:root {
  --bodyText: #222;
}
body {
  color: var(--bodyText);
}
@media screen and (prefers-color-scheme: dark) {
  :root {
    --bodyText: #eee;
  }
}
```

Uważać przy tym trzeba, by reguła ta tyczyła się wyłącznie ekranów (stąd `screen`), bo ciemny motyw jest w większości przypadków niepożądany choćby przy drukowaniu strony (`print` media). W przypadku jeśli ciemny jest domyślny możnaby użyć:

```css
@media print, (prefers-color-scheme: light) {
  /* style */
}
```

co załatwi od razu problem kolorów w wersji strony przystosowanej do druku.

> Przełączać motywy można, jak w przypadku reduced-motion, w narzędziach deweloperskich Chrome pod nazwą "Emulate CSS media feature prefers-color-scheme".

## Inne

Parę z innych propozycji <abbr title="CSS Working Group">CSSWG</abbr>, które jeszcze nie doczekały się finalnej wersji i szerokiego wsparcia w przeglądarkach to:

- `prefers-reduced-transparency` ma służyć zmniejszeniu liczby elementów z przezroczystościami, by ułatwić przeglądanie osobom z problemami rozpoznywania kształtów ([rodzajem agnozji](https://en.wikipedia.org/wiki/Apperceptive_agnosia)). Problem ten nie zawsze powiązany jest z przezroczystością a jego występowania w przypadku Webu wydaje mi się jest niewiele, ale warto wiedzieć o takiej przypadłości.
- `prefers-contrast` to z kolei reguła wskazująca jak mocny kontrast preferuje użytkownik. Obecnie, jak w przypadku dark mode, używa się przycisków przełączania styli, co ta propozycja automatyzuje. Przydatne, choć większość z nas dobrze by skupiła się najpierw na dostosowaniu do [kontrastu przynajmniej AA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).
- `prefers-reduced-data` ma mówić stronie, że użytkownik chce otrzymać dane o mniejszej wielkości. Ci, którym zależy na przesyłaniu minimalnej paczki użytkownikowi, już to robią, lecz wyobrażam sobie wykorzystanie tej reguły w przypadku szczerej chęci poprawienia funkcjonalności strony stopniowo w stylu progressive enhancement lecz biorąc pod uwagę wagę.
- `inverted-colors` informuje o fakcie użycia odwrotnych kolorów w systemie użytkownika, by móc w takiej sytuacji odpowiednio zmodifykować stronę. Nie wiem, w jakim przypadku ktoś odwraca kolory, ale jest możliwość tego obsługi.
- `forced-colors` zaś informuje o narzuceniu przez system użytkownika palety kolorów. Ma to miejsce, np. gdy w systemie Windows ustawiony jest tryb wysokiego kontrastu. Sporo elementów ozdobnych staje się w tym trybie niewidocznych, przez co mamy choćby okazję usunięcia zbędnych przestrzeni lub paddingów (co pewnie nie jest tym, o czym myślą twórcy standardu, ale tyle udało mi się wymyślić).

## Więcej wolności

Podporządkowywanie się pod ustawienia użytkowników to dobry krok w kierunku tworzenia stron, które nie tylko wyświetlają informację, ale są otwarte na sposób, w jaki mają ją wyświetlać. Lubimy dostępny internet.

Uff... coś się udało napisać na podsumowanie.

A teraz sio, dodawać dark mode do swojego blogaska!

---
title: "Preferencje użytkownika w CSS @media"
date: "2020-02-08"
description: "Nowe w poziomie 5 CSSWG reguły @media do preferencji użytkownika"
---

W specyfikacji [Media Queries poziomu 5](https://drafts.csswg.org/mediaqueries-5) wprowadzane są nowe reguły @media pozwalające na szanowanie ustawień użytkownika w paru zakresach. Dwa najbardziej konkretne z nich wspierane są już przez większość przeglądarek i na tych się skupię, wspominając krótko o reszcie propozycji.

## Ruch

Gdy tylko w sieci Web pojawiła się taka możliwość autorzy stron zaczęli dodawać do swoich stron wszelakie animacje. Początkowo mogły być to elementy `<marquee>` lub animowane GIFy, później Flash stworzył czego dusza zapragnęła, dziś korzystamy z dobrodziejstw JS i animacji CSS. Czy ktokolwiek zatrzymał się jednak na chwilę i pomyślał, czy każdemu użytkownikowi przesadzone animacje odpowiadają?

Aż [do 35% dorosłych powyżej wieku 40 lat](https://vestibular.org/understanding-vestibular-disorder) doświadczyło jakiejś formy zaburzenia przedsionka ucha wewnętrznego, które służy wykrywaniu pozycji głowy lub odczuwaniu przyspieszenia w aucie czy windzie ([propriocepcji](https://pl.wikipedia.org/wiki/Propriocepcja)). Niespodziewany, szybki ruch jest w stanie u takich osób wywołać zawroty głowy i nudności.

Dzięki nowej regule `prefers-reduced-motion` ([w MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)) możemy ograniczyć lub wyłączyć potencjalnie szkodliwe animacje dla osób, które tę regułę w swoim systemie zdefiniowały.
Mamy tu do wyboru dwie wartości: `no-preference` oraz `reduce`.

Według podejścia [progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) należałoby zdefiniować style najpierw bez animacji by następnie dodać je dla użytkowników, którym one nie przeszkadzają, np. tak:

```css
.element {
  // brak animacji
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

## Kolory

Dark mode stał się ostatnio tak popularny, że mało jest już stron czy aplikacji desktopowych nie dających swoim użytkownikom możliwości wybrania między ciemnym i jasnym motywem.

https://www.nngroup.com/articles/dark-mode/

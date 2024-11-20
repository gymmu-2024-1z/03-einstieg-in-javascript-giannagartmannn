import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
    } else {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //count
      // wir geben hier den Auftrag "e" zu erkennen und zu zählen
      result.push(currentElement)
    } else if (currentElement === "E") {
      //count
      //wir zählen ebenfalls ein "E"
      result.push(currentElement)
    }
  }
  return result.length
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe05(args) {
  const input = args
  const result = []
  let count = 0
  // Zähle alle Grossbuchstaben im Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn es ein Sonderzeichen ist, mache nichts
    if (currentElement === ".") {
      // ignorieren
      // ignoriere auch Punkte
    } else if (currentElement === ".") {
      // ignorieren
    } else if (currentElement === currentElement.toUpperCase()) {
      count = count + 1
    }
  }
  return count
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) {
      // okay, mache weiter
      // wir suchen den ASCII-Wert von Zahlen
    } else if (ascii >= 65 && ascii <= 90) {
      // okay, mache weiter
      // wir suchen den ASCII-Wert von Grossbuchstaben
    } else if (ascii >= 97 && ascii <= 122) {
      // okay, mache weiter
      // wir suchen den ASCII-Wert von Kleinbuchstaben, damit wir nichts machen, falls diese vorkommen
    } else {
      return true
    }
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const currentElement = args
  const result = []
  let count = 0

  for (let i = 0; i < currentElement.length; i++) {
    // Finde heraus, ob sich das Wort und befindet sich an der Stelle i
    if (
      currentElement[i] === "u" &&
      currentElement[i + 1] === "n" &&
      currentElement[i + 2] === "d"
      //Ich gebe es so ein, dass nicht nur die Buchstbaen einzeln gezählt werden, sondern das ganze Wort
    ) {
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const currentElement = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    if (currentElement === "e") {
      result.push(3)
    } else if (currentElement === "E") {
      result.push(3)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  //prüfe ob der Text genau 6 Zeichen lang ist
  const input = args
  const result = []
  if (input.length === 6) {
    //Wir geben es so ein,falls der vorhandene Text 6 Zeichen lang ist
    return "Ja"
  } else {
    return "Nein"
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    // teste, ob die Eingabe ein korrekter RGB Hexcode ist
    if (input[i] === "#") {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // suche die position des ersten "e"s im Text
    if (input[i] === "e") {
      return i
    } else {
      return +1

      //in informatik beginnen wir das Zählen bei 0
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {}

linkupExerciseHandler("[data-click=aufgabe13]")

export function aufgabe19(args) {
  const input = args
  const result = []
  //wenn du ein Zeichen findest
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn du einen Buchstaben findest
    if (currentElement >= "a" && currentElement <= "z") {
      //verdopple sie
      result.push(currentElement + currentElement)
      //hier wird eigentlich einfach das Element plus nochmal das Element zusammengefügt (bspw. a + a = aa)
    }
  }
  return result.join(" ")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe27(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 48 && ascii <= 57) {
      //wir geben den ASCII-Wert von Zahlen ein, um diese zu erkennen und dann beim nächsten Schritt als true kennzuzeichnen
      return true
      // wenn es eine Zahl ist, wird uns true angezeigt
    } else {
      return false
      //wenn nicht, false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

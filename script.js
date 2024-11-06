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
      result.push(currentElement)
    } else if (currentElement === "E") {
      //count
      result.push(currentElement)
    }
  }
  return result.length
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (condition) {
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

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

linkupExerciseHandler("data-click=aufgabe05", aufgabe05)

export function aufgabe06(args) {
  const currentElement = args
  const result = []
  let count = 0
  // Zähle alle Sonderzeichen im Text
  for (let i = 0; i < currentElement.length; i++) {
    const currentElement = currentElement[i]
    // Zähle alle Sonderzeichen im Text
    if (currentElement === ".") {
      // Zähle das current Element
      count = count + 1
    }
  }
  return count
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
    ) {
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args){
const input = args
const result = []

for(let i =0; i<input.length; i++){




}
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

export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      // Grossbuchstaben
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Kleinbuchstaben
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
      // Result ist quasi eine gefilterte Liste, in der uns nur noch das angegeben wird, was wir wollen (also vorher it dem ASCII-Code bestimmt haben)
    }
  }

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]
    if (currentElement === " " && nextElement === " ") {
      // hier sind zwei Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  return count + 1
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
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ein gleichheitszeichen weist zu
    if (currentElement === "e") {
      //drei gleichheitszeichen bedeuten, dass es genau das sein muss
      result.push(3)
      //das resultat bei "e" soll 3 sein
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

  if (input[0] === "#") {
    // die erste Stelle ist die Stelle 0, diese muss # sein, um ein korrekter RGB Hexcode zu sein
  } else {
    return false
  }

  if (input.length === 7) {
    // ist okay, können weiter machen
  } else {
    return false
  }

  for (let i = 1; i < input.length; i++) {
    // teste, ob die Eingabe ein korrekter RGB Hexcode ist
    const ascii = input[i].charCodeAt(0)
    if ((ascii >= 48 && ascii <= 57) || (ascii >= 65 && ascii <= 70)) {
      // wir wählen die Zahlen von 0 bis 9 und die Grossbuchstaben von A bis F, da nur diese in RGB Hexcodes vorkommen können
    } else {
      return false
    }
  }

  return true
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

export function aufgabe14(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

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
  return result.join("")
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

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // falls also das current element ein punkt ist
      if (input[i + 1] === ".") {
        return true
        //soll uns "true" angezeigt werden
      } else {
        //wenn es kein punkt ist
        return false
        //soll uns false angezeigt werden
      }
    }
  }
  return result.join(" ")
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = input.length - 1; i >= 0; i--) {
    //wir gehen von hinten nach vorne, indem wir mit dem -1 bei input.lenghth von hinten beginnen
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let foundk = false //wir prüfen, ob k bereits gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (foundk) {
      //falls k gefunden wurde, bleiben die Zeichen unverändert
      result.push(currentElement)
    } else if (ascii >= 32 && ascii <= 94) {
      //wir geben den ASCII-Wert von Zahlen, Sonderzeichen ausser _ ein, um diese zu erkennen
      //wäre nicht nötig gewesen "_" auszulassen, da ich es später in der Aufgabe nicht mit seinem ASCII-Wert verwendet habe
      result.push("_")
    } else if (ascii >= 96 && ascii <= 106) {
      // wir geben den ASCII-Wert von einem Sonderzeichen und den Kleinbuchstaben  a bis j ein, um diese zu erkennen
      result.push("_")
    } else if (ascii >= 108 && ascii <= 126) {
      // wir geben den ASCII-Wert von den Kleinbuchstaben l bis z und einigen Sonderzeichen ein, um diese zu erkennen
      result.push("_")
    } else if (ascii === 107) {
      // wir geben den ASCII-Wert von den Kleinbuchstaben k ein, um diese zu erkennen
      result.push("k")
      foundk = true
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe29(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //verdoplle sie
      result.push(currentElement + currentElement)
    } else if (currentElement === "E") {
      //verdopple sie
      result.push(currentElement + currentElement)
      //Element + Element
    } else {
      result.push(currentElement)
      //alle anderen Zeichen bleiben unverändert
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=eigeneaufgabe]", aufgabe29)

export function eigeneaufgabe24(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=eigeneaufgabe]", eigeneaufgabe24)

export function bubbleSort(args) {
  const input = args
  const result = []

  return result.join("")
}
linkupExerciseHandler("[data-click=bubbleSort]", bubbleSort)

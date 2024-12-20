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
    } else if (ascii === 32) {
      // okay, mache weiter
    } else {
      return true
      //wenn Sonderzeichen gefunden wurden
    }
  }
  return false
  //keine Sonderzeichen wurden gefunden
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
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }
  if (input.length === 6) {
    //Wir geben es so ein, falls der vorhandene Text 6 Zeichen lang ist
    return true
  } else {
    return false
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

export function aufgabe13(args) {
  for (let i = input.length - 1; i >= 0; i--) {
    // -- um von hinten zu zählen
    if (input[i] === "e") {
      return i // gibt uns die position des letzten e's zurück
    }
  }
  return -1 //wir geben -1 zurueck, wenn es keine e's gibt
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //wir definieren das current Element mir const
    if (currentElement === "e") {
      count++
      if (count === 3) {
        //drei gleichheitszeichen bedeuten, dass es genau das sein muss
        return i // gib die Position des dritten e's zurück
      }
    }
  }
  return -1 //wir geben -1 zurück, wenn weniger als 3 e's vorkommen
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe17(args) {
  const input = args
  const totalist = []
  const currentlist = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wir zählen in die Eingabe (also "einfach nur text..." oder was auch immer wir sonst dort eingeben)

    // Sobald wir ein Leerzeichen treffen, beginnt die Liste

    if (currentElement === " ") {
      totalist.push(currentlist.join(""))
      //totalist.push heisst, dass wir an die totaliste anhängen
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
      //wenn es kein Leerzeichen hat, hängen wir einfach an
    }
  }
  //Wir schreiben alles was wir bis zum Ende eingelesen haben in die Liste herein
  totalist.push(currentlist.join(""))
  return totalist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  //wwir verwenden Aufgabe 17, um eine Liste zu erstellen
  const result = []
  result.push("Sie heissen ")
  //wir hängen diese Teil an (man kann mehrere Zeichen anfügen)
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")
  return result.join("")
  //wir geben das result als Text zurück
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

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
    } else {
      result.push(currentElement)
      //wenn die Zeichen keine kleinbuchstaben sind, bleiben sie unverändert
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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === ".") {
      // falls also das current element ein punkt ist
      if (input[i + 1] < input.length && input[i + 1] === " ") {
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

export function aufgabe23(args) {
  const input = args
  //das ist die Eingabe, die wir bearbeiten wollen (also "einfach nur text..." (ausser, wir ändern die Eingabe zu etwas beliebigem))
  const result = []
  //dort werden die Ergebnisse gespeichert

  if (input.length > 0) {
    const firstElement = input[0] //das erste Zeichen wird gespeichert
    result.push(firstElement + firstElement) //das erste Zeichen wird also verdoppelt

    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
    result.push(firstElement) // füge das erste Zeichen auch am Ende hinzu
  }
  return result.join("")
  //füge das Zeichen am ende hinzu
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe29(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    //wir gehen die Eingabe durch
    const currentElement = input[i]
    // und schauen jedes Zeichen individuell an
    if (currentElement === "e") {
      //falls es ein e ist (wir verwenden 3 gleichheitszeichen wenn das currentElement exakt das folgende, in diesem fall "e" ist)
      //wir verdoppeln die e's dann
      result.push(currentElement + currentElement)
      // e ist das currentElement. wir machen also e + e
    } else if (currentElement === "E") {
      //bei grossen E's dasselbe
      result.push(currentElement + currentElement)
      //Element + Element (In diesem Fall E + E)
    } else {
      result.push(currentElement)
      //alle anderen Zeichen bleiben unverändert
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)
export function aufgabe30(args) {
  const input = args
  const result = []

  let word = "" // wir sammeln jedes Wort zwischen Leerzeichen

  for (let i = 0; i < input.length; i++) {
    // Wir durchlaufen den Text, Zeichen für Zeichen.
    const currentElement = input[i]

    if (currentElement === " ") {
      //  // Wenn es ein Leerzeichen hat, beginnen wir nachher ein neues Wort
      if (word.length > 0) {
        result.push(word) // Das Wort wird also an die Liste (unser Resultat nachher, sbald wir den Button klicken) angehängt
        word = ""
      }
    } else {
      word += currentElement // Wenn es kein Leerzeichen hat, gehört das aktuelle Zeichen zum Wort
    }
  }

  if (word.length > 0) {
    result.push(word)
    // Das letzte Word muss hinzugefügt werden, da es dahinter kein Leerzeichen hat
  }
  const reversedWords = result.map((word) => {
    return word.split("").reverse().join("") // Dreht jedes Wort um
  })

  return reversedWords.join(" ")
}

linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //wir gehen die ganze eingabe urch, um es zu analysieren
    const currentElement = input[i].toLowerCase() // Wir machen den Buchstaben klein, um die Vokale zu erkennen
    let replacement = currentElement

    if (currentElement === "a") {
      replacement = 1 // A -> 1
    } else if (currentElement === "e") {
      replacement = 5 // E -> 5
    } else if (currentElement === "i") {
      replacement = 9 // I -> 9
    } else if (currentElement === "o") {
      replacement = 15 // O -> 15
    } else if (currentElement === "u") {
      replacement = 21 // U -> 21
    }
    //Wir prüffen, ob das aktuelle Zeichen ein Vokal ist und ersetyen es durch seinen Stellenwert im Alphabet, welche wir angegeben haben (A -> 1)
    result.push(replacement)
    // Das Replacement ist der jeweilige Stellenwert der Vokale im Alphabet
  }

  return result.join("")
  //die von uns bearbeitete Eingabe (Der Text) wird uns als Resultat angegeben
}

linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)

export function aufgabe24(args) {
  const input = args
  if (input.length <= 1) {
    return input
    //falls die eingabe nur ein zeichen hat, bleibt es unverändert
  }
  const result = []

  const firstElement = input[0]
  //bei 0 beginnen wir beim Zählen
  const lastElement = input[input.length - 1]
  //mit -1 zählen wir von hinten an

  result.push(lastElement)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    //alle Zeichen zwischen der ersten und letzten bleiben unverändert
  }

  result.push(firstElement)
  //das erste zeichen wird nochmals angefügt
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function bubbleSort(args) {
  // Sicherstellen, dass die Eingabe eine Liste ist
  const text = args
  const list = text.split("") // Erzeugt eine Kopie des Eingabearrays
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // Starte von vorne, wenn etwas vertauscht wurde
    }
  }
  const result = list.join("") // Konvertiert die sortierte Liste in einen String

  return result
}

linkupExerciseHandler("[data-click=BubbleSort]", bubbleSort)

export function selectionSort(args) {
  // Clone the input array to preserve the original array
  const input = [...args]

  for (let i = 0; i < input.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[minIndex]) {
        minIndex = j
      }
    }

    // Swap input[i] and input[minIndex]
    const temp = input[i]
    input[i] = input[minIndex]
    input[minIndex] = temp
  }

  return input
}

linkupExerciseHandler("[data-click=SelectionSort]", selectionSort)

export function radixSort(args) {}
linkupExerciseHandler('[data-click="radixSort"]', radixSort)

function harmlessRansomNote(noteText, magazineText) {
  var noteArray = noteText.split(" ");
  var magazineArray = magazineText.split(" ");

  magazineArray.forEach(word => {
    if (!magazineArray[word]) {
      magazineArray[word] = 0;
    }

    magazineArray[word]++;
  });

  var noteIsPossible = true;

  noteArray.forEach(word => {
    if (!magazineArray[word]) {
      noteIsPossible = false;

    } else {
      magazineArray[word]--;
      if(magazineArray[word] < 0) {
        noteIsPossible = false;
      }
    }
  });

  console.log(noteIsPossible);
  return noteIsPossible;
}

export default harmlessRansomNote;

function solution2(card, word) {
  const ans = [];
  for (const w of word) {
      const checker = card.map(arr => [...arr].map(c => false));
      let exist = true;
      for (let i = 0; i < w.length; i++) {
          let notExist = true;
          for (let j = 0; j < 3; j++) {
              if (card[j].includes(w[i])) {
                  const index = [...card[j]].findIndex((x, cIndex) => x === w[i] && (checker[j][cIndex] === false));
                  if (index > -1) {
                      checker[j][index] = true;
                      notExist = false;
                  }
              }
          }
          if (notExist) {
              exist = false;
              continue;
          }
      }

      if (checker.filter(arr => arr.filter(x => x).length > 0).length === 3 && exist) {       
          ans.push(w)
      }
  }
  return ans.length > 0 ? ans : ["-1"]
}
const testCases = [
  { time: 7, earning: 3000 },
  { time: 8, earning: 4500 },
  { time: 13, earning: 16500 },
];

const establishments = [
  { name: "T", time: 5, earning: 1500, size: 2 },
  { name: "P", time: 4, earning: 1000, size: 1 },
  { name: "C", time: 10, earning: 3000, size: 6 },
];

function recommendEstablishment(requirement) {
  let result = [];
  let remainingTime = requirement.time;
  let remainingEarning = requirement.earning;

  while (remainingTime > 0 && remainingEarning > 0) {
    let maxEstablishment = null;
    let maxEarnings = 0;
    for (let i = 0; i < establishments.length; i++) {
      let establishment = establishments[i];
      let maxEstablishments = Math.floor(remainingTime / establishment.time);
      let maxEarning = maxEstablishments * establishment.earning;
      if (maxEarning > maxEarnings) {
        maxEstablishment = establishment;
        maxEarnings = maxEarning;
      }
    }
    if (!maxEstablishment) break;
    let maxEstablishments = Math.floor(remainingTime / maxEstablishment.time);
    let maxEarning = maxEstablishments * maxEstablishment.earning;
    if (maxEarning > remainingEarning) {
      maxEarning = remainingEarning;
      maxEstablishments = Math.floor(maxEarning / maxEstablishment.earning);
    }
    remainingTime -= maxEstablishment.time * maxEstablishments;
    remainingEarning -= maxEarning;
    let solution = { T: 0, P: 0, C: 0 };
    solution[maxEstablishment.name] = maxEstablishments;

    result.push(solution);
  }

  console.log(result);
  return result;
}

for (let i = 0; i < testCases.length; i++) {
    recommendEstablishment(testCases[i]);
}


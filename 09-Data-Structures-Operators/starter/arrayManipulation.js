const lunches = ['Kabab', 'Qabili', 'Palaw'];

function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(lunchItem + ' added to the end of the lunch menu.');
  return lunches;
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(lunchItem + ' added to the start of the lunch menu.');
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches to remove.');
    return;
  }

  const removedLunch = lunches.pop();
  if (removedLunch) {
    console.log(removedLunch + ' removed from the end of the lunch menu.');
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches to remove.');
    return;
  }
  const removedLunch = lunches.shift();
  if (removedLunch) {
    console.log(removedLunch + ' removed from the start of the lunch menu.');
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches available.');
    return;
  }
  const randomSelectedLunch =
    lunches[Math.floor(Math.random() * lunches.length)];
  console.log('Randomly selected lunch: ' + randomSelectedLunch);
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log('The menu is empty.');
    return;
  }

  console.log('Menu items: ' + lunches.join(', '));
}
showLunchMenu(lunches);

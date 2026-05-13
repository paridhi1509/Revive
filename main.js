// ================================================
// REVIVE — Mood Tracker & Journal Engine
// ================================================

const date = new Date();
const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
const nameOfMonth = date.toLocaleString('en-US', { month: 'long' });
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = date.toLocaleDateString('en-US', options);

function getNumberOfDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function daysIntoYear(date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

const thisMonthsNumberOfDays = getNumberOfDays(year, month);
const yearProgress = Math.floor(daysIntoYear(date) / 365 * 100);

// Update DOM
document.getElementById('datedisplay').textContent = today;
document.getElementById('yearProgress').style.width = `${yearProgress}%`;
document.getElementById('yearProgress').textContent = `${yearProgress}%`;
document.getElementById('lastDays').textContent = `${365 - daysIntoYear(date)}`;
document.getElementById('moodBlock-month').textContent = nameOfMonth;

// Ordinal suffix
function ord(n) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

// Random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// --- Mood Grid ---
const moodContainer = document.getElementById('moodContainer');
const moodArray = ['Very Tough', 'Difficult', 'Average', 'Great', 'Amazing'];
const currentMoodArray = [0, 0, 0, 0, 0];
let countMood = 0;

// Load saved mood data from localStorage
const savedMoodData = JSON.parse(localStorage.getItem('revive_mood_data') || '{}');
const currentMonthKey = `${year}-${month}`;

for (let i = 1; i <= thisMonthsNumberOfDays; i++) {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';
  gridContainer.id = 'gridContainer-' + i;

  const blockRowDate = document.createElement('div');
  blockRowDate.textContent = i;

  gridContainer.appendChild(blockRowDate);

  for (let j = 1; j <= 6; j++) {
    let moodId = 0;
    const gridItem = document.createElement('div');

    gridItem.setAttribute('title', `${ord(i)} of ${nameOfMonth}`);

    // Check if we have saved data for this cell
    const cellKey = `${i}-${j}`;
    const savedMood = savedMoodData[currentMonthKey]?.[cellKey];

    if (savedMood) {
      moodId = savedMood;
      currentMoodArray[moodId - 1] += 1;
      countMood++;
    } else if (i < day) {
      // Generate random moods for past days
      if (j < 4) {
        moodId = random(3, 5);
      } else if (j < 7) {
        moodId = random(2, 5);
      }
      if (moodId > 0) {
        currentMoodArray[moodId - 1] += 1;
        countMood++;
        // Save generated data
        if (!savedMoodData[currentMonthKey]) savedMoodData[currentMonthKey] = {};
        savedMoodData[currentMonthKey][cellKey] = moodId;
      }
    }

    const timeLabels = ['', 'morning', 'morning', 'morning', 'afternoon', 'afternoon', 'night'];
    if (moodId > 0) {
      gridItem.setAttribute('title', `My ${timeLabels[j] || ''} was ${moodArray[moodId - 1]}`);
    }

    gridItem.id = `gi-${i}-${j}`;

    if (i === day) {
      gridItem.className = `grid-item moodType-${moodId} grid-item-today`;
    } else {
      gridItem.className = `grid-item moodType-${moodId}`;
    }

    gridContainer.appendChild(gridItem);
  }

  moodContainer.appendChild(gridContainer);
}

// Save mood data
localStorage.setItem('revive_mood_data', JSON.stringify(savedMoodData));

// Update legend percentages
if (countMood > 0) {
  for (let i = 0; i < 5; i++) {
    document.getElementById(`percentage-${i}`).textContent = (currentMoodArray[i] / countMood * 100).toFixed(0) + '%';
    document.getElementById(`ratio-${i}`).textContent = `${currentMoodArray[i]} / ${countMood}`;
  }
}

// --- Mood Click Cycling ---
const gridCycler = document.querySelectorAll('.grid-item');
gridCycler.forEach(item => {
  item.addEventListener('click', function () {
    const currentClasses = Array.from(this.classList);
    const moodClass = currentClasses.find(c => c.startsWith('moodType-'));
    const currentMood = moodClass ? parseInt(moodClass.split('-')[1]) : 0;
    const nextMood = currentMood >= 5 ? 1 : currentMood + 1;

    if (moodClass) this.classList.remove(moodClass);
    this.classList.add(`moodType-${nextMood}`);
    this.setAttribute('title', `Mood: ${moodArray[nextMood - 1]}`);

    // Save to localStorage
    const idParts = this.id.split('-');
    const cellKey = `${idParts[1]}-${idParts[2]}`;
    if (!savedMoodData[currentMonthKey]) savedMoodData[currentMonthKey] = {};
    savedMoodData[currentMonthKey][cellKey] = nextMood;
    localStorage.setItem('revive_mood_data', JSON.stringify(savedMoodData));
  });
});

// --- Journal ---
const journalEntries = document.getElementById('journalEntries');
const journalEmpty = document.getElementById('journal-empty');
const newJournalDate = document.getElementById('newjournalInputDate');
newJournalDate.textContent = `${day}/${month + 1}, ${year}`;

// Load saved journals
let journals = JSON.parse(localStorage.getItem('revive_journals') || '[]');

function createJournalDOM(entry) {
  if (journalEmpty) journalEmpty.style.display = 'none';

  const el = document.createElement('div');
  el.className = 'journal-entry';
  el.innerHTML = `
    <div class="journal-entry-date">${entry.date}</div>
    <div class="journal-entry-title">${entry.title}</div>
    <div class="journal-entry-content">${entry.content}</div>
  `;
  journalEntries.appendChild(el);
}

// Render saved journals
journals.forEach(j => createJournalDOM(j));

// Form submit
const formNewJournal = document.getElementById('form-newJournal');
formNewJournal.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('input-title').value.trim();
  const content = document.getElementById('input-journal').value.trim();
  const dateStr = `${day}/${month + 1}/${year}`;

  const entry = { date: dateStr, title, content };
  journals.push(entry);
  localStorage.setItem('revive_journals', JSON.stringify(journals));
  createJournalDOM(entry);

  // Clear form
  document.getElementById('input-title').value = '';
  document.getElementById('input-journal').value = '';

  // Scroll to bottom of entries
  journalEntries.scrollTop = journalEntries.scrollHeight;
});

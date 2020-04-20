function getSort(target) {
    const order = target.getAttribute('order');
    const thList = Array.from(target.parentNode.cells);
    const index = thList.indexOf(target);
    const collator = new Intl.Collator(["en", "ru"], {
        numeric: true
    });

    const comparator = (idx, ordr) => (a, b) => {
        return (
            ordr *
            collator.compare(a.children[idx].textContent, b.children[idx].textContent)
        );
    };
    const tableBody = Array.from(target.closest("table").tBodies);
    tableBody[0].append(...Array.from(tableBody[0].rows).sort(comparator(index, order)));
    thList.forEach(th => th.classList.toggle("sorted", th === target));
}

export default function createTable() {

    const localStorageCardsData = JSON.parse(localStorage.getItem("cardsStat"));
    const tableMenu = ['Word', 'Category', 'Translate', 'Train clicks', 'Correct answer', 'Error answer', '% of errors'];
    const statWrapper = document.createElement('div');
    statWrapper.classList.add('statistics-wrapper');
    const controls = document.createElement('div');
    controls.classList.add('controls');
    const repeatWordsBtn = document.createElement('button');
    repeatWordsBtn.classList.add('controls__repeat-word-btn');
    repeatWordsBtn.textContent = 'Repeat difficult words';
    const resetStatBtn = document.createElement('button');
    resetStatBtn.classList.add('controls__reset-stat-btn');
    resetStatBtn.textContent = 'Reset Statistics';
    controls.append(repeatWordsBtn, resetStatBtn);

    const table = document.createElement('table');
    table.classList.add('table-stat');
    const tHead = document.createElement('thead');
    const tHeadRow = document.createElement('tr');
    tableMenu.forEach(elem => {
        const th = document.createElement('th');
        th.textContent = elem;
        tHeadRow.append(th);
    })
    tHead.append(tHeadRow);
    const tBody = document.createElement('tbody');
    table.append(tHead, tBody);

    Object.keys(localStorageCardsData).forEach(category => {
        if (category !== 'Main Page') {
            const categoryName = category;
            localStorageCardsData[category].forEach(wordObject => {
                const row = document.createElement('tr');
                const word = document.createElement('td');
                word.textContent = wordObject.word;
                const categoryField = document.createElement('td');
                categoryField.textContent = categoryName;
                const translate = document.createElement('td');
                translate.textContent = wordObject.translation;
                const clicks = document.createElement('td');
                clicks.textContent = wordObject.click;
                const successClick = document.createElement('td');
                successClick.textContent = wordObject.ok;
                const badClick = document.createElement('td');
                badClick.textContent = wordObject.bad;
                const persentOfErrors = document.createElement('td');
                persentOfErrors.textContent = `${(wordObject.bad/((wordObject.bad+wordObject.ok)===0 ? 1 : (wordObject.bad+wordObject.ok)) * 100).toFixed(2)}%`;
                row.append(word, categoryField, translate, clicks, successClick, badClick, persentOfErrors)
                tBody.append(row);
            })
        }
    })

    tHead.addEventListener('click', evt => {
        evt.target.setAttribute('order', -(evt.target.getAttribute('order') || -1));
        getSort(evt.target)
    });

    statWrapper.append(controls, table);
    return statWrapper;

}
var gTrans = {
    'title': {
        en: 'Books Shop',

        he: 'חנות ספרים'
    },
    'actions': {
        en: 'actions',

        he: 'פעולות',
    },
    'filter-active': {
        en: 'Active',

        he: 'פעיל'
    },
    'holder-name': {
        en: 'name of the new book',

        he: 'שם הספר החדש'

    },
    'holder-price': {
        en: 'price of the new book',

        he: 'מחיר הספר החדש'

    },
    'image': {
        en: 'image',

        he: 'תמונה',
    },
    'new-book': {
        en: 'create book',

        he: 'יצירת ספר',
    },
    read: {
        en: 'read',

        he: 'קרא',
    },
    delete: {
        en: 'delete',

        he: 'מחק',
    },
    update: {
        en: 'update',

        he: 'עדכן',
    },
    id: {
        en: 'id',

        he: 'מספר זיהוי',
    },
    name: {
        en: 'name',

        he: 'שם',
    },
    'next-page': {
        en: 'next page',

        he: 'עמוד הבא',
    },
    'prev-page': {
        en: 'previous page',

        he: 'עמוד הקודם',
    },

    rate: {
        en: 'rate',

        he: 'דירוג',
    },
    close: {
        en: 'close',

        he: 'סגור',
    },
    'title-price': {
        en: 'price',

        he: 'מחיר',
    },
    'title-2': {
        en: 'name of the book :',
        he: 'שם הספר:'
    },
    price: {
        en: 'price :',
        he: 'מחיר'
    },
    'txt': {
        en: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut nihil temporibus quasi vero consectetur dolor maiores fuga optio placeat quis illum, error saepe voluptates ea deserunt iure voluptas dolorum.',

        he: 'חבשה חבשה חבשה חבשה',
    }
}

var gCurrLang = 'en';

function getTrans(transKey) {
    // if key is unknown return 'UNKNOWN'
    if (!gTrans[transKey]) return 'UNKNOWN'
    var transMap = gTrans[transKey];
    var trans = transMap[gCurrLang];
    // If translation not found - use english
    if (!trans) trans = transMap['en']
    return trans;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i]
        var transKey = el.dataset.trans;
        var trans = getTrans(transKey);

        if (el.nodeName === 'INPUT') el.placeholder = trans
        else el.innerText = trans;
    }
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}



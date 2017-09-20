import moment from 'moment';
import { resolveBrowserLocale } from 'admin-on-rest';

const messages = {
  // FRENCH
  fr: {
    fg: {
      created_on: 'Créé le',
      due_date: 'Echéance',
      work_in_progress: 'Travaux en cours',
      assigned_issues_tasks: 'Mes tickets/tâches assignés',
      unassigned_issues_tasks: 'Les tickets/tâches non-assignés',
    },
    resources: {
      users: {
        name: 'Travaux en cours',
        fields: {
          full_name: 'Nom',
          tasks_issues: 'Tâches/Tickets',
        }
      },
      issues: {
        name: 'Tickets assignés'
      },
      tasks: {
        name: 'Tâches assignées'
      }
    }
  },

  // ENGLISH
  en: {
    fg: {
      created_on: 'Created on',
      due_date: 'Due date',
      work_in_progress: 'Work in progress',
      todo_list: 'Todo',
      assigned_issues_tasks: 'Assigned issues/tasks',
      unassigned_issues_tasks: 'Unassigned issues/tasks',
    },
    resources: {
      users: {
        name: 'Work in progress',
        fields: {
          full_name: 'Name',
          tasks_issues: 'Tasks/Issues',
        }
      },
      issues: {
        name: 'Assigned Issues'
      },
      tasks: {
        name: 'Assigned Tasks'
      }
    }
  },

  // GERMAN
  de: {
    fg: {
      created_on: 'Erstellt am',
      due_date: 'Fällig am',
      work_in_progress: 'Übersicht alle Benutzer',
      todo_list: 'Todo',
      assigned_issues_tasks: 'Aufgabe/Problem',
      unassigned_issues_tasks: 'Nicht zugewiesene Probleme/Aufgaben',
    },
    resources: {
      users: {
        name: 'Übersicht',
        fields: {
          full_name: 'Name',
          tasks_issues: 'Aufgabe/Problem',
        }
      },
	   issues: {
        name: 'Tickets'
      },
      tasks: {
        name: 'Aufgaben'
      }
    }
  }
}

export default messages;

moment.locale('fr', {
  months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact: true,
  weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === 'M';
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12 ? 'PD' : 'MD';
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});

moment.locale('de', {
    months: 'Jaunar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dientag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[heute um}] LT',
      nextDay: '[morgen um] LT',
      nextWeek: 'dddd [in] LT',
      lastDay: '[Gestern um] LT',
      lastWeek: 'dddd [vor dem] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'einigen Sekunden',
      m: 'eine Minute',
      mm: '%d Minuten',
      h: 'eine Stunde',
      hh: '%d Stunden',
      d: 'eine Woche',
      dd: '%d Wochen',
      M: 'ein Monat',
      MM: '%d Monate',
      y: 'ein Jahr',
      yy: '%d Jahre'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
  });

export const momentLocale = () => {
  const available = moment.locales();
  const browser = resolveBrowserLocale();
  if (available.indexOf(browser) > 0) {
    return browser;
  }
  return 'en';
}

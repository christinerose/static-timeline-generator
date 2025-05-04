const moment = require('moment');

const sentenceCase = function (str) {
  if (typeof str !== 'string' || !str.length) {
    return str;
  }
  str = str.replace(/-/g, ' ');
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const humanizeDate = function (datetime, date) {
  const m = moment(datetime || date);
  if (datetime) {
    return m.format('LLL');
  }
  return m.format('LL');
};

const rssDate = function (datetime, date) {
  const m = moment(datetime || date);
  if (datetime) {
    return m.format('ddd, DD MMM YYYY HH:mm:ss ZZ')
  }
  return m.format('ddd, DD MMM YYYY') + ' 00:00:00 GMT';
};

const isWrappedInParagraphTags = function (html) {
  if (typeof html !== 'string') {
    return false;
  }
  return html.substring(0, 3) === '<p>';
};

const isInDateFilter = function(dateString, filteredDateRange) {
  if (filteredDateRange === 'all' || filteredDateRange === '') {
    return true;
  }
  if (filteredDateRange === 'first') {
    return dateString < '2025-04-30';
  }
  if (filteredDateRange === 'second') {
    return dateString >= '2025-04-30';
  }
  return false;
}

module.exports = {
  sentenceCase,
  humanizeDate,
  rssDate,
  isWrappedInParagraphTags,
  isInDateFilter
};

const header = 'America is Going Just Great';
const footer = 'Compiled by Christine Rose';
const entries = [

  //LGBTQ+ = rainbow
  //Immigration = plane
  //Courts = landmark
  //Racism = person
  //Religion = cross
  //Women = venus
  //Project_2025 = hammer
  //Jan6th = skull
  //Gun_violence = gun
  //Fascism = maximize

  {
    id: 'Jan6th',
    categories: ['Jan6th'],
    color: 'red',
    faicon: 'skull',
    datetime: '2025-01-24 14:00',
    title: 'Revisiting January 6th: The Truth in Motion',
    body: 'Uncovering the Lies, Confronting the Violence, and Standing Firm for Democracy',
    links: [
      {
        href: 'https://adamkinzinger.substack.com/p/revisiting-january-6th-the-truth',
        linkText: 'Adam Kinzinger',
      },
    ],
  },
 
  {
    id: 'Immigration',
    categories: ['Immigration', 'Resist'],
    color: 'green',
    faicon: 'plane',
    datetime: '2025-01-27 20:00',
    title: 'Quaker groups file suit over the end of policy restricting ICE arrests in houses of worship',
    body: 'A group of Quaker congregations is suing the Department of Homeland Security for changing a policy that prevented Immigration and Customs Enforcement agents from carrying out operations in so-called “sensitive locations” such as houses of worship, playgrounds, schools and hospitals without approval from supervisors.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/quaker-groups-file-suit-end-policy-restricting-ice-arrests-houses-wors-rcna189471',
        linkText: 'NBC News',
      },
    ],
  },
  {
    id: 'Immigration',
    categories: ['Immigration'],
    color: 'red',
    faicon: 'plane',
    datetime: '2025-02-08 16:55',
    title: 'A Tent City Is Rising at Guantánamo Bay',
    body: 'The Trump administration has moved more than 30 people described as Venezuelan gang members to the U.S. Navy base at Guantánamo Bay, as U.S. forces and homeland security staff prepare a tent city for potentially thousands of migrants.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/02/08/us/politics/guantanamo-bay-migrants.html',
        linkText: 'NYTimes',
      },
      {
        href: 'https://archive.is/BW59J',
        linkText: 'archive.is',
      },
    ],
  },

  {
    id: 'Courts+',
    categories: ['Courts'],
    color: 'red',
    faicon: 'landmark',
    datetime: '2025-02-09 23:00',
    title: 'Legal experts warn of \'\constitutional crisis\'\ as JD Vance and Elon Musk question judges\'\ authority over Trump',
    body: 'Vice President JD Vance wrote Sunday on X, \"\Judges aren’t allowed to control the executive\’\s legitimate power.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/white-house/legal-experts-constitutional-crisis-vance-musk-judicial-rulings-trump-rcna191387',
        linkText: 'NBC News',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Christine Rose'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};

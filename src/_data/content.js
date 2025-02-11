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
  //J6 = skull
  //Gun violence = gun
  //Fascism = exclamation
  //Resist = jedi
  //Climate = radiation
  //Health = virus

  {
    id: 'Paris_Accord',
    categories: ['Climate'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-01-21',
    title: 'Trump Is Once Again Quitting The Paris Climate Accords',
    body: 'President Donald Trump is once again withdrawing the United States from the Paris climate accords, pulling the nation whose factories, cars and power plants contributed the most cumulative planet-heating pollution to the atmosphere out of the first global pact to slash carbon emissions enough to prevent the world\’\s average temperature from reaching dangerous new heights.',
    links: [
      {
        href: 'https://www.huffingtonpost.co.uk/entry/trump-paris-climate_n_678e8350e4b099ed401ccbec',
        linkText: 'Huffington Post',
      },
    ],
  },

  {
    id: 'J6Freed',
    categories: ['J6'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-21',
    title: 'Former OC Police Chief, Prominent Activist And Jan. 6 Rioter Freed',
    body: 'The man who "collected weapons for Jan. 6 and called for executions of politicians," said, "We are just getting started," upon his release.',
    links: [
      {
        href: 'https://patch.com/california/sanclemente/s/j46g2/former-oc-police-chief-prominent-activist-and-jan-6-rioter-freed?utm_term=article-slot-2&utm_source=newsletter-daily&utm_medium=email&utm_campaign=newsletter&user_email=7365fa8a2d2ebabd5914fa405416324c85fd63134570ec45cbc1edadb8a0ff1f&user_email_md5=c899ca5813293dc5ba7ae6b69b42553f&lctg=51f98d901e240a9c3f2373aa',
        linkText: 'Patch',
      },
    ],
  },

  {
    id: 'AOC_Speech',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-01-23',
    title: 'Rep AOC Floor Speech - Laken Riley Act',
    body: 'Republicans are exploiting this moment to roll back civil liberties and write their wealthy friends in the private prison industry an $83 billion check.They aren\’\t working for you. They are lining their own pockets and hoping that drumming up immigrant panic will cover up their own profiteering. Excerpt: “When a prison camp opens in your town…when a DREAMer is disappeared from your classroom…when the President destroys what\’\s left of the Constitution…They will all say they didn\’\t know this was coming. And I want the American people to know that they did.”',
    links: [
      {
        href: 'https://www.youtube.com/watch?v=aH_gWH68glA',
        linkText: 'AOC YouTube',
      },
    ],
  },

  {
    id: 'Shut_School-Board',
    categories: ['Gun Violence'],
    color: 'red',
    faicon: 'gun',
    date: '2025-01-23',
    title: 'Trump Admin. Axes Newly Created School Safety Board',
    body: 'The Trump administration has disbanded a school safety board that was recently assembled to advise federal agencies on best practices to protect students.',
    links: [
      {
        href: 'https://www.edweek.org/policy-politics/trump-admin-axes-newly-created-school-safety-board/2025/01',
        linkText: 'ED Week',
      },
    ],
  },

  {
    id: 'J6_Revisited',
    categories: ['J6'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-24',
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
    id: 'Clean_Gaza',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'exclamation',
    date: '2025-01-26',
    title: 'Trump wants neighbours to take in Palestinians to \'\clean out\'\ Gaza',
    body: 'Describing Gaza as a "demolition site", Trump said: "You\'re talking about probably a million and a half people, and we just clean out that whole thing". He added that the move "could be temporary" or "could be long-term".',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c07kpjyzgllo',
        linkText: 'BBC',
      },
    ],
  },

 
  {
    id: 'Quaker_Suit',
    categories: ['Immigration', 'Resist'],
    color: 'green',
    faicon: 'plane',
    date: '2025-01-27',
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
    id: 'TentCity_Guantanamo',
    categories: ['Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-02-08',
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
    id: 'Vance-Musk_question-judge',
    categories: ['Courts'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-09',
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

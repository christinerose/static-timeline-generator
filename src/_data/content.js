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
  //Fascism = fire
  //Resist = jedi
  //Climate = radiation
  //Health = virus
  //Global = globe
  //Tiddlywinks = democrat

  {
    id: 'Paris_Accord',
    categories: ['Climate'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-01-21',
    title: 'Trump Is Once Again Quitting The Paris Climate Accords',
    body: 'Trump Is Once Again Quitting The Paris Climate Accords. Last time, quitting the Paris Agreement was largely symbolic. Not this time.',
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
    body: '“When a prison camp opens in your town…when a DREAMer is disappeared from your classroom…when the President destroys what\’\s left of the Constitution…They will all say they didn\’t know this was coming. And I want the American people to know that they did.”',
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
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-01-26',
    title: 'Trump wants neighbours to take in Palestinians to \'clean out\' Gaza',
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
    body: 'The suit challenges the removal of a policy that prevented ICE agents invading “sensitive locations” such as houses of worship, playgrounds, schools, and hospitals.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/quaker-groups-file-suit-end-policy-restricting-ice-arrests-houses-wors-rcna189471',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'DEI-Military',
    categories: ['LGBTQ', 'Racism', 'Discrimination'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-01-28',
    title: 'Trump takes aim at DEI, COVID expulsions and transgender troops',
    body: 'U.S. President Donald Trump signed a series of executive orders on Monday to remove diversity, equity and inclusion (DEI) from the military, reinstate thousands of troops who were kicked out for refusing COVID-19 vaccines during the pandemic, and take aim at transgender troops.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trump-order-end-dei-military-reinstate-troops-who-refused-covid-vaccines-hegseth-2025-01-27/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'DEI-Military',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-01-28',
    title: 'Democrats\' playbook for Trump 2.0: Tune out the noise and focus on economic issues',
    body: 'Democrats continue to play Tiddlywinks while the MAGA GOP play hardball. What else is new?',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/congress/democrats-playbook-trump-tune-noise-focus-economic-issues-rcna189180',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Trans-Suit',
    categories: ['LGBTQ'],
    color: 'green',
    faicon: 'rainbow',
    date: '2025-01-28',
    title: 'Rights groups file lawsuit against Trump\'s transgender troops order',
    body: 'Transgender rights advocacy groups filed a lawsuit on Tuesday against U.S. President Donald Trump\'s executive order that targeted transgender service members, in what would be the first legal challenge to a cornerstone of his conservative agenda at the Pentagon.',
    links: [
      {
        href: 'https://www.reuters.com/legal/rights-groups-preparing-file-lawsuit-against-trumps-transgender-troops-order-2025-01-28/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: '30k_Guantanamo',
    categories: ['Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-30',
    title: 'Trump to prepare facility at Guantanamo for 30,000 migrants',
    body: 'U.S. President Donald Trump said on Wednesday he will order the Pentagon and the Department of Homeland Security to prepare a migrant detention facility at Guantanamo Bay for as many as 30,000 migrants.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trump-says-he-will-instruct-homeland-security-pentagon-prepare-migrant-facility-2025-01-29/',
        linkText: 'Reuters',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c5yelgxk3rlo',
        linkText: 'BBC',
      },

      {
        href: 'https://thehill.com/homenews/5131164-trump-guantanamo-migrant-directive/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Fire-Fed_Workers',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-30',
    title: 'Trump\'s plan to reclassify, fire federal workers challenged by unions',
    body: 'Two major unions representing U.S. government employees filed a lawsuit on Wednesday aimed at slowing President Donald Trump\'s effort to reclassify up to 50,000 federal workers and make it easier to fire them.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trumps-plan-ease-firing-federal-workers-challenged-by-union-2025-01-29/',
        linkText: 'Reuters',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/c5yelgxk3rlo',
        linkText: 'BBC',
      },

      {
        href: 'https://thehill.com/homenews/5131164-trump-guantanamo-migrant-directive/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Musk-Force_Out_Workers',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-02',
    title: 'Exclusive: Musk aides lock workers out of OPM computer systems',
    body: 'Since taking office 11 days ago, President Donald Trump has embarked on a massive government makeover, firing and sidelining hundreds of civil servants in his first steps toward downsizing the bureaucracy and installing more loyalists.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/musk-aides-lock-government-workers-out-computer-systems-us-agency-sources-say-2025-01-31/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Flight_Lands-Guantanamo',
    categories: ['Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-02-04',
    title: 'Migrant flight lands in Guantanamo Bay as legal questions swirl around Trump plans',
    body: 'Tents went up in Guantanamo Bay to hold migrants. Attorneys at the DHS and Pentagon are yet to determine whether it was legal to take the unprecedented step of flying migrants from the US southern border to the facility.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/04/politics/guantanamo-migrant-flight/index.html',
        linkText: 'CNN',
      },
      {
        href: 'https://abcnews.go.com/Politics/1st-migrant-flight-heads-guantanamo-bay-carrying-worst/story?id=118456073',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: '1stGroup_Guantanamo',
    categories: ['Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-02-05',
    title: 'The first group of migrants has been sent to Guantánamo, but legal challenges loom',
    body: 'The Trump administration said Tuesday it has begun flying migrants from the U.S. to a temporary holding facility in Guantánamo Bay, Cuba, before deporting them to other countries, even though some lawyers question the legality of that move.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/04/nx-s1-5286579/donald-trump-migrants-guantanamo-legal-challenges-immigration',
        linkText: 'NPR',
      },
      {
        href: 'https://www.bbc.co.uk/news/articles/cy0p1ykxyzjo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Govt-Overhaul',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-06',
    title: 'What Trump has done to remake the US government so far',
    body: 'President Donald Trump has signed a series of executive orders and taken other actions since his inauguration on January 20 to remake and reduce the size of the United States\' 2.2 million-strong federal workforce.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/what-trump-has-done-remake-us-government-so-far-2025-01-30/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'TentCity_Guantanamo',
    categories: ['Immigration', 'Fascism'],
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
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-09',
    title: 'Legal experts warn of \'constitutional crisis\' as JD Vance and Elon Musk question judges\' authority over Trump',
    body: 'Vice President JD Vance wrote Sunday on X, \"Judges aren’t allowed to control the executive\’s legitimate power.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/white-house/legal-experts-constitutional-crisis-vance-musk-judicial-rulings-trump-rcna191387',
        linkText: 'NBC',
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

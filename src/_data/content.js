const header = '<p>America is Going Just Great<p><p class="subHeader">A timeline of America\'s descent into a fascist hellscape.</p>';
const footer = 'Compiled by <a href="christineroseauthor.com">Christine Rose</a>';
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
  //Education = scroll
  //Resist = jedi
  //Climate = radiation
  //Health = virus
  //Global = globe
  //Tiddlywinks = democrat

  {
    id: 'Patel-FBI',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Senate panel advances nomination of Kash Patel, Trump’s pick to lead the FBI',
    body: 'Patel has vowed to overhaul the FBI, turn its headquarters into a museum, and punish members of the so-called “deep state.”',
    links: [
      {
        href: 'https://apnews.com/article/trump-fbi-kash-patel-61610c5384536667eb112734465b0a19',
        linkText: 'AP',
      },

      {
        href: 'https://www.politico.com/live-updates/2025/02/13/congress/kash-patel-trump-fbi-00204035',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'DOJ-Resignations',
    categories: ['Resist', 'Project 2025'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Diagram: How the Justice Department Resignations Unfolded',
    body: 'More than half a dozen government attorneys have resigned since an order by the Trump administration’s Justice Department to drop charges against Mayor Eric Adams of New York City.',
    links: [
      {
        href: 'https://archive.is/JnWNy',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'RFK-Sworn-In',
    categories: ['Health', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-14',
    title: 'Vaccine skeptic Robert F. Kennedy Jr. is sworn in as Trump’s health chief after a close Senate vote',
    body: '"Kennedy faced opposition from the left for his decades of espousing conspiracy theories about vaccines and from the right for his past support of abortion rights."',
    links: [
      {
        href: 'https://apnews.com/article/rfk-trump-health-secretary-vote-5dbefeef0537dc241e6fb33b8f2a748b',
        linkText: 'AP',
      },

      {
        href: 'https://www.npr.org/sections/shots-health-news/2025/02/13/nx-s1-5294591/rfk-jr-trump-health-human-services-hhs-vaccines',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Utah-Nazi-Flag',
    categories: ['Fascism', 'LGBTQ', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-14',
    title: 'Nazi flags can fly in Utah schools, but not pride flags, GOP lawmaker says',
    body: 'A new bill would allow for Nazi and Confederate flags to be displayed in some instances in Utah schools and government buildings, but pride flags would be banned.',
    links: [
      {
        href: 'https://archive.is/2025.02.14-125336/https://www.sltrib.com/news/politics/2025/02/13/nazi-flags-can-fly-utah-school-not/#selection-261.0-261.162',
        linkText: 'The Salt Lake Tribune (via archive.is)',
      },
    ],
  },

  {
    id: 'Trump-Fires-Nuclear-Staff',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Trump officials fired nuclear staff not realizing they oversee the country\’s weapons stockpile',
    body: '“Congress is freaking out because it appears DOE didn’t really realize NNSA oversees the nuclear stockpile.”',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/14/climate/nuclear-nnsa-firings-trump/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Fire-Fed-Employees',
    categories: ['Fascism', 'Project 2025', 'Education'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-13',
    title: 'Scores of firings have begun at federal agencies',
    body: 'Terminations of probationary employees underway at the Department of Education and the Small Business Administration',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/12/politics/scores-of-firings-federal-agencies/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.reuters.com/world/us/mass-firings-federal-workers-begin-trump-musk-purge-us-government-2025-02-13/',
        linkText: 'Reuters',
      },

      {
        href: 'https://www.cnn.com/2025/02/12/politics/buyout-trump-federal-employee-judge/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Musk-Delete-Agencies',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-13',
    title: 'Elon Musk calls for the US to \‘delete entire agencies\’ from the federal government',
    body: 'Google has also turned off the ability to suggest edits or report inaccuracies for the Gulf of America.',
    links: [
      {
        href: 'https://apnews.com/article/elon-musk-doge-us-uae-6f7c0e5b43adfb4ec3c1f14a964f573c',
        linkText: 'AP',
      },

      {
        href: 'https://www.politico.com/news/2025/02/13/elon-musk-target-federal-agencies-017563',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Trump-Recipricol-Tariffs',
    categories: ['Fascism', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-13',
    title: 'Trump threatens reciprocal tariffs against other countries',
    body: 'Economists fear the tariffs could also put upward pressure on prices, making it harder to curb stubborn inflation.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/13/nx-s1-5296521/trump-retaliatory-reciprocal-tariffs-inflation-trade-war',
        linkText: 'NPR',
      },

      {
        href: 'https://apnews.com/article/trump-tariffs-reciprocal-imports-tax-trade-economy-54c0a26687dc96157d96229068894720',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Google-Deletes-Reviews',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-13',
    title: 'Google Maps Admits Deleting Critical \‘Gulf Of America\’ Reviews',
    body: 'Google has also turned off the ability to suggest edits or report inaccuracies for the Gulf of America.',
    links: [
      {
        href: 'https://www.forbes.com/sites/dimitarmixmihov/2025/02/13/google-maps-admits-deleting-critical-gulf-of-america-reviews/',
        linkText: 'Forbes',
      },
    ],
  },

  {
    id: 'Judge-Blocks-Trump-Order',
    categories: ['Courts', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-13',
    title: 'Federal judge pauses President Trump\’s order restricting gender-affirming care for trans youth',
    body: 'The judge\’s ruling came after a lawsuit was filed earlier this month on behalf of families with transgender or nonbinary children who allege their health care has already been compromised.',
    links: [
      {
        href: 'https://apnews.com/article/judge-restraining-order-trump-transgender-health-care-8f8d935a3e757a1700dfb7363a67b07b',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Legal-Showdown',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-12',
    title: 'Legal showdown looms as Trump tests limits of presidential power',
    body: 'Since taking office in January, he has ordered the suspension of all new asylum claims, cancelled refugee resettlement, frozen government hiring and spending, gutted agencies established by Congress, moved to ban gender transition care for teenagers and offered a buyout deal for hundreds of thousands of federal workers.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c70kd686k2do',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Owns-Gulf',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-12',
    title: 'Who owns the Gulf of Mexico? What to know about Trump renaming it',
    body: 'The Gulf of Mexico is a major economic center for the US, Mexico and Cuba.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/gulf-of-mexico-rename-trump-b2697169.html',
        linkText: 'Independent',
      },
    ],
  },

  {
    id: 'Gulf-America',
    categories: ['Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-12',
    title: 'Apple bends the knee and switches to \‘Gulf of America\’ after Trump\’s order',
    body: 'Google and Microsoft have also changed the gulf\’s name in their respective map apps',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/apple-changes-gulf-of-america-trump-b2697171.html',
        linkText: 'Independent',
      },

      {
        href: 'https://archive.is/8phDI',
        linkText: 'Bloomberg (via archive.is)',
      },

      {
        href: 'https://news.sky.com/story/google-maps-changes-name-of-gulf-of-mexico-to-gulf-of-america-after-donald-trump-executive-order-13306982',
        linkText: 'Sky',
      },

      {
        href: 'https://www.bbc.co.uk/news/articles/cp820m733p3o',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Watchdogs-Sue',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-12',
    title: 'Government watchdogs fired by Trump sue to get their jobs back',
    body: 'A new lawsuit alleges that Trump\’s firing of inspectors general violated federal law.',
    links: [

      {
        href: 'https://edition.cnn.com/2025/02/12/politics/inspector-general-lawsuit-fired-trump',
        linkText: 'CNN',
      },

      {
        href: 'https://www.politico.com/news/2025/02/12/inspectors-general-trump-lawsuit-00203780',
        linkText: 'Politico',
      },

      {
        href: 'https://apnews.com/article/watchdogs-trump-mass-firing-inspectors-general-5b4629fb34a168322bf61170286efb76',
        linkText: 'AP',
      },

    ],
  },

  {
    id: 'USAID-Inspector-Fired',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-12',
    title: 'White House fires USAID inspector general after warning about funding oversight',
    body: 'On Monday, Martin\’s office issued a flash report warning that the Trump administration\’s freeze on all foreign assistance and moves to cut USAID staff had left oversight of the humanitarian aid “largely nonoperational.',
    links: [
      {
        href: 'https://apnews.com/article/usaid-american-companies-layoffs-lawsuit-8c116d877c179169fbce2d3348fcd997',
        linkText: 'AP',
      },

      {
        href: 'https://www.politico.com/news/2025/02/11/trump-fires-usaid-inspector-general-00203717',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Massive-Layoffs',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-12',
    title: 'DOGE\’s power expands as federal agencies start planning large-scale layoffs',
    body: 'The next stage of the Trump administration’s efforts to slash the federal workforce is underway.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/12/politics/federal-employees-layoffs-trump/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://archive.is/HrspM',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: '30-Actions',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-12',
    title: 'Thirty lonely but beautiful actions you can take right now',
    body: '(which probably won\'t magically catalyze a mass movement against Trump but that are still wildly important)',
    links: [
      {
        href: 'https://thewhitepages.net/p/thirty-lonely-but-beautiful-actions',
        linkText: 'The White Pages',
      },

      {
        href: 'https://archive.is/HrspM',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'Pope-Condemns-Deportation',
    categories: ['Resist', 'Immigration'],
    color: 'green',
    faicon: 'plane',
    date: '2025-02-12',
    title: 'Pope rebukes Trump administration over immigrant deportations and appears to aim directly at Vance',
    body: 'Pope Francis issued a major rebuke Tuesday to the Trump administration\’s plans for mass deportations of migrants, warning that the forceful removal of people purely because of their illegal status deprives them of their inherent dignity and “will end badly.”',
    links: [
      {
        href: 'https://apnews.com/article/pope-trump-migration-09a89091f8e7dc3270099f0947d04e90',
        linkText: 'AP',
      },

      {
        href: 'https://www.theguardian.com/us-news/2025/feb/11/pope-francis-trump-mass-deportations-immigration',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Judges-Fault',
    categories: ['Fascism', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-12',
    title: 'White House says it\’s the judges — not Trump — causing a \‘constitutional crisis\’',
    body: 'Democrats and legal scholars have warned that he\’s provoking a constitutional crisis by trying to expand his power and ignore laws that stand in his way.',
    links: [
      {
        href: 'https://apnews.com/article/trump-judges-rulings-constitutional-crisis-presidential-power-a9c593cf3f9faec23a03f4a5123fefdb',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'FEMA-Fired',
    categories: ['Fascism', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-12',
    title: 'FEMA officials fired after Musk claims they paid to house migrants in \'luxury\' NYC hotels',
    body: 'The firings include the agency\'s chief financial officer, two program analysts and a grant specialist, DHS said in a statement that labeled them "deep state activists."',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/fema-officials-fired-after-musk-claims-paid-house/story?id=118692963',
        linkText: 'ABC',
      },

      {
        href: 'https://apnews.com/article/fema-migrant-hotels-new-york-musk-immigration-3d250d9f64b40858c0f0eda9989bea6d',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'P2025-Guts-Funding',
    categories: ['Fascism', 'Project 2025', 'Health'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-11',
    title: 'Project 2025 Is Gutting Medical Funding That Helped Russell Vought’s Own Kid',
    body: 'Its architect\’s daughter has cystic fibrosis—and benefits from a “miracle drug” backed by an agency he\’s attacking.',
    links: [
      {
        href: 'https://www.motherjones.com/politics/2025/02/project-2025-vought-medical-funding/',
        linkText: 'Mother Jones',
      },
    ],
  },

  {
    id: 'Abolish-FEMA',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-11',
    title: 'Trump Calls for Abolishing FEMA, Expanding Battle Against Feds',
    body: 'Trump said FEMA should be eliminated, widening his fight against the federal bureaucracy that he has denounced as a “deep state” working against his interests.',
    links: [
      {
        href: 'https://archive.is/ir8Bo',
        linkText: 'Bloomberg (via archive.is)',
      },
    ],
  },

  {
    id: 'Musk_DOGE-Conflicts',
    categories: ['Fascism', 'Courts', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-11',
    title: 'Elon Musk grilled about DOGE transparency, conflicts in Oval Office',
    body: 'The White House has said Musk is classified as a "special government employee" but it\'s unclear to whom he is accountable, other than Trump.',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/elon-musk-faces-1st-questions-doges-transparency-joins/story?id=118705771',
        linkText: 'ABC',
      },
      {
        href: 'https://apnews.com/article/trump-downsizing-federal-workers-doge-00683abc4de44a151f26aaa6cb0d0f30',
        linkText: 'AP',
      },

      {
        href: 'https://www.npr.org/2025/02/11/nx-s1-5293504/trump-musk-doge-oval-office',
        linkText: 'NPR',
      },

      {
        href: 'https://www.cnbc.com/2025/02/11/trump-musk-oval-office-doge-order.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'Judge-orders-Trump',
    categories: ['Resist', 'Courts', 'Health'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-11',
    title: 'Judge orders Trump admin to restore removed health agency webpages',
    body: 'A federal judge ordered federal health agencies Tuesday to restore pages they removed from their websites last month to comply with President Donald Trump’s executive order on “gender ideology and extremism,” saying the decision to pull them down could be detrimental to public health.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/11/health-agency-webpage-removal-lawsuit-00203582',
        linkText: 'Politico',
      },

      {
        href: 'https://www.cbsnews.com/news/judge-orders-hhs-cdc-fda-restore-deleted-webpages-health-information/',
        linkText: 'CBS',
      },

    ],
  },

  {
    id: 'DOGE-Cuts-Millions',
    categories: ['Fascism', 'Project 2025', 'Education'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-02-11',
    title: 'Musk Team Announces Millions in Cuts to Education Dept. Amid Legal Pushback',
    body: 'Elon Musk\’s cost-cutting effort announced a variety of cuts at the Education Department totaling over $900 million...',
    links: [
      {
        href: 'https://archive.is/dA4Su',
        linkText: 'NYT (via archive.is)',
      },

    ],
  },

  {
    id: 'Trump-Ignores-Judge',
    categories: ['Fascism', 'Courts', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-10',
    title: 'Judge finds White House violated court order to stop funding freeze',
    body: 'The Trump administration has violated a court order by refusing to reverse a freeze of billions in government funds, a judge ruled Monday.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c07kr292k8go',
        linkText: 'BBC',
      },

      {
        href: 'https://www.politico.com/news/2025/02/10/spending-freeze-donald-trump-015514',
        linkText: 'Politico',
      },

      {
        href: 'https://apnews.com/article/funding-freeze-trump-federal-grants-loans-judge-ec9bf2700c41ec0ba4085d375599d295',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Judge-blocks-Trump',
    categories: ['Resist', 'Courts', 'Health'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-10',
    title: 'Judge temporarily blocks Trump cuts to health research grants',
    body: 'The cuts would slice $4 billion from the budgets of universities and research organizations.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/10/judge-blocks-trump-cuts-health-research-grants-00203447',
        linkText: 'Politico',
      },

      {
        href: 'https://www.nbcnews.com/science/science-news/trump-administration-sued-22-states-funding-cuts-research-projects-rcna191529',
        linkText: 'NBC',
      },

      {
        href: 'https://abcnews.go.com/Politics/trump-reignites-legal-fight-freezing-billions-federal-funding/story?id=118695690',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Hamas-Hostage-Threat',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'Trump says \‘all hell is going to break out\’ if Hamas doesn\’t release hostages by Saturday at noon',
    body: 'Trump urged Israel to cancel its ceasefire deal with Hamas and “let all hell break out” if Hamas does not return hostages still being held in Gaza by noon on Saturday.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/10/politics/trump-palestinians-no-right-return-gaza/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.reuters.com/world/middle-east/trump-says-palestinians-would-not-have-right-return-gaza-2025-02-10/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Jordan-Egypt-Threat',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'Trump May Cut Aid to Jordan and Egypt if They Don’t Take Gazans',
    body: 'The president turned up the pressure on the two nations to agree to his proposal for them to house the Palestinian population of Gaza and said the Palestinians would not have the right to return to the territory.',
    links: [
      {
        href: 'https://archive.is/0LrRR',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'Trump-Buy-Gaza',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'Trump says Palestinians will have no right of return to Gaza under his plan',
    body: 'Trump said that he would “own” the Gaza Strip and declared it would be a “real estate development for the future”',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/10/trump-buy-gaza-plan',
        linkText: 'The Guardian',
      },

      {
        href: 'https://www.nbcnews.com/politics/donald-trump/trump-says-palestinians-wouldnt-allowed-back-gaza-plan-rcna191491',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Trump-Steel-Tarifs',
    categories: ['Fascism', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'Trump says he will announce 25% steel and aluminum tariffs Monday, and more import duties are coming',
    body: 'The United States will impose 25% tariffs on all steel and aluminum imports, including from Canada and Mexico',
    links: [
      {
        href: 'https://apnews.com/article/trump-steel-aluminum-tariffs-import-duties-74d7bfde0da59e111a45e772d199f2b2',
        linkText: 'AP',
      },

      {
        href: 'https://www.cnbc.com/2025/02/10/global-winners-and-losers-of-trumps-steel-and-aluminium-tariffs.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'Musk-Impeach-Judge',
    categories: ['Fascism', 'Courts', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-09',
    title: 'Musk calls to impeach judge whose order blocks DOGE from Treasury systems access',
    body: 'Musk has repeatedly accused judges of corruption and called to have them impeached after rulings or orders that didn’t go his way.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/02/09/musk-calls-to-impeach-judge-whose-order-blocks-doge-from-treasury-systems-access.html',
        linkText: 'CNBC',
      },

      {
        href: 'https://apnews.com/article/trump-judiciary-musk-separation-of-powers-balance-checks-069c169ea1ddf6eea76f502d544c4c16',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Vance-Musk_question-judge',
    categories: ['Fascism', 'Courts', 'Project 2025'],
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
        href: 'https://archive.is/ZuAWL',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'Govt-Overhaul',
    categories: ['Fascism', 'Project 2025'],
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
    id: 'America-Mexicana',
    categories: ['Global', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-02-05',
    title: 'Mexico\'s president calls on Google to identify US as \'América Mexicana\’',
    body: 'President Claudia Sheinbaum attacks Google for caving into Trump\’s meglomaniacal move to change the Gulf of Mexico into the Gulf of America',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/trump-gulf-president-america-mexicana-b2689624.html',
        linkText: 'Independent',
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
    id: 'Protests-Trans-Ban',
    categories: ['LGBTQ', 'Resist'],
    color: 'green',
    faicon: 'rainbow',
    date: '2025-02-05',
    title: 'Protests erupt across US at hospitals complying with Trump\'s unlowful under-19 trans ban',
    body: '"...hospitals should stand as a bulwark against Trump and should care for all their patients..."',
    links: [
      {
        href: 'https://www.erininthemorning.com/p/protests-erupt-across-us-at-hospitals',
        linkText: 'Erin in the Morning',
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
    id: 'Musk-Force_Out_Workers',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
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
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
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
    id: 'Constitutional-Crisis',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-29',
    title: 'Trump makes moves to expand his power, sparking chaos and a possible constitutional crisis',
    body: 'Trump took steps to maximize his power, sparking chaos and what critics contend is a constitutional crisis as he challenges the separation of powers that have defined American government for more than 200 years.',
    links: [
      {
        href: 'https://apnews.com/article/trump-presidential-power-executive-congress-grants-freeze-60fa3a9fabf6328f9aa3c45ed34e2cc3',
        linkText: 'AP',
      },
    ],
  },


  {
    id: 'DEI-Military',
    categories: ['LGBTQ', 'Racism', 'Discrimination', 'Project 2025'],
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
    id: 'Shut_School-Board',
    categories: ['Gun Violence', 'Project 2025','Education'],
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
    id: 'J6Freed',
    categories: ['J6', 'Project 2025'],
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
    id: 'J6-Pardoned',
    categories: ['J6', 'Project 2025'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-20',
    title: 'Trump offers long-promised pardons to some 1,500 January 6 rioters',
    body: 'The order would grant "a full, complete and unconditional pardon to all other individuals convicted of offenses related to events that occurred at or near the United States Capitol on January 6, 2021."',
    links: [
      {
        href: 'https://www.npr.org/2025/01/20/g-s1-36809/trump-pardons-january-6-riot',
        linkText: 'NPR',
      },

      {
        href: 'https://apnews.com/article/capitol-jan-6-pardons-trump-justice-department-8ce8b2a8f8cb602d5eaf85ac7b969606',
        linkText: 'AP',
      },

      {
        href: 'https://www.nbcnews.com/politics/justice-department/trump-set-pardon-defendants-stormed-capitol-jan-6-2021-rcna187735',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Exec-Orders',
    categories: ['Fascism', 'Project 2025', 'J6'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-20',
    title: 'Trump signs executive actions on Jan. 6, TikTok, immigration and more',
    body: 'His sweeping agenda with a series of executive actions that are expected to kickstart his promised transformation of the federal government.',
    links: [
      {
        href: 'https://www.npr.org/2025/01/20/g-s1-43698/trump-inauguration-executive-orders-2025-day-1',
        linkText: 'NPR',
      },

      {
        href: 'https://edition.cnn.com/2025/01/20/politics/executive-actions-trump-day-1/index.html',
        linkText: 'CNN',
      },
    ],
  },


];

// Page details
const pageTitle = 'America is Going Just Great'; // The title of the page that shows in the browser tab
const pageDescription = 'A timeline of America\'s descent into a fascist hellscape'; // The description of the page for search engines
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

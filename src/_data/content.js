const header = `<p>America is Going Just Great<p>
    <p class="subHeader">A timeline of America\'s descent into a fascist hellscape.</p>
    <div class="nav"><a href="/">[timeline]</a> <a href="/resources/">[resources]</a> <a href="/about/">[about]</a></div>`;
const footer = 'Compiled by <a href="christineroseauthor.com">Christine Rose</a>';
const entries = [

  //LGBTQ+ = rainbow
  //Immigration = plane
  //Courts = landmark
  //Discrimination = person
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
  //FAFO = poo

  //Start with "Fork in the Road" 29 Jan WTF Happened to catch up

  {
    id: 'Musk_Justify-Job',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-22',
    title: 'NIH funding freeze stalls applications on $1.5 billion in medical research funds',
    body: 'The National Institutes of Health has stopped considering new grant applications, delaying decisions about how to spend millions of dollars on research into diseases ranging from heart disease and cancer to Alzheimer\'s and allergies.',
    links: [
      {
        href: 'https://www.npr.org/sections/shots-health-news/2025/02/22/nx-s1-5305276/trump-nih-funding-freeze-medical-research',
        linkText: 'NPR',
      },
    ],
  }, 

  {
    id: 'Musk_Justify-Job',
    categories: ['Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-22',
    title: 'US threatens to shut off Starlink if Ukraine won\'t sign minerals deal',
    body: 'Starlink internet terminals have played a crucial role in securing communications in the war in Ukraine. Last year, Ukraine said that approximately 42,000 terminals were in operation across the military, hospitals, businesses, and aid organizations.',
    links: [
      {
        href: 'https://kyivindependent.com/us-threatens-to-shut-off-starlink-if-ukraine-wont-sign-minerals-deal-sources-tell-reuters/',
        linkText: 'Kyiv Independent',
      },
    ],
  }, 

  {
    id: 'Musk_Justify-Job',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-22',
    title: 'Elon Musk Says Federal Employees Must Explain Their Work Or Be Fired',
    body: 'All federal employees will receive an email asking them to explain the work they’ve done over the past week, and employees who fail to respond will be forced to resign.',
    links: [
      {
        href: 'https://www.forbes.com/sites/conormurray/2025/02/22/elon-musk-says-federal-employees-must-explain-their-work-or-be-fired',
        linkText: 'Forbes',
      },
    ],
  }, 

  {
    id: 'FAFO_IRS-Layoffs',
    categories: ['Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'poo',
    date: '2025-02-21',
    title: 'Trump voter shocked to get fired by DOGE: It\’s \‘destroying people\’s lives\'',
    body: 'An IRS worker who voted for President Donald Trump expressed shock after being among the roughly 7,000 people in the department to be laid off by the Department of Government Efficiency.',
    links: [
      {
        href: 'https://www.nj.com/politics/2025/02/trump-voter-shocked-to-get-fired-by-doge-its-destroying-peoples-lives.html',
        linkText: 'NJ.com',
      },
    ],
  }, 

  {
    id: 'CDC_Layoffs_Flu',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-21',
    title: 'CDC layoffs strike deeply at its ability to respond to current flu, norovirus and measles outbreaks',
    body: 'Beginning with the removal of websites and key public health datasets in January, the Trump administration has taken actions to dismantle established public health infrastructure as part of its second-term agenda.',
    links: [
      {
        href: 'https://www.upi.com/Voices/2025/02/21/centers-for-disease-control-layoffs/9301740085546/',
        linkText: 'UPI',
      },
    ],
  }, 

  {
    id: 'End_Of_Science',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-21',
    title: 'DOGE shut the funding spigot for medical research overnight. Scientists are calling it \‘the end of science\’ in America',
    body: 'DOGE will cut more than $4 billion from the NIH budget—which equates to 11% of its 2023 budget—impacting major research institutions nationwide.',
    links: [
      {
        href: 'https://archive.is/ADH1F',
        linkText: 'Fortune (via archive.is)',
      },
    ],
  }, 

  {
    id: 'Judge_USAID',
    categories: ['Project 2025', 'Courts'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-21',
    title: 'Judge clears path to pull USAID personnel off the job',
    body: 'U.S. District Judge Carl Nichols dissolved his order temporarily staving off the purge and declined to provide further relief, contending that the plaintiffs’ initial assertions of harm were “overstated.” ',
    links: [
      {
        href: 'https://thehill.com/regulation/court-battles/5158201-judge-usaid-personnel/',
        linkText: 'The Hill',
      },
    ],
  },  

  {
    id: 'Trump_Fires_General',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-21',
    title: 'RFK\'s plan to make America healthy again? Round up people with mental health conditions in camps',
    body: 'Trump has fired the Chairman of the Joint Chiefs of Staff CQ Brown, the highest-ranking officer in the country, as part of a major shake-up of top military leadership.',
    links: [
      {
        href: 'https://www.bbc.com/news/articles/clyr2xvn4dpo',
        linkText: 'BBC',
      },
    ],
  },  

  {
    id: 'NISD_Mass-Firings',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-20',
    title: 'The National Institute of Standards and Technology Braces for Mass Firings',
    body: 'Approximately 500 NIST staffers, including at least three lab directors, are expected to lose their jobs at the standards agency as part of the ongoing DOGE purge.',
    links: [
      {
        href: 'https://www.wired.com/story/the-national-institute-of-standards-and-technology-braces-for-mass-firings/',
        linkText: 'Wired',
      },
    ],
  },  

  {
    id: 'Judge_Blocks_Abortion',
    categories: ['Project 2025'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-20',
    title: 'Judge blocks release of Indiana abortion records',
    body: '“Disclosing abortion patients’ personal health information to anti-abortion vigilantes puts the safety of both patients and doctors at-risk,” said Stephanie Toti, Executive Director of the Lawyering Project.',
    links: [
      {
        href: 'https://www.wthr.com/article/news/special-reports/indiana-abortion/judge-blocks-release-of-indiana-abortion-records-terminated-pregnancy-governor-mike-braun-marion-county-court-restraining-order-tpr-ban-abortion/531-3b6085c4-7263-4cf5-ad8e-87fdd1b84d5d',
        linkText: 'WTHR',
      },
    ],
  }, 

  {
    id: 'Trump_Fires_General',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-20',
    title: 'HHS postpones meeting of key CDC vaccine panel, one week after RFK Jr. sworn in',
    body: 'There was no time frame given for when the meeting would be rescheduled.',
    links: [
      {
        href: 'https://thehill.com/policy/healthcare/5156221-hhs-postpones-meeting-key-cdc-vaccine-panel-rfk-jr/',
        linkText: 'The Hill',
      },
    ],
  },  

  {
    id: 'Portland_Protest',
    categories: ['Project 2025', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-20',
    title: '\'Concerned about our democracy\': Protesters rally in Northeast Portland against federal mass layoffs, firings',
    body: 'Hundreds of people gathered outside the Federal Building in Northeast Portland to protest the large-scale federal layoffs and send a message to the Trump administration.',
    links: [
      {
        href: 'https://www.kgw.com/article/news/local/portland-protesters-rally-northeast-portland-federal-layoffs-firings-bonneville-power-administration-forest-service/283-91e1e89a-f46a-4311-88d9-24f9da4d623e',
        linkText: 'KGW8 Portland',
      },
    ],
  },  

  {
    id: 'DOE_Chaos',
    categories: ['Project 2025', 'Education'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-19',
    title: 'Department of Education contract cuts spur \‘chaos and confusion\’',
    body: 'More than a billion dollars of government contracts at the Department of Education has been cut, a move the Trump administration argues gets rid of “woke” wasteful spending as others sound the alarm on educational research and learning outcomes for students',
    links: [
      {
        href: 'https://thehill.com/homenews/education/5151673-department-of-education-cuts-trump-musk-doge-research-funding/',
        linkText: 'The Hill',
      },
    ],
  },  

  {
    id: 'RFK-JR_Mental-Health-Camps',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-19',
    title: 'RFK\'s plan to make America healthy again? Round up people with mental health conditions in camps',
    body: 'Robert F. Kennedy wants to replace standard psychological care with unpaid labor on "wellness farms."',
    links: [
      {
        href: 'https://www.salon.com/2025/02/19/rfk-s-plan-to-make-america-healthy-again-round-up-people-with-mental-health-conditions-in-camps/',
        linkText: 'Salon',
      },
    ],
  },  

  {
    id: 'Trump_Expanded-Power',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-19',
    title: 'Trump claims expanded power over independent agencies',
    body: 'President Trump on Tuesday signed an executive order to give the president greater power over independent regulatory agencies — government entities Congress set up to be shielded from White House control.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/19/nx-s1-5302481/trump-independent-agencies',
        linkText: 'NPR',
      },
    ],
  },  
  {
    id: 'Missing-Analyses_CDC-Layoffs',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-19',
    title: 'Urgent CDC data and analyses on influenza and bird flu go missing as outbreaks escalate',
    body: 'The Centers for Disease Control and Prevention (CDC), a critical source of urgent analyses of the flu and other public health threats, has gone quiet in the weeks since President Donald Trump took office..."The American public is at greater risk when we don\’t have information on a timely basis."',
    links: [
      {
        href: 'https://www.fiercebiotech.com/medtech/urgent-cdc-data-and-analyses-influenza-and-bird-flu-go-missing-outbreaks-escalate',
        linkText: 'Fierce Biotech',
      },
    ],
  },  

  {
    id: 'Consequences_CDC-Layoffs',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-19',
    title: 'CDC layoffs strike deeply at its ability to respond to the current flu, norovirus and measles outbreaks and other public health emergencies',
    body: 'The Trump administration has taken actions to dismantle established public health infrastructure as part of its second-term agenda.',
    links: [
      {
        href: 'https://theconversation.com/cdc-layoffs-strike-deeply-at-its-ability-to-respond-to-the-current-flu-norovirus-and-measles-outbreaks-and-other-public-health-emergencies-248486',
        linkText: 'The Conversation',
      },
    ],
  },  

  {
    id: 'FDA_Resigns',
    categories: ['Project 2025', 'Resist', 'Health'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'FDA\’s food safety head resigns over mass layoffs',
    body: 'Jim Jones, the head of the Food and Drug Administration\’s (FDA) food division, resigned Monday, citing the...“indiscriminate firing” of 89 staff members.',
    links: [
      {
        href: 'https://thehill.com/policy/healthcare/5152084-fdas-food-safety-head-resigns/',
        linkText: 'The Hill',
      },
    ],
  },  

  {
    id: 'POTUS_Seizes_Power',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-18',
    title: 'POTUS just seized absolute Executive Power. A very dark future for democracy in America.',
    body: '"For the Federal Government to be truly accountable to the American people, officials who wield vast executive power must be supervised and controlled by the people’s elected President."',
    links: [
      {
        href: 'https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-accountability-for-all-agencies/',
        linkText: 'White House',
      },
    ],
  },  

  {
    id: 'Prosecutor_Resigns',
    categories: ['Project 2025', 'Fascism', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'Top US prosecutor quits over pressure to investigate Biden climate spending',
    body: 'Denise Cheung resigns after Trump appointees demand she open grand jury investigation into EPA grants',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/18/denise-cheung-resigns-biden-climate-spending',
        linkText: 'The Guardian',
      },
    ],
  },  


 
 {
    id: 'USDA-AvianFlu',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'USDA accidentally fired officials working on bird flu and is now trying to rehire them',
    body: 'The error is the latest in the Trump administration\'s attempts to rapidly shrink the size of the government by conducting mass firings of federal workers — an effort by Elon Musk and DOGE, which is heavily staffed by people who have no experience in government.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/doge/usda-accidentally-fired-officials-bird-flu-rehire-rcna192716',
        linkText: 'NBC',
      },
    ],
  },  

  {
    id: 'Musk_Not_Employee',
    categories: ['Project 2025', 'Fascism',],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'Musk is just an adviser with no power to make decisions, White House claims',
    body: 'Legal filing says billionaire Trump aide is not an employee of so-called \‘department of government efficiency\’',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/18/turmp-elon-musk-doge',
        linkText: 'The Guardian',
      },
    ],
  },  

  {
    id: 'Musk_Ally',
    categories: ['Project 2025', 'Fascism',],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'Musk Ally Demands Admin Access to System That Lets Government Text the Public',
    body: 'Notify.gov contains not just the phone numbers of everyday people but also information about whether they participate in government programs such as Medicaid, which is based on a person\'s financial situation.',
    links: [
      {
        href: 'https://archive.is/VUrqc',
        linkText: '404 Media (via archive.is)',
      },
    ],
  },  

  {
    id: 'Judge_Rejects-DOGE',
    categories: ['Project 2025', 'Fascism', 'Courts'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-18',
    title: 'Judge Chutkan rejects call from Democratic AGs for temporary restraining order blocking DOGE\’s access to federal data',
    body: 'A federal judge declined on Tuesday to temporarily block Elon Musk and his Department of Government Efficiency from accessing federal data systems at a slew of executive branch agencies.',
    links: [
      {
        href: 'https://www.cnn.com/2025/02/18/politics/doge-temporary-restraining-order-chutkan',
        linkText: 'CNN',
      },
    ],
  },  

  {
    id: 'ACLU_Demands',
    categories: ['Immigration', 'Resist', 'Project 2025'],
    color: 'green',
    faicon: 'plane',
    date: '2025-02-17',
    title: 'ACLU Demands Information on Migrants Transferred to Guantánamo Bay',
    body: '“The noncitizens being held in Guantánamo are not in criminal custody and, therefore, cannot be subject to punitive conditions, including conditions that reduce their access to counsel. Nor are they detainable by the military under any authorization for the use of force.”',
    links: [
      {
        href: 'https://theowp.org/aclu-demands-information-on-migrants-transferred-to-guantanamo-bay/',
        linkText: 'The Organization for World Peace (OWP)',
      },
    ],
  },

  {
    id: 'No_Kings',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-17',
    title: 'No kings on Presidents Day’ rings out from protests against Trump and Musk',
    body: 'Boston protesters, some dressed in Revolutionary War-style clothing, carried signs saying such things as “This is a Coup” and “Cowards Bow to Trump, Patriots Stand Up.” One sign had a depiction of Uncle Sam saying “I Want You to Resist.”',
    links: [
      {
        href: 'https://apnews.com/article/president-donald-trump-protest-c8796556fbf20e796f42167f61c3d942',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'DC_Protest',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-17',
    title: 'Thousands of people protest in Washington, D.C., and across the U.S. on Presidents Day',
    body: 'On Presidents Day, demonstrators across the U.S. descended upon state capitol buildings and other locations to protest actions by President Donald Trump and billionaire Elon Musk, who are implementing significant changes to the federal government.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/17/nx-s1-5299915/dc-protests',
        linkText: 'NPR',
      },
    ],
  },
  
{
    id: 'Russia-Ukraine',
    categories: ['Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-17',
    title: 'Trump stuns Europe with opening Ukraine-Russia gambit',
    body: 'European leaders are scrambling to respond to President Trump’s first moves to end Russia’s war in Ukraine, shocked to find themselves on the outside of high-stakes talks about the continent’s security and grappling with a potential retreat of U.S. forces from Europe.',
    links: [
      {
        href: 'https://thehill.com/policy/international/5149929-european-leaders-react-trump-russia-ukraine/',
        linkText: 'The Hill',
      },
    ],
  },


  {
    id: 'DOGE-FtKnox',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-17',
    title: 'Musk signals DOGE could look into gold at Fort Knox',
    body: 'Fort Knox would be the latest target of the Department of Government Efficiency (DOGE), which has led President Trump\’s overhaul of government agencies...',
    links: [
      {
        href: 'https://thehill.com/homenews/administration/5149699-elon-musk-doge-fort-knox-gold/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'DOGE-IRS',
    categories: ['Fascism', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-17',
    title: 'Privacy advocates file lawsuit to stop DOGE from peeking at IRS taxpayer data',
    body: 'A coalition of watchdog groups and unions has filed a lawsuit seeking to block Elon Musk\'s DOGE team from accessing sensitive taxpayer information at the IRS.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/18/nx-s1-5300826/doge-irs-lawsuit-taxpayers-data',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'DOGE-IRS',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-17',
    title: 'Musk Team Seeks Access to I.R.S. System With Taxpayers\’ Records',
    body: 'The Internal Revenue Service is preparing to give a team member working with Elon Musk’s so-called Department of Government Efficiency access to sensitive taxpayer data.',
    links: [
      {
        href: 'https://archive.is/cfVRA',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'SpaceX-FAA',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-17',
    title: 'A team from SpaceX is being brought in to overhaul FAA\’s air traffic control system',
    body: 'The exact number of workers losing their jobs is unknown, but the union representing them said it was in the “hundreds.”',
    links: [
      {
        href: 'https://www.theverge.com/news/614078/faa-air-traffic-control-spacex-elon-musk-layoff-staff-shortage',
        linkText: 'The Verge',
      },
    ],
  },

  {
    id: 'Trump-Fires-Nuclear-Staff-Oops',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-16',
    title: 'Trump administration wants to un-fire nuclear safety workers but can\’t figure out how to reach them',
    body: '“The workers, whose agency oversees the nation\’s nuclear stockpile, had been fired on Thursday and lost access to their federal government email accounts.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/trump-administration-wants-un-fire-nuclear-safety-workers-cant-figure-rcna192345',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Trump_Asks-SCOTUS',
    categories: ['Fascism', 'Project 2025', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-16',
    title: 'Trump administration asks Supreme Court to greenlight whistleblower office firing',
    body: 'The Justice Department is asking the Supreme Court to greenlight President Trump\’s firing of the head of a federal whistleblower protection office, marking the new Trump administration\’s first appeal to the high court.',
    links: [
      {
        href: 'https://thehill.com/homenews/5148365-trump-supreme-court-whistleblower-office-firing/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Trump_FDA_Fires',
    categories: ['Fascism', 'Project 2025',],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-16',
    title: 'Trump cuts reach FDA workers focused on food safety and medical devices',
    body: 'Positions cut also appeared to focus on agency’s centers for tobacco products, including oversight of e-cigarettes',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/16/trump-administration-fda-layoffs',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Trump_Napoleon',
    categories: ['Fascism', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'fire',
    date: '2025-02-16',
    title: 'Trump under fire for likening himself to Napoleon amid attacks on judges',
    body: 'Critics rounded on Donald Trump on Sunday for likening himself to Napoleon in a “dictatorial” social media post echoing the French emperor\’s assertion that “he who saves his country does not violate any laws”',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/16/trump-napoleon-judges-government-firings',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Save_Country',
    categories: ['Fascism', 'Project 2025',],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-16',
    title: 'Trump: If it saves the country, it\'s not illegal',
    body: 'Echoing France\'s Napoleon Bonaparte, U.S. President Donald Trump on Saturday took to social media to signal continued resistance to limits on his executive authority in the face of multiple legal challenges.”',
    links: [
      {
        href: 'https://archive.is/nvW3d',
        linkText: 'Reuters (via archive.is)',
      },
    ],
  },

  {
    id: 'Vance-Munich',
    categories: ['Global', 'Project 2025'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-15',
    title: 'JD Vance’s Munich speech laid bare the collapse of the transatlantic alliance',
    body: 'The US vice-president was hypocritical and insensitive, but bracingly clear in his resetting of relationships.',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/feb/15/jd-vance-munich-speech-laid-bare-collapse-transatlantic-alliance-us-europe?CMP=Share_iOSApp_Other',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Judge-Blocks-Transfer',
    categories: ['Immigration', 'Resist', 'Project 2025'],
    color: 'green',
    faicon: 'plane',
    date: '2025-02-15',
    title: 'US deports immigrants to Venezuela after judge blocked transfer to Guantanamo Bay',
    body: 'TThree immigrants who won a restraining order against the federal government to avoid transfer to the Guantanamo Bay Naval Base in Cuba were deported this week on direct flights to Venezuela, according to court documents published Friday.',
    links: [
      {
        href: 'https://apnews.com/article/venezuelans-deported-immigration-crackdown-guantanamo-b12eee8c28b23e63cc35583083a79df0',
        linkText: 'AP',
      },
    ],
  },

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
    id: 'Vance-AfD',
    categories: ['Fascism', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-14',
    title: 'JD Vance breaks taboo by meeting with leader of Germany’s far-right party',
    body: 'US vice-president meets with AfD leader Alice Weidel as Trump administration courts European populist parties',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/14/jd-vance-alice-weidel-meeting-germany-far-right',
        linkText: 'The Guardian',
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
    id: 'Layoffs-HUD',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'HUD employees are bracing for what they hear will be \'drastic\' staff cuts',
    body: 'Agency officials looked visibly distraught and described these targets as "drastic" and "shocking."',
    links: [
      {
        href: 'https://www.npr.org/2025/02/14/g-s1-49177/hud-employees-are-bracing-for-what-they-hear-will-be-drastic-staff-cuts',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Layoffs-Accelerate',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Layoffs accelerate at federal agencies with more cuts to come',
    body: 'This week President Trump signed an executive order directing agencies to prepare for "large-scale" reductions in force.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Iowa-Farmers',
    categories: ['FAFO', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Trump spending freeze sticks Iowa farmers with million in bills for conservation work',
    body: 'About 1,000 farmers in Midwestern states are owed $11 million — roughly $10 million of it in Iowa.',
    links: [
      {
        href: 'https://archive.is/2025.02.14-134450/https://www.desmoinesregister.com/story/money/agriculture/2025/02/14/donald-trump-federal-spending-freeze-iowa-farmers-owed-millions-climate-smart-agriculture/78407310007/',
        linkText: 'Des Moins Register (via archive.is)',
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
    body: '“Congress is freaking out because it appears DOE didn\’t really realize NNSA oversees the nuclear stockpile.”',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/14/climate/nuclear-nnsa-firings-trump/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Corporate-America-Sours',
    categories: ['Fascism', 'Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Is corporate America already souring on Trump?',
    body: 'Across the US, businesspeople are warning that this new trade war could drive up costs, disrupt supply chains and hurt profits — and make a whole range of products more expensive for American consumers.',
    links: [
      {
        href: 'https://archive.is/W0oGN',
        linkText: 'Financial Times (via archive.is)',
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
    id: 'Trans-Removed',
    categories: ['LGBTQ', 'Project 2025'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-02-13',
    title: 'U.S. Park Service Strikes Transgender References From Stonewall Website',
    body: 'The “T” was removed in references to L.G.B.T.Q.+ on the official site for the Greenwich Village monument, which marks a milestone in the fight for gay rights. Later, the Q+ also disappeared.',
    links: [
      {
        href: 'https://archive.is/4ioPz',
        linkText: 'NYT (via archive.is)',
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
    id: 'Church-Proud-Boys',
    categories: ['Fascism', 'J6', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-12',
    title: 'Black Church Already Selling Proud Boys-Style Merch After Winning Trademark',
    body: 'Metropolitan African Methodist Episcopal has repurposed the extremist group’s logo to signify \‘Stay Proud, Stay Black\’',
    links: [
      {
        href: 'https://www.rollingstone.com/politics/politics-features/proud-boys-trademark-black-church-shirts-1235265640/',
        linkText: 'Rolling Stone',
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
    id: 'Judge-Restores',
    categories: ['Fascism', 'Resist', 'Court', 'Health'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-11',
    title: 'Judge orders restoration of federal health websites',
    body: 'A federal judge has ordered federal health agencies to restore websites and datasets that were abruptly pulled down beginning in late January, prompting an outcry from medical and public health communities.',
    links: [
      {
        href: 'https://www.npr.org/sections/shots-health-news/2025/02/11/nx-s1-5293387/judge-orders-cdc-fda-hhs-websites-restored',
        linkText: 'NPR',
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
    id: 'Blueland',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'H.R.1161 - Red, White, and Blueland Act of 2025',
    body: 'To authorize the President to enter into negotiations to acquire Greenland and to rename Greenland as “Red, White, and Blueland.”',
    links: [
      {
        href: 'https://www.congress.gov/bill/119th-congress/house-bill/1161/text',
        linkText: 'Congress.gov',
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
    id: 'DOGE_Exposes_Networks',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-09',
    title: 'DOGE Exposes Once-Secret Government Networks, Making Cyber-Espionage Easier than Ever',
    body: 'This exposure jeopardizes both U.S. national security and the privacy of millions of Americans.',
    links: [
      {
        href: 'https://cyberintel.substack.com/p/doge-exposes-once-secret-government?utm_medium=web&triedRedirect=true',
        linkText: 'Cyberintel',
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
    id: 'ACLU_LGBTQ',
    categories: ['LGBTQ', 'Resist', 'Project 2025', 'Fascism'],
    color: 'green',
    faicon: 'rainbow',
    date: '2025-02-07',
    title: 'Transgender and Nonbinary People Take Trump to Court Over Passport Restrictions',
    body: 'Following an executive order from President Donald Trump barring people from updating the sex designation on their passports, seven people have filed a federal lawsuit challenging the State Department’s refusal to issue passports with accurate sex designations.',
    links: [
      {
        href: 'https://www.aclu.org/press-releases/transgender-and-nonbinary-people-take-trump-to-court-over-passport-restrictions',
        linkText: 'ACLU',
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
    id: 'Freeze-FederalGrants',
    categories: ['Fascism', 'Courts', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-01-28',
    title: 'Federal judge temporarily blocks Trump administration freeze on federal grants and loans',
    body: 'The order capped the most chaotic day for the U.S. government since Trump returned to office, with uncertainty over a crucial financial lifeline causing panic and confusion among states, schools and organizations that rely on trillions of dollars from Washington.',
    links: [
      {
        href: 'https://apnews.com/article/justice-department-special-counsel-trump-046ce32dbad712e72e500c32ecc20f2f',
        linkText: 'AP',
      },

      {
        href: 'https://www.npr.org/2025/01/28/nx-s1-5277029/trump-memo-halt-funding',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Democrats-Const-Crisis',
    categories: ['Fascism', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'fire',
    date: '2025-01-28',
    title: 'Democrats declare \‘constitutional crisis\’ on funding freeze',
    body: 'Senate Democrats vowed to fight a White House freeze on federal financial assistance',
    links: [
      {
        href: 'https://www.politico.com/live-updates/2025/01/28/congress/schumer-murray-funding-freeze-00200955',
        linkText: 'Politico',
      },

      {
        href: 'https://archive.is/WKjGY',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },

  {
    id: 'Medicaid-Interrupted',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
    date: '2025-01-28',
    title: 'Medicaid System That Provides Funding to States Stops Working, Officials Say',
    body: 'The outage at least temporarily jeopardized payments the federal government makes to state programs, and sowed uncertainty for patients, doctors, hospitals and others.',
    links: [

      {
        href: 'https://archive.is/gMKkx',
        linkText: 'NYT (via archive.is)',
      },
    ],
  },
  

  {
    id: 'Fires-Prosecutors',
    categories: ['Fascism', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-28',
    title: 'Trump Justice Department says it has fired employees involved in prosecutions of the president',
    body: 'The Justice Department said that it had fired more than a dozen employees who worked on criminal prosecutions of President Donald Trump, moving rapidly to pursue retribution against lawyers involved in the investigations and signaling an early willingness to take action favorable to the president’s personal interests.',
    links: [
      {
        href: 'https://apnews.com/article/justice-department-special-counsel-trump-046ce32dbad712e72e500c32ecc20f2f',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Democrats-Wont-Fight-Trump',
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
    id: 'Columbia-Caves',
    categories: ['Immigration', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-27',
    title: 'Colombia agrees to take deported migrants after Trump tariff showdown',
    body: 'The White House claimed victory in a showdown with Colombia over accepting flights of deported migrants from the U.S. on Sunday, hours after President Donald Trump threatened steep tariffs on imports and other sanctions on the longtime U.S. partner.',
    links: [
      {
        href: 'https://apnews.com/article/colombia-immigration-deportation-flights-petro-trump-us-67870e41556c5d8791d22ec6767049fd',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Chicago-ICE',
    categories: ['Immigration', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-27',
    title: 'Top Trump administration officials in Chicago for start of immigration enforcement crackdown',
    body: 'Immigration and Customs Enforcement said it made 956 arrests nationwide on Sunday and 286 on Saturday.',
    links: [
      {
        href: 'https://apnews.com/article/trump-deportations-chicago-immigration-arrests-cfb20a3e412443aa2ca6c6ed4d1070d4',
        linkText: 'AP',
      },

      {
        href: 'https://edition.cnn.com/2025/01/27/politics/immigration-raids-federal-agents-uniform/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Sweeping-Blueprint',
    categories: ['Immigration', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-27',
    title: 'Trump\'s immigration orders are a blueprint for sweeping policy changes',
    body: 'From his first moments back in office, President Trump framed the problem of illegal immigration in terms of national security.',
    links: [
      {
        href: 'https://www.npr.org/2025/01/27/nx-s1-5276139/trump-immigration-border-orders-blueprint',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'DEI-Military',
    categories: ['LGBTQ', 'Discrimination', 'Project 2025'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-01-27',
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
    id: 'Canada-Mexico-Tariffs',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-01-26',
    title: 'Trump Aides Want to Hit Mexico, Canada With Tariffs Before Talks',
    body: 'The 25% import levy could go into place as soon as Feb. 1.',
    links: [
      {
        href: 'https://www.wsj.com/world/americas/trump-aides-want-to-hit-mexico-canada-with-tariffs-before-talks-3ff27f14',
        linkText: 'Wall Street Journal',
      },
    ],
  },

  {
    id: 'Clean_Gaza',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-01-26',
    title: 'Trump wants neighbours (Jordan & Egypt) to take in Palestinians to \'clean out\' Gaza',
    body: 'Describing Gaza as a "demolition site", Trump said: "You\'re talking about probably a million and a half people, and we just clean out that whole thing". He added that the move "could be temporary" or "could be long-term".',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c07kpjyzgllo',
        linkText: 'BBC',
      },
      {
        href: 'https://www.npr.org/2025/01/26/g-s1-44831/trump-jordan-egypt-accept-more-refugees-just-clean-out-gaza',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Musk-Nazi-NoDoubt',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-24',
    title: 'Elon Musk doesn\’t deserve the benefit of the doubt',
    body: 'Elon Musk\’s Nazi trolling exposes the collapse of America\’s guardrails against some of history\’s foulest ideas.',
    links: [
      {
        href: 'https://www.vox.com/politics/396535/elon-musk-nazi-salute-trump-inauguration?utm_source=sailthru&utm_medium=email&utm_content=wildfireroundup&utm_campaign=storyroundup&ueid=x&utm_term=All%20newsletter%20subscribers%20%28valid%29',
        linkText: 'Vox',
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
    id: 'Mexico-Refuses-Plane',
    categories: ['Immigration', 'Resist'],
    color: 'green',
    faicon: 'plane',
    date: '2025-01-24',
    title: 'Mexico refuses to accept a U.S. deportation flight',
    body: 'The Mexican government has criticized President Donald Trump\'s unilateral immigration actions, and the landing would have required Mexico\'s assistance.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/immigration/mexico-refuses-accept-us-deportation-flight-rcna189182',
        linkText: 'NBC',
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
    categories: ['Resist', 'Fascism', 'Project 2025'],
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
    id: 'Laken-Riley',
    categories: ['Immigration', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-23',
    title: 'House passes immigrant detention bill that would be Trump\’s first law to sign',
    body: '“Passage of the Laken Riley Act shows just how sharply the political debate over immigration has shifted to the right following Trump\’s election victory.',
    links: [
      {
        href: 'https://apnews.com/article/congress-immigration-crackdown-laken-riley-act-trump-a3e52af60b6b952f487e4ae03ebfacde',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Name-Colleagues-DEI',
    categories: ['Discrimination', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-23',
    title: 'Federal employees are told to name colleagues who work in DEI roles or risk \'adverse consequences\'',
    body: '“Emails sent to government workers at numerous agencies gave employees 10 days to report if a colleague\'s job relates to diversity, equity and inclusion efforts.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/white-house/federal-workers-told-name-dei-colleagues-risk-adverse-consequences-rcna188871',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Judge-Blocks-Birthright',
    categories: ['Resist', 'Fascism', 'Project 2025'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-01-23',
    title: 'A federal judge temporarily blocks Trump\’s executive order redefining birthright citizenship',
    body: '“The 14th Amendment to the Constitution promises citizenship to those born on U.S. soil, a measure ratified in 1868 to ensure citizenship for former slaves after the Civil War.',
    links: [
      {
        href: 'https://apnews.com/article/birthright-citizenship-donald-trump-lawsuit-immigration-9ac27b234c854a68a9b9f8c0d6cd8a1c',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Pause-Communications',
    categories: ['Health', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'virus',
    date: '2025-01-22',
    title: 'Trump administration directs federal health agencies to pause communications',
    body: 'The memo told health agency employees to have all documents and communications - including regulations, guidance, notices, social media, websites and press releases - reviewed and approved by a presidential appointee before issuing them.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/01/21/health/hhs-cdc-fda-trump-pause-communication/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.axios.com/2025/01/22/trump-cdc-nih-hhs-health-agencies-communications',
        linkText: 'Axios',
      },


    ],
  },

  {
    id: 'Revokes-LBJ',
    categories: ['Discrimination', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'person',
    date: '2025-01-22',
    title: 'Trump Revokes Workplace Discrimination Rules Enacted By LBJ In 1965',
    body: '“The rule Trump nuked, Executive Order 11246, forbade federal contractors from discriminating on the basis of race, color, religion, national origin, sex, sexual orientation or gender identity.',
    links: [
      {
        href: 'https://www.huffingtonpost.co.uk/entry/trump-executive-order-discrimination-lbj_n_67914b7ce4b0835f2b834b9c',
        linkText: 'Huffington Post',
      },

  ],
 },

  {
    id: 'New-J6-Subcommittee',
    categories: ['J6', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-22',
    title: 'House Republicans announce new subcommittee to investigate Jan. 6',
    body: '“House Republicans are proud of our work so far in exposing the false narratives peddled by the politically motivated January 6 Select Committee during the 117th Congress, but there is still more work to be done,” House Speaker Mike Johnson said.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/congress/house-republicans-new-subcommittee-investigate-jan-6-rcna188808',
        linkText: 'NBC',
      },

    ],
  },


  {
    id: 'Hide-Plain-Sight',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'How Trump will hide his anti-democratic politics in plain sight',
    body: 'The executive orders expose the strategy: claim to be defending democracy as you dismantle it.',
    links: [
      {
        href: 'https://www.vox.com/on-the-right-newsletter/396127/trump-democracy-executive-orders-day-one?',
        linkText: 'Vox',
      },

    ],
  },

  {
    id: 'Police-Condemn-Pardons',
    categories: ['J6', 'Project 2025', 'Fascism', 'FAFO'],
    color: 'green',
    faicon: 'skull',
    date: '2025-01-22',
    title: 'Police union that endorsed Trump condemns Jan. 6 pardons',
    body: 'Trump\'s mass pardon of Jan. 6 rioters, many of whom assaulted police officers defending the U.S. Capitol, has provoked a furious response from the Fraternal Order of Police and the International Association of Chiefs of Police (clear case of FAFO)',
    links: [
      {
        href: 'https://www.salon.com/2025/01/22/police-union-that-endorsed-condemns-jan-6-pardons/',
        linkText: 'Salon',
      },

      {
        href: 'https://www.huffingtonpost.co.uk/entry/trump-police-union-jan-6-pardons_n_6790faebe4b07360cb50134a',
        linkText: 'Huffington Post',
      },

      {
        href: 'https://www.motherjones.com/politics/2025/01/trumps-jan-6-pardons-come-as-a-betrayal-to-former-capitol-police/',
        linkText: 'Mother Jones',
      },

      {
        href: ' https://www.npr.org/2025/01/22/nx-s1-5269733/january-6-pardons-trump-voters',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Troops-Border',
    categories: ['Immigration', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-22',
    title: 'US military to send additional 1,500 troops to border',
    body: '“Trump in his first day in office declared illegal immigration a national emergency, tasking the U.S. military with aiding border security, issuing a broad ban on asylum, and taking steps to restrict citizenship for children born on American soil.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/us-military-preparing-send-additional-1000-troops-border-official-says-2025-01-22/',
        linkText: 'Reuters',
      },

      {
        href: 'https://apnews.com/live/trump-presidency-day-3-updates',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Bye-DEI',
    categories: ['Discrimination', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'Trump administration directs all federal diversity, equity and inclusion staff be put on leave',
    body: '“Trump\’s administration has moved to end affirmative action in federal contracting and directed that all federal diversity, equity and inclusion staff be put on paid leave and eventually be laid off.',
    links: [
      {
        href: 'https://apnews.com/article/dei-trump-executive-order-diversity-834a241a60ee92722ef2443b62572540',
        linkText: 'AP',
      },

      {
        href: 'https://www.npr.org/2025/01/22/nx-s1-5270081/trump-executive-orders-dei',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Security-Sent-Home',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'National Security Council staffers grilled about loyalty to Trump',
    body: 'The screenings are part of a larger push by President Trump to reshape the federal workforce that includes staffing the administration with loyalists and making it easier to fire civil servants',
    links: [
      {
        href: 'https://www.axios.com/2025/01/22/trump-national-security-council-civil-servants',
        linkText: 'Axios',
      },

      {
        href: 'https://apnews.com/article/trump-national-security-council-staffers-d167985d61c96dd278b0e58a402ff865',
        linkText: 'AP',
      },
    ],
  },

    {
    id: 'Trump-Threatens-Russia',
    categories: ['Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-01-22',
    title: 'Trump threatens tariffs if Russia doesn\'t end Ukraine war',
    body: 'Trump made ending Russia\'s invasion of Ukraine a key campaign pledge, but its not clear that his new threat will put significant pressure on Russia to change its negotiating posture.',
    links: [
      {
        href: 'https://www.axios.com/2025/01/22/trump-tariffs-russia-end-ukraine-war',
        linkText: 'Axios',
      },

      {
        href: 'https://www.npr.org/2025/01/22/nx-s1-5270883/trump-threat-russia-ukraine-war-tariffs-sanctions',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Trump-Slams-Bishop',
    categories: ['Religion', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'Trump slams sermon asking him to show \'mercy\' toward LGBTQ people, immigrants',
    body: 'Trump called the bishop of Washington, the Right Rev. Mariann Edgar Budde, "a Radical Left hard line Trump hater."',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/trump-criticizes-sermon-show-mercy-lgbtq-people-immigrants/story?id=117950533',
        linkText: 'ABC',
      },

      {
        href: 'https://apnews.com/article/trump-inaugural-prayer-service-washington-national-cathedral-interfaith-a95b36f962be93c8647cc5144266da11',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Spanish-WH-Website-Gone',
    categories: ['Discrimination', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'Trump administration shuts down White House Spanish-language page and social media',
    body: 'Hispanic advocacy groups and others expressed confusion at the abrupt change and frustration at what some called the administration’s lack of efforts to maintain communication with the Latino community, which helped propel him to the presidency.',
    links: [
      {
        href: 'https://apnews.com/article/trump-white-house-spanish-language-website-62224890c5b05c8ce0878358ba4a5266',
        linkText: 'AP',
      },

    ],
  },

  {
    id: 'States-Sue',
    categories: ['Immigration', 'Resist'],
    color: 'green',
    faicon: 'plane',
    date: '2025-01-21',
    title: '22 states sue to stop Trump\’s order blocking birthright citizenship',
    body: '“The president cannot, with a stroke of a pen, write the 14th Amendment out of existence, period,” New Jersey Attorney General Matt Platkin said.',
    links: [
      {
        href: 'https://apnews.com/article/birthright-citizenship-trump-executive-order-immigrants-fc7dd75ba1fb0a10f56b2a85b92dbe53',
        linkText: 'AP',
      },

      {
        href: 'https://edition.cnn.com/2025/01/21/politics/democratic-states-sue-birthright-citizenship-trump/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Arrest-At-Schools',
    categories: ['Fascism', 'Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-21',
    title: 'Trump says immigration authorities can arrest people at churches and schools',
    body: 'Administration overturns policies that for more than a decade restricted enforcement from \‘sensitive areas\’.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/jan/21/trump-ice-churches-schools-hospitals-sensitive-areas',
        linkText: 'The Guardian',
      },
      {
        href: 'https://apnews.com/article/justice-department-immigration-enforcement-f0e3fc616da9746796378d1cd6385b1b',
        linkText: 'AP',
      },
    ],
  },

  {
    id: 'Yes-False-Info',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-21',
    title: 'Trump signs order to end \‘government censorship\’ of social media',
    body: 'A sweeping action that could chill years of efforts to combat the proliferation of false information online.',
    links: [
      {
        href: 'https://archive.is/8QTai',
        linkText: 'Washington Post (via archive.is)',
      },
    ],
  },

  {
    id: 'J6Freed',
    categories: ['J6', 'Project 2025'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-21',
    title: 'Former OC Police Chief, Prominent Activist and Jan. 6 Rioter Freed',
    body: 'The man who "collected weapons for Jan. 6 and called for executions of politicians," said, "We are just getting started," upon his release.',
    links: [
      {
        href: 'https://patch.com/california/sanclemente/s/j46g2/former-oc-police-chief-prominent-activist-and-jan-6-rioter-freed?utm_term=article-slot-2&utm_source=newsletter-daily&utm_medium=email&utm_campaign=newsletter&user_email=7365fa8a2d2ebabd5914fa405416324c85fd63134570ec45cbc1edadb8a0ff1f&user_email_md5=c899ca5813293dc5ba7ae6b69b42553f&lctg=51f98d901e240a9c3f2373aa',
        linkText: 'Patch',
      },
    ],
  },


  {
    id: 'Constitution-404',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-21',
    title: 'The U.S. Constitution Delivers a 404 Now - Democracy not found',
    body: 'Arguably one of the most shocking changes to the president’s web footprint involves the U.S. Constitution. Anyone who now googles the Constitution and follows the link to the White House website currently sees a 404 error.',
    links: [
      {
        href: 'https://gizmodo.com/the-u-s-constitution-delivers-a-404-now-2000552847',
        linkText: 'Gizmodo',
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
    id: 'Bishop-Mercy',
    categories: ['Immigration', 'LGBTQ', 'Religion', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-01-21',
    title: 'Bishop at inaugural prayer service urges Trump to \'have mercy\' on LGBTQ children, immigrants',
    body: '“In the name of our God, I ask you to have mercy upon the people in our country who are scared now,” said Budde, who was looking directly at the president.',
    links: [
      {
        href: 'https://www.nbcnews.com/nbc-out/out-politics-and-policy/bishop-trump-inaugural-prayer-service-lgbtq-immigration-policie-rcna188590',
        linkText: 'NBC',
      },

      {
        href: 'https://edition.cnn.com/2025/01/21/politics/democratic-states-sue-birthright-citizenship-trump/index.html',
        linkText: 'CNN',
      },
    ],
  },


  {
    id: 'War-On-Trans',
    categories: ['Fascism', 'Project 2025', 'LGBTQ'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-01-20',
    title: 'Trump Declares War on Transgender People',
    body: 'Trump is expected to immediately move to end the federal government\’s recognition of transgender people',
    links: [
      {
        href: 'https://www.motherjones.com/politics/2025/01/trump-declares-war-on-transgender-people/',
        linkText: 'Mother Jones',
      },

      {
        href: 'https://edition.cnn.com/2025/01/20/politics/executive-actions-trump-day-1/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.politico.com/live-updates/2025/01/20/donald-trump-inauguration-day-news-updates-analysis/trump-repeals-transgender-troops-rule-00199577',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'US-Leave-WHO',
    categories: ['Global', 'Health'],
    color: 'red',
    faicon: 'globe',
    date: '2025-01-20',
    title: 'Trump declares U.S. will withdraw from the World Health Organization',
    body: 'Trump announced the start of the process for terminating U.S. membership in the U.N. agency that oversees global health issues.',
    links: [
      {
        href: 'https://www.npr.org/sections/goats-and-soda/2025/01/20/g-s1-42918/trump-world-health-organization-withdrawal',
        linkText: 'NPR',
      },

      {
        href: 'https://www.axios.com/2025/01/21/trump-world-health-organization-executive-order',
        linkText: 'Axios',
      },

      {
        href: 'https://archive.is/USvx7',
        linkText: 'NYT (via archive.is)',
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

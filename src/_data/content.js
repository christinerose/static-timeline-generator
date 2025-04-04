const header = `<p>America is Going Just Great<p>
    <p class="subHeader">A timeline of America\'s descent into a fascist hellscape.</p>
    <div class="nav"><a href="/">[timeline]</a> <a href="/resources/index.html">[resources]</a> <a href="/about/index.html">[about]</a> <a href="/index.xml"><img src="/img/rss.png" class="rssIcon" />RSS Feed</a></div>`;
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
  //Gun Violence = gun
  //Fascism = fire
  //Education = scroll
  //Resist = jedi
  //Climate = radiation
  //Health = virus
  //Global = globe
  //Tiddlywinks = democrat
  //FAFO = poo
  //Economy = coins
  //Civil Liberties = flag
  //Orwell = 

  //Start with "Fork in the Road" 29 Jan WTF Happened to catch up

  //Layoffs, DOGE work, restructuring, etc. = Project 2025
  //DOGE & J6 = Fascism
  //Orwell :: rewriting history, double speak, new speak, silencing dissent, etc.

  {
    id: 'Hands_Off',
    categories: ['Project 2025', 'Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-04-05',
    title: '‘Hands Off!’ protests against Trump and Musk are planned across the US',
    body: 'Opponents of President Donald Trump and billionaire Elon Musk plan to rally across the U.S. on Saturday to protest the administration’s actions on government downsizing, the economy, human rights and other issues. More that 1200 scheduled in all 50 states.',
    links: [
      {
        href: 'https://apnews.com/article/trump-musk-doge-protests-hands-off-472c574303260cbac315367cc808960d',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.nytimes.com/2025/04/05/us/politics/trump-protests-hands-off-saturday.html',
        linkText: 'New York Times',
      },
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/05/anti-trump-protests-hands-off',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Hands_Off_EU',
    categories: ['Project 2025', 'Resist', 'Fascism', 'Global'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-04-05',
    title: 'Hundreds of protesters turn out in European cities against Trump',
    body: 'Hundreds of people protested in European cities on Saturday against U.S. President Donald Trump and his adviser Elon Musk, following a bruising week for financial markets after Trump unveiled sweeping global tariffs.',
    links: [
      {
        href: 'https://www.reuters.com/world/europe/hundreds-protesters-turn-out-european-cities-against-trump-2025-04-05/',
        linkText: 'Reuters',
      },

      {
        href: 'https://www.france24.com/en/europe/20250405-hundreds-gather-across-europe-protest-against-trump-musk-hands-off-democrats',
        linkText: 'France 24',
      },
    ],
  },

  {
    id: 'UK_Shackled',
    categories: ['Project 2025', 'Fascism', 'Global', 'Immigration'],
    color: 'red',
    faicon: 'fire',
    date: '2025-04-05',
    title: 'I was a British tourist trying to leave America. Then I was detained, shackled and sent to an immigration detention centre',
    body: 'Graphic artist Rebecca Burke was on the trip of a lifetime. But as she tried to leave the US she was stopped, interrogated and branded an illegal alien by ICE.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/05/i-was-a-british-tourist-trying-to-leave-america-then-i-was-detained-shackled-and-sent-to-an-immigration-detention-centre',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'The_Base',
    categories: ['Global', 'Fascism', 'Global', 'Immigration'],
    color: 'red',
    faicon: 'fire',
    date: '2025-04-05',
    title: 'US neo-Nazi group with Russia-based leader calls for targeted Ukraine attacks',
    body: 'The Base, terrorist group founded in 2018, free to export violence abroad as Trump pulls FBI from pursuing far right.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/05/the-base-neo-nazi-russia-ukraine',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Barack_Defend',
    categories: ['Project 2025', 'Fascism', 'Resist'],
    color: 'green',
    faicon: 'fire',
    date: '2025-04-05',
    title: 'Barack Obama calls on Americans to defend democratic values in face of Trump agenda',
    body: 'The two-term former Democratic president painted a picture of the Trump White House looking to upend the international order created after the second world war.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/05/barack-obama-trump-agenda',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'CA_Tariff',
    categories: ['Project 2025', 'Global', 'Resist', 'Tariff War', 'Economy'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-04-04',
    title: 'California to Negotiate Trade With Other Countries to Bypass Trump Tariffs',
    body: 'California, the world\'s fifth-largest economy, plays a crucial role in driving U.S. economic growth. As the largest importer and second-largest exporter among U.S. states, with over $675 billion in two-way trade, it holds significant economic influence.',
    links: [
      {
        href: 'https://www.newsweek.com/california-newsom-trade-trump-tariffs-2055414',
        linkText: 'Newsweek',
      },
    ],
  },

  {
    id: 'Test_Russia',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-04',
    title: 'US ‘testing’ if Russia is serious about peace in Ukraine',
    body: 'Secretary of State says Putin ‘will have to make a decision’ as US officials appear to be growing impatient.',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/apr/04/us-russia-peace-in-ukraine-marco-rubio-nato',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Doge_Mistakes',
    categories: ['Project 2025', 'DOGE', 'Economy', 'Health'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-04',
    title: 'RFK Jr says 20% of Doge’s health agency job cuts were mistakes',
    body: 'Health secretary says roles will need to be reinstated amid Trump administration’s push to slash federal workforce.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/04/rfk-jr-doge-cuts',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Oil_Exempt',
    categories: ['Fascism', 'Global', 'Tariff War', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-04',
    title: '‘Oligarchy’: Trump exempts big oil donors from tariffs package',
    body: 'Trump’s new 10% universal tariffs will not apply to many fossil fuel products in sign of his fealty.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/04/trump-exempts-big-oil-donors-from-tariffs',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Wont_Back_Down',
    categories: ['Project 2025', 'Tariff War', 'Economy', 'Global'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-04',
    title: 'Trump insists he won’t back down from global trade war as markets slump',
    body: 'Donald Trump doubled down on his decision to launch a global trade war, declaring that he would “never” back off from sweeping tariffs on US trading partners.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/04/trump-tariffs-truth-social',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Higher_Inflation',
    categories: ['Project 2025', 'Tariff War', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-04',
    title: 'Trump’s tariffs will likely mean ‘higher inflation and slower growth’',
    body: 'While the US economy remains robust, Jerome Powell cautions there is high uncertainty over its direction.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/04/trump-tariffs-higher-inflation-slower-growth-fed-chair',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Tariffs_ChatGPT',
    categories: ['Project 2025', 'Global', 'Tariff War', 'Economy', 'Resist', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-04-03',
    title: 'Critics suspect Trump’s weird tariff math came from chatbots',
    body: 'Trump accused of consulting chatbots after critics mock tariffs on islands of penguins.',
    links: [
      {
        href: 'https://arstechnica.com/tech-policy/2025/04/critics-suspect-trumps-weird-tariff-math-came-from-chatbots/',
        linkText: 'Arts Technica',
      },
      {
        href: 'https://www.theverge.com/news/642620/trump-tariffs-formula-ai-chatgpt-gemini-claude-grok',
        linkText: 'The Verge',
      },
    ],
  },

  {
    id: 'Exclude_Russia_Iran',
    categories: ['Project 2025', 'Global', 'Tariff War', 'Economy'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-03',
    title: 'Trump\'s targets for \'reciprocal\' tariffs include uninhabited islands but exclude Russia and Iran',
    body: 'Trump\'s sweeping new set of tariffs impact friend and foe alike, but also on the list are uninhabited islands while some glaring omissions include Russia and Iran.',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/trumps-targets-reciprocal-tariffs-include-uninhabited-islands-exclude/story?id=120445283',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Unlikely_Targets',
    categories: ['Project 2025', 'Global', 'Tariff War', 'Economy', 'Resist', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-04-03',
    title: 'An uninhabited island, a military base and a ‘desolate’ former whaling station. Trump’s tariffs include unlikely targets',
    body: 'The sweeping tariffs announced by US President Donald Trump on Wednesday target not only economic superpowers but also financial minnows. In fact, a White House list notes some territories with no economy, and no people, at all.',
    links: [
      {
        href: 'https://www.cnn.com/2025/04/03/business/trump-tariffs-uninhabited-islands-intl-hnk/',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Open_Negotiation',
    categories: ['Project 2025', 'Global', 'Tariff War', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-03',
    title: 'Trump open to tariff negotiations, contradicting White House aides',
    body: 'Investors and global leaders have been trying to understand the purpose of sprawling new import duties.',
    links: [
      {
        href: 'https://www.washingtonpost.com/business/2025/04/03/tariffs-trump-global-trade-talks/',
        linkText: 'Washington Post',
      },
    ],
  },
 
  {
    id: 'Elon_Leave',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-03',
    title: 'Trump says Musk will probably leave in ‘a few months’',
    body: 'Musk has spearheaded the Department of Government Efficiency, which is playing a leading role in downsizing and overhauling the federal government. Trump said that work would continue within various agencies.',
    links: [
      {
        href: 'https://apnews.com/article/trump-musk-doge-tesla-government-cuts-c47211544c5382a6207779ee95c6060b',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Tariffs_Calculated',
    categories: ['Project 2025', 'Global', 'Tariff War', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-03',
    title: 'How Are Trump’s Tariff Rates Calculated?',
    body: 'The answer appears to begin with the total trade deficit America runs with its trading partners.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/04/02/business/economy/trump-tariff-rates-calculation.html',
        linkText: 'New York Times',
      },
    ],
  },
 
  {
    id: 'No_Where_Safe',
    categories: ['Project 2025', 'Global', 'Tariff War', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-03',
    title: '‘Nowhere on Earth is safe’: Trump imposes tariffs on uninhabited islands near Antarctica',
    body: 'Australian prime minister surprised after external territories – including tiny Norfolk Island and remote islands home to penguins – targeted by US president',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/03/donald-trump-tariffs-antarctica-uninhabited-heard-mcdonald-islands',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Putin_Investment_Tsar',
    categories: ['Project 2025', 'Global', 'Tariff War', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-03',
    title: 'No Trump tariff on Russia as his officials host Putin investment tsar',
    body: 'Vladimir Putin’s investment envoy Kirill Dmitriev met with US officials in Washington on Wednesday',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/apr/03/ukraine-war-briefing-deadly-ballistic-missile-strike-on-zelenskyy-home-town',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Asian_Disaster_Tariffs',
    categories: ['Project 2025', 'Global', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-03',
    title: 'Asian countries riven by war and disaster face some of steepest Trump tariffs',
    body: 'Myanmar, Cambodia and Laos hit with rates over 40% as experts say the real target is China',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/03/donald-trump-tariffs-us-administration-countries-biggest-rates-china-myanmar-mandalay',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Stocks_Not_Boom',
    categories: ['Project 2025', 'Economy', 'Tariff War', 'Global'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-03',
    title: 'US markets see worst day in five years as president claims ‘stock is going to boom’',
    body: 'The New York stock exchange closed on its worst day of trading since June 2020 – during the early months of the Covid-19 pandemic.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/live/2025/apr/03/donald-trump-tariffs-world-trade-republicans-join-democrats-block-canada-tariffs-us-politics-latest-news-updates',
        linkText: 'The Guardian',
      },
      {
        href: 'https://apnews.com/article/stocks-markets-rates-tariffs-52dbb020a4c41122e31669c2da236d67',
        linkText: 'Associated Press',
      },
      {
        href: 'https://abcnews.go.com/Politics/trust-president-trump-white-house-defending-tariffs-amid/story?id=120449641',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'CDC_Fired_Staff',
    categories: ['Project 2025', 'DOGE', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-04-03',
    title: 'Staff working on childhood lead exposure and cancer clusters fired from CDC',
    body: 'The entire permanent staff of the Division of Environmental Health Science and Practice was cut, according to one person who was among the approximately 200 fired from the division.',
    links: [
      {
        href: 'https://thehill.com/policy/energy-environment/5230504-staff-working-on-childhood-lead-exposure-and-cancer-clusters-fired-from-cdc/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Amazon_TikTok',
    categories: ['Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-02',
    title: 'Amazon’s last-minute bid for TikTok comes as a US ban on the platform is set to take effect Saturday',
    body: 'The existence of an Amazon bid surfaced as Trump was scheduled on Wednesday to meet with senior officials to discuss the coming deadline for a TikTok sale.',
    links: [
      {
        href: 'https://apnews.com/article/trump-tiktok-amazon-bytedance-china-us-ban-19f62e2dba637a0d1a0b41102a2f351f',
        linkText: 'Associated Press',
      },
      {
        href: 'https://www.nytimes.com/2025/04/02/business/media/amazon-tiktok-bid.html',
        linkText: 'New York Times',
      },
      {
        href: 'https://www.cnn.com/2025/04/02/politics/trump-to-weigh-options-for-potential-tiktok-deal/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Gameshow_Host',
    categories: ['Project 2025', 'Economy', 'Tariff War', 'Global'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-02',
    title: 'Trump goes full gameshow host to push his tariff plan – and nobody’s a winner',
    body: 'There were charts and scores, as if The Price Is Right had come to Washington. The big prize? A global trade war.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/02/donald-trump-builds-a-wall-made-of-tariffs-enclosing-the-whole-us',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Sentae_Rebukes',
    categories: ['Project 2025', 'Economy', 'Tariff War', 'Global'],
    color: 'green',
    faicon: 'coins',
    date: '2025-04-02',
    title: 'Senate rebukes Trump’s tariffs as some Republicans vote to halt taxes on Canadian imports',
    body: 'The Senate passed a resolution Wednesday night that would thwart President Donald Trump’s ability to impose tariffs on Canada, delivering a rare rebuke to the president just hours after he unveiled sweeping plans to clamp down on international trade.',
    links: [
      {
        href: 'https://apnews.com/article/congress-tariffs-trump-republicans-a45b4d4da013e4ce1ce434b81337e3ec',
        linkText: 'Associated Press',
      },
      {
        href: 'https://www.npr.org/2025/04/02/nx-s1-5347699/senate-trump-tariffs-canada',
        linkText: 'NPR',
      },
      {
        href: 'https://www.nytimes.com/2025/04/02/us/politics/senate-democrats-canada-tariffs-trump.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'UK_Tariffs',
    categories: ['Project 2025', 'Economy', 'Tariff War', 'Global'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-02',
    title: 'Trump hits UK with 10% tariffs as he ignites global trade war',
    body: 'Britain gets off comparatively lightly but US president’s action could still cost billions in lost growth.',
    links: [
      {
        href: 'https://www.theguardian.com/politics/2025/apr/02/trump-hits-uk-with-10-tariffs-as-he-ignites-global-trade-war',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Economic_Scramble',
    categories: ['Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-02',
    title: 'Trump’s wall of tariffs is likely to raise prices and cause chaos for business',
    body: 'President promised liberation yet may have plunged the US into recession and the world into an economic scramble',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/02/donald-trump-builds-a-wall-made-of-tariffs-enclosing-the-whole-us?CMP=Share_iOSApp_Other',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Trans_Military_Health',
    categories: ['Project 2025', 'LGBTQ', 'Health'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-04-02',
    title: 'Trans soldiers served their country. Now the US is rolling back their healthcare',
    body: 'Blake is one of about 134,000 transgender veterans living in the US. It’s an alarming time to be someone like her.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/02/trans-soldiers-veterans-healthcare',
        linkText: 'The Guardian',
      },
    ],
  },
  
  {
    id: 'Johnson_Fails',
    categories: ['Project 2025', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-04-02',
    title: 'Johnson Fails to Kill Bipartisan Measure to Allow Proxy Voting for New Parents',
    body: 'The speaker tried to use an unprecedented parliamentary maneuver to deny a bipartisan majority the chance to hold a vote on their proposal to allow new parents to vote remotely in the House.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/04/01/us/politics/house-proxy-voting-parents-mike-johnson.html',
        linkText: 'New York Times',
      },
      {
        href: 'https://www.nbcnews.com/politics/congress/gop-lawmakers-speaker-mike-johnson-proxy-voting-fight-rcna199087',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Increase_Weapon_Export',
    categories: ['Project 2025', 'WW3'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-02',
    title: 'Trump preparing executive order to increase weapons exports',
    body: 'Trump\'s administration is planning an executive order that would ease rules governing exports of military equipment.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trump-preparing-executive-order-increase-weapons-exports-sources-say-2025-04-01/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Wisconsin_Democrat',
    categories: ['Resist', 'Project 2025', 'Tiddlywinks', 'FAFO', 'DOGE'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-04-02',
    title: 'Democratic-backed Susan Crawford wins Wisconsin Supreme Court seat, cementing liberal majority',
    body: 'Musk and groups he backed had spent more than $21 million in an effort to defeat Crawford. Musk even traveled to Wisconsin two days before the election to personally hand over $1 million checks to two voters.',
    links: [
      {
        href: 'https://apnews.com/article/wisconsin-supreme-court-elon-musk-trump-8fe006c7f8fa40b663eccd6751bada98',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Turkish_Student',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-04-02',
    title: 'Turkish student detained by ICE moved to Vermont before judge’s order',
    body: 'Rumeysa Ozturk, 30, was taken by immigration officials as she walked along a street in the Boston suburb of Somerville on March 25.',
    links: [
      {
        href: 'https://apnews.com/article/rumeysa-ozturk-deportation-tufts-massachusetts-student-1dd330bef8fb44b05f9818c0020728a0',
        linkText: 'Associated Press',
      },
    ],
    },

  {
    id: '40_People_Gangs',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-04-02',
    title: 'More than 40 people arrested near Dripping Springs over alleged connection to Venezuelan gang',
    body: 'The Trump administration designated Tren de Aragua as a foreign terrorist organization on Inauguration Day and deported hundreds of people believed to be involved in the gang in March.',
    links: [
      {
        href: 'https://www.kut.org/crime-justice/2025-04-02/hays-county-texas-tren-de-aragua-gang-ice',
        linkText: 'KUT News, Austin',
      },
    ],
    },

  {
    id: 'ICE_Quotas',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-04-02',
    title: 'ICE Is Using Pure Bullshit To Turn People Into Venezuelan Gang Members To Keep Hitting Its Daily Arrest Quota',
    body: 'The Trump Administration is now just disappearing people for exercising their First Amendment rights.',
    links: [
      {
        href: 'https://www.techdirt.com/2025/04/02/ice-is-using-pure-bullshit-to-turn-people-into-venezuelan-gang-members-to-keep-hitting-its-daily-arrest-quota/',
        linkText: 'TechDirt',
      },
    ],
    },

    {
      id: 'Tren_De_Aragua',
      categories: ['Immigration', 'Fascism', 'Civil Liberties'],
      color: 'red',
      faicon: 'plane',
      date: '2025-04-01',
      title: 'Trump deported 238 Venezuelans to El Salvador. Dozens have active asylum cases',
      body: 'The U.S. government has provided scant information about the deportees, beyond alleging that they are members of Tren de Aragua, a transnational criminal group from Venezuela that the Trump administration has designated a foreign terrorist organization.',
      links: [
        {
          href: 'https://www.reuters.com/world/americas/trump-deported-238-venezuelans-el-salvador-dozens-have-active-asylum-cases-2025-04-01/',
          linkText: 'Reuters',
        },
      ],
      },

  {
    id: 'Wisconsin_Florida',
    categories: ['Resist', 'Project 2025', 'Tiddlywinks', 'FAFO', 'DOGE'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-04-01',
    title: 'What to watch as Wisconsin and Florida host the first major elections of Trump\'s second term',
    body: 'Elon Musk has become a major player in the Wisconsin Supreme Court race, while Republicans will be put to the test in Trump territory in Florida.',
    links: [
      {
        href: 'https://apnews.com/article/wisconsin-supreme-court-elon-musk-trump-8fe006c7f8fa40b663eccd6751bada98',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Security_Breach_Email',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-01',
    title: 'National security adviser Michael Waltz reportedly conducted business via Gmail',
    body: 'Latest security flap again focuses scrutiny on Waltz after he earlier added journalist to Yemen war-planning chat',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/02/michael-waltz-gmail-signal-national-security',
        linkText: 'The Guardian',
      },
      {
        href: 'https://www.axios.com/2025/04/01/mike-waltz-signal-gmail-security',
        linkText: 'Axios',
      },

    ],
  },

  {
    id: 'TN_Civil_Liberties',
    categories: ['Immigration', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-01',
    title: 'Bill to abolish Tennessee Human Rights Commission advances',
    body: 'Bill would transfer civil rights enforcement power to the Attorney General, whose embrace of conservative causes has been criticized by Democrats as politically motivated',
    links: [
      {
        href: 'https://tennesseelookout.com/2025/04/01/bill-to-abolish-tennessee-human-rights-commission-advances/',
        linkText: 'Tennessee Lookout',
      },
    ],
  },


  {
    id: 'TN_Proof_Citizenship',
    categories: ['Immigration', 'Project 2025', 'Education'],
    color: 'red',
    faicon: 'plane',
    date: '2025-04-01',
    title: 'Bill that allows TN schools to require students to show citizenship status passes Senate committee',
    body: 'The bill passed a Senate committee Tuesday with seven \'ayes\' and four \'nays.\'',
    links: [
      {
        href: 'https://www.wbir.com/article/news/education/k-12-students-required-to-show-citizenship-to-enroll-in-tennessee-schools/51-42baa4eb-31d9-40ca-a41d-b414dc786a91',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Idaho_Block_Services',
    categories: ['Immigration', 'Project 2025', 'Health'],
    color: 'red',
    faicon: 'plane',
    date: '2025-04-01',
    title: 'Idaho Legislature passes bill blocking unauthorized immigrants from public services',
    body: 'Bill would cut few publicly funded services unauthorized immigrants can receive.',
    links: [
      {
        href: 'https://idahocapitalsun.com/2025/04/01/idaho-legislature-passes-bill-blocking-unauthorized-immigrants-from-public-services/',
        linkText: 'Idaho Capital Sun',
      },
    ],
  },

  {
    id: 'Pardons_Corporation',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-01',
    title: 'Trump makes history by pardoning a corporation',
    body: 'Trump issued full and unconditional pardons to four individuals and a related cryptocurrency exchange, BitMEX.',
    links: [
      {
        href: 'https://thehill.com/opinion/criminal-justice/5224229-trump-makes-history-by-pardoning-a-corporation/',
        linkText: 'The Hill',
      },

    ],
  },

  {
    id: 'Massive_Health_Layoffs',
    categories: ['Economy', 'Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-04-01',
    title: 'Mass layoffs are underway at the nation’s public health agencies',
    body: 'The cuts include researchers, scientists, doctors, support staff and senior leaders, leaving the federal government without many of the key experts who have long guided U.S. decisions on medical research, drug approvals and other issues.',
    links: [
      {
        href: 'https://apnews.com/article/health-human-services-layoffs-restructuring-rfk-jr-ec4d7731695e4204970c7eab953b2289',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'States_Sue_Trump',
    categories: ['Resist', 'Project 2025', 'Health', 'Courts', 'FAFO'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-04-01',
    title: 'States sue Trump administration for rescinding billions in health funding',
    body: 'The lawsuit argues the cuts are illegal, and that the federal government did not provide “rational basis” or facts to support the cuts.',
    links: [
      {
        href: 'https://apnews.com/article/trump-covid-federal-money-lawsuit-e2fcacccfda994500ce92be94d1ada7d',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Booker_25-HR_Speech',
    categories: ['Resist', 'Project 2025', 'Tiddlywinks'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-04-01',
    title: 'Sen. Cory Booker breaks Senate record with marathon 24-hour speech protesting Trump and Musk',
    body: 'Booker\'s speech, which began Monday evening, continued for a total of 25 hours and 4 minutes. He said, ""This is our moral moment. This is when the most precious ideas of our country are being tested."',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/booker-stages-senate-filibuster-protest-crisis-trump-musk/story?id=120365354',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'DOGE_Misogynist',
    categories: ['Project 2025', 'Health', 'Economy'],
    color: 'red',
    faicon: 'virus',
    date: '2025-04-01',
    title: 'Thousands of US health agency workers laid off in overhaul led by RFK Jr',
    body: 'Trump administration begins reducing Health and Human Services workforce as Kennedy plans up to 10,000 job cuts',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/trump-health-agency-layoffs-cuts',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'DOGE_Misogynist',
    categories: ['Project 2025', 'DOGE', 'Women'],
    color: 'red',
    faicon: 'venus',
    date: '2025-04-01',
    title: 'Doge employee allegedly has history of misogyny, racism and violent outbursts',
    body: 'Rolling Stone interviews with 10 people reveal claims that Jeremy Lewin threatened a girl with a knife and openly shared racist views.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/doge-employee-misogyny-racism-violence',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'EU_Strong_Plan',
    categories: ['Global', 'Project 2025', 'Economy', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-01',
    title: 'EU has a ‘strong plan’ to retaliate on Trump tariffs',
    body: 'Head of European Commission says bloc would prefer to negotiate but all countermeasures are on the table.',
    links: [
      {
        href: 'https://www.theguardian.com/business/2025/apr/01/eu-has-a-strong-plan-to-retaliate-on-trump-tariffs-says-von-der-leyen',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Liberation_Day_Expect',
    categories: ['Global', 'Project 2025', 'Economy', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-04-01',
    title: 'Trump’s ‘liberation day’ tariffs: what to expect and will the UK be spared?',
    body: 'EU and UK leaders are concerned about the possibility of sectoral tariffs, as well as permanent levies he may impose to counter Europe’s VAT rates, which he considers a de facto tax.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/trumps-liberation-day-tariffs-what-to-expect-and-will-the-uk-be-spared',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'GOP_Join_Dems',
    categories: ['Resist', 'Project 2025', 'FAFO', 'Economy', 'Tariff War'],
    color: 'green',
    faicon: 'coins',
    date: '2025-04-01',
    title: 'Senate Republicans consider joining Democrats to oppose Trump over tariffs',
    body: 'Republican defections would amount to rare public rebuke as concerns mount over impact of president’s plans',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/senate-republicans-trump-tariffs',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Booker_20-HR_Speech',
    categories: ['Resist', 'Project 2025', 'Tiddlywinks'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-04-01',
    title: 'Cory Booker holds marathon Senate speech to warn of Trump’s ‘harmful’ policies',
    body: 'Democratic New Jersey senator’s address saying ‘our nation is in crisis’ passed the 20-hour mark on Tuesday afternoon',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/cory-booker-senate-speech-trump',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Musk_Fire_USAID',
    categories: ['Economy', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-04-01',
    title: 'Musk’s Doge to fire all local workers and US diplomats from USAID',
    body: 'Unofficial Trump adviser’s cost-cutting team to finalize shuttering the foreign aid agency on which millions depend',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/musk-doge-usaid-firings',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Women_Lose_Contraception',
    categories: ['Health', 'Project 2025', 'Women', 'Global'],
    color: 'red',
    faicon: 'venus',
    date: '2025-04-01',
    title: 'Millions of Women Will Lose Access to Contraception as a Result of Trump Aid Cuts',
    body: 'The United States was a key supplier of contraceptives in many developing countries. The Trump administration has ended that support.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/04/01/health/usaid-contraception-cuts.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Eggs_Expensive',
    categories: ['Economy', 'Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'coins',
    date: '2025-04-01',
    title: 'About a third of Americans stop buying eggs due to rising costs, study shows',
    body: 'Data says 34% of those in US stopped purchasing breakfast staple and won’t buy again until costs lower to $5 a carton',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/apr/01/buying-eggs-cost',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Tattoos_ElSalvador',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-31',
    title: 'How the Trump administration is using tattoos to lock up immigrants in El Salvador',
    body: 'Venezuelan men in streetwear with Michael Jordan and autism awareness tattoos could add up enough ‘points’ for their removal from the United States.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/trump-tattoos-migrants-el-salvador-b2724820.html',
        linkText: 'The Independent',
      },
    ],
    },

  {
    id: 'Alabama_Cant_Prosecute',
    categories: ['Fascism', 'Women', 'Courts', 'Civil Liberties', 'Resist'],
    color: 'green',
    faicon: 'venus',
    date: '2025-03-31',
    title: 'Alabama can’t prosecute groups who help women travel to get an abortion',
    body: 'U.S. District Judge Myron Thompson sided with an abortion fund and medical providers who sued Alabama Attorney General Steve Marshall after he suggested they could face prosecution under anti-conspiracy laws. Thompson’s ruling declared that such prosecutions would violate both the First Amendment and a person’s right to travel.',
    links: [
      {
        href: 'https://apnews.com/article/alabama-abortion-travel-ruling-96ac1af6618ee8005862df2699e757d5',
        linkText: 'Associated Press',
      },,
    ],
  },

  {
    id: 'Musk_Bribes_$1m',
    categories: ['Fascism', 'DOGE', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-31',
    title: 'Musk hands out $1M checks after efforts to block the giveaways in court are rejected',
    body: 'A lawsuit aimed to stop Elon Musk and America PAC giving millions away Sunday.',
    links: [
      {
        href: 'https://abcnews.go.com/US/wisconsin-supreme-court-rejects-effort-block-musks-1m/story?id=120319945',
        linkText: 'ABC',
      },
      {
        href: 'https://www.npr.org/2025/03/31/nx-s1-5338901/wisconsin-judge-election-musk-trump-abortion',
        linkText: 'NPR',
      },
    ],
  },


  {
    id: 'Legal_Deported_Prison',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-31',
    title: 'An ‘Administrative Error’ Sends a Maryland Father to a Salvadoran Prison',
    body: 'The Trump administration says that it mistakenly deported an immigrant with protected status but that courts are powerless to order his return.',
    links: [
      {
        href: 'https://www.theatlantic.com/politics/archive/2025/03/an-administrative-error-sends-a-man-to-a-salvadoran-prison/682254/',
        linkText: 'The Atlantic',
      },

      {
        href: 'https://www.cnn.com/2025/04/01/politics/maryland-father-mistakenly-deported-el-salvador-prison/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://apnews.com/article/el-salvador-deportation-maryland-man-trump-error-818a0fa1218de714448edcb5be1f7347',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Social_Media_Green_Card',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-31',
    title: 'More than a background check? US may scan social media for green card vetting',
    body: 'The proposal follows an executive order from former President Donald Trump aimed at enhancing national security and vetting standards.',
    links: [
      {
        href: 'https://economictimes.indiatimes.com/nri/latest-updates/us-immigration-officials-look-to-collect-social-media-handles-from-those-seeking-benefits-is-this-new/articleshow/119753216.cms?from=mdr',
        linkText: 'Economic Times',
      },
    ],
  },

  {
    id: 'DOGE_Gift_Bulting',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-31',
    title: 'DOGE Is Trying to Gift Itself a $500 Million Building',
    body: 'Documents reveal a DOGE affiliate is attempting to transfer the headquarters of an independent think tank, the United States Institute of Peace, to the government at no cost.',
    links: [
      {
        href: 'https://www.wired.com/story/doge-takes-control-usip-office-building/',
        linkText: 'Wired',
      },
    ],
  },

  {
    id: 'Repopulate_FarRight',
    categories: ['Project 2025', 'Discrimination', 'Fascism', 'Orwell'],
    color: 'red',
    faicon: 'person',
    date: '2025-03-31',
    title: 'Far-Right Influencers Are Hosting a $10K-per-Person Matchmaking Weekend to Repopulate the Earth',
    body: 'A pronatalist conference with far-right ties in Austin, Texas, this weekend have set up matchmaking events for attendees that include the option of getting married onsite as part of their greater effort to repopulate the world.',
    links: [
      {
        href: 'https://www.wired.com/story/natal-conference-matchmaking/',
        linkText: 'Wired',
      },
    ],
  },

  {
    id: 'DOGE_Access',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-31',
    title: 'DOGE staffer who shared Treasury data now has more access to government systems',
    body: 'The DOGE staffer who resigned from his post over old racist tweets — and who broke data-sharing rules, an audit found — has been rehired to work with sensitive data at several federal agencies.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/31/nx-s1-5345708/doge-data-access-labor-cfpb-hhs',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Liberation_Day_Tomorrow',
    categories: ['Economy', 'Project 2025', 'Global', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-31',
    title: 'Wall Street swings again as the approach of Trump’s ‘Liberation Day’ wallops stock markets worldwide',
    body: 'Such neck-twisting turns have become routine for the U.S. stock market recently because of uncertainty about what Trump will do with tariffs — and by how much they will worsen inflation and grind down growth for economies.',
    links: [
      {
        href: 'https://apnews.com/article/stocks-markets-rates-tariffs-9bbb04d6b66ccbda4f5856a179df20e3',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.cnn.com/2025/03/31/investing/us-stocks-trump-tariff-uncertainty/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Trump_Threatens_Iran',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-30',
    title: 'Trump threatens bombing if Iran does not make nuclear deal',
    body: 'Since Trump’s election and the resumption of his “maximum pressure” campaign on Tehran, Iran’s rial currency has gone into a freefall.',
    links: [
      {
        href: 'https://www.reuters.com/world/trump-says-there-will-be-bombing-if-iran-does-not-make-nuclear-deal-2025-03-30/',
        linkText: 'Reuters',
      },

      {
        href: 'https://apnews.com/article/iran-rejects-direct-negotiations-trump-letter-us-c414743a567c574b6f48f64a2e889f31',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Trump_Angry_Putin',
    categories: ['WW3', 'Project 2025', 'Global', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-30',
    title: 'Trump criticizes Putin and threatens adversaries with new tariffs as he barrels toward April 2 deadline',
    body: 'Trump said in an early-morning phone call that if he believes Russia is at fault for a ceasefire\'s not being reached with Ukraine, he may impose secondary tariffs on Russian oil.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/30/politics/trump-criticizes-putin-and-threatens-adversaries-with-new-tariffs/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.nbcnews.com/politics/donald-trump/trump-angry-putin-zelenskyy-iran-sanctions-rcna198729',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'CompSci_Incommunicado',
    categories: ['Orwell', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-30',
    title: 'FBI raids home of prominent computer scientist who has gone incommunicado',
    body: 'A prominent computer scientist who has spent 20 years publishing academic papers on cryptography, privacy, and cybersecurity has gone incommunicado, had his professor profile, email account, and phone number removed by his employer, Indiana University, and had his homes raided by the FBI. No one knows why.',
    links: [
      {
        href: 'https://arstechnica.com/security/2025/03/computer-scientist-goes-silent-after-fbi-raid-and-purging-from-university-website/',
        linkText: 'Arts Technica',
      },
    ],
  },

  {
    id: 'Trump_3rd',
    categories: ['Orwell', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-30',
    title: 'Trump says he’s considering ways to serve a third term as president',
    body: 'President Donald Trump said Sunday that “I’m not joking” about trying to serve a third term, the clearest indication he is considering ways to breach a constitutional barrier against continuing to lead the country after his second term ends at the beginning of 2029.',
    links: [
      {
        href: 'https://apnews.com/article/trump-third-term-constitution-22nd-amendment-efba31be02ee96b0ef68b17fe89b7578',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.theatlantic.com/politics/archive/2025/03/trump-third-term/682243/',
        linkText: 'The Atlantic',
      },

      {
        href: 'https://www.npr.org/2025/03/30/g-s1-57231/trump-third-term',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Detention_Alley',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-29',
    title: '‘Detention Alley’: inside the Ice centres in the US south where foreign students and undocumented migrants languish',
    body: 'Foreign nationals caught up in Trump’s immigration dragnet are transported sometimes thousands of miles away to an isolated network of lockups and courts.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/29/ice-detention-centers-immigration-asylum',
        linkText: 'The Guardian',
      },
    ],
    },

  {
    id: 'Italy_Tariffs_Reasoned',
    categories: ['Economy', 'Project 2025', 'Global', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-29',
    title: 'Italian PM calls for ‘reasoned’ approach to escalating tariff war between EU and US',
    body: 'Giorgia Meloni says it is her responsibility to defend transatlantic unity in face of looming US levies',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/29/italian-pm-calls-for-reasoned-approach-to-escalating-tariff-war-between-eu-and-us',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Auto_Raise',
    categories: ['Economy', 'Project 2025', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-29',
    title: 'Trump says he ‘couldn’t care less’ if foreign automakers raise prices due to tariffs',
    body: 'Asked what his recent message was to motor industry CEOs, and whether he had warned them against raising prices, Trump said, “The message is congratulations, if you make your car in the United States, you’re going to make a lot of money.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/donald-trump/trump-says-couldnt-care-less-automakers-raise-prices-tariffs-rcna198731',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Physicists_Burner',
    categories: ['Global', 'Orwell', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-29',
    title: 'When the physicists need burner phones, that’s when you know America’s changed',
    body: 'US academics, fearing persecution by their own government, are becoming ideological refugees. Europe, and Britain, must offer them sanctuary.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/29/when-the-physicists-need-burner-phones-thats-when-you-know-americas-changed',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Cybertruck_Day',
    categories: ['FAFO', 'Project 2025', 'DOGE', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-29',
    title: 'My Day Inside America’s Most Hated Car',
    body: 'People have targeted the car—and Tesla as a whole—to protest Elon Musk’s role in Donald Trump’s administration. But out of sheer masochism, or stupidity, I still went ahead and spent a day driving one.',
    links: [
      {
        href: 'https://www.theatlantic.com/technology/archive/2025/03/cybertruck-washington-dc/682232/',
        linkText: 'The Atlantic',
      },
    ],
  },

  {
    id: 'SCOTUS_Alien_Enemies',
    categories: ['Immigration', 'Fascism', 'Civil Liberties', 'Courts'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-28',
    title: 'Trumps calls on Supreme Court to let him deport Venezuelans under Alien Enemies Act',
    body: 'Administration wants court to resume summary removals after deporting dozens of immigrants to El Salvador prison.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/trump-deportation-ice-venezuela-supreme-court-b2723431.html',
        linkText: 'The Independent',
      },
    ],
    },

  {
    id: 'LGBTQ_Flag_Ban',
    categories: ['LGBTQ', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-28',
    title: 'Utah becomes first state to ban LGBTQ+ pride flags in government buildings and schools',
    body: 'The new law could stoke conflict between the state and its largest city. City buildings in liberal Salt Lake City typically honor Pride Month each June by displaying flags that celebrate its large LGBTQ+ population.',
    links: [
      {
        href: 'https://apnews.com/article/lgbtq-pride-flag-ban-utah-school-republican-ced0db22bd0ce8d37e010e9a65fec220',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Core_Inflation',
    categories: ['Economy', 'Project 2025'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-28',
    title: 'Core inflation in February hits 2.8%, higher than expected; spending increases 0.4%',
    body: 'Core inflation excludes volatile food and energy prices and is generally considered a better indicator of long-term inflation trends.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/28/pce-inflation-february-2025-.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'Manginone_Bill',
    categories: ['Health', 'Resist', 'Project 2025'],
    color: 'green',
    faicon: 'virus',
    date: '2025-03-28',
    title: 'Proposed California ballot initiative ‘Luigi Mangione Act’ would make it harder for insurers to deny medical care',
    body: 'The initiative would make it illegal for an insurance company to “delay, deny or modify any medical procedure or medication” suggested by a licensed physician in the Golden State.',
    links: [
      {
        href: 'https://ktla.com/news/california/proposed-california-ballot-initiative-luigi-mangione-act-would-make-it-harder-for-insurers-to-deny-medical-care/',
        linkText: 'KTLA',
      },
    ],
  },


  {
    id: 'HHS_Jobs',
    categories: ['Economy', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-28',
    title: 'Health and Human Services will lay off 10,000 workers and close agencies in a major restructuring',
    body: '“Public health experts, doctors, current and former HHS workers and congressional Democrats quickly panned Kennedy’s plans, warning they could have untold consequences for millions of people.',
    links: [
      {
        href: 'https://apnews.com/article/health-human-services-layoffs-restructuring-rfk-jr-fa4e89285e668a3939e20b6cf4c26fd4',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'MAGA_Fired_FAFO',
    categories: ['Economy', 'Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-28',
    title: '‘MAGA Junkie’ Fired in DOGE Cuts Now Regrets Voting for Trump: ‘I Expected Better’',
    body: '“I was a MAGA junkie, a MAGA junkie who thought her government job would be safe with Donald Trump in office,” says West Virginia woman fired from the Bureau of Fiscal Service.',
    links: [
      {
        href: 'https://www.thedailybeast.com/maga-junkie-fired-in-doge-cuts-now-regrets-voting-for-trump-i-expected-better/',
        linkText: 'The Daily Beast',
      },
    ],
  },

  {
    id: 'VaccineOfficial_Forced_Out',
    categories: ['Health', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-28',
    title: 'The top FDA vaccine official is forced out, cites RFK Jr.\'s \'misinformation and lies\'',
    body: 'The abrupt departure comes as concern has been mounting among many public health experts about moves involving vaccines under Kennedy, who has questioned vaccine safety and effectiveness.',
    links: [
      {
        href: 'https://www.npr.org/sections/shots-health-news/2025/03/28/nx-s1-5344010/fda-peter-marks-rfk-jr',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Smithsonian_Anti-American',
    categories: ['Orwell', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-28',
    title: 'Trump signs executive order accusing Smithsonian Institution of spreading \'anti-American ideology\'',
    body: 'The order directed JD Vance - a member of the Smithsonian Board of Regents - to eliminate "improper, divisive, or anti-American ideology" from Smithsonian museums, education and research centers and the National Zoo.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trump-signs-order-aiming-eliminate-anti-american-ideology-smithsonian-2025-03-27/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Greenland_Door2Door',
    categories: ['Resist', 'Project 2025', 'Global', 'FAFO'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-28',
    title: 'U.S. officials went door-to-door in Greenland to find anyone who wanted to be visited by the Vances. They found no one',
    body: 'A local travel company in Greenland’s capital also cancelled a planned visit by Usha Vance',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/greenland-usha-vance-visit-trump-b2722857.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'Greenland_Denmark',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-28',
    title: 'JD Vance says Denmark ‘has not done a good job by the people of Greenland’',
    body: 'US vice-president JD Vance said Denmark “has not done a good job at keeping Greenland safe,” accusing it of “underinvesting in the people of Greenland and … in the security architecture” of the island',
    links: [
      {
        href: 'https://www.theguardian.com/world/live/2025/mar/28/greenland-jd-vance-europe-ukraine-russia-latest-news-updates',
        linkText: 'The Guardian',
      },

      {
        href: 'https://www.nytimes.com/2025/03/28/us/politics/vance-greenland-visit-waltz.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Tattoos_Autism',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-27',
    title: 'Man Detained By ICE for Autism Awareness Tattoo Still Sent to Prison After Officers Declared Him \'Clean\'',
    body: 'The Venezuelan man\'s family only learned of his whereabout after CBS News published a list of inmates at El Salvador\'s Terrorism Confinement Center',
    links: [
      {
        href: 'https://www.latintimes.com/man-detained-ice-autism-awareness-tattoo-still-sent-prison-after-officers-declared-him-clean-579373',
        linkText: 'Los Angeles Times',
      },
    ],
    },

  {
    id: 'Detained_HealthCare',
    categories: ['Civil Liberties', 'Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-27',
    title: 'DC schools: DHS agents tried to ‘detain’ healthcare contractor at elementary school',
    body: 'the attempt by DHS was made inside the campus’ fenced-in parking lot as students and employees arrived at the school Wednesday morning.',
    links: [
      {
        href: 'https://wtop.com/dc/2025/03/dc-schools-dhs-agents-tried-to-detain-healthcare-contractor-at-elementary-school/',
        linkText: 'WTOP',
      },
    ],
  },

  {
    id: 'Greenland_Go-Far',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-27',
    title: 'Trump says US will \'go as far as we have to\' to get control of Greenland',
    body: 'The president suggested that "the world needs us to have Greenland."',
    links: [
      {
        href: 'https://abcnews.go.com/International/trump-us-control-greenland/story?id=120208823',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'More_Jobs',
    categories: ['Economy', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-27',
    title: 'Internal White House document details layoff plans across U.S. agencies',
    body: 'Federal officials are preparing for agencies to cut between 8 and 50 percent of their employees as part of a Trump administration push to shrink the federal government',
    links: [
      {
        href: 'https://www.washingtonpost.com/politics/2025/03/27/federal-worker-layoffs-government-agencies/',
        linkText: 'Washington Post',
      },
    ],
  },

  {
    id: 'Scientists_Leaving',
    categories: ['Project 2025', 'Global', 'Orwell', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-27',
    title: '75% of US scientists who answered Nature poll consider leaving',
    body: 'More than 1,600 readers answered our poll; many said they were looking for jobs in Europe and Canada.',
    links: [
      {
        href: 'https://www.nature.com/articles/d41586-025-00938-y',
        linkText: 'Nature',
      },
    ],
  },

  {
    id: 'SignalGate6',
    categories: ['Project 2025', 'Global', 'WW3', 'Courts', 'Orwell'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-27',
    title: 'Bondi signals criminal probe into Signal chat is unlikely, despite long history of similar inquiries',
    body: 'She repeated Trump administration talking points that the highly sensitive information in the chat was not classified, though current and former U.S. officials have said the posting of the exact launch times of aircraft and times that bombs would be released before those pilots were even in the air would have been classified.',
    links: [
      {
        href: 'https://apnews.com/article/fbi-pentagon-attack-plans-petraeus-clinton-comey-3ab3773b2642abaf024d3a5f3eb66f4b',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Tariff_TikTok',
    categories: ['Project 2025', 'Global', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-26',
    title: 'Trump Floats Chinese Tariff Cuts in Exchange for TikTok Deal',
    body: 'The social media app could shut down on April 5 unless it is sold to a new non-Chinese owner.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/26/business/trump-tariffs-tiktok-china.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'We_Will_Kill_You',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-26',
    title: 'Simply put: WE WILL FIND YOU—AND WE WILL KILL YOU.',
    body: 'We continue to mop up the mess left by Biden. For years, terrorists killed Americans with impunity. Now, they are the prey—and we are the hunters.',
    links: [
      {
        href: 'https://x.com/WhiteHouse/status/1904932866632384819',
        linkText: 'White House Twitter (X)',
      },
    ],
  },

  {
    id: 'Boston_Home',
    categories: ['Project 2025', 'Immigration', 'Resist'],
    color: 'green',
    faicon: 'plane',
    date: '2025-03-26',
    title: '\'Home For Everyone\': Boston Mayor Michelle Wu Fires Back At Border Czar After ICE Raids',
    body: 'Boston Mayor Michelle Wu repeated that Boston is the "safest city in the country" in an ongoing war of words with the Trump Administration.',
    links: [
      {
        href: 'https://patch.com/massachusetts/boston/home-everyone-boston-mayor-fires-back-border-czar-ice-raids',
        linkText: 'Patch',
      },
    ],
  },

  {
    id: 'Netherlands_Travel-Warning',
    categories: ['Global', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-26',
    title: 'Netherlands Issues US Travel Warning, Belgium Set To Follow',
    body: 'The announcements come after several other European countries and Canada updated their travel guidance for the U.S. in recent days, citing transgender rights and difficulties at the border.',
    links: [
      {
        href: 'https://www.newsweek.com/netherlands-issues-us-travel-warning-belgium-set-follow-2050630',
        linkText: 'Newsweek',
      },
    ],
  },

  {
    id: 'US_Cars_Tariff',
    categories: ['Project 2025', 'Economy', 'Global', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-26',
    title: 'Trump announces 25% tariffs on all cars ‘not made in the United States’',
    body: 'Trump White House aide Will Scharf said the new tariffs apply to “foreign-made cars and light trucks.” He clarified that they come in addition to duties that are already in place.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/26/trump-could-sign-new-auto-tariffs-as-soon-as-wednesday-white-house-says.html',
        linkText: 'CNBC',
      },

    ],
  },

  {
    id: 'Flordia_Flip',
    categories: ['FAFO', 'Project 2025', 'Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-26',
    title: 'Republicans Grow Anxious About Florida Special Election',
    body: 'Polling, fundraising numbers put spotlight on House contest to succeed former Rep. Mike Waltz',
    links: [
      {
        href: 'https://www.wsj.com/politics/elections/florida-special-election-house-district-f541ce08',
        linkText: 'Wall Street Journal',
      },
    ],
  },

  {
    id: 'PA_Win',
    categories: ['FAFO', 'Project 2025', 'Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-26',
    title: 'Democrats take hope from upset win in a GOP-leaning Pennsylvania state Senate district',
    body: 'Democrat James Andrew Malone narrowly won a special election for a Pennsylvania state Senate seat in Republican-leaning suburbs and farming communities, scoring an upset for a party roiled by infighting since President Donald Trump’s victory.',
    links: [
      {
        href: 'https://apnews.com/article/pennsylvania-democratic-party-donald-trump-election-094e907bd9af0d55a3ac76bb5e22d17c',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Atlantic_Signal-Info',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-26',
    title: 'Here Are the Attack Plans That Trump’s Advisers Shared on Signal',
    body: 'The administration has downplayed the importance of the text messages inadvertently sent to The Atlantic’s editor in chief. (Screenshots of actual texts included in article.)',
    links: [
      {
        href: 'https://www.theatlantic.com/politics/archive/2025/03/signal-group-chat-attack-plans-hegseth-goldberg/682176/',
        linkText: 'The Atlantic',
      },
    ],
  },

  {
    id: 'SCOTUS_Ghost_Guns',
    categories: ['Gun Violence', 'Project 2025', 'Courts', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-26',
    title: 'Supreme Court upholds Biden rule requiring serial numbers and background checks for ghost guns',
    body: 'Ghost guns are any privately made firearms without the serial numbers that allow police to trace weapons used in crime. ',
    links: [
      {
        href: 'https://apnews.com/article/supreme-court-ghost-guns-bf404db1d4ece56203c8748b2544dc02',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Judge_Signalgate',
    categories: ['FAFO', 'Project 2025', 'Courts', 'Global', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-26',
    title: 'Judge targeted by Trump is assigned to Signalgate lawsuit',
    body: 'Judge James Boasberg will preside over a case alleging that Trump administration officials violated federal record-keeping laws when they used Signal to discuss military plans.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/26/signal-lawsuit-trump-judge-boasberg-00250606',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Flordia_PAC',
    categories: ['DOGE', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-26',
    title: 'Musk\'s super PAC jumps into Florida\'s special elections',
    body: 'America PAC is spending on “texting services” to boost the GOP candidates ahead of next week’s special House elections for two deeply Republican seats. ',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/elections/musks-super-pac-jumps-floridas-special-elections-rcna198106',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Voter_Registration',
    categories: ['Immigration', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-25',
    title: 'Trump signs executive order that will upend US voter registration processes',
    body: 'Millions of citizens could become disenfranchised in ‘farthest reaching’ executive action targeting immigration',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/25/trump-executive-order-voter-registration-immigration',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Bernie_Oligarchy',
    categories: ['Resist', 'Tiddlywinks', 'Project 2025'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-25',
    title: 'Bernie Sanders Has Been Warning About Oligarchy for Years. People Are Finally Listening.',
    body: 'The Vermont senator’s Fighting Oligarchy tour offers a lifeline to flailing Democrats—and a warning to their leaders.',
    links: [
      {
        href: 'https://www.motherjones.com/politics/2025/03/bernie-sanders-alexandria-ocasio-cortez-fight-oligarchy-tour/',
        linkText: 'Mother Jones',
      },
    ],
  },

  {
    id: 'Greenlanders_Unite',
    categories: ['Resist', 'Global', 'Project 2025'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-25',
    title: 'Greenlanders unite to fend off the US as Trump seeks control of the Arctic island',
    body: 'Greenlanders are increasingly worried that their homeland, a self-governing region of Denmark, has become a pawn in the competition between the U.S., Russia and China as global warming opens up access to the Arctic.',
    links: [
      {
        href: 'https://apnews.com/article/greenland-future-trump-arctic-independence-denmark-minerals-4711a83c4490de99638db32029b668c9',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.npr.org/2025/03/25/nx-s1-5338849/usha-vances-planned-trip-to-greenland-causes-a-stir',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Book_Congress',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-25',
    title: '\'Mad House\' exposes Congressional dysfunction, from petty feuds to physical threats',
    body: 'It\'s no secret that Capitol Hill is often mired in partisan politics and infighting, but a new book highlights additional chaos that public doesn\'t see.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/25/nx-s1-5338729/mad-house-congress-maga-annie-karni-luke-broadwater',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Child_Mental_Health',
    categories: ['Project 2025', 'Health', 'LGBTQ'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-25',
    title: 'Mental health service to minors without parental consent banned under Ohio bill',
    body: 'House Bill 172 was introduced by Rep. Johnathan Newman (R-Troy) and would ban a mental health professional from treating a minor who “presents for the diagnosis or treatment of a gender-related condition” without first obtaining consent from a least one parent or guardian.',
    links: [
      {
        href: 'https://www.nbc4i.com/news/local-news/columbus/mental-health-service-to-minors-without-parental-consent-banned-under-ohio-bill/',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Child_Labor',
    categories: ['Project 2025', 'Immigration', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-25',
    title: 'Florida debates lifting some child labor laws to fill jobs vacated by undocumented immigrants',
    body: 'Florida has been working for years to crack down on employers that hire undocumented immigrants. But that presented a problem for businesses in the state that are desperate for workers to fill low-wage and often undesirable jobs. Florida’s Republican Gov. Ron DeSantis and the state legislature have a potential solution: children.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/25/business/florida-child-labor-laws/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Scary_Threat',
    categories: ['Fascism', 'Courts', 'WW3'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-25',
    title: 'Mike Johnson Has Terrifying Threat for Courts That Rule Against Trump',
    body: 'Johnson threatened Tuesday to outright eliminate district courts where judges rule against Donald Trump.',
    links: [
      {
        href: 'https://newrepublic.com/post/193164/mike-johnson-donald-trump-threat-courts-funding',
        linkText: 'New Republic',
      },
    ],
  },

  {
    id: 'SignalGate5',
    categories: ['Project 2025', 'Global', 'WW3', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-25',
    title: '‘Nobody is above the law’: Trump officials who criticized Clinton’s emails now under scrutiny for leaked war plans',
    body: 'The mistake amounts to an unprecedented breach of security by some of President Donald Trump’s most senior national security officials and raises questions about whether they violated the Espionage Act, which makes it illegal to mishandle national defense information.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/25/politics/kfile-trump-national-security-officials-signal-chat-criticized-clinton-classified-documents/',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'SignalGate4',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-25',
    title: 'Trump intel officials testify on threat from drug cartels as Dems press them on leak of attack plans',
    body: 'The Trump administration’s top intelligence officials stressed to Congress the threat they said was posed by international criminal gangs, drug cartels and human smuggling, testifying in a hearing Tuesday that unfolded against the backdrop of a security breach involving the mistaken leak of attack plans to a journalist.',
    links: [
      {
        href: 'https://apnews.com/article/fbi-cia-senate-national-security-threats-fe773ac76f8f01eba1d3a26409816396',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'SignalGate3',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-25',
    title: 'Intelligence leaders: We didn\'t share classified information in Signal chat group',
    body: 'In a contentious hearing on Capitol Hill, the nation\'s top intelligence officials testified that they did not share classified information in a messaging group chat that discussed the U.S. bombing campaign in Yemen.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/25/nx-s1-5339484/signal-war-plans-congress',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'SignalGate2',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-25',
    title: 'Trump defends advisor Mike Waltz for Signal texts to reporter about Houthi strike',
    body: 'Trump blamed a lower-level staffer when asked how The Atlantic’s editor in chief, Jeffrey Goldberg, came to be included in a text thread that included Vice President JD Vance and Defense Secretary Pete Hegseth.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/25/trump-signal-war-plans-texts-waltz.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'SignalGate',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-25',
    title: 'As top Trump aides sent texts on Signal, flight data show a member of the group chat was in Russia',
    body: 'Trump\'s Ukraine and Middle East envoy Steve Witkoff was in Moscow, where he met with Russian President Vladimir Putin, when he was included in a group chat with more than a dozen other top administration officials — and inadvertently, one journalist — on the messaging app Signal.',
    links: [
      {
        href: 'https://www.cbsnews.com/news/trump-envoy-steve-witkoff-signal-text-group-chat-russia-putin/',
        linkText: 'CBS',
      },
    ],
  },

  {
    id: 'Suspend_GreenCard',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-25',
    title: 'DHS suspends green card processing for refugees, asylees',
    body: 'The directive from U.S. Citizenship and Immigration Services (USCIS) would impact refugees already approved to come to the United States, as well as those who were granted asylum after petitioning for the protection in immigration court.',
    links: [
      {
        href: 'https://thehill.com/homenews/5213453-us-green-card-application-pause/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Frivolous_Lawsuit',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-25',
    title: 'Immigration lawyers fear backlash after memo warning of sanctions',
    body: 'Immigration lawyers and legal advocacy groups are expressing outrage and fear after President Donald Trump issued a memo warning against “frivolous” lawsuits against the U.S. government.',
    links: [
      {
        href: 'https://www.informnny.com/border-report-tour/immigration-lawyers-fear-backlash-after-memo-warning-of-sanctions/',
        linkText: 'Informnny',
      },
    ],
  },


  {
    id: 'Investigate_Leak',
    categories: ['Project 2025', 'WW3', 'Global', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-25',
    title: 'Lawmakers demand investigation into group chat on Trump administration\'s war plans',
    body: 'A number of lawmakers expressed outrage Monday after the editor of The Atlantic reported that he was accidentally included in a group chat involving top Trump administration officials about the United States\' highly sensitive war plans in Yemen.',
    links: [
      {
        href: 'https://www.cbsnews.com/news/group-chat-trump-war-plans-yemen-lawmakers-react/',
        linkText: 'CBS',
      },
    ],
  },

  {
    id: 'LGBTQ_Grants',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-24',
    title: 'FBI launches Tesla threats task force: ‘This is domestic terrorism’',
    body: 'The announcement of the task force came hours after multiple incendiary devices were found at a Tesla showroom in Austin, Texas, the city where the company’s headquarters is located.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/24/fbi-tesla-elon-musk-task-force-threats-trump-doge.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'LGBTQ_Grants',
    categories: ['LGBTQ', 'Project 2025'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-24',
    title: 'Trump administration cancels at least 68 grants focused on LGBTQ health questions',
    body: 'A surge of grant cancellations hit researchers focused on the health of gay, lesbian and transgender people last week, as the Trump administration continues to target what it describes as ideologically driven science.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/24/health/lgbtq-grants-canceled/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'GA_Cancel_Voters',
    categories: ['Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'flag',
    date: '2025-03-24',
    title: 'Georgia is planning one of the largest cancellations of voter registrations in U.S. history',
    body: 'Georgia election officials plan to cancel about 455,000 inactive voter registrations this summer, one of the largest registration removals in U.S. history.',
    links: [
      {
        href: 'https://www.ajc.com/politics/sweeping-cancellation-of-455k-voter-registrations-planned-in-georgia/4KTEZHQTANH4NFNKXI4I3U4NEU/',
        linkText: 'AJC',
      },
    ],
  },

  {
    id: 'Venezuelan_Oil',
    categories: ['Project 2025', 'Economy', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-24',
    title: 'Trump says any country buying Venezuelan oil will face a 25% tariff',
    body: 'Trump claimed, without evidence, Venezuela has “purposefully and deceitfully” sent criminals, including violent individuals and members of gangs like Tren de Aragua, to the US.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/24/business/trump-venezuela-oil-tariffs/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Liberation_Day',
    categories: ['Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-24',
    title: 'Trump pledges auto, pharma tariffs in ‘near future,’ sowing more trade confusion',
    body: 'Trump will soon announce tariffs targeting automobiles, pharmaceuticals and other industries, signaling his plans to pile more sweeping duties on top of his forthcoming “reciprocal tariffs.”',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/24/trump-tariffs-autos-pharmaceuticals-sectoral-reciprocal.html',
        linkText: 'CNBC',
      },

      {
        href: 'https://www.nbcnews.com/business/economy/trump-tariffs-april-2-liberation-day-what-to-expect-rcna197822',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Rehire_Halt',
    categories: ['Project 2025', 'Courts', 'Economy'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-24',
    title: 'Trump administration asks Supreme Court to halt judge’s order to rehire probationary federal workers',
    body: 'The emergency appeal argues that the judge can’t force the executive branch to rehire more than 16,000 probationary employees.',
    links: [
      {
        href: 'https://apnews.com/article/mass-firings-trump-administration-supreme-court-bfe86f68e9877bf58c64bbc3b01db9c6',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Doxx_Tesla',
    categories: ['Project 2025', 'DOGE', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-24',
    title: 'Tesla Owner Doxing Site ‘Dogequest’ Relaunches on Dark Web',
    body: 'Last week 404 Media reported a website called ‘Dogequest’ was doxing Tesla owners. The site administrators appear to have launched a clone of the interactive map on the dark web too.',
    links: [
      {
        href: 'https://www.404media.co/tesla-owner-doxing-site-dogequest-relaunches-on-dark-web-2/',
        linkText: '404 Media',
      },
    ],
  },

  {
    id: 'Atlantic_Signal',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-24',
    title: 'The Trump Administration Accidentally Texted Me Its War Plans',
    body: 'U.S. national-security leaders included me in a group chat about upcoming military strikes in Yemen. I didn’t think it could be real. Then the bombs started falling.',
    links: [
      {
        href: 'https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/',
        linkText: 'The Atlantic',
      },
    ],
  },

  {
    id: 'Leaked_Plans2',
    categories: ['Project 2025', 'WW3', 'Global', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-24',
    title: 'Outrage after White House accidentally texts journalist war plans: ‘Huge screw-up’',
    body: 'Security leak triggers bipartisan anger after Atlantic reveals officials inadvertently broadcast highly sensitive military plans',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/24/journalist-trump-yemen-war-chat-reaction',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Leaked_Plans',
    categories: ['Project 2025', 'WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-24',
    title: 'White House inadvertently texted top-secret Yemen war plans to journalist',
    body: 'In extraordinary blunder top Trump cabinet members added Atlantic editor to chat discussing strikes on Houthis.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/24/journalist-trump-yemen-war-chat',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Travel_Anxiety',
    categories: ['Project 2025', 'Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-24',
    title: '‘Anxiety is palpable’: detention of researchers at US border spurs travel worries',
    body: 'An immigration crackdown in the United States is rattling the global research community, with high-profile detentions and deportations of academics stoking fears even for travellers with valid entry documents.',
    links: [
      {
        href: 'https://www.nature.com/articles/d41586-025-00859-w',
        linkText: 'Nature',
      },
    ],
  },

  {
    id: 'ICE_Detained_LabTech',
    categories: ['Project 2025', 'Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-24',
    title: 'UW lab tech, permanent U.S. resident in ICE custody',
    body: 'Lewelyn Dixon has been detained in the Northwest ICE Processing Center since end of February, and will remain there until her next hearing in July.',
    links: [
      {
        href: 'https://www.king5.com/article/news/community/facing-race/uw-lab-tech-us-resident-ice-custody/281-f404d578-6d65-4402-9292-586b65f7010b',
        linkText: 'King 5 News',
      },
    ],
  },

  {
    id: 'Judge_Rejects_AEA',
    categories: ['Immigration', 'Project 2025', 'Courts', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-22',
    title: 'Judge contends Nazis got more due process than Trump deportees did',
    body: 'The Trump administration received pointed questions from a judge over how it\'s implementing a rarely used wartime law to deport Venezuelans suspected of being Tren de Aragua gang members.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/24/nx-s1-5338794/appeals-alien-enemies-act-trump',
        linkText: 'NPR',
      },
      {
        href: 'https://www.nbcnews.com/politics/trump-administration/judge-alien-enemies-act-case-defends-ruling-ahead-key-appeals-court-he-rcna197804',
        linkText: 'NBC',
      },
    ],
  },


  {
    id: 'Leaked_Video',
    categories: ['Project 2025', 'Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-24',
    title: 'Leaked Video of What it’s like in ICE Detention Centers',
    body: 'Man talks about conditions and treatment at Florida detention center.',
    links: [
      {
        href: 'https://www.reddit.com/r/50501/comments/1jiq1ke/leaked_video_of_what_its_like_in_ice_detention/',
        linkText: 'Reddit',
      },
    ],
  },

  {
    id: 'IRS_Deal_ICE',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-24',
    title: 'Deportation concerns grow as IRS nears deal with ICE for immigration data',
    body: '"This creates a chilling effect, naturally with people that were otherwise going to file their tax return, being afraid or nervous about doing so," Newcomb said.',
    links: [
      {
        href: 'https://www.nbcbayarea.com/news/local/irs-ice-itin-deportation-immigration/3826882/',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Man_Arrested_Tesla',
    categories: ['Project 2025', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-24',
    title: 'Florida man who drove towards anti-Musk protesters at Tesla dealership charged with assault',
    body: 'A man was arrested and charged with assault for driving his car towards a crowd of people protesting outside a Florida Tesla dealership and narrowly avoiding them.',
    links: [
      {
        href: 'https://www.nbcnews.com/news/us-news/man-charged-assault-tesla-dealership-driving-car-protesters-rcna197746',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Judge_Blocks_DOGE',
    categories: ['DOGE', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-24',
    title: 'Judge blocks 3 agencies from disclosing troves of sensitive personal data to DOGE',
    body: 'A federal judge on Monday indefinitely blocked the Department of Government Efficiency’s (DOGE) access to troves of sensitive personal data from three federal agencies, the latest roadblock to its efforts to slim down the federal bureaucracy.',
    links: [
      {
        href: 'https://thehill.com/regulation/court-battles/5210446-federal-judge-doge-personal-data/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Trump_Demands_Apology_Resist',
    categories: ['LGBTQ', 'Project 2025', 'Civil Liberties', 'Resist'],
    color: 'green',
    faicon: 'rainbow',
    date: '2025-03-24',
    title: 'Maine Gov. Janet Mills fires back at Trump after president demands apology',
    body: '"My issue is about the rule of law, pure and simple. It\'s not about transgender sports. It\'s about who makes the laws and who enforces the laws," Mills said. "I read the Constitution. The Constitution says that the president, the chief executive, shall take care that the laws be faithfully executed."',
    links: [
      {
        href: 'https://www.wmtw.com/article/maine-governor-janet-mills-donald-trump-apology/64275404',
        linkText: 'WMTW',
      },
    ],
  },

  {
    id: 'ICE_Detention_Hell',
    categories: ['Immigration', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-23',
    title: 'Immigrant women describe \'hell on earth\' in ICE detention',
    body: 'Immigrant women say they were held "like animals" in ICE detention and subjected to conditions so extreme they feared for their lives.',
    links: [
      {
        href: 'https://www.usatoday.com/story/news/nation/2025/03/23/immigrant-women-hell-on-earth-trump-ice-detention/82029368007/',
        linkText: 'USA Today',
      },
    ],
  },

  {
    id: 'Tread_Carefully',
    categories: ['DOGE', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-23',
    title: 'Pam Bondi warns Jasmine Crockett to ‘tread very carefully’ in what she says about Elon Musk',
    body: 'Ahead of expected protests at Tesla locations, the Democratic representative said her calls to action against Musk were nonviolent.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/23/bondi-jasmine-crockett-musk-tesla-protests-00244256',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Trump_Demands_Apology',
    categories: ['LGBTQ', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-23',
    title: 'Trump demands Maine governor apologize — or the state will face consequences',
    body: 'The Trump administration has sparred with Maine and singled out its governor in recent weeks over his order banning trans athletes from playing in women’s sports.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/22/donald-trump-trans-athletes-maine-00003871',
        linkText: 'Politico',
      },

      {
        href: 'https://www.pressherald.com/2025/03/22/trump-demands-full-throated-apology-from-gov-mills-over-maines-transgender-athlete-policy/',
        linkText: 'Portland Press Herald',
      },
    ],
  },

  {
    id: 'DHS_Revoke',
    categories: ['Immigration', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-22',
    title: 'DHS to revoke legal status of 532,000 ‘humanitarian parole’ migrants',
    body: 'More than half a million migrants from Cuba, Haiti, Nicaragua and Venezuela living in the U.S. legally are at risk of deportation after DHS announced plans to rescind a Biden-era humanitarian parole program.',
    links: [
      {
        href: 'https://san.com/cc/dhs-to-revoke-legal-status-of-532000-humanitarian-parole-migrants/',
        linkText: 'Straight Arrow News',
      },

      {
        href: 'https://www.npr.org/2025/03/22/nx-s1-5337214/dhs-revokes-humanitarian-parole-cubans-haitians-nicaraguans-venezuelans',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'IRS_ICE',
    categories: ['Immigration', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-22',
    title: 'IRS close to finalizing data-sharing agreement with ICE, sources say',
    body: 'After weeks of negotiations, administration officials are close to reaching an agreement that would enable ICE officials to submit names and addresses of suspected immigrants lacking legal status for the IRS to check against its confidential databases.',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/irs-close-finalizing-data-sharing-agreement-ice-sources/story?id=120063278',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Courts_Veterans',
    categories: ['Courts', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-22',
    title: 'In rare move, all 50 states’ top lawyers, including Oregon AG Dan Rayfield, band together to seek legal justice for veterans',
    body: '“It’s rare, but when something as important as this comes up, it’s no surprise that all 50 states have joined forces,” Oregon Attorney General Dan Rayfield',
    links: [
      {
        href: 'https://www.oregonlive.com/politics/2025/03/in-rare-move-all-50-states-top-lawyers-including-oregon-ag-dan-rayfield-band-together-to-seek-legal-justice-for-veterans.html',
        linkText: 'Oregon Live',
      },
    ],
  },

  {
    id: 'Bernie_AOC-30k',
    categories: ['Tiddlywinks', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-22',
    title: 'Over 30,000 turn out for Bernie Sanders, AOC rally in Denver amid push for progressive change',
    body: 'The tour is part of an effort by Sanders and Ocasio-Cortez to push back against President Trump and the influence that they say billionaires have over American politics.',
    links: [
      {
        href: 'https://www.cbsnews.com/colorado/news/thousands-attend-bernie-sanders-aoc-rally-denver-push-progressive-change/',
        linkText: 'CBS',
      },

      {
        href: 'https://www.denverpost.com/2025/03/21/bernie-sanders-alexandria-ocasio-cortez-aoc-denver-civic-center-trump/',
        linkText: 'Denver Post',
      },

      {
        href: 'https://www.usatoday.com/story/news/politics/2025/03/22/aoc-bernie-sanders-fight-oligarchy/82611427007/',
        linkText: 'USA Today',
      },
    ],
  },

  {
    id: 'Hate_Us',
    categories: ['Tiddlywinks', 'Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-22',
    title: '‘They hate us’: Democrats now fear midterms could result in their ouster as voters want candidates to take on Trump',
    body: 'Democrat voters are frustrated with the results of the 2024 election and growing angry with Democrat leaders for rolling over to Republicans. (More Democratic leaders need to follow AOC & Bernie\'s lead! See above!)',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/democrat-candidates-trump-midterm-anger-b2719871.html',
        linkText: 'The Independent',
      },
    ],
  },

 


  {
    id: 'Without_Warrant',
    categories: ['Immigration', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-22',
    title: 'Trump White House could let federal agents search homes without warrants under Alien Enemies Act',
    body: 'A Justice Department official says ‘terrorists don’t get to hide behind closed doors’ as legal experts sound alarm.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/trump-search-warrant-fourth-amendment-b2719701.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'Fight_Dems',
    categories: ['Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-21',
    title: '‘Try actually fighting’: Democrats face voters’ fury at town halls',
    body: 'Democratic lawmakers have faced eruptions of anger at town hall meetings across the country this week, as constituents have coupled their fury over President Donald Trump’s actions with deep frustration over what they see as a feckless Democratic response.',
    links: [
      {
        href: 'https://www.cnn.com/2025/03/21/politics/town-halls-democrats-republicans/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Students_NoReturn',
    categories: ['Immigration', 'Project 2025', 'Discrimination'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-21',
    title: 'UC Berkeley tells foreign students leaving for spring break they may not be able to return',
    body: 'A time-honored college tradition has become a source of anxiety for international students who might consider traveling abroad.',
    links: [
      {
        href: 'https://sfstandard.com/2025/03/21/international-students-spring-break-travel/',
        linkText: 'San Francisco Standard',
      },
    ],
  },

  {
    id: 'Musk_China',
    categories: ['WW3', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-21',
    title: 'Trump denies Musk to be briefed on top-secret plan for potential war with China',
    body: 'Access to the closely guarded military plan would mark an sharp expansion of Musk\'s role as a Trump adviser who has spearheaded efforts to cut U.S. government spending.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/pentagon-brief-musk-top-secret-plan-potential-war-with-china-nyt-reports-2025-03-21/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Hegseth_BS',
    categories: ['Courts', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-21',
    title: 'Hegseth suggests judge who blocked trans troops ban abused her power',
    body: 'US defense secretary joins mounting criticism of federal judges by Donald Trump and others in administration',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/22/hegseth-mocks-judge-trans-troops',
        linkText: 'The Guardian',
      },
    ],
  },
  
  {
    id: 'Democrats_Stop',
    categories: ['Tiddlywinks', 'Project 2025'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-21',
    title: 'There Is a Way for Democrats to Stop Trump and Save America',
    body: 'A growing number of Democrats are right about the need for a populism focused on corruption: Mr. Trump and his billionaire cabal are redistributing wealth and power in ways that will harm most Americans.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/21/opinion/democrats-trump-resistance.html',
        linkText: 'New York Times (Opinion)',
      },
    ],
  },


  {
    id: 'PDX_Resist',
    categories: ['Immigration', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-21',
    title: 'Portland is building a model for migrant solidarity under Trump',
    body: 'As ICE raids ramp up across the country, Portland\'s Asylum Seeker Solidarity Collective is building trust and community through mutual aid.',
    links: [
      {
        href: 'https://wagingnonviolence.org/2025/03/migrant-solidarity-portland-trump/',
        linkText: 'Waging Nonviolence',
      },
    ],
  },

  {
    id: 'Dem_Not_Silenced',
    categories: ['Resist', 'Tiddlywinks', 'Civil Liberties', 'DOGE'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-20',
    title: 'House Democrat says DC’s top federal prosecutor is trying to silence critics of Elon Musk',
    body: 'Democratic Rep. Robert Garcia vowed Thursday that he would not be “silenced” after receiving a letter from the Department of Justice demanding he explain remarks critical of Elon Musk.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/20/robert-garcia-elon-musk-martin-letter-threats-00205354',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Trump_Feds_Tariffs',
    categories: ['Economy', 'Project 2025' , 'Tariff War'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-20',
    title: 'Trump says the Fed should cut rates to ease the economy’s transition to his tariffs',
    body: 'After largely staying out of the Federal Reserve’s business during his first two months in office, President Donald Trump is pushing the central bank to cut interest rates as a backstop for his tariff plans.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/20/trump-says-the-fed-should-cut-rates-to-ease-the-economys-transition-to-his-tariffs.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'BLM_Significant',
    categories: ['Discrimination', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-20',
    title: 'Black Lives Matter movement had a significant and decisive impact on US politics, study finds',
    body: 'New academic research provides the first causal evidence that the Black Lives Matter (BLM) protests following George Floyd\'s death had a significant impact on the 2020 US presidential election.',
    links: [
      {
        href: 'https://www.kcl.ac.uk/news/black-lives-matter-movement-had-a-significant-and-decisive-impact-on-us-politics-study-finds',
        linkText: 'King\'s College London',
      },
    ],
  },

  {
    id: 'UK_Travel-Warning',
    categories: ['Global', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-20',
    title: 'Britain Issues Travel Warning for US',
    body: 'The United Kingdom has updated its travel advice for British citizens planning to visit the United States, warning of potential arrest or detention if travelers fail to comply with entry requirements.',
    links: [
      {
        href: 'https://www.newsweek.com/britain-issues-travel-warning-us-deportations-2047878',
        linkText: 'Newsweek',
      },
    ],
  },

  {
    id: 'Musk_Daughter',
    categories: ['DOGE', 'Fascism', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'fire',
    date: '2025-03-20',
    title: 'Elon Musk’s daughter says father’s rally gesture was ‘definitely a Nazi salute’',
    body: 'Vivian Jenna Wilson tells Teen Vogue she feels obliged to take stand for trans rights as Trump attacks community.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/20/elon-musk-daughter-vivian-jenna-wilson-salute',
        linkText: 'The Guardian',
      },
    ],
  },
 
  {
    id: 'Telsa_Stock-Falls',
    categories: ['DOGE', 'Project 2025', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-20',
    title: 'Tesla stock falls after Trump official urges Americans to ‘invest in Elon Musk’',
    body: 'Republicans have attacked Democrats for speaking out against Tesla. Observers have pointed out how the same Republicans have attacked companies for promoting values they do not share, celebrating financial reverses.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/20/howard-lutnick-tesla-trump-musk',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'DOGE_Blocked_SSA',
    categories: ['DOGE', 'Project 2025', 'Resist', 'Courts'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-20',
    title: 'DOGE blocked in court from Social Security systems with Americans’ personal information, for now',
    body: 'A federal judge on Thursday temporarily blocked billionaire Elon Musk’s Department of Government Efficiency from Social Security systems that hold personal data on millions of Americans, calling their work there a “fishing expedition.”',
    links: [
      {
        href: 'https://apnews.com/article/social-security-trump-administration-acfdd0d7a53b7e5a1b5105baa456c5d0',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Trump_Dismantles_Ed',
    categories: ['Education', 'Project 2025'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-03-20',
    title: 'Trump signs order to begin dismantling Education Department',
    body: 'President Donald Trump is taking the first steps to fulfilling his campaign promise to dismantle the Department of Education.',
    links: [
      {
        href: 'https://edition.cnn.com/politics/live-news/trump-news-03-20-25?t=1742505409764',
        linkText: 'CNN',
      },
    ],
  },


  {
    id: 'Elon_Blames_Trans',
    categories: ['DOGE', 'Project 2025', 'LGBTQ'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-20',
    title: 'Tesla’s in Trouble. Elon Blames…Trans People?',
    body: 'Musk and his acolytes blame the massive protests on transgender people’s supposed penchant for violence',
    links: [
      {
        href: 'https://www.motherjones.com/politics/2025/03/elon-musk-tesla-protests-transphobia/',
        linkText: 'Mother Jones',
      },
    ],
  },

 
  {
    id: 'Tesla_Jail',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-20',
    title: 'US attorney general threatens 20-year jail sentences for damaging Elon Musk\'s Tesla cars',
    body: 'Cars and charging stations associated with Elon Musk\'s company have been targeted in recent weeks. Meanwhile, on Thursday, almost all Cybertrucks were recalled due to a "dangerous road hazard".',
    links: [
      {
        href: 'https://news.sky.com/story/us-attorney-general-threatens-20-year-jail-sentences-for-damaging-elon-musks-tesla-cars-13332767',
        linkText: 'Sky News',
      },
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/20/charges-tesla-violent-destruction',
        linkText: 'The Guardian',
      },
      {
        href: 'https://www.independent.co.uk/news/world/americas/crime/tesla-arson-charges-pam-bondi-b2718922.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'Tesla_Terrorists',
    categories: ['FAFO', 'Project 2025'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-20',
    title: 'JD Vance: Tesla terrorists are wealthy Left-wingers',
    body: 'Vice-president speculates that continuing vandalism is coordinated',
    links: [
      {
        href: 'https://www.telegraph.co.uk/us/politics/2025/03/20/jd-vance-tesla-terrorists-are-wealthy-left-wingers/',
        linkText: 'The Telegraph',
      },
    ],
  },

  {
    id: 'Tesla_Attacks',
    categories: ['FAFO', 'Project 2025', 'DOGE', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-20',
    title: 'Three charged in arson attacks at Tesla dealerships, charging stations',
    body: 'Tesla has become a target of activists opposed to the political agenda of President Donald Trump and the role of his adviser Elon Musk, the electric car maker\'s CEO, in putting it in motion.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/us-attorney-general-says-alleged-arsonists-targeting-tesla-face-charges-2025-03-20/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Trump_Ignores_Judge2',
    categories: ['Fascism', 'Immigration', 'Courts'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-20',
    title: 'Trump administration response on Venezuela deportations \'woefully insufficient,\' judge says',
    body: 'The judge said the administration had "evaded its responsibilities" in responses submitted on Thursday to questions he asked about the timing of the flights.',
    links: [
      {
        href: 'https://www.reuters.com/legal/trump-administration-due-respond-deportations-judge-weighs-possible-violations-2025-03-20/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Judge_Stop_Georgetown',
    categories: ['Courts', 'Project 2025', 'Civil Liberties', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-20',
    title: 'US government cannot deport Georgetown scholar until court rules, judge orders',
    body: 'U.S. District Judge Patricia Tolliver Giles in Alexandria, Virginia, ordered that Indian national Badar Khan Suri “shall not be removed from the United States unless and until the Court issues a contrary order.”',
    links: [
      {
        href: 'https://apnews.com/article/georgetown-trump-deportation-immigration-homeland-security-21fc205cebbbbba2ed260050df04702a',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Police_Aid_DOGE',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-20',
    title: 'Law experts raise alarms over police action in DOGE Institute of Peace dispute',
    body: 'U.S. District Judge Beryl Howell denied a request Wednesday by the institute to stop the takeover. D.C.\'s local police force escorted [IOP Leaders] away from the building Monday afternoon — and allowed a new regime [DOGE] to take over.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/20/nx-s1-5332193/why-d-c-police-sided-with-doge-institute-of-peace-standoff',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Haircuts',
    categories: ['Discrimination', 'Project 2025', 'LGBTQ', 'Civil Liberties'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-20',
    title: 'Arkansas Bill Targets \'Gender Nonconforming\' Haircuts for Kids',
    body: 'Republican lawmakers in Arkansas have introduced a bill that would allow lawsuits against anyone who facilitates a minor\'s social transition — including hairdressers and barbers who give gender-nonconforming haircuts, teachers who use a student\'s chosen name that is different from their birth name and nonprofit organizations that offer support.',
    links: [
      {
        href: 'https://www.newsweek.com/arkansas-bill-targets-gender-nonconforming-haircuts-kids-2048152',
        linkText: 'Newsweek',
      },
    ],
  },

  {
    id: 'Segregation',
    categories: ['Discrimination', 'Project 2025'],
    color: 'red',
    faicon: 'person',
    date: '2025-03-20',
    title: '\'Segregated facilities\' are no longer explicitly banned in federal contracts',
    body: 'The federal government no longer explicitly prohibits contractors from having segregated restaurants, waiting rooms and drinking fountains.',
    links: [
      {
        href: 'https://www.npr.org/sections/shots-health-news/2025/03/18/nx-s1-5326118/segregation-federal-contracts-far-regulation-trump',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'DOJ_Drop_Lawsuit',
    categories: ['Immigration', 'Courts', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-19',
    title: 'Justice Department moves to drop lawsuit that would allow Texas police to arrest migrants',
    body: 'The Trump administration has moved to dismiss a lawsuit against Texas over a law that would allow local police to arrest migrants who enter the country illegally.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/iowa-biden-texas-justice-department-austin-b2718227.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'Resistance_Alive',
    categories: ['FAFO', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-19',
    title: 'Resistance is alive and well in the United States',
    body: 'Protests of Trump may not look like the mass marches of 2017, but research shows they are far more numerous and frequent — while also shifting to more powerful forms of resistance.',
    links: [
      {
        href: 'https://wagingnonviolence.org/2025/03/resistance-alive-well-us/',
        linkText: 'Waging Nonviolence',
      },
    ],
  },

  {
    id: 'Dems_Backyards',
    categories: ['FAFO', 'Resist', 'Project 2025', 'Tiddlywinks'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-19',
    title: 'Democrats Show Up In Republicans\' Backyards To Troll Them',
    body: 'Republicans are ghosting their constituents. Democrats are meeting with them instead.',
    links: [
      {
        href: 'https://www.huffingtonpost.co.uk/entry/democrats-troll-republicans-town-halls_n_67db1b7ae4b097824b243026',
        linkText: 'Huffington Post',
      },
    ],
  },

  {
    id: 'German_Travel-Warning',
    categories: ['Global', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-19',
    title: 'Germany updates US travel advice after citizens detained',
    body: 'Germany updated its travel advisory for the United States to emphasise that a visa or entry waiver does not guarantee entry for its citizens after several Germans were detained at the border recently.',
    links: [
      {
        href: 'https://www.reuters.com/world/europe/germany-updates-us-travel-advice-after-citizens-detained-2025-03-19/',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'Musk_Bribes',
    categories: ['DOGE', 'Courts', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-19',
    title: 'Musk Donates to G.O.P. Members of Congress Who Support Impeaching Judges',
    body: 'Amid a controversy over whether President Trump will abide by court rulings, Elon Musk gave the maximum to the campaigns of Republican incumbents who back ousting judges who impede the administration.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/19/us/politics/musk-donations-congress-judges.html',
        linkText: 'New York Times',
      },
    ],
  },


  {
    id: 'Trump_Pause_$$',
    categories: ['LGBTQ', 'Courts', 'Project 2025', 'Discrimination'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-19',
    title: 'Trump administration pauses $175M in funding to UPenn over trans athlete policy',
    body: 'The University of Pennsylvania made national headlines in the 2021-22 school year when Lia Thomas, a trans athlete, competed on its women\'s swim team.',
    links: [
      {
        href: 'https://apnews.com/article/trump-transgender-troops-military-7e1a52f94ee60dcd58d4c2086e14acc3',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Judge_Blocks_Trans-Ban',
    categories: ['LGBTQ', 'Courts', 'Project 2025', 'Discrimination', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-19',
    title: 'Federal judge blocks Trump administration from banning transgender people from military service',
    body: 'A federal judge blocked enforcement of President Donald Trump’s executive order banning transgender people from military service on Tuesday, the latest in a string of legal setbacks for his sweeping agenda.',
    links: [
      {
        href: 'https://apnews.com/article/trump-transgender-troops-military-7e1a52f94ee60dcd58d4c2086e14acc3',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Democrat_Schumer-StepDown',
    categories: ['Tiddlywinks', 'Resist', 'Project 2025', 'FAFO'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-19',
    title: 'Democrat calls for Schumer’s removal over support of Republican funding bill',
    body: 'Maryland’s Glenn Ivey is first Democratic lawmaker to publicly demand that the Senate minority leader step down',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/19/glenn-ivey-chuck-schumer-republican-funding-bill',
        linkText: 'The Guardian',
      },

      {
        href: 'https://eu.usatoday.com/story/news/politics/2025/03/19/democrats-schumer-government-shutdown-leadership/82544265007/',
        linkText: 'USA Today',
      },
    ],
  },

  {
    id: 'Canadian_Kidnapped',
    categories: ['Immigration', 'Global', 'Fascism', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-19',
    title: 'I’m the Canadian who was detained by Ice for two weeks. It felt like I had been kidnapped',
    body: 'I was stuck in a freezing cell without explanation despite eventually having lawyers and media attention. Yet, compared with others, I was lucky',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/19/canadian-detained-us-immigration-jasmine-mooney',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'No_Criminal_Record',
    categories: ['Immigration', 'Global', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-19',
    title: 'Trump administration says ‘many’ Venezuelans deported to El Salvador prison have no criminal record',
    body: '"But a lack of a criminal record “does not indicate they pose a limited threat,” according to a sworn statement from an Immigration and Customs Enforcement official submitted in court filings.',
    links: [
      {
        href: 'https://www.msn.com/en-gb/news/uknews/trump-administration-says-many-venezuelans-deported-to-el-salvador-prison-have-no-criminal-record/ar-AA1BbQ45',
        linkText: 'MSNBC',
      },
    ],
  },

  {
    id: 'French_Scientist',
    categories: ['Civil Liberties', 'Global', 'WW3', 'Project 2025'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-19',
    title: 'French Scientist Reportedly Denied U.S. Entry Due to Trump Criticism',
    body: 'A French scientist on his way to a conference in the United States was allegedly denied entry by Customs and Border Patrol over messages found on his phone that criticized President Trump’s science cuts.',
    links: [
      {
        href: 'https://newrepublic.com/post/192946/french-scientist-denied-us-entry-trump-criticism',
        linkText: 'New Republic',
      },
    ],
  },

  {
    id: 'Purge_DEI',
    categories: ['Discrimination', 'Women', 'Health', 'Project 2025', 'Orwell'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-19',
    title: 'Massive purge of Pentagon websites includes content on Holocaust remembrance, sexual assault and suicide prevention',
    body: 'Articles about the Holocaust, September 11, cancer awareness, sexual assault and suicide prevention are among the tens of thousands either removed or flagged for removal from Pentagon websites as the department has scrambled to comply with Secretary of Defense Pete Hegseth’s order to scrub “diversity” content from all its platforms.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/19/politics/pentagon-website-purge/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Judge_Tarrio',
    categories: ['Courts', 'Project 2025', 'J6'],
    color: 'red',
    faicon: 'skull',
    date: '2025-03-19',
    title: 'Prosecutors decline to charge Enrique Tarrio after arrest outside Capitol',
    body: 'Capitol Police said they arrested former Proud Boys chairman Henry “Enrique” Tarrio outside the Capitol last month following an altercation with a protester.',
    links: [
      {
        href: 'https://www.washingtonpost.com/dc-md-va/2025/03/19/enrique-tarrio-proud-boys-arrested-dc-capitol-police/',
        linkText: 'Washington Press',
      },
    ],
  },

  {
    id: 'Judge_USAID2',
    categories: ['Resist', 'Project 2025', 'DOGE'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-19',
    title: 'Judge rules DOGE’s USAID dismantling likely violates the Constitution',
    body: 'The order requires the Trump administration to restore email and computer access to all employees of USAID, including those put on administrative leave, though it stops short of reversing firings or fully resurrecting the agency.',
    links: [
      {
        href: 'https://apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Putin_Ceasefire',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-19',
    title: 'After call with Trump, Putin agrees to pause attacks on Ukraine’s energy and infrastructure targets',
    body: 'Russia stopped short of signing off on a broader ceasefire to end the three-year-long conflict in Ukraine.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/18/politics/trump-putin-ceasefire-russia-ukraine-war/index.html',
        linkText: 'CNN',
      },
      {
        href: 'https://www.cnbc.com/2025/03/18/trump-putin-russia-ukraine-war-ceasefire-call.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'GOP-CallsForImpeach_Judge2',
    categories: ['Courts', 'Fascism', 'Immigration', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-18',
    title: 'Chief justice pushes back against calls to impeach judges who rule against Trump',
    body: 'Chief Justice John Roberts issued a rare statement Tuesday rebuking President Donald Trump and his allies for calling to impeach judges who have ruled against the administration.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/supreme-court/chief-justice-pushes-back-calls-impeach-judges-rule-trump-rcna196922',
        linkText: 'NBC',
      },
      {
        href: 'https://www.reuters.com/legal/us-chief-justice-roberts-calls-judges-impeachment-are-inappropriate-after-trump-2025-03-18',
        linkText: 'Reuters',
      },
    ],
  },

  {
    id: 'CO_Resist',
    categories: ['Project 2025', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-18',
    title: 'Colorado leaders give some hope of meaningful resistance',
    body: 'In Utah, the U.S. government offered protections from state policies. Now, in Colorado, the state protects against U.S. government policies.',
    links: [
      {
        href: 'https://coloradonewsline.com/2025/03/18/colorado-leaders-give-some-hope-of-meaningful-resistance/',
        linkText: 'Colorado News Online',
      },

    ],
  },

  {
    id: 'PB_Problems',
    categories: ['J6', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-18',
    title: 'A former Proud Boys leader was freed from a 17-year prison sentence by Trump. Then his problems began',
    body: '“I’m extremely disappointed in him,” Biggs, a former leader of the far-Right Proud Boys who received one of the highest sentences of the January 6 attackers, says of Trump.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/capital-joe-biggs-proud-boys-b2710493.html',
        linkText: 'The Independent',
      },

    ],
  },


  {
    id: 'AG_Drops_J6',
    categories: ['Project 2025', 'J6', 'Courts'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-18',
    title: 'DC attorney general drops Jan. 6 lawsuit against Oath Keepers, Proud Boys',
    body: 'In all, the lawsuit included more than three-dozen people, members of the Proud Boys and Oath Keepers, as well as the groups themselves.',
    links: [
      {
        href: 'https://wtop.com/dc/2025/03/dc-drops-jan-6-lawsuit-against-oath-keepers-proud-boys/',
        linkText: 'WTOP News',
      },

      {
        href: 'https://www.washingtonpost.com/dc-md-va/2025/03/17/dc-drops-lawsuit-proud-boys-oath-keepers/',
        linkText: 'Washington Post',
      },
    ],
  },

  {
    id: 'Radical_General',
    categories: ['Project 2025', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-18',
    title: 'Despite Michael Flynn’s radicalism, Trump welcomes retired general back into the fold',
    body: 'According to the Jan. 6 committee\'s investigations, the retired general reportedly raised the prospect of seizing voting machines, deploying U.S. troops, and declaring martial law as part of the anti-election scheme.',
    links: [
      {
        href: 'https://www.msnbc.com/rachel-maddow-show/maddowblog/michael-flynns-radicalism-trump-welcomes-retired-general-back-fold-rcna196866',
        linkText: 'MSNBC',
      },
    ],
  },

  {
    id: 'Another_MAGA_Pedophile',
    categories: ['FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-18',
    title: 'Republican who introduced Trump derangement syndrome bill arrested for soliciting a minor',
    body: 'Minnesota state senator Justin Eichorn allegedly traveled to meet a 17-year-old he thought he’d met online, but was instead a cop posing as minor',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/18/minnesota-justin-eichorn-arrested-soliciting-minor',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Learn_Big_Lie',
    categories: ['Education', 'Fascism', 'Orwell'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-03-18',
    title: 'New Oklahoma School Curriculum Requires Students to Learn “The Big Lie”',
    body: 'The Oklahoma Board of Education has passed new curriculum standards that require educators to teach that the 2020 presidential election was rife with fraud or discrepancies — despite numerous judicial rulings and audits indicating that the election was legitimate.',
    links: [
      {
        href: 'https://truthout.org/articles/new-oklahoma-school-curriculum-requires-students-to-learn-the-big-lie/',
        linkText: 'Truthout',
      },
    ],
  },

  {
    id: 'DOGE_BrokeIn',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-18',
    title: 'US Institute of Peace says DOGE broke into its building',
    body: 'The alleged intrusion came after the Trump administration fired most of the USIP board and sent its new leader into the Washington headquarters of the independent organization on Monday, in its latest effort targeting agencies tied to foreign assistance work.',
    links: [
      {
        href: 'https://www.nbcwashington.com/news/president-trump-politics/us-institute-of-peace-doge-trump-administration/3869923/',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Family_Not_Criminals',
    categories: ['Fascism', 'Immigration', 'Project 2025'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-18',
    title: 'Families of migrants who believe their relatives were deported by ICE say they weren\'t gang members',
    body: 'Trump officials invoked the Alien Enemies Act to begin deporting noncitizens.',
    links: [
      {
        href: 'https://abcnews.go.com/US/families-migrants-relatives-deported-ice-gang-members/story?id=119892593',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Ban_Chinese',
    categories: ['Global', 'Fascism', 'Immigration', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-18',
    title: 'Bill to ban all Chinese nationals from receiving US student visas causes alarm',
    body: 'The US research community has been appalled by legislation that would block all Chinese nationals from receiving student visas.',
    links: [
      {
        href: 'https://www.chemistryworld.com/news/bill-to-ban-all-chinese-nationals-from-receiving-us-student-visas-causes-alarm/4021163.article',
        linkText: 'Chemistry World',
      },
    ],
  },

  {
    id: 'GOP-CallsForImpeach_Judge',
    categories: ['Courts', 'Fascism', 'Immigration'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-18',
    title: 'House GOP moves swiftly to impeach judge targeted by Trump',
    body: 'GOP lawmakers have unleashed an unprecedented flood of long-shot impeachment articles aimed at federal judges who are standing in the way of the president\'s agenda.',
    links: [
      {
        href: 'https://www.axios.com/2025/03/18/donald-trump-impeach-judge-house-republicans',
        linkText: 'Axios',
      },
    ],
  },

  {
    id: 'Jugde_Wants_Explanation',
    categories: ['Courts', 'Fascism', 'Immigration', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-18',
    title: 'Tensions mount as judge demands more answers about deportation flights',
    body: 'A federal judge is pushing the Trump administration for more details about weekend flights that deported hundreds of alleged Venezuelan gang members, despite his order to turn the planes around.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/18/nx-s1-5331986/deportation-flight-tren-de-aragua-justice-department-boasberg',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Israel_Violates-Ceacefire',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-18',
    title: 'Israel strikes that shattered ceasefire ‘just the beginning’, Netanyahu says, after deadliest 24 hours in Gaza since 2023',
    body: 'Benjamin Netanyahu says Israeli military will continue to fight until Hamas ‘no longer posed a threat. Israel warns more to come as airstrikes kill over 400 in Gaza after two months of truce’',
    links: [
      {
        href: 'https://www.theguardian.com/world/live/2025/mar/18/israel-gaza-live-blog-updates-air-strikes-strip-netanyahu-hamas',
        linkText: 'The Guardian',
      },
      {
        href: 'https://www.reuters.com/world/middle-east/israeli-military-conducts-strikes-hamas-targets-gaza-army-says-2025-03-18/',
        linkText: 'Reuters',
      },

      {
        href: 'https://www.aljazeera.com/news/2025/3/18/gaza-tracker',
        linkText: 'Al Jazeera',
      },
    ],
  },

  {
    id: 'Judge_Clash',
    categories: ['Courts', 'Fascism', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-17',
    title: 'Federal Judge Clashes With DOJ Lawyers As Possible ‘Constitutional Crisis’ Looms',
    body: '“Apparently my oral orders don’t seem to carry much weight,” D.C.’s top district judge told the Trump administration Monday as they sparred over recent deportation flights.',
    links: [
      {
        href: 'https://www.huffingtonpost.co.uk/entry/trump-alien-enemies-act-salvador-deportation-flights-james-boasberg_n_67d89f8ce4b0682946100898',
        linkText: 'Huffington Post',
      },
    ],
  },

  {
    id: 'LeakedMemo-SSA',
    categories: ['DOGE', 'Project 2025', 'Economy'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-17',
    title: 'Leaked memo: DOGE plots to cut Social Security phone support',
    body: 'These proposals risk "crippling" a system already plagued by delays and facing staffing cuts,',
    links: [
      {
        href: 'https://www.axios.com/2025/03/17/social-security-trump-doge',
        linkText: 'Axios',
      },

      {
        href: 'https://apnews.com/article/social-security-fraud-waste-doge-elon-musk-212e3089951f731fd3f83443e104b315',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Starlink_WhiteHouse',
    categories: ['DOGE', 'Fascism', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-17',
    title: 'Elon Musk’s Starlink Expands Across White House Complex',
    body: 'Trump administration officials said the company donated the internet service, saying the gift had been vetted by the lawyer overseeing ethics issues in the White House Counsel’s Office. (Also, he blocked The Dropkick Murphies for speaking out again Trump.) ',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/17/us/politics/elon-musk-starlink-white-house.html',
        linkText: 'New York Times',
      },
    ],
  },


  {
    id: 'Restored_Black_Hero',
    categories: ['Discrimination', 'Fascism', 'Project 2025', 'Resist'],
    color: 'green',
    faicon: 'fire',
    date: '2025-03-17',
    title: 'Pentagon website removes, then restores, page honoring Black Medal of Honor recipient',
    body: 'The Defense Department "has restored the Medal of Honor story about Army Maj. Gen. Charles Calvin Rogers," a spokesperson told NPR in an email, adding, "The story was removed during auto removal process." (Actually, it was restored due to public outrage. Keep speaking out!) ',
    links: [
      {
        href: 'https://www.npr.org/2025/03/17/nx-s1-5330848/defense-pentagon-black-medal-of-honor-charles-rogers',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'If_Trump_Ignores_Judges',
    categories: ['Courts', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-17',
    title: 'What can be done if Trump is openly defying the courts?',
    body: 'If that happens, it will trigger a constitutional crisis. Now, that long-awaited crisis may be upon us.',
    links: [
      {
        href: 'https://www.vox.com/donald-trump/404665/trump-defy-supreme-court-alawieh-deportation',
        linkText: 'Vox',
      },
    ],
  },

  {
    id: 'Affected_World',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-17',
    title: 'From London to Lviv: how Trump’s new world order has shaken Europe',
    body: 'At each stop on 1,000-mile trip, discombobulated Europeans are grappling with new and unsettling realities as the US reforges its alliances.',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/mar/17/from-london-to-lviv-how-trumps-new-world-order-has-shaken-europe',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'J6-Commission-Pardons',
    categories: ['J6', 'Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'skull',
    date: '2025-03-17',
    title: 'Trump makes unsupported claim Biden pardons are ‘void’ as he used autopen',
    body: 'President claims without evidence that January 6 panel members’ pre-emptive clemency was not signed personally.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/17/trump-biden-pardons-void',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Tesla_Targets',
    categories: ['Resist', 'Project 2025', 'DOGE', 'Civil Liberties'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-17',
    title: '‘Tesla is a good target’: Elon Musk’s car business is focus of fury for political role',
    body: 'Hundreds of people protested at Tesla dealerships across the US over the weekend, as the backlash against Elon Musk and the Trump administration continued despite a warning from the attorney general that the government would be “coming after” protesters.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/17/tesla-protests-elon-musk',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'US_Pulls-Out',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-17',
    title: 'Trump administration pulls US out of body investigating Ukraine invasion',
    body: 'Russia and allies were target of International Centre for the Prosecution of the Crime of Aggression against Ukraine.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/17/trump-russia-ukraine',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Trump_Putin',
    categories: ['WW3', 'Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-17',
    title: 'Trump says he and Putin will discuss land and power plants in Ukraine ceasefire talks',
    body: 'Trump says negotiators have already discussed ‘dividing up certain assets’ and that he will talk to Putin on Tuesday.',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/mar/17/trump-says-he-and-putin-will-discuss-land-and-powerplants-in-ukraine-ceasefire-talks',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'MRNA_Scrub',
    categories: ['Health', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-17',
    title: 'Scientists say NIH officials told them to scrub mRNA references on grants',
    body: 'National Institutes of Health officials have urged scientists to remove all references to mRNA vaccine technology from their grant applications, two researchers said, in a move that signaled the agency might abandon a promising field of medical research.',
    links: [
      {
        href: 'https://www.msn.com/en-gb/health/medical/scientists-say-nih-officials-told-them-to-scrub-mrna-references-on-grants/ar-AA1B4uJ9',
        linkText: 'MSN',
      },
    ],
  },

  {
    id: 'Canada_France_Meet',
    categories: ['WW3', 'Fascism', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-17',
    title: 'Canada\'s Carney meets with European allies as Trump targets his country\'s sovereignty and economy',
    body: '“In the current international context, we want to be able to develop our most strategic projects with our closest, more loyal partners," Macron said, adding that “we are stronger together, better able to ensure the respect of our interests, the full exercise of our sovereignty.”',
    links: [
      {
        href: 'https://www.msn.com/en-us/news/world/canadas-carney-to-meet-with-european-allies-as-tensions-with-the-trump-administration-persist/ar-AA1B4yb5',
        linkText: 'MSN',
      },
    ],
  },

  {
    id: 'China_Agrees_VOA',
    categories: ['Project 2025', 'DOGE', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-15',
    title: '‘How gratifying’: Cheers in China as Trump dismantles Voice of America',
    body: 'One nationalist influencer called it “truly gratifying.” Another said he was laughing his head off. And a state-media editorial hailed the demise of what it called the “lie factory.” (Perhaps not a great thing with China agrees!)',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/17/china/china-cheers-trump-cut-voice-of-america-intl-hnk/',
        linkText: 'CNN',
      },

    ],
  },


  {
    id: 'Removed_Black_Hero',
    categories: ['Discrimination', 'Fascism', 'Project 2025', 'Orwell'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-17',
    title: 'Who Was Charles Rogers? US Defense Dept Removes Webpage On Medal Of Honor Recipient General',
    body: 'The DOD removed a webpage honoring Black U.S. Army General Charles C. Rogers, a Medal of Honor recipient from the Vietnam War. This follows the Trump administration’s crackdown on DEI policies. The page showed a 404 error, with its URL reportedly altered(They\'re erasing black history.) ',
    links: [
      {
        href: 'https://www.timesnownews.com/world/us/us-news/who-was-charles-rogers-us-defense-department-removes-webpage-on-medal-of-honor-recipient-general-article-119093340',
        linkText: 'Times Now World',
      },
    ],
  },

  {
    id: 'Trump_Ignores_Judge',
    categories: ['Immigration', 'Project 2025', 'Courts', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-17',
    title: 'Trump administration deports hundreds of immigrants even as a judge orders their removals be stopped',
    body: 'U.S. District Judge James E. Boasberg issued an order Saturday temporarily blocking the deportations, but lawyers told him there were already two planes with immigrants in the air — one headed for El Salvador, the other for Honduras. Boasberg verbally ordered the planes be turned around, but they apparently were not and he did not include the directive in his written order.',
    links: [
      {
        href: 'https://apnews.com/article/trump-venezuela-el-salvador-immigration-dd4f61999f85c4dd8bcaba7d4fc7c9af',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Detains_Doctor',
    categories: ['Immigration', 'Project 2025', 'Women', 'Discrimination'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-17',
    title: 'DHS detains Lebanese doctor with a work visa to teach medicine in the US',
    body: 'Dr. Rasha Alawieh had a valid H1B visa, or work visa, that had been issued on March 11. A Lebanese citizen, she was employed by Brown University as an assistant professor of medicine.',
    links: [
      {
        href: 'https://abcnews.go.com/US/dhs-detains-lebanese-doctor-work-visa-teach-medicine/story?id=119858026',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'ProudBoys_Back',
    categories: ['J6', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'skull',
    date: '2025-03-16',
    title: 'Proud Boys and their fans gather in Clackamas',
    body: 'Amidst increasingly fascist state action, direct opposition to far-right organizing is more important than ever. We invite folks to familiarize themselves with the following local figures and take action to ensure white supremacists and far-right agitators are always deterred from showing up on our blocks. Here is a quick guide to the flag wave attendees and their violent organizing backgrounds.',
    links: [
      {
        href: 'https://rosecityantifa.org/articles/clackamas-flag-wave/',
        linkText: 'Rose City Antifa',
      },
    ],
  },

  {
    id: 'Trump_18th',
    categories: ['Immigration', 'Courts', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-16',
    title: 'Trump invokes 18th century law to speed deportations, judge stalls it hours later',
    body: 'A federal judge barred the Trump administration Saturday from carrying out deportations under a sweeping 18th century law that the president invoked hours earlier to speed removal of Venezuelan gang members from the United States.',
    links: [
      {
        href: 'https://apnews.com/article/trump-aclu-deportations-venezuelans-b2566f05b10bf1cde1caf467a3b001cc',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.bbc.co.uk/news/articles/cy871w21d3vo',
        linkText: 'BBC :: What is the 1798 law that Trump used to deport migrants?',
      },

      {
        href: 'https://www.brennancenter.org/our-work/research-reports/alien-enemies-act-explained',
        linkText: 'The Alien Enemies Act, Explained',
      },
    ],
  },

  {
    id: 'Macron_Ukraine2',
    categories: ['WW3', 'Global', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-16',
    title: 'Macron says Russia’s permission not needed to deploy troops in Ukraine',
    body: 'The French President said, “If Ukraine requests allied forces to be on its territory, it is not up to Russia to accept or reject them.”',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/mar/16/macron-says-russias-permission-not-needed-to-deploy-troops-in-ukraine',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Scientists_No-Jobs',
    categories: ['FAFO', 'Project 2025', 'DOGE', 'Economy'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-16',
    title: 'Young scientists see career pathways vanish as schools adapt to federal funding cuts',
    body: 'Reductions to federal support for research at universities and other institutions under President Donald Trump are dimming young scientists’ prospects, cutting off pathways to career-building projects and graduate programs.',
    links: [
      {
        href: 'https://apnews.com/young-scientists-see-career-pathways-vanish-as-schools-adapt-to-federal-funding-cuts-000001959e23d0e3addddf3fa7cc0000',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Democrats_Low',
    categories: ['FAFO', 'Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-16',
    title: 'Democratic Party hits new polling low, while its voters want to fight Trump harder',
    body: 'Democratic voters say 2-to-1 they want party leaders to fight rather than compromise, even at the risk of not getting things done.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/politics-news/democratic-party-hits-new-polling-low-voters-want-fight-trump-harder-rcna196161',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'UK_Starlink',
    categories: ['DOGE', 'Global', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-16',
    title: '‘Deeply uncomfortable’: UK Starlink users switch off over Musk’s political machinations',
    body: 'Tesla sales have tumbled, X has had an exodus of users, and now it seems cracks are appearing among those who have turned to Elon Musk’s Starlink satellite system as a means of staying connected in remote areas.',
    links: [
      {
        href: 'https://www.theguardian.com/technology/2025/mar/16/deeply-uncomfortable-uk-starlink-users-switch-off-over-musks-political-machinations',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Macron_Ukraine',
    categories: ['WW3', 'Global', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-16',
    title: 'French MEP says US should give back Statue of Liberty',
    body: 'France should take back the Statue of Liberty because the US no longer represents the values that led France to offer the statue,',
    links: [
      {
        href: 'https://www.lemonde.fr/en/politics/article/2025/03/16/french-mep-says-us-should-give-back-statue-of-liberty_6739217_5.html',
        linkText: 'Le Monde',
      },
      {
        href: 'https://eu.usatoday.com/story/news/politics/2025/03/17/trump-statue-of-liberty-us-france/82492828007/',
        linkText: 'USA Today',
      },
    ],
  },

  {
    id: 'Revokes_Visas',
    categories: ['Immigration', 'Fascism', 'Discrimination', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-16',
    title: 'US vows to revoke green cards and visas of pro-Palestinian protesters',
    body: 'US Secretary of State Marco Rubio told CBS that there will be an increase in the detention of pro-Palestinian protesters and the revocation of their green cards and visas',
    links: [
      {
        href: 'https://www.middleeasteye.net/live-blog/live-blog-update/us-vows-revoke-green-cards-and-visas-pro-palestinian-protesters',
        linkText: 'Middle East Eye',
      },
    ],
  },

  {
    id: 'Ignore_Judge-Order',
    categories: ['Immigration', 'Fascism', 'Courts'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-16',
    title: 'Rubio Touts Migrants Sent to El Salvador After Judge Orders Planes Return',
    body: 'Rubio\'s praise for the deportations on Sunday morning comes shortly after a federal judge temporarily halted the Trump administration\'s efforts and ordered the planes to return to the U.S.',
    links: [
      {
        href: 'https://www.newsweek.com/rubio-touts-migrants-sent-el-salvador-after-judge-orders-planes-return-2045576',
        linkText: 'Newsweek',
      },
    ],
  },

  {
    id: 'Schumer_Dems',
    categories: ['Tiddlywinks', 'Project 2025'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-16',
    title: '‘Absolutely Ridiculous’: Democrats Seethe at Schumer for Backing G.O.P. Spending Bill',
    body: 'The stream of criticism that Mr. Schumer has faced since his vote comes as the Democratic Party is divided on how best to oppose Mr. Trump’s agenda while facing dismal polling numbers.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/16/us/politics/absolutely-ridiculous-democrats-seethe-at-schumer-for-backing-gop-spending-bill.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Trump_Invokes-Judge-Blocks',
    categories: ['Immigration', 'Fascism', 'Civil Liberties', 'Resist', 'Courts'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-15',
    title: 'Judge blocks Trump from using 18th-century wartime act for deportations',
    body: 'Trump had invoked the Alien Enemies Act of 1798 to deport five Venezuelans, but order halted by judge.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/15/trump-alien-enemies-act-deportations',
        linkText: 'The Guardian',
      },
    ],
    },

  {
    id: 'Trump_Invokes-Alien',
    categories: ['Immigration', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-15',
    title: 'Invocation of the Alien Enemies Act Regarding the Invasion of The United States',
    body: 'Civil liberties organizations have accused Trump of invoking the 1798 act unlawfully during peacetime to accelerate mass deportations and sidestep immigration law.',
    links: [
      {
        href: 'https://www.whitehouse.gov/presidential-actions/2025/03/invocation-of-the-alien-enemies-act-regarding-the-invasion-of-the-united-states-by-tren-de-aragua/',
        linkText: 'White House',
      },
    ],
    },
 
  {
    id: 'Hide_Students',
    categories: ['Project 2025', 'Discrimination', 'Civil Liberties', 'Fascism' ],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-15',
    title: 'The Justice Department is investigating whether Columbia University hid students sought by the US',
    body: 'Columbia has come under immense pressure from the Trump administration in recent weeks, with the U.S. government canceling $400 million in federal grants and contracts to the school, much of it for medical research, as punishment for not cracking down harder on students and faculty who criticized Israel’s military action in Gaza during large protests last spring.',
    links: [
      {
        href: 'https://apnews.com/article/columbia-university-mahmoud-khalil-ice-arrests-3a8db6e646b786a721089a6f0bc8d9fc',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Musk_Hitler',
    categories: ['DOGE', 'Fascism', 'Global', 'Orwell'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-15',
    title: 'Elon Musk Shares Post Saying Hitler \'Didn\'t Murder Millions Of People',
    body: 'The Thursday repost on Musk’s X account read: “Stalin, Mao, and Hitler didn’t murder millions of people. Their public sector employees did.”',
    links: [
      {
        href: 'https://www.msn.com/en-us/politics/government/elon-musk-shares-post-saying-hitler-didn-t-murder-millions-of-people/ar-AA1AZj7q',
        linkText: 'MSN',
      },
    ],
  },

  {
    id: 'DOGE_Email',
    categories: ['Project 2025', 'DOGE', 'Courts'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-15',
    title: 'A DOGE staffer broke Treasury policy by emailing unencrypted personal data',
    body: 'Court documents filed Friday in an ongoing lawsuit against the US Treasury Department reveal that a 25-year-old staffer for the Department of Government Efficiency (DOGE) violated Treasury policy by sending a spreadsheet that had personal information to two other members of the Trump administration.',
    links: [
      {
        href: 'https://www.theverge.com/news/630894/doge-treasury-lawsuit-marko-elez-unencrypted-emails',
        linkText: 'The Verge',
      },
    ],
  },

  {
    id: 'VOA_Canceled',
    categories: ['Project 2025', 'DOGE', 'Civil Liberties'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-15',
    title: 'Voice of America channels fall silent as Trump administration guts agency and cancels contracts',
    body: 'While Trump allies argue that the broadcasters are bloated and outdated, advocates say that by dismantling the networks, the United States is ceding the airwaves to China and other world powers, thereby harming American interests abroad.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/15/media/voice-of-america-trump-cuts/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.npr.org/2025/03/15/nx-s1-5329244/bloody-saturday-voiceofamerica-radio-free-asia-europe-trump-kari-lake',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Silence_Students',
    categories: ['Fascism', 'Global', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-15',
    title: 'After Columbia arrests, international college students fall silent',
    body: 'International students and faculty across the U.S. say they feel afraid to voice opinions or stand out on campus for fear of getting kicked out of the country.',
    links: [
      {
        href: 'https://apnews.com/article/columbia-university-trump-arrests-international-students-0551bb740eac7d5cec155a2d779a45d1',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Schumer_DemocratsAngry',
    categories: ['Tiddlywinks', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-15',
    title: 'Democratic Party fractures in government shutdown fight, with anger running high',
    body: 'Nine other members of the Democratic Caucus — a contingent of mostly swing-state and retiring senators — eventually joined Schumer in voting to advance the Republican funding proposal, providing crucial support to bring it to a final vote.',
    links: [
      {
        href: 'https://apnews.com/article/democrats-congress-chuck-schumer-government-funding-shutdown-43d1acea20c34ad28d848edc08ad6375',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.nbcnews.com/politics/congress/democratic-anger-schumer-surrender-shows-partys-deep-divisions-take-tr-rcna196370',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Trump_Enemies',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-14',
    title: 'Trump pledges to ‘expose’ his enemies in political speech at Justice Department',
    body: 'The speech marked the latest manifestation of Trump’s unparalleled takeover of the department and came amid a brazen campaign of retribution already undertaken under his watch',
    links: [
      {
        href: 'https://apnews.com/article/trump-visits-justice-department-e9091e3721adda4d3ed39bd15119a0d4',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Cruz_Mocked',
    categories: ['Resist', 'DOGE', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-14',
    title: 'Ted Cruz Mocked After Posing for \'Pathetic\' Photo With Trump\'s Tesla: "It\'s a Car Bro"',
    body: 'Senator Ted Cruz found himself on the receiving end of ridicule after he posted a photo of himself posing with Donald Trump\'s newly purchased Tesla, calling it "the coolest thing I\'ve ever seen."',
    links: [
      {
        href: 'https://www.msn.com/en-us/news/politics/ted-cruz-mocked-after-posing-for-pathetic-photo-with-trump-s-tesla-it-s-a-car-bro/ar-AA1AX4Nv',
        linkText: 'MSN',
      },
    ],
  },

  {
    id: 'Greenland_Resists',
    categories: ['Resist', 'Fascism', 'Global'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-14',
    title: '\'Enough is enough\': Greenland flatly rejects Trump\'s calls for annexation',
    body: 'Greenland\'s leaders expressed anger after President Donald Trump said U.S. acquisition of the Arctic territory “will happen” during comments at the Oval Office.',
    links: [
      {
        href: 'https://www.nbcnews.com/news/world/greenland-rejects-trump-annexation-rcna196390',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'ICE_Columbia',
    categories: ['Immigration', 'Fascism', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-14',
    title: 'Department of Homeland Security raids 2 Columbia University dorm rooms after ICE arrest of Mahmoud Khalil',
    body: 'The same day, Columbia announced the expulsions of several protesters involved in the building takeover.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cr723zn40e5o',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Schumer_AOC',
    categories: ['Tiddlywinks', 'Resist', 'Project 2025'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-03-14',
    title: '\'Deep sense of outrage and betrayal\': House Democrats react to Schumer announcement',
    body: '"I think there is a deep sense of outrage and betrayal and this is not just progressive Democrats — this is across the board, the entire party," New York Rep. Alexandria Ocasio-Cortez told reporters Thursday night at a party retreat in Leesburg, Va "I think it is a huge slap in the face," she said.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/13/nx-s1-5327600/house-democrats-outrage-spending',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Schumer_MAGA',
    categories: ['Tiddlywinks', 'Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-14',
    title: 'Democratic Party infighting exposes struggle to unite against Trump',
    body: 'Chuck Schumer took criticism from within his own party for backing a Republican-crafted funding bill',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cr723zn40e5o',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Farmers_FAFO',
    categories: ['FAFO', 'Project 2025', 'Tariff War'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-14',
    title: 'Farmers face steep losses in the middle of Trump\'s trade war and funding cuts',
    body: 'From funding cuts to tariffs, farmers have found themselves struggling to find markets for their products and facing the risk of steep losses for the year ahead.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/economics/farmers-face-steep-losses-middle-trumps-trade-war-funding-cuts-rcna195967',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Musk_Cyberespionage',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-14',
    title: 'Musk visits National Security Agency after urging \'overhaul\' of U.S. cyberespionage hub',
    body: 'The unannounced visit suggests Musk’s drive to slash the federal workforce now extends to a secretive agency known as the "puzzle palace" for its famed codebreaking abilities.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/musk-visits-national-security-agency-urging-overhaul-us-cyberespionage-rcna196025',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Musk_Starve_Dogs',
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-14',
    title: 'Elon Reportedly Orders Government to Stop Feeding the Bomb-Sniffing Dogs',
    body: 'As Elon Musk\'s so-called Department of Government Efficiency continues to plunder the federal government, even the Transportation Security Administration\'s bomb-sniffing K9 units aren\'t safe.',
    links: [
      {
        href: 'https://futurism.com/musk-tsa-dogs',
        linkText: 'Futurism',
      },
    ],
  },

  {
    id: 'DEI_Denied-Hurricane',
    categories: ['DOGE', 'Project 2025', 'Discrimination', 'Women'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-13',
    title: 'Trump admin makes Asheville remove ‘DEI’ language to access hurricane relief aid',
    body: 'The Trump administration recently denied a funding request from the city of Asheville, North Carolina, to help its recovery from Hurricane Helene, telling the city it must cut a program meant to aid female and minority contractors.',
    links: [
      {
        href: 'https://www.msn.com/en-us/news/politics/trump-admin-makes-asheville-remove-dei-language-to-access-hurricane-relief-aid/ar-AA1ARUqx',
        linkText: 'MSN',
      },

    ],
  },

  {
    id: 'DOE_Disabilities',
    categories: ['Education', 'Project 2025', 'DOGE', 'Discrimination'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-03-13',
    title: 'What dismantling the Education Department means for kids with disabilities',
    body: 'Trump’s education policy threatens everything from speech therapy to wheelchair access.',
    links: [
      {
        href: 'https://www.vox.com/policy/403596/what-dismantling-the-education-department-means-for-kids-with-disabilities',
        linkText: 'Vox 1',
      },

      {
        href: 'https://www.vox.com/policy/402336/department-of-education-trump-musk-doge-schools',
        linkText: 'Vox 2',
      },
    ],
  },

  {
    id: 'Congress_Cuts',
    categories: ['FAFO', 'Project 2025', 'Economy'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-13',
    title: 'Congress poised to force $1B cut to local DC budget, surprising many lawmakers',
    body: 'The mayor’s office said in a recent request to lawmakers that such a cut would deal a significant blow to its general funds budget, which it described as “solely supported” by the District’s “locally raised taxes, fees and fines.”',
    links: [
      {
        href: 'https://thehill.com/business/budget/5194022-dc-budget-cut-funding-bill/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'SCOTUS_Birthright',
    categories: ['Courts', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-13',
    title: 'Trump takes his plan to end birthright citizenship to the Supreme Court',
    body: 'The administration wants the court to limit the scope of lower court rulings against his executive order that would end automatic birthright citizenship.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/supreme-court/trump-takes-plan-end-birthright-citizenship-supreme-court-rcna196314',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'MN_LGBTQ',
    categories: ['LGBTQ', 'Project 2025'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-13',
    title: 'Minnesota National Guard members receive email instructing those with gender dysphoria to voluntarily separate',
    body: 'The email refers to President Donald Trump’s executive order that said gender dysphoria is inconsistent with “the rigorous standards necessary for military service.”',
    links: [
      {
        href: 'https://www.mprnews.org/story/2025/03/13/minnesota-national-guard-receives-email-about-transgender-members',
        linkText: 'MPR News',
      },
    ],
  },


  {
    id: 'French_Champagne',
    categories: ['WW3', 'Global', 'Project 2025', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-13',
    title: 'Trump threatens to put 200% tariff on French Champagne and other EU spirits',
    body: 'The U.S. tariff comes after the European Union moved to reinstate an import tax on American whiskey.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/13/trump-threatens-to-put-200percent-tariff-on-french-champagne-and-other-eu-spirits.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'TSA_Sues',
    categories: ['Courts', 'Project 2025'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-13',
    title: 'TSA union sues Noem over stripping of bargaining rights',
    body: 'The American Federation of Government Employees (AFGE) argues Noem has no power to end an already authorized seven-year contract, accusing the secretary of targeting the union after it brought a number of suits on behalf of government workers',
    links: [
      {
        href: 'https://thehill.com/regulation/court-battles/5193939-union-sues-dhs-noem-tsa-contract/',
        linkText: 'The Hill',
      },
    ],
  },

  {
    id: 'Canada-EU_Retaliate',
    categories: ['Economy', 'WW3', 'Global', 'Resist', 'Project 2025', 'Tariff War'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-13',
    title: 'Canada and the EU swiftly retaliate against Trump’s steel and aluminum tariffs',
    body: 'Major trade partners swiftly hit back at President Donald Trump’s increased tariffs on aluminum and steel imports, imposing stiff new taxes on U.S products from textiles and water heaters to beef and bourbon.',
    links: [
      {
        href: 'https://apnews.com/article/trump-eu-tariffs-countermeasures-806a3b9bcc9cd4e45817e672d95f0070',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Canadian_Chains',
    categories: ['Immigration', 'WW3', 'Global', 'Project 2025', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-13',
    title: 'Canadian woman put in chains, detained by ICE after entering San Diego border',
    body: 'A Canadian entrepreneur detained by ICE is speaking out after she got arrested while trying to enter the San Diego border to obtain a visa last Monday.',
    links: [
      {
        href: 'https://www.10news.com/news/local-news/never-seen-anything-so-inhumane-canadian-woman-put-in-chains-detained-by-ice-after-entering-san-diego-border',
        linkText: '10 News San Diego',
      },
    ],
  },

  {
    id: 'Bitcoin_Red-Flags',
    categories: ['Project 2025', 'Economy'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-13',
    title: 'Top Trump official’s crypto ties raise red flags as the administration touts digital assets',
    body: 'Critics of Trump\'s plan for a bitcoin reserve say it will serve primarily as a government backstop on the price of the asset, enriching current holders.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/13/business/trump-officials-crypto-bitcoin/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'EPA_Unwind',
    categories: ['Climate', 'Project 2025'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-03-13',
    title: 'Trump’s EPA insists climate change isn’t a danger',
    body: 'How a foundational climate regulation is under threat — and how environmental groups plan to fight back.',
    links: [
      {
        href: 'https://www.vox.com/climate/403877/epa-climate-rollback-endangement-trump-environment',
        linkText: 'Vox',
      },

      {
        href: 'https://www.epa.gov/newsreleases/epa-launches-biggest-deregulatory-action-us-history',
        linkText: 'EPA News',
      },
    ],
  },

  {
    id: 'FBI_Target_Envioronment',
    categories: ['Climate', 'Fascism'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-03-12',
    title: 'Trump\’s FBI Moves to Criminally Charge Major Climate Groups',
    body: 'The FBI is moving to criminalize groups like Habitat for Humanity for receiving grants from the Environmental Protection Agency under the Biden administration.',
    links: [
      {
        href: 'https://newrepublic.com/post/192660/trump-fbi-charge-climate-organizations',
        linkText: 'New Republic',
      },
    ],
  },

  {
    id: 'Trump_Sex_Criminal',
    categories: ['FAFO'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-12',
    title: 'Robert Morris, former Texas megachurch pastor and Trump adviser, indicted for child sex crimes',
    body: 'Morris is a former spiritual adviser to President Donald Trump, and Gateway — one of the nation’s largest megachurches — has been particularly active in Dallas-area GOP politics. (Another "religious leader" caught as a sexual predator. Surprise. Surprise.)',
    links: [
      {
        href: 'https://www.texastribune.org/2025/03/12/robert-morris-texas-megachurch-indicted-sexual-abuse/',
        linkText: 'Texas Tribune',
      },
    ],
  },

  {
    id: 'Education_Layoffs',
    categories: ['Education', 'DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-03-12',
    title: 'Education Department cuts half its staff as Trump vows to wind the agency down',
    body: 'The Education Department plans to lay off more than 1,300 of its employees as part of an effort to halve the organization’s staff -- a prelude to President Donald Trump’s plan to dismantle the agency.',
    links: [
      {
        href: 'https://apnews.com/article/education-department-layoffs-job-cuts-linda-mcmahon-ce9f6a8a63972aede0d8fbdf057ab788',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.vox.com/politics/403568/conservatives-decades-long-quest-to-destroy-the-department-of-education',
        linkText: 'Vox',
      },
    ],
  },

  {
    id: 'Inflation_Cooled',
    categories: ['Economy', 'Global', 'Project 2025', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-12',
    title: 'US inflation cooled in February, but Trump’s tariff plans and trade war loom',
    body: 'Inflation slowed more than expected in February and cooled for the first time in five months, but that progress may be short lived as President Donald Trump ramps up his trade war, which threatens to increase prices for Americans.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/12/economy/us-cpi-consumer-inflation-february/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'EU_Retaliate',
    categories: ['Economy', 'WW3', 'Global', 'Resist', 'Project 2025', 'Tariff War'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-12',
    title: 'Politics Trump’s 25% tariffs on steel and aluminum imports take effect, Europe retaliates',
    body: 'The European Union said on Wednesday it would impose counter-tariffs on 26 billion euros ($28.33 billion) worth of U.S. goods starting in April in response to the duties.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/12/trumps-25percent-tariffs-on-steel-and-aluminum-imports-take-effect.html',
        linkText: 'CNBC',
      },

      {
        href: 'https://www.nbcnews.com/business/economy/trump-tariffs-steel-aluminum-levies-imports-europe-china-uk-japan-rcna195810',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Canada_Retaliate',
    categories: ['Economy', 'WW3', 'Global', 'Resist', 'Project 2025', 'Tariff War'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-12',
    title: 'Canada will announce more than $20 billion in tariffs in response to Trump’s metal tariffs',
    body: 'Canada will announce Canadian $29.8 billion ($20.7 billion) in retaliatory tariffs in response to the 25% steel and aluminum tariffs that U.S. President Donald Trump has leveled',
    links: [
      {
        href: 'https://apnews.com/article/canada-trump-us-tariffs-steel-2517a6a2baf0596cb1a43d3a7d1e7939',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.nbcnews.com/business/economy/canada-retaliatory-tariffs-21-billion-us-goods-trump-tariffs-latest-rcna196012',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Judge_Pauses_Trial',
    categories: ['Project 2025', 'Courts', 'LGBTQ'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-03-12',
    title: 'Judge Forced to Pause Trial Because DOJ Lawyers Are so Unprepared',
    body: 'Justice Department lawyers had not read any of the three reports Defense Secretary Pete Hegseth cited in his ban on transgender military service members.',
    links: [
      {
        href: 'https://newrepublic.com/post/192657/judge-military-trans-ban-trial-lawyers-incompetence',
        linkText: 'The New Republic',
      },
    ],
  },

  {
    id: 'Women_Harder_Vote',
    categories: ['Women', 'Project 2025'],
    color: 'red',
    faicon: 'venus',
    date: '2025-03-11',
    title: 'NH’s new ID requirements send some would-be voters home to grab passports, birth certificates',
    body: 'New Hampshire has made it harder for married women to vote.',
    links: [
      {
        href: 'https://www.nhpr.org/nh-news/2025-03-11/nhs-new-id-requirements-send-some-would-be-voters-home-to-grab-passports-birth-certificates=',
        linkText: 'New Hampshire NPR',
      },
    ],
  },

  {
    id: 'Dems_Brank',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-11',
    title: 'Dems’ own polling shows massive brand problem ahead of 2026',
    body: 'The poll found a whopping 69 percent of voters said Democrats were “too focused on being politically correct.” Another 51 percent said “elitist” described the Democratic Party well.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/11/poll-democrats-jobs-economy-00222988',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Tesla_White-House',
    categories: ['FAFO', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-11',
    title: 'Trump Turns White House into Tesla Lot to Boost Struggling Stock',
    body: 'The president appeared with Elon Musk to show off some electric vehicles, promising to buy one even though he can\'t drive. Trump bought an $80,000 Tesla and falsely claimed boycotts were illegal.',
    links: [
      {
        href: 'https://www.rollingstone.com/politics/politics-news/trump-white-house-tesla-lot-stock-1235293916/',
        linkText: 'Rolling Stone',
      },

      {
        href: 'https://apnews.com/article/trump-musk-tesla-9a43c57a0591a4c7ed8d3f1b2c7ef8d9',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Trump_Backs_Off',
    categories: ['Global', 'Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-11',
    title: 'Trump backs off of Canada tariff hike as Ontario lets up on electricity threat',
    body: 'The day before steel and aluminum tariffs on all U.S. trading partners are set to go into effect, President Trump announced — and then hours later rescinded — tariffs on Canadian steel and aluminum at double the rate of the rest of the world. (Back & Forth. Back & Forth.)',
    links: [
      {
        href: 'https://www.npr.org/2025/03/11/nx-s1-5324639/trump-canada-tariffs-aluminum-steel',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Tesla_More-Protests',
    categories: ['Fascism', 'Project 2025', 'DOGE', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-11',
    title: 'The Tesla protests are getting bigger — and rowdier',
    body: 'Protests escalated at Tesla showrooms across the nation. Hundreds of people gathered to boycott Elon Musk and his involvement in the Trump administration as the head of the Department of Government Efficiency (DOGE), which is overseeing a massively disruptive effort to fire thousands of federal workers to slash government spending.',
    links: [
      {
        href: 'https://www.theverge.com/news/626851/tesla-takedown-protests-elon-musk',
        linkText: 'The Verge',
      },
    ],
  },

  {
    id: 'Tesla_Terrorism',
    categories: ['Fascism', 'Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-11',
    title: 'Vandalize a Tesla dealership? Trump says he\'ll label that domestic terrorism.',
    body: 'President Donald Trump says he will label attacks against Tesla dealerships domestic terrorism in response to the recent spate of vandalisms against Elon Musk\'s EV company.',
    links: [
      {
        href: 'https://www.businessinsider.com/trump-tesla-vandalism-domestic-terrorism-elon-musk-2025-3',
        linkText: 'Business Insider',
      },
    ],
  },

  {
    id: 'EU_Pledge',
    categories: ['Global', 'Resist', 'WW3'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-11',
    title: 'EU’s top diplomat pledges unified support for Ukraine and global humanitarian aid in dig at US',
    body: 'The European Union has a message for the Trump administration: It will continue supporting Ukraine against Russia’s illegal invasion, step up humanitarian aid when others pull back, and boost global teamwork to address the world’s challenges.',
    links: [
      {
        href: 'https://apnews.com/article/european-union-united-nations-trump-russia-ukraine-02dadb854440861864733211e687b9b5',
        linkText: 'Associated Press',
      },
    ],
  },


  {
    id: 'Freedom_Cities',
    categories: ['Fascism', 'Economy', 'Orwell'],
    color: 'red',
    faicon: 'coins',
    date: '2025-03-11',
    title: 'Tech Execs Are Pushing Trump to Build ‘Freedom Cities’ Run by Corporations',
    body: 'A new lobbying group, dubbed the Freedom Cities Coalition, wants to convince President Trump and Congress to authorize the creation of new special development zones within the U.S. These zones would allow wealthy investors to write their own laws and set up their own governance structures which would be corporately controlled and wouldn’t involve a traditional bureaucracy.',
    links: [
      {
        href: 'https://gizmodo.com/tech-execs-are-pushing-trump-to-build-freedom-cities-run-by-corporations-2000574510',
        linkText: 'Gizmodo',
      },
    ],
  },

  {
    id: 'Restore_Support',
    categories: ['WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-11',
    title: 'U.S. to Restore Military Support to Ukraine After It Agrees to Cease-Fire',
    body: 'The 30-day truce, which is contingent on Russian acceptance, envisions the start of talks between Kyiv and Moscow on halting the war',
    links: [
      {
        href: 'https://www.wsj.com/politics/national-security/marco-rubio-says-talks-in-saudi-arabia-key-to-resuming-military-support-for-ukraine-cb34b5a5?ueid=ffb28db06ced21f14e4653d5131fad10',
        linkText: 'Washington Street Journal',
      },

      {
        href: 'https://apnews.com/video/rubio-says-it-will-be-highly-unfortunate-if-russia-rejects-ukraine-ceasefire-proposal-79f4b7ae798e40448cfbe9c35ffa26df?utm_source=substack&utm_medium=email',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Activist_Arrested2',
    categories: ['Discrimination', 'Project 2025', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-11',
    title: 'Trump warns that arrest of Palestinian activist at Columbia will be ‘first of many’',
    body: 'Trump warned Monday that the arrest and possible deportation of a Palestinian activist who helped lead protests at Columbia University will be the first “of many to come” as his administration cracks down on campus demonstrations against Israel and the war in Gaza.',
    links: [
      {
        href: 'https://apnews.com/article/columbia-university-mahmoud-khalil-ice-6964107d218dba43eb995d6dbbe528b1',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Tesla_Boycott',
    categories: ['Fascism', 'DOGE'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-11',
    title: 'Trump calls Tesla boycott ‘illegal’ and says he’s buying one to support Elon Musk',
    body: 'Trump said “radical left lunatics” are “illegally and collusively” boycotting Tesla, which the president described as one of the best automakers in the world. This action, Trump said, was meant as an attack on Musk and what he stands for.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/11/trump-says-hes-buying-a-tesla-to-support-elon-musk-and-counter-illegal-boycott-of-ev-maker.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'Judge_Orders_DOGE_Release2',
    categories: ['Economy', 'DOGE', 'Project 2025'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-10',
    title: 'DOGE’s $1 card freeze hits research on lifesaving military gear, while genealogy to help identify soldiers’ remains gets exception',
    body: 'A freeze on federal purchase cards imposed by Elon Musk’s Department of Government Efficiency is reportedly freezing certain activities related to the military, too.',
    links: [
      {
        href: 'https://www.aol.com/finance/doge-1-card-freeze-hits-171946485.html?guccounter=1',
        linkText: 'AOL',
      },
    ],
  },

  {
    id: 'Judge_Orders_DOGE_Release',
    categories: ['Courts', 'DOGE', 'Project 2025'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-10',
    title: 'Judge orders urgent release of DOGE records, citing ‘unprecedented’ power and ‘unusual secrecy’',
    body: 'It’s the first significant ruling in a growing legal push to pierce DOGE’s secretive veil, a decision that undercuts Musk’s repeated insistence about the operation’s transparency.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/10/judge-orders-doge-record-release-00223151',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Canada_Raises_Elec',
    categories: ['Resist', 'Global', 'Project 2025', 'Economy', 'Tariff War'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-10',
    title: 'Ontario Raises Electricity Price by 25% for Minnesota, Michigan and New York',
    body: 'A Canadian province that exports electricity to the US raised power prices for three states by 25% on Monday in retaliation for President Donald Trump’s tariffs.',
    links: [
      {
        href: 'https://www.bloomberg.com/news/articles/2025-03-10/ontario-raises-electricity-price-by-25-for-minnesota-michigan-and-new-york',
        linkText: 'Bloomberg ',
      },

      {
        href: 'https://apnews.com/article/canada-ontario-us-trump-tariffs-electricity-834dc3d9defd314923912f9bd8540e31',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'AOC_Offense',
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-10',
    title: 'AOC \'going on the offense\' to rally red-district voters against Trump',
    body: 'Rep Alexandria Ocasio-Cortez says Democrats should take a page from Sen Bernie Sanders\' playbook',
    links: [
      {
        href: 'https://www.yahoo.com/news/aoc-going-offense-rally-red-170237870.html',
        linkText: 'Yahoo',
      },
    ],
  },

  {
    id: 'Bernie_Leader',
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-10',
    title: 'Drawing huge crowds, Bernie Sanders steps into leadership of the anti-Trump resistance',
    body: '"The people of this country will not allow us to move toward oligarchy. They will not allow Trump to take us into authoritarianism,” Sanders yelled. “We’re prepared to fight. And we’re going to win.”',
    links: [
      {
        href: 'https://apnews.com/article/bernie-sanders-democrats-trump-c213d5ae42737c956d46f6f7f17e5abd',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Tesla_Takedown',
    categories: ['Project 2025', 'Resist', 'FAFO', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-10',
    title: 'Musk\'s Tesla facilities in US face \'Takedown\' protests',
    body: 'Tesla facilities across the US are facing protests and vandalism in response to the political role Elon Musk, who owns the car manufacturer, has played in the Trump administration.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cnvze9dzq8vo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Tesla_Protests',
    categories: ['Project 2025', 'Resist', 'FAFO', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-10',
    title: 'Tesla faces vandalism and protests amid backlash against Elon Musk',
    body: 'Tesla just reported its first drop in annual sales in its history, and there are indications that sales could be down again this quarter. ',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/10/business/tesla-vandalism-protest-stock/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'SCOTUS_USAID',
    categories: ['Project 2025', 'Resist', 'Courts', 'Global'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-10',
    title: 'Understanding the Supreme Court\'s Decision on USAID Funding',
    body: 'The U.S. Supreme Court has limited the scope of President Donald Trump’s authority to temporarily halt federal funding for foreign assistance.',
    links: [
      {
        href: 'https://www.findlaw.com/legalblogs/federal-courts/understanding-the-supreme-courts-decision-on-usaid-funding/',
        linkText: 'FindLaw',
      },
    ],
  },

  {
    id: 'SCOTUS_Rejects_Climate',
    categories: ['Project 2025', 'Resist', 'Courts', 'Climate'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-10',
    title: 'Supreme Court rejects Republican-led effort to halt climate change lawsuits in Democratic-led states',
    body: 'The justices acted on an unusual Republican effort to file suit in the Supreme Court over the Democratic states’ use of their own state courts to sue fossil fuel companies for deceiving the public about the risks of their products contributing to climate change.',
    links: [
      {
        href: 'https://apnews.com/article/supreme-court-climate-change-state-lawsuits-d38a557894276083f94f47cae4127ddd',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Ontario_Resist',
    categories: ['Project 2025', 'Resist', 'Global', 'Economy', 'Tariff War'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-10',
    title: 'Ontario slaps 25% tax increase on electricity exports to US in response to Trump’s trade war',
    body: '“I will not hesitate to increase this charge. If the United States escalates, I will not hesitate to shut the electricity off completely,” Ontario Premier Doug Ford said at a news conference in Toronto.',
    links: [
      {
        href: 'https://apnews.com/article/canada-ontario-us-trump-tariffs-electricity-834dc3d9defd314923912f9bd8540e31',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Greenland_Valuable',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-10',
    title: 'What makes Greenland a strategic prize at a time of rising tensions? And why now?',
    body: 'Trump’s interest in Greenland, restated vigorously soon after he returned to the White House in January, comes as part of an aggressively “America First” foreign policy platform that includes demands for Ukraine to hand over mineral rights in exchange for continued military aid, threats to take control of the Panama Canal, and suggestions that Canada should become the 51st U.S. state.',
    links: [
      {
        href: 'https://apnews.com/article/greenland-trump-independence-election-denmark-china-russia-c86afc33375d0fe260f065a662e04b57',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Fed-Worker_Rogue',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-10',
    title: 'Meet the federal worker who went rogue: ‘I hope that it lights a fire under people’',
    body: 'To billionaire Elon Musk and his cost-cutting team at the Department of Government Efficiency, Karen Ortiz may just be one of many faceless bureaucrats. But to some of her colleagues, she is giving a voice to those who feel they can’t speak out.',
    links: [
      {
        href: 'https://apnews.com/article/eeoc-pushback-karen-ortiz-transgender-6ebc3cfb90298ae06f46d0ed4898733d',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Rubio_Purge',
    categories: ['Project 2025', 'Global'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-10',
    title: 'Secretary of State Rubio says purge of USAID programs complete, with 83% of agency’s programs gone',
    body: 'Rubio thanked DOGE and “our hardworking staff who worked very long hours to achieve this overdue and historic reform” in foreign aid.',
    links: [
      {
        href: 'https://apnews.com/article/trump-musk-rubio-usaid-foreign-aid-bf442d62af67918a6fc5eee839074601',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Boebert_Challenged',
    categories: ['Project 2025', 'FAFO', 'Resist'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-10',
    title: 'Lauren Boebert accused of racism and ableism over her criticism of Al Green',
    body: 'The extremist Republican US House member Lauren Boebert has been accused of racism, ableism and hypocrisy in one fell swoop after criticizing a Black Democrat for “shaking his pimp cane” at Donald Trump during the president’s recent speech to Congress.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/10/lauren-boebert-al-green',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Billionaires_Lose',
    categories: ['Project 2025', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-10',
    title: '\'Stunning reversal\': Billionaires at Trump\'s inauguration see dramatic decline in wealth',
    body: 'The tech billionaires who had front-row seats as President Donald Trump was being sworn in on Jan. 20 – including Elon Musk, Mark Zuckerberg and Jeff Bezos – have seen their wealth drop by a staggering $210 billion combined as the president’s economic policies have upended markets.',
    links: [
      {
        href: 'https://www.rawstory.com/trump-billionaires-2671300971/',
        linkText: 'Raw Story',
      },
    ],
  },

  {
    id: 'Activist_Judge-Block',
    categories: ['Discrimination', 'Project 2025', 'Courts', 'Civil Liberties'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-10',
    title: 'Federal judge blocks Trump administration from deporting pro-Palestinian activist Mahmoud Khalil',
    body: 'Khalil’s arrest in New York and his detainment in Louisiana have drawn strong pushback from Americans who say the Trump administration’s plans to deport him violate his First Amendment rights.',
    links: [
      {
        href: 'https://www.yahoo.com/news/federal-judge-blocks-trump-administration-from-deporting-pro-palestinian-activist-mahmoud-khalil-203724926.html',
        linkText: 'Yahoo',
      },
    ],
  },
 
  {
    id: 'Activist_Arrested',
    categories: ['Discrimination', 'Project 2025', 'Fascism', 'Civil Liberties'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-10',
    title: 'Immigration agents arrest Palestinian activist who helped lead Columbia University protests',
    body: 'Federal immigration authorities arrested a Palestinian activist Saturday who played a prominent role in Columbia University’s protests against Israel, a significant escalation in the Trump administration’s pledge to detain and deport student activists.',
    links: [
      {
        href: 'https://apnews.com/article/columbia-university-mahmoud-khalil-ice-15014bcbb921f21a9f704d5acdcae7a8',
        linkText: 'Associated Press',
      },
    ],
  },
 
  {
    id: 'BLM_Removed',
    categories: ['Discrimination', 'Project 2025'],
    color: 'red',
    faicon: 'person',
    date: '2025-03-10',
    title: '\‘More than brick and mortar:\’ DC begins removing \‘Black Lives Matter\’ plaza near the White House',
    body: 'Crews started work Monday to remove the large yellow “Black Lives Matter” painted on the street one block from the White House. D.C. Mayor Muriel Bowser announced the change last week in response to pressure from Republicans in Congress. ',
    links: [
      {
        href: 'https://www.wdio.com/front-page/world-national/more-than-brick-and-mortar-dc-begins-removing-black-lives-matter-plaza-near-the-white-house/',
        linkText: 'WDIO',
      },
      
    ],
  },

  {
    id: 'Social_Sec_Musk',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-10',
    title: 'Musk eyes Social Security and benefit programs for cuts while claiming widespread fraud',
    body: 'Elon Musk pushed debunked theories about Social Security on Monday while describing federal benefit programs as rife with fraud, suggesting they will be a primary target in his crusade to reduce government spending.',
    links: [
      {
        href: 'https://apnews.com/article/elon-musk-donald-trump-doge-b21b74f56f30012a6450a629e7232a1a?utm_source=substack&utm_medium=email',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Recession',
    categories: ['Project 2025', 'Economy'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-10',
    title: 'Trump says a transition period for the economy is likely: ‘You can’t really watch the stock market’',
    body: 'Trump and other senior White House officials have spent the past several days bracing Americans for a potential economic slowdown that they say will then lead to stronger growth ahead.',
    links: [
      {
        href: 'https://www.cnbc.com/2025/03/10/trump-says-transition-period-likely-for-economy-and-you-cant-watch-the-stock-market.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'DOW_Falls',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-10',
    title: 'Dow falls by almost 900 points in market rout after Trump says he won\’t rule out a recession',
    body: 'US stocks plunged, bitcoin stumbled and Wall Street\’s fear gauge hit its highest level this year as concerns about President Donald Trump\’s economic policy led to a widespread market selloff on Monday.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/10/investing/us-stocks-drop-after-trump-says-he-wont-rule-out-a-recession/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Trump_Downplays',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-10',
    title: 'Trump downplays business concerns about uncertainty from his tariffs and prospect of higher prices',
    body: 'Trump is dismissing business concerns over the uncertainty caused by his planned tariffs on a range of American trading partners and the prospect of higher prices, and isn’t ruling out the possibility of a recession this year',
    links: [
      {
        href: 'https://apnews.com/article/trump-tariffs-recession-economy-higher-prices-7f481abbaae500bf826445236b958e61',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Mineral_Deal_Plus',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-09',
    title: 'Trump wants to see more than just a minerals deal to restart aid and intel to Ukraine',
    body: 'U.S. and Ukrainian officials are set to meet in Saudi Arabia this week, with Trump focused on Zelenskyy’s willingness to make concessions in negotiations.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/trump-wants-see-just-minerals-deal-restart-aid-intel-ukraine-rcna195508',
        linkText: 'NBC',
      },

    ],
  },

  {
    id: 'Democrats_Misreading',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-09',
    title: 'The 10 Democrats who voted to censure Rep. Al Green are misreading the moment',
    body: 'Every single day we are witnessing an unprecedented assault on our democratic order by Donald Trump and Elon Musk.',
    links: [
      {
        href: 'https://www.msnbc.com/top-stories/latest/al-green-trump-resistance-democracy-rcna195314',
        linkText: 'MSNBC',
      },

    ],
  },
  
  {
    id: 'Democrats_Regret',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-09',
    title: 'Democrats Voice Regret on Scattered Responses to Trump’s Speech’',
    body: 'Progressive and moderate Democrats criticized a protest by Representative Al Green as a distraction, and the party leadership tried to refocus attention on economic issues.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/09/us/politics/trump-speech-congress-democrats.html',
        linkText: 'New York Times',
      },

    ],
  },

  {
    id: 'Poland_Spat_Starlink',
    categories: ['Project 2025', 'Global', 'WW3', 'DOGE'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-09',
    title: 'Rubio and Musk turn on Polish foreign minister in spat over Starlink use in Ukraine: \‘Be quiet small man\’',
    body: 'Secretary of State presses on with Trump administration\’s efforts to make European nations profess gratitude',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/us-politics/rubio-musk-poland-starlink-twitter-ukraine-b2711840.html',
        linkText: 'The Independent',
      },

      {
        href: 'https://www.france24.com/en/live-news/20250309-after-poland-spat-musk-vows-ukraine-can-keep-starlink',
        linkText: 'France 24',
      },
    ],
  },

  {
    id: 'BLM-2B_Removed',
    categories: ['Discrimination', 'Project 2025'],
    color: 'red',
    faicon: 'person',
    date: '2025-03-08',
    title: 'D.C.\'s Black Lives Matter mural will be erased. Look back at the iconic street painting',
    body: 'The decision to remove the enormous mural near the White House comes after a U.S. Rep. Andrew Clyde, R-Ga., introduced legislation earlier this week that gave D.C. an ultimatum: either paint over the slogan or risk losing federal funding. ',
    links: [
      {
        href: 'https://www.npr.org/2025/03/08/nx-s1-5321872/dc-black-lives-matter-street-mural-history',
        linkText: 'NPR',
      },
      
    ],
  },

  {
    id: 'Pushback_DOGE',
    categories: ['Project 2025', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-08',
    title: 'Random acts of protest: How federal workers are quietly pushing back on DOGE',
    body: 'In response to a host of wide-ranging orders from President Donald Trump, Elon Musk, and the White House\'s DOGE office, they\'re displaying pride flags, flaunting their pronouns, and sending snarky emails. As one worker said, it\'s all about "malicious compliance."',
    links: [
      {
        href: 'https://www.businessinsider.com/federal-workers-resist-trump-musk-doge-dei-emails-pronouns-2025-3',
        linkText: 'Business Insider ',
      },
    ],
  },

  {
    id: 'Autism_Vaccines',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-08',
    title: 'CDC to study vaccines and autism, despite several studies already finding no link',
    body: 'The Centers for Disease Control and Prevention (CDC) will study whether vaccines cause autism, despite numerous existing studies already showing there is no link.',
    links: [
      {
        href: 'https://abcnews.go.com/Health/cdc-study-vaccines-autism-despite-studies-finding-link/story?id=119584363',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'MRNA_Attacks',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-08',
    title: 'MRNA vaccines now face attacks from some in the GOP',
    body: 'Legislation aimed to ban or limit mRNA vaccines was introduced this year by GOP lawmakers in at least seven states. In some cases, the measures would hit doctors who give the injections with criminal penalties, fines, and possible revocation of their licenses.',
    links: [
      {
        href: 'https://abcnews.go.com/Health/mrna-vaccines-now-face-attacks-gop/story?id=119553285',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Not_Elon_Fault2',
    categories: ['Project 2025', 'WW3', 'Global', 'DOGE'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-08',
    title: 'Ukraine-Russia war latest: Zelensky says Kyiv \‘fully committed\’ to peace talks as 14 killed in missile strike',
    body: 'Donald Trump said Russia\’s strikes on Ukraine were “what anybody would do” hours before Moscow killed at least 14 Ukrainians and wounded 37 more in it\’s latest aerial assault',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/europe/ukraine-russia-war-trump-putin-zelensky-latest-updates-news-today-b2711396.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'Tariff_Threat2',
    categories: ['Project 2025', 'Global', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-07',
    title: 'Trump Threatens New Banking Sanctions on Russia Over Ukraine',
    body: 'President Donald Trump said he’s “strongly considering” fresh banking sanctions and tariffs on Russia over its continued attacks on Ukraine, ramping up pressure ahead of expected negotiations to end the conflict.',
    links: [
      {
        href: 'https://www.bloomberg.com/news/articles/2025-03-07/trump-threatens-new-banking-sanctions-on-russia-over-ukraine',
        linkText: 'Bloomberg ',
      },
    ],
  },

  {
    id: 'Disappearing_Words',
    categories: ['Project 2025', 'Orwell', 'Discrimination'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'These Words Are Disappearing in the New Trump Administration',
    body: 'As President Trump seeks to purge the federal government of “woke” initiatives, agencies have flagged hundreds of words to limit or avoid, according to a compilation of government documents.',
    links: [
      {
        href: 'https://www.nytimes.com/interactive/2025/03/07/us/trump-federal-agencies-websites-words-dei.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Tariff_Threat',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-07',
    title: 'Trump threatens new tariffs on Canada, including 250% tax on dairy',
    body: 'A day after offering Canada a one-month reprieve on punishing, virtually across-the-board 25% tariffs, President Donald Trump has threatened new tariffs as soon as Friday on Canadian lumber and dairy products.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/07/business/tariffs-trump-canada/index.html',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Bitcoin_Trump',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Trump signs order to establish strategic bitcoin reserve',
    body: 'A "Strategic Bitcoin Reserve" will be capitalized with bitcoin owned by the federal government that was seized as part of criminal or civil asset forfeiture proceedings',
    links: [
      {
        href: 'https://www.reuters.com/technology/trump-signs-order-establish-strategic-bitcoin-reserve-white-house-crypto-czar-2025-03-07/',
        linkText: 'Reuters',
      },

      {
        href: 'https://www.cnbc.com/2025/03/06/trump-signs-executive-order-for-us-strategic-bitcoin-reserve.html',
        linkText: 'CNBC',
      },

      {
        href: 'https://www.bbc.co.uk/news/articles/cqx0g1py5v0o',
        linkText: 'BBC',
      },

      {
        href: 'https://www.theatlantic.com/technology/archive/2025/03/trump-crypto-reserve-executive-order/681977/',
        linkText: 'The Atlantic',
      },
    ],
  },


  {
    id: 'Oregon_Tesla',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Violence at several Oregon Tesla Dealerships',
    body: 'Several people are lashing out against Teslas and their owners to send a message to Elon Musk and DOGE.',
    links: [
      {
        href: 'https://abcnews.go.com/US/wireStory/oregon-police-investigate-nighttime-gunshots-shattered-windows-tesla-119533344',
        linkText: 'ABC',
      },

      {
        href: 'https://www.oregonlive.com/crime/2025/03/tens-of-thousands-in-damage-in-overnight-shooting-at-tigard-tesla-dealership-police-say.html',
        linkText: 'Oregon Live',
      },

      {
        href: 'https://www.teslarati.com/tesla-salem-site-attacked-molotov-cocktails/',
        linkText: 'Teslarati',
      },
    ],
  },

  {
    id: 'Baltimore_Tesla',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Tesla contract with Baltimore paused after city \‘decided to go in a different direction\’',
    body: 'Last Summer, Tesla landed a $5 million contract with the City of Baltimore for a fleet of electric vehicles for the local government. However, Mayor Brandon Scott decided to pause that investment in September after the City “decided to go in a different direction.”',
    links: [
      {
        href: 'https://www.teslarati.com/tesla-contract-baltimore-paused-after-city-decided-to-go-in-a-different-direction/',
        linkText: 'Teslarati',
      },
    ],
  },

  {
    id: '5-Things_Risk',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Musk\’s \‘5 things\’ email mandate a \‘nightmare\’ risk, cyber officials say',
    body: 'TThe Trump administration\’s requirement that federal workers email summaries of their weekly accomplishments poses significant risks to the national security apparatus.',
    links: [
      {
        href: 'https://www.washingtonpost.com/national-security/2025/03/07/doge-emails-cyber-command-intel/',
        linkText: 'Washington Post',
      },
    ],
  },

  {
    id: 'Tariff_History',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-07',
    title: 'The short history of Trump\'s tariff chaos — and more that happened this week',
    body: 'After drops in the stock market, outcry from the Big Three automakers in the U.S. and a conversation with Mexico\'s president, President Trump again reversed himself and is delaying tariffs against Mexico and Canada.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/07/nx-s1-5320159/trump-week-tariffs-mexico-canada-doge',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'NSA_TSA',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Homeland Security ends collective bargaining agreement with TSA staffers',
    body: 'The department, in a statement announcing the termination, criticized the union whose staffers are responsible for keeping weapons off of airplanes and protecting air travel.',
    links: [
      {
        href: 'https://abcnews.go.com/US/wireStory/homeland-security-ends-collective-bargaining-agreement-tsa-staffers-119554443',
        linkText: 'ABC',
      },
    ],
  },

  {
    id: 'Enola-Gay',
    categories: ['Fascism', 'LGBTQ', 'Discrimination'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-07',
    title: 'Military to Remove \'Enola Gay\' Photos for Violating DEI Rules',
    body: 'Defense Secretary Pete Hegseth said: "DEI is dead. We are returning the focus of the military to merit and mission readiness."',
    links: [
      {
        href: 'https://www.newsweek.com/military-remove-enola-gay-photos-dei-rules-2041029',
        linkText: 'Newsweek',
      },
    ],
  },


  {
    id: 'Not_Elon_Fault',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'Elon Musk tells Republican lawmakers he\’s not to blame for federal firings',
    body: 'It\’s a remarkable shift of emphasis away from the chainsaw-wielding tech entrepreneur whose vast power has made him an admired, revered and deeply feared figure in the second Trump administration.',
    links: [
      {
        href: 'https://apnews.com/article/musk-doge-trump-blame-federal-workers-republicans-2945026366f42b0879087f2e7d4b9d71',
        linkText: 'Associated Press',
      },
    ],
  },



  {
    id: 'House_Censure4',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-07',
    title: '‘We have rules\': Pa. Democrat Houlahan explains why she voted to censure Al Green',
    body: 'The March 6, 2025, vote was 224 yeas, 198 nays, 2 members present and eight not voting. Only nine other Democrats besides Houlahan joined the Republicans in backing the censure.',
    links: [
      {
        href: 'https://www.nbcphiladelphia.com/news/politics/houlahan-censure-al-green-trump-speech-congress/4127694/',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Litigants_Responsible',
    categories: ['Project 2025', 'Fascism', 'Courts'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-07',
    title: 'White House looks to hold litigants financially responsible for filing lawsuits against the government',
    body: 'Trump\'s new memo tells agencies to use the Federal Rule of Civil Procedure 65(c) to ask the federal courts to hold litigants accountable for their lawsuits.',
    links: [
      {
        href: 'https://federalnewsnetwork.com/federal-newscast/2025/03/white-house-looks-to-hold-litigants-financially-responsible-for-filing-lawsuits-against-the-government/',
        linkText: 'Federal News Network',
      },
    ],
  },

  {
    id: 'Poland_Military_Training',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-07',
    title: 'Poland to require all adult men to take military training and consider nuclear weapons as Trump shifts on Russia',
    body: 'Poland “must pursue the most advanced capabilities, including nuclear and modern unconventional weapons,” Prime Minister Donald Tusk said.',
    links: [
      {
        href: 'https://www.nbcnews.com/news/world/poland-full-military-training-nuclear-weapons-russia-trump-rcna195357',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Poland_Nuclear',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-07',
    title: 'Poland seeks access to nuclear arms and looks to build half-million-man army',
    body: 'Already a major spender within NATO, Warsaw has massive military plans as fears grow about the reliability of the U.S. as an ally against Russia.',
    links: [
      {
        href: 'https://www.politico.eu/article/donald-tusk-plan-train-poland-men-military-service-russia/',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'House_Censure3',
    categories: ['Fascism', 'Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-07',
    title: '“Impeachment Is a Remedy for a Runaway President”: Rep. Al Green on Why He Disrupted Trump’s Address',
    body: '“We now live in a government that is of the plutocrats, by the plutocrats, for the plutocrats,” Congressmember Green tells Democracy Now! “We have to fight to protect those who cannot protect themselves.”',
    links: [
      {
        href: 'https://www.democracynow.org/2025/3/7/impeachment_is_a_rremedy_for_a',
        linkText: 'Democracy Now',
      },
    ],
  },

  {
    id: 'House_Censure2',
    categories: ['Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-06',
    title: 'Screaming match breaks out in House after vote to censure Democrat Al Green',
    body: 'Democrats began singing from the House well "We Shall Overcome."',
    links: [
      {
        href: 'https://abcnews.go.com/Politics/republicans-move-censure-democrat-al-green-after-disrupted/story?id=119482259',
        linkText: 'ABC',
      },

      {
        href: 'https://www.bbc.co.uk/news/videos/c5y03q5wz4go',
        linkText: 'BBC',
      },

    ],
  },

  {
    id: 'House_Censure',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-06',
    title: 'The House censures Democratic Rep. Al Green for disrupting Trump’s joint address to Congress',
    body: 'The resolution against Green was approved in a mostly party-line vote of 224-198. Ten Democrats voted for it; no Republicans voted against it.',
    links: [
      {
        href: 'https://apnews.com/article/house-censure-green-trump-joint-address-61d82026983c99a269209bbeb32b45a5',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Poland_Crisis',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-06',
    title: 'Polish official warns of international crisis if US cuts Ukraine from Starlink',
    body: 'Poland helps Ukraine maintain its Starlink access and has provided half of all its terminals, totaling over 20,000 terminals since 2022. Starlink satellite internet access plays a crucial role in Ukraine\'s civilian and military communications infrastructure.',
    links: [
      {
        href: 'https://kyivindependent.com/polish-official-warns-of-international-crisis-between-poland-us-if-ukraine-cut-from-starlink/',
        linkText: 'Kyiv Independent',
      },
    ],
  },

  {
    id: 'AI_Revoke_Visas',
    categories: ['Project 2025', 'Immigration', 'Discrimination'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-06',
    title: 'State Dept. to use AI to revoke visas of foreign students who appear "pro-Hamas"',
    body: 'Secretary of State Marco Rubio is launching an AI-fueled "Catch and Revoke" effort to cancel the visas of foreign nationals who appear to support Hamas or other designated terror groups, senior State Department officials tell Axios.',
    links: [
      {
        href: 'https://www.axios.com/2025/03/06/state-department-ai-revoke-foreign-student-visas-hamas',
        linkText: 'Axios ',
      },
    ],
  },

  {
    id: 'Bomb_Zelensky_Town',
    categories: ['WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-06',
    title: 'Missile Strikes Hotel in Zelensky\’s Hometown in Ukraine',
    body: 'At least four people were killed in a Russian attack, Ukraine said, amid concerns about air defenses after the U.S. said it was suspending military and intelligence aid.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/03/06/world/europe/ukraine-russia-strikes-zelensky.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Trump_Worse_Russia-Ukraine',
    categories: ['WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-06',
    title: 'Will Trump\'s pause on U.S. intel and weapons for Ukraine bring Zelenskyy and Putin closer to peace, or further away?',
    body: 'The CIA chief confirmed Wednesday that the Trump administration had paused not only the flow of military hardware and financial support to Ukraine, but also vital intelligence gathering that has helped Kyiv anticipate and block incoming missile and drone attacks and effectively target Russia\'s invading forces.',
    links: [
      {
        href: 'https://www.cbsnews.com/news/ukraine-russia-war-trump-us-intel-weapons-pause-zelenskyy-putin-peace/',
        linkText: 'CBS',
      },
    ],
  },

  {
    id: 'Democrats_NoPlan',
    categories: ['Project 2025', 'Fascism', 'Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-06',
    title: 'Insider poll: The Democratic Party has \‘lost its way\’',
    body: 'Voters still have a sour view of Democrats six weeks after President Donald Trump and Republicans swept into Washington with control of all branches of the federal government, according to a new poll.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/06/poll-democrats-trump-disarray-00215291',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Stop_Share_Air-Quality',
    categories: ['Project 2025', 'Climate'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-03-06',
    title: 'Scientists raise concerns as the US stops sharing air quality data from embassies worldwide',
    body: 'The U.S. government will stop sharing air quality data gathered from its embassies and consulates, worrying local scientists and experts who say the effort was vital to monitor global air quality and improve public health.',
    links: [
      {
        href: 'https://apnews.com/article/us-air-quality-monitors-8270927bbd0f166238243ac9d14bce03',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'NIH_Trans',
    categories: ['Project 2025', 'LGBTQ'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-03-06',
    title: 'New NIH grant terminations target transgender studies—even in mice',
    body: 'Science has identified more than two dozen halted grants amid Trump\’s transgender crackdown, right as NIH suspends its own researchers who worked on topic',
    links: [
      {
        href: 'https://www.science.org/content/article/new-nih-grant-terminations-target-transgender-studies-even-mice',
        linkText: 'Science Insider ',
      },
    ],
  },

  {
    id: 'Layoff_Spike',
    categories: ['Project 2025', 'DOGE', 'Economy' ],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-06',
    title: 'US employers cut more jobs last month than any February since 2009',
    body: 'The Trump administration\’s massive federal cuts and swelling feelings of economic uncertainty helped fuel a recession-level spike in layoff plans last month',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/06/economy/us-jobs-report-february-preview/',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Cut_Medicaid',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-06',
    title: 'GOP budget goals impossible without Medicare and Medicaid cuts, budget office says',
    body: 'Republicans are expected to fall short of their goal to slash the budget by $1.5tn despite Donald Trump\’s assurances.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/06/gop-budget-medicare-medicaid-cuts',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Dept_Ed_Close',
    categories: ['Project 2025', 'Education'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-03-06',
    title: 'Trump wants to dismantle the Education Department. Here\’s what it does',
    body: 'An executive order to shutter the department could come as soon as this week.',
    links: [
      {
        href: 'https://apnews.com/article/education-department-trump-ab509ad5778497dfbd6d53b9eef692b5',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Trump_Caves',
    categories: ['Global', 'Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-06',
    title: 'Trump grants month-long tariff reprieve to Mexico',
    body: 'Mexico will be granted a month-long reprieve on tariffs on goods that fall under an existing free-trade agreement with the United States',
    links: [
      {
        href: 'https://www.washingtonpost.com/world/2025/03/06/trump-mexico-tariffs/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'Canada_Retalitory',
    categories: ['Global', 'Project 2025', 'Resist', 'Economy', 'Tariff War'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-06',
    title: 'Trudeau not willing to lift Canada\’s retaliatory tariffs if Trump leaves some tariffs on Canada',
    body: '“Zero tariffs or nothing. This attack was not started by our country. This was started by President Trump. He decided to declare an economic war against our country and our province, and we\’re going to hold strong.” ',
    links: [
      {
        href: 'https://apnews.com/article/trudeau-trump-canada-tariffs-921138ff86144357b36610475d37801e',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Fragmented_Resistence',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-05',
    title: 'The 2025 \'resistance\' against Trump is a fragmented phenomenon',
    body: 'Just about every day, protests are taking place against the brutality of the Trump administration\'s executive orders, a movement born on the fringes of the Democratic Party, or even at odds with its establishment.',
    links: [
      {
        href: 'https://www.lemonde.fr/en/opinion/article/2025/03/05/the-2025-resistance-against-trump-is-a-fragmented-phenomenon_6738839_23.html',
        linkText: 'Le Monde',
      },
    ],
  },

  {
    id: 'Sabotage_Manual',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-05',
    title: 'Trump resistance? A 1940s US sabotage manual goes viral',
    body: 'Tens of thousands of people have downloaded the Simple Sabotage Field Manual,” a guide written by a US intelligence agent in 1944 to help the allied resistance during World War II. Its newfound popularity comes amid an emerging grassroots opposition to waves of executive orders from the new president.',
    links: [
      {
        href: 'https://www.france24.com/en/americas/20250205-trump-resistance-a-1940s-us-sabotage-manual-goes-viral',
        linkText: 'France 24',
      },
    ],
  },

  {
    id: 'Tesla_Arson',
    categories: ['FAFO', 'Project 2025', 'DOGE'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-05',
    title: 'Tesla sites hit by arson amid DOGE cuts, Elon Musk backlash',
    body: 'The attacks come as Elon Musk’s Department of Government Efficiency continues to slash jobs of thousands of federal workers',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/crime/tesla-cars-power-stations-elon-musk-b2709001.html',
        linkText: 'The Independent',
      },
    ],
  },

  {
    id: 'China_War',
    categories: ['Global', 'Project 2025', 'WW3', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: 'China says it is ready for \'any type of war\' with US',
    body: '"If war is what the US wants, be it a tariff war, a trade war or any other type of war, we\'re ready to fight till the end," China\'s embassy said',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c4gmd3g2nzqo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Abortion_Ban_Over',
    categories: ['Health', 'Project 2025', 'Resist', 'Women'],
    color: 'green',
    faicon: 'virus',
    date: '2025-03-05',
    title: 'Arizona’s 15-week abortion ban is now ‘permanently and forever’ struck down',
    body: 'Doctors and women now have the final say about when an abortion should be performed, after a Maricopa County Superior Court judge struck down the state’s 15-week ban following last year’s vote to enshrine abortion rights in the Arizona Constitution. ',
    links: [
      {
        href: 'https://azmirror.com/2025/03/05/arizonas-15-week-abortion-ban-is-now-permanently-and-forever-struck-down/',
        linkText: 'AZ Mirror',
      },
    ],
  },


  {
    id: 'Mexico_Retalitory',
    categories: ['Global', 'Project 2025', 'Resist', 'Economy', 'Tariff War'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-05',
    title: 'Mexico says it will impose retaliatory tariffs on US with details coming Sunday',
    body: 'Mexico will announce the targeted products and other measures Sunday at an event in Mexico City\’s central plaza, a delay that suggests Mexico hopes to de-escalate the trade war set off by U.S. President Donald Trump.',
    links: [
      {
        href: 'https://apnews.com/article/trade-war-mexico-trump-9cefdded035a0b35e700a7ba0bfc34b4',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Tariff_Pause',
    categories: ['Global', 'Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: 'White House Grants One-Month Tariff Exemption for Automakers',
    body: 'The reprieve applies to cars from Canada and Mexico that comply with free-trade deal; Trump is open to more exemptions',
    links: [
      {
        href: 'https://www.wsj.com/economy/trade/white-house-grants-one-month-tariff-exemption-for-automakers-d89c240a',
        linkText: 'The Wall Street Journal',
      },

      {
        href: 'https://www.nbcnews.com/business/economy/tariffs-limbo-mixed-messages-meet-wary-markets-rcna194856',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'Insurrection_Act?',
    categories: ['Civil Liberties', 'Fascism', 'Immigration'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-05',
    title: 'Is Trump preparing to invoke the Insurrection Act? Signs are pointing that way',
    body: 'A joint Department of Defense and Homeland Security report will soon recommend whether or not to invoke the Insurrection Act over illegal migration',
    links: [
      {
        href: 'https://www.sfchronicle.com/opinion/openforum/article/insurrection-act-president-trump-20201819.php',
        linkText: 'San Francisco Chronicle (Opinion)',
      },
    ],
  },

  {
    id: 'Air_Quality',
    categories: ['Global', 'Climate', 'Project 2025'],
    color: 'red',
    faicon: 'radiation',
    date: '2025-03-05',
    title: 'State Department halts global monitoring of air pollution',
    body: 'The move follows other actions by the Trump administration to curtail environmental monitoring and climate-related science.',
    links: [
      {
        href: 'https://www.washingtonpost.com/climate-environment/2025/03/04/state-department-air-pollution-embassies/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'Sierra-Club',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-05',
    title: 'Sierra Club Files Joint Lawsuit Against DOGE Over Unjustified Mass Firings of Parks Staff',
    body: 'DOGE\’s actions harm the American public\’s ability to safely enjoy our public lands, which includes the Sierra Club\’s millions of members and supporters.',
    links: [
      {
        href: 'https://www.sierraclub.org/press-releases/2025/03/sierra-club-files-joint-lawsuit-against-doge-over-unjustified-mass-firings',
        linkText: 'Sierra Club',
      },
    ],
  },

  {
    id: 'Hamas-Hostage-Threat2',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: 'Trump issues \'last warning\' to Hamas as US confirms direct hostage talks',
    body: '"I am sending Israel everything it needs to finish the job, not a single Hamas member will be safe if you don\'t do as I say," Trump said in a lengthy post on his Truth Social platform.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c0mwln4p87do',
        linkText: 'BBC',
      },
    ],
  },


  {
    id: 'Democrats_Tiddlywinks',
    categories: ['Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-05',
    title: 'Democrats are acting sedate and silent during Trump\’s worst excesses',
    body: 'Trump is getting comfortable in power. And Democrats are nowhere to be seen',
    links: [
      {
        href: 'https://www.theguardian.com/commentisfree/2025/mar/05/democrats-trump-speech-congress',
        linkText: 'The Guardian (Opinion)',
      },
    ],
  },


  {
    id: 'Press_Mouthpiece',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-05',
    title: 'Trump is turning the media into a mouthpiece of the regime',
    body: 'As the White House handpicks members of the press pool, questions for the president amount to fluffy valentines',
    links: [
      {
        href: 'https://www.theguardian.com/commentisfree/2025/mar/05/trump-press-media-zelenskyy',
        linkText: 'The Guardian (Opinion)',
      },
    ],
  },

  {
    id: 'US_UK_Shift',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: '\‘Seismic\’ shift in UK-US relations is not a blip, warns ex-ambassador',
    body: 'Something seismic has changed in the US-British relationship that will require the UK to look elsewhere for allies and accept that deals such as cooperation over the British nuclear deterrent are now in question.',
    links: [
      {
        href: 'https://www.theguardian.com/politics/2025/mar/05/seismic-shift-in-uk-us-relations-is-not-a-blip-warns-ex-ambassador',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Tariff_War',
    categories: ['Project 2025', 'Global', 'WW3', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: 'Trump\’s trade war draws swift retaliation with new tariffs from Mexico, Canada and China',
    body: 'Trump launched a trade war Tuesday against America’s three biggest trading partners, drawing immediate retaliation from Mexico, Canada and China and sending financial markets into a tailspin as the U.S. faced the threat of rekindled inflation and paralyzing uncertainty for business.',
    links: [
      {
        href: 'https://apnews.com/article/trump-tariffs-canada-mexico-china-643086a6dc7ff716d876b3c83e3255b0',
        linkText: 'Associated Press',
      },
    ],
  },


  {
    id: 'SCOTUS_Rejects_Bid',
    categories: ['Resist', 'Global', 'Courts'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-03-05',
    title: 'US top court rejects Trump bid to withhold $2bn in foreign aid',
    body: 'SCOTUS has rejected a request by the Trump administration to withhold nearly $2bn (£1.6bn) in payments to foreign aid organisations for work they have already performed for the government.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c5y071kxwn8o',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Pause_Intel_Ukraine',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-05',
    title: 'US pauses intelligence sharing with Ukraine',
    body: 'The future of US support for Ukraine is being pushed further into doubt, with National Security Adviser Mike Waltz confirming on Wednesday that the US has paused intelligence sharing with Ukraine.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cwygxvvrd8do',
        linkText: 'BBC',
      },

      {
        href: 'https://www.theguardian.com/world/2025/mar/05/us-stops-sharing-intelligence-on-russia-with-ukraine',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Reinstate_USDA',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-05',
    title: 'Trump ordered to reinstate thousands of agriculture department employees',
    body: 'An independent federal board has ordered the US Department of Agriculture to temporarily reinstate nearly 6,000 employees who were fired as part of Donald Trump\’s efforts to reduce the size of the federal workforce.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/05/trump-fired-agriculture-workers',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Takeaways_Congress_Speech',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-05',
    title: 'Six takeaways from Trump\'s big speech',
    body: 'US President Donald Trump declared "the American Dream is unstoppable" as he addressed a raucous joint session of Congress for the first time since he returned to power.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c981wj6n9l2o',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Highlights_Congress_Speech',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-05',
    title: 'Highlights from Trump\'s speech to a 2025 joint session of Congress',
    body: 'Speaking for an hour and 40 minutes, the president highlighted the executive orders he has issued and laid out his vision for how Congress should begin implementing his sweeping legislative agenda.',
    links: [
      {
        href: 'https://www.cbsnews.com/live-updates/trump-2025-speech-joint-address-congress/',
        linkText: 'CBS',
      },
    ],
  },

  {
    id: 'Democrats_WalkOut',
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-05',
    title: 'The Democrats Who Walked Out in Middle of Trump\’s Speech to Congress',
    body: 'Several Democratic members of Congress showed off T-shirts emblazoned with messages as they walked out during Donald Trump\’s speech.',
    links: [
      {
        href: 'https://newrepublic.com/post/192332/democrats-walk-out-trump-speech-congress-frost-crockett',
        linkText: 'The New Republic',
      },

      {
        href: 'https://wwd.com/fashion-news/fashion-scoops/congress-wearing-pink-clothing-trump-speech-protest-1237022379/',
        linkText: 'WWD',
      },

      {
        href: 'https://www.theguardian.com/us-news/2025/mar/05/trump-turns-congress-speech-into-a-sordid-campaign-rally-igniting-a-democrat-fightback',
        linkText: 'The Guardian',
      },
      
    ],
  },

  {
    id: 'NPR_FactCheck',
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-03-04',
    title: 'Read NPR\'s annotated fact check of President Trump\'s address to Congress',
    body: 'Reporters from across NPR\'s newsroom fact-checked the address and offered context as the speech unfolded.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/04/g-s1-50488/trump-congress-joint-address-fact-check',
        linkText: 'NPR',
      },
    ],
  },


  {
    id: 'Al_Green_Removed',
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-04',
    title: 'Starting with Rep. Al Green, Democrats protest against Trump\'s speech to Congress',
    body: 'Green stood up and began yelling at Trump after the president referenced his 2024 election win and claimed he had been given a mandate from the American people.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/04/nx-s1-5318102/trump-joint-session-al-green-protest',
        linkText: 'NPR',
      },

      {
        href: ' https://www.bbc.co.uk/news/videos/c0q184n7qnjo',
        linkText: 'BBC',
      },
    ],
  },


  {
    id: 'Trump_Speech',
    categories: ['Project 2025', 'Fascism', 'Tariff War'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-04',
    title: 'Trump vows to press ahead on reshaping America in speech to Congress as Democrats register dissent',
    body: 'Trump\’s prime-time speech Tuesday was the latest marker in his takeover of the nation\’s capital.',
    links: [
      {
        href: 'https://apnews.com/article/trump-speech-congress-immigration-tariffs-guests-93f6107ede260854f90c65c4bde60de8',
        linkText: 'Associated Press',
      },

      {
        href: 'https://edition.cnn.com/politics/live-news/trump-congress-address-03-04-25/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.theguardian.com/us-news/2025/mar/05/trump-turns-congress-speech-into-a-sordid-campaign-rally-igniting-a-democrat-fightback',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Ukraine_Freeze_Aid',
    categories: ['Project 2025', 'WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'Ukraine’s allies had no notice of Trump freezing military aid, Poland says',
    body: 'Rattled European politicians reaffirm backing for Kyiv and call for \‘quantum leap\’ in strengthening EU\’s defence',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/mar/04/ukraine-allies-had-no-notice-of-trump-freezing-military-aid-poland-says',
        linkText: 'The Guardian',
      },
    ],
  },


{
    id: 'USA_NATO',
    categories: ['Project 2025', 'WW3', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'U.S. NATO Membership In Question As Power Players Weigh Options',
    body: 'The prospect of the U.S. leaving the North Atlantic Treaty Organization (NATO) is once again being floated by some of the nation\’s most powerful individuals.',
    links: [
      {
        href: 'https://dallasexpress.com/national/u-s-senator-musk-discuss-american-nato-withdrawal/',
        linkText: 'The Dallas Express',
      },
    ],
  },

  {
    id: 'Red_States_Hit',
    categories: ['Project 2025', 'FAFO', 'DOGE'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-04',
    title: 'Federal layoffs hit the deep-red, rural US west: \‘Our public lands are under threat\’',
    body: 'As layoffs under Trump bleed out, workers in the Mountain West fear devastating consequences for their communities',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/mar/04/trump-doge-federal-layoffs-national-parks',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'Tariffs_Go',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'Trump says 25% tariffs on Mexican and Canadian imports will start Tuesday, with \‘no room\’ for delay',
    body: 'Sparks renewed fears of a North American trade war that already showed signs of pushing up inflation and hindering growth.',
    links: [
      {
        href: 'https://apnews.com/article/trump-tariffs-mexico-canada-b19e004dddb579c373b247037e04424b',
        linkText: 'Associated Press',
      },
    ],
  },

   {
    id: 'French_Tesla',
    categories: ['Resist', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-04',
    title: 'Teslas set alight outside French dealership in arson attack',
    body: 'Blaze is latest in string of anti-Tesla protests, with German activists projecting image of Musk alongside ‘heil’ and ‘boycott’ on factory',
    links: [
      {
        href: 'https://www.telegraph.co.uk/world-news/2025/03/04/teslas-set-alight-outside-french-dealership-arson-attack/',
        linkText: 'The Telegraph',
      },
    ],
  },

  {
    id: 'Tariffs_FAFO',
    categories: ['FAFO', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'poo',
    date: '2025-03-04',
    title: 'Here\'s how Trump\'s tariffs could cost you and your wallet',
    body: 'Every day, many people in the U.S. eat fruit grown in Mexico, use phones made in China and live in homes built from lumber from Canada.',
    links: [
      {
        href: 'https://www.npr.org/2025/02/05/nx-s1-5284991/trump-tariffs-higher-prices-inflation-mexico-canada-china',
        linkText: 'NPR',
      },
    ],
  },

  {
    id: 'Fentanyl_Pretext',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'Canada and China say the fentanyl crisis is only a \'pretext\' for Trump\'s new tariffs',
    body: 'Both countries called the link between fentanyl smuggling and trade barriers unjustified and announced plans to retaliate.',
    links: [
      {
        href: 'https://www.npr.org/2025/03/04/nx-s1-5317494/tariffs-fentanyl-canada-mexico-trump',
        linkText: 'NPR',
      },
    ],
  },


  {
    id: 'Anger_at_Vance',
    categories: ['Global', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'Anger over Vance \'random country\' peacekeeping remark',
    body: 'The US vice-president has sparked a row with his comments about a potential peacekeeping force in Ukraine.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/czx7w7q7qzro',
        linkText: 'BBC',
      },
    ],
  },


  {
    id: 'Suspend_Aid_Ukraine',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-04',
    title: 'US suspends all military aid to Ukraine in wake of Trump-Zelenskyy row',
    body: 'The Trump administration has suspended delivery of all US military aid to Ukraine, blocking billions in crucial shipments as the White House piles pressure on Ukraine to sue for peace with Vladimir Putin.',
    links: [
      {
        href: 'https://www.theguardian.com/world/2025/mar/04/us-military-aid-ukraine-pause-trump-zelenskyy-updates',
        linkText: 'The Guardian',
      },
      {
        href: 'https://apnews.com/article/trump-zelenskyy-russia-ukraine-a15a459c9a3a393d040478ebbe250a9e',
        linkText: 'Associated Press',
      },

    ],
  },

  {
    id: 'Iowa_Ban',
    categories: ['Health', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
    date: '2025-03-03',
    title: 'Bill banning mRNA vaccines in Iowa passes subcommittee',
    body: '"A bill banning gene-based vaccines, like some forms of the COVID-19 vaccine, received approval from a Senate subcommittee Monday.',
    links: [
      {
        href: 'https://iowacapitaldispatch.com/2025/03/03/bill-banning-mrna-vaccines-in-iowa-passes-subcommittee/',
        linkText: 'Iowa Capital Dispatch',
      },
    ],
  },

  {
    id: 'Elon_Sux',
    categories: ['Resist', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-03',
    title: 'Elvira, Portland\’s \‘Mistress of the Dark,\’ sends Tesla down the \‘Highway to Hell\’ in viral video',
    body: '"I don’t want to drive something around that represents a person who is directly trying to take away our freedoms."',
    links: [
      {
        href: 'https://www.oregonlive.com/politics/2025/03/elvira-portlands-mistress-of-the-dark-sends-tesla-down-the-highway-to-hell-in-viral-video.html',
        linkText: 'Oregon Live',
      },
    ],
  },

  {
    id: 'Trump_Power_Grab',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-03-03',
    title: 'Trump\’s speech to Congress comes as he wields vast power almost daring lawmakers, courts to stop him',
    body: 'Since his reelection, Trump has blazed across the federal government, dismantling not just norms and traditions but the very government itself.',
    links: [
      {
        href: 'https://apnews.com/article/trump-speech-congress-musk-zelenskyy-3b7c80f39606911b9f12e732131fe7d1',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'EU_Ukraine',
    categories: ['Global', 'WW3', 'Resist'],
    color: 'green',
    faicon: 'globe',
    date: '2025-03-03',
    title: 'Europeans embrace Zelensky after he was vilified by Trump',
    body: 'Europe backs Zelensky while White House increases pressure. The contrast highlights the most damaging split in the Western alliance at least since the Berlin Wall fell and bolstered a sense that the “free world” has been pushed to the brink of fracturing.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/03/03/politics/zelensky-trump-europe-summit-starmer/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://www.bbc.co.uk/news/articles/c62k9rr2wgvo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Pentagon_Guts',
    categories: ['Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-02',
    title: 'Pentagon guts national security program that harnessed social science',
    body: 'Dozens of U.S. academics lose grants from Minerva program for studies related to terrorism, drug trafficking, and other threats.',
    links: [
      {
        href: 'https://www.science.org/content/article/pentagon-guts-national-security-program-harnessed-social-science',
        linkText: 'Science',
      },
    ],
  },

  {
    id: 'DOGE_Login',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-03-02',
    title: 'DOGE Deletes Agency Behind Login.gov, IRS Direct File, Other Tech Projects',
    body: 'The General Services Administration (GSA) has axed a technology unit that developed key public-facing IT services like Login.gov, the central login system for key government services like Medicare, Medicaid, and Social Security.',
    links: [
      {
        href: 'https://uk.pcmag.com/news/156910/doge-deletes-agency-behind-logingov-irs-direct-file-other-tech-projects',
        linkText: 'PC Mag',
      },
    ],
  },

  {
    id: 'Vance_Flees',
    categories: ['Resist', 'FAFO'],
    color: 'green',
    faicon: 'poo',
    date: '2025-03-01',
    title: 'Vance flees to undisclosed location after protesters disrupt vermont ski trip',
    body: 'Vice-President JD Vance was forced to flee to an undisclosed location after he was greeted by hundreds of protesters in Vermont on Saturday.',
    links: [
      {
        href: 'https://themindshield.com/vance-flees-to-undisclosed-location-after-protesters-disrupt-vermont-ski-trip/',
        linkText: 'The Mind Shield',
      },
    ],
  },

  {
    id: 'Russia_Recruits',
    categories: ['Project 2025', 'Global'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-01',
    title: 'US intel shows Russia and China are attempting to recruit disgruntled federal employees, sources say',
    body: 'Foreign adversaries including Russia and China have recently directed their intelligence services to ramp up recruiting of US federal employees working in national security, targeting those who have been fired or feel they could be soon.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/28/politics/us-intel-russia-china-attempt-recruit-disgruntled-federal-employees/',
        linkText: 'CNN',
      },
    ],
  },

  {
    id: 'Border_Troops',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-03-01',
    title: 'Pentagon to send 3,000 more troops to the US-Mexico border',
    body: 'Roughly 3,000 more active-duty troops will deploy to the southern border, expanding a major military operation to curb illegal immigration — a central priority of the Trump administration.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/03/01/southern-border-us-military-deployment-00002750',
        linkText: 'Politico ',
      },
    ],
  },

  {
    id: 'Vance_Bully',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-01',
    title: 'Vance took the lead attacking Zelensky. Why?',
    body: 'JD Vance\'s remarkable dressing down of Volodymyr Zelensky in the Oval Office on Friday showed the US vice-president unafraid to take centre stage as an attack dog.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cewkg71d8rlo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Pelosi_Tiddlywinks',
    categories: ['Project 2025', 'Tiddlywinks'],
    color: 'red',
    faicon: 'democrat',
    date: '2025-03-01',
    title: '\‘Let him stew in his own juice,\’ Pelosi advises ahead of Trump’s speech',
    body: 'Democrats have struggled in these opening weeks of Trump’s term to unify around a rebuttal to his controversial actions.',
    links: [
      {
        href: 'https://www.washingtonpost.com/politics/2025/03/01/nancy-pelosi-trump-democrats-congress/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'Town_Hall_Pushback2',
    categories: ['Project 2025', 'Tiddlywinks', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-03-01',
    title: 'Democratic activists fueled anti-Trump protests at GOP town halls but also rage at their own party',
    body: 'Democratic activists have turned their anger toward elected officials in their own party, who they believe are not fighting the Republican president and billionaire adviser Elon Musk with the urgency, aggression or creativity that the moment deserves.',
    links: [
      {
        href: 'https://apnews.com/article/democrats-trump-grassroots-constitutional-crisis-bd53cc6ec73f654816c5f4c7bce5fd88',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'BBC_Coverage',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-03-01',
    title: 'BBC\'s Live Coverage',
    body: 'Thread of stories in the wake of Trump and Vance\'s verbal attack on Zelenskyy. It shows how this has affected world politics, especially the EU, and could lead to the breakdown of long-standing allies',
    links: [

      {
        href: 'https://www.bbc.co.uk/news/live/c981p3dxnent',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'New_World_Leader',
    categories: ['Resist', 'Global', 'WW3'],
    color: 'green',
    faicon: 'globe',
    date: '2025-02-28',
    title: '\‘Free world needs a new leader\’: Europe defends Zelenskyy after Trump attack',
    body: 'France, Germany and Poland all make prompt declarations of support as Europe fears Trump\’s alignment with Putin.',
    links: [
      {
        href: 'https://www.politico.eu/article/volodymyr-zelenskyy-donald-trump-jd-vance-oval-office-white-house-us-ukraine-war-russia/',
        linkText: 'Politico',
      },

      {
        href: 'https://www.bbc.co.uk/news/articles/cn527pz54neo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Who_DOGE',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-28',
    title: 'The People Carrying Out Musk\’s Plans at DOGE',
    body: 'The New York Times identified 50 people within the so-called Department of Government Efficiency, a group formed by Elon Musk that in a short few weeks has radically upended federal agencies. Few members have formal Washington experience. Many are software engineers. All seem to have a clear mandate: Shrink and disrupt the federal government.',
    links: [
      {
        href: 'https://www.New York Timess.com/interactive/2025/02/27/us/politics/doge-staff-list.html',
        linkText: 'New York Times',
      },

      {
        href: 'https://bsky.app/profile/esqueer.net/post/3ljpyyjzfis2l',
        linkText: 'DOGE Employee email addressed released on BlueSky (6 March)',
      },

    ],
  },

  {
    id: 'Temper_Tantrum',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-28',
    title: 'Trump & Vance Berate Zelenskyy in the Oval Office',
    body: 'Video of this terrifying, unprecedented incident',
    links: [
      {
        href: 'https://www.youtube.com/watch?v=v_kTNIYsFnQ',
        linkText: 'YouTube',
      },

    ],
  },

  {
    id: 'Demote',
    categories: ['Project 2025', 'Courts'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-28',
    title: 'Trump\'s top prosecutor in Washington demotes senior leaders',
    body: 'U.S. Attorney Ed Martin wiped out office leadership, including prosecutors of top Trump advisers and allies, Jan. 6 seditious conspiracy and public corruption.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trumps-top-federal-prosecutor-washington-dc-demotes-senior-leaders-sources-say-2025-02-28/',
        linkText: 'Reuters ',
      },

      {
        href: 'https://www.washingtonpost.com/dc-md-va/2025/02/28/7-dc-prosecutors-demoted-trump/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'Power_Grab',
    categories: ['Fascism', 'Courts'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-27',
    title: 'Trump\’s biggest power grab just reached the Supreme Court',
    body: 'Trump’s lawyers just revealed their plan to place him in charge of federal spending.',
    links: [
      {
        href: 'https://www.vox.com/scotus/401838/supreme-court-usaid-impoundment-trump-aids-vaccine',
        linkText: 'VOX',
      },
    ],
  },

  {
    id: 'Revolution_Podcast',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-27',
    title: 'The Trump revolution will be podcasted',
    body: 'The future of American politics is being hashed out on podcasts.',
    links: [
      {
        href: 'https://www.vox.com/politics/396998/podcast-spotify-youtube-trump-rogan-kelce-politics-news',
        linkText: 'VOX',
      },
    ],
  }, 

  {
    id: 'Musk_Verison',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-27',
    title: 'Elon Musk says upgrade of FAA\’s air traffic control system is failing and SpaceX needs to take over Verizon\’s contract',
    body: '“The Verizon communication system to air traffic control is breaking down very rapidly,” he said in a post on his social media platform X. “The FAA assessment is single digit months to catastrophic failure, putting air traveler safety at serious risk.”',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/27/business/elon-musk-faa-air-traffic-control-failing-spacex/index.html',
        linkText: 'CNN',
      },
    ],
  }, 

  {
    id: 'Unemployment_Increase',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-27',
    title: 'Number of Americans filing for unemployment benefits rises to 242,000, highest level in 3 months',
    body: 'The number of Americans filing for jobless benefits rose by 22,000 to 242,000 for the week ending Feb. 22, the Labor Department said Thursday. Analysts projected that 220,000 new applications would be filed.',
    links: [
      {
        href: 'https://apnews.com/article/unemployment-benefits-jobless-claims-layoffs-labor-a4b9beab0c8a16c374ed5492f02a61f6',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Tariffs_Increase',
    categories: ['Project 2025', 'Global', 'WW3', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-27',
    title: 'Trump plans tariffs on Mexico and Canada for Tuesday, while doubling existing 10% tariffs on China',
    body: 'Trump said illicit drugs such as fentanyl are being smuggled into the United States at “unacceptable levels” and that import taxes would force other countries to crack down on the trafficking',
    links: [
      {
        href: 'https://apnews.com/article/trump-tariffs-mexico-canada-71761a2894e13a050717afda4fd8131a',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Stop_Vaccine',
    categories: ['Project 2025', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-27',
    title: 'FDA meeting to choose flu vaccine composition canceled without explanation',
    body: 'A March meeting of outside advisers to the US Food and Drug Administration to discuss the composition of flu vaccines for this fall\’s flu season has been canceled.',
    links: [
      {
        href: 'https://edition.cnn.com/2025/02/26/health/news-fda-meeting-to-choose-flu-vaccine-composition-canceled-without-explanation/',
        linkText: 'CNN',
      },
    ],
  }, 

  {
    id: 'Cut_USAID',
    categories: ['Project 2025', 'Global', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-27',
    title: 'Trump administration says it\’s cutting 90% of USAID foreign aid contracts',
    body: 'The cuts detailed by the administration would leave few surviving USAID projects for advocates to try to save in what are ongoing court battles with the administration.',
    links: [
      {
        href: 'https://apnews.com/article/trump-usaid-foreign-aid-cuts-6292f48f8d4025bed0bf5c3e9d623c16',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Judge_DEI',
    categories: ['Project 2025', 'Courts', 'Discrimination'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-27',
    title: 'Federal judge rules Trump administration can fire career intel officers who had DEI jobs',
    body: 'A group of CIA and other intelligence officers had sued asking to be reassigned to other positions instead of being fired, but the court rejected their challenge.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/national-security/federal-judge-rules-trump-administration-can-fire-career-intel-officer-rcna194036',
        linkText: 'NBC',
      },
    ],
  }, 

  {
    id: 'Mass_Layoffs',
    categories: ['DOGE', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-27',
    title: 'The Trump administration sets the stage for large-scale federal worker layoffs in a new memo',
    body: 'Thousands of probationary employees have already been fired, and now the Republican administration is turning its attention to career officials with civil service protection.',
    links: [
      {
        href: 'https://apnews.com/article/trump-elon-musk-federal-workers-layoffs-d295d4bb2cdd5023c27d9cb03754e81b',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Trans_Military',
    categories: ['Project 2025', 'LGBTQ', 'Discrimination'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-02-27',
    title: 'Transgender troops will be removed from U.S. military, Pentagon says',
    body: 'The previous Trump administration effectively banned transgender people from joining, but the new memo says currently serving transgender troops will be discharged.',
    links: [
      {
        href: 'https://www.washingtonpost.com/national-security/2025/02/27/transgender-ban-us-service-members-military-pentagon/?ueid=ffb28db06ced21f14e4653d5131fad10&utm_source=Sailthru&utm_medium=email&utm_campaign=Logoff%202/27/25',
        linkText: 'Washington Post',
      },
    ],
  }, 

  {
    id: 'EU_Military',
    categories: ['Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-27',
    title: 'Europe plans historic military buildup',
    body: 'The European Union is preparing its most extensive defense initiative since the Cold War, with plans to allocate hundreds of billions of euros to strengthen security across the bloc.',
    links: [
      {
        href: 'https://defence-blog.com/europe-plans-historic-military-buildup/',
        linkText: 'Defence Blog',
      },
    ],
  }, 

  {
    id: 'SCOTUS_Pauses',
    categories: ['Project 2025', 'Courts', 'Global'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-26',
    title: 'Supreme Court temporarily pauses judge\'s order on releasing frozen foreign aid funding',
    body: 'The Supreme Court on Wednesday night temporarily paused a lower court order that required the Trump administration to release frozen foreign aid funding by midnight.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/justice-department/justice-department-judges-cant-comply-deadline-usaid-funds-rcna193837',
        linkText: 'NBC',
      },
    ],
  }, 

  {
    id: 'Gold_Card',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-26',
    title: 'Trump says he will offer \‘gold cards\’ for $5 million path to citizenship, replacing investor visas',
    body: '“They\’ll be wealthy and they\’ll be successful, and they\’ll be spending a lot of money and paying a lot of taxes and employing a lot of people, and we think it\’s going to be extremely successful,” Trump said Tuesday in the Oval Office.',
    links: [
      {
        href: 'https://apnews.com/article/investor-visas-trump-immigration-eb5-gold-cards-cdb943dd1633bc234bb715fa20914e05',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'First_Cabinet',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-26',
    title: 'Trump and Elon Musk dominate his first Cabinet meeting',
    body: 'While not a member of Trump\’s Cabinet, Musk has been near omnipresent by the president\’s side since he was elected last year.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/trump-administration/trump-elon-musk-dominate-first-cabinet-meeting-rcna193836',
        linkText: 'NBC',
      },
    ],
  }, 

  {
    id: 'Budget_Cuts',
    categories: ['Project 2025', 'Immigration'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-25',
    title: 'House narrowly adopts budget plan to advance Trump\'s agenda',
    body: 'The budget measure calls for $4.5 trillion in tax cuts and a goal of $2 trillion in spending cuts. It includes more than $100 billion in new spending on immigration enforcement and the military.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/congress/house-budget-vote-speaker-johnson-trump-agenda-rcna193626',
        linkText: 'NBC',
      },
    ],
  }, 

  {
    id: 'Eugenics',
    categories: ['Project 2025', 'Health', 'Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-25',
    title: 'The US is talking about mass sterilisation',
    body: 'A senior US government official has called for “lower quality humans” to be sterilised en masse; his country has been here before.',
    links: [
      {
        href: 'https://yorkshirebylines.co.uk/news/world/the-us-is-talking-about-mass-sterilisation-again/',
        linkText: 'Yorkshire Bylines',
      },
    ],
  }, 

  {
    id: 'Processing_Camps',
    categories: ['Project 2025', 'Fascism', 'Immigration'],
    color: 'red',
    faicon: 'plane',
    date: '2025-02-25',
    title: 'Trump allies circulate mass deportation plan calling for \‘processing camps\’ and a private citizen \‘army\’',
    body: 'A group of prominent military contractors has pitched the Trump White House on a proposal to carry out mass deportations through a network of “processing camps” on military bases, a private fleet of 100 planes, and a “small army” of private citizens empowered to make arrests.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/25/documents-military-contractors-mass-deportations-022648',
        linkText: 'Politico ',
      },
    ],
  }, 

  {
    id: 'WH_Reporters',
    categories: ['Fascism'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-25',
    title: 'White House says it will determine which reporters have access to the president',
    body: 'Fresh of a legal victory allowing it to ban the Associated Press from White House events, the Trump White House announced on Tuesday that the administration — not an independent group of journalists — will determine which outlets have access to the president as part of a pool allowed into the Oval Office, aboard Air Force One and into other otherwise closed meetings and events.',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/25/trump-white-house-press-pool-access-00206001',
        linkText: 'Politico ',
      },
    ],
  }, 

  {
    id: 'Gitmo_Mistreatment',
    categories: ['Project 2025', 'Immigration', 'Fascism'],
    color: 'red',
    faicon: 'plane',
    date: '2025-02-25',
    title: 'Invasive frisks, suicide attempts: Three migrants describe Guantánamo detention',
    body: 'The men said they were denied calls to loved ones, subjected to humiliating searches and left in isolation for prolonged periods.',
    links: [
      {
        href: 'https://www.washingtonpost.com/immigration/2025/02/25/guantanamo-trump-migrants-deportations-venezuela/',
        linkText: 'Washingon Post ',
      },
    ],
  }, 

  {
    id: 'Judge_Make_Trump_Pay',
    categories: ['Project 2025', 'Courts', 'Resist', 'Global'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-25',
    title: 'Judge orders Trump administration to pay bills from foreign aid contractors, comply with earlier ruling',
    body: 'U.S. District Judge Amir Ali required the State Department and  USAID to restore foreign-assistance funds for contracts and other awards while proceedings continue in a case brought by a group of businesses, nonprofits, and organizations that do foreign aid work.',
    links: [
      {
        href: 'https://www.cbsnews.com/news/judge-usaid-state-department-foreign-assistance-funding-contractors-grants/',
        linkText: 'CBS',
      },
    ],
  }, 

  {
    id: 'Can_Mex_Tariffs',
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-25',
    title: 'Trump says Canada and Mexico tariffs are \‘going forward\’ with more import taxes to come',
    body: 'Most economists say the cost of the taxes could largely be borne by consumers, retailers and manufacturers such as auto companies that source globally and rely on raw materials such as steel and aluminum that Trump is already, separately, tariffing at 25%.',
    links: [
      {
        href: 'https://apnews.com/article/trump-tariffs-macron-canada-mexicoreciprocal-49caafc1240db7e17cfb45e71520dc98',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Seattle_Judge_Blocks',
    categories: ['Project 2025', 'Courts', 'Resist', 'Immigration'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-25',
    title: 'A federal judge in Seattle blocks Trump\’s effort to halt the refugee admissions system',
    body: 'The ruling came in a lawsuit brought by individual refugees whose efforts to resettle in the U.S. have been halted as well as major refugee aid groups',
    links: [
      {
        href: 'https://apnews.com/article/trump-refugee-seattle-ruling-lawsuit-eef485154e2a3f008a01d6790ce0ee06',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'DOGE_40',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-25',
    title: 'Nearly 40% of contracts canceled by Musk\’s DOGE are expected to produce no savings',
    body: 'Nearly 40% of the federal contracts that President Donald Trump\’s administration claims to have canceled as part of its signature cost-cutting program aren\’t expected to save the government any money, the administration\’s own data shows.',
    links: [
      {
        href: 'https://apnews.com/article/doge-federal-contracts-canceled-musk-trump-cuts-a65976a725412934ad686389889db0df',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'DOGE_Quits',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-25',
    title: 'Federal technology staffers resign rather than help Musk and DOGE',
    body: 'More than 20 civil service employees resigned Tuesday from billionaire Trump adviser Elon Musk\’s Department of Government Efficiency, saying they were refusing to use their technical expertise to “dismantle critical public services.”',
    links: [
      {
        href: 'https://apnews.com/article/doge-elon-musk-federal-government-resignations-usds-6b7e9b7022e6d89d69305e9510f2a43c',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.npr.org/2025/02/25/nx-s1-5308095/doge-staff-resignations-elon-musk',
        linkText: 'NPR',
      },
    ],
  }, 

  {
    id: 'IED_Mexico',
    categories: ['Global', 'Immigration'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-25',
    title: 'IED kills at least 1 Texas rancher near border with Mexico, officials say',
    body: 'An improvised explosive device (IED) killed a Texas rancher near the state\’s border with Mexico, Texas Agriculture Commissioner Sid Miller said Tuesday.',
    links: [
      {
        href: 'https://thenationaldesk.com/news/americas-news-now/ied-kills-at-least-one-texas-rancher-near-border-with-mexico-official-says',
        linkText: 'National New Desk',
      },
    ],
  }, 

  {
    id: 'Trump_Kiss_Feet',
    categories: ['Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-24',
    title: 'Fake video of Trump kissing Musk\'s feet displayed at HUD office in Washington',
    body: 'The video appeared to have been created with the help of artificial intelligence and poked fun at the power dynamic between the two men.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/doge/fake-video-trump-kissing-musks-feet-displayed-hud-office-washington-rcna193503',
        linkText: 'NBC',
      },
    ],
  }, 

  {
    id: 'US_Votes_Russia',
    categories: ['Project 2025', 'Global', 'WW3'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-24',
    title: 'US joins Russia to vote against UN resolution condemning Russia\’s war against Ukraine',
    body: 'The vote against the Ukrainian and European-backed resolution saw the US at odds with its longtime European allies and instead aligned with the aggressor in the war on the three-year anniversary of Moscow\’s full-scale invasion of Ukraine.',
    links: [
      {
        href: 'https://www.cnn.com/2025/02/24/politics/us-joins-russia-ukraine-un-vote/index.html',
        linkText: 'CNN',
      },

      {
        href: 'https://apnews.com/article/un-russia-ukraine-war-resolution-trump-zelenskyy-cde221e5850196776525403e788c272c',
        linkText: 'Associated Press',
      },
    ],
  }, 


  {
    id: 'Judge_Blocks-OPM',
    categories: ['Project 2025', 'Courts', 'Education', 'DOGE'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-24',
    title: 'Judge blocks OPM, Education Department from sharing personal info with DOGE',
    body: '“The continuing, unauthorized disclosure of plaintiffs\’ sensitive personal information to DOGE affiliates is irreparable harm that money damages cannot rectify,” U.S. District Judge Deborah Boardman',
    links: [
      {
        href: 'https://www.politico.com/news/2025/02/24/judge-blocks-opm-education-dept-from-sharing-info-with-doge-00205699',
        linkText: 'Politico ',
      },
    ],
  }, 

  {
    id: 'Viral_Misinformation',
    categories: ['Fascism', 'Orwell'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-24',
    title: 'As Meta gets rid of fact-checkers, misinformation is going viral',
    body: 'Meta is phasing out its third-party fact-checking programs in the U.S. while it reintroduces a bonus program for creators, which pays them for viral content. (i.e., Meta will pay for misinformation)',
    links: [
      {
        href: 'https://techcrunch.com/2025/02/24/as-meta-gets-rid-of-fact-checkers-misinformation-is-going-viral/',
        linkText: 'Tech Crunch',
      },
    ],
  }, 

  {
    id: 'AfD_Win-Block',
    categories: ['Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-24',
    title: 'Germany\'s AfD, Left win enough seats to block changes to debt brake',
    body: ' The far-right Alternative for Germany (AfD) and the Left Party jointly secured one third of seats in the new parliament, enough to block a loosening of Germany\'s debt brake - a mechanism some investors and political parties say stymies economic growth',
    links: [
      {
        href: 'https://www.reuters.com/world/europe/germanys-afd-left-party-can-jointly-block-changes-constitution-2025-02-24/',
        linkText: 'Reuters',
      },
    ],
  }, 

  {
    id: 'Fire_Military_Lawyers',
    categories: ['Project 2025', 'Fascism', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-24',
    title: 'Hegseth says he fired the top military lawyers because they weren\'t well suited for the jobs',
    body: 'The removals — which came without any specified reasons in terms of their conduct — sent a new wave of apprehension through the Pentagon. And they added to the broader confusion over the changing parameters of Elon Musk’s demand that federal employees provide recent job accomplishments by the end of Monday or risk getting fired, even though government officials later said the edict is voluntary.',
    links: [
      {
        href: 'https://www.sfchronicle.com/news/article/hegseth-says-he-fired-the-top-military-lawyers-20185743.php',
        linkText: 'San Francisco Chronicle',
      },
    ],
  }, 

  {
    id: 'Patel_ATF',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-24',
    title: 'New FBI Director Kash Patel will also be named acting head of the ATF',
    body: 'New FBI Director Kash Patel is expected to be named the acting head of the Bureau of Alcohol, Tobacco, Firearms and Explosives...an unusual arrangement that raises questions about the future of the bureau that has long drawn the ire of conservatives.',
    links: [
      {
        href: 'https://www.pressdemocrat.com/article/news/new-fbi-director-kash-patel-will-also-be-named-acting-head-of-the-atf-offi/',
        linkText: 'Press Democrat',
      },
    ],
  }, 

  {
    id: 'AfD_Win',
    categories: ['Project 2025', 'Global', 'Fascism'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-24',
    title: 'Germany\’s election result cements a shift to the right in Europe',
    body: 'Provisional results confirmed that mainstream conservatives led by Friedrich Merz have won Germany\’s national election, while Alternative for Germany nearly doubled its support, the strongest showing for a far-right party since World War II.',
    links: [
      {
        href: 'https://apnews.com/live/germany-election-updates-parliament',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Musk_Justify-Sue',
    categories: ['Project 2025', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-24',
    title: 'Federal workers sue over Elon Musk\’s threat to fire them if they don\’t explain their accomplishments',
    body: 'Attorneys representing unions, businesses, veterans and conservation organizations filed an updated lawsuit in federal court in California on Monday, arguing Musk had violated the law with his demand.',
    links: [
      {
        href: 'https://www.pbs.org/newshour/politics/federal-workers-sue-over-elon-musks-threat-to-fire-them-if-they-dont-explain-their-accomplishments',
        linkText: 'PBS',
      },
    ],
  }, 

  {
    id: 'USAID_Leave',
    categories: ['Project 2025', 'DOGE', 'Global'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-23',
    title: 'The Trump administration is putting USAID staffers on leave worldwide and firing at least 1,600',
    body: 'The move was the latest and one of the biggest steps in what President Donald Trump and cost-cutting ally Elon Musk say is their goal of gutting the six-decade-old aid and development agency in a broader campaign to slash the size of the federal government.',
    links: [
      {
        href: 'https://apnews.com/article/usaid-trump-musk-foreign-aid-firings-a3af8ce6ef17878b718c8e2ed3bf98e4',
        linkText: 'Associated Press',
      },
    ],
  }, 

  {
    id: 'Tarrio_Bomb',
    categories: ['J6'],
    color: 'red',
    faicon: 'skull',
    date: '2025-02-21',
    title: 'Bomb threat sent to anti-Trump conference singles out officer who tangled with ex-Proud Boys leader',
    body: '“We have received a credible bomb threat from an account claiming to be ‘Enrique T.’ ‘To honor the J6 hostages.’"',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/feb/23/principles-first-enrique-tarrio-bomb-threat',
        linkText: 'The Guardian',
      },
    ],
  },

  {
    id: 'PB_Sue',
    categories: ['Courts', 'J6'],
    color: 'red',
    faicon: 'skull',
    date: '2025-02-21',
    title: 'Freed by Trump, Proud Boys and Oath Keepers plan to sue DOJ',
    body: 'More than four years after the violent insurrection at the U.S. Capitol, the two men federal prosecutors charged as the principal leaders of the riot were back to announce they’re suing the Justice Department.',
    links: [
      {
        href: 'https://eu.usatoday.com/story/news/politics/2025/02/21/proud-boys-oath-keepers-sue-doj/79433208007/',
        linkText: 'USA Today',
      },
    ],
  },

  {
    id: 'NIH-Funding-Freeze',
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
    id: 'Shutoff_Starlink-Ukraine',
    categories: ['Project 2025', 'DOGE', 'Global'],
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
    categories: ['Project 2025', 'DOGE'],
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
      {
        href: 'https://whyy.org/articles/elon-musk-donald-trump-federal-workers-48-hours-explain-work/',
        linkText: 'Whyy PBS',
      },

      {
        href: 'https://www.cnn.com/2025/02/23/politics/opm-federal-agencies-pushback-doge-musk/index.html',
        linkText: 'CNN',
      },
    ],
  }, 

  {
    id: 'Tarrio_Arrested',
    categories: ['Courts', 'J6', 'FAFO'],
    color: 'green',
    faicon: 'skull',
    date: '2025-02-21',
    title: 'Ex-Proud Boys leader arrested outside US Capitol',
    body: 'Enrique Tarrio, who was pardoned by President Donald Trump for his role in the 6 January 2021 riot at the US Capitol, was arrested not long after holding a news conference on Friday.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/c5y93jgdvqjo',
        linkText: 'BBC',
      },

      {
        href: 'https://www.politico.com/news/2025/02/21/proud-boys-leader-enrique-tarrio-arrested-00205513',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Bannon_Salute',
    categories: ['Fascism', 'Global', 'WW3'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-21',
    title: 'French far-right leader cancels speech, accusing Bannon of \'Nazi\' gesture',
    body: 'Steve Bannon yelled "fight, fight, fight" before extending his right arm, fingers pointed and palm down, during his speech at the Conservative Political Action Conference (Cpac) near Washington DC on Thursday evening.',
    links: [
      {
        href: 'https://www.bbc.co.uk/news/articles/cx2glydm3gmo',
        linkText: 'BBC',
      },
    ],
  },

  {
    id: 'Town_Hall_Pushback',
    categories: ['Project 2025', 'FAFO', 'Resist', 'DOGE'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-21',
    title: 'At town halls, Republicans feel the heat from Trump and Musk\'s firing and cutting spree',
    body: 'Republicans faced sometimes-hostile crowds furious about the sweeping budget cuts and mass firings of federal workers that President Donald Trump and Elon Musk\’s Department of Government Efficiency are carrying out.',
    links: [
      {
        href: 'https://www.nbcnews.com/politics/congress/town-halls-republicans-feel-heat-trump-musks-firing-cutting-spree-rcna193164',
        linkText: 'NBC',
      },
    ],
  },

  {
    id: 'FAFO_IRS-Layoffs',
    categories: ['Project 2025', 'DOGE', 'FAFO'],
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
    categories: ['DOGE', 'Health'],
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
    id: 'LGBTQ-Lawsuit-DEI',
    categories: ['Project 2025', 'LGBTQ', 'Resist'],
    color: 'green',
    faicon: 'hammer',
    date: '2025-02-21',
    title: 'LGBTQ+ groups file lawsuit against Trump DEI actions',
    body: 'In a lawsuit filed on Thursday by Lambda Legal, a civil rights organization focused on LGBTQ+ policies, the nonprofit groups said Trump\’s executive orders should be declared unconstitutional and discriminatory.',
    links: [
      {
        href: 'https://www.wmtw.com/article/lgbtq-groups-file-lawsuit-against-trump-dei-actions/63867763',
        linkText: 'WMTW',
      },
    ],
  }, 

  {
    id: 'USDA-Scientists-Ripple',
    categories: ['Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'poo',
    date: '2025-02-21',
    title: 'Experts foresee negative ripple effects in termination of USDA scientists in St. Paul lab',
    body: '“This was just to make the cuts, and following the precedent that we can always rehire later if we have to, and that\’s just no what\’s going to happen here,” he said. “You\’re losing potentially huge amounts of expertise in this field that\’s just not going to come back.”',
    links: [
      {
        href: 'https://www.mprnews.org/story/2025/02/21/usda-scientists-terminated-from-cereal-disease-lab-in-st-paul',
        linkText: 'MPR News',
      },
    ],
  },  

  {
    id: 'End_Of_Science',
    categories: ['DOGE', 'Health'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-21',
    title: 'DOGE shut the funding spigot for medical research overnight. Scientists are calling it \‘the end of science\’ in America',
    body: 'DOGE will cut more than $4 billion from the NIH budget—which equates to 11% of its 2023 budget—impacting major research institutions nationwide.',
    links: [
      {
        href: 'https://fortune.com/2025/02/21/doge-national-institute-health-funding-indirect-funds-elon-musk-medical-research-science/',
        linkText: 'Fortune ',
      },
    ],
  }, 

  {
    id: 'Judge_USAID',
    categories: ['Project 2025', 'Courts', 'Global'],
    color: 'red',
    faicon: 'landmark',
    date: '2025-02-21',
    title: 'Judge clears path to pull USAID personnel off the job',
    body: 'U.S. District Judge Carl Nichols dissolved his order temporarily staving off the purge and declined to provide further relief, contending that the plaintiffs\’ initial assertions of harm were “overstated.” ',
    links: [
      {
        href: 'https://thehill.com/regulation/court-battles/5158201-judge-usaid-personnel/',
        linkText: 'The Hill',
      },
    ],
  },  

  {
    id: 'Trump_Fires_General2',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-21',
    title: 'Trump fires top US general CQ Brown in shake-up at Pentagon',
    body: 'Trump has fired the Chairman of the Joint Chiefs of Staff CQ Brown, the highest-ranking officer in the country, as part of a major shake-up of top military leadership.',
    links: [
      {
        href: 'https://www.bbc.com/news/articles/clyr2xvn4dpo',
        linkText: 'BBC',
      },

      {
        href: 'https://www.nbcnews.com/politics/white-house/trump-fires-chairman-joint-chiefs-staff-cq-brown-rcna193288',
        linkText: 'NBC',
      },
    ],
  },  

  {
    id: 'Military_Budget_Cuts',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-20',
    title: 'Defense secretary orders military to prepare for major budget cuts',
    body: 'Defense Secretary Pete Hegseth has ordered the military to prepare plans to make drastic budget cuts over the next five years, with an exception for border security, according to a new memo obtained by CNN.',
    links: [
      {
        href: 'https://www.cnn.com/2025/02/19/politics/hegseth-military-major-budget-cuts/index.html',
        linkText: 'CNN',
      },
    ],
  },  

  {
    id: 'NISD_Mass-Firings',
    categories: ['Project 2025', 'DOGE'],
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
    categories: ['Project 2025', 'Health', 'Women'],
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
    id: 'Americans_Worried',
    categories: ['Project 2025', 'Fascism', 'FAFO'],
    color: 'red',
    faicon: 'poo',
    date: '2025-02-20',
    title: 'Americans worried by Trump\’s push to expand power',
    body: 'About half of all Americans feel that Trump has overstepped in using the power of the presidency and the executive branch.',
    links: [
      {
        href: 'https://www.cnn.com/2025/02/20/politics/cnn-poll-trump-approval/index.html',
        linkText: 'CNN',
      },
    ],
  },  

  {
    id: 'Portland_Protest',
    categories: ['Fascism', 'Resist'],
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
    categories: ['DOGE', 'Education'],
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
    categories: ['Health', 'Fascism'],
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
    id: 'IRS_Layoffs',
    categories: ['Project 2025', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-19',
    title: 'IRS to lay off 6,700 employees on Thursday, source says',
    body: 'The workers being cut are probationary employees who have typically been at the agency for less than one to two years, and enjoy fewer protections than longer-term workers. The IRS has a total of roughly 100,000 employees.',
    links: [
      {
        href: 'https://www.reuters.com/world/us/us-irs-start-laying-off-6000-employees-thursday-nyt-reports-2025-02-19/',
        linkText: 'Reuters',
      },

      {
        href: 'https://www.npr.org/2025/02/20/nx-s1-5304220/irs-job-cuts-doge-tax-season',
        linkText: 'NPR',
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
    categories: ['Project 2025', 'Climate', 'Resist'],
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
    categories: ['DOGE', 'Health', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
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
    categories: ['DOGE', 'Fascism'],
    color: 'red',
    faicon: 'fire',
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
    categories: ['DOGE', 'Fascism',],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-18',
    title: 'Musk Ally Demands Admin Access to System That Lets Government Text the Public',
    body: 'Notify.gov contains not just the phone numbers of everyday people but also information about whether they participate in government programs such as Medicaid, which is based on a person\'s financial situation.',
    links: [
      {
        href: 'https://www.404media.co/musk-ally-demands-admin-access-to-system-that-lets-government-text-the-public/',
        linkText: '404 Media ',
      },
    ],
  },  

  {
    id: 'AOC_Sanders',
    categories: ['Tiddlywinks', 'Fascism', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-18',
    title: 'Democrats want their opposition party to get loud. Bernie and AOC are trying to help',
    body: 'A 50-state show of force reminds Democratic leaders that their base is still angry, even if they aren’t.',
    links: [
      {
        href: 'https://www.independent.co.uk/news/world/americas/bernie-aoc-democrats-opposition-protests-b2700453.html',
        linkText: 'The Independent',
      },
    ],
  },  

  {
    id: 'Judge_Rejects-DOGE',
    categories: ['DOGE', 'Courts'],
    color: 'red',
    faicon: 'landmark',
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
    categories: ['Resist', 'Fascism'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-17',
    title: 'No kings on Presidents Day\’ rings out from protests against Trump and Musk',
    body: 'Boston protesters, some dressed in Revolutionary War-style clothing, carried signs saying such things as “This is a Coup” and “Cowards Bow to Trump, Patriots Stand Up.” One sign had a depiction of Uncle Sam saying “I Want You to Resist.”',
    links: [
      {
        href: 'https://apnews.com/article/president-donald-trump-protest-c8796556fbf20e796f42167f61c3d942',
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'DC_Protest',
    categories: ['Resist', 'Fascism'],
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
    categories: ['Global', 'WW3'],
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
    categories: ['Fascism', 'DOGE'],
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
    id: 'DOGE-IRS2',
    categories: ['DOGE', 'Project 2025', 'Resist'],
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
    categories: ['DOGE', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-17',
    title: 'Musk Team Seeks Access to I.R.S. System With Taxpayers\’ Records',
    body: 'The Internal Revenue Service is preparing to give a team member working with Elon Musk’s so-called Department of Government Efficiency access to sensitive taxpayer data.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/02/17/us/politics/musk-irs-doge.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'SpaceX-FAA',
    categories: ['Project 2025', 'DOGE'],
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
    categories: ['Project 2025', 'DOGE'],
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
    categories: ['Project 2025', 'Courts'],
    color: 'red',
    faicon: 'hammer',
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
    categories: ['Health', 'Project 2025',],
    color: 'red',
    faicon: 'hammer',
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
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-02-16',
    title: 'Trump: If it saves the country, it\'s not illegal',
    body: 'Echoing France\'s Napoleon Bonaparte, U.S. President Donald Trump on Saturday took to social media to signal continued resistance to limits on his executive authority in the face of multiple legal challenges.”',
    links: [
      {
        href: 'https://www.reuters.com/world/us/trump-if-it-saves-country-its-not-illegal-2025-02-16/',
        linkText: 'Reuters ',
      },
    ],
  },

  {
    id: 'Vance-Munich',
    categories: ['Global', 'WW3'],
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
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Patel-FBI',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-14',
    title: 'Senate panel advances nomination of Kash Patel, Trump\’s pick to lead the FBI',
    body: 'Patel has vowed to overhaul the FBI, turn its headquarters into a museum, and punish members of the so-called “deep state.”',
    links: [
      {
        href: 'https://apnews.com/article/trump-fbi-kash-patel-61610c5384536667eb112734465b0a19',
        linkText: 'Associated Press',
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
    body: 'More than half a dozen government attorneys have resigned since an order by the Trump administration\’s Justice Department to drop charges against Mayor Eric Adams of New York City.',
    links: [
      {
        href: 'https://www.nytimes.com/interactive/2025/02/14/us/doj-resignations-trump-adams.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Layoffs-HUD',
    categories: ['Project 2025', 'DOGE'],
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
    categories: ['Project 2025', 'DOGE'],
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
        href: 'https://www.desmoinesregister.com/story/money/agriculture/2025/02/14/donald-trump-federal-spending-freeze-iowa-farmers-owed-millions-climate-smart-agriculture/78407310007/',
        linkText: 'Des Moins Register ',
      },
    ],
  },

  {
    id: 'RFK-Sworn-In',
    categories: ['Health', 'Project 2025', 'Women'],
    color: 'red',
    faicon: 'virus',
    date: '2025-02-14',
    title: 'Vaccine skeptic Robert F. Kennedy Jr. is sworn in as Trump\’s health chief after a close Senate vote',
    body: '"Kennedy faced opposition from the left for his decades of espousing conspiracy theories about vaccines and from the right for his past support of abortion rights."',
    links: [
      {
        href: 'https://apnews.com/article/rfk-trump-health-secretary-vote-5dbefeef0537dc241e6fb33b8f2a748b',
        linkText: 'Associated Press',
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
        href: 'https://www.sltrib.com/news/politics/2025/02/13/nazi-flags-can-fly-utah-school-not/#selection-261.0-261.162',
        linkText: 'The Salt Lake Tribune ',
      },
    ],
  },

  {
    id: 'Trump-Fires-Nuclear-Staff',
    categories: ['Project 2025'],
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
    categories: ['Project 2025', 'FAFO'],
    color: 'red',
    faicon: 'poo',
    date: '2025-02-14',
    title: 'Is corporate America already souring on Trump?',
    body: 'Across the US, businesspeople are warning that this new trade war could drive up costs, disrupt supply chains and hurt profits — and make a whole range of products more expensive for American consumers.',
    links: [
      {
        href: 'https://www.ft.com/content/a7c9376b-4cb2-4cf2-a665-66f75b72f4c2',
        linkText: 'Financial Times ',
      },
    ],
  },

  {
    id: 'Fire-Fed-Employees',
    categories: ['Project 2025', 'Education', 'DOGE'],
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
    categories: ['Fascism', 'DOGE'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-13',
    title: 'Elon Musk calls for the US to \‘delete entire agencies\’ from the federal government',
    body: 'Google has also turned off the ability to suggest edits or report inaccuracies for the Gulf of America.',
    links: [
      {
        href: 'https://apnews.com/article/elon-musk-doge-us-uae-6f7c0e5b43adfb4ec3c1f14a964f573c',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.politico.com/news/2025/02/13/elon-musk-target-federal-agencies-017563',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Trump-Recipricol-Tariffs',
    categories: ['Project 2025', 'Global', 'WW3', 'Economy', 'Tariff War'],
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
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Google-Deletes-Reviews',
    categories: ['Fascism', 'Global'],
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
    id: 'Resistance_Fightback',
    categories: ['Resist', 'Project 2025', 'Tiddlywinks'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-02-13',
    title: 'The #Resistance is no more. But a quieter fightback to Trump 2.0 is growing',
    body: 'There’s no sign of the mass protests of his first term – but Democrats are building a less flashy politics of opposition. The opposition to Trump also appears rudderless. The institutional Democratic party...lacks towering political talents.',
    links: [
      {
        href: 'https://www.theguardian.com/commentisfree/2025/feb/13/donald-trump-resistance-protest-democrats',
        linkText: 'The Guardian (Opinion)',
      },
    ],
  },

  {
    id: 'Trans-Removed',
    categories: ['LGBTQ', 'Fascism'],
    color: 'red',
    faicon: 'rainbow',
    date: '2025-02-13',
    title: 'U.S. Park Service Strikes Transgender References From Stonewall Website',
    body: 'The “T” was removed in references to L.G.B.T.Q.+ on the official site for the Greenwich Village monument, which marks a milestone in the fight for gay rights. Later, the Q+ also disappeared.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/02/13/nyregion/stonewall-transgender-parks-service.html',
        linkText: 'New York Times',
      },
    ],
  },


  {
    id: 'Judge-Blocks-Trump-Order',
    categories: ['Courts', 'Resist', 'LGBTQ'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-02-13',
    title: 'Federal judge pauses President Trump\’s order restricting gender-affirming care for trans youth',
    body: 'The judge\’s ruling came after a lawsuit was filed earlier this month on behalf of families with transgender or nonbinary children who allege their health care has already been compromised.',
    links: [
      {
        href: 'https://apnews.com/article/judge-restraining-order-trump-transgender-health-care-8f8d935a3e757a1700dfb7363a67b07b',
        linkText: 'Associated Press',
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
    categories: ['Fascism', 'Global'],
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
    categories: ['Fascism', 'Global'],
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
        href: 'https://www.bloomberg.com/news/articles/2025-02-11/apple-is-renaming-gulf-of-mexico-to-gulf-of-america-on-maps-app',
        linkText: 'Bloomberg ',
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
        linkText: 'Associated Press',
      },

    ],
  },

  {
    id: 'USAID-Inspector-Fired',
    categories: ['Global', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-12',
    title: 'White House fires USAID inspector general after warning about funding oversight',
    body: 'On Monday, Martin\’s office issued a flash report warning that the Trump administration\’s freeze on all foreign assistance and moves to cut USAID staff had left oversight of the humanitarian aid “largely nonoperational.',
    links: [
      {
        href: 'https://apnews.com/article/usaid-american-companies-layoffs-lawsuit-8c116d877c179169fbce2d3348fcd997',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.politico.com/news/2025/02/11/trump-fires-usaid-inspector-general-00203717',
        linkText: 'Politico',
      },
    ],
  },

  {
    id: 'Massive-Layoffs',
    categories: ['Project 2025', 'DOGE'],
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
        href: 'https://www.nytimes.com/2025/02/11/us/politics/trump-musk-doge-federal-workers.html',
        linkText: 'New York Times',
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
        href: 'https://www.nytimes.com/2025/02/11/us/politics/trump-musk-doge-federal-workers.html',
        linkText: 'New York Times',
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
        linkText: 'Associated Press',
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
        linkText: 'Associated Press',
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
    categories: ['DOGE', 'Immigration'],
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
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'P2025-Guts-Funding',
    categories: ['Project 2025', 'Health'],
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
        href: 'https://www.bloomberg.com/news/articles/2025-02-11/trump-calls-for-abolishing-fema-expanding-battle-against-feds',
        linkText: 'Bloomberg ',
      },
    ],
  },

  {
    id: 'Musk_DOGE-Conflicts',
    categories: ['DOGE', 'Project 2025'],
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
        linkText: 'Associated Press',
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
    categories: ['DOGE', 'Project 2025', 'Education'],
    color: 'red',
    faicon: 'scroll',
    date: '2025-02-11',
    title: 'Musk Team Announces Millions in Cuts to Education Dept. Amid Legal Pushback',
    body: 'Elon Musk\’s cost-cutting effort announced a variety of cuts at the Education Department totaling over $900 million...',
    links: [
      {
        href: 'https://www.nytimes.com/2025/02/11/us/politics/musk-doge-education-data.html',
        linkText: 'New York Times',
      },

    ],
  },

  {
    id: 'Judge-Restores',
    categories: ['Resist', 'Courts', 'Health'],
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
        linkText: 'Associated Press',
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
    categories: ['Global', 'WW3'],
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
    title: 'Trump May Cut Aid to Jordan and Egypt if They Don\’t Take Gazans',
    body: 'The president turned up the pressure on the two nations to agree to his proposal for them to house the Palestinian population of Gaza and said the Palestinians would not have the right to return to the territory.',
    links: [
      {
        href: 'https://www.nytimes.com/2025/02/10/us/politics/trump-jordan-egypt-gaza-development.html',
        linkText: 'New York Times',
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
    categories: ['Project 2025', 'Global', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'globe',
    date: '2025-02-10',
    title: 'Trump says he will announce 25% steel and aluminum tariffs Monday, and more import duties are coming',
    body: 'The United States will impose 25% tariffs on all steel and aluminum imports, including from Canada and Mexico',
    links: [
      {
        href: 'https://apnews.com/article/trump-steel-aluminum-tariffs-import-duties-74d7bfde0da59e111a45e772d199f2b2',
        linkText: 'Associated Press',
      },

      {
        href: 'https://www.cnbc.com/2025/02/10/global-winners-and-losers-of-trumps-steel-and-aluminium-tariffs.html',
        linkText: 'CNBC',
      },
    ],
  },

  {
    id: 'DOGE_Exposes_Networks',
    categories: ['Fascism', 'Project 2025', 'DOGE'],
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
    categories: ['Fascism', 'Courts', 'Project 2025', 'DOGE'],
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
        linkText: 'Associated Press',
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
        linkText: 'New York Times',
      },
      {
        href: 'https://www.nytimes.com/2025/02/08/us/politics/guantanamo-bay-migrants.html',
        linkText: 'New York Times',
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
    id: 'Resistence_Dead',
    categories: ['Resist'],
    color: 'red',
    faicon: 'jedi',
    date: '2025-02-05',
    title: 'What Happened to the Trump Resistance?',
    body: 'If Trump’s first Presidency was characterized by widespread revolt, his second term has so far been defined by the lack of dissidence.',
    links: [
      {
        href: 'https://www.newyorker.com/news/the-lede/what-happened-to-the-trump-resistance',
        linkText: 'The New Yorker',
      },
    ],
  },

  {
    id: 'Protests-Trans-Ban',
    categories: ['LGBTQ', 'Resist'],
    color: 'green',
    faicon: 'rainbow',
    date: '2025-02-05',
    title: 'Protests erupt across US at hospitals complying with Trump\'s unlawful under-19 trans ban',
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
    id: 'Trump_Attack_PBI',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-02-03',
    title: 'Trump’s attack on the FBI',
    body: 'The Trump administration is preparing a remarkable power grab over the federal law enforcement agency.',
    links: [
      {
        href: 'https://www.vox.com/politics/398025/the-logoff-donald-trumps-fbi-purge-law-doj?ueid=ffb28db06ced21f14e4653d5131fad10&utm_source=Sailthru&utm_medium=email&utm_campaign=Logoff%202/20/25&utm_term=The%20Logoff',
        linkText: 'Vox',
      },
    ],
  },

  {
    id: 'Musk-Force_Out_Workers',
    categories: ['Fascism', 'Project 2025', 'DOGE'],
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
    id: 'Iowa_Flip',
    categories: ['Fascism', 'Resist', 'Tiddlywinks'],
    color: 'green',
    faicon: 'democrat',
    date: '2025-01-29',
    title: 'Democrats Shock Republicans, Flip Deep Red Iowa Senate Seat in Pro-Trump District',
    body: 'Democrats have pulled off a stunning upset in Iowa, flipping a deep-red state Senate seat in a district where Donald Trump won by 21 points in 2024.',
    links: [
      {
        href: 'https://www.latintimes.com/democrats-shock-republicans-flip-deep-red-iowa-senate-seat-pro-trump-district-573857',
        linkText: 'Latin Times',
      },
    ],
  },

  {
    id: 'AOC_Attack',
    categories: ['Fascism', 'Resist'],
    color: 'green',
    faicon: 'jedi',
    date: '2025-01-29',
    title: 'Ocasio-Cortez embraces role as attack dog against Trump',
    body: 'After declaring that she doesn’t support “rapists” to explain her absence, the firebrand congresswoman later directed her ire at Elon Musk for making what many Democrats perceived to be a “Nazi salute” while giving a political speech.',
    links: [
      {
        href: 'https://thehill.com/homenews/house/5111319-aoc-fox-news-trump-criticism/',
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
        linkText: 'Associated Press',
      },
    ],
  },



  {
    id: 'Freeze-FederalGrants',
    categories: ['Courts', 'Resist'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-01-28',
    title: 'Federal judge temporarily blocks Trump administration freeze on federal grants and loans',
    body: 'The order capped the most chaotic day for the U.S. government since Trump returned to office, with uncertainty over a crucial financial lifeline causing panic and confusion among states, schools and organizations that rely on trillions of dollars from Washington.',
    links: [
      {
        href: 'https://apnews.com/article/justice-department-special-counsel-trump-046ce32dbad712e72e500c32ecc20f2f',
        linkText: 'Associated Press',
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
        href: 'https://www.nytimes.com/2025/01/28/us/politics/states-lawsuit-trump-federal-grants-pause.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'Medicaid-Interrupted',
    categories: ['Health', 'Project 2025'],
    color: 'red',
    faicon: 'virus',
    date: '2025-01-28',
    title: 'Medicaid System That Provides Funding to States Stops Working, Officials Say',
    body: 'The outage at least temporarily jeopardized payments the federal government makes to state programs, and sowed uncertainty for patients, doctors, hospitals and others.',
    links: [

      {
        href: 'https://www.nytimes.com/2025/01/28/us/politics/medicaid-freeze.html',
        linkText: 'New York Times',
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
        linkText: 'Associated Press',
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
    id: 'DOJ_Fires',
    categories: ['Project 2025', 'Fascism'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-27',
    title: 'DOJ fires officials who worked on Jack Smith\’s Trump investigations',
    body: 'The Justice Department fired more than a dozen officials who worked on the special counsel team that investigated Donald Trump in two separate criminal cases, citing a lack of trust in them.',
    links: [
      {
        href: 'https://www.washingtonpost.com/national-security/2025/01/27/doj-firings-trump-jack-smith-officials/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'Columbia-Caves',
    categories: ['Immigration', 'Project 2025', 'Economy', 'Tariff War'],
    color: 'red',
    faicon: 'plane',
    date: '2025-01-27',
    title: 'Colombia agrees to take deported migrants after Trump tariff showdown',
    body: 'The White House claimed victory in a showdown with Colombia over accepting flights of deported migrants from the U.S. on Sunday, hours after President Donald Trump threatened steep tariffs on imports and other sanctions on the longtime U.S. partner.',
    links: [
      {
        href: 'https://apnews.com/article/colombia-immigration-deportation-flights-petro-trump-us-67870e41556c5d8791d22ec6767049fd',
        linkText: 'Associated Press',
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
        linkText: 'Associated Press',
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
    categories: ['Global', 'Fascism', 'Economy', 'Tariff War'],
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
    id: 'OathKeeper-DC',
    categories: ['Resist', 'J6', 'Courts'],
    color: 'green',
    faicon: 'skull',
    date: '2025-01-24',
    title: 'Ex-leader of Oath Keepers forbidden from entering Washington DC by judge',
    body: 'Stewart Rhodes, whose 18-year Capitol attack sentence was commuted by Trump, was released from prison on Tuesday.',
    links: [
      {
        href: 'https://www.theguardian.com/us-news/2025/jan/24/stewart-rhodes-oath-keepers',
        linkText: 'The Guardian',
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
    categories: ['J6', 'Fascism'],
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
    categories: ['Gun Violence', 'Project 2025', 'Education'],
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
        linkText: 'Associated Press',
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
    categories: ['Resist', 'Fascism', 'Project 2025', 'Discrimination', 'Civil Liberties'],
    color: 'green',
    faicon: 'landmark',
    date: '2025-01-23',
    title: 'A federal judge temporarily blocks Trump\’s executive order redefining birthright citizenship',
    body: '“The 14th Amendment to the Constitution promises citizenship to those born on U.S. soil, a measure ratified in 1868 to ensure citizenship for former slaves after the Civil War.',
    links: [
      {
        href: 'https://apnews.com/article/birthright-citizenship-donald-trump-lawsuit-immigration-9ac27b234c854a68a9b9f8c0d6cd8a1c',
        linkText: 'Associated Press',
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
    categories: ['Discrimination', 'Project 2025', 'Fascism', 'LGBTQ'],
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
    faicon: 'poo',
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
    categories: ['Immigration', 'Project 2025'],
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
        linkText: 'Associated Press',
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
        linkText: 'Associated Press',
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
        linkText: 'Associated Press',
      },
    ],
  },

    {
    id: 'Trump-Threatens-Russia',
    categories: ['Global', 'WW3', 'Tariff War'],
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
    categories: ['Religion', 'Project 2025', 'Discrimination'],
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
        linkText: 'Associated Press',
      },
    ],
  },

  {
    id: 'Spanish-WH-Website-Gone',
    categories: ['Discrimination', 'Project 2025'],
    color: 'red',
    faicon: 'hammer',
    date: '2025-01-22',
    title: 'Trump administration shuts down White House Spanish-language page and social media',
    body: 'Hispanic advocacy groups and others expressed confusion at the abrupt change and frustration at what some called the administration’s lack of efforts to maintain communication with the Latino community, which helped propel him to the presidency.',
    links: [
      {
        href: 'https://apnews.com/article/trump-white-house-spanish-language-website-62224890c5b05c8ce0878358ba4a5266',
        linkText: 'Associated Press',
      },

    ],
  },

  {
    id: 'States-Sue',
    categories: ['Immigration', 'Resist', 'Civil Liberties'],
    color: 'green',
    faicon: 'plane',
    date: '2025-01-21',
    title: '22 states sue to stop Trump\’s order blocking birthright citizenship',
    body: '“The president cannot, with a stroke of a pen, write the 14th Amendment out of existence, period,” New Jersey Attorney General Matt Platkin said.',
    links: [
      {
        href: 'https://apnews.com/article/birthright-citizenship-trump-executive-order-immigrants-fc7dd75ba1fb0a10f56b2a85b92dbe53',
        linkText: 'Associated Press',
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
        linkText: 'Associated Press',
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
        href: 'https://www.washingtonpost.com/politics/2025/01/20/trump-free-speech-executive-order-censorship/',
        linkText: 'Washington Post ',
      },
    ],
  },

  {
    id: 'J6Freed',
    categories: ['J6', 'Fascism'],
    color: 'red',
    faicon: 'skull',
    date: '2025-01-21',
    title: 'Former OC Police Chief, Prominent Activist and Jan. 6 Rioter Freed',
    body: 'The man who "collected weapons for Jan. 6 and called for executions of politicians," said, "We are just getting started," upon his release.',
    links: [
      {
        href: 'https://patch.com/california/sanclemente/s/j46g2/former-oc-police-chief-prominent-activist-and-jan-6-rioter-freed?utm_term=article-slot-2&utm_source=newsletter-daily',
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
    categories: ['Climate', 'Global'],
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
    id: 'Death_Penalty',
    categories: ['Fascism', 'Project 2025'],
    color: 'red',
    faicon: 'fire',
    date: '2025-01-21',
    title: 'Trump Issues Executive Order Restoring Federal Death Penalty',
    body: 'Trump called for the use of capital punishment across the U.S. to be expanded, citing the false right-wing talking point that the death penalty is “an essential tool for deterring” crime, a claim that has been long debunked.',
    links: [
      {
        href: 'https://truthout.org/articles/trump-issues-executive-order-restoring-federal-death-penalty/',
        linkText: 'Truthout',
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
        href: 'https://www.nytimes.com/2025/01/20/us/politics/trump-world-health-organization.html',
        linkText: 'New York Times',
      },
    ],
  },

  {
    id: 'J6-Pardoned',
    categories: ['J6', 'Fascism'],
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
        linkText: 'Associated Press',
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

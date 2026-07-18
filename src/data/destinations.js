// =============================================================================
// Destinations 数据 —— 城市深度页内容
// 这是 SEO 长尾流量入口（"beijing travel""shenzhen tech tour"等）
// 学竞品 goinsidechina.com/destination-xxx 的结构
//
// 每个城市：定位 → 亮点 → 实用信息 → 相关路线 → 周边城市
// 加新城市：往这个数组里加一项即可，自动生成 /destinations/[id] 页
// =============================================================================

export const DESTINATIONS = [
  {
    id: 'beijing',
    name: 'Beijing',
    heroImage: '/images/tours/beijing-ancient-tech.jpg',
    tagline: 'The capital where empire was built — and where tomorrow\'s AI is being trained',
    intro:
      'Beijing is where you go to understand China as a civilization. Six hundred years of imperial rule played out in the Forbidden City. The Great Wall starts here. And the same city now hosts the robotics labs, the EV megafactories, and the driverless taxis that will define the next decade.',
    highlights: [
      { title: 'The Great Wall (Mutianyu)', desc: 'Less crowded than Badaling, with cable car up and toboggan down. Our recommended section for first-timers.' },
      { title: 'Forbidden City', desc: 'The 600-year-old imperial palace — 980 buildings, home of 24 emperors. Book ahead, it sells out.' },
      { title: 'Xiaomi EV Megafactory', desc: 'Watch robotic arms assemble the SU7 electric sedan on a fully automated line. A car every 76 seconds.' },
      { title: 'Baidu Apollo Park', desc: 'China\'s autonomous driving headquarters. Optional self-driving ride in a L4 vehicle.' },
      { title: 'Pony.ai Robotaxi', desc: 'Hail a driverless taxi with no safety driver on Beijing\'s public roads. A paid commercial ride.' },
      { title: 'Temple of Heaven & Hutongs', desc: 'Morning taichi, traditional courtyard neighborhoods, Peking duck dinner.' },
    ],
    practical: {
      bestTime: 'April-May, September-October (avoid July humidity & January cold)',
      stayDays: '4-7 days',
      getThere: 'Beijing Capital (PEK) or Daxing (PKX) airports; high-speed rail from Shanghai in 4.5h',
      getAround: 'Extensive metro, Didi for everything else. Traffic can be heavy — plan buffer time.',
    },
    nearby: ['xian', 'shanghai'],
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    heroImage: '/images/tours/shanghai-future-past.jpg',
    tagline: 'China\'s window to the future — colonial past, autonomous present',
    intro:
      'Shanghai is the most accessible entry point to modern China. The colonial Bund faces the futuristic Pudong skyline. Here you\'ll ride driverless taxis on public roads, see the world\'s largest automated container port, and eat your way through 400 years of culinary history — all in a 30-minute radius.',
    highlights: [
      { title: 'The Bund at Sunset', desc: 'Colonial architecture on the west bank, facing one of the most futuristic skylines on earth on the east.' },
      { title: 'Yu Garden', desc: 'A 400-year-old classical Chinese garden — the Shanghai of temples and tea houses, surrounded by old town.' },
      { title: 'Yangshan Automated Port', desc: 'The world\'s largest automated container terminal. 40M+ containers a year, moved by AI cranes and driverless trucks.' },
      { title: 'Pudong Robotaxi Zone', desc: 'Ride a fully driverless taxi (AutoX, Pony.ai) in Shanghai\'s licensed self-driving zone.' },
      { title: 'Suzhou Day Trip', desc: '30 minutes by bullet train: UNESCO classical gardens, 2,500-year-old canal towns.' },
      { title: 'French Concession', desc: 'Tree-lined streets, boutique cafés, the most livable corner of the city.' },
    ],
    practical: {
      bestTime: 'March-May, October-November (avoid rainy June-July)',
      stayDays: '3-5 days',
      getThere: 'Pudong (PVG) or Hongqiao (SHA) airports; high-speed rail hub connecting all major cities',
      getAround: 'Best metro in China, very walkable center. Maglev train from PVG airport hits 300km/h.',
    },
    nearby: ['hangzhou', 'shenzhen'],
  },
  {
    id: 'shenzhen',
    name: 'Shenzhen',
    heroImage: '/images/tours/shenzhen-china-speed.jpg',
    tagline: '40 years from fishing village to global tech capital',
    intro:
      'No city on earth has changed faster. In 1980, Shenzhen was a fishing village of 30,000. Today it has 17 million people, produces 90% of the world\'s electronics, and hosts DJI, Tencent, Huawei, and BYD. This is the most extreme economic miracle in modern history — and you can walk through it.',
    highlights: [
      { title: 'DJI Sky City', desc: 'The floating-glass headquarters of the company that dominates 70% of the global drone market. Test-fly the latest models.' },
      { title: 'Huaqiangbei', desc: 'The electronics market where a new gadget can go from idea to factory floor in two weeks.' },
      { title: 'BYD SkyShuttle', desc: 'Ride the driverless straddle-beam monorail built by the world\'s largest EV maker.' },
      { title: 'Huawei Dongguan Campus', desc: 'A 190-hectare R&D campus built as 12 replicas of European cities. Surreal and very real.' },
      { title: 'Ping An Finance Centre', desc: 'At 599m, China\'s second-tallest building. Observation deck over the entire Pearl River Delta.' },
      { title: 'Greater Bay Area', desc: 'Hong Kong, Macau, and Guangzhou all within an hour. 86 million people as one megaregion.' },
    ],
    practical: {
      bestTime: 'October-March (avoid hot humid summer May-September)',
      stayDays: '2-4 days',
      getThere: 'Shenzhen Bao\'an (SZX) airport; 30min high-speed rail from Hong Kong or Guangzhou',
      getAround: 'Modern metro, very foreigner-friendly. English more common here than anywhere else on the mainland.',
    },
    nearby: ['guangzhou', 'hongkong'],
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    heroImage: '/images/tours/chengdu-pandas-sanxingdui.jpg',
    tagline: 'Pandas, a 3,000-year-old bronze mystery, and China\'s most beloved slow life',
    intro:
      'Chengdu is famous across China for not rushing. Tea houses, park life, three-hour hotpot dinners. It\'s also the panda capital of the world and home to Sanxingdui — a 3,000-year-old civilization with alien-looking bronze masks that historians still can\'t explain. After a week in Beijing\'s intensity, Chengdu is the exhale.',
    highlights: [
      { title: 'Giant Panda Base', desc: 'Over 200 pandas in their natural habitat. Go early when they\'re active; we arrange a translated talk with researchers.' },
      { title: 'Sanxingdui Museum', desc: 'A 3,000-year-old civilization that cast bronze masks with protruding eyes and 3-meter figures — then vanished. Looks like nothing else in human history.' },
      { title: 'Sichuan Hotpot', desc: 'The dish that defines this region. We\'ll book the real version — and arrange mild options for those who can\'t take the heat.' },
      { title: 'Tea House Mornings', desc: 'The Chengdu institution: tea, mahjong, ear-cleaning in People\'s Park. Hours disappear.' },
      { title: 'Dujiangyan Irrigation System', desc: 'Built in 256 BC. Still works today, feeding 5,000 km² of farmland. No dam, no pumps — just brilliant ancient engineering.' },
      { title: 'Sichuan Opera Face-Changing', desc: 'A 300-year-old art where performers switch masks in fractions of a second. You won\'t see how.' },
    ],
    practical: {
      bestTime: 'March-June, September-November (mild year-round, avoid July-August heat)',
      stayDays: '4-6 days',
      getThere: 'Chengdu Tianfu (TFU) or Shuangliu (CTU) airports; direct flights from most major cities',
      getAround: 'Growing metro, Didi for everything. Slower pace — you\'re here to exhale.',
    },
    nearby: ['xian'],
  },
  {
    id: 'xian',
    name: 'Xi\'an',
    heroImage: '/images/tours/xian-ancient-capital.jpg',
    tagline: 'Where China began — Terracotta Army, Silk Road start, Tang golden age',
    intro:
      'Xi\'an was China\'s capital for over a thousand years. The Qin unified the country here. The Han opened the Silk Road here. The Tang dynasty — China\'s golden age — ruled from here. If Beijing is modern China\'s political center and Shanghai its business center, Xi\'an is where the civilization itself began.',
    highlights: [
      { title: 'The Terracotta Army', desc: '8,000 life-sized soldiers, each with a unique face, buried 2,200 years ago and forgotten until 1974. Nothing prepares you for the scale.' },
      { title: 'Ancient City Wall (by bike)', desc: '14 km of perfect 14th-century fortification — the best-preserved city wall in China. Bike it at sunset.' },
      { title: 'Muslim Quarter', desc: 'A street food scene that exists because Arab and Persian merchants settled here along the Silk Road, 1,300 years ago.' },
      { title: 'Shaanxi History Museum', desc: 'One of the best museums in China — artifacts from 13 dynasties that ruled from Xi\'an.' },
      { title: 'Big Wild Goose Pagoda', desc: 'A 7th-century Buddhist pagoda built to house scriptures brought back from India.' },
      { title: 'Tang Dynasty Show', desc: 'Music, dance, and costumes from China\'s golden age — performed in a Tang-style theater.' },
    ],
    practical: {
      bestTime: 'March-May, September-November (avoid freezing January, hot July)',
      stayDays: '3-5 days',
      getThere: 'Xi\'an Xianyang (XIY) airport; high-speed rail from Beijing in 4-6h, Shanghai in 6-7h',
      getAround: 'Metro expanding fast. The City Wall and Muslim Quarter are walkable from the center.',
    },
    nearby: ['chengdu', 'beijing'],
  },
  {
    id: 'hangzhou',
    name: 'Hangzhou',
    heroImage: '/images/tours/hangzhou-silk-alibaba.jpg',
    tagline: 'Marco Polo\'s favorite city — West Lake, tea, and Alibaba\'s hometown',
    intro:
      'In the 13th century, Marco Polo called Hangzhou "the most beautiful and splendid city in the world." Eight centuries later, the West Lake he described is still here. But Hangzhou is also the city that built Alibaba — the cashless society you\'ll use throughout your trip was invented here. Ancient beauty and digital revolution in one walkable city.',
    highlights: [
      { title: 'West Lake at Dusk', desc: 'UNESCO-listed landscape that inspired Chinese poetry and painting for 1,000 years. Boat ride at sunset.' },
      { title: 'Dragon Well Tea Terraces', desc: 'Where China\'s most famous green tea is grown, by hand. Meet the farmers, taste the fresh leaves.' },
      { title: 'Liangzhu Ancient City', desc: 'A 5,000-year-old jade civilization, UNESCO-listed in 2019. Rewrites what we knew about early China.' },
      { title: 'China Silk Museum', desc: 'Hangzhou was once China\'s silk capital. See the craft, then visit a working workshop.' },
      { title: 'Alibaba\'s Xixi Campus', desc: 'The urban laboratory where Jack Ma built the e-commerce empire that reshaped global retail.' },
      { title: 'Lingyin Temple', desc: 'One of China\'s largest and most important Buddhist temples, founded in 326 AD.' },
    ],
    practical: {
      bestTime: 'March-May, September-November (lotus blooms in July-August)',
      stayDays: '2-4 days',
      getThere: 'Hangzhou Xiaoshan (HGH) airport; 1h high-speed rail from Shanghai',
      getAround: 'Metro, bike-friendly around West Lake. Many sites walkable from the lake.',
    },
    nearby: ['shanghai'],
  },
  {
    id: 'guangzhou',
    name: 'Guangzhou',
    heroImage: '/images/tours/guangzhou-maritime-silk-road.jpg',
    tagline: 'China\'s 2,000-year-old gateway to the world',
    intro:
      'Long before Shanghai existed, Guangzhou (Canton) was China\'s window. For two millennia, ships from Arabia, Persia, and Europe docked here. The tea, silk, and porcelain that fed the global imagination passed through this port. Today, Guangzhou anchors the Greater Bay Area — China\'s answer to Silicon Valley.',
    highlights: [
      { title: 'Maritime Silk Road Heritage', desc: 'The Nanhai Temple — 1,400-year-old altar where sailors prayed before voyages to Arabia and beyond.' },
      { title: 'Chen Clan Ancestral Hall', desc: 'Cantonese craftsmanship at its peak — intricate carvings, ceramics, and embroidery in a 19th-century clan academy.' },
      { title: 'Canton Tower & Skyline', desc: 'The 600m tower that defines modern Guangzhou, overlooking the Pearl River.' },
      { title: 'Cantonese Dim Sum (the real version)', desc: 'What the world calls "Chinese food" started here. Eat it where it was invented.' },
      { title: 'Shamian Island', desc: 'A peaceful island of colonial-era European architecture — a quiet contrast to the megacity around it.' },
      { title: 'Greater Bay Area Tech', desc: 'Guangzhou sits at the heart of a megaregion of 86 million people — factories, smart manufacturing, the world\'s supply chain.' },
    ],
    practical: {
      bestTime: 'October-March (avoid hot rainy April-September)',
      stayDays: '2-4 days',
      getThere: 'Guangzhou Baiyun (CAN) airport; high-speed rail hub connecting all of south China',
      getAround: 'Extensive metro. The Canton Fair (April & October) doubles hotel prices — avoid those windows.',
    },
    nearby: ['shenzhen', 'hongkong'],
  },
  {
    id: 'xiamen',
    name: 'Xiamen',
    heroImage: '/images/tours/xiamen-tulou-island.jpg',
    tagline: 'Car-free island life and the bizarre UNESCO Tulou roundhouses',
    intro:
      'Most China tours skip Fujian. That\'s a mistake. Xiamen is a relaxed coastal city with the car-free island of Gulangyu — colonial architecture, piano museums, ocean views. And in the mountains nearby, the Tulou: huge circular earthen fortresses built by Hakka clans, some housing 80 families under one roof. So unusual that Cold War satellites mistook them for missile silos.',
    highlights: [
      { title: 'Gulangyu Island', desc: 'A car-free island of colonial architecture and piano museums — UNESCO-listed, no traffic, rare peace in urban China.' },
      { title: 'Fujian Tulou Roundhouses', desc: 'Massive circular earthen fortresses, 5 stories tall, housing entire clans. UNESCO World Heritage. Still lived in.' },
      { title: 'Nanputuo Temple', desc: 'Centuries-old Buddhist temple at the foot of Wulao Peak, overlooking the university and sea.' },
      { title: 'Huandao Coastal Road', desc: 'A scenic coastal drive/bike path along Xiamen\'s southern shore — palm trees, beaches, ocean.' },
      { title: 'Hakka Family Breakfast', desc: 'Eat breakfast with a Hakka family inside a 400-year-old Tulou. Then walk between fortresses of different shapes.' },
      { title: 'Fujian Cuisine', desc: 'The best seafood in southeast China — Buddha Jumps Over the Wall, the famous complex soup, originated here.' },
    ],
    practical: {
      bestTime: 'March-May, October-December (avoid typhoon season July-September)',
      stayDays: '3-5 days',
      getThere: 'Xiamen Gaoqi (XMN) airport; the Tulou are 2.5-3h by car into the mountains',
      getAround: 'Xiamen itself is compact. The Tulou require a guided day trip or overnight.',
    },
    nearby: ['hangzhou'],
  },
  {
    id: 'hongkong',
    name: 'Hong Kong',
    heroImage: '/images/tours/south-china-tech-culture.jpg',
    tagline: 'Where East meets West — our home base',
    intro:
      'Hong Kong is our home base, and for many travelers, the perfect entry or exit point. 180 years as the meeting place of Chinese and British culture produced a city unlike anywhere else: neon street markets beside global banks, dim sum stalls beside Michelin restaurants. Visas are easy, English is everywhere, and the airport connects to every major city on earth.',
    highlights: [
      { title: 'Victoria Harbour', desc: 'The skyline view that defines Hong Kong — best from the Star Ferry at sunset, $0.50 a ride.' },
      { title: 'Victoria Peak', desc: 'The tram up to the Peak offers the most famous cityscape view in Asia.' },
      { title: 'Temple Street Night Market', desc: 'Neon, fortune tellers, dim sum stalls — the Hong Kong of films.' },
      { title: 'Dim Sum & Cha Chaan Teng', desc: 'The original version of what the world calls "Chinese food." Michelin-starred meals under $15.' },
      { title: 'Lantau Island & Big Buddha', desc: 'A 34m bronze Buddha on a mountaintop, reached by a 25-minute cable car over the sea.' },
      { title: 'Gateway to the Mainland', desc: 'Cross the border to Shenzhen in 30 minutes by high-speed rail. Hong Kong is the easiest entry to the rest of China.' },
    ],
    practical: {
      bestTime: 'October-December (avoid humid May-September)',
      stayDays: '2-3 days',
      getThere: 'HKG airport — among the best-connected in Asia. Many nationalities enter visa-free for 7-180 days.',
      getAround: 'MTR is world-class. Ferries, trams, and the Peak tram. No need for a car ever.',
    },
    nearby: ['shenzhen', 'guangzhou'],
  },
];

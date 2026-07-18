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
    nearby: ['guangzhou', 'shanghai'],
  },
];

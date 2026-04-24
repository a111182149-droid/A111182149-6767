import { motion } from "motion/react";
import { Mail, MapPin, Calendar, Anchor, Award, BookOpen, Globe, Monitor, Phone, ChevronRight, Compass } from "lucide-react";

// Data extracted from the provided video
const DATA = {
  header: {
    name: "林育正 LIN YU CHENG",
    tags: ["專業人員", "南部特快車", "靜城專案", "通桃", "觀音山地主隊"],
    location: "水瓶座  |  台灣",
    dob: "2007-02-16",
    email: "A111182149@nkust.edu.tw",
    profileImage: "https://images.unsplash.com/photo-1542157585-ef20bbcce178?q=80&w=800&auto=format&fit=crop", // A high-quality placeholder image
  },
  greeting: "你好，我是林育正來自高雄，目前就讀國立高雄科技大學 航海科，未來將全心投身於海運產業",
  experiences: [
    {
      date: "2024.06",
      title: "MSC地中海郵輪-日本",
      details: ["體驗海上郵輪生活", "參觀當地酒廠", "參觀當地神社", "藥妝", "免稅店"],
    },
    {
      date: "2025.05",
      title: "御風輪實習-日本",
      details: ["體驗海上生活經驗", "淺草寺", "阿美橫町", "東京鐵塔", "台場Daba"],
    },
    {
      date: "2026.02",
      title: "台中 南投三日遊",
      details: ["解鎖人生第一次自己去玩", "武嶺", "忘憂森林", "一中街", "日月潭"],
    }
  ],
  education: {
    period: "2022-09 ~ 2027-06",
    school: "國立高雄科技大學 航運技術系",
  },
  languages: [
    { name: "英文", level: "精通" },
    { name: "中文", level: "精通" },
    { name: "台語", level: "精通" },
  ],
  computerSkills: [
    "辦公室應用軟體",
    "Microsoft Office : Word、Excel、Powerpoint"
  ],
  certificates: [
    "基本安全訓練",
    "保全職責",
    "保全意識",
    "進階滅火",
    "救生艇筏及救助艇",
    "助理航行當值",
    "漁船船員基本安全訓練",
    "船上醫事及急救訓練",
    "客船安全訓練",
  ],
  autobiography: "本人個性穩重踏實，做事認真負責，對海運工作充滿熱忱。目前就讀於國立高雄科技大學航運技術系主修部，在校期間不僅學習到航海理論、船舶管理與航行實務等專業知識，也培養了團隊合作與紀律精神。這些經驗讓我更加堅信自己未來要投身於海運產業的決心。\n\n為了讓自己具備上船工作的基本條件，我已取得基本安全訓練證書、進階滅火證書、保全職責證書、保全意識證書、及助理航行當值證書，並在訓練過程中體會到STCW修正規定對保全員職責和保全意識的要求。這些歷練不僅強化了我的專業能力，也讓我更清楚體會到海事工作需要的高度責任感與專注度。",
  aboutMePhoto: "https://images.unsplash.com/photo-1541577131713-30adfcdefa90?q=80&w=800&auto=format&fit=crop", // placeholder matching natural tone style
  coreSkills: ["船舶管理 (Ship Management)", "航行實務 (Navigation)", "安全維護 (Safety Maintenance)", "危機處理 (Crisis Handling)"]
};

// Travel Itinerary Data
const TRIP_DATA = [
  {
    day: "Day 1",
    theme: "高山星空",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    schedule: [
      { time: "09:00", event: "出發直衝南投", desc: "建議由國道六號前往埔里" },
      { time: "11:30", event: "武嶺 (3275m)", desc: "全台公路最高點，必拍團體大合照" },
      { time: "13:30", event: "清境農場", desc: "青青草原餵羊、觀賞綿羊秀，呼吸高山空氣" },
      { time: "16:00", event: "露營區 Check-in", desc: "推薦：山適雲想 或 朵娜朵露營 (空手入住)" },
      { time: "18:30", event: "星空火鍋之夜", desc: "享受無光害星空，四人圍爐談心" },
    ]
  },
  {
    day: "Day 2",
    theme: "水上划獨木舟",
    image: "https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?q=80&w=1000&auto=format&fit=crop",
    schedule: [
      { time: "08:30", event: "拔營出發前往日月潭", desc: "約 1.5 小時車程，沿途風景優美" },
      { time: "10:00", event: "日月潭 划獨木舟", desc: "預約上午團，避開清晨低溫，光線最適合拍照" },
      { time: "12:30", event: "蠻荒咖啡 午餐", desc: "純白玻璃屋 網美餐廳，建議提早線上候位" },
      { time: "15:30", event: "臺中勤美洲際酒店", desc: "當代奢華與綠意，擁有絕美的無邊際戶外泳池" },
      { time: "18:30", event: "PARK2 草悟系", desc: "都市裡的沙漠綠洲，逛逛文青選物店" },
      { time: "20:30", event: "Draft Land 微醺", desc: "體驗台中最 Chill 的立飲調酒文化" },
    ]
  },
  {
    day: "Day 3",
    theme: "都會文藝 & 美食接力",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1000&auto=format&fit=crop",
    schedule: [
      { time: "09:30", event: "台中綠美圖", desc: "全新地標，避開人潮拍純白大片" },
      { time: "11:00", event: "宮原眼科", desc: "復古建築拍照，購買質感伴手禮" },
      { time: "12:30", event: "一中街商圈", desc: "必吃爆汁雞排、豐仁冰、地瓜球" },
      { time: "14:30", event: "審計新村", desc: "逛逛文創市集，拍拍老宿舍建築" },
      { time: "17:00", event: "草悟道 / PARK2", desc: "在城市沙漠造景拍帥照，感受都市氛圍" },
      { time: "19:00", event: "逢甲夜市", desc: "台中夜市霸主，明倫蛋餅、章魚小丸子" },
      { time: "21:00", event: "逢甲商圈/酒吧", desc: "繼續逛街或是找間特色小酒吧坐坐" },
    ]
  },
  {
    day: "Day 4",
    theme: "古蹟美食",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop",
    schedule: [
      { time: "09:30", event: "前往彰化市區", desc: "約 30 分鐘車程" },
      { time: "10:30", event: "扇形車庫", desc: "觀看火車轉車台，火車頭的夢幻旅館" },
      { time: "12:00", event: "彰化肉圓大戰", desc: "推薦：阿三肉圓 (酥脆口感) 或 北門口" },
      { time: "14:00", event: "鹿港老街 漫遊", desc: "走訪桂花巷藝術村、摸乳巷、天后宮祈福" },
      { time: "16:30", event: "帶著伴手禮賦歸", desc: "購買鹿港牛舌餅或玉珍齋餅舖後上路回程" },
    ]
  }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-[#33332D] relative overflow-hidden">
      {/* Background Accent Shapes */}
      <div className="fixed top-[-100px] right-[-50px] w-[600px] h-[600px] bg-[#F5F2EA] rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-[-100px] left-[-50px] w-[500px] h-[500px] bg-[#F0EBE0] opacity-50 rounded-full blur-3xl -z-10" />

      {/* Header Section */}
      <header className="relative pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-10">
            {/* Header Text */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col text-center mt-4 md:mt-0"
            >
              <h1 className="text-[56px] leading-[1.05] font-serif text-[#2D2D26] mb-4 items-end flex flex-col md:flex-row justify-center gap-4 italic hover:not-italic transition-all duration-500">
                <span className="not-italic font-bold">{DATA.header.name.split(' ')[0]}</span> 
                <span className="text-2xl text-[#101010] font-light tracking-[0.2em] uppercase pb-2">{DATA.header.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <div className="mb-8 inline-flex flex-wrap justify-center gap-3 w-fit mx-auto">
                {DATA.header.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-[#F0EBE0] text-[#5A5A40] text-[10px] font-bold tracking-[0.2em] px-4 py-2 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#6B6B5E] font-light tracking-wide">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm">{DATA.header.location}</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                    <Calendar size={14} />
                  </div>
                  <span className="text-sm">{DATA.header.dob}</span>
                </div>
                <div className="flex items-center justify-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40] group-hover:bg-[#5A5A40] group-hover:text-white transition-colors duration-300">
                    <Mail size={14} />
                  </div>
                  <a href={`mailto:${DATA.header.email}`} className="text-sm hover:text-[#5A5A40] transition-colors duration-300 border-b border-transparent hover:border-[#5A5A40] pb-0.5">
                    {DATA.header.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Greeting Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#5A5A40] text-[#FDFCF9] w-full py-8 mt-4 shadow-xl shadow-[#00000008]"
      >
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left text-base font-light tracking-[0.1em] leading-relaxed">
          {DATA.greeting}
        </div>
      </motion.div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* Experience Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
              <Anchor size={24} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-serif italic text-[#2D2D26]">旅遊與實習 <span className="not-italic font-bold font-sans tracking-widest ml-2 text-[#A8A396] text-xl uppercase">Experiences</span></h2>
          </motion.div>
          
          <div className="relative border-l border-[#D1CEC5] ml-6 md:ml-8 space-y-16 py-4">
            {DATA.experiences.map((exp, index) => (
              <motion.div variants={itemVariants} key={index} className="relative pl-10 md:pl-12 group">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#FDFCF9] border-[3px] border-[#5A5A40] group-hover:bg-[#5A5A40] transition-colors duration-300" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <h3 className="text-xl tracking-wide font-medium text-[#4A4A35]">{exp.title}</h3>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-[#A8A396] bg-[#F0EBE0] px-3 py-1.5 rounded-full uppercase w-fit mt-3 md:mt-0">{exp.date}</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-[#6B6B5E] bg-white px-5 py-4 rounded-2xl border border-[#F0EBE0] shadow-xl shadow-[#00000004] hover:border-[#D1CEC5] transition-colors font-light text-sm tracking-wide">
                      <ChevronRight size={14} className="text-[#A8A396] mr-3 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Trip Itinerary Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16 border-b border-[#F0EBE0] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                <Compass size={24} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-serif italic text-[#2D2D26]">連假三日出遊去 <span className="not-italic font-sans text-sm tracking-widest text-[#A8A396] ml-2 font-medium uppercase mt-2 md:mt-0 inline-block">Travel Itinerary</span></h2>
            </div>
            <p className="text-[#A8A396] text-xs font-bold tracking-[0.2em] uppercase mt-2 md:mt-0 bg-[#F5F2EA] px-4 py-2 rounded-full">包括 Day 4 彩蛋行程</p>
          </motion.div>

          <div className="space-y-12">
            {TRIP_DATA.map((day, index) => (
              <motion.div variants={itemVariants} key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-stretch bg-white p-6 md:p-8 rounded-[40px] shadow-2xl shadow-[#00000004] border border-[#F0EBE0]`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-[45%] relative rounded-[28px] overflow-hidden group shrink-0 shadow-inner">
                  <div className="absolute inset-0 bg-[#F5F2EA] animate-pulse -z-10" />
                  <img 
                    src={day.image} 
                    alt={day.theme}
                    className="w-full h-full object-cover aspect-[4/3] lg:absolute lg:inset-0 transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D26]/80 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 text-white z-10 pr-8">
                    <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 opacity-90 text-[#F5F2EA] border border-white/30 inline-block px-3 py-1 rounded-full backdrop-blur-sm">{day.day}</h4>
                    <h3 className="text-3xl font-serif italic text-[#FDFCF9] drop-shadow-md">{day.theme}</h3>
                  </div>
                </div>

                {/* Timeline Side */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center py-6 px-2 lg:px-6">
                  <div className="relative border-l border-[#E8E4D9] ml-2 pl-8 space-y-8">
                    {day.schedule.map((item, idx) => (
                      <div key={idx} className="relative group/item">
                        <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#FDFCF9] border-[3px] border-[#D1CEC5] group-hover/item:border-[#5A5A40] group-hover/item:scale-125 transition-all duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                          <span className="text-[#A8A396] font-mono text-xs font-bold tracking-widest bg-[#F0EBE0]/50 px-2 py-0.5 rounded-md">{item.time}</span>
                          <span className="text-[#4A4A35] text-lg font-medium tracking-wide">{item.event}</span>
                        </div>
                        <p className="text-[#6B6B5E] text-sm font-light tracking-wide leading-[1.8]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Languages & Computer Skills Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-2xl shadow-[#00000004] border border-[#F0EBE0]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                  <BookOpen size={18} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif italic text-[#2D2D26]">學歷 <span className="not-italic font-sans text-sm tracking-widest text-[#A8A396] ml-2 font-medium uppercase">Education</span></h2>
              </div>
              <div className="relative pl-6 border-l border-[#D1CEC5]">
                <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-[#5A5A40]" />
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A8A396] mb-2">{DATA.education.period}</div>
                <div className="text-base tracking-wide font-medium text-[#4A4A35] whitespace-pre-line">{DATA.education.school}</div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-2xl shadow-[#00000004] border border-[#F0EBE0]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                  <Globe size={18} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif italic text-[#2D2D26]">語言能力 <span className="not-italic font-sans text-sm tracking-widest text-[#A8A396] ml-2 font-medium uppercase">Languages</span></h2>
              </div>
              <div className="flex flex-col gap-6">
                {DATA.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-[#F0EBE0] last:border-0 last:pb-0">
                    <span className="text-base tracking-wide font-medium text-[#4A4A35]">{lang.name}</span>
                    <span className="px-3 py-1 bg-[#F0EBE0] text-[#5A5A40] rounded-full text-[10px] tracking-widest font-bold uppercase">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Certificates */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-2xl shadow-[#00000004] border border-[#F0EBE0]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                  <Award size={18} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif italic text-[#2D2D26]">專業證照 <span className="not-italic font-sans text-sm tracking-widest text-[#A8A396] ml-2 font-medium uppercase">Certifications</span></h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {DATA.certificates.map((cert, index) => (
                  <span key={index} className="bg-[#FDFCF9] border border-[#E8E4D9] text-[#6B6B5E] text-xs tracking-widest px-4 py-2.5 rounded-full hover:bg-[#F0EBE0] hover:text-[#5A5A40] transition-colors font-medium border-dashed">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Computer Skills */}
            <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-2xl shadow-[#00000004] border border-[#F0EBE0]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] flex items-center justify-center text-[#5A5A40]">
                  <Monitor size={18} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif italic text-[#2D2D26]">電腦技能 <span className="not-italic font-sans text-sm tracking-widest text-[#A8A396] ml-2 font-medium uppercase">Skills</span></h2>
              </div>
              <ul className="space-y-4">
                <li className="font-medium tracking-wide text-[#4A4A35]">{DATA.computerSkills[0]}</li>
                <li className="text-[#6B6B5E] text-sm tracking-wide bg-[#FDFCF9] p-5 rounded-2xl border border-[#F0EBE0] md:ml-4 flex items-center shadow-inner shadow-[#00000002]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40] mr-4 shrink-0"></span>
                  {DATA.computerSkills[1]}
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section (關於我) */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-12"
        >
          <div className="flex flex-col gap-16 items-center bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-[#00000004] border border-[#F0EBE0] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F2EA] rounded-full blur-3xl opacity-60 mix-blend-multiply translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F0EBE0] rounded-full blur-2xl opacity-40 mix-blend-multiply -translate-x-1/2 translate-y-1/2" />
            
            {/* Intro & Core Skills (Full Width) */}
            <motion.div variants={itemVariants} className="w-full relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#D1CEC5] text-5xl font-serif italic inline-block translate-y-2">“</span>
                <h2 className="text-3xl font-serif italic text-[#2D2D26]">關於我 <span className="not-italic font-sans text-lg tracking-widest text-[#A8A396] ml-3 font-bold uppercase">About Me</span></h2>
              </div>
              
              <div className="mb-10">
                <p className="text-[#6B6B5E] leading-[2.2] tracking-wide text-[16px] whitespace-pre-line font-light relative z-10">
                  {DATA.autobiography}
                </p>
                <div className="text-[#F5F2EA] text-[180px] font-serif italic leading-none absolute top-10 right-10 opacity-60 z-0">
                  ”
                </div>
              </div>

              <div className="relative z-10 border-t border-[#F0EBE0] pt-10 mt-2">
                <h3 className="text-sm tracking-[0.2em] font-bold uppercase text-[#4A4A35] mb-6 inline-block">核心技能 Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {DATA.coreSkills.map((skill, index) => (
                    <span key={index} className="px-5 py-2.5 bg-[#FDFCF9] border border-[#E8E4D9] text-[#5A5A40] text-[11px] font-bold tracking-widest rounded-full hover:bg-[#5A5A40] hover:text-[#FDFCF9] transition-colors duration-300 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D26] text-[#A8A396] py-20 mt-32 relative border-t-[8px] border-[#F5F2EA]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <div className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#D1CEC5] mb-2">Get In Touch</div>
          <h2 className="text-3xl font-serif italic text-white mb-10">與我聯絡</h2>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href={`mailto:${DATA.header.email}`} className="w-14 h-14 bg-[#3E3E34] rounded-full flex items-center justify-center text-white hover:bg-[#F0EBE0] hover:text-[#5A5A40] transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-14 h-14 bg-[#3E3E34] rounded-full flex items-center justify-center text-white hover:bg-[#F0EBE0] hover:text-[#5A5A40] transition-all duration-300 transform hover:-translate-y-1">
              <Phone size={20} strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-xs tracking-widest font-light opacity-50 uppercase">
            © {new Date().getFullYear()} {DATA.header.name.split(' ')[0]}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}


// 恋爱体质测试网站的JavaScript代码

// 测试题目数据
const questions = [
  {
    id: 1,
    text: "当你收到暗恋对象的消息时，你会怎么做？",
    options: [
      { text: "立刻秒回，甚至提前打好了草稿", value: "romantic", emoji: "💖" },
      { text: "等个5-10分钟再回，保持神秘感", value: "player", emoji: "😎" },
      { text: "先仔细分析消息内容，再谨慎回复", value: "pragmatic", emoji: "🧐" },
      { text: "假装没看到，等想起来的时候已经过了2小时", value: "casual", emoji: "😅" }
    ]
  },
  {
    id: 2,
    text: "约会时，对方迟到了30分钟，你会？",
    options: [
      { text: "担心对方出了什么事，急得像热锅上的蚂蚁", value: "romantic", emoji: "😰" },
      { text: "利用这段时间认识新朋友，扩大社交圈", value: "player", emoji: "🤗" },
      { text: "计算对方迟到的频率，考虑是否继续发展", value: "pragmatic", emoji: "📊" },
      { text: "反正自己也经常迟到，无所谓啦", value: "casual", emoji: "🤷‍♀️" }
    ]
  },
  {
    id: 3,
    text: "你认为爱情中最重要的是什么？",
    options: [
      { text: "感觉！心跳加速的感觉！", value: "romantic", emoji: "💓" },
      { text: "新鲜感和刺激感", value: "player", emoji: "✨" },
      { text: "共同的价值观和生活目标", value: "pragmatic", emoji: "🎯" },
      { text: "彼此舒适，不添麻烦", value: "casual", emoji: "😌" }
    ]
  },
  {
    id: 4,
    text: "看到朋友圈里有人秀恩爱，你会？",
    options: [
      { text: "羡慕得不行，立刻转发给对象暗示", value: "romantic", emoji: "😍" },
      { text: "评论区留言调侃，顺便展示自己的魅力", value: "player", emoji: "💬" },
      { text: "分析他们的恋爱模式，提取可借鉴的经验", value: "pragmatic", emoji: "📝" },
      { text: "快速划过，继续刷下一条", value: "casual", emoji: "📱" }
    ]
  },
  {
    id: 5,
    text: "如果你发现自己喜欢的人有对象了，你会？",
    options: [
      { text: "默默祝福，把这份爱埋在心底", value: "romantic", emoji: "💔" },
      { text: "公平竞争，只要没结婚就还有机会", value: "player", emoji: "⚔️" },
      { text: "理性分析，放弃这段没有结果的感情", value: "pragmatic", emoji: "🧠" },
      { text: "无所谓，反正也没那么喜欢", value: "casual", emoji: "🤷‍♂️" }
    ]
  },
  {
    id: 6,
    text: "恋爱中，你多久会说一次\"我爱你\"？",
    options: [
      { text: "每天都说，甚至一天说好几次", value: "romantic", emoji: "💕" },
      { text: "看心情，偶尔说一次保持神秘感", value: "player", emoji: "😘" },
      { text: "在特别的时刻说，让这句话更有意义", value: "pragmatic", emoji: "🎁" },
      { text: "很少说，觉得行动比言语更重要", value: "casual", emoji: "🙂" }
    ]
  },
  {
    id: 7,
    text: "你会为了爱情做出多大的牺牲？",
    options: [
      { text: "愿意放弃一切，爱情就是我的全部", value: "romantic", emoji: "💯" },
      { text: "适度牺牲，但不会失去自我", value: "player", emoji: "⚖️" },
      { text: "权衡利弊后再决定，不会盲目牺牲", value: "pragmatic", emoji: "⚖️" },
      { text: "不会牺牲太多，自己开心最重要", value: "casual", emoji: "🌈" }
    ]
  },
  {
    id: 8,
    text: "分手后，你会怎么做？",
    options: [
      { text: "沉浸在回忆中，久久不能自拔", value: "romantic", emoji: "😢" },
      { text: "立刻开始新恋情，忘记旧伤痛", value: "player", emoji: "🚀" },
      { text: "分析分手原因，总结经验教训", value: "pragmatic", emoji: "📈" },
      { text: "该吃吃该喝喝，日子照过不误", value: "casual", emoji: "🍕" }
    ]
  },
  {
    id: 9,
    text: "你理想中的约会方式是？",
    options: [
      { text: "浪漫的烛光晚餐，配上鲜花和礼物", value: "romantic", emoji: "🌹" },
      { text: "刺激的冒险活动，比如蹦极或密室逃脱", value: "player", emoji: "🎢" },
      { text: "有意义的活动，比如一起学习新技能", value: "pragmatic", emoji: "🧩" },
      { text: "宅在家里看电影，简单又舒服", value: "casual", emoji: "📺" }
    ]
  },
  {
    id: 10,
    text: "你如何看待异地恋？",
    options: [
      { text: "距离产生美，只要相爱就能坚持", value: "romantic", emoji: "💌" },
      { text: "不太能接受，需要经常见面", value: "player", emoji: "🚫" },
      { text: "可以尝试，但要制定明确的未来计划", value: "pragmatic", emoji: "🗓️" },
      { text: "随缘吧，没必要强求", value: "casual", emoji: "🌊" }
    ]
  },
  {
    id: 11,
    text: "在恋爱中，你会如何处理矛盾？",
    options: [
      { text: "主动道歉，即使不是自己的错，只想尽快和好", value: "romantic", emoji: "🙇‍♀️" },
      { text: "冷静一段时间，等对方先低头", value: "player", emoji: "⏰" },
      { text: "理性沟通，找出问题根源并一起解决", value: "pragmatic", emoji: "💬" },
      { text: "大事化小，小事化了，不想太较真", value: "casual", emoji: "🤝" }
    ]
  },
  {
    id: 12,
    text: "你会为了恋爱对象改变自己吗？",
    options: [
      { text: "愿意为对方改变一切，爱就是包容", value: "romantic", emoji: "💝" },
      { text: "可以适当改变，但要有底线", value: "player", emoji: "⚖️" },
      { text: "只改变不好的习惯，保持自我核心", value: "pragmatic", emoji: "📝" },
      { text: "不会刻意改变，做自己最重要", value: "casual", emoji: "🌟" }
    ]
  },
  {
    id: 13,
    text: "你如何看待婚前同居？",
    options: [
      { text: "期待与爱人共同生活的每一天", value: "romantic", emoji: "🏠" },
      { text: "可以尝试，但不会过早下结论", value: "player", emoji: "🔍" },
      { text: "认为是必要的，可以检验双方是否适合", value: "pragmatic", emoji: "✅" },
      { text: "无所谓，看情况而定", value: "casual", emoji: "🤷‍♂️" }
    ]
  },
  {
    id: 14,
    text: "你会在恋爱中规划未来吗？",
    options: [
      { text: "经常幻想和对方的未来，包括结婚生子", value: "romantic", emoji: "👨‍👩‍👧‍👦" },
      { text: "活在当下，不太考虑太远的未来", value: "player", emoji: "🌈" },
      { text: "会制定短期和长期计划，并一起努力", value: "pragmatic", emoji: "📅" },
      { text: "走一步看一步，顺其自然", value: "casual", emoji: "🚶" }
    ]
  },
  {
    id: 15,
    text: "你如何看待恋爱中的经济问题？",
    options: [
      { text: "愿意为对方花钱，爱就是付出", value: "romantic", emoji: "💰" },
      { text: "AA制比较好，保持独立", value: "player", emoji: "💳" },
      { text: "共同规划财务，为未来做准备", value: "pragmatic", emoji: "📊" },
      { text: "没那么在意，开心就好", value: "casual", emoji: "🎉" }
    ]
  },
  {
    id: 16,
    text: "你会在社交媒体上公开恋情吗？",
    options: [
      { text: "会，恨不得全世界都知道我们在一起", value: "romantic", emoji: "📱" },
      { text: "选择性公开，保持一些神秘感", value: "player", emoji: "🤫" },
      { text: "会，但不会过度秀恩爱", value: "pragmatic", emoji: "👍" },
      { text: "不太喜欢，觉得是私人的事", value: "casual", emoji: "🙈" }
    ]
  },
  {
    id: 17,
    text: "你如何处理恋爱中的异性朋友关系？",
    options: [
      { text: "会减少与异性朋友的往来，避免误会", value: "romantic", emoji: "🚫" },
      { text: "保持正常社交，但会注意分寸", value: "player", emoji: "👫" },
      { text: "与伴侣坦诚沟通，建立信任", value: "pragmatic", emoji: "💬" },
      { text: "觉得没必要刻意改变，信任最重要", value: "casual", emoji: "🤝" }
    ]
  },
  {
    id: 18,
    text: "你期待从恋爱中获得什么？",
    options: [
      { text: "无条件的爱和被爱", value: "romantic", emoji: "💖" },
      { text: "快乐和新鲜感", value: "player", emoji: "✨" },
      { text: "成长和共同进步", value: "pragmatic", emoji: "📈" },
      { text: "陪伴和舒适感", value: "casual", emoji: "🤗" }
    ]
  },
  {
    id: 19,
    text: "你如何看待闪恋闪婚？",
    options: [
      { text: "相信一见钟情，可以接受闪婚", value: "romantic", emoji: "💍" },
      { text: "恋爱可以闪，但结婚需要谨慎", value: "player", emoji: "⏳" },
      { text: "需要足够的了解才能做出决定", value: "pragmatic", emoji: "🧠" },
      { text: "不太关注形式，重要的是感觉", value: "casual", emoji: "❤️" }
    ]
  },
  {
    id: 20,
    text: "你认为恋爱的终极目标是什么？",
    options: [
      { text: "找到灵魂伴侣，相伴一生", value: "romantic", emoji: "👫" },
      { text: "享受恋爱的过程，不一定需要结果", value: "player", emoji: "🌸" },
      { text: "建立稳定的家庭，共同成长", value: "pragmatic", emoji: "🏠" },
      { text: "没有固定目标，开心就好", value: "casual", emoji: "🌈" }
    ]
  },
  {
    id: 21,
    text: "当伴侣犯错时，你会如何处理？",
    options: [
      { text: "选择宽容和理解，给对方改正的机会", value: "romantic", emoji: "🤗" },
      { text: "冷静分析错误的性质，再决定如何处理", value: "player", emoji: "🧐" },
      { text: "坦诚沟通，共同找出问题所在并解决", value: "pragmatic", emoji: "💬" },
      { text: "不太在意，每个人都会犯错", value: "casual", emoji: "🙂" }
    ]
  },
  {
    id: 22,
    text: "你如何看待恋爱中的仪式感？",
    options: [
      { text: "非常重要，能增进感情，制造美好回忆", value: "romantic", emoji: "🎉" },
      { text: "偶尔需要，但不必太刻意", value: "player", emoji: "✨" },
      { text: "有意义的仪式感才有价值，注重实质", value: "pragmatic", emoji: "🎯" },
      { text: "不太在意形式，自然就好", value: "casual", emoji: "🌿" }
    ]
  },
  {
    id: 23,
    text: "恋爱中遇到困难时，你会怎么做？",
    options: [
      { text: "相信爱情的力量，共同面对一切困难", value: "romantic", emoji: "💪" },
      { text: "灵活应对，寻找最佳解决方案", value: "player", emoji: "🔄" },
      { text: "制定详细计划，一步步解决问题", value: "pragmatic", emoji: "📋" },
      { text: "随遇而安，船到桥头自然直", value: "casual", emoji: "🛥️" }
    ]
  },
  {
    id: 24,
    text: "你如何看待恋爱中的付出与回报？",
    options: [
      { text: "愿意无条件付出，不计较回报", value: "romantic", emoji: "💝" },
      { text: "希望双方付出相对平衡", value: "player", emoji: "⚖️" },
      { text: "理性看待付出与回报，寻求长期平衡", value: "pragmatic", emoji: "📊" },
      { text: "不太在意这些，开心就好", value: "casual", emoji: "😊" }
    ]
  },
  {
    id: 25,
    text: "你认为恋爱关系应该如何发展？",
    options: [
      { text: "自然而然地发展，跟随内心的感觉", value: "romantic", emoji: "❤️" },
      { text: "保持一定的新鲜感和变化", value: "player", emoji: "🔄" },
      { text: "有明确的阶段和目标，稳步前进", value: "pragmatic", emoji: "📈" },
      { text: "不设限，自由发展", value: "casual", emoji: "🕊️" }
    ]
  }
];

// 结果数据
const results = [
  {
    type: "romantic",
    title: "浪漫主义者",
    description: "你是一个彻头彻尾的浪漫主义者！在爱情中，你相信感觉，追求心跳加速的瞬间。你愿意为爱情付出一切，相信真爱的力量。你的恋爱充满了激情和甜蜜，但有时候可能会过于理想化，忽略现实因素。",
    strengths: [
      "情感表达能力强，善于传递爱意",
      "富有想象力，能创造浪漫氛围",
      "对爱情充满热情，保持恋爱新鲜感",
      "重视情感连接，与伴侣心灵相通"
    ],
    challenges: [
      "可能过于理想化，忽视现实问题",
      "情绪波动较大，容易受感情影响",
      "对伴侣期待过高，容易失望",
      "在冲突中可能不够理性"
    ],
    loveTips: [
      "保持你的浪漫特质，但也要学会理性思考",
      "给彼此一些个人空间，避免过度依赖",
      "在表达情感的同时，也要倾听对方的需求",
      "学会接受爱情中的不完美，完美主义会让你错过真实的幸福"
    ],
    compatibility: {
      high: ["romantic", "pragmatic"],
      medium: ["player"],
      low: ["casual"]
    },
    famousCouples: [
      "罗密欧与朱丽叶（虽然结局悲惨，但爱得轰轰烈烈）",
      "周杰伦与昆凌（浪漫的跨国婚姻）",
      "黄磊与孙莉（从校园到婚纱的浪漫爱情）"
    ],
    improvementPlan: [
      "每周安排一次理性沟通时间，讨论关系中的实际问题",
      "学习情绪管理技巧，避免情绪起伏过大",
      "培养个人兴趣爱好，保持独立人格",
      "设定现实的恋爱目标，避免过度幻想"
    ],
    image: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c89e8cfaf7434e488b84d2ae5edfb17e~tplv-a9rns2rl98-image.image?rcl=2025122321510948D6F86564CF5F75CD98&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1769089896&x-signature=OIoXsFxgXKOA6KFdE41Gh0U7R28%3D"
  },
  {
    type: "player",
    title: "恋爱玩家",
    description: "你是爱情游戏中的高手！你享受恋爱的过程，善于保持神秘感和吸引力。你懂得如何在恋爱中保持主动，不会轻易陷入一段感情。你的恋爱充满了刺激和新鲜感，但有时候可能会给人不够认真的印象。",
    strengths: [
      "魅力四射，善于社交和表达",
      "恋爱充满乐趣和新鲜感",
      "独立自主，不会过度依赖对方",
      "适应能力强，能应对各种恋爱场景"
    ],
    challenges: [
      "可能给人不够真诚的感觉",
      "难以维持长期稳定的关系",
      "害怕承诺，回避深入的情感连接",
      "在冲突中可能选择逃避而非面对"
    ],
    loveTips: [
      "尝试打开心扉，允许自己真正投入一段感情",
      "学会区分游戏心态和真正的感情",
      "在享受恋爱过程的同时，也关注对方的感受",
      "练习表达真实情感，不要总是保持表面的完美"
    ],
    compatibility: {
      high: ["player", "casual"],
      medium: ["romantic"],
      low: ["pragmatic"]
    },
    famousCouples: [
      "谢霆锋与张柏芝（轰轰烈烈的爱情，最终和平分手）",
      "杨幂与刘恺威（因戏生情，曾经甜蜜）",
      "卡戴珊家族成员（恋爱风格多样，追求个人幸福）"
    ],
    improvementPlan: [
      "尝试一段至少3个月的稳定关系，练习深度情感连接",
      "学习倾听和共情技巧，提高情感敏感度",
      "面对冲突时，尝试沟通解决而非逃避",
      "定期反思自己的恋爱模式，识别不健康的行为模式"
    ],
    image: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/ac1b26c8465e46eeb55afce5c6a60123~tplv-a9rns2rl98-image.image?rcl=2025122321510948D6F86564CF5F75CD98&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1769089909&x-signature=WMzRWhxlYo%2Fvi5u6jpJzTmYA%2BK0%3D"
  },
  {
    type: "pragmatic",
    title: "实用主义者",
    description: "你是一个理性的实用主义者！在爱情中，你注重实际，喜欢用理性的思维分析问题。你相信爱情需要经营，会为了长远的未来做打算。你的恋爱稳定而可靠，但有时候可能会缺少一些激情和惊喜。",
    strengths: [
      "理性可靠，善于解决恋爱中的问题",
      "为长远关系做规划，建立稳定基础",
      "情绪稳定，能在冲突中保持冷静",
      "重视责任和承诺，是可靠的伴侣"
    ],
    challenges: [
      "可能过于理性，缺乏浪漫和激情",
      "对感情表达较为克制，显得不够热情",
      "可能给伴侣压力，过度关注未来规划",
      "在恋爱初期可能显得过于严肃"
    ],
    loveTips: [
      "适当放松一下，偶尔尝试一些浪漫的小惊喜",
      "学习表达情感，不要总是用理性分析代替感受",
      "在规划未来的同时，也要享受当下的美好",
      "给关系一些自由发展的空间，不要过度控制"
    ],
    compatibility: {
      high: ["pragmatic", "romantic"],
      medium: ["casual"],
      low: ["player"]
    },
    famousCouples: [
      "比尔·盖茨与梅琳达（事业伙伴式的婚姻，共同成长）",
      "奥巴马与米歇尔（互相支持的 power couple）",
      "钱钟书与杨绛（相濡以沫的学术伉俪）"
    ],
    improvementPlan: [
      "每周安排一次不设目标的约会，纯粹享受彼此陪伴",
      "学习一些简单的浪漫技巧，如写情书、准备小礼物",
      "练习表达情感，每天对伴侣说一句真诚的赞美",
      "培养幽默感，学会在严肃中寻找乐趣"
    ],
    image: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/ac1b26c8465e46eeb55afce5c6a60123~tplv-a9rns2rl98-image.image?rcl=2025122321510948D6F86564CF5F75CD98&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1769089909&x-signature=WMzRWhxlYo%2Fvi5u6jpJzTmYA%2BK0%3D"
  },
  {
    type: "casual",
    title: "随性恋爱者",
    description: "你是一个随性的恋爱者！在爱情中，你追求自然和舒适，不喜欢给彼此太多压力。你相信爱情应该是轻松愉快的，不应该成为负担。你的恋爱自由而轻松，但有时候可能会缺乏深度和承诺。",
    strengths: [
      "心态轻松，不会给对方压力",
      "恋爱氛围愉快，注重当下体验",
      "尊重个人空间，不会过度干涉对方",
      "适应性强，能接受关系的变化"
    ],
    challenges: [
      "可能缺乏深度情感连接",
      "难以维持长期稳定的关系",
      "在面对问题时可能选择回避",
      "对未来规划不足，可能影响关系发展"
    ],
    loveTips: [
      "尝试在适当的时候表达你的真实感受",
      "给关系一些发展的空间，不要总是保持距离",
      "学习面对问题而不是回避，培养解决冲突的能力",
      "在保持轻松的同时，也关注关系的成长"
    ],
    compatibility: {
      high: ["casual", "player"],
      medium: ["pragmatic"],
      low: ["romantic"]
    },
    famousCouples: [
      "王菲与谢霆锋（分分合合，保持自我）",
      "周迅的恋爱风格（每段感情都认真投入，但不强求结果）",
      "大S与汪小菲（从闪婚到和平离婚，尊重彼此选择）"
    ],
    improvementPlan: [
      "每周安排一次深度交流，分享内心想法和感受",
      "学习情感表达技巧，提高情感连接能力",
      "共同设定一些小目标，培养合作意识",
      "在面对冲突时，尝试沟通解决而非回避"
    ],
    image: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/c89e8cfaf7434e488b84d2ae5edfb17e~tplv-a9rns2rl98-image.image?rcl=2025122321510948D6F86564CF5F75CD98&rk3s=8e244e95&rrcfp=f06b921b&x-expires=1769089896&x-signature=OIoXsFxgXKOA6KFdE41Gh0U7R28%3D"
  }
];

// 恋爱人格类型数据
const lovePersonalityTypes = [
  {
    type: "lovePoet",
    title: "恋爱诗人",
    description: "你是爱情中的诗人，善于用细腻的情感和浪漫的方式表达爱意。你相信爱情需要用心经营，注重仪式感和情感交流。",
    characteristics: [
      "情感丰富，善于表达爱意",
      "注重细节和仪式感",
      "喜欢用文字、礼物等方式传递情感",
      "对爱情充满美好幻想"
    ],
    matchingTraits: { emotion: 80, communication: 75 },
    keywords: ["浪漫", "细腻", "感性", "诗意"],
    icon: "💝",
    color: "#FF6B8B"
  },
  {
    type: "loveDetective",
    title: "恋爱侦探",
    description: "你在爱情中保持理性和清醒，善于观察和分析。你不会轻易陷入爱河，但一旦投入就会认真对待，注重彼此的契合度。",
    characteristics: [
      "理性思考，不易冲动",
      "善于观察细节，分析关系",
      "重视三观契合和性格匹配",
      "在爱情中保持一定的清醒"
    ],
    matchingTraits: { rationality: 85, commitment: 70 },
    keywords: ["理性", "敏锐", "谨慎", "深度"],
    icon: "🔍",
    color: "#4A90E2"
  },
  {
    type: "loveVeteran",
    title: "恋爱老干部",
    description: "你在爱情中成熟稳重，注重实际和长远。你相信爱情需要经营和责任，会为了未来共同努力，是可靠的伴侣。",
    characteristics: [
      "成熟稳重，责任感强",
      "注重实际，规划未来",
      "体贴照顾，关心生活细节",
      "重视家庭和稳定"
    ],
    matchingTraits: { rationality: 75, commitment: 85 },
    keywords: ["稳重", "可靠", "责任", "实际"],
    icon: "👨‍💼",
    color: "#50C878"
  },
  {
    type: "loveSunshine",
    title: "恋爱小太阳",
    description: "你是爱情中的小太阳，充满活力和正能量。你善于营造轻松愉快的氛围，让恋爱充满欢乐和惊喜。",
    characteristics: [
      "性格开朗，充满活力",
      "善于制造惊喜和欢乐",
      "乐观积极，感染力强",
      "喜欢尝试新鲜事物"
    ],
    matchingTraits: { emotion: 70, communication: 80 },
    keywords: ["开朗", "活力", "乐观", "有趣"],
    icon: "☀️",
    color: "#FFD700"
  },
  {
    type: "loveFreeSpirit",
    title: "恋爱自由人",
    description: "你在爱情中追求自由和平等，不喜欢被束缚。你相信爱情应该是轻松的，双方都应该保持独立的人格和空间。",
    characteristics: [
      "重视个人空间和独立性",
      "追求平等的伴侣关系",
      "不喜欢被规则和传统束缚",
      "注重自我成长和发展"
    ],
    matchingTraits: { independence: 85, commitment: 40 },
    keywords: ["独立", "自由", "平等", "自我"],
    icon: "🕊️",
    color: "#9370DB"
  },
  {
    type: "lovePragmatist",
    title: "恋爱实用派",
    description: "你是爱情中的实用主义者，注重效率和结果。你相信爱情需要理性经营，会用实际行动表达爱意，解决问题。",
    characteristics: [
      "注重效率，行动派",
      "善于解决实际问题",
      "用行动代替甜言蜜语",
      "重视关系中的实际价值"
    ],
    matchingTraits: { rationality: 80, commitment: 75 },
    keywords: ["实用", "效率", "行动", "解决"],
    icon: "🛠️",
    color: "#20B2AA"
  },
  {
    type: "loveAdventurer",
    title: "恋爱冒险家",
    description: "你在爱情中喜欢挑战和刺激，追求新鲜感和变化。你相信爱情需要不断探索和成长，拒绝平淡和重复。",
    characteristics: [
      "喜欢尝试新鲜事物",
      "追求刺激和变化",
      "充满好奇心和探索欲",
      "不害怕挑战和困难"
    ],
    matchingTraits: { independence: 75, emotion: 70 },
    keywords: ["冒险", "刺激", "新鲜", "挑战"],
    icon: "🧭",
    color: "#FF4500"
  },
  {
    type: "loveHealer",
    title: "恋爱治愈师",
    description: "你是爱情中的治愈师，善于倾听和理解。你温柔体贴，能够给伴侣带来安慰和力量，是情感上的支持者。",
    characteristics: [
      "善于倾听和理解",
      "温柔体贴，关心他人",
      "情感细腻，同理心强",
      "能够给予情感支持"
    ],
    matchingTraits: { communication: 85, emotion: 75 },
    keywords: ["治愈", "体贴", "倾听", "温暖"],
    icon: "💙",
    color: "#87CEFA"
  }
];
let currentQuestionIndex = 0;

// 用户的选择
const userSelections = [];

// DOM元素
const homePage = document.getElementById('home-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startTestBtn = document.getElementById('start-test-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shareBtn = document.getElementById('share-btn');
const retakeBtn = document.getElementById('retake-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultDetails = document.getElementById('result-details');
const resultImageContainer = document.getElementById('result-image-container');

// 开始测试按钮点击事件
startTestBtn.addEventListener('click', () => {
  homePage.classList.remove('active');
  testPage.classList.add('active');
  showQuestion(currentQuestionIndex);
});

// 上一题按钮点击事件
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateNavigationButtons();
    updateProgress();
  }
});

// 下一题按钮点击事件
nextBtn.addEventListener('click', () => {
  console.log('Next button clicked');
  console.log('Current question index:', currentQuestionIndex);
  console.log('User selections:', userSelections);
  
  // 检查是否选择了选项
  if (!userSelections[currentQuestionIndex]) {
    alert('请选择一个选项！');
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateNavigationButtons();
    updateProgress();
  } else {
    console.log('Calculating result...');
    // 计算结果并显示结果页面
    const result = calculateResult();
    console.log('Result calculated:', result);
    showResult(result);
    testPage.classList.remove('active');
    resultPage.classList.add('active');
    console.log('Switched to result page');
  }
});

// 分享按钮点击事件
shareBtn.addEventListener('click', () => {
  const resultType = resultTitle.textContent;
  const shareText = `我在恋爱体质测试中获得了"${resultType}"的称号！快来测试看看你的恋爱体质是什么吧！`;
  
  // 模拟分享功能
  if (navigator.share) {
    navigator.share({
      title: '恋爱体质测试',
      text: shareText,
      url: window.location.href
    });
  } else {
    // 复制到剪贴板
    navigator.clipboard.writeText(shareText).then(() => {
      alert('结果已复制到剪贴板，可以粘贴分享给朋友啦！');
    });
  }
});

// 重新测试按钮点击事件
retakeBtn.addEventListener('click', () => {
  // 重置测试
  currentQuestionIndex = 0;
  userSelections.length = 0;
  resultPage.classList.remove('active');
  homePage.classList.add('active');
  updateNavigationButtons();
  updateProgress();
});

// 显示当前问题
function showQuestion(index) {
  const question = questions[index];
  questionText.textContent = question.text;
  optionsContainer.innerHTML = '';

  question.options.forEach((option, i) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    if (userSelections[index] === option.value) {
      optionElement.classList.add('selected');
    }
    
    optionElement.innerHTML = `
      <span class="option-emoji">${option.emoji}</span>
      <span class="option-text">${option.text}</span>
    `;
    
    optionElement.addEventListener('click', () => {
      // 移除其他选项的选中状态
      document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // 添加当前选项的选中状态
      optionElement.classList.add('selected');
      
      // 记录用户的选择
      userSelections[index] = option.value;
    });
    
    optionsContainer.appendChild(optionElement);
  });

  // 添加淡入动画
  questionText.classList.add('fade-in');
  optionsContainer.classList.add('fade-in');
  
  // 移除动画类，以便下次使用
  setTimeout(() => {
    questionText.classList.remove('fade-in');
    optionsContainer.classList.remove('fade-in');
  }, 500);
}

// 更新导航按钮状态
function updateNavigationButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '查看结果' : '下一题';
}

// 更新进度条
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

// 计算测试结果
function calculateResult() {
  console.log('Inside calculateResult function');
  const counts = {
    romantic: 0,
    player: 0,
    pragmatic: 0,
    casual: 0
  };

  // 计算每种类型的选择次数
  userSelections.forEach(selection => {
    counts[selection]++;
  });

  console.log('Type counts:', counts);

  // 找出选择次数最多的类型
  let maxCount = 0;
  let resultType = 'casual'; // 默认结果

  for (const type in counts) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      resultType = type;
    }
  }

  console.log('Selected result type:', resultType, 'with count:', maxCount);

  // 获取基础结果
  const baseResult = results.find(result => result.type === resultType);
  console.log('Base result found:', baseResult ? 'Yes' : 'No');
  
  if (!baseResult) {
    console.error('Base result not found for type:', resultType);
    // 返回一个默认结果
    return {
      type: 'casual',
      title: '随性恋爱者',
      description: '测试出现问题，请重新开始。',
      stats: { emotion: 50, rationality: 50, commitment: 50, independence: 50, communication: 50, total: 50 },
      attachmentType: {
        type: '安全型依恋',
        description: '测试出现问题，请重新开始。',
        characteristics: ['测试出现问题，请重新开始。'],
        tips: ['请重新测试'],
        anxietyScore: 50,
        avoidanceScore: 50
      },
      lovePersonalityType: {
        type: 'loveSunshine',
        title: '恋爱小太阳',
        description: '测试出现问题，请重新开始。',
        characteristics: ['测试出现问题，请重新开始。'],
        keywords: ['测试', '问题'],
        icon: '☀️',
        color: '#FFD700'
      }
    };
  }
  
  // 计算每个维度的真实分数（基于用户的实际选择）
  const stats = calculateRealScores();
  console.log('Stats calculated:', stats);
  
  // 计算依恋类型
  const attachmentType = calculateAttachmentType();
  console.log('Attachment type calculated:', attachmentType.type);
  
  // 计算恋爱人格类型
  const lovePersonalityType = calculateLovePersonalityType(stats);
  console.log('Love personality type calculated:', lovePersonalityType ? lovePersonalityType.title : 'None');
  
  if (!lovePersonalityType) {
    console.error('Love personality type not calculated');
    // 使用默认的恋爱人格类型
    lovePersonalityType = lovePersonalityTypes[0]; // 使用第一个类型作为默认
  }
  
  // 创建包含真实分数和依恋类型的结果对象
  const resultWithRealScores = {
    ...baseResult,
    stats: stats,
    attachmentType: attachmentType,
    lovePersonalityType: lovePersonalityType
  };

  console.log('Final result object created');
  return resultWithRealScores;
}

// 计算每个维度的真实分数
function calculateRealScores() {
  // 定义每个问题对应的维度权重
  const questionDimensions = [
    { emotion: 0.8, rationality: 0.2, commitment: 0.5, independence: 0.3, communication: 0.7 }, // 问题1
    { emotion: 0.7, rationality: 0.5, commitment: 0.6, independence: 0.4, communication: 0.3 }, // 问题2
    { emotion: 0.9, rationality: 0.7, commitment: 0.8, independence: 0.2, communication: 0.4 }, // 问题3
    { emotion: 0.6, rationality: 0.4, commitment: 0.3, independence: 0.5, communication: 0.8 }, // 问题4
    { emotion: 0.8, rationality: 0.6, commitment: 0.7, independence: 0.3, communication: 0.2 }, // 问题5
    { emotion: 0.9, rationality: 0.3, commitment: 0.8, independence: 0.2, communication: 0.7 }, // 问题6
    { emotion: 0.8, rationality: 0.5, commitment: 0.9, independence: 0.4, communication: 0.3 }, // 问题7
    { emotion: 0.7, rationality: 0.6, commitment: 0.8, independence: 0.5, communication: 0.4 }, // 问题8
    { emotion: 0.9, rationality: 0.4, commitment: 0.6, independence: 0.3, communication: 0.5 }, // 问题9
    { emotion: 0.8, rationality: 0.6, commitment: 0.9, independence: 0.4, communication: 0.5 }, // 问题10
    { emotion: 0.6, rationality: 0.8, commitment: 0.7, independence: 0.3, communication: 0.9 }, // 问题11
    { emotion: 0.7, rationality: 0.5, commitment: 0.8, independence: 0.7, communication: 0.4 }, // 问题12
    { emotion: 0.6, rationality: 0.8, commitment: 0.9, independence: 0.5, communication: 0.3 }, // 问题13
    { emotion: 0.5, rationality: 0.9, commitment: 0.8, independence: 0.4, communication: 0.6 }, // 问题14
    { emotion: 0.4, rationality: 0.8, commitment: 0.7, independence: 0.6, communication: 0.5 }, // 问题15
    { emotion: 0.7, rationality: 0.5, commitment: 0.6, independence: 0.4, communication: 0.8 }, // 问题16
    { emotion: 0.6, rationality: 0.7, commitment: 0.8, independence: 0.5, communication: 0.9 }, // 问题17
    { emotion: 0.9, rationality: 0.4, commitment: 0.7, independence: 0.3, communication: 0.6 }, // 问题18
    { emotion: 0.6, rationality: 0.8, commitment: 0.7, independence: 0.4, communication: 0.9 }, // 问题19
    { emotion: 0.9, rationality: 0.7, commitment: 0.8, independence: 0.5, communication: 0.6 }, // 问题20
    { emotion: 0.8, rationality: 0.7, commitment: 0.9, independence: 0.3, communication: 0.8 }, // 问题21
    { emotion: 0.9, rationality: 0.5, commitment: 0.7, independence: 0.4, communication: 0.6 }, // 问题22
    { emotion: 0.7, rationality: 0.8, commitment: 0.9, independence: 0.5, communication: 0.7 }, // 问题23
    { emotion: 0.8, rationality: 0.7, commitment: 0.8, independence: 0.4, communication: 0.6 }, // 问题24
    { emotion: 0.9, rationality: 0.6, commitment: 0.7, independence: 0.5, communication: 0.5 }  // 问题25
  ];

  // 定义每种类型在各维度上的基础分数
  const typeBaseScores = {
    romantic:    { emotion: 90, rationality: 40, commitment: 85, independence: 35, communication: 70 },
    player:      { emotion: 55, rationality: 65, commitment: 30, independence: 90, communication: 80 },
    pragmatic:   { emotion: 45, rationality: 95, commitment: 90, independence: 70, communication: 75 },
    casual:      { emotion: 60, rationality: 50, commitment: 40, independence: 85, communication: 55 }
  };

  // 初始化各维度的得分
  let scores = {
    emotion: 0,
    rationality: 0,
    commitment: 0,
    independence: 0,
    communication: 0
  };

  // 记录每个维度的权重总和，用于后续归一化
  let totalWeights = {
    emotion: 0,
    rationality: 0,
    commitment: 0,
    independence: 0,
    communication: 0
  };

  // 根据用户的选择计算每个维度的得分
  userSelections.forEach((selection, index) => {
    const baseScores = typeBaseScores[selection];
    const weights = questionDimensions[index];
    
    // 累加每个维度的加权分数
    for (const dimension in scores) {
      scores[dimension] += baseScores[dimension] * weights[dimension];
      totalWeights[dimension] += weights[dimension];
    }
  });

  // 归一化分数，确保在0-100之间，并根据权重进行调整
  for (const dimension in scores) {
    if (totalWeights[dimension] > 0) {
      scores[dimension] = Math.round((scores[dimension] / totalWeights[dimension]) * 1.1); // 乘以1.1是为了让分数分布更合理
      scores[dimension] = Math.min(100, Math.max(0, scores[dimension])); // 确保分数在0-100之间
    }
  }

  // 计算总分数（所有维度的加权平均分，确保总分在0-100之间）
  const totalScore = Math.round(
    (scores.emotion * 0.25 + 
     scores.rationality * 0.2 + 
     scores.commitment * 0.25 + 
     scores.independence * 0.15 + 
     scores.communication * 0.15)
  );
  scores.total = Math.min(100, Math.max(0, totalScore));

  return scores;
}

// 显示测试结果
function showResult(result) {
  console.log('Inside showResult function');
  console.log('Result object:', result);
  
  if (!result) {
    console.error('Result object is null or undefined');
    alert('测试结果加载失败，请重新测试！');
    return;
  }
  
  try {
    // 清空所有结果容器
    resultTitle.textContent = '';
    resultDescription.textContent = '';
    resultDetails.innerHTML = '';
    resultImageContainer.innerHTML = '';
    
    // 显示基本结果信息
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // 创建专业的结果详情页面
    const professionalDetails = document.createElement('div');
    professionalDetails.className = 'professional-result-details';
    
    // 添加总分展示
    professionalDetails.innerHTML = `
      <div class="total-score-section mb-8 text-center">
        <div class="total-score-circle mx-auto">
          <div class="score-number">${result.stats.total}</div>
          <div class="score-label">总分</div>
          <div class="score-grade">${getScoreGrade(result.stats.total)}</div>
        </div>
        <p class="score-interpretation mt-4 text-gray-600">${getScoreInterpretation(result.stats.total)}</p>
      </div>
      
      <!-- 恋爱特质雷达图 -->
      <div class="chart-section mb-8">
        <h4 class="text-xl font-bold mb-4 text-center text-purple-600">恋爱特质分析</h4>
        <div class="chart-container">
          <canvas id="personality-radar-chart" width="400" height="300"></canvas>
        </div>
      </div>
      
      <!-- 详细得分表格 -->
      <div class="scores-section mb-8">
        <h4 class="text-xl font-bold mb-4 text-center text-pink-600">详细得分分析</h4>
        <div class="scores-table-container">
          <table class="scores-table w-full">
            <thead>
              <tr class="bg-purple-100">
                <th class="px-4 py-2 text-left">特质维度</th>
                <th class="px-4 py-2 text-center">得分</th>
                <th class="px-4 py-2 text-left">等级</th>
                <th class="px-4 py-2 text-left">解释</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-3 font-medium">情感表达</td>
                <td class="px-4 py-3 text-center">
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${result.stats.emotion}%"></div>
                    <span class="score-value">${result.stats.emotion}%</span>
                  </div>
                </td>
                <td class="px-4 py-3">${getScoreGrade(result.stats.emotion)}</td>
                <td class="px-4 py-3 text-sm">${getDimensionInterpretation('emotion', result.stats.emotion)}</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-3 font-medium">理性思考</td>
                <td class="px-4 py-3 text-center">
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${result.stats.rationality}%"></div>
                    <span class="score-value">${result.stats.rationality}%</span>
                  </div>
                </td>
                <td class="px-4 py-3">${getScoreGrade(result.stats.rationality)}</td>
                <td class="px-4 py-3 text-sm">${getDimensionInterpretation('rationality', result.stats.rationality)}</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-3 font-medium">承诺度</td>
                <td class="px-4 py-3 text-center">
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${result.stats.commitment}%"></div>
                    <span class="score-value">${result.stats.commitment}%</span>
                  </div>
                </td>
                <td class="px-4 py-3">${getScoreGrade(result.stats.commitment)}</td>
                <td class="px-4 py-3 text-sm">${getDimensionInterpretation('commitment', result.stats.commitment)}</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-3 font-medium">独立性</td>
                <td class="px-4 py-3 text-center">
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${result.stats.independence}%"></div>
                    <span class="score-value">${result.stats.independence}%</span>
                  </div>
                </td>
                <td class="px-4 py-3">${getScoreGrade(result.stats.independence)}</td>
                <td class="px-4 py-3 text-sm">${getDimensionInterpretation('independence', result.stats.independence)}</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-medium">沟通能力</td>
                <td class="px-4 py-3 text-center">
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${result.stats.communication}%"></div>
                    <span class="score-value">${result.stats.communication}%</span>
                  </div>
                </td>
                <td class="px-4 py-3">${getScoreGrade(result.stats.communication)}</td>
                <td class="px-4 py-3 text-sm">${getDimensionInterpretation('communication', result.stats.communication)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 依恋类型分析 -->
      <div class="attachment-section mb-8">
        <h4 class="text-xl font-bold mb-4 text-center text-blue-600">依恋人格分析</h4>
        <div class="attachment-card">
          <div class="attachment-header flex items-center justify-between mb-4">
            <div>
              <h5 class="text-lg font-bold">${result.attachmentType.type}</h5>
              <p class="text-sm text-gray-600">${result.attachmentType.description}</p>
            </div>
            <div class="attachment-scores">
              <div class="score-item">
                <span class="score-label">焦虑:</span>
                <span class="score-value">${result.attachmentType.anxietyScore}%</span>
              </div>
              <div class="score-item">
                <span class="score-label">回避:</span>
                <span class="score-value">${result.attachmentType.avoidanceScore}%</span>
              </div>
            </div>
          </div>
          <div class="attachment-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 class="font-bold text-purple-600 mb-2">主要特征</h6>
              <ul class="list-disc pl-5 text-sm">
                ${result.attachmentType.characteristics.map(char => `<li>${char}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h6 class="font-bold text-blue-600 mb-2">改善建议</h6>
              <ul class="list-disc pl-5 text-sm">
                ${result.attachmentType.tips.map(tip => `<li>${tip}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 恋爱人格分析 -->
      ${result.lovePersonalityType ? `
      <div class="personality-section mb-8">
        <h4 class="text-xl font-bold mb-4 text-center text-green-600">恋爱人格分析</h4>
        <div class="personality-card" style="border-left: 4px solid ${result.lovePersonalityType.color};">
          <div class="personality-header flex items-center mb-4">
            <div class="personality-icon text-4xl mr-4">${result.lovePersonalityType.icon}</div>
            <div>
              <h5 class="text-lg font-bold" style="color: ${result.lovePersonalityType.color};">${result.lovePersonalityType.title}</h5>
              <div class="personality-keywords flex flex-wrap gap-2 mt-2">
                ${result.lovePersonalityType.keywords.map(keyword => `<span class="keyword-badge" style="background-color: ${result.lovePersonalityType.color}22; color: ${result.lovePersonalityType.color};">${keyword}</span>`).join('')}
              </div>
            </div>
          </div>
          <p class="personality-description mb-4">${result.lovePersonalityType.description}</p>
          <div class="personality-characteristics">
            <h6 class="font-bold mb-2">核心特质</h6>
            <ul class="list-disc pl-5">
              ${result.lovePersonalityType.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      ` : ''}
      
      <!-- 恋爱建议 -->
      <div class="advice-section mb-8">
        <h4 class="text-xl font-bold mb-4 text-center text-yellow-600">专业恋爱建议</h4>
        <div class="advice-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="advice-card strengths">
            <h5 class="font-bold text-green-600 mb-3 flex items-center">
              <i class="fas fa-check-circle mr-2"></i>恋爱优势
            </h5>
            <ul class="list-disc pl-5 space-y-2">
              ${result.strengths.slice(0, 4).map(strength => `<li>${strength}</li>`).join('')}
            </ul>
          </div>
          <div class="advice-card tips">
            <h5 class="font-bold text-blue-600 mb-3 flex items-center">
              <i class="fas fa-lightbulb mr-2"></i>提升建议
            </h5>
            <ul class="list-disc pl-5 space-y-2">
              ${result.loveTips.slice(0, 4).map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 匹配度分析 -->
      <div class="compatibility-section">
        <h4 class="text-xl font-bold mb-4 text-center text-red-600">恋爱类型匹配度</h4>
        <div class="compatibility-container">
          ${getCompatibilityAnalysis(result.compatibility)}
        </div>
      </div>
    `;
    
    resultDetails.appendChild(professionalDetails);
    
    // 创建雷达图
    setTimeout(() => {
      createRadarChart(result.stats);
    }, 100);
    
    console.log('Professional result page rendered successfully');
  } catch (error) {
    console.error('Error in showResult function:', error);
    resultTitle.textContent = '出错了！';
    resultDescription.textContent = '抱歉，显示结果时出现错误。请刷新页面重试。';
    resultDetails.innerHTML = `<p class="text-red-500 text-center py-8">错误信息: ${error.message}</p>`;
  }
}

// 创建雷达图
function createRadarChart(stats) {
  const ctx = document.getElementById('personality-radar-chart').getContext('2d');
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['情感表达', '理性思考', '承诺度', '独立性', '沟通能力'],
      datasets: [{
        label: '恋爱特质得分',
        data: [stats.emotion, stats.rationality, stats.commitment, stats.independence, stats.communication],
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        borderColor: 'rgb(147, 51, 234)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(147, 51, 234)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(147, 51, 234)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// 获取分数等级
function getScoreGrade(score) {
  if (score >= 90) return '优秀';
  if (score >= 80) return '良好';
  if (score >= 70) return '中等';
  if (score >= 60) return '及格';
  return '需提升';
}

// 获取分数解释
function getScoreInterpretation(score) {
  if (score >= 90) return '你拥有非常成熟的恋爱观念和技巧，在爱情中能够很好地平衡自己和伴侣的需求。';
  if (score >= 80) return '你的恋爱能力很强，能够建立健康、稳定的恋爱关系。';
  if (score >= 70) return '你有不错的恋爱基础，在某些方面还有提升空间。';
  if (score >= 60) return '你的恋爱观念基本合理，但需要更多的学习和实践。';
  return '建议你多学习恋爱知识，提升自己的情感管理和沟通能力。';
}

// 获取维度解释
function getDimensionInterpretation(dimension, score) {
  const interpretations = {
    emotion: {
      high: '你善于表达情感，能够让伴侣感受到你的爱和关心。',
      medium: '你在情感表达上比较平衡，既不会过度也不会不足。',
      low: '你可能不太善于表达情感，建议多练习情感沟通。'
    },
    rationality: {
      high: '你在恋爱中保持理性，能够做出明智的决策。',
      medium: '你能够在理性和感性之间找到平衡。',
      low: '你可能过于感性，在重要决策时需要更多理性思考。'
    },
    commitment: {
      high: '你对恋爱关系非常认真，愿意为长期关系付出努力。',
      medium: '你对关系有一定的承诺，但也会考虑现实因素。',
      low: '你可能对长期承诺有所保留，更注重当下的感受。'
    },
    independence: {
      high: '你在恋爱中保持独立，有自己的生活和兴趣。',
      medium: '你能够平衡个人空间和亲密关系。',
      low: '你可能在恋爱中过于依赖对方，建议培养更多个人兴趣。'
    },
    communication: {
      high: '你善于沟通，能够清晰地表达自己的想法和感受。',
      medium: '你的沟通能力不错，能够处理大多数恋爱中的问题。',
      low: '你在沟通方面还有提升空间，建议学习更多沟通技巧。'
    }
  };
  
  if (score >= 80) return interpretations[dimension].high;
  if (score >= 60) return interpretations[dimension].medium;
  return interpretations[dimension].low;
}

// 获取匹配度分析
function getCompatibilityAnalysis(compatibility) {
  const typeNames = {
    romantic: '浪漫主义者',
    player: '恋爱玩家',
    pragmatic: '实用主义者',
    casual: '随性恋爱者'
  };
  
  let html = '';
  
  // 高匹配度
  if (compatibility.high.length > 0) {
    html += `
      <div class="compatibility-group mb-4">
        <h5 class="font-bold text-green-600 mb-2">❤️ 高匹配度 (80-100%)</h5>
        <div class="compatibility-items">
          ${compatibility.high.map(type => `
            <div class="compatibility-item">
              <span class="type-name">${typeNames[type]}</span>
              <div class="compatibility-bar">
                <div class="compatibility-fill high" style="width: 90%"></div>
              </div>
              <span class="compatibility-score">90%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // 中等匹配度
  if (compatibility.medium.length > 0) {
    html += `
      <div class="compatibility-group mb-4">
        <h5 class="font-bold text-yellow-600 mb-2">💛 中等匹配度 (60-79%)</h5>
        <div class="compatibility-items">
          ${compatibility.medium.map(type => `
            <div class="compatibility-item">
              <span class="type-name">${typeNames[type]}</span>
              <div class="compatibility-bar">
                <div class="compatibility-fill medium" style="width: 65%"></div>
              </div>
              <span class="compatibility-score">65%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // 低匹配度
  if (compatibility.low.length > 0) {
    html += `
      <div class="compatibility-group">
        <h5 class="font-bold text-red-600 mb-2">💔 低匹配度 (0-59%)</h5>
        <div class="compatibility-items">
          ${compatibility.low.map(type => `
            <div class="compatibility-item">
              <span class="type-name">${typeNames[type]}</span>
              <div class="compatibility-bar">
                <div class="compatibility-fill low" style="width: 40%"></div>
              </div>
              <span class="compatibility-score">40%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  return html;
}

// 创建恋爱特质雷达图
function createPersonalityChart(stats) {
  const ctx = document.getElementById('personality-chart').getContext('2d');
  
  // 确保Chart.js已加载
  if (typeof Chart === 'undefined') {
    // 如果Chart.js未加载，动态加载它
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      renderChart(ctx, stats);
    };
    document.head.appendChild(script);
  } else {
    renderChart(ctx, stats);
  }
}

// 渲染雷达图
function renderChart(ctx, stats) {
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['情感表达', '理性思考', '承诺度', '独立性', '沟通能力'],
      datasets: [{
        label: '恋爱特质',
        data: [stats.emotion, stats.rationality, stats.commitment, stats.independence, stats.communication],
        backgroundColor: 'rgba(255, 107, 139, 0.2)',
        borderColor: 'rgba(255, 107, 139, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 107, 139, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 107, 139, 1)'
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  });
}

// 添加标签页切换功能
function addTabSwitching() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有标签页按钮的活动状态
      tabBtns.forEach(b => b.classList.remove('active'));
      
      // 添加当前按钮的活动状态
      btn.classList.add('active');
      
      // 隐藏所有标签页内容
      tabContents.forEach(content => content.classList.remove('active'));
      
      // 显示对应标签页内容
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// 获取恋爱特质标签
function getPersonalityTags(type, stats) {
  const tags = [];
  
  // 基于恋爱类型的基础标签
  switch(type) {
    case 'romantic':
      tags.push({ text: '浪漫主义者', class: 'tag-primary' });
      break;
    case 'player':
      tags.push({ text: '恋爱玩家', class: 'tag-secondary' });
      break;
    case 'pragmatic':
      tags.push({ text: '实用主义者', class: 'tag-accent' });
      break;
    case 'casual':
      tags.push({ text: '随性恋爱者', class: 'tag-light' });
      break;
  }
  
  // 基于各维度分数的标签
  if (stats.emotion >= 80) tags.push({ text: '情感丰富', class: 'tag-emotion' });
  else if (stats.emotion <= 40) tags.push({ text: '情感内敛', class: 'tag-emotion' });
  
  if (stats.rationality >= 80) tags.push({ text: '理性思考', class: 'tag-rationality' });
  else if (stats.rationality <= 40) tags.push({ text: '感性决策', class: 'tag-rationality' });
  
  if (stats.commitment >= 80) tags.push({ text: '专注投入', class: 'tag-commitment' });
  else if (stats.commitment <= 40) tags.push({ text: '自由随性', class: 'tag-commitment' });
  
  if (stats.independence >= 80) tags.push({ text: '独立自主', class: 'tag-independence' });
  else if (stats.independence <= 40) tags.push({ text: '依赖他人', class: 'tag-independence' });
  
  if (stats.communication >= 80) tags.push({ text: '善于沟通', class: 'tag-communication' });
  else if (stats.communication <= 40) tags.push({ text: '沉默是金', class: 'tag-communication' });
  
  // 随机选择一些额外的标签
  const extraTags = [
    { text: '恋爱新手', class: 'tag-extra' },
    { text: '恋爱达人', class: 'tag-extra' },
    { text: '慢热型', class: 'tag-extra' },
    { text: '快热型', class: 'tag-extra' },
    { text: '理想主义', class: 'tag-extra' },
    { text: '现实主义', class: 'tag-extra' },
    { text: '注重细节', class: 'tag-extra' },
    { text: '大大咧咧', class: 'tag-extra' }
  ];
  
  // 随机选择2-3个额外标签
  const numExtraTags = Math.floor(Math.random() * 2) + 2; // 2-3个
  for (let i = 0; i < numExtraTags; i++) {
    const randomIndex = Math.floor(Math.random() * extraTags.length);
    tags.push(extraTags[randomIndex]);
    extraTags.splice(randomIndex, 1); // 避免重复
  }
  
  return tags;
}

// 根据总分数获取描述
function getScoreDescription(score) {
  if (score >= 90) {
    return "恋爱大师级别！你对爱情有着深刻的理解和独特的见解。";
  } else if (score >= 80) {
    return "恋爱高手！你的恋爱能力非常出色，令人羡慕。";
  } else if (score >= 70) {
    return "恋爱达人！你在爱情中表现得相当不错。";
  } else if (score >= 60) {
    return "恋爱新手！你已经具备了基本的恋爱素养。";
  } else if (score >= 50) {
    return "恋爱探索者！你正在学习如何更好地恋爱。";
  } else {
    return "恋爱小白！别着急，爱情需要慢慢学习和成长。";
  }
}

// 分数增长动画
function animateTotalScore(finalScore) {
  const scoreElement = document.getElementById('total-score-number');
  if (!scoreElement) return;
  
  let currentScore = 0;
  const increment = finalScore / 50; // 分50步完成动画
  const duration = 2000; // 动画持续2秒
  const interval = duration / 50;
  
  const timer = setInterval(() => {
    currentScore += increment;
    if (currentScore >= finalScore) {
      currentScore = finalScore;
      clearInterval(timer);
    }
    scoreElement.textContent = Math.round(currentScore);
  }, interval);
}

// 计算依恋类型
function calculateAttachmentType() {
  // 定义每个问题每个选项的焦虑和回避权重（-2到+2，0为中性）
  const attachmentWeights = [
    // 问题1
    [
      { anxiety: 1, avoidance: -1 }, // 浪漫主义者选项：立刻秒回（焦虑较高，回避较低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：保持神秘感（焦虑较低，回避较高）
      { anxiety: 0, avoidance: 0 },  // 实用主义者选项：谨慎回复（中性）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：忘记回复（焦虑很低，回避很高）
    ],
    // 问题2
    [
      { anxiety: 2, avoidance: -1 }, // 浪漫主义者选项：担心对方（焦虑很高，回避较低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：认识新朋友（焦虑较低，回避较高）
      { anxiety: 0, avoidance: 0 },  // 实用主义者选项：计算频率（中性）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：无所谓（焦虑很低，回避很高）
    ],
    // 问题3
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：感觉最重要（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：新鲜感（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：共同目标（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：舒适就好（焦虑很低，回避很高）
    ],
    // 问题4
    [
      { anxiety: 1, avoidance: -1 }, // 浪漫主义者选项：羡慕转发（焦虑较高，回避较低）
      { anxiety: -1, avoidance: 0 }, // 恋爱玩家选项：调侃展示（焦虑较低，回避中性）
      { anxiety: 0, avoidance: 0 },  // 实用主义者选项：分析借鉴（中性）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：快速划过（焦虑很低，回避很高）
    ],
    // 问题5
    [
      { anxiety: 2, avoidance: 1 }, // 浪漫主义者选项：默默祝福（焦虑很高，回避较高）
      { anxiety: 0, avoidance: -1 }, // 恋爱玩家选项：公平竞争（焦虑中性，回避较低）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：理性放弃（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：无所谓（焦虑很低，回避很高）
    ],
    // 问题6
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：每天说（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：偶尔说（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：特别时刻说（焦虑较低，回避较低）
      { anxiety: 1, avoidance: 1 }   // 随性恋爱者选项：很少说（焦虑较高，回避较高）
    ],
    // 问题7
    [
      { anxiety: 2, avoidance: -2 }, // 浪漫主义者选项：放弃一切（焦虑很高，回避很低）
      { anxiety: -1, avoidance: 0 }, // 恋爱玩家选项：适度牺牲（焦虑较低，回避中性）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：权衡利弊（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：自己开心最重要（焦虑很低，回避很高）
    ],
    // 问题8
    [
      { anxiety: 2, avoidance: -1 }, // 浪漫主义者选项：沉浸回忆（焦虑很高，回避较低）
      { anxiety: -1, avoidance: 2 }, // 恋爱玩家选项：立刻开始新恋情（焦虑较低，回避很高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：分析原因（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：日子照过（焦虑很低，回避很高）
    ],
    // 问题9
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：烛光晚餐（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 0 }, // 恋爱玩家选项：冒险活动（焦虑较低，回避中性）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：学习新技能（焦虑较低，回避较低）
      { anxiety: -1, avoidance: 1 }   // 随性恋爱者选项：宅家看电影（焦虑较低，回避较高）
    ],
    // 问题10
    [
      { anxiety: 1, avoidance: -2 }, // 浪漫主义者选项：距离产生美（焦虑较高，回避很低）
      { anxiety: 1, avoidance: 1 },   // 恋爱玩家选项：不太能接受（焦虑较高，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：制定计划（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：随缘（焦虑很低，回避很高）
    ],
    // 问题11
    [
      { anxiety: 2, avoidance: -1 }, // 浪漫主义者选项：主动道歉（焦虑很高，回避较低）
      { anxiety: 1, avoidance: 2 },   // 恋爱玩家选项：等对方低头（焦虑较高，回避很高）
      { anxiety: -1, avoidance: -2 }, // 实用主义者选项：理性沟通（焦虑较低，回避很低）
      { anxiety: -1, avoidance: 1 }   // 随性恋爱者选项：大事化小（焦虑较低，回避较高）
    ],
    // 问题12
    [
      { anxiety: 2, avoidance: -2 }, // 浪漫主义者选项：愿意改变一切（焦虑很高，回避很低）
      { anxiety: 0, avoidance: 0 },  // 恋爱玩家选项：适当改变（中性）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：只改变不好习惯（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：不刻意改变（焦虑很低，回避很高）
    ],
    // 问题13
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：期待共同生活（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：尝试但不结论（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：认为必要（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：无所谓（焦虑很低，回避很高）
    ],
    // 问题14
    [
      { anxiety: 1, avoidance: -2 }, // 浪漫主义者选项：经常幻想未来（焦虑较高，回避很低）
      { anxiety: -1, avoidance: 2 }, // 恋爱玩家选项：活在当下（焦虑较低，回避很高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：制定计划（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 2 }  // 随性恋爱者选项：顺其自然（焦虑很低，回避很高）
    ],
    // 问题15
    [
      { anxiety: 1, avoidance: -1 }, // 浪漫主义者选项：愿意花钱（焦虑较高，回避较低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：AA制（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：共同规划（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 1 }  // 随性恋爱者选项：不在意（焦虑很低，回避较高）
    ],
    // 问题16
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：公开恋情（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：选择性公开（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：不过度秀恩爱（焦虑较低，回避较低）
      { anxiety: 1, avoidance: 2 }   // 随性恋爱者选项：不喜欢公开（焦虑较高，回避很高）
    ],
    // 问题17
    [
      { anxiety: 2, avoidance: 1 },   // 浪漫主义者选项：减少往来（焦虑很高，回避较高）
      { anxiety: -1, avoidance: 0 }, // 恋爱玩家选项：保持社交（焦虑较低，回避中性）
      { anxiety: -1, avoidance: -2 }, // 实用主义者选项：坦诚沟通（焦虑较低，回避很低）
      { anxiety: -2, avoidance: -1 }  // 随性恋爱者选项：信任最重要（焦虑很低，回避较低）
    ],
    // 问题18
    [
      { anxiety: 1, avoidance: -2 }, // 浪漫主义者选项：无条件爱（焦虑较高，回避很低）
      { anxiety: -1, avoidance: 1 }, // 恋爱玩家选项：快乐和新鲜感（焦虑较低，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：成长和进步（焦虑较低，回避较低）
      { anxiety: -1, avoidance: 0 }   // 随性恋爱者选项：陪伴和舒适（焦虑较低，回避中性）
    ],
    // 问题19
    [
      { anxiety: 1, avoidance: -1 }, // 浪漫主义者选项：相信一见钟情（焦虑较高，回避较低）
      { anxiety: 0, avoidance: 1 },  // 恋爱玩家选项：恋爱可闪婚需谨慎（焦虑中性，回避较高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：需要足够了解（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 0 }  // 随性恋爱者选项：不太关注形式（焦虑很低，回避中性）
    ],
    // 问题20
    [
      { anxiety: 0, avoidance: -2 }, // 浪漫主义者选项：灵魂伴侣（焦虑中性，回避很低）
      { anxiety: -1, avoidance: 2 }, // 恋爱玩家选项：享受过程（焦虑较低，回避很高）
      { anxiety: -1, avoidance: -1 }, // 实用主义者选项：稳定家庭（焦虑较低，回避较低）
      { anxiety: -2, avoidance: 1 }  // 随性恋爱者选项：开心就好（焦虑很低，回避较高）
    ]
  ];

  let totalAnxiety = 0;
  let totalAvoidance = 0;

  // 根据用户选择计算焦虑和回避总分
  userSelections.forEach((selection, questionIndex) => {
    let optionIndex;
    switch(selection) {
      case 'romantic': optionIndex = 0; break;
      case 'player': optionIndex = 1; break;
      case 'pragmatic': optionIndex = 2; break;
      case 'casual': optionIndex = 3; break;
      default: optionIndex = 3;
    }
    
    const weights = attachmentWeights[questionIndex][optionIndex];
    totalAnxiety += weights.anxiety;
    totalAvoidance += weights.avoidance;
  });

  // 计算平均分（-2到+2）
  const avgAnxiety = totalAnxiety / userSelections.length;
  const avgAvoidance = totalAvoidance / userSelections.length;

  // 根据平均分确定依恋类型
  let type, description, characteristics, tips;

  if (avgAnxiety < 0 && avgAvoidance < 0) {
    // 低焦虑低回避 = 安全型
    type = '安全型依恋';
    description = '你在亲密关系中感到舒适和安全，能够平衡亲密与独立。';
    characteristics = [
      '能够信任伴侣，享受亲密也保持独立',
      '善于沟通，能够直接表达需求和感受',
      '冲突时寻求解决而非攻击或逃避',
      '对关系稳定有信心，不担心被抛弃'
    ];
    tips = [
      '继续保持你的健康依恋模式',
      '帮助伴侣建立安全感',
      '在关系中保持开放和真诚'
    ];
  } else if (avgAnxiety > 0 && avgAvoidance < 0) {
    // 高焦虑低回避 = 焦虑型/痴迷型
    type = '焦虑型依恋';
    description = '你极度渴望亲密关系，但常常担心被抛弃，需要频繁确认伴侣的爱。';
    characteristics = [
      '对伴侣的一举一动高度敏感',
      '需要频繁确认对方的爱和承诺',
      '容易过度解读小细节，产生不安全感',
      '害怕被拒绝，可能过度付出以维持关系'
    ];
    tips = [
      '练习自我安抚，减少对伴侣确认的依赖',
      '培养独立的兴趣和活动',
      '区分事实和想象，不要过度解读'
    ];
  } else if (avgAnxiety < 0 && avgAvoidance > 0) {
    // 低焦虑高回避 = 回避型/疏离型
    type = '回避型依恋';
    description = '你倾向于保持情感独立，避免过度亲密，强调自我依靠。';
    characteristics = [
      '在情感上保持距离，亲密时常感到不适',
      '倾向于淡化情感需求，回避深层交流',
      '遇到问题习惯独自解决，不喜欢寻求帮助',
      '重视独立和自我满足'
    ];
    tips = [
      '尝试从小事开始分享内心感受',
      '练习接纳自己的情感需求',
      '在安全的关系中逐渐放下防御'
    ];
  } else {
    // 高焦虑高回避 = 恐惧型/混乱型
    type = '恐惧型依恋';
    description = '你内心矛盾，既渴望亲密又害怕受伤，在关系中表现出推拉模式。';
    characteristics = [
      '既渴望亲密又恐惧被拒绝',
      '行为可能忽冷忽热，难以预测',
      '对亲密关系既向往又恐惧',
      '被拒绝后可能彻底退缩'
    ];
    tips = [
      '建立稳定的日常生活规律增强安全感',
      '寻求专业帮助处理潜在创伤',
      '练习情绪调节技巧，应对焦虑'
    ];
  }

  return {
    type,
    description,
    characteristics,
    tips,
    anxietyScore: Math.round((avgAnxiety + 2) / 4 * 100), // 转换为0-100分
    avoidanceScore: Math.round((avgAvoidance + 2) / 4 * 100)
  };
}

// 初始化
updateNavigationButtons();
updateProgress();

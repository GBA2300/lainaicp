// 全局变量定义
let currentQuestionIndex = 0; // 当前题目索引
let userAnswers = []; // 存储用户答案
const totalQuestions = 20; // 总题数

// 测试题目数据（幽默风趣，融入网络梗）
const testQuestions = [
    {
        title: "1. 当你喜欢的人给你发“在吗”，你第一反应是？",
        options: [
            { text: "完了完了，我是不是哪里做错了？", value: 1 },
            { text: "秒回！顺便带个表情包活跃气氛", value: 2 },
            { text: "故意等5分钟再回，显得我不缺人聊", value: 3 },
            { text: "先翻一下聊天记录，看看上次有没有欠他/她东西", value: 4 }
        ]
    },
    {
        title: "2. 约会时对方迟到了30分钟，你会？",
        options: [
            { text: "表面微笑：“没事~” 内心：已记小本本", value: 1 },
            { text: "直接发消息：“你再不来，我就先吃两份甜品”", value: 2 },
            { text: "原地自拍发朋友圈，定位精准，暗示对方", value: 3 },
            { text: "默默离开，顺便把对方拉黑（狠人本狠）", value: 4 }
        ]
    },
    {
        title: "3. 你刷到喜欢的人的朋友圈，会？",
        options: [
            { text: "反复看3遍，然后犹豫10分钟要不要点赞", value: 1 },
            { text: "点赞+评论，评论内容反复修改800遍", value: 2 },
            { text: "偷偷保存对方的照片，假装没看过", value: 3 },
            { text: "划过，假装没看见，实则内心波涛汹涌", value: 4 }
        ]
    },
    {
        title: "4. 当朋友问你“你喜欢谁”，你会？",
        options: [
            { text: "打死不认，就算证据确凿也嘴硬", value: 1 },
            { text: "疯狂转移话题，聊天气、聊美食、聊八卦", value: 2 },
            { text: "半开玩笑地说出名字，看对方反应", value: 3 },
            { text: "直接大方承认，顺便让朋友帮忙助攻", value: 4 }
        ]
    },
    {
        title: "5. 你和喜欢的人一起吃饭，你会？",
        options: [
            { text: "只吃一点点，保持优雅，就算饿也忍着", value: 1 },
            { text: "正常干饭，但会注意不要吧唧嘴", value: 2 },
            { text: "故意点和对方一样的菜，增加共同话题", value: 3 },
            { text: "先给对方夹菜，再自己狼吞虎咽（主打一个贴心）", value: 4 }
        ]
    },
    {
        title: "6. 喜欢的人对你发了一个表情包，你会？",
        options: [
            { text: "去表情包库里找一个最匹配的回复", value: 1 },
            { text: "直接问：“这个表情包是什么意思？”", value: 2 },
            { text: "保存这个表情包，以后和别人聊天用", value: 3 },
            { text: "连发3个同款表情包，主打一个呼应", value: 4 }
        ]
    },
    {
        title: "7. 当你知道喜欢的人有喜欢的人了，你会？",
        options: [
            { text: "默默祝福，然后转身emo三天三夜", value: 1 },
            { text: "表面无所谓，内心：我的青春结束了", value: 2 },
            { text: "主动打听对方喜欢的人的情况，找差距", value: 3 },
            { text: "不放弃，继续默默守护，等待机会", value: 4 }
        ]
    },
    {
        title: "8. 你会主动向喜欢的人表白吗？",
        options: [
            { text: "绝对不会，除非对方先表白", value: 1 },
            { text: "犹豫半年，最后还是不了了之", value: 2 },
            { text: "找朋友帮忙试探，确定有戏再表白", value: 3 },
            { text: "会！喜欢就要大声说出来，不留遗憾", value: 4 }
        ]
    },
    {
        title: "9. 约会时你会选择什么地点？",
        options: [
            { text: "安静的咖啡馆，方便聊天", value: 1 },
            { text: "热闹的游乐场，增加互动机会", value: 2 },
            { text: "好吃的火锅店，主打一个干饭自由", value: 3 },
            { text: "免费的公园，省钱又能散步", value: 4 }
        ]
    },
    {
        title: "10. 喜欢的人找你帮忙，你会？",
        options: [
            { text: "就算自己不会，也要硬着头皮答应", value: 1 },
            { text: "尽力帮忙，顺便展示自己的能力", value: 2 },
            { text: "先问清楚是什么忙，再决定帮不帮", value: 3 },
            { text: "直接拒绝，我自己的事情都忙不完", value: 4 }
        ]
    },
    {
        title: "11. 你会记住喜欢的人的生日吗？",
        options: [
            { text: "提前一个月就开始准备礼物", value: 1 },
            { text: "记在备忘录里，设置3个提醒", value: 2 },
            { text: "可能会忘，需要朋友提醒", value: 3 },
            { text: "生日是什么？我自己的生日都记不住", value: 4 }
        ]
    },
    {
        title: "12. 当喜欢的人对你忽冷忽热，你会？",
        options: [
            { text: "自我内耗，反复想“我是不是哪里错了”", value: 1 },
            { text: "主动找对方聊天，试探对方的态度", value: 2 },
            { text: "你冷我更冷，主打一个谁怕谁", value: 3 },
            { text: "直接问清楚，不搞暧昧拉扯", value: 4 }
        ]
    },
    {
        title: "13. 你喜欢的人喜欢追星，你会？",
        options: [
            { text: "陪对方一起追，了解偶像的所有信息", value: 1 },
            { text: "尊重对方的爱好，偶尔陪对方看演唱会", value: 2 },
            { text: "不理解，但不反对，保持中立", value: 3 },
            { text: "觉得很幼稚，试图说服对方放弃追星", value: 4 }
        ]
    },
    {
        title: "14. 约会时忘记带钱包，你会？",
        options: [
            { text: "尴尬到抠脚，恨不得找个地缝钻进去", value: 1 },
            { text: "笑着说：“没事，我手机支付”", value: 2 },
            { text: "让对方先付钱，回去后立马转账", value: 3 },
            { text: "假装肚子疼，趁机溜走（不是）", value: 4 }
        ]
    },
    {
        title: "15. 你会偷看喜欢的人的手机吗？",
        options: [
            { text: "绝对不会，尊重对方的隐私", value: 1 },
            { text: "想偷看，但没勇气", value: 2 },
            { text: "趁对方不注意，快速瞟一眼", value: 3 },
            { text: "会！必须查岗，确保对方没有暧昧对象", value: 4 }
        ]
    },
    {
        title: "16. 当你和喜欢的人吵架了，你会？",
        options: [
            { text: "主动道歉，就算不是自己的错", value: 1 },
            { text: "等对方冷静后，再主动沟通", value: 2 },
            { text: "谁先低头谁就输，坚决不主动", value: 3 },
            { text: "直接拉黑，眼不见心不烦", value: 4 }
        ]
    },
    {
        title: "17. 你喜欢的人不回你消息，你会？",
        options: [
            { text: "隔5分钟发一条，直到对方回复", value: 1 },
            { text: "反复看手机，怀疑自己消息没发出去", value: 2 },
            { text: "做自己的事情，等对方主动回复", value: 3 },
            { text: "直接删除对方，不伺候了", value: 4 }
        ]
    },
    {
        title: "18. 你会为了喜欢的人改变自己吗？",
        options: [
            { text: "会！对方喜欢什么，我就变成什么", value: 1 },
            { text: "会改变一些小缺点，保留自己的本性", value: 2 },
            { text: "不会改变，爱我就要接受我的全部", value: 3 },
            { text: "让对方为我改变，我才是主角", value: 4 }
        ]
    },
    {
        title: "19. 你觉得恋爱中最重要的是什么？",
        options: [
            { text: "忠诚，绝对不能出轨", value: 1 },
            { text: "包容，互相理解互相迁就", value: 2 },
            { text: "颜值，长得好看才是王道", value: 3 },
            { text: "金钱，经济基础决定上层建筑", value: 4 }
        ]
    },
    {
        title: "20. 如果恋爱失败了，你会？",
        options: [
            { text: "emo很久，不敢再谈恋爱", value: 1 },
            { text: "总结经验，下次找个更好的", value: 2 },
            { text: "和朋友吐槽，然后大吃一顿解压", value: 3 },
            { text: "无缝衔接，快速开启下一段恋情", value: 4 }
        ]
    }
];

// 结果类型数据（幽默+专业）
const resultTypes = [
    {
        type: "恋爱小白·纯情天花板",
        icon: "<i class='fa-solid fa-face-flushed'></i>",
        funny: "恭喜你！你是恋爱界的“一张白纸”，纯情到能掐出水来。别人对你抛个媚眼，你能脸红到耳朵根；别人给你发个“晚安”，你能失眠一整晚。你不懂暧昧，不会套路，喜欢就是单纯的喜欢，连牵手都要犹豫半天。单身的原因：太纯情，别人以为你对他/她没兴趣！",
        analysis: "【专业解读】你的恋爱特质是“纯粹真诚”，这是非常珍贵的品质。在恋爱中，你会全身心投入，对待感情认真负责。但不足的是，你缺乏恋爱技巧，容易被动等待，不敢主动表达心意。建议你适当放开自己，学会表达自己的情感，不要因为害羞而错过真爱。你的真爱会被你的纯情所吸引，只是需要你多一点主动。"
    },
    {
        type: "恋爱套路王·撩人高手",
        icon: "<i class='fa-solid fa-face-wink'></i>",
        funny: "哇哦！你是恋爱界的“老油条”，套路一套接一套，撩人于无形之中。你懂的梗比谁都多，会精准捕捉对方的情绪，一句话就能让对方心跳加速。你从不缺暧昧对象，身边桃花朵朵开，但你总觉得“下一个更好”，所以常常处于“单身贵族”状态。单身的原因：太会撩，别人觉得你不靠谱！",
        analysis: "【专业解读】你的恋爱特质是“情商在线，善于表达”，你很懂异性的心理，能快速拉近和对方的距离。在恋爱中，你能给对方带来很多快乐和新鲜感。但不足的是，你的套路太多，容易让对方觉得你不够真诚，缺乏安全感。建议你在撩人之余，多展现自己的真心，不要用套路掩盖自己的真实情感，这样才能收获长久的爱情。"
    },
    {
        type: "恋爱佛系玩家·随缘就好",
        icon: "<i class='fa-solid fa-face-relaxed'></i>",
        funny: "厉害！你是恋爱界的“佛系选手”，恋爱对你来说就是“可有可无，随缘就好”。别人忙着脱单，你忙着追剧、打游戏、干饭；别人为了爱情emo，你该吃吃该喝喝，啥事不往心里搁。你觉得“是你的终究是你的，不是你的强求不来”，所以从不主动争取，单身的原因：太佛系，缘分都被你“随缘”走了！",
        analysis: "【专业解读】你的恋爱特质是“心态平和，随遇而安”，你不会因为恋爱而迷失自己，始终保持着独立的生活态度。在恋爱中，你不会给对方太大的压力，能给对方足够的空间。但不足的是，你过于被动，缺乏主动争取的意识，容易错过很多不错的缘分。建议你适当打破自己的“佛系”状态，遇到喜欢的人，不妨主动一点，爱情有时候也需要“强求”。"
    },
    {
        type: "恋爱狠人·宁缺毋滥",
        icon: "<i class='fa-solid fa-face-grimace'></i>",
        funny: "瑞思拜！你是恋爱界的“狠人”，对待感情“宁缺毋滥”，绝不将就。你有自己的恋爱标准，不符合标准的人，就算对方再优秀，你也不会多看一眼。你不害怕单身，反而觉得单身比将就的恋爱更快乐。你吵架时从不低头，分手时绝不拖泥带水，单身的原因：太挑剔，眼光太高，没人能达到你的标准！",
        analysis: "【专业解读】你的恋爱特质是“独立自信，有原则有底线”，你非常清楚自己想要什么样的爱情，不会因为外界的压力而随便谈恋爱。在恋爱中，你会保持自己的独立人格，不会为了对方而委屈自己。但不足的是，你的标准过于苛刻，容易把一些不错的人拒之门外。建议你适当降低自己的标准，多给别人一些了解的机会，爱情有时候也需要“试错”。"
    }
];

// -------------------------- 功能模块 --------------------------
// 1. 页面切换模块
/**
 * 切换页面
 * @param {string} targetPageId - 目标页面ID（home-page/test-page/result-page）
 */
function switchPage(targetPageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // 显示目标页面
    document.getElementById(targetPageId).classList.add('active');
}

// 2. 测试题目渲染模块
/**
 * 渲染当前题目
 */
function renderCurrentQuestion() {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const questionTitleEl = document.getElementById('question-title');
    const optionsListEl = document.getElementById('options-list');

    // 更新题目标题
    questionTitleEl.textContent = currentQuestion.title;

    // 清空选项列表
    optionsListEl.innerHTML = '';

    // 渲染选项
    currentQuestion.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option-item';
        // 如果用户之前选过这个题目，高亮选中的选项
        if (userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] === index) {
            optionEl.classList.add('selected');
        }
        optionEl.textContent = option.text;
        optionEl.dataset.index = index;
        optionEl.dataset.value = option.value;

        // 选项点击事件
        optionEl.addEventListener('click', () => {
            // 移除当前题目所有选项的选中状态
            document.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('selected');
            });
            // 高亮当前选中的选项
            optionEl.classList.add('selected');
            // 存储用户答案
            userAnswers[currentQuestionIndex] = index;
        });

        optionsListEl.appendChild(optionEl);
    });

    // 更新进度条和进度文本
    updateProgress();

    // 更新按钮状态
    updateBtnStatus();
}

// 3. 进度更新模块
/**
 * 更新测试进度
 */
function updateProgress() {
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-inner').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/${totalQuestions} 题`;
}

// 4. 按钮状态更新模块
/**
 * 更新上一题/下一题按钮状态
 */
function updateBtnStatus() {
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');

    // 上一题按钮：只有当前题目索引>0时可用
    if (currentQuestionIndex > 0) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }

    // 下一题按钮：如果是最后一题，按钮文本改为“查看结果”
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.innerHTML = '查看结果 <i class="fa-solid fa-check"></i>';
    } else {
        nextBtn.innerHTML = '下一题 <i class="fa-solid fa-arrow-right"></i>';
    }
}

// 5. 题目切换模块
/**
 * 上一题
 */
function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        // 添加切换动画反馈（轻微抖动）
        document.getElementById('question-container').style.animation = 'none';
        setTimeout(() => {
            document.getElementById('question-container').style.animation = 'shakeLeft 0.3s ease';
        }, 10);
    }
}

/**
 * 下一题/查看结果
 */
function goToNextQuestion() {
    // 检查当前题目是否已作答
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('哎呀！请先选择一个选项再继续哦～');
        return;
    }

    // 如果是最后一题，跳转到结果页
    if (currentQuestionIndex === totalQuestions - 1) {
        calculateAndShowResult();
        switchPage('result-page');
        return;
    }

    // 否则，切换到下一题
    currentQuestionIndex++;
    renderCurrentQuestion();
    // 添加切换动画反馈（轻微抖动）
    document.getElementById('question-container').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('question-container').style.animation = 'shakeRight 0.3s ease';
    }, 10);
}

// 6. 结果计算与展示模块
/**
 * 计算并展示测试结果
 */
function calculateAndShowResult() {
    // 计算总分
    let totalScore = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
        const optionValue = testQuestions[questionIndex].options[answerIndex].value;
        totalScore += optionValue;
    });

    // 根据总分判断结果类型（总分范围：20-80）
    let resultIndex = 0;
    if (totalScore >= 20 && totalScore < 35) {
        resultIndex = 0; // 恋爱小白
    } else if (totalScore >= 35 && totalScore < 50) {
        resultIndex = 1; // 恋爱套路王
    } else if (totalScore >= 50 && totalScore < 65) {
        resultIndex = 2; // 恋爱佛系玩家
    } else {
        resultIndex = 3; // 恋爱狠人
    }

    // 获取对应结果
    const result = resultTypes[resultIndex];

    // 更新结果页面内容
    document.getElementById('result-title').textContent = `你的恋爱属性：${result.type}`;
    document.getElementById('result-icon').innerHTML = result.icon;
    document.getElementById('funny-evaluation').innerHTML = result.funny;
    document.getElementById('professional-analysis').innerHTML = result.analysis;
}

// 7. 分享与复制模块
/**
 * 复制结果链接（模拟）
 */
function copyResultLink() {
    // 模拟复制当前页面链接
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('结果链接已复制！快去分享给你的朋友吧～');
    }).catch(() => {
        alert('复制失败，请手动复制浏览器地址栏链接～');
    });
}

/**
 * 分享到微信（模拟）
 */
function shareToWechat() {
    alert('已生成分享图片，可截图保存后分享到微信朋友圈/好友～');
}

// 8. 重新测试模块
/**
 * 重新开始测试
 */
function restartTest() {
    // 重置全局变量
    currentQuestionIndex = 0;
    userAnswers = [];
    // 渲染第一题
    renderCurrentQuestion();
    // 切换到首页
    switchPage('home-page');
}

// -------------------------- 事件绑定 --------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. 首页 - 开始测试按钮
    document.getElementById('start-test-btn').addEventListener('click', () => {
        switchPage('test-page');
        renderCurrentQuestion();
    });

    // 2. 测试页 - 上一题按钮
    document.getElementById('prev-question-btn').addEventListener('click', goToPrevQuestion);

    // 3. 测试页 - 下一题按钮
    document.getElementById('next-question-btn').addEventListener('click', goToNextQuestion);

    // 4. 结果页 - 复制链接按钮
    document.getElementById('copy-link-btn').addEventListener('click', copyResultLink);

    // 5. 结果页 - 分享到微信按钮
    document.getElementById('share-wechat-btn').addEventListener('click', shareToWechat);

    // 6. 结果页 - 重新测试按钮
    document.getElementById('restart-test-btn').addEventListener('click', restartTest);

    // 添加自定义动画（题目切换抖动）
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shakeLeft {
            0% { transform: translateX(10px); }
            50% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        @keyframes shakeRight {
            0% { transform: translateX(-10px); }
            50% { transform: translateX(5px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
});

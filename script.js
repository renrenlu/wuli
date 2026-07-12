const quizItems = [
  {
    question: "为什么说运动和静止是相对的？",
    answer: "因为判断运动状态必须先选参照物，参照物不同，结论可能不同。"
  },
  {
    question: "一辆车 2 h 行驶 120 km，它的平均速度是多少？",
    answer: "v = s / t = 120 km / 2 h = 60 km/h。"
  },
  {
    question: "音调、响度、音色分别由什么决定？",
    answer: "音调主要由频率决定，响度主要由振幅和距离决定，音色由发声体本身特点决定。"
  },
  {
    question: "为什么真空中不能传声？",
    answer: "声音传播需要介质，真空中没有能传递振动的介质。"
  },
  {
    question: "晶体熔化时一直吸热，为什么温度不变？",
    answer: "吸收的热量用于改变物质状态，而不是升高温度。"
  },
  {
    question: "冬天口中呼出的“白气”是什么？",
    answer: "主要是水蒸气遇冷液化形成的小水滴。"
  },
  {
    question: "反射角和入射角应该和哪条线比较？",
    answer: "都应该和法线比较，不是和镜面比较。"
  },
  {
    question: "平面镜成像有哪些特点？",
    answer: "正立、等大、虚像，像和物关于镜面对称，像距等于物距。"
  },
  {
    question: "凸透镜成像规律中最重要的一句话是什么？",
    answer: "一倍焦距分虚实，二倍焦距分大小。"
  },
  {
    question: "近视眼和远视眼分别用什么透镜矫正？",
    answer: "近视眼用凹透镜，远视眼用凸透镜。"
  },
  {
    question: "密度公式是什么？各字母表示什么？",
    answer: "ρ = m / V，其中 ρ 表示密度，m 表示质量，V 表示体积。"
  },
  {
    question: "测不规则小石块密度需要测哪些量？",
    answer: "用天平测质量，用量筒和排水法测体积，再用 ρ = m / V 计算密度。"
  },
  {
    question: "为什么探究光的反射规律不能只做一次实验？",
    answer: "一次实验只能说明个别情况，多次改变入射角才能寻找普遍规律。"
  },
  {
    question: "平面镜成像实验为什么用薄玻璃板代替平面镜？",
    answer: "玻璃板既能成像，又能透过玻璃看到后面的蜡烛，便于确定像的位置。"
  },
  {
    question: "凸透镜成实像时，物体靠近焦点，像会怎样变化？",
    answer: "像远离凸透镜，并且变大；可记为物近像远像变大。"
  },
  {
    question: "水浴法加热海波有什么好处？",
    answer: "能让海波受热更均匀，也便于控制温度上升速度。"
  },
  {
    question: "测小石块密度时，如果先测体积再测质量，石块粘水会带来什么影响？",
    answer: "粘水会使测得的质量偏大，从而使计算出的密度偏大。"
  },
  {
    question: "“一漂一浸没法”测密度的核心思路是什么？",
    answer: "漂浮时利用排开水的体积求质量，浸没时利用水面变化求物体体积。"
  },
  {
    question: "光从空气斜射入水中时，折射光线向哪里偏折？",
    answer: "向法线方向偏折，折射角小于入射角。"
  },
  {
    question: "怎样比较准确地测一张纸的厚度？",
    answer: "用累积法：测出很多张相同纸的总厚度，再除以张数。"
  },
  {
    question: "回声测距为什么要除以 2？",
    answer: "因为声音从人到障碍物再返回，测得的时间对应往返路程。"
  },
  {
    question: "温度计读数时视线应该怎样放？",
    answer: "视线要与液柱上表面相平，不能俯视或仰视。"
  },
  {
    question: "为什么晶体熔化实验记录时间间隔不能太长？",
    answer: "间隔太长会漏掉温度变化细节，尤其不容易准确判断熔化开始和结束时刻。"
  },
  {
    question: "为什么内页纸通常比封面纸粗糙一些？",
    answer: "粗糙纸面发生漫反射，从各方向看都较清楚，也不容易刺眼。"
  },
  {
    question: "平面镜成像实验为什么玻璃板要竖直放置？",
    answer: "玻璃板竖直时，像和替代物才能在桌面上准确重合，便于比较像和物的位置关系。"
  },
  {
    question: "凸透镜实验中为什么要让烛焰、透镜和光屏中心大致等高？",
    answer: "这样像容易成在光屏中央，便于观察和测量。"
  },
  {
    question: "照相机想让景物的像变大，应怎样调镜头和胶片距离？",
    answer: "让照相机靠近景物，同时适当增大镜头到胶片的距离。"
  },
  {
    question: "怎样用天平测一枚回形针的质量？",
    answer: "测多枚相同回形针的总质量，再除以枚数，这是累积法。"
  },
  {
    question: "判断金属工艺品是否空心，常用哪两种思路？",
    answer: "可以比较实际体积和同质量实心体积，也可以比较实际密度和材料密度。"
  },
  {
    question: "m-V 图像中同种物质的图线为什么通常是过原点的直线？",
    answer: "因为同种物质密度一定，质量与体积成正比，图线斜率表示密度。"
  }
];

const questionNode = document.querySelector("#quiz-question");
const answerNode = document.querySelector("#quiz-answer");
const newQuestionButton = document.querySelector("#new-question");
const showAnswerButton = document.querySelector("#show-answer");
let currentQuiz = null;

function pickQuestion() {
  const nextIndex = Math.floor(Math.random() * quizItems.length);
  currentQuiz = quizItems[nextIndex];
  questionNode.textContent = currentQuiz.question;
  answerNode.textContent = currentQuiz.answer;
  answerNode.hidden = true;
}

newQuestionButton.addEventListener("click", pickQuestion);
showAnswerButton.addEventListener("click", () => {
  if (!currentQuiz) {
    pickQuestion();
  }
  answerNode.hidden = false;
});

document.querySelectorAll(".mini-quiz").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.dataset.answer;
    const isRevealed = button.classList.toggle("revealed");
    button.textContent = isRevealed ? answer : "点我看一句话答案";
  });
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".hard-card").forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.kind === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

pickQuestion();

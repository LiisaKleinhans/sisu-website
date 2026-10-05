// Services content. Edit the text here to update the Services page.
// A service with a page of its own has link:"its-page.html"; the card then shows a "See ... in detail" link.
const GROUPS = [
  {name:"For You", who:"Private clients and employees alike. Book directly for yourself, or through your employer.", wash:"var(--sage-wash)", items:[
    {name:"Coaching", line:"One-on-one or small-group conversations that help you get clear on what you want, and follow through.",
     tags:["Brain-Based Coaching","Personal & work goals","Stress & balance","Group coaching pods"],
     best:"Anyone working on a personal or work goal, a transition, or a better balance in life.",
     subs:[["Individual coaching","Focused sessions on what matters to you, with practical commitments between sessions."],["Group coaching pods","Three to six people with a shared challenge, coached together. The group learns from and supports each other."],["Wellness coaching","Practical habits for energy, boundaries and recovery, built on how lasting behaviour change actually works."]]},
    {name:"Career Direction", line:"Work out what kind of work really suits you, and shape your next move with confidence.",
     tags:["Career assessments","Designing Your Life","Career counselling"],
     best:"School leavers, students, graduates, career changers, and anyone asking \"what's next for me?\"",
     subs:[["Career assessment","Assessments of your interests, personality and abilities, explained in plain language."],["Life and career design","A hands-on design-thinking process to explore and test options before you commit."],["Next steps, co-designed","Your direction and next steps take shape together with you, session by session, so the plan is truly yours."]]},
    {name:"Personal Wellbeing Support", well:true, line:"Confidential, practical support when stress, change or difficult experiences start to weigh on your life and work.",
     tags:["Stress management","Life transitions","Eye Movement Integration"],
     best:"Anyone carrying more than they can comfortably manage, at home, at work, or both. Work and life always affect each other, so we look at the whole picture.",
     subs:[["Stress and overwhelm","Understand what is driving your stress, and learn practical ways to manage it day to day."],["Life changes and transitions","Find your footing through change, such as a new role, a move, a loss or a new life stage."],["Building your coping resources","Strengthen the inner and practical resources that help you handle everyday struggles."],["Practical support","Concrete tools and strategies you can use straight away, not only talk."]]}
  ]},
  {name:"For Leaders & Managers", who:"Team leaders, managers and senior leaders", wash:"var(--lake-wash)", items:[
    {name:"Leadership & Management Development", line:"Equip your team leaders, managers and senior leaders to bring out the best in their people and deliver business results.",
     tags:["Leadership coaching","Leadership & management programmes","Leadership frameworks","Psychometric-informed"],
     best:"First-time team leaders, experienced leaders and managers stepping up, and senior leadership and management teams.",
     note:"**Managing** is about getting the work done well: plans, priorities and performance. **Leading** is about people: direction, trust and growth. Strong leaders and managers need both, and our programmes build both.",
     subs:[["Leadership & management programmes","Programmes that equip leaders and managers with practical tools, skills and frameworks to manage their teams and get the best out of them, while delivering on business needs and strategy."],["Leadership coaching","One-on-one coaching for a specific leader or manager, linked to goals agreed with your business."],["First-time team leaders","Support for people stepping into their first role leading and managing others."],["Psychometric-informed insight","Psychometric assessments show how a leader or manager approaches complexity, from operational to strategic thinking, and where they will add most value."]]},
    {name:"Talent Assessment", line:"Use reliable, scientific assessments to hire the right people, spot your future leaders and develop the people you have.",
     tags:["Genesys Psytech","CPP","Saville Wave","IP200","Clevry"],
     best:"Any business making an important hire or promotion, planning for future leaders, or investing in someone's development.",
     subs:[["Assessment for hiring","Ability, personality and job-fit assessments, with a clear report and recommendation for each candidate."],["Future leader pipeline","Identify your top talent and potential successors, then plan their development so leaders are ready when you need them."],["Assessment for development","A clear picture of someone's strengths and growth areas, used to plan their development."],["Personal feedback","Every person assessed has their results explained by a registered psychologist."]]},
    {name:"Change Management", line:"Bring people with you through restructures, new systems or new ways of working, so the change actually sticks.",
     tags:["Prosci Certified Change Practitioner","ADKAR","Change readiness"],
     best:"Leaders and managers about to announce or roll out a change that affects people's jobs or routines.",
     subs:[["Change readiness check","Find out how ready people are, and where the change will be hardest."],["People-side change plan","Communication, manager support and training planned around the people affected."],["Support for leaders and managers","Help for leaders and managers to lead their own teams through the change."]]}
  ]},
  {name:"For Teams", who:"Any team that has to work well together", wash:"var(--moss-wash)", items:[
    {name:"Team Performance", line:"Find out what is really holding your team back, and build a plan to grow stronger together.",
     tags:["Team effectiveness","Team Diagnostics","Psychometric-informed","Team journeys"],
     best:"Choose the depth that fits: Team Days to connect, Team Workshops to understand each other, or a Team Journey to transform. Every option is customised to your team.",
     subs:[["Team Days","Build rapport and celebrate wins through fun, active days, with a purposeful debrief."],["Team Workshops","Discover each other's communication and working styles, and build trust."],["Team Journey","Find the real causes, then follow a tailored plan built for your team."]], link:"team-performance.html"},
    {name:"Team Wellbeing Sessions", well:true, line:"Practical sessions that give your team shared tools for managing pressure, energy and recovery.",
     tags:["Workshops","Micro-learning","Habit formation"],
     best:"Teams in busy or demanding periods, or as part of a wider wellbeing plan.",
     subs:[["Team sessions","Interactive workshops on stress, energy and recovery at work."],["Learning content","Short learning pieces (written, video or bite-sized) that keep the habits going."]]}
  ]},
  {name:"For Your Organisation", who:"The whole business, or a division", wash:"var(--cloud-wash)", items:[
    {name:"Organisation Health Check", line:"Spot people trends early, or get to the real cause of a problem, before you spend money on solutions.",
     tags:["Surveys","Focus groups","Trend analysis","Action plans"],
     best:"Leaders who want an early read on what's building in their business, and leaders who can see a problem but aren't sure what's driving it.",
     note:"Use Organisation Health Checks proactively, as a regular check-up that picks up trends before they become problems, or reactively, when something already isn't working.",
     subs:[["Diagnosis","Surveys, focus groups and interviews to understand what is really happening."],["Findings report","Clear themes in plain language, shared with leaders first."],["Action plan","A practical plan matched to your budget and priorities."]]},
    {name:"Culture & Engagement", line:"Understand how your people really experience working for you, and what would make your best people stay.",
     tags:["Engagement survey","Culture analysis","Employee Value Proposition","Action planning"],
     best:"Businesses building the culture they want, or growing fast, losing good people or coming through a big change.",
     note:"Every business has a culture, whether it was shaped on purpose or not. When leaders shape it intentionally, they get the culture they want, instead of one that forms without their input.",
     subs:[["Engagement and culture survey","A survey designed around your business, giving you a clear, honest picture of how your people experience working with you."],["Why people join and stay","Define what makes you a great place to work (your Employee Value Proposition) and live up to it."],["Action planning","Turn results into a few clear priorities that managers own."]]},
    {name:"Organisation Structure", line:"Shape your structure, operating model and the way teams work together, so your business is set up to deliver its strategy.",
     tags:["Operating models","Organisational design","Cross-team collaboration"],
     best:"Businesses that are growing, restructuring or merging, or where work keeps falling between teams.",
     subs:[["Operating models","How work flows through your business and who does what, designed around your strategy."],["Organisation structure","Clear, fit-for-purpose structures, roles and reporting lines that support growth."],["Cross-team collaboration","Break down silos so teams work together across functions instead of in isolation."]]},
    {name:"Growth & Learning", line:"Give people a clear picture of how they can grow with you, and the learning to get there.",
     tags:["Career growth paths","Skills frameworks","Learning journeys","Onboarding experience"],
     best:"Businesses that want to grow talent from inside and keep ambitious people.",
     subs:[["Growth paths","Clear routes from one role to the next, and what it takes to move."],["Skills frameworks","The skills each role needs, described so managers can use them."],["Learning journeys","Learning designed around real needs, including a strong start for new joiners."]]},
    {name:"Ways of Working", line:"Set up the meetings, rhythms and decision rules that turn strategy into everyday action.",
     tags:["Meeting rhythms","Goal cascading","Effective decision-making"],
     best:"Leadership teams with too many meetings, slow decisions, or goals that don't reach the front line.",
     subs:[["Meeting rhythms","The right meetings, at the right frequency, with agendas that work."],["Goals that reach everyone","Cascade strategy into team and individual goals people understand."],["Faster decisions","Clarify who recommends, who decides and who needs to be consulted."]]},
    {name:"Workplace Wellbeing", well:true, line:"Build wellness habits into how work gets done, so your people can perform, persevere and thrive under pressure.",
     tags:["Wellbeing assessment","Wellbeing strategy","Habit-based behaviour change"],
     best:"Businesses that want to set their teams up for high performance, with wellness habits that help people keep going and thrive when the pressure is on, as well as those wanting to reduce burnout and absenteeism.",
     subs:[["Wellbeing assessment","See where energy and pressure are building, and what is already working well."],["Wellbeing strategy","A plan that builds wellbeing into how work is done, not only what's on offer."],["Ongoing support","Team sessions, learning content and access to individual support."]]}
  ]}
];
const IDS = ["for-you","for-leaders","for-teams","for-organisations"];
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
document.getElementById("lanes").innerHTML = GROUPS.map((g,i) => `
  <div class="lane" id="${IDS[i]}" style="--lane-wash:${g.wash}">
    <div class="lane-head"><h3>${g.name}</h3><span>${g.who}</span></div>
    ${g.items.map(it => `
      <article class="card"${it.link ? ' id="tp-card"' : ''}>
        ${it.well ? '<span class="well">Wellbeing</span>' : ''}
        <h4>${esc(it.name)}</h4>
        <p class="line">${esc(it.line)}</p>
        <div class="tags">${it.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${it.link ? `<a class="detail-link" href="${it.link}">See ${esc(it.name)} in detail →</a>` : ''}
        <details class="more"><summary>Read more</summary>
          <div class="detail">
            ${it.note ? `<p class="note">${esc(it.note).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}</p>` : ''}
            <p class="best"><b>Who it's for:</b> ${esc(it.best)}</p>
            ${it.subs.map(s=>`<div class="sub"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join("")}
          </div>
        </details>
      </article>`).join("")}
  </div>`).join("");
// Open the lane linked from the Home page, if any
if (location.hash) { const t=document.querySelector(location.hash); if(t) setTimeout(()=>t.scrollIntoView(),0); }

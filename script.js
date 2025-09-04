const quizData = {
  political: [
    { q: "Who wrote 'Politics'?", options: ["Plato", "Aristotle", "Locke", "Kant"], answer: "Aristotle" },
    { q: "In which year was the Indian Constitution adopted?", options: ["1947", "1948", "1949", "1950"], answer: "1949" }
  ]sample2: [
  { q: "Who supported legal theory of right by stating ‘Natural Rights are Nonsense on stilts’?", options: ["Bentham","J.S.Mill","Harold Laski","Robert Nozick"], answer: "Bentham" },
  { q: "Which pair is Not correctly matched?", options: ["Plato- Timaeus","Machiavelli- The Golden Ass","Bentham- A Fragment on Government","Lenin- Neo-colonialism, the Highest Stage of Capitalism"], answer: "Lenin- Neo-colonialism, the Highest Stage of Capitalism" },
  { q: "Who said ‘taxation equals forced labour’?", options: ["Friedrich Hayek","Robert Nozick","Milton Friedman","John Locke"], answer: "Robert Nozick" },
  { q: "Plato describes the human mind by which of his theories?", options: ["The Allegory of cave","Theory of divided line","Theory of Forms","All the Above"], answer: "All the Above" },
  { q: "Who among the following would you associate the concept of “Tyranny of Majority”?", options: ["JS Mill","Alex de Tocqueville","Both A and B","Thomas Paine"], answer: "Both A and B" },
  { q: "Lexical priority in Rawl’s theory of Justice is?", options: ["Equality Principle over Liberty Principle","Principle of benefit to worst off over Principle of Fair Equality of Opportunity","Difference principle over Principle of Equal Liberty","Principle of Equal Liberty over the Difference principle"], answer: "Principle of Equal Liberty over the Difference principle" },
  { q: "Who gave capability approach?", options: ["Amartya Sen","Martha Nussbaum","Both A and B","Gerald Cohen"], answer: "Both A and B" },
  { q: "Which pair is Not correctly matched?", options: ["Dworkin- Equality of Resources","Michael Walzer- Complex Equality","John Rawl- end-state theory of Justice","Robert Nozick- labour theory of property"], answer: "Robert Nozick- labour theory of property" },
  { q: "Which of the following statements accurately describes Plato’s theory of justice?", options: ["Justice is what the strong can do, and the weak must endure.","Justice obtains when inequality benefits the least-advantaged.","Justice is doing one’s own duty as per one’s station of life.","justice is doing good to friends and harm to enemies"], answer: "Justice is doing one’s own duty as per one’s station of life." },
  { q: "Which one in incorrect as influences on Marx’s thoughts/theories?", options: ["Marx used David Richardo’s labour theory of value","Marx used David Hume’s empiricism","Marx used Hegel’s dialectical historical idealism","Marx used Feuerbach’s concepts on materialism and alienation"], answer: "Marx used David Hume’s empiricism" }
  { q: "Sabine said “What Aristotle calls the ideal state is always Plato's second best state”. Plato gave his second best state in which of his books?", options: ["Republic","Crito","Laws","Timaeus"], answer: "Laws" },
  { q: "Which is incorrect about John Locke’s book ‘An Essay Concerning Human Understanding’?", options: ["Concept of tabula rasa","Positive view of human nature","Harbinger of Enlightenment","Refutation to Robert Filmer’s Patriarcha"], answer: "Refutation to Robert Filmer’s Patriarcha" },
  { q: "Which is Not correct about Machiavelli?", options: ["Preferred Republic over Monarchy","Separated politics from religion","Concept of modern nation-state","Advised king not to use religion"], answer: "Advised king not to use religion" },
  { q: "Which is Not correct about theory of Forms by Plato?", options: ["Ideas are substances","Ideas are eternal and universal","Ideas cannot be fully known by knowledge","Ideas are essence of all things"], answer: "Ideas cannot be fully known by knowledge" },
  { q: "Which of these thinkers put women below men?", options: ["Plato & Hegel","Aristotle & Hegel","J.S.Mill & Rousseau","Plato & Rousseau"], answer: "Aristotle & Hegel" },
  { q: "Antonio Gramsci considered civil society as part of Superstructure and arena of ideological battle. Which is correct?", options: ["Both correct","Both incorrect","Only I correct","Only II correct"], answer: "Both correct" },
  { q: "In which thinker’s view education is the process of developing men as natural men and women as natural women?", options: ["Locke","Plato","Aristotle","Rousseau"], answer: "Rousseau" },
  { q: "For whom rights of men were two dimensional?", options: ["Mary Wollstonecraft","Alexandra Kollontai","Thomas Paine","Susan M. Okin"], answer: "Mary Wollstonecraft" },
  { q: "According to Plato population of an ideal state should be?", options: ["50040","50400","5040","4050"], answer: "5040" },
  { q: "Fukuyama declared ‘End of History’ after Cold War in 1992 because Liberalism remained only ideology. Which option?", options: ["A - Both true, R explains A","B - Both true but R not explanation","C - A true but R false","D - A false but R true"], answer: "A - Both true, R explains A" }
  { q: "Which of these is not one of the features of capitalism?", options: ["Antagonistic class structure","Surplus production","Periodic crisis","Fusion of economic and political domains"], answer: "Fusion of economic and political domains" },
  { q: "The term ‘black box‘ is associated with?", options: ["System approach in comparative politics","New Institutional Approach","Historical Approach","Structural-functional approach"], answer: "System approach in comparative politics" },
  { q: "Which of these is not correct about system approach in comparative politics?", options: ["Political system = inter-related institutions","Almond father of system approach","Inputs = demand & support","Outputs = laws & policies","Adopted from biology","Structural-functionalism based on it"], answer: "Almond father of system approach" },
  { q: "According to Almond which is not an 'output' function of a political system?", options: ["Rulemaking","Rule application","Political communication","Rule adjudication"], answer: "Political communication" },
  { q: "Which of these is not one of the differences between New and old Institutionalism?", options: ["Old = hard rules, New = soft rules","Old formal, New empirical","New suffered more from Eurocentrism","Old traditional, New modern"], answer: "New suffered more from Eurocentrism" },
  { q: "Which one of these is not one of the type/category of New Institutionalism?", options: ["Rational Choice","Cultural","Philosophical","Structural"], answer: "Philosophical" },
  { q: "Correct chronological order of approaches?", options: ["1,2,3,4","3,1,2,4","3,4,1,2","3,2,4,1"], answer: "3,2,4,1" },
  { q: "Which one is Not correct about the Modernization theory?", options: ["European phenomenon","Path same for all","Traditional societies follow Europe","Based on functionalism","Progressive comparativists support"], answer: "Progressive comparativists support" },
  { q: "Which are the features of parliamentary form of government?", options: ["1,2,4,5","1,2,4","1,2,3,5","1,3,4,5"], answer: "1,2,4,5" },
  { q: "Which of these is/are Not similarity between Indian and US Constitution?", options: ["2,4,5","4,5,6","4,5,6,7","2,4,5,6,7"], answer: "4,5,6,7" }
  { q: "Essence of NPM (New Public Management) is?", options: ["Citizen as Customer","Management style of private sector","Managerial approach","Economy, efficiency, effectiveness"], answer: "Management style of private sector" },
  { q: "Which Term is Not related to NPA (New Public Administration)?", options: ["Value Neutrality","Social equity","Change oriented","Client focus","Relevant","Value commitment","Responsive and adaptive"], answer: "Value Neutrality" },
  { q: "Which Term is Not related to NPM (New Public Management)?", options: ["Divisionalisation","Citizen as Customer","Entrepreneurial spirit","Social Equity","Private sector style","Outsourcing","Steering not Rowing","Performance evaluation","Economy, efficiency, effectiveness"], answer: "Social Equity" },
  { q: "Who of the following does Not differentiate public and private Administration?", options: ["Josia Stamp","Henry Fayol","Peter Drucker","Mary Follett","Luther Gullick","Paul H Appleby","Herbert Simon"], answer: "Henry Fayol, Mary Follett, Luther Gullick" },
  { q: "Who of the following support managerial view of Administration?", options: ["Simon, Smithburg, Gullick, Thompson, Fayol","All of them","Gullick & Fayol only"], answer: "Simon, Smithburg, Gullick, Thompson, Fayol" },
  { q: "Which is Not one of the features of Public Administration separating it from private?", options: ["Political character","Complex structure","Public accountability","Rigid rules","External financial control","Service motive"], answer: "Complex structure" },
  { q: "Which is Not correct about RTI?", options: ["CBI exempted","PIO must reply in 48 hrs for life cases","Repealed Official Secrets Act 1923","Repealed FOI Act 2002","Adopted 2005, effective Oct 2005","Sweden 1st to implement","Enacted under Article 19(1)(a)"], answer: "Repealed Official Secrets Act 1923" },
  { q: "Which is Not correct about RTE?", options: ["Enacted under Article 21A","Fundamental right to all children free education","86th Amendment 2002","Added 11th duty under 51A","Enacted Aug 2009, effective Apr 2010"], answer: "Fundamental right to all children free education" },
  { q: "Which of these is Not related to e-Governance?", options: ["Red Tape","Transparency","Citizen-centric","Ease of access","Quick service","Digital empowerment"], answer: "Red Tape" },
  { q: "Which is Not correct about Sevottam?", options: ["Seva+Uttam","Citizen centric service model","3 pillars","Proposed by 1st ARC","Nodal ministry = Personnel"], answer: "Proposed by 1st ARC" }
  { q: "Which South Asian Leader floated the idea of SAARC?", options: ["Rajeev Gandhi","Zia-ur-Rahman","Zia-ul-Haq","Indira Gandhi"], answer: "Zia-ur-Rahman" },
  { q: "Which is Incorrect about UN charter and its chapters?", options: ["Peacekeeping = Chapter 6½","Peaceful settlement in Chapter 6","Threats/acts of aggression in Chapter 7","Regional arrangements in Chapter 10"], answer: "Regional arrangements in Chapter 10" },
  { q: "Which is Not correct about UN?", options: ["Reflects post-WWII structure","Adopted Westphalian state system","Hierarchical structure","UNGA like Parliament, UNSC like Government"], answer: "Hierarchical structure" },
  { q: "Who is considered to have coined ‘Cold War’?", options: ["George Orwell","Bernard Baruch","Paul Kennedy","Both A & B"], answer: "Both A & B" },
  { q: "What is correct about ‘New Cold war’ during the Cold War?", options: ["1,3,4","2,3,4","1,2,3","1,4"], answer: "1,2,3" },
  { q: "Which is Not one of the principles of realism by Morgenthau?", options: ["Politics rooted in human nature","Morality shouldn’t guide foreign policy","Coercion only part of foreign policy","National interest = power"], answer: "Coercion only part of foreign policy" },
  { q: "Which IR doctrine envisages an international society of states created by norms and institutions?", options: ["Copenhagen School","Constructivism","English School","Neoliberalism"], answer: "English School" },
  { q: "Match: 1.Jus ad Bellum 2.Jus in Bello 3.Status Quo Ante 4.Détente", options: ["1-C,2-A,3-D,4-B","1-B,2-A,3-D,4-C","1-D,2-A,3-C,4-B","1-A,2-C,3-B,4-D"], answer: "1-C,2-A,3-D,4-B" },
  { q: "Which IR theory deals with non-military aspects of security?", options: ["Copenhagen School","Constructivism","English School","Post-structuralism"], answer: "Copenhagen School" },
  { q: "Which IR theory includes ideas and beliefs in world politics?", options: ["Copenhagen School","Constructivism","English School","Post-structuralism","Critical Theories"], answer: "Constructivism" }
]


 maths_jrf: [
  { q: "If A is a 3×3 matrix with det(A) = 5, then det(2A) = ?", options: ["10","20","40","80"], answer: "40" },
  { q: "The series ∑ (1/n^p) converges if:", options: ["p ≤ 1","p > 1","p ≥ 0","p < 0"], answer: "p > 1" },
  { q: "If f(x) = x^3 – 6x^2 + 9x + 1, then f’(x) has a local minimum at:", options: ["x = 1","x = 2","x = 3","x = 0"], answer: "x = 3" },
  { q: "Solution of differential equation dy/dx = y is:", options: ["y = e^x + C","y = Ce^x","y = e^(x+C)","y = Cx"], answer: "y = Ce^x" },
  { q: "Rank of the matrix [[1,2,3],[2,4,6],[3,6,9]] is:", options: ["1","2","3","0"], answer: "1" },
  { q: "If two dice are rolled, probability that sum = 7 is:", options: ["1/12","1/6","1/36","5/36"], answer: "1/6" },
  { q: "Eigenvalues of matrix [[2,0],[0,3]] are:", options: ["2 and 3","1 and 5","-2 and -3","0 and 5"], answer: "2 and 3" },
  { q: "Laplace transform of sin(at) is:", options: ["a/(s^2 + a^2)","s/(s^2 + a^2)","1/(s^2 + a^2)","a/s"], answer: "a/(s^2 + a^2)" },
  { q: "If X ~ N(0,1), then P(-1 < X < 1) ≈ ?", options: ["0.34","0.68","0.95","0.99"], answer: "0.68" },
  { q: "Number of onto functions from a 3-element set to a 2-element set is:", options: ["6","4","2","8"], answer: "6" }
  { q: "All cats are dogs. All dogs are animals. Conclusion: All cats are animals. True or False?", options: ["True","False","Cannot be determined","Partially true"], answer: "True" },
  { q: "Find the missing number: 2, 6, 12, 20, ?", options: ["28","30","32","34"], answer: "30" },
  { q: "If A is the brother of B, and B is the sister of C, how is A related to C?", options: ["Brother","Sister","Uncle","Cannot be determined"], answer: "Brother" },
  { q: "Statements: Some books are pens. All pens are papers. Conclusion: Some books are papers.", options: ["True","False","Cannot be determined","Both true and false"], answer: "Cannot be determined" },
  { q: "Which is the odd one out? Apple, Mango, Banana, Carrot", options: ["Apple","Mango","Banana","Carrot"], answer: "Carrot" },
  { q: "Arrange in logical order: 1. College, 2. Job, 3. School, 4. Retirement, 5. Marriage", options: ["3,1,5,2,4","1,3,2,5,4","3,1,2,5,4","3,2,1,5,4"], answer: "3,1,5,2,4" },
  { q: "If ‘CAT’ is coded as 3120, then ‘DOG’ is coded as?", options: ["4157","4156","4147","4167"], answer: "4157" },
  { q: "In a certain code, TREE = 8422, then FREE = ?", options: ["7422","8422","7522","7622"], answer: "7422" },
  { q: "A person is facing north, then turns 90° clockwise and then 180° anticlockwise. Now he is facing?", options: ["North","South","East","West"], answer: "West" },
  { q: "If 5 men can complete a work in 20 days, how many men are required to complete the same work in 5 days?", options: ["15","20","25","10"], answer: "20" }
]


  gk: [
    { q: "Capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], answer: "Paris" },
    { q: "Who is the President of India (2025)?", options: ["Narendra Modi", "Droupadi Murmu", "Amit Shah", "Rahul Gandhi"], answer: "Droupadi Murmu" }
  ]
};

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const container = document.getElementById("quiz-container");

if (quizData[subject]) {
  quizData[subject].forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${item.q}</p>` + item.options.map(opt =>
      `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
    ).join("");
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData[subject].forEach((item, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === item.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `Your score: ${score}/${quizData[subject].length}`;
}


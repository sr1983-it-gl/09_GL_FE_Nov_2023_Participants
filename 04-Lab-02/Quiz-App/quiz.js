
function Question (questionText, questionNo) {

  this.questionText = questionText;
  this.questionNo = questionNo;
}

function Answer (answerText){

  this.answerText = answerText;
}

function QuestionAnswerOptions(questionObj, answerOptionsObj){

  this.questionObj = questionObj;
  this.answerOptionsObj = answerOptionsObj;
}

const question1 = new Question("Javascript supports", 1);

const answer1Q1 = new Answer("Functions");
const answer2Q1 = new Answer("XHTML");
const answer3Q1 = new Answer("CSS");
const answer4Q1 = new Answer("HTML");

const qA1 = new QuestionAnswerOptions(
  question1, 
  [answer1Q1, answer2Q1, answer3Q1, answer4Q1]
)

// TODO
// Complete for the remaining 4 question-AnswerOptions
let questions  = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    }
];


// https://jsonformatter.curiousconcept.com/
// ggf. noch weitere JSON-Elemente überlegen  JSON Validator  - Kapitel 06


let currentquestion = 0;

function init() {
      document.getElementById('questionSum').inner.HTML = questions.length;
}

function showquestion() {
    let question = questions[currentquestion];
}
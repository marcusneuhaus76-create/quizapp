let questions  = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },

    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;iframe&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    },

        {
        "question": "Wie stellt man Text am besten FETT dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 1
    },

    
        {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },

        {
        "question": "Wie wählst Du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
];



// https://jsonformatter.curiousconcept.com/
// ggf. noch weitere JSON-Elemente überlegen  JSON Validator  - Kapitel 06


let currentquestion = 0;

function init() {
      document.getElementById('questionSum').innerHTML = questions.length;
      showquestion();
}

function showquestion() {
    let question = questions[currentquestion];
    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML =  question['answer_1'];

    let answer2 = question['answer_2'];
    document.getElementById('answer_2').innerHTML = answer2;

    let answer3 = question['answer_3'];
    document.getElementById('answer_3').innerHTML = answer3;

    let answer4 = question['answer_4'];
    document.getElementById('answer_4').innerHTML = answer4;
}
/* 
08 - Answer Button definieren kommt als nächstes*/
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


let currentQuestion = 0;

let rightAnswers = 0;

function init() {
    mainfunction();
      document.getElementById('questionSum').innerHTML = questions.length;      
      showquestion();
    //   document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
}

function showquestion() {
    let question = questions[currentQuestion]; /* Das 1. Position des Arrays (Stelle '0') wid in der Variablen 'question' gespeichert   */

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
/* 
08 - Answer Button definieren kommt als nächstes   

09 - Funktion "Answer" fertig stellen und jede Zeile kommentieren
*/



function answer(selection){                    /* 'selection' ist der übergebene Parameter, wenn der User eine Antwort anklickt  */
    let question = questions[currentQuestion];  /* Das 1. Position des Arrays (Stelle '0') wid in der Variablen 'quetion' gespeichert   */
   
    console.log('Selected answer is    ', selection);  // Gibt den Inhalt der Variable 'selection' in der Konsole aus. Inhaltvon 'selection' ist der angeklickte Button (z.B. 'answer_1')
    console.log('Current answer is    ', question); // Gibt den Inhalt der Variable 'question' in der Konsole aus. Inhalt von 'question' ist das aktuelle Fragen-Objekt aus dem Array 'questions'
    
    let selectedQuestionNumber = selection.slice(-1); // Variable speichert die letzte Zeichen des Strings 'selection' in der Variable 'selectedQuestionNumber'. Z.B. aus 'answer_1' wird '1'
    
    console.log('selectedQuestionNumber ', selectedQuestionNumber); // Variable 'selectedQuestionNumber' wird in der Konsole ausgegeben
    console.log('Current answer is    ', question['right_answer']); // Gibt die richtige Antwort der aktuellen Frage in der Konsole aus. Z.B. '3' für die erste Frage

    let idOfRightAnswer = `answer_${question['right_answer']}`; /* Die ID der richtigen Antwort wird in der Variable 'idOfRightAnswer' gespeichert. Z.B. 'answer_3' für die erste Frage */

    /* let idOfRightAnswer = `answer_3`;  Die ID der richtigen Antwort wird in der Variable 'idOfRightAnswer' gespeichert. Z.B. 'answer_3' für die erste Frage */

    if(selectedQuestionNumber == question['right_answer']) {  /* Vergleicht die ausgewählte Antwort mit der richtigen Antwort */
        console.log('Richtige Antwort!!');  /* Wenn die Antworten übereinstimmen, wird 'Richtige Antwort' in der Konsole ausgegeben */
        document.getElementById(selection).parentNode.classList.add('bg-success'); /* Der angeklickte Button wird grün hinterlegt */    
        rightAnswers++; /* Die Anzahl der richtigen Antworten wird um 1 erhöht */
        console.log('Richtige Antworten insgesamt: ', rightAnswers); /* Gibt die Gesamtzahl der richtigen Antworten in der Konsole aus */   
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger'); 
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); /* Der angeklickte Button wird rot hinterlegt */
    }
    document.getElementById('next-button').disabled = false; /* Der 'Nächste Frage' Button wird aktiviert */
}

function nextQuestion() {
     currentQuestion++;
     

    if(currentQuestion >= questions.length) {
        endFunction();
        return;

    } else {

        showquestion();

        document.getElementById('next-button').disabled = true;
        selection = null;

        document.getElementById('answer_1').parentNode.classList.remove('bg-success','bg-danger');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success','bg-danger');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success','bg-danger');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success','bg-danger');

        document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
        // document.getElementById('end-screen').style = '';


       /*  document.getElementById('question-screen').style = 'display: none;';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('right-answers').innerHTML = rightAnswers;
        document.getElementById('header-image').src = 'img/trophy.png'; */
    }
}

/* My Proposal  to handle answer selection 

function answer(selection) {
    if selection == questions[currentquestion]['right_answer'] {
        console.log('Richtige Antwort');
    } else {
        console.log('Falsche Antwort');
    }
} */


// 11 - Was passiert bei einer falschen Antwort

// Für 16: Quiz Ende und Ergebnis anzeigen oder Formulieren wie der letzte Screen aussehen soll. Siehe letzten Screenshot. 

function mainfunction() {
    
    document.getElementById('question-screen').innerHTML= `
                                                    <div class="card quiz-card" style="width: 18rem;">
                                                                    <img src ="./img/pencil-5800079_1280.jpg" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title" id="questiontext">Frage</h5>
                                                                        
                                                                        <div class="card quiz-answer-card mb-2" onclick="answer('answer_1')">
                                                                            <div class="card-body" id="answer_1">
                                                                                Antwort
                                                                            </div>
                                                                        </div>

                                                                        <div class="card quiz-answer-card mb-2" onclick="answer('answer_2')">
                                                                            <div class="card-body" id="answer_2">
                                                                                Antwort
                                                                            </div>
                                                                        </div>

                                                                        <div class="card quiz-answer-card mb-2" onclick="answer('answer_3')">
                                                                            <div class="card-body" id="answer_3">
                                                                                Antwort
                                                                            </div>
                                                                        </div>

                                                                        <div class="card quiz-answer-card mb-2" onclick="answer('answer_4')">
                                                                            <div class="card-body" id="answer_4">
                                                                                Antwort
                                                                            </div>
                                                                        </div>

                                                                        <div class="question-footer">
                                                                            <span>  
                                                                                <b id="currentQuestionNumber">1</b> von <b id="questionSum"></b> Fragen
                                                                            </span>    
                                                                                
                                                                            <button onclick="nextQuestion()" class="btn btn-primary" id="next-button" disabled>Nächste Frage</button>
                                                                        </div>
                                                                                                
                                                                    </div>
                                                                </div>
                                                                        `;
}

function endFunction() {   
     console.log('Quiz beendet');
     document.getElementById('question-screen').innerHTML= `<div class="card quiz-card" style="width: 18rem;">
                                                                    <img src ="./img/pencil-5800079_1280.jpg" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">Quiz beendet</h5>
                                                                        <p class="card-text">Herzlichen Glückwunsch! Sie haben das Quiz erfolgreich abgeschlossen.</p>
                                                                        <button onclick="restartQuiz()" class="btn btn-primary">Neustart</button>
                                                                    </div>
                                                                </div>`;
}
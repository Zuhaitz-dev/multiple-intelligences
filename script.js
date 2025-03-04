// Global current language variable (default is English)
let currentLang = "en";

const translations = {
    en: {
        intelligences: {
            linguistic: "Linguistic",
            logical: "Logical-Mathematical",
            interpersonal: "Interpersonal",
            intrapersonal: "Intrapersonal",
            musical: "Musical",
            naturalistic: "Naturalistic",
            spatial: "Spatial",
            existential: "Existential"
        },
        questions: {
            q1: "Do you enjoy reading books or writing stories?",
            q2: "Do you find it easy to learn new languages?",
            q3: "Do you often engage in debates or discussions?",
            q4: "Do you enjoy solving complex mathematical problems?",
            q5: "Are you good at recognizing patterns in data?",
            q6: "Do you like analyzing logical sequences?",
            q7: "Do you easily understand others' feelings?",
            q8: "Do you prefer working in groups?",
            q9: "Are you good at resolving conflicts?",
            q10: "Do you spend time reflecting on your thoughts?",
            q11: "Do you prefer working independently?",
            q12: "Are you aware of your strengths/weaknesses?",
            q13: "Can you easily recognize musical patterns?",
            q14: "Do you often create melodies in your head?",
            q15: "Are you sensitive to sounds in your environment?",
            q16: "Do you enjoy categorizing plants/animals?",
            q17: "Are you sensitive to nature changes?",
            q18: "Do you like outdoor activities?",
            q19: "Are you good at reading maps?",
            q20: "Do you enjoy visual arts?",
            q21: "Can you easily visualize 3D objects?",
            q22: "Do you ponder life's big questions?",
            q23: "Are you interested in philosophy?",
            q24: "Do you think about humanity's purpose?"
        },
        scale: ["1", "2", "3", "4", "5"],
        submitButton: "Submit",
        resultTitle: "Result"
    },
    ro: {
        intelligences: {
            linguistic: "Lingvistică",
            logical: "Logică-Matematică",
            interpersonal: "Interpersonală",
            intrapersonal: "Intrapersonală",
            musical: "Muzicală",
            naturalistic: "Naturalistă",
            spatial: "Spațială",
            existential: "Existențială"
        },
        questions: {
            q1: "Îți place să citești cărți sau să scrii povești?",
            q2: "Îți este ușor să înveți limbi străine?",
            q3: "Te implici adesea în dezbateri sau discuții?",
            q4: "Îți place să rezolvi probleme matematice complexe?",
            q5: "Ești bun la recunoașterea tiparelor în date?",
            q6: "Îți place să analizezi secvențe logice?",
            q7: "Înțelegi cu ușurință sentimentele altora?",
            q8: "Preferi să lucrezi în grup?",
            q9: "Ești bun la rezolvarea conflictelor?",
            q10: "Petreci timp reflectând asupra gândurilor tale?",
            q11: "Preferi să lucrezi independent?",
            q12: "Ești conștient de punctele tale forte/slabe?",
            q13: "Poți recunoaște cu ușurință tipare muzicale?",
            q14: "Creezi adesea melodii în mintea ta?",
            q15: "Ești sensibil la sunetele din mediul tău?",
            q16: "Îți place să categorizezi plantele/animalele?",
            q17: "Ești sensibil la schimbările din natură?",
            q18: "Îți plac activitățile în aer liber?",
            q19: "Ești bun la citirea hărților?",
            q20: "Îți plac artele vizuale?",
            q21: "Poți vizualiza cu ușurință obiecte 3D?",
            q22: "Reflectezi asupra marilor întrebări ale vieții?",
            q23: "Ești interesat de filosofie?",
            q24: "Te gândești la scopul umanității?"
        },
        scale: ["1", "2", "3", "4", "5"],
        submitButton: "Trimite",
        resultTitle: "Rezultat"
    },
    es: {
        intelligences: {
            linguistic: "Lingüística",
            logical: "Lógico-Matemática",
            interpersonal: "Interpersonal",
            intrapersonal: "Intrapersonal",
            musical: "Musical",
            naturalistic: "Naturalista",
            spatial: "Espacial",
            existential: "Existencial"
        },
        questions: {
            q1: "¿Disfrutas leyendo libros o escribiendo historias?",
            q2: "¿Te resulta fácil aprender nuevos idiomas?",
            q3: "¿Participas a menudo en debates o discusiones?",
            q4: "¿Disfrutas resolver problemas matemáticos complejos?",
            q5: "¿Eres bueno reconociendo patrones en datos?",
            q6: "¿Te gusta analizar secuencias lógicas?",
            q7: "¿Entiendes fácilmente los sentimientos de los demás?",
            q8: "¿Prefieres trabajar en grupo?",
            q9: "¿Eres bueno resolviendo conflictos?",
            q10: "¿Pasas tiempo reflexionando sobre tus pensamientos?",
            q11: "¿Prefieres trabajar de manera independiente?",
            q12: "¿Eres consciente de tus fortalezas y debilidades?",
            q13: "¿Puedes reconocer fácilmente patrones musicales?",
            q14: "¿A menudo creas melodías en tu cabeza?",
            q15: "¿Eres sensible a los sonidos de tu entorno?",
            q16: "¿Disfrutas categorizando plantas o animales?",
            q17: "¿Eres sensible a los cambios en la naturaleza?",
            q18: "¿Te gustan las actividades al aire libre?",
            q19: "¿Eres bueno leyendo mapas?",
            q20: "¿Disfrutas de las artes visuales?",
            q21: "¿Puedes visualizar fácilmente objetos en 3D?",
            q22: "¿Reflexionas sobre las grandes preguntas de la vida?",
            q23: "¿Te interesa la filosofía?",
            q24: "¿Piensas en el propósito de la humanidad?"
        },
        scale: ["1", "2", "3", "4", "5"],
        submitButton: "Enviar",
        resultTitle: "Resultado"
    }
};

// Mapping of questions to intelligence types
const questionMapping = {
    q1: 'linguistic',   q2: 'linguistic',      q3: 'linguistic',
    q4: 'logical',      q5: 'logical',         q6: 'logical',
    q7: 'interpersonal',q8: 'interpersonal',   q9: 'interpersonal',
    q10: 'intrapersonal',q11: 'intrapersonal',  q12: 'intrapersonal',
    q13: 'musical',     q14: 'musical',         q15: 'musical',
    q16: 'naturalistic',q17: 'naturalistic',    q18: 'naturalistic',
    q19: 'spatial',     q20: 'spatial',         q21: 'spatial',
    q22: 'existential', q23: 'existential',     q24: 'existential'
};

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update all questions and scale options (1-5)
    // For each question, look for 5 option spans with id `qX-optionY`
    for (let i = 1; i <= 24; i++) {
        const textEl = document.getElementById(`q${i}-text`);
        if (textEl) {
            textEl.textContent = t.questions[`q${i}`];
        }
        for (let opt = 1; opt <= 5; opt++) {
            const optionEl = document.getElementById(`q${i}-option${opt}`);
            if (optionEl) {
                optionEl.textContent = t.scale[opt - 1];
            }
        }
    }

    // Update submit button and result title
    const submitButtonEl = document.getElementById('submit-button');
    if (submitButtonEl) {
        submitButtonEl.textContent = t.submitButton;
    }

    const resultTitleEl = document.getElementById('result-title');
    if (resultTitleEl) {
        resultTitleEl.textContent = t.resultTitle;
    }

    // Update displayed dominant intelligence (if any)
    const resultIntelligenceEl = document.getElementById('dominant-intelligence');
    if(resultIntelligenceEl && resultIntelligenceEl.textContent && resultIntelligenceEl.dataset.intelligence) {
        resultIntelligenceEl.textContent = t.intelligences[resultIntelligenceEl.dataset.intelligence];
    }
}

// Function to shuffle and numerate all question elements
function shuffleAndNumerateQuestions() {
    const form = document.getElementById("quiz-form");
    // Select all question elements (they are inside .question elements)
    const questionNodes = Array.from(form.querySelectorAll(".question"));
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = questionNodes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionNodes[i], questionNodes[j]] = [questionNodes[j], questionNodes[i]];
    }
    
    // Create a container to hold the randomized questions
    const randomizedContainer = document.createElement("div");
    randomizedContainer.id = "randomized-questions";
    
    // Append questions with numbering
    questionNodes.forEach((question, index) => {
        const pElem = question.querySelector("p");
        if (pElem) {
            // Prepend the question number
            pElem.textContent = (index + 1) + ". " + pElem.textContent;
        }
        randomizedContainer.appendChild(question);
    });
    
    // Remove the original question groups (they were used to group questions)
    const groupNodes = form.querySelectorAll(".question-group");
    groupNodes.forEach(group => group.remove());
    
    // Insert the randomized questions before the submit button
    const submitBtn = form.querySelector("button[type='submit']");
    form.insertBefore(randomizedContainer, submitBtn);
}

// Handle form submission and calculate dominant intelligence
document.addEventListener("DOMContentLoaded", () => {
    // Set default language on load
    changeLanguage(currentLang);
  
    // Attach language switcher click events (using data-lang)
    document.querySelectorAll(".language-switcher button").forEach(button => {
        button.addEventListener("click", () => {
            const clickSound = document.getElementById("click-sound");
            if (clickSound) {
                clickSound.play().catch(err => console.log("click-sound play error", err));
            }
            const lang = button.dataset.lang;
            changeLanguage(lang);
        });
    });
  
    // Attach click event for all radio inputs to play click sound
    document.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.addEventListener("click", () => {
            const clickSound = document.getElementById("click-sound");
            if (clickSound) {
                clickSound.play().catch(err => console.log("click-sound play error", err));
            }
        });
    });
  
    // Handle quiz form submission
    document.getElementById("quiz-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const scores = {
            linguistic: 0,
            logical: 0,
            interpersonal: 0,
            intrapersonal: 0,
            musical: 0,
            naturalistic: 0,
            spatial: 0,
            existential: 0
        };

        // Sum numeric ratings by intelligence type
        for (let [question, answer] of formData.entries()) {
            const rating = parseInt(answer);
            const type = questionMapping[question];
            if (type && !isNaN(rating)) {
                scores[type] += rating;
            }
        }

        // Determine dominant intelligence (first highest if tie)
        let dominant = "";
        let max = -1;
        for (let type in scores) {
            if (scores[type] > max) {
                max = scores[type];
                dominant = type;
            }
        }

        // Show result with updated text in the current language
        const resultEl = document.getElementById("result");
        const resultIntelligenceEl = document.getElementById("dominant-intelligence");
        resultIntelligenceEl.dataset.intelligence = dominant;
        resultIntelligenceEl.textContent = translations[currentLang].intelligences[dominant];
        resultEl.classList.remove("hidden");

        // Play result sound
        const resultSound = document.getElementById("result-sound");
        if (resultSound) {
            resultSound.play().catch(err => console.log("result-sound play error", err));
        }
    });

    // Randomize and numerate questions after language initialization
    shuffleAndNumerateQuestions();

    const header = document.querySelector('.site-header');
    // Listen for mousemove over document
    document.addEventListener('mousemove', (e) => {
        if(e.clientY <= 50) { // if mouse is near the top 50px
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });

    // Alternatively, you can use scroll event if you want show on scroll upward
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.site-header');
    document.addEventListener('mousemove', (e) => {
        if (e.clientY <= 50) { // Show header when mouse is in the top 50px
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });
});
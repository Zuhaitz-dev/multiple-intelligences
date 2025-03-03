// Sound effects
const clickSound = document.getElementById('click-sound');
const resultSound = document.getElementById('result-sound');

// Play click sound on radio button click
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', () => {
        clickSound.play();
    });
});

// Play click sound on button hover and click
const button = document.querySelector('button');
button.addEventListener('mouseenter', () => clickSound.play());
button.addEventListener('click', () => clickSound.play());

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    // Check if all questions are answered
    const allQuestionsAnswered = Array.from(document.querySelectorAll('.question')).every(question => {
        return question.querySelector('input[type="radio"]:checked') !== null;
    });

    if (!allQuestionsAnswered) {
        e.preventDefault(); // Prevent form submission
        alert('Please answer all questions before submitting.'); // Show a warning message
        return;
    }

    e.preventDefault();

    // Simulate a loading state
    button.textContent = 'Calculating...';
    button.disabled = true;

    setTimeout(() => {
        // Get selected answers
        const answers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value,
            q4: document.querySelector('input[name="q4"]:checked')?.value,
            q5: document.querySelector('input[name="q5"]:checked')?.value,
            q6: document.querySelector('input[name="q6"]:checked')?.value,
            q7: document.querySelector('input[name="q7"]:checked')?.value,
            q8: document.querySelector('input[name="q8"]:checked')?.value,
            q9: document.querySelector('input[name="q9"]:checked')?.value,
            q10: document.querySelector('input[name="q10"]:checked')?.value,
        };

        // Calculate scores for each intelligence type
        const scores = {
            linguistic: 0,
            logical: 0,
            interpersonal: 0,
            intrapersonal: 0,
            musical: 0,
        };

        // Scoring logic
        for (const key in answers) {
            const value = answers[key];
            if (value !== 'none') {
                scores[value]++;
            }
        }

        // Display result
        const dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        document.getElementById('dominant-intelligence').textContent = dominant.charAt(0).toUpperCase() + dominant.slice(1);
        document.getElementById('result').classList.remove('hidden');

        // Play success sound
        resultSound.play();

        // Reset button
        button.textContent = 'Submit';
        button.disabled = false;
    }, 1000); // Simulate a 1-second delay
});
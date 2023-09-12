// Get the generate button element
const generateButton = document.getElementById('generate-button');

// Get the generated text element
const generatedText = document.getElementById('generated-text');

// Get the user input text input field
const userInput = document.getElementById('user-input');

// Define an array of sample texts
const sampleTexts = [
    'Please take your dog, Cali, out for a walk – he really needs some exercise!',
    'What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.',
    'Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.',
    'Do you know why all those chemicals are so hazardous to the environment?',
    'You never did tell me how many copper pennies where in that jar; how come?',
    'Max Joykner sneakily drove his car around every corner looking for his dog.',
    'The two boys collected twigs outside, for over an hour, in the freezing cold!',
    'When do you think they will get back from their adventure in Cairo, Egypt?',
    'Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.',
    'We climbed to the top of the mountain in just under two hours; isn’t that great?',
    'Hector quizzed Mr. Vexife for two hours, but he was unable to get any information.',
    'I have three things to do today: wash my car, call my mother, and feed my dog.',
    'Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.',
    'The Reckson family decided to go to an amusement park on Wednesday.',
    'That herd of bison seems to be moving quickly; does that seem normal to you?',
    'All the grandfather clocks in that store were set at exactly 3 o’clock.',
    'There are so many places to go in Europe for a vacation--Paris, Rome, Prague, etc.',
    'Those diamonds and rubies will make a beautiful piece of jewelry.',
    'The steamboats seemed to float down the Mississippi River at a snail’s pace.',
    'In order to keep up at that pace, Zack Squeve would have to work all night.',
]

// Function to generate random text
function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    const randomText = sampleTexts[randomIndex];
    generatedText.textContent = randomText;
    userInput.value = ''; // Clear the input field
}

// Add a click event listener to the generate button
generateButton.addEventListener('click', generateRandomText);

// Initial text generation
generateRandomText();

// Add an input event listener to the user input field
userInput.addEventListener('input', () => {
    const inputText = userInput.value;
    const generatedTextContent = generatedText.textContent;

    // Compare the user input with the generated text
    let isCorrect = true;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] !== generatedTextContent[i]) {
            isCorrect = false;
            break;
        }
    }

    // Apply styling based on correctness
    if (isCorrect) {
        generatedText.classList.remove('incorrect');
        generatedText.classList.add('correct');
    } else {
        generatedText.classList.remove('correct');
        generatedText.classList.add('incorrect');
    }
});

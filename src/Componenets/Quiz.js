import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css';

function Quiz() {
    const questions = [
        {
            question: "What does HTML stand for?",
            options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Langua'],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            options: ['<link>', '<a>', '<href>', '<hyperlink>'],
            answer: "<a>"
        },
        {
            question: "Which of the following is the correct way to make text bold in HTML?",
            options: ['<b>', '<bold>', '<strong>', 'Both A and C'],
            answer: "Both A and C"
        },
        {
            question: "What is the purpose of the <title> tag in HTML?",
            options: ['To define the header of the webpage', 'To define the title of the document displayed in the browser\'s title bar', 'To add a title to an image', 'To create a clickable link'],
            answer: "To define the title of the document displayed in the browser's title bar"
        },
        {
            question: "Which HTML tag is used to insert an image?",
            options: ['<img>', '<image>', '<src>', '<pic>'],
            answer: "<img>"
        },
        {
            question: "What does CSS stand for?",
            options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
            answer: "Cascading Style Sheets"
        },
        {
            question: "How do you make text bold in CSS?",
            options: ['font-weight: bold', 'text-weight: bold', 'font-style: bold', 'bold: true'],
            answer: "font-weight: bold"
        },
        {
            question: "Which is the correct syntax to apply a class in CSS?",
            options: ['.classname { }', '#classname { }', 'classname { }', '*classname { }'],
            answer: ".classname { }"
        },
        {
            question: "Which property is used to control the space between lines of text?",
            options: ['letter-spacing', 'line-height', 'text-spacing', 'spacing'],
            answer: "line-height"
        },
        {
            question: "What is React?",
            options: ['CSS framework', "React library", "React framework", "Testing tool"],
            answer: "React library"
        },
        {
            question: "What is 2+2?",
            options: ['6', '4', '5', '7'],
            answer: '4'
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const handleClick = (option) => {
        setCurrentAnswer(option);
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    };

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                <div>
                    <QuestionList 
                        question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options}
                        handleClick={handleClick}
                        currentAnswer={currentAnswer}
                    />
                    <button 
                        disabled={currentAnswer === null}
                        className={currentAnswer === null ? 'button-disable' : 'button'}
                        onClick={handleNextQuestion}
                    >
                        Next Question
                    </button>
                </div>
            ) : (
                <div>Your score is {score}</div>
            )}
        </div>
    );
}

export default Quiz;
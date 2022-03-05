import { Question } from "./question.js"

export class Quiz{
    
    questionsIndex = 0
    score = 0
    
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions = questions
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestionIndex(){
        return this.questions[this.questionsIndex];
    }

    isEnded(){
        return this.questions.length === this.questionsIndex;
    }

    /**
     * 
     * @param {string} answer 
     */

    guess(answer){
        console.log(answer);
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionsIndex++;
    }
}
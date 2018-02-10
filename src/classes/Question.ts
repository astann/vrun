import {get} from '../utils';

/** Questions server URL. */
const api = process.env.QUESTIONS_API;

/**
 * Question methods.
 */
export class Question {
    /**
     * Get a question from API.
     *
     * @param {number} questionId Question ID.
     */
    public static getQuestion = (questionId: number) => {
        return get(`${api}/questions/id/${questionId}`);
    }

    /**
     * Get number of available questions from API.
     */
    public static getQuestionsCount = () => {
        return get(`${api}/questions/count`);
    }
}

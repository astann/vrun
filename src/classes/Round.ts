import * as i18n from 'i18next';

import {DEFAULT_PHASE_LENGTH_SECONDS} from '../constants';
import {getState} from '../state';
import {sendMessageTo} from '../utils';
import {Question} from './Question';

/**
 * Round loop of the game.
 */
export class Round {
    /** Length of the phases in milliseconds (question, voting, results). */
    private phaseLengthInSeconds: number = DEFAULT_PHASE_LENGTH_SECONDS;
    /** Timer for the question phase. */
    private questionTimer = null;
    /** Timer for the voting phase. */
    private votingTimer = null;
    /** Timer for the results phase. */
    private resultsTimer = null;

    constructor(phaseLengthSeconds: string) {
        if (phaseLengthSeconds) {
            this.phaseLengthInSeconds = parseInt(phaseLengthSeconds, 10);
        }
    }

    /**
     * Start the round loop.
     */
    public start = () => {
        const runLoop = () => {
            this.startQuestion();

            this.questionTimer = setTimeout(() => {
                this.startVoting();

                this.votingTimer = setTimeout(() => {
                    this.getResults();

                    this.resultsTimer = setTimeout(() => {
                        runLoop();
                    }, this.phaseLengthInSeconds * 1000);
                }, this.phaseLengthInSeconds * 1000);
            }, this.phaseLengthInSeconds * 1000);
        };

        runLoop();
    }

    /**
     * Stop the round loop.
     */
    public stop = () => {
        this.questionTimer.clearTimeout();
        this.resultsTimer.clearInterval();
        this.votingTimer.clearTimeout();
    }

    /**
     * Get and display the question.
     */
    private startQuestion = () => {
        let {players, questionsCount} = {...getState()};

        const questionId = Math.floor(Math.random() * questionsCount);

        Question.getQuestion(questionId).then((result) => {
            // TODO sendMessageToRoom. Import getState in utils and get the list of players there.
            sendMessageTo(
                players.map((player) => player.id.toString()),
                i18n.t('startQuestion', {
                    count: this.phaseLengthInSeconds,
                    question: result.question,
                }),
            );
        });
    }

    /**
     * Inform players about voting.
     */
    private startVoting = () => {
        let {players} = {...getState()};

        // TODO sendMessageToRoom. Import getState in utils and get the list of players there.
        sendMessageTo(
            players.map((player) => player.id.toString()),
            i18n.t('startVoting', {count: this.phaseLengthInSeconds}),
        );
    }

    /**
     * Display round results.
     */
    private getResults = () => {
        let {players} = {...getState()};

        // TODO sendMessageToRoom. Import getState in utils and get the list of players there.
        sendMessageTo(
            players.map((player) => player.id.toString()),
            i18n.t('roundResults'),
        );
    }
}

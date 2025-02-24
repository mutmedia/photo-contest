import { Injectable } from '@angular/core';
import { VoteOptions } from '../vote-options';
import { VoteSelection } from '../vote-selection';
import { VotingAlgorithm } from '../voting-algorithm-interface';
import { VoteResult } from '../vote-result';

@Injectable({
  providedIn: 'root'
})

export class EliminationAlgorithmService implements VotingAlgorithm {
  readonly totalDesiredScore = 1000;

  private isInitialized: boolean;
  private remainingRounds: number;
  private currentLevelScore: number;
  private elementsOnCurrentLevel: number[];
  private elementsOnNextLevel: number[];
  private results: VoteResult[];

  constructor() {}

  public initialize(elements: number[]) {
    let quantityOfElements = elements.length;
    this.isInitialized = true;
    this.currentLevelScore = 1;
    this.remainingRounds = this.getInitialQuantityOfRounds(quantityOfElements);
    let firstLevelSize = this.getQuantityOfElementsOnFirstLevel(quantityOfElements);
    this.elementsOnCurrentLevel = elements.slice(0, firstLevelSize);
    this.elementsOnNextLevel = elements.slice(firstLevelSize);
    this.results = new Array(0);
  }

  public getRemainingQuantityOfRounds(): number {
    this.ensureIsInitialized();
    return this.remainingRounds;
  }

  public getInitialQuantityOfRounds(numberOfElements: number): number {
    return numberOfElements - 1;
  }

  public getVoteOptions(): VoteOptions {
    this.ensureVotingIsNotOver();
    let length = this.elementsOnCurrentLevel.length;
    let optionB = this.elementsOnCurrentLevel[length - 1];
    let optionA = this.elementsOnCurrentLevel[length - 2];
    return { optionA: optionA, optionB: optionB };
  }

  public voteFor(selected: VoteSelection) {
    this.ensureVotingIsNotOver();
    this.remainingRounds--;
    let optionB = this.elementsOnCurrentLevel.pop();
    let optionA = this.elementsOnCurrentLevel.pop();
    if (selected == VoteSelection.OptionA) {
      this.results.push({elementIndex: optionB, score: this.currentLevelScore});
      this.elementsOnNextLevel.push(optionA);
    } else if (selected == VoteSelection.OptionB) {
      this.results.push({elementIndex: optionA, score: this.currentLevelScore});
      this.elementsOnNextLevel.push(optionB);
    }

    if (this.remainingRounds == 0) {
      let index = this.elementsOnNextLevel[0];
      this.results.push({elementIndex: index, score: 2 * this.currentLevelScore});
      this.results = this.normalizeScores(this.results);
      return;
    }

    if (this.elementsOnCurrentLevel.length == 0) {
      this.elementsOnCurrentLevel = this.elementsOnNextLevel;
      this.elementsOnNextLevel = new Array(0);
      this.currentLevelScore *= 2;
    }
  }

  public getResults(): VoteResult[] {
    this.ensureVotingIsOver();
    return this.results;
  }

  private ensureIsInitialized() {
    if (!this.isInitialized) {
      throw new Error("Service should be initialized first.")
    }
  }

  private ensureVotingIsNotOver() {
    if (this.remainingRounds <= 0) {
      throw new Error("Voting is over.")
    }
  }

  private ensureVotingIsOver() {
    if (this.remainingRounds > 0) {
      throw new Error("Voting is not over.")
    }
  }

  private getQuantityOfElementsOnFirstLevel(totalQuantity: number) {
    let powerOfTwoOfFirstCompleteLevel = Math.floor(Math.log2(totalQuantity));
    let sizeOfFirstCompleteLevel = Math.pow(2, powerOfTwoOfFirstCompleteLevel);
    return sizeOfFirstCompleteLevel == totalQuantity ?
      totalQuantity :
      2 * (totalQuantity - sizeOfFirstCompleteLevel);
  }

  private normalizeScores(results: VoteResult[]): VoteResult[] {
    let reducedResults = results.map(r => { return { elementIndex: r.elementIndex, score: Math.floor(r.score/2) } });
    let totalScore = reducedResults.map(r => r.score).reduce((prev, next) => prev + next);
    let adjustFactor = this.totalDesiredScore / totalScore;
    return reducedResults.map(r => { 
      return { elementIndex: r.elementIndex, score: Math.round(r.score * adjustFactor) };
    });
  }
}

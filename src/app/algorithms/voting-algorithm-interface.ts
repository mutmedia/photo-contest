import { VoteOptions } from './vote-options';
import { VoteSelection } from './vote-selection';
import { VoteResult } from './vote-result';

export interface VotingAlgorithm {
  initialize(elements: number[]): void;
  getRemainingQuantityOfRounds(): number;
  getVoteOptions(): VoteOptions;
  voteFor(selected: VoteSelection): void;
  getResults(): VoteResult[];
}
import { steps as erc20PaymasterSteps } from './erc20-paymaster';
import { steps as howToTestContractsSteps } from './how-to-test-contracts';
import { steps as dailySpendLimitSteps } from './daily-spend-limit';

export function getConfig(tutorialName: string) {
  let steps;
  switch (tutorialName) {
    case 'erc20-paymaster':
      steps = erc20PaymasterSteps;
      break;
    case 'how-to-test-contracts':
      steps = howToTestContractsSteps;
      break;
    case 'daily-spend-limit':
      steps = dailySpendLimitSteps;
      break;
    default:
      break;
  }

  return steps;
}

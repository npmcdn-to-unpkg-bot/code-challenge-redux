export const SELECT_CHALLENGE = 'SELECT_CHALLENGE';

export function selectChallenge(challenge) {
  return {
    type: SELECT_CHALLENGE,
    challenge,
  };
}

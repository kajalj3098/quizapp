export const shuffleArray = (array) =>
  [...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (
  amount,
  difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&type=multiple&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

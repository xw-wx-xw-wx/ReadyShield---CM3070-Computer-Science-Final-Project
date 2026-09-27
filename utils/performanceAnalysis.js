const QUESTIONS_PER_CATEGORY = 20;
const MIN_ATTEMPTS = 5;
const MIN_UNIQUE_QUESTIONS = 3;
const RECENT_ATTEMPT_COUNT = 5;

const categoryOrder = [
  'general',
  'earthquake',
  'weather',
  'fire',
  'first_aid',
  'recovery'
];

export function calculateCategoryPerformance(answerHistory) {
  const performance = {};

  answerHistory.forEach((attempt) => {
    if (!performance[attempt.category]) {
      performance[attempt.category] = {
        correct: 0,
        attempts: 0,
        questionIds: new Set(),
        recentAttempts: []
      };
    }

    const data = performance[attempt.category];

    data.attempts += 1;
    data.questionIds.add(String(attempt.questionId));

    if (attempt.correct === true) {
      data.correct += 1;
    }

    // Keep attempts in chronological order.
    data.recentAttempts.push(attempt.correct === true);
  });

  Object.values(performance).forEach((data) => {
    // Overall historical performance.
    data.accuracy = (data.correct / data.attempts) * 100;
    data.uniqueQuestions = data.questionIds.size;

    // Coverage of the available question bank.
    data.coverage =
      Math.min(data.uniqueQuestions / QUESTIONS_PER_CATEGORY, 1) * 100;

    // Look at only the latest attempts in this category.
    const recent = data.recentAttempts.slice(-RECENT_ATTEMPT_COUNT);

    const recentCorrect = recent.filter(
      (correct) => correct === true
    ).length;

    data.recentAccuracy =
      recent.length > 0
        ? (recentCorrect / recent.length) * 100
        : 0;

    /*
     * Adaptive practice priority:
     *
     * 50% overall weakness
     * 30% recent weakness
     * 20% lack of question coverage
     *
     * Higher score = greater need for practice.
     */
    const overallWeakness = 100 - data.accuracy;
    const recentWeakness = 100 - data.recentAccuracy;
    const coverageGap = 100 - data.coverage;

    data.practicePriority =
      overallWeakness * 0.5 +
      recentWeakness * 0.3 +
      coverageGap * 0.2;

    // Internal working data is no longer needed.
    delete data.recentAttempts;
  });

  return performance;
}

export function findRecommendedCategory(answerHistory) {
  const performance = calculateCategoryPerformance(answerHistory);

  let recommendedCategory = null;
  let highestPriority = -1;

  categoryOrder.forEach((category) => {
    const data = performance[category];

    if (
      data &&
      data.attempts >= MIN_ATTEMPTS &&
      data.uniqueQuestions >= MIN_UNIQUE_QUESTIONS &&
      data.practicePriority > highestPriority
    ) {
      highestPriority = data.practicePriority;
      recommendedCategory = category;
    }
  });

  return recommendedCategory;
}
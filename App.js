// WRITTEN BY ME
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, AppState, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { questions } from './data/questions';
import { calculateCategoryPerformance, findRecommendedCategory } from './utils/performanceAnalysis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tips } from './data/tips';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
// WRITTEN BY ME
const HISTORY_STORAGE_KEY = 'readyshield.answerHistory.v1';
const MISSIONS_STORAGE_KEY = 'readyshield.missions.v1';
const Stack = createNativeStackNavigator();
const categoryNames = {
  general: "General Preparedness",
  earthquake: "Earthquake Preparedness",
  weather: "Floods & Severe Weather",
  flood: "Floods & Severe Weather",
  fire: "Fire Safety",
  first_aid: "First Aid & Emergency Response",
  firstAid: "First Aid & Emergency Response",
  recovery: "Recovery & Aftermath"
};
const preparednessMissions = [
  {
    id: 'emergency_contacts',
    title: 'Review emergency contacts',
    description:
      'Make sure you know how to find the appropriate emergency and support contacts for your area.',
    category: 'General'
  },
  {
    id: 'emergency_plan',
    title: 'Review your emergency plan',
    description:
      'Think through how your household would communicate and what you would do during an emergency.',
    category: 'General'
  },
  {
    id: 'emergency_supplies',
    title: 'Review emergency supplies',
    description:
      'Review trusted preparedness guidance about useful emergency supplies and identify anything that may need attention.',
    category: 'General'
  },
  {
    id: 'weather_information',
    title: 'Know where to get weather information',
    description:
      'Identify an official source you can use for severe weather warnings and safety information.',
    category: 'Weather'
  },
  {
    id: 'fire_plan',
    title: 'Review your fire escape plan',
    description:
      'Review how you would leave safely during a fire and make sure your household understands the plan.',
    category: 'Fire'
  },
  {
    id: 'first_aid_awareness',
    title: 'Explore first-aid training',
    description:
      'Find out where recognised practical first-aid training is available in your area.',
    category: 'First Aid'
  }
];
// WRITTEN BY ME
function HomeScreen({ navigation , onResetProgress}) {
  return (
    <SafeAreaView style={styles.quizScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/ReadyShieldLogo.png')}
          resizeMode="contain"
          accessibilityLabel="ReadyShield"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            onPress={() => navigation.navigate('Achievements')}
          >
            <Text style={styles.buttonText}>
              Preparedness Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            onPress={() =>
              navigation.navigate('Quizzes', {
                category: null
              })
            }
          >
            <Text style={styles.buttonText}>
              Quizzes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Missions')}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Preparedness Missions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            onPress={() => navigation.navigate("Today's Hack")}
          >
            <Text style={styles.buttonText}>
              Hack of the Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.buttonText}>
              About & Sources
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetProgressButton}
            onPress={() => {
              Alert.alert(
                'Reset all progress?',
                'This will clear your Preparedness Profile and all completed Preparedness Missions. This cannot be undone.',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel'
                  },
                  {
                    text: 'Reset',
                    style: 'destructive',
                    onPress: onResetProgress
                  }
                ]
              );
            }}
            accessibilityRole="button"
            accessibilityLabel="Reset all progress"
          >
            <Text style={styles.resetProgressButtonText}>
              Reset All Progress
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function AchieveScreen({ navigation, answerHistory }) {
  const performance = calculateCategoryPerformance(answerHistory);
  const recommendedCategory = findRecommendedCategory(answerHistory);

  const categoryOrder = [
    'general',
    'earthquake',
    'weather',
    'fire',
    'first_aid',
    'recovery'
  ];

  const categoryKeys = categoryOrder.filter(
    (category) => performance[category]?.attempts > 0
  );

  const hasEligibleCategory = categoryKeys.some((category) => {
    const data = performance[category];

    return data.attempts >= 5 && data.uniqueQuestions >= 3;
  });

  const correctAnswers = answerHistory.filter(
    (attempt) => attempt.correct === true
  ).length;

  const overallAccuracy = answerHistory.length
    ? Math.round((correctAnswers / answerHistory.length) * 100)
    : null;

  const uniqueQuestions = new Set(
    answerHistory.map((attempt) => String(attempt.questionId))
  ).size;

  return (
    <SafeAreaView style={styles.quizScreen}>
      <ScrollView
        style={styles.quizScroll}
        contentContainerStyle={styles.quizContent}
      >
        <Text style={styles.quizHeading}>
          Preparedness Profile
        </Text>

        <Text style={styles.aboutBody}>
          These results describe your quiz answers. They do not
          certify emergency-response skills.
        </Text>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutSectionTitle}>Your progress</Text>

          <Text style={styles.aboutBody}>
            Accuracy: {overallAccuracy === null
              ? 'No answers yet'
              : `${overallAccuracy}%`}
          </Text>

          <Text style={styles.aboutBody}>
            Attempts: {answerHistory.length}
          </Text>

          <Text style={styles.aboutBody}>
            Unique questions: {uniqueQuestions}
          </Text>
        </View>

        {categoryKeys.map((category) => {
          const data = performance[category];

          return (
            <View key={category} style={styles.aboutCard}>
              <Text style={styles.categoryTitle}>
                {categoryNames[category]}
              </Text>

              <Text style={styles.categoryScore}>
                {Math.round(data.accuracy)}%
              </Text>

              <Text style={styles.aboutBody}>
                Attempts: {data.attempts}
              </Text>

              <Text style={styles.aboutBody}>
                Unique questions: {data.uniqueQuestions}
              </Text>
            </View>
          );
        })}

        <View style={styles.aboutCard}>
          <Text style={styles.recommendationTitle}>
            Recommended Practice
          </Text>

          {recommendedCategory ? (
            <>
              <Text style={styles.recommendationText}>
                Your recommended practice is based on your overall accuracy,
                recent answers, and how much of each category you have practised.
                A category needs at least five attempts across three different
                questions before it can be recommended.
              </Text>

              <TouchableOpacity
                style={styles.practiceButton}
                accessibilityRole="button"
                onPress={() =>
                  navigation.navigate('Quizzes', {
                    category: recommendedCategory
                  })
                }
              >
                <Text style={styles.practiceButtonText}>
                  Practise {categoryNames[recommendedCategory]}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.recommendationText}>
              {hasEligibleCategory
                ? 'All categories with enough recorded answers currently have 100% accuracy. Try a mixed quiz to explore more questions.'
                : 'Recommendations require at least five attempts across three different questions in a category. Repeated answers count as attempts.'}
            </Text>
          )}
        </View>
      </ScrollView>

      <View style={styles.quizFooter}>
        <TouchableOpacity
          style={styles.quizSubmitButton}
          accessibilityRole="button"
          onPress={() => navigation.popTo('Home')}
        >
          <Text style={styles.quizSubmitText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i]
    ];
  }

  return shuffled;
}
// WRITTEN BY ME
function normalizeCategory(category) {
  if (category === 'flood') return 'weather';
  if (category === 'firstAid') return 'first_aid';

  return category;
}
// WRITTEN BY ME
function createQuiz(category = null) {
  const availableQuestions = category
    ? questions.filter(
        (question) =>
          normalizeCategory(question.category) ===
          normalizeCategory(category)
      )
    : questions;

  return shuffleArray(availableQuestions)
    .slice(0, 10)
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options)
    }));
}
// WRITTEN BY ME
function QuizScreen({
  navigation,
  route,
  answerHistory,
  setAnswerHistory
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const submissionLocked = useRef(false);
  const practiceCategory = route.params?.category ?? null;

  const [quizQuestions, setQuizQuestions] = useState(
    () => createQuiz(practiceCategory)
  );
  const quiz = quizQuestions[currentQuestion];
  function returnHome() {
    navigation.popTo('Home');
  }

  function pressedButton() {

    if (submissionLocked.current) {
      return;
    }

    if (selectedAnswer === null) {
      Alert.alert('Choose an answer', 'Select an option first.');
      return;
    }

    submissionLocked.current = true;

    const isCorrect = selectedAnswer === quiz.answer;
    const updatedScore = score + (isCorrect ? 1 : 0);
    const isLastQuestion =
     currentQuestion === quizQuestions.length - 1;

    setScore(updatedScore);

    setAnswerHistory((previousHistory) => [
      ...previousHistory,
      {
        questionId: quiz.id,
        category: normalizeCategory(quiz.category),
        difficulty: quiz.difficulty,
        correct: isCorrect
      }
    ]);
    const answerMessage = isCorrect
      ? 'Your answer is correct.'
      : `The correct answer is:\n\n${quiz.answer}`;

    const feedback = [
      answerMessage,
      quiz.explanation,
      quiz.source ? `Source: ${quiz.source}` : null
    ]
      .filter(Boolean)
      .join('\n\n');

    if (isLastQuestion) {
      const percentage = Math.round(
        (updatedScore / quizQuestions.length) * 100
      );

      Alert.alert(
        'Quiz complete!',
        `${feedback}\n\nYour score: ${updatedScore} out of ${quizQuestions.length} (${percentage}%).`,
        [
          {
            text: 'Home',
            onPress: returnHome
          }
        ],
        { cancelable: false }
      );

      return;
    }

    Alert.alert(
      isCorrect ? 'Correct!' : 'Incorrect answer',
      feedback,
      [
        {
          text: 'Home',
          onPress: returnHome
        },
        {
          text: 'Next Question',
          onPress: () => {
            setCurrentQuestion((previous) => previous + 1);
            setSelectedAnswer(null);
            submissionLocked.current = false;
          }
        }
      ],
      { cancelable: false }
    );
  }
  if (!quiz) {
    return (
      <SafeAreaView style={styles.quizScreen}>
        <Text style={styles.quizQuestion}>
          No questions are available yet.
        </Text>

        <TouchableOpacity
          style={styles.quizSubmitButton}
          onPress={returnHome}
        >
          <Text style={styles.quizSubmitText}>
            Return Home
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.quizScreen}>
      <ScrollView
        key={currentQuestion}
        style={styles.quizScroll}
        contentContainerStyle={styles.quizContent}
      >
        <Text style={styles.quizHeading}>
          {practiceCategory
            ? `${categoryNames[practiceCategory] ?? practiceCategory} Practice`
            : 'Disaster Preparedness Quiz'}
        </Text>

        <Text style={styles.quizProgress}>
          Question {currentQuestion + 1} of {quizQuestions.length}
          {'\n'}
          Correct answers this quiz: {score}
        </Text>

        <Text style={styles.quizQuestion}>
          {quiz.question}
        </Text>

        <View style={styles.quizOptions}>
          {quiz.options.map((option) => {
            const isSelected = selectedAnswer === option;

            return (
              <TouchableOpacity
                key={option}
                style={[
                  styles.quizOption,
                  isSelected && styles.quizOptionSelected
                ]}
                accessibilityRole="radio"
                accessibilityState={{ checked: isSelected }}
                accessibilityLabel={option}
                onPress={() => {
                  if (!submissionLocked.current) {
                    setSelectedAnswer(option);
                  }
                }}
              >
                <Text style={styles.quizOptionIcon}>
                  {isSelected ? '◉' : '○'}
                </Text>

                <Text style={styles.quizOptionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {quiz.sourceUrl && (
          <TouchableOpacity
            style={{ paddingVertical: 16 }}
            accessibilityRole="link"
            onPress={async () => {
              try {
                await Linking.openURL(quiz.sourceUrl);
              } catch {
                Alert.alert(
                  'Unable to open source',
                  'Check your internet connection and try again.'
                );
              }
            }}
          >
            <Text style={styles.sourceAction}>
              Read guidance from {quiz.source}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <View style={styles.quizFooter}>
        <TouchableOpacity
          style={styles.quizSubmitButton}
          accessibilityRole="button"
          onPress={pressedButton}
        >
          <Text style={styles.quizSubmitText}>
            Submit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 12, alignItems: 'center' }}
          accessibilityRole="button"
          onPress={returnHome}
        >
          <Text>End quiz and return Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function getLocalDayNumber() {
  const now = new Date();

  
  return Math.floor(
    Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ) / 86400000
  );
}
// WRITTEN BY ME
function HackScreen({ navigation }) {
  const [dayNumber, setDayNumber] = useState(
    getLocalDayNumber
  );

  useEffect(() => {
    function updateDay() {
      setDayNumber(getLocalDayNumber());
    }

    const unsubscribeFocus = navigation.addListener(
      'focus',
      updateDay
    );

    
    const subscription = AppState.addEventListener(
      'change',
      (state) => {
        if (state === 'active') {
          updateDay();
        }
      }
    );

    const timer = setInterval(updateDay, 30000);

    return () => {
      unsubscribeFocus();
      subscription.remove();
      clearInterval(timer);
    };
  }, [navigation]);

  const tip = tips.length > 0
    ? tips[((dayNumber % tips.length) + tips.length) % tips.length]
    : null;

  async function openSource() {
    if (!tip) return;

    try {
      await Linking.openURL(tip.sourceUrl);
    } catch {
      Alert.alert(
        'Unable to open source',
        'Please try again later.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.quizScreen}>
      <ScrollView
        style={styles.quizScroll}
        contentContainerStyle={styles.quizContent}
      >
        <Text style={styles.quizHeading}>
          Hack of the Day
        </Text>

        <Text style={styles.quizProgress}>
          One small step towards being prepared.
        </Text>

        {tip ? (
          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>
              {tip.title}
            </Text>

            <Text style={styles.tipBody}>
              {tip.description}
            </Text>

            <Text style={styles.tipActionTitle}>
              Try this today
            </Text>

            <Text style={styles.tipBody}>
              {tip.action}
            </Text>

            <Text style={styles.tipSource}>
              Source: {tip.source}
              {'\n'}
              {tip.sourceTopic}
            </Text>

            <TouchableOpacity
              style={styles.practiceButton}
              onPress={openSource}
              accessibilityRole="link"
            >
              <Text style={styles.practiceButtonText}>
                Read the source
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.tipBody}>
            No tips are available yet.
          </Text>
        )}
      </ScrollView>

      <View style={styles.quizFooter}>
        <TouchableOpacity
          style={styles.quizSubmitButton}
          onPress={() => navigation.popTo('Home')}
          accessibilityRole="button"
        >
          <Text style={styles.quizSubmitText}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function AboutScreen({ navigation }) {
  const uniqueSources = new Map();

  [...questions, ...tips].forEach((item) => {
    if (item.sourceUrl && !uniqueSources.has(item.sourceUrl)) {
      uniqueSources.set(item.sourceUrl, {
        name: item.source,
        topic: item.sourceTopic,
        url: item.sourceUrl
      });
    }
  });

  const sourceList = Array.from(uniqueSources.values()).sort(
    (a, b) =>
      `${a.name} ${a.topic}`.localeCompare(
        `${b.name} ${b.topic}`
      )
  );

  async function openSource(url) {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        'Unable to open source',
        'Please try again later.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.quizScreen}>
      <ScrollView
        style={styles.quizScroll}
        contentContainerStyle={styles.quizContent}
      >
        <Text style={styles.quizHeading}>
          About ReadyShield
        </Text>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutSectionTitle}>
            Learn. Practise. Prepare.
          </Text>

          <Text style={styles.aboutBody}>
            ReadyShield helps you learn general disaster
            preparedness through quizzes, explanations,
            daily tips, and personalised practice.
          </Text>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutSectionTitle}>
            Understanding your results
          </Text>

          <Text style={styles.aboutBody}>
            Your profile shows your accuracy across recorded
            quiz answers. Each submitted answer counts as an
            attempt, including answers from later quizzes.
          </Text>

          <Text style={styles.aboutBody}>
            Practice recommendations use categories with at
            least five attempts across three different
            questions. Quiz scores reflect your answers in
            this app, not a certification of emergency skills.
          </Text>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutSectionTitle}>
            Your saved progress
          </Text>

          <Text style={styles.aboutBody}>
            Answer history is saved locally on this device.
            It is not synced between devices. Removing the
            app or clearing its stored data may remove your
            progress.
          </Text>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutSectionTitle}>
            Using this guidance
          </Text>

          <Text style={styles.aboutBody}>
            ReadyShield is an educational project. During a
            real emergency, follow local authorities and
            contact your local emergency services when needed.
            First-aid quizzes do not replace practical training.
          </Text>

          <Text style={styles.aboutBody}>
            Questions and tips are written for ReadyShield
            using the references below. Listing a source does
            not imply that its organisation endorses this app.
            Local advice may differ.
          </Text>
        </View>

        <Text style={styles.aboutSectionTitle}>
          Sources & Further Reading
        </Text>

        <Text style={styles.aboutBody}>
          These links come from the questions and tips
          included in this version. Opening a webpage
          requires internet access.
        </Text>

        {sourceList.length === 0 ? (
          <Text style={styles.aboutBody}>
            No source links have been added yet.
          </Text>
        ) : (
          sourceList.map((source) => (
            <TouchableOpacity
              key={source.url}
              style={styles.sourceCard}
              accessibilityRole="link"
              accessibilityLabel={
                `Open ${source.topic} from ${source.name}`
              }
              onPress={() => openSource(source.url)}
            >
              <Text style={styles.sourceName}>
                {source.name}
              </Text>

              <Text style={styles.sourceTopic}>
                {source.topic}
              </Text>

              <Text style={styles.sourceAction}>
                Open source ↗
              </Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      <View style={styles.quizFooter}>
        <TouchableOpacity
          style={styles.quizSubmitButton}
          accessibilityRole="button"
          onPress={() => navigation.popTo('Home')}
        >
          <Text style={styles.quizSubmitText}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function MissionsScreen({ navigation }) {
  const [completedMissions, setCompletedMissions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMissions() {
      try {
        const stored = await AsyncStorage.getItem(MISSIONS_STORAGE_KEY);

        if (stored) {
          const parsed = JSON.parse(stored);

          if (
            parsed &&
            typeof parsed === 'object' &&
            !Array.isArray(parsed)
          ) {
            setCompletedMissions(parsed);
          }
        }
      } catch (error) {
        console.warn('Unable to load mission progress:', error);
      } finally {
        setLoading(false);
      }
    }

    loadMissions();
  }, []);

  async function toggleMission(id) {
    const updated = {
      ...completedMissions,
      [id]: !completedMissions[id]
    };

    setCompletedMissions(updated);

    try {
      await AsyncStorage.setItem(
        MISSIONS_STORAGE_KEY,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.warn('Unable to save mission progress:', error);

      Alert.alert(
        'Save problem',
        'ReadyShield could not save your mission progress.'
      );
    }
  }

  const completedCount = preparednessMissions.filter(
    (mission) => completedMissions[mission.id]
  ).length;

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.heading}>Preparedness Missions</Text>
          <Text style={styles.profileIntro}>
            Loading your mission progress...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.missionsContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Preparedness Missions</Text>

        <Text style={styles.profileIntro}>
          Complete small learning activities to explore different parts of
          emergency preparedness.
        </Text>

        <View style={styles.missionProgressCard}>
          <Text style={styles.missionProgressNumber}>
            {completedCount} / {preparednessMissions.length}
          </Text>

          <Text style={styles.missionProgressLabel}>
            missions completed
          </Text>
        </View>

        {preparednessMissions.map((mission) => {
          const completed = completedMissions[mission.id] === true;

          return (
            <TouchableOpacity
              key={mission.id}
              style={[
                styles.missionCard,
                completed && styles.missionCardCompleted
              ]}
              onPress={() => toggleMission(mission.id)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: completed }}
              accessibilityLabel={`${mission.title}. ${mission.description}`}
            >
              <View style={styles.missionHeader}>
                <Text style={styles.missionCheck}>
                  {completed ? '✓' : '○'}
                </Text>

                <View style={styles.missionTextContainer}>
                  <Text style={styles.missionTitle}>
                    {mission.title}
                  </Text>

                  <Text style={styles.missionCategory}>
                    {mission.category}
                  </Text>
                </View>
              </View>

              <Text style={styles.missionDescription}>
                {mission.description}
              </Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.missionDisclaimer}>
          Mission completion records activities you have reviewed in
          ReadyShield. It does not certify emergency preparedness or
          practical emergency-response skills.
        </Text>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.popTo('Home')}
          accessibilityRole="button"
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
// WRITTEN BY ME
function ReadyShieldApp() {
  const [answerHistory, setAnswerHistory] = useState([]);
  const [storageStatus, setStorageStatus] = useState('loading');

  const saveQueue = useRef(Promise.resolve());

  useEffect(() => {
    let active = true;

    async function loadHistory() {
      try {
        const saved = await AsyncStorage.getItem(
          HISTORY_STORAGE_KEY
        );

        const history = saved === null ? [] : JSON.parse(saved);

        const isValid =
          Array.isArray(history) &&
          history.every(
            (attempt) =>
              attempt !== null &&
              typeof attempt === 'object' &&
              (
                typeof attempt.questionId === 'number' ||
                typeof attempt.questionId === 'string'
              ) &&
              typeof attempt.category === 'string' &&
              typeof attempt.correct === 'boolean'
          );

        if (!isValid) {
          throw new Error('Invalid saved answer history');
        }

        if (active) {
          setAnswerHistory(
            history.map((attempt) => ({
              ...attempt,
              category: normalizeCategory(attempt.category)
            }))
          );
          setStorageStatus('ready');
        }
      } catch (error) {
        console.warn('Could not load quiz progress:', error);

        if (active) {
          setStorageStatus('error');
        }
      }
    }

    loadHistory();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (storageStatus !== 'ready') {
      return;
    }

    const savedHistory = JSON.stringify(answerHistory);

    saveQueue.current = saveQueue.current
      .then(() =>
        AsyncStorage.setItem(
          HISTORY_STORAGE_KEY,
          savedHistory
        )
      )
      .catch((error) => {
        console.warn('Could not save quiz progress:', error);

        Alert.alert(
          'Progress not saved',
          'Your answers are still available this session, but the latest progress could not be saved on this device.'
        );
      });
  }, [answerHistory, storageStatus]);

  async function resetAllProgress() {
    try {
      await AsyncStorage.multiRemove([
        HISTORY_STORAGE_KEY,
        MISSIONS_STORAGE_KEY
      ]);

      setAnswerHistory([]);

      Alert.alert(
        'Progress reset',
        'Your Preparedness Profile and mission progress have been reset.'
      );
    } catch (error) {
      console.warn('Unable to reset progress:', error);

      Alert.alert(
        'Reset problem',
        'ReadyShield could not reset your progress.'
      );
    }
  }
  if (storageStatus === 'loading') {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          Loading your progress…
        </Text>
      </SafeAreaView>
    );
  }

  if (storageStatus === 'error') {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 24
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          We couldn't load your saved progress.
          Please close and reopen ReadyShield to try again.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              onResetProgress={resetAllProgress}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Achievements"
          options={{ headerShown: false }}
        >
          {(props) => (
            <AchieveScreen
              {...props}
              answerHistory={answerHistory}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Quizzes"
          options={{ headerShown: false }}
        >
          {(props) => (
            <QuizScreen
              key={props.route.params?.category ?? 'mixed'}
              {...props}
              answerHistory={answerHistory}
              setAnswerHistory={setAnswerHistory}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Missions"
          component={MissionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Today's Hack"
          component={HackScreen}
          options ={{ headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// WRITTEN BY ME
export default function App() {
  return (
    <SafeAreaProvider>
      <ReadyShieldApp />
    </SafeAreaProvider>
  );
}
// WRITTEN BY ME
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#ffffff'
  },

  image: {
    width: '100%',
    maxWidth: 400,
    height: 180,
    alignSelf: 'center',
    marginBottom: 24
  },
  progress: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center'
  },

  button: {
    backgroundColor: '#b91c1c',
    minHeight: 72,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center'
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center'
  },
  question: {
    width: '85%',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
    alignSelf: 'center'
  },
  optionContainer: {
    marginTop: 40
  },
  optionButton: {
    padding: 20,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionText: {
    fontSize: 24,
    paddingLeft: 10
  },
  optionIcon: {
    fontSize: 20,
    color: 'grey'
  },
  submitButton: {
    alignSelf: 'center',
    marginTop:150,
    backgroundColor: 'grey',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 40
  },
  submitText: {
    fontSize: 35,
    color: 'white'
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30
  },

  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 30
  },

  categoryCard: {
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#eeeeee'
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  categoryScore: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5
  },
  recommendationCard: {
    marginHorizontal: 25,
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#eeeeee'
  },

  recommendationTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  recommendationText: {
    fontSize: 18,
    lineHeight: 25
  },
  quizScreen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  quizScroll: {
    flex: 1
  },

  quizContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24
  },

  quizHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12
  },

  quizProgress: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24
  },

  quizQuestion: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
    marginBottom: 24
  },

  quizOptions: {
    width: '100%'
  },

  quizOption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    backgroundColor: '#f7f7f7'
  },

  quizOptionSelected: {
    borderColor: '#b91c1c',
    backgroundColor: '#fff1f2'
  },

  quizOptionIcon: {
    fontSize: 22,
    lineHeight: 28,
    marginRight: 12,
    color: '#b91c1c'
  },

  quizOptionText: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    color: '#222222'
  },

  quizFooter: {
    flexShrink: 0,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    backgroundColor: '#ffffff'
  },

  quizSubmitButton: {
    backgroundColor: '#b91c1c',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center'
  },

  quizSubmitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  practiceButton: {
    marginTop: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#b91c1c',
    borderRadius: 12,
    alignItems: 'center'
  },

  practiceButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  tipCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff1f2',
    borderWidth: 1,
    borderColor: '#fecdd3'
  },

  tipTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#881337',
    marginBottom: 16
  },

  tipBody: {
    fontSize: 18,
    lineHeight: 28,
    color: '#222222',
    marginBottom: 16
  },

  tipActionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#881337'
  },

  tipSource: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555555',
    marginTop: 8
  },
  aboutCard: {
    padding: 18,
    marginBottom: 18,
    borderRadius: 14,
    backgroundColor: '#f7f7f7'
  },

  aboutSectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#881337',
    marginBottom: 12
  },

  aboutBody: {
    fontSize: 17,
    lineHeight: 26,
    color: '#333333',
    marginBottom: 12
  },

  sourceCard: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    backgroundColor: '#ffffff'
  },

  sourceName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 6
  },

  sourceTopic: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555'
  },

  sourceAction: {
    fontSize: 16,
    color: '#b91c1c',
    textDecorationLine: 'underline',
    marginTop: 10
  },
  missionsContainer: {
    padding: 20,
    paddingBottom: 40
  },

  missionProgressCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    alignItems: 'center'
  },

  missionProgressNumber: {
    fontSize: 28,
    fontWeight: '700'
  },

  missionProgressLabel: {
    fontSize: 14,
    marginTop: 4,
    color: '#555'
  },

  missionCard: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff'
  },

  missionCardCompleted: {
    backgroundColor: '#f3f4f6'
  },

  missionHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  missionCheck: {
    fontSize: 26,
    width: 38,
    fontWeight: '700'
  },

  missionTextContainer: {
    flex: 1
  },

  missionTitle: {
    fontSize: 17,
    fontWeight: '700'
  },

  missionCategory: {
    fontSize: 13,
    color: '#666',
    marginTop: 2
  },

  missionDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
    marginTop: 10
  },

  missionDisclaimer: {
    fontSize: 13,
    lineHeight: 19,
    color: '#666',
    marginTop: 8,
    marginBottom: 20
  },
  resetProgressButton: {
    alignSelf: 'center',
    marginTop: 14,
    paddingVertical: 8,
    paddingHorizontal: 14
  },

  resetProgressButtonText: {
    fontSize: 13,
    color: '#b91c1c',
    fontWeight: '600'
  }
});

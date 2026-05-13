// ================================================
// REVIVE — Enhanced Chatbot Engine
// ================================================

// --- Response Database ---
const responses = {
  greeting: {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon', 'howdy', 'greetings'],
    replies: [
      "Hello! 😊 How are you feeling today? I'm here to listen.",
      "Hey there! 🌟 Welcome. What's on your mind today?",
      "Hi! I'm glad you're here. How can I support you today?",
    ]
  },
  notWell: {
    keywords: ['not feeling good', 'not well', 'not great', 'feeling bad', 'feeling down', 'not okay', 'feeling low', 'sad'],
    replies: [
      "I'm sorry to hear that. 💙 Would you like to talk about what's bothering you? I'm here to listen without judgment.",
      "It takes courage to share how you feel. Tell me more — what's been weighing on you?",
      "I hear you. Sometimes putting feelings into words helps. What's going on?",
    ]
  },
  stress: {
    keywords: ['stress', 'stressed', 'stressful', 'overwhelmed', 'pressure', 'burned out', 'burnout'],
    replies: [
      "I understand you're feeling stressed. 🌿 Here are some things that might help:\n\n• Take slow, deep breaths (4-7-8 technique)\n• Step away for a 5-minute walk\n• Write down what's stressing you\n• Talk to someone you trust\n\nRemember, stress is temporary. You've handled tough times before! 💪",
      "Stress can feel overwhelming, but you're not alone. Try the 5-4-3-2-1 grounding technique: notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. It helps bring you back to the present. 🧘",
    ]
  },
  anxiety: {
    keywords: ['anxiety', 'anxious', 'nervous', 'worried', 'worrying', 'panic', 'social anxiety'],
    replies: [
      "Anxiety can be really challenging. 💙 Here are some techniques:\n\n• Box breathing: Inhale 4s → Hold 4s → Exhale 4s → Hold 4s\n• Challenge anxious thoughts: Is this thought fact or fear?\n• Ground yourself in the present moment\n\nIf anxiety is persistent, speaking with a professional can be incredibly helpful. You're stronger than you think! 🌟",
      "I understand feeling anxious. Remember: anxiety is your brain trying to protect you, but sometimes it overreacts. Try naming your feelings out loud — it helps reduce their power. You've got this! 💪",
    ]
  },
  relationships: {
    keywords: ['relationships', 'friends', 'friendships', 'relationship', 'partner', 'boyfriend', 'girlfriend'],
    replies: [
      "Relationships can be a source of both joy and stress. 💛 Remember:\n\n• It's okay to set boundaries\n• Communication is key — express your needs\n• Surround yourself with people who uplift you\n• Quality matters more than quantity\n\nYou deserve healthy, supportive connections!",
    ]
  },
  family: {
    keywords: ['family', 'parents', 'parent', 'mom', 'dad', 'siblings', 'parental expectations'],
    replies: [
      "Family dynamics can be complex. 🏡 If you're facing pressure or conflict:\n\n• Try to have calm, honest conversations\n• Set healthy boundaries where needed\n• Remember: their expectations don't define your worth\n• Consider family counseling if communication is difficult\n\nI'm here if you want to talk more about it. 💙",
    ]
  },
  exams: {
    keywords: ['exams', 'exam', 'test', 'tests', 'academic', 'grades'],
    replies: [
      "Exam stress is so common — you're definitely not alone! 📚 Here's what helps:\n\n1. Create a realistic study schedule\n2. Break topics into small, manageable chunks\n3. Use active recall and spaced repetition\n4. Take breaks every 45-50 minutes\n5. Get enough sleep — your brain consolidates learning during rest\n6. Eat well and stay hydrated\n\nYou're capable of more than you think! 💪🌟",
    ]
  },
  study: {
    keywords: ['study', 'studies', 'workload', 'homework', 'assignments', 'studying'],
    replies: [
      "Managing studies can feel overwhelming. 📖 Try these strategies:\n\n• Prioritize tasks with a to-do list\n• Use the Pomodoro technique (25 min focus + 5 min break)\n• Find a quiet, comfortable study space\n• Don't forget to take care of yourself!\n\nYou're doing great by caring about your education. Keep going! 🌟",
    ]
  },
  career: {
    keywords: ['career', 'job', 'layoff', 'job search', 'work', 'interview', 'unemployment'],
    replies: [
      "Career concerns are completely valid. 💼 Remember:\n\n• Focus on what you can control — your skills and effort\n• Network and reach out to people in your field\n• Upskill with free online resources\n• Rejection isn't a reflection of your worth\n\nYour career journey is unique. Keep believing in yourself! 💪🌟",
    ]
  },
  timeManagement: {
    keywords: ['time management', 'time', 'procrastinate', 'procrastination', 'productive', 'productivity', 'lazy'],
    replies: [
      "Time management is a skill that improves with practice! ⏰ Try these:\n\n• Break tasks into smaller steps\n• Set specific, realistic deadlines\n• Use the 2-minute rule: if it takes <2 min, do it now\n• Remove distractions (put phone away!)\n• Celebrate small wins\n\nDon't be too hard on yourself — progress, not perfection! 💪",
    ]
  },
  goals: {
    keywords: ['goals', 'aim', 'ambition', 'dreams', 'hopes', 'future', 'purpose'],
    replies: [
      "Having goals shows incredible self-awareness! 🌟 Tips for achieving them:\n\n• Write them down — this makes them real\n• Break big goals into smaller milestones\n• Track your progress and celebrate wins\n• Be flexible — it's okay to adjust your path\n\nYou have the power to turn your dreams into reality! 💫",
    ]
  },
  sleep: {
    keywords: ['sleep', 'insomnia', 'cant sleep', 'sleep cycle', 'sleepless', 'nightmares', 'tired'],
    replies: [
      "Sleep is so important for mental health. 😴 Try these tips:\n\n• Stick to a consistent bedtime routine\n• Avoid screens 30 min before bed\n• Keep your room cool and dark\n• Try progressive muscle relaxation\n• Avoid caffeine after 2 PM\n\nSweet dreams are within reach! 🌙💤",
    ]
  },
  bullying: {
    keywords: ['bullies', 'bullied', 'bullying', 'online bullies', 'cyberbullying', 'harassment', 'mean'],
    replies: [
      "Bullying is never acceptable, and it's NOT your fault. 🛡️\n\n• Document the incidents\n• Tell a trusted adult or authority figure\n• Block and report online bullies\n• Remember: their behavior reflects THEM, not you\n\nYou are valued and worthy of respect. Don't let anyone make you feel otherwise! ❤️💪",
    ]
  },
  frustration: {
    keywords: ['frustration', 'frustrated', 'frustrate', 'angry', 'anger', 'mad', 'furious', 'irritated'],
    replies: [
      "Frustration is a valid emotion. 🌊 When it feels overwhelming:\n\n• Take deep breaths — count to 10\n• Step away from the situation briefly\n• Physical activity helps release tension\n• Write down what's frustrating you\n\nIt's temporary. You'll get through this! 💪❤️",
    ]
  },
  confidence: {
    keywords: ['low confidence', 'self esteem', 'not confident', 'insecure', 'worthless', 'not enough', 'doubt myself'],
    replies: [
      "You are more capable than you realize! 💪🌟\n\n• List 3 things you're good at right now\n• Celebrate small achievements daily\n• Replace 'I can't' with 'I'm learning to'\n• Surround yourself with people who uplift you\n• Remember: confidence is built through action, not perfection\n\nYou are enough, exactly as you are! ✨",
    ]
  },
  comparison: {
    keywords: ['comparisons', 'compare', 'than me', 'better than me', 'jealous', 'envy', 'comparison'],
    replies: [
      "Comparison truly is the thief of joy. 🌈 Remember:\n\n• Everyone's timeline is different\n• Social media shows highlight reels, not reality\n• Focus on YOUR growth — compare yourself to who you were yesterday\n• Your journey is uniquely yours\n\nYou're doing amazing in your own way! 😊",
    ]
  },
  suicidal: {
    keywords: ['suicides', 'suicide', 'suicidal', 'kill myself', 'end my life', 'dont want to live', 'self harm'],
    replies: [
      "I'm really concerned about you, and I want you to know that you matter. 💙\n\n🆘 Please reach out for immediate help:\n• Vandrevala Foundation: +91 1860 2662 345\n• iCall: +91 22 2552 1111\n• Roshni: +91 91408 11114\n\nYou are not alone. Things can get better with the right support. Please talk to someone you trust. 🤗\n\nMore resources: https://values.snap.com/safety/safety-resources",
    ]
  },
  lonely: {
    keywords: ['lonely', 'loneliness', 'leftout', 'alone', 'isolated', 'no friends', 'left out'],
    replies: [
      "Feeling lonely is more common than you think — you're not alone in feeling alone. 💙\n\n• Try reaching out to one person today\n• Join a club, group, or online community\n• Volunteer — helping others creates connections\n• Be gentle with yourself\n\nYou deserve companionship and love. I'm here for you! 🌟",
    ]
  },
  selfCare: {
    keywords: ['self care', 'self-care', 'self care practices', 'take care', 'wellbeing', 'wellness'],
    replies: [
      "Self-care isn't selfish — it's essential! 🌼 Try these:\n\n• Take a relaxing bath or warm shower\n• Go for a walk in nature 🌿\n• Practice mindfulness or meditation\n• Listen to calming music\n• Do something creative you enjoy\n• Get enough sleep and eat nourishing food\n\nYou deserve to feel good! 💛",
    ]
  },
  exercises: {
    keywords: ['suggest', 'exercises', 'breathing', 'breathe', 'meditation', 'meditate', 'calm down'],
    replies: [
      "Let's try a breathing exercise together! 🧘\n\n✨ **4-7-8 Technique:**\n1. Inhale through your nose for 4 counts\n2. Hold your breath for 7 counts\n3. Exhale slowly through your mouth for 8 counts\n4. Repeat 4 times\n\nThis activates your parasympathetic nervous system and helps calm anxiety. Try it now! 🌬️",
    ]
  },
  counseling: {
    keywords: ['counseling', 'therapy', 'therapist', 'counselor', 'professional help', 'need help'],
    replies: [
      "Seeking professional help is a sign of strength, not weakness! 🌟\n\n• Talk to your school/college counselor\n• Reach out to helplines:\n  - Vandrevala Foundation: +91 1860 2662 345\n  - iCall: +91 22 2552 1111\n• Consider online therapy platforms\n\nYou deserve support. Taking this step shows incredible courage! 💙",
    ]
  },
  help: {
    keywords: ['help', 'improve', 'what can i do', 'how to', 'tips', 'advice'],
    replies: [
      "There are many ways to improve your mental wellbeing! 🌈\n\n• Practice regular breathing exercises\n• Stay connected with supportive people\n• Move your body — even a short walk helps\n• Journal your thoughts and feelings\n• Get enough sleep and eat well\n• Do things that bring you joy\n\nSmall steps lead to big changes! 💪",
    ]
  },
  peerPressure: {
    keywords: ['peer pressure', 'pressure from friends', 'forced', 'fitting in'],
    replies: [
      "Peer pressure can be tough to navigate. 🛡️ Remember:\n\n• It's okay to say NO\n• True friends respect your boundaries\n• Stay true to your values\n• You don't need to fit in to belong\n\nTrust your instincts — you know what's right for you! 💪🌟",
    ]
  },
  lgbtq: {
    keywords: ['lgbtq', 'gay', 'lesbian', 'bisexual', 'transgender', 'queer', 'coming out', 'identity'],
    replies: [
      "Your identity is valid and beautiful. 🌈\n\n• Surround yourself with accepting, supportive people\n• Connect with LGBTQ+ communities and resources\n• You deserve love and respect exactly as you are\n• Coming out is your journey — go at your own pace\n\nYou are not alone. You are loved! 💙🏳️‍🌈",
    ]
  },
  homesickness: {
    keywords: ['homesickness', 'homesick', 'miss home', 'away from home', 'miss family'],
    replies: [
      "Homesickness is completely natural. 🏡💙\n\n• Stay connected through video calls\n• Create a comforting space wherever you are\n• Share photos and memories with loved ones\n• Explore your new surroundings — find new favorites\n• Remember: it gets easier with time\n\nHome is always in your heart! 💛",
    ]
  },
  bodyImage: {
    keywords: ['body image', 'body', 'weight', 'too fat', 'too thin', 'ugly', 'appearance'],
    replies: [
      "Your worth is not defined by your appearance. 🌟💕\n\n• Beauty comes in ALL shapes and sizes\n• Unfollow social media that makes you feel bad\n• Focus on what your body CAN do, not how it looks\n• Practice positive self-talk\n• Nourish your body with love and care\n\nYou are beautiful exactly as you are! ✨",
    ]
  },
  financial: {
    keywords: ['financial stress', 'finance', 'money', 'debt', 'broke', 'expensive'],
    replies: [
      "Financial stress is tough but manageable. 💸\n\n• Create a simple budget to track spending\n• Prioritize needs over wants\n• Look for scholarships, grants, or part-time work\n• Don't compare your financial journey to others\n• Ask for guidance from trusted adults\n\nFinancial stability is built one step at a time! 💪",
    ]
  },
  disconnected: {
    keywords: ['disconnected', 'detached', 'numb', 'empty', 'nothing', 'dont feel'],
    replies: [
      "Feeling disconnected can be unsettling. 💙\n\n• Try grounding exercises (feel your feet on the floor)\n• Engage your senses — hold ice, smell something strong\n• Reach out to someone — even a short text counts\n• Be gentle with yourself\n• Consider talking to a professional\n\nYou're not broken. This is temporary. 🌟",
    ]
  },
  depression: {
    keywords: ['depressed', 'depression', 'hopeless', 'no motivation', 'give up'],
    replies: [
      "I hear you, and I'm really sorry you're feeling this way. 💙\n\n• Please reach out to a trusted person or professional\n• Helplines:\n  - Vandrevala: +91 1860 2662 345\n  - iCall: +91 22 2552 1111\n• Take it one moment at a time\n• Even getting through today is an achievement\n\nYou are stronger than depression. Help is available. 🌟",
    ]
  },
  happy: {
    keywords: ['happy', 'excited', 'amazing', 'wonderful', 'great', 'good', 'awesome', 'fantastic'],
    replies: [
      "That's wonderful to hear! 😄🌟 Keep riding that positive wave! What made your day special?",
      "Yay! 🎉 I'm so glad you're feeling good. Cherish this moment and remember it when tougher times come!",
      "That makes me happy too! 😊 You deserve every bit of joy. Keep shining! ✨",
    ]
  },
  thanks: {
    keywords: ['thanku', 'thank you', 'thankyou', 'thanks', 'thx', 'appreciate'],
    replies: [
      "You're so welcome! 😊 Remember, I'm always here whenever you need someone to talk to. Take care of yourself! 🌟💙",
      "Happy to help! Don't hesitate to come back anytime. You matter! 💛✨",
    ]
  },
  sorry: {
    keywords: ['sorry', 'apologize', 'my bad', 'apologies'],
    replies: [
      "No need to apologize! 💙 It's okay. We all go through ups and downs. If something specific is bothering you, I'm here to listen. You're doing great! ✨",
    ]
  },
  bye: {
    keywords: ['bye', 'goodbye', 'good bye', 'see you', 'gotta go', 'leaving'],
    replies: [
      "Take care of yourself! 🌿 Remember, I'm always here when you need to talk. Goodbye and stay strong! 💙✨",
      "Bye! 🌟 Wishing you a peaceful day. Come back anytime you need support! 😊",
    ]
  },
  ok: {
    keywords: ['ok', 'okay', 'alright', 'fine', 'sure', 'i see'],
    replies: [
      "I'm here whenever you need to talk more. Is there anything specific on your mind? 😊",
      "Take your time. If anything comes up, just let me know! 💙",
    ]
  }
};

// --- Chatbot Engine ---
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');
const quickRepliesContainer = document.getElementById('quick-replies');

let conversationContext = null;

function getTimeString() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `message message-${type}`;
  msg.innerHTML = `
    <div class="message-bubble">${text.replace(/\n/g, '<br>')}</div>
    <div class="message-time">${getTimeString()}</div>
  `;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  typingIndicator.classList.add('show');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  typingIndicator.classList.remove('show');
}

function generateResponse(input) {
  const lowerInput = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const [category, data] of Object.entries(responses)) {
    for (const keyword of data.keywords) {
      if (lowerInput.includes(keyword)) {
        // Score based on keyword length (longer = more specific = better match)
        const score = keyword.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = data;
          conversationContext = category;
        }
      }
    }
  }

  if (bestMatch) {
    const replies = bestMatch.replies;
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // Default fallback
  const fallbacks = [
    "I'm here to listen. Could you tell me more about how you're feeling? 💙",
    "I want to understand better. Could you share a bit more? 😊",
    "I hear you. You can talk about stress, anxiety, relationships, studies, or anything else on your mind. I'm here for you! 🌟",
    "Thank you for sharing. Try telling me about what's specifically bothering you — I can help with stress, mood, self-care, and more. 💛",
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function sendMessage(text) {
  const messageText = text || userInput.value.trim();
  if (!messageText) return;

  addMessage(messageText, 'user');
  userInput.value = '';

  // Show typing indicator
  showTyping();

  // Simulate typing delay (600-1200ms)
  const delay = 600 + Math.random() * 600;
  setTimeout(() => {
    hideTyping();
    const response = generateResponse(messageText);
    addMessage(response, 'bot');
  }, delay);
}

// Event listeners
sendBtn.addEventListener('click', () => sendMessage());

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Quick reply chips
document.querySelectorAll('.quick-reply').forEach(chip => {
  chip.addEventListener('click', () => {
    sendMessage(chip.dataset.msg);
  });
});

// Welcome message on load
window.addEventListener('load', () => {
  setTimeout(() => {
    addMessage("Hello! 👋 I'm your Revive wellness assistant. I'm here to listen and support you. You can talk to me about stress, anxiety, sleep, relationships, or anything on your mind. How are you feeling today?", 'bot');
  }, 500);
});
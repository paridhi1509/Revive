function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value.trim();
  
    if (messageText === "") {
      return;
    }
  
    const chatbotMessages = document.getElementById("chatbot-messages");
  
    // new user message
    const userMessage = document.createElement("div");
    userMessage.className = "chatbot-message user";
    userMessage.textContent = messageText;
  
    // Append the user message to the chat
    chatbotMessages.appendChild(userMessage);
  
    // Clear the user input
    userInput.value = "";
  
    // Process user input and generate bot response
    const botResponse = generateBotResponse(messageText);
  
    // Create a new bot message
    const botMessage = document.createElement("div");
    botMessage.className = "chatbot-message bot";
    botMessage.textContent = botResponse;
  
    // Append the bot message to the chat
    chatbotMessages.appendChild(botMessage);
  
    // Scroll to the bottom of the chat to show the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Function to generate bot responses based on user input
  function generateBotResponse(userInput) {
    if (userInput.includes("hello") || userInput.includes("hi ")) {
      return "Hello! How are you today?";
    } 
    else if(userInput.includes("not feeling good")||userInput.includes("not well")){
        return "Tell me about it"
    }
    else if (userInput.includes("stress")) {
      return "I understand you're feeling stressed. Let's talk about ways to manage stress.Take deep breaths, do activities you enjoy, and seek support from friends or counseling. You've got this!";
    } else if (userInput.includes("job") || userInput.includes("layoff")) {
      return "Job concerns can be challenging. It's essential to focus on what you can control and seek support.";}
      else if (userInput.includes("relationships") || userInput.includes("friends")|| userInput.includes("friendships") ){
        return "It's understandable to feel stressed about both relationships and friendships. Remember that it's okay to prioritize self-care and set boundaries. Surround yourself with supportive people who uplift you. You deserve healthy and positive connections! ";
      }
      else if(userInput.includes("help")|| userInput.includes("improve")){
        return "You can improve your mental health in many ways like doing breathing exercises, going out with people you can have fun with or doing something that makes you happy."
      }
      else if(userInput.includes("suggest")||userInput.includes("exercises")){
        return "I can suggest some breathing exercises to you. Let's take a few deep breaths together.\nInhale for 4 counts, hold for 7 counts, and exhale for 8 counts."
      }
      else if(userInput.includes("exams")){
        return "I'm sorry to hear that you're feeling stressed. Exams can be a challenging time, but there are things you can do to manage your stress and stay focused on your studies.Here are a few tips: \n 1)Create a study schedule and stick to it. This will help you stay organized and avoid feeling overwhelmed.\n 2)Break down your studying into smaller tasks. This will make it seem less daunting and more achievable.\n 3)Take breaks when you need them.Don't try to study for hours on end without taking a break. Get up and move around, or step outside for some fresh air.\n 4)Eat healthy foods and get enough sleep.\n These things will help you stay energized and focused.Talk to someone if you're feeling overwhelmed. Friends, family, or a therapist can offer support and help you cope with your stress.If you're feeling like you're struggling to manage your stress on your own, please reach out to a mental health professional. They can provide you with more support and resources."
      }
      else if(userInput.includes("family")){
        return "I understand your concern for your family. If you have any specific questions or if there's something you'd like to discuss or share about your worries, please feel free to do so, and I'll be here to assist you."
      }
//______________________________________________________
/*    else if(userInput.includes(" ")){
         return " "
       }

     ||userInput.includes(" ")
     
Its best if you learn it from experts . Here are some helpful resources to check out : */

//__________________________________________________

else if(userInput.includes("career ")){
  return "I get it, career stress is real! Just remember to stay focused, keep learning, and believe in yourself. You've got this! 💼💪 "
}

else if(userInput.includes("time management")){
  return "I feel you! Time management can be a challenge. Try breaking tasks into smaller chunks and setting specific goals. Use timers or apps to stay focused. You got this! ⏰💪\nDon't worry, I've been there too! Start by prioritizing tasks and setting deadlines for yourself. You'll improve with practice! ⏰💪 "
}

else if(userInput.includes("procrastinate")||userInput.includes("procrastination")){
  return "I feel you! Procrastination can be a struggle. Break tasks into smaller parts and set deadlines. You can do it! ⏰💪 "
}
else if(userInput.includes("goals")||userInput.includes("aim")
){
  return "I totally get it! Working on goals can be tough, but remember to take it one step at a time. Break your goals into smaller tasks and celebrate each milestone along the way. You've got this! 💪🌟 "
}
else if(userInput.includes("Sleep ")||userInput.includes("sleep cycle")
){
  return "I totally get it! Having a bad sleep cycle can be tough. Try establishing a consistent bedtime routine and creating a relaxing sleep environment. You've got this! 😴💤 "
}
else if(userInput.includes("bullies")||userInput.includes("bullied")||userInput.includes("bullying")||userInput.includes("online bullies")||userInput.includes("online bullies")){
  return "I hate bullies too! It's not fair that some people try to bring others down. Just remember, you're amazing and don't let their negativity affect you. Surround yourself with positive people who lift you up. You've got this! 💪❤️"
}
else if(userInput.includes("frustration")||userInput.includes("frustrated")||userInput.includes("frustrate")
){
  return "I understand how you feel. Frustration can be overwhelming, but remember that it's just a temporary feeling. Take a deep breath, step back, and try to break down the problem into smaller, manageable tasks. You've got this! 💪❤️\nI understand how you feel. Frustration can be overwhelming, but remember that it's just a temporary feeling. Take a deep breath, step back, and try to break down the problem into smaller, manageable tasks. You've got this! 💪❤️"
}
else if(userInput.includes("low confidence")||userInput.includes("self esteem")){
  return "You've got this! Believe in yourself and your abilities. Remember to embrace your strengths and accomplishments. You are capable of amazing things! Keep shining with confidence! 💪🌟"
}
else if(userInput.includes("Comparisons")||userInput.includes("compare")||userInput.includes("than me")){
  return "I understand how comparisons can sometimes make us feel frustrated. Remember that everyone's journey is unique, and it's important to focus on your own progress and achievements. You're doing great in your own way! 😊"
}
/// ok thanku sorry 
else if(userInput.includes("ok")){
  return "I totally get it! Life can be tough, but you've got this! Take it one step at a time, stay organized, and don't hesitate to ask for help when you need it. Remember to take breaks and reward yourself for your hard work. You're doing great! Keep up the good work! 📚💪"
}
else if(userInput.includes("thanku") ||userInput.includes("thank you") ||userInput.includes("thankyou") ||userInput.includes("thanks")){
  return "You're welcome! Remember, I'm here for you whenever you need someone to talk to. Take care of yourself and don't hesitate to reach out if you need anything. You've got this! 😊🌟"
}
else if(userInput.includes("sorry")){
  return "It's okay to feel sorry sometimes. We all make mistakes and it's a sign of growth and empathy to recognize when we've done something wrong. If there's something specific you're feeling sorry about, maybe we can talk about it and see if there's a way to make amends or learn from the experience. Remember, we're all learning and growing together! 💙✨"
}
else if(userInput.includes("suicides") ||userInput.includes("suicide") ||userInput.includes("suicidal thoughts")){
  return "I'm sorry to hear that you're feeling sad. It's okay to have those emotions sometimes. Remember to take care of yourself, reach out to loved ones for support, and engage in activities that bring you joy. Sending virtual hugs your way! 🤗💙\nIts best if you learn it from experts . Here are some helpful resources to check out : https://values.snap.com/safety/safety-resources "
}

else if(userInput.includes("lonely")||userInput.includes("lonliness")||userInput.includes("leftout")){
  return "I understand that feeling lonely can be tough. It's important to remember that you are not alone in this. Reach out to friends or loved ones, or try engaging in activities that bring you joy and help you connect with others. You deserve companionship and support! 🌟💙"
}

//self care practices
else if(userInput.includes("self care practices")){
  return "When you're feeling stressed or low, self-care practices can help you feel better. Some ideas include taking a relaxing bath, going for a walk in nature, practicing mindfulness or meditation, listening to calming music, or indulging in a hobby you enjoy. Remember to prioritize your well-being and do things that bring you joy and relaxation. You deserve it! 🌼💛"
}
//i need counselling
else if(userInput.includes("counseling")){
  return "I understand that you're feeling like you need counseling. It's great that you're seeking support! I recommend reaching out to a professional counselor or therapist who can provide guidance and assistance tailored to your specific needs. They can help you navigate through your challenges and provide valuable insights. Remember, seeking help is a sign of strength! 🌟💙"
}
else if(userInput.includes("peer pressure")){
  return "I understand that peer pressure can be challenging to deal with. Remember, it's important to stay true to yourself and your values. Surround yourself with supportive friends who uplift you and share your values. If you ever feel pressured to do something that makes you uncomfortable, it's okay to say no and set boundaries. Trust your instincts and prioritize your well-being. You've got this! 💪🌟"
}
// else if(userInput.includes("Parental expectations")||userInput.includes("parent")||userInput.includes("parents")||userInput.includes("mom")||userInput.includes("")){
//   return "I understand that parental expectations can feel overwhelming at times. It's important to have open and honest communication with your parents about your goals, interests, and concerns. Expressing your thoughts and feelings can help them understand your perspective better. Remember, it's okay to set boundaries and pursue your own path. Surround yourself with supportive friends who can boost your confidence and provide encouragement. You have the ability to shape your own future. Believe in yourself! 🌟💪"
// }
else if(userInput.includes("LGBTQ")){
  return "Supportive friends can play a crucial role in boosting confidence and providing encouragement for LGBTQ individuals. It's important to surround yourself with people who accept and celebrate your identity. Remember, you are valid and deserving of love and respect. If you ever need someone to talk to, I'm here for you! 🌈💙"
}
//may cancel later
//link added
else if(userInput.includes("Social anxiety")){
  return "I understand that social anxiety can be challenging to deal with. It's important to remember that you're not alone in this. Taking small steps, like practicing deep breathing or positive self-talk, can help manage anxiety in social situations. Surrounding yourself with supportive friends who understand and accept you can also make a big difference. You're stronger than you think! 💪💙\nIts best if you learn it from experts . Here are some helpful resources to check out : https://values.snap.com/safety/safety-resources"
}

else if(userInput.includes("homesickness")||userInput.includes("homesick")||userInput.includes("miss home")||userInput.includes("away from home")){
  return "I understand that homesickness can be tough. It's normal to miss the familiar comforts of home. One way to cope is by staying connected with loved ones through calls, video chats, or sharing pictures. Exploring your new surroundings and making new friends can also help create a sense of belonging. Remember, it's okay to feel homesick, but try to focus on the positive experiences and opportunities that come with being in a new place. Hang in there! 🏡💙"
}
else if(userInput.includes("body image")){
  return "I understand that body image can be a sensitive topic. Remember, beauty comes in all shapes and sizes. Surround yourself with positive influences and focus on self-care and self-acceptance. Embrace your unique qualities and celebrate what makes you special. You are beautiful just the way you are! 🌟💕"
}
else if(userInput.includes("financial stress")||userInput.includes("finance")||userInput.includes("money")){
  return "I understand that financial stress can be overwhelming. It's important to take a proactive approach by creating a budget, prioritizing expenses, and seeking financial advice if needed. Remember, you're not alone in this. Reach out to supportive friends or family for guidance and support. Stay positive and take small steps towards financial stability. You've got this! 💪💸"
}
else if(userInput.includes("study")||userInput.includes("studies")||userInput.includes("workload")){
  return "I understand that you're a student and may be feeling stressed about studies. It's important to find effective study techniques that work for you, such as creating a study schedule, breaking tasks into smaller chunks, and finding a quiet and comfortable study space. Don't forget to take breaks and practice self-care to avoid burnout. Remember, you're capable and smart! Keep pushing forward and believe in yourself. 📚💪"
}
else if(userInput.includes("job")||userInput.includes("job search")){
  return "I understand that you're feeling stressed about your job search. It can be overwhelming, but don't lose hope! Take some time to update your resume, network with professionals in your field, and consider reaching out to job placement agencies for assistance. Remember to stay positive and persistent. The right opportunity will come your way. Keep pushing forward and believe in yourself! 💼🌟"
}
else if(userInput.includes("dreams")||userInput.includes("ambition")||userInput.includes("hopes")){
  return "I totally get it! Dreams are so important. They give us something to strive for and keep us motivated. Don't be afraid to dream big and pursue what truly makes you happy. Surround yourself with supportive friends and family who believe in you. Remember, you have the power to turn your dreams into reality. Keep chasing those dreams! 🌟💫"
}
else if(userInput.includes("disconnected")||userInput.includes("deattached")){
  return "I'm sorry to hear that you're feeling disconnected. It's completely normal to feel this way sometimes, especially when life gets overwhelming. Remember to take some time for yourself and engage in activities that bring you joy and help you reconnect with yourself. Reach out to supportive friends or consider seeking professional help if you feel it would be beneficial. You're not alone, and there are people who care about you. Stay strong! 💪❤️"
}

else if(userInput.includes("Depressed")){
  return "I'm really sorry to hear that you're feeling depressed. It's important to reach out to someone you trust, like a friend, family member, or even a mental health professional. They can provide support and guidance during this difficult time. Remember, you don't have to go through this alone. Take care of yourself and know that there is help available. 💙🌟 \nIts best if you learn it from experts."}

// HAAPY mood

else if(userInput.includes("happy")||userInput.includes("excited")){
  return "That's wonderful to hear! I'm so glad you're feeling happy.  😄🌟"
}

else if(userInput.includes("bye")||userInput.includes("Good bye")){
  return "Take care! If you ever need someone to talk to or have any questions, feel free to reach out. Goodbye!"
}
     else {
      return "I'm here to help. Please feel free to ask any questions or share your concerns.";
    }
  }
  
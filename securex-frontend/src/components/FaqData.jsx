import React from 'react';
import Faq from './Faq';

const faqData = [
  { question: 'What is a secure chat app?', answer: 'A secure chat app is a messaging platform that ensures all communication between users is encrypted and private. Only the intended participants can access the conversation, providing a secure environment for sensitive discussions.' },
  { question: 'How does the passcode feature work?', answer: 'The passcode feature allows two users to securely connect and chat by entering a shared passcode. This passcode is unique to each conversation, ensuring that only the users with the correct code can access the chat.' },
  { question: 'Is my chat data stored on the server?', answer: 'No, your chat data is not stored on our servers. All messages are encrypted end-to-end, and only the participants can decrypt and read them. Once the chat session ends, the data is deleted from the system.' },
  { question: 'Is the app vulnerable to hacking?', answer: 'Our app employs the latest security protocols, including end-to-end encryption and regular security updates, to protect against hacking and unauthorized access. However, we advise users to practice good security hygiene, such as using strong passcodes and not sharing them publicly.' },
  { question: 'How do I know my chat is secure?', answer: 'You can be confident that your chat is secure because the app uses end-to-end encryption, meaning that only you and the person you are chatting with can read the messages. Additionally, the passcode feature adds an extra layer of security by limiting access to the conversation.' },
  { question: 'What devices are supported by the secure chat app?', answer: 'The secure chat app is compatible with most modern devices, including smartphones, tablets, and desktop computers. It supports both iOS and Android platforms, as well as major web browsers.' },
  { question: 'Can I recover messages if I accidentally delete them?', answer: 'No, once messages are deleted, they are permanently removed and cannot be recovered. This is part of our commitment to maintaining your privacy and security.' },
  { question: 'Can I use the app on multiple devices?', answer: 'Yes, you can seamlessly use the app on multiple devices. Whether you’re on a smartphone, tablet, or desktop, the app supports iOS, Android, and major web browsers. Your conversations stay in sync across all devices, ensuring you can switch between them effortlessly without losing any messages or data, all while maintaining the same high level of security and encryption.' },
  { question: 'What happens if I forget my passcode?', answer: 'If you forget your passcode, you can easily reset it through the app. However, resetting the passcode will prevent access to previous encrypted conversations as they were protected by the old passcode. This ensures that only you can access your chats, even in the event of a forgotten passcode.' },
  { question: 'Is there a limit to how many people I can add to a group chat?', answer: 'Yes, you can add as many participants as you want in a single group chat. Every message sent in the group is protected by end-to-end encryption, ensuring that all participants’ conversations remain private and secure, no matter how many people are involved.' },
];

const App = () => (
  <div>
    <Faq faqItems={faqData} />
  </div>
);

export default App;

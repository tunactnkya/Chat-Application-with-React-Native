import { firebase } from '@react-native-firebase/auth';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

function Chat({ route }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.firestore()
      .doc('chats/' + route.params.id)
      .onSnapshot((doc) => {
        setMessages(doc.data().messages.map(message => ({
          ...message,
          createdAT: message.createdAT.toDate(),
        })));
      })
  }, [route.params.id])

  const onSend = useCallback((m = []) => {
    firebase.firestore()
      .doc('chats/' + route.params.id)
      .set({ messages: GiftedChat.append(previousMessages, m) }, { merge: false })
  }, [route.params.id, messages])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chat;
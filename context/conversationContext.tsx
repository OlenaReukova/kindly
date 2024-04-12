'use client';
import { SupabaseClient } from '@supabase/supabase-js';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';
import newClient from '@/supabase/utils/newClient';

type ConverstaionContextProviderProps = {
  children: React.ReactNode;
};

type ConversationContext = {
  allConversations: AllConversationsType;
  setAllConversations: Dispatch<SetStateAction<AllConversationsType>>;
  currentConversation: ConversationCardType | undefined;
  setCurrentConversation: Dispatch<
    SetStateAction<ConversationCardType | undefined>
  >;
  showConversationsList: boolean;
  setShowConversationsList: Dispatch<SetStateAction<boolean>>;
  currentUserId: string;
  setCurrentUserId: Dispatch<SetStateAction<string>>;
  supabase: SupabaseClient;
};

export const ConversationContext = createContext<ConversationContext | null>(
  null
);

export default function ConversationContextProvider({
  children,
}: ConverstaionContextProviderProps) {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);

  const [currentConversation, setCurrentConversation] = useState<
    ConversationCardType | undefined
  >(undefined);

  const [showConversationsList, setShowConversationsList] = useState(false);

  const [currentUserId, setCurrentUserId] = useState<string>('');

  const supabase = newClient();

  return (
    <ConversationContext.Provider
      value={{
        allConversations,
        setAllConversations,
        currentConversation,
        setCurrentConversation,
        showConversationsList,
        setShowConversationsList,
        currentUserId,
        setCurrentUserId,
        supabase,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      'useConvesationContext must be used within a ConversationContextProvider.'
    );
  }
  return context;
}

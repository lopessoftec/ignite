import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

// irá pergar todos menos o id e o createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// o pick irá adicionar só os campos especificados
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
    // aceita qualquer coisa
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>; //retorna void a função
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData //forçando a a dizer que pertence a esse tipo ai
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}
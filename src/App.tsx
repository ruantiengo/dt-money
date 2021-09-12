import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { GlobalStyle } from './global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');
function App() {
  const [isNewTransactionalModalOpen,setIsNewTransactionalModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionalModalOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionalModalOpen(false);
    }
  return (
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard/>
    <NewTransactionModal
      isOpen= {isNewTransactionalModalOpen}
      onRequestClose= {handleCloseNewTransactionModal}
    />
    <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;

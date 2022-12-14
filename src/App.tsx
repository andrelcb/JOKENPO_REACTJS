import { useEffect, useState } from 'react'
import { ActionsGame } from './components/ActionsGame'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Modal } from './components/Modal'
import { Score } from './components/Score'
import * as C from './styles'
import { Actions } from './types/Actions'

type Messages = {
  [tag: string]: {
    title: string,
    message: string
  }
}

const messages: Messages = {
  rules: {
    title: "Regras",
    message: 'Jo ken pô, é um jogo em que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), papel (mão espalmada) e tesoura (dois dedos a frente). O jogo é similar ao "par ou ímpar", porém com uma variável a mais. E funciona assim: Cada jogador escolhe uma opção. A tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte'
  },
  user: {
    title: 'Usuário',
    message: 'Preencha um nome para o jogador.'
  },
  computerWin: {
    title: 'Que pena, você perdeu!',
    message: 'Não foi dessa vez, aposto que você consegue.'
  },
  playerWin: {
    title: 'Parabéns, você ganhou!',
    message: 'Dúvido você ganhar denovo.'
  },
}

const valueTypeEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

const actions: Actions[] = [
  {
    value: 1,
    label: '👊',
    description: 'Rock'
  },
  {
    value: 2,
    label: '🤚',
    description: 'Paper'
  },
  {
    value: 3,
    label: '✌️',
    description: 'Scissors'
  },
]

function App() {
  const [titleModal, setTitleModal] = useState('');
  const [messageModal, setMessageModal] = useState('');
  const [playGame, setPlayGame] = useState(false);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('JOGADOR');
  const [scorePlayerValue, setScorePlayerValue] = useState(0);
  const [scoreComputerValue, setScoreComputerValue] = useState(0);
  const [userAction, setUserAction] = useState('🔺');
  const [computerAction, setComputerAction] = useState('🔺');
  const [textGame, setTextGame] = useState('Iniciar Jogo!');
  const SCORE_TO_WIN = 10;

  const handleOpenModal = (type: string) => {
    if (!type) {
      setOpen(false);
      setTitleModal('');
      setMessageModal('');
      return;
    }

    setTitleModal(messages?.[type]?.title)
    setMessageModal(messages?.[type].message)
    setOpen(true);
  }

  const randomActionComputer = (): Actions => {
    const number = Math.floor(Math.random() * actions.length);
    return actions[number];
  }

  const handleClick = (value: Actions) => {
    setUserAction(value.label);
    const actionComputer = randomActionComputer();
    setComputerAction(actionComputer.label);
    CheckWinner(value.value, actionComputer.value);
  }

  const CheckWinner = (playerValue: number, computerValue: number) => {
    const playerRockWin =
      playerValue === valueTypeEnum.ROCK &&
      computerValue === valueTypeEnum.SCISSORS;
    const playerPaperWin =
      playerValue === valueTypeEnum.PAPER &&
      computerValue === valueTypeEnum.ROCK;
    const playerScissorsWin =
      playerValue == valueTypeEnum.SCISSORS &&
      computerValue === valueTypeEnum.PAPER;
    const drawerResult = playerValue === computerValue;
    const playerWin = playerRockWin || playerPaperWin || playerScissorsWin;

    if (drawerResult) return (setTextGame('Empate jogue novamente.'));

    if (playerWin) {
      setScorePlayerValue(state => state + 1);
      return setTextGame('Vitoria, jogue novamente.');
    }
    setScoreComputerValue(state => state + 1);
    return setTextGame('Derrota, jogue novamente.');

  }

  const handleUserName = (value: string) => {
    if (!value) return setUserName("JOGADOR");
    setUserName(value);
  }

  const startGame = () => {
    if (userName === "JOGADOR") {
      handleOpenModal("user");
      return;
    }

    if (playGame) return resetValues();

    setPlayGame(true);
  }

  const resetValues = () => {
    setTextGame('Iniciar Jogo!');
    setPlayGame(false);
    setScoreComputerValue(0);
    setScorePlayerValue(0);
    setUserAction('🔺');
    setComputerAction('🔺');
  }

  useEffect(() => {
    const checkVitory = () => {
      const playerWin = scorePlayerValue === SCORE_TO_WIN;
      const computerWin = scoreComputerValue === SCORE_TO_WIN;
      if (playerWin) {
        resetValues();
        return handleOpenModal('playerWin');
      };
      if (computerWin) {
        resetValues();
        return handleOpenModal('computerWin');
      }
    }

    checkVitory();
  }, [scorePlayerValue, scoreComputerValue])

  return (
    <div>
      <C.Container>
        <C.Flex direction='column'>
          <C.Typography fontWeight='400' size='32px' lineHeight='48px'>
            JO KEN PÔ
          </C.Typography>
          <Input placeholder='Digite o nome do jogador' onChange={(value) => handleUserName(value)} />

          <Button onClick={startGame}>
            {playGame ? 'Parar' : ' Iniciar'}
          </Button>

          <Score
            userName={userName}
            scorePlayer={scorePlayerValue}
            scoreComputer={scoreComputerValue}
          />
          <C.Spacer />

          <C.Flex justify='space-around'>
            <C.Typography size='32px'>{userAction}</C.Typography>
            <C.Typography size='32px'>{computerAction}</C.Typography>
          </C.Flex>

          <C.Flex direction='column' gap='0px'>
            <C.Typography>{textGame}</C.Typography>
            <C.Rules onClick={() => handleOpenModal("rules")}>Regras</C.Rules>
          </C.Flex>
          <ActionsGame disabled={!playGame} onClick={(value: Actions) => handleClick(value)} actions={actions} />

          <Modal open={open} title={titleModal} text={messageModal} handleOpenModal={() => setOpen(false)} />
        </C.Flex>
      </C.Container>
    </div>
  )
}

export default App

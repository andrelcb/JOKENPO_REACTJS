import * as C from '../../styles'

type ScoreProps = {
    userName: string,
    scorePlayer: number,
    scoreComputer: number,
}

export const Score = ({ userName, scoreComputer, scorePlayer }: ScoreProps) => {
    userName = userName.length > 12 ? `${userName.slice(0, 8)}...` : userName;

    return (
        <C.Flex direction='column'>
            <C.Typography size='32px' fontWeight='400' lineHeight='48px'>
                Placar
            </C.Typography>

            <C.Flex justify='space-between'>
                <C.Flex direction='column' gap="2px">
                    <C.Typography>{userName}</C.Typography>
                    <C.Typography>{scorePlayer}</C.Typography>
                </C.Flex>

                <C.Flex>
                    <C.Typography>X</C.Typography>
                </C.Flex>

                <C.Flex direction='column' gap="2px">
                    <C.Typography>Computador</C.Typography>
                    <C.Typography>{scoreComputer}</C.Typography>
                </C.Flex>
            </C.Flex>
        </C.Flex>
    )
}
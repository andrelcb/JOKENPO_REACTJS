import { Flex, Typography } from '../../styles'
import { Actions } from '../../types/Actions'
import { Action } from './styles';


type ActionsGameProps = {
    actions: Actions[];
    disabled: boolean;
    onClick: (action: Actions) => void;
}

export const ActionsGame = ({ actions, disabled, onClick }: ActionsGameProps) => {
    return (
        <Flex>
            {actions.map((action) => (
                <Action key={action.value}
                    disabled={disabled}
                    onClick={() => onClick(action)}
                >
                    <Typography size='32px'>{action.label}</Typography>
                </Action>
            ))}
        </Flex>
    )
}
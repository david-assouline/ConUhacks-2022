import React, { ReactNode } from 'react';
import { Modal as RModal } from 'react-bootstrap';
import styled , { css }from 'styled-components';

type IProps = {
    suggestions: string[]
    onSearch: (x: string) => any
}

const Suggestions = (props: IProps) => {
    const {onSearch, suggestions} = props;

    return (
        <RModal 
            centered
            show
            size={'lg'}
        >
			<RModal.Header 
                // closeButton={!preventClose}
            >
				<RModal.Title>
                    No Data Found, maybe this would interest you?
                </RModal.Title>
			</RModal.Header>
			<RModal.Body>
                <ul>
                    {suggestions && suggestions.map(x => <Suggestion onClick={() => onSearch(x)}>{x}</Suggestion>)}
                </ul>
            </RModal.Body>
      	</RModal>
    )
}

const Suggestion = styled.li`
    font-family: Roboto;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colours.toolOverlay.hover};
    }
`

Suggestions.defaultProps = {
    preventClose: false,
}

export default Suggestions;
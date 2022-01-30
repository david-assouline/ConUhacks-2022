import React, { ReactNode } from 'react';
import { Modal as RModal } from 'react-bootstrap';
import styled , { css }from 'styled-components';

type IProps = {

}

const Suggestions = (props: IProps) => {
    const suggestions = ['suggestion 1', 'suggestion 2', 'suggestion 3'];
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
                    {suggestions.map(x => <li>{x}</li>)}
                </ul>
            </RModal.Body>
      	</RModal>
    )
}

Suggestions.defaultProps = {
    preventClose: false,
}

export default Suggestions;
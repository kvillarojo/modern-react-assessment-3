import React from 'react'
import {Button, Modal} from "semantic-ui-react";

export const PostModal = ({
      isActive,
      children,
      buttonName,
      buttonClassName,
      modalTitle
}) => {
    return (
        <Modal trigger={<Button className={buttonClassName} disabled={isActive} > {buttonName} </Button>} closeIcon>
            <Modal.Header> {modalTitle} </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    {children}
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

PostModal.defaultProps = {
    isActive: false,
    buttonName: 'Show Modal',
    buttonClassName: 'ui button',
    modaltitle: 'Post'
}

import React, { Fragment, useState } from "react";
import { Button } from "../../forms/Button";
import { Box } from "../../layout/Box";
import { Text } from "../../typography/Text";
import { Modal } from "./";

export const ModalSample = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Fragment>
            <Button onClick={() => setIsModalOpen(true)}>Open Test Modal</Button>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box style={{ minHeight: 80 }}>
                    <Text>Hi from Modal</Text>
                    <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
                </Box>
            </Modal>
        </Fragment>
    );
};

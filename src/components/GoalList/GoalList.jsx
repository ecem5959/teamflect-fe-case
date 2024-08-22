import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import GoalTreeItem from "../GoalTreeItem/GoalTreeItem";
import GoalListItem from "../GoalListItem/GoalListItem";
import Modal from "../Modal/Modal";
import './goalList.scss';
import {useState} from "react";
import FormInputFields from "../FormInputFields/FormInputFields";
import FormSelectionFields from "../FormSelectionFields/FormSelectionFields";

const GoalList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return <div className="goalList">
        <div className="goalHeader">
            <h1>Goals</h1>
            <Button text="New Goal" onClick={openModal}/>
        </div>
        <div className="goalContent">
            <Tabs />
            <GoalTreeItem />
            <GoalListItem />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Add new goal" buttonText="Publish">
            <FormInputFields />
            <FormSelectionFields />
        </Modal>
    </div>
};

export default GoalList;
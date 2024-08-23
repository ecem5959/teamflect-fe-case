import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import Modal from "../Modal/Modal";
import './goalList.scss';
import {useEffect, useState} from "react";
import FormInputFields from "../FormInputFields/FormInputFields";
import FormSelectionFields from "../FormSelectionFields/FormSelectionFields";
import {getData, putData} from "../../services/fetch";
import { ArcherContainer, ArcherElement } from 'react-archer';
import {DraggableGoalTreeItem, DroppableContainer} from "../DragAndDrop/DragAndDrop";

const GoalList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        getData('goals')
            .then(data => {
                prepareTreeObject(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        console.log('treeData', treeData);
    },[treeData])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const prepareTreeObject = (goals) => {
        const parentList = goals.filter((goal) => !goal.parentId);
        let parentWithChild = [];
        parentList.map((parent) => {
            const childList = goals.filter(goal => goal.parentId === parent.id);
            parentWithChild.push({
                ...parent,
                childList
            })
        })

        setTreeData(parentWithChild)
    };

    const findItemById = (id) => {
        const parent = treeData.find(item => item.id === id);
        if (parent) {
            return parent;
        }

        for (const parent of treeData) {
            const child = parent.childList.find(child => child.id === id);
            if (child) {
                return child;
            }
        }

        return null;
    }

    const moveItem = (draggedId, targetId, draggedType, targetType) => {
        console.log('draggedId:', draggedId);
        console.log('targetId:', targetId);
        console.log('draggedType:', draggedType);
        console.log('targetType:', targetType);

        const draggedData = findItemById(draggedId);
        console.log('draggedData', draggedData);

        putData(`goals/${draggedId}`, {
            ...draggedData,
            parentId: targetId
        }).then(() => {
            getData('goals')
                .then(data => {
                    prepareTreeObject(data);
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        })
    };

    const structuredData = treeData.map((parent, parentIndex) => {

        const relations = parent.childList.map((child) => {
            return {
                targetId: child.id,
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
            };
        });

        return {
            parent: (
                <DroppableContainer key={parent.id} onDrop={moveItem} id={parent.id} type="parent">
                    <ArcherElement id={parent.id} relations={relations}>
                        <div className="treeItem">
                            <DraggableGoalTreeItem data={parent} index={parentIndex} moveItem={moveItem}/>
                        </div>
                    </ArcherElement>
                </DroppableContainer>
            ),
            children: parent.childList.map((child, childIndex) => (
                <DroppableContainer key={child.id} onDrop={moveItem} id={child.id} type="child">
                    <ArcherElement id={child.id}>
                        <div className="treeItem">
                            <DraggableGoalTreeItem data={child} index={childIndex} type="child"/>
                        </div>
                    </ArcherElement>
                </DroppableContainer>
            )),
        };
    });

    return <div className="goalList">
        <div className="goalHeader">
            <h1>Goals</h1>
            <Button text="New Goal" onClick={openModal}/>
        </div>
        <div className="goalContent">
            <Tabs />
            <div className="tabBody">
                <ArcherContainer
                    strokeColor="black"
                    endShape={{
                        arrow: {
                            arrowThickness: 0,
                            arrowLength: 0
                        },
                        circle: {
                            radius: 0,
                            fillColor: 'transparent',
                            strokeColor: 'transparent',
                            strokeWidth: 0,
                        }
                    }}
                    strokeWidth={1}>
                    {structuredData.map((item, index) => (
                        <div key={index}>
                            <div className="parentTreeData">
                                {item.parent}
                            </div>
                            <div className="childTreeData">
                                {item.children}
                            </div>
                            {
                                index !== structuredData.length - 1 && <div className="divider"></div>
                            }
                        </div>
                    ))}
                </ArcherContainer>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Add new goal" buttonText="Publish">
            <FormInputFields />
            <FormSelectionFields />
        </Modal>
    </div>
};

export default GoalList;
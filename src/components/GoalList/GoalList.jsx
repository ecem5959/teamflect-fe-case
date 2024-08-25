import Button from '../Button/Button';
import Tabs from '../Tabs/Tabs';
import './goalList.scss';
import { useContext, useState } from 'react';
import { getData, postData, putData } from '../../services/fetch';
import { ArcherContainer, ArcherElement } from 'react-archer';
import {
  DraggableGoalTreeItem,
  DroppableContainer,
} from '../DragAndDrop/DragAndDrop';
import Divider from '../Divider/Divider';
import GoalListItem from '../GoalItem/GoalListItem/GoalListItem';
import Expand from '../Icons/Expand';
import Collapse from '../Icons/Collapse';
import GoalForm from '../GoalForm/GoalForm';
import { useFormContext } from '../../contexts/FormContext';
import Modal from '../Modal/Modal';
import { GoalContext } from '../../contexts/GoalContext';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = () => {
  const [activeTab, setActiveTab] = useState('Tree');
  const [visibleIndex, setVisibleIndex] = useState(null);
  const { formData } = useFormContext();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setGoals, treeData } = useContext(GoalContext);

  const toggleChildVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const submitFormData = () => {
    postData('goals', formData).then(() => {
      getData('goals')
        .then((data) => {
          setGoals(data);
          handleCloseModal();
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  };

  const handleTabClick = (index) => {
    setActiveTab(index ? 'List' : 'Tree');
  };

  const findItemById = (id) => {
    const parent = treeData.find((item) => item.id === id);
    if (parent) {
      return parent;
    }

    for (const parentData of treeData) {
      const child = parentData.childList.find(
        (childData) => childData.id === id,
      );
      if (child) {
        return child;
      }
    }

    return null;
  };

  const moveItem = (draggedId, targetId, draggedType, targetType) => {
    console.log('draggedId:', draggedId);
    console.log('targetId:', targetId);
    console.log('draggedType:', draggedType);
    console.log('targetType:', targetType);

    const draggedData = findItemById(draggedId);
    console.log('draggedData', draggedData);

    putData(`goals/${draggedId}`, {
      ...draggedData,
      parentId: targetId,
    }).then(() => {
      getData('goals')
        .then((data) => {
          setGoals(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
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
        <DroppableContainer
          key={parent.id}
          onDrop={moveItem}
          id={parent.id}
          type="parent"
        >
          <ArcherElement id={parent.id} relations={relations}>
            <div className="treeItem">
              <DraggableGoalTreeItem
                data={parent}
                index={parentIndex}
                moveItem={moveItem}
              />
            </div>
          </ArcherElement>
        </DroppableContainer>
      ),
      children: parent.childList.map((child, childIndex) => (
        <DroppableContainer
          key={child.id}
          onDrop={moveItem}
          id={child.id}
          type="child"
        >
          <ArcherElement id={child.id}>
            <div className="treeItem">
              <DraggableGoalTreeItem
                data={child}
                index={childIndex}
                type="child"
              />
            </div>
          </ArcherElement>
        </DroppableContainer>
      )),
    };
  });

  const renderGoalListItem = (data) => {
    return (
      <div key={data.id}>
        <GoalItem key={data.id} data={data} type="list" />
        {/* <GoalListItem key={data.id} data={data} /> */}
        {data.childList &&
          data.childList.length > 0 &&
          data.childList.map((child) => renderGoalListItem(child))}
      </div>
    );
  };

  return (
    <>
      <div className="goalList">
        <div className="goalHeader">
          <h1>Goals</h1>
          <Button text="New Goal" onClick={handleOpenModal} />
        </div>
        <div className="goalContent">
          <Tabs onTabClick={handleTabClick} />
          <div className="tabBody">
            {activeTab === 'Tree' ? (
              <ArcherContainer
                strokeColor="black"
                endShape={{
                  arrow: {
                    arrowThickness: 0,
                    arrowLength: 0,
                  },
                  circle: {
                    radius: 0,
                    fillColor: 'transparent',
                    strokeColor: 'transparent',
                    strokeWidth: 0,
                  },
                }}
                strokeWidth={1}
              >
                {structuredData.map((item, index) => (
                  <div key={index}>
                    <div className="parentTreeData">
                      {item.parent}
                      {item.children && item.children.length > 0 && (
                        <button
                          className="treeItemButton"
                          onClick={() => toggleChildVisibility(index)}
                        >
                          {visibleIndex === index ? <Collapse /> : <Expand />}
                        </button>
                      )}
                    </div>
                    {visibleIndex === index && (
                      <div className="childTreeData">{item.children}</div>
                    )}
                    {index !== structuredData.length - 1 && <Divider />}
                  </div>
                ))}
              </ArcherContainer>
            ) : (
              treeData.map((data) => renderGoalListItem(data))
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        closeModal={handleCloseModal}
        modalContent={{
          title: 'Add new goal',
          buttonText: 'Publish',
          children: <GoalForm />,
        }}
        buttonAction={submitFormData}
      />
    </>
  );
};

export default GoalList;

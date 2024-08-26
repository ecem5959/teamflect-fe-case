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
import Expand from '../Icons/Expand';
import Collapse from '../Icons/Collapse';
import GoalForm from '../GoalForm/GoalForm';
import { useFormContext } from '../../contexts/FormContext';
import Modal from '../Modal/Modal';
import { GoalContext } from '../../contexts/GoalContext';
import GoalItem from '../GoalItem/GoalItem';
import EmptyGoal from '../EmptyGoal/EmptyGoal';
import toast from 'react-hot-toast';

const GoalList = () => {
  const [activeTab, setActiveTab] = useState('Tree');
  const [visibleIndex, setVisibleIndex] = useState(null);
  const { formData, resetFormData, validateForm } = useFormContext();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { goals, setGoals, treeData } = useContext(GoalContext);

  const toggleChildVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    resetFormData();
    setIsOpenModal(false);
  };

  const submitFormData = () => {
    if (validateForm()) {
      postData('goals', formData).then(() => {
        getData('goals')
          .then((data) => {
            setGoals(data);
            handleCloseModal();
            toast.success('Goal added.');
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      });
    }
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

    if (
      (draggedType === 'child' && targetType === 'parent') ||
      (draggedType === 'parent' && targetType === 'parent')
    ) {
      putData(`goals/${draggedId}`, {
        ...draggedData,
        parentId: targetId,
      }).then(() => {
        getData('goals')
          .then((data) => {
            setGoals(data);
            toast.success('Goal updated.');
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      });
    }
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
        {data.childList &&
          data.childList.length > 0 &&
          data.childList.map((child) => renderGoalListItem(child))}
      </div>
    );
  };

  return (
    <>
      {goals.length === 0 ? (
        <EmptyGoal buttonAction={handleOpenModal} />
      ) : (
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
      )}
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

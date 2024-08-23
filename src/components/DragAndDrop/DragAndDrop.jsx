import { useDrag, useDrop } from 'react-dnd';
import GoalTreeItem from "../GoalTreeItem/GoalTreeItem";

const ItemType = 'TREE_ITEM';

export const DraggableGoalTreeItem = ({ data, index, type }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { id: data.id, index, type },
    });

    return (
        <div ref={ref}>
            <GoalTreeItem data={data} />
        </div>
    );
}

export const DroppableContainer = ({ children, onDrop, id, type }) => {
    const [, ref] = useDrop({
        accept: ItemType,
        drop: (draggedItem) => onDrop(draggedItem.id, id, draggedItem.type, type),
    });

    return (
        <div ref={ref} className="droppableContainer">
            {children}
        </div>
    );
}
import React, { PropsWithChildren, useState } from 'react';
import { Column } from '../../../../types';
import './ColumnCard.css';

type ColumnCardProps = {
    addTaskAction: React.FC<{ columnId: string }>;
    editColumnAction: React.FC<{ columnId: string }>;
    deleteColumnAction: React.FC<{ columnId: string }>;
    onDrop: (event: React.DragEvent<HTMLDivElement>, columnId: string) => void;
    onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
} & Column;

export default function ColumnCard({
    id,
    title,
    color,
    addTaskAction,
    editColumnAction,
    deleteColumnAction,
    children,
    onDrop,
}: PropsWithChildren<ColumnCardProps>) {
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggingOver(true);
    };

    const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggingOver(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggingOver(false);
        const taskId = event.dataTransfer.getData('text/plain');
        if (taskId) {
            onDrop(event, id);
        }
    };

    const className = isDraggingOver ? 'column-tasks column-tasks-drag' : 'column-tasks';

    return (
        <div className='column'>
            <header className='column-header'>
                <h2>{title}</h2>
                <div className='column-buttons'>
                    {editColumnAction({ columnId: id })}
                    {deleteColumnAction({ columnId: id })}
                </div>
            </header>
            <div
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={handleDrop}
                className={className}
                style={{ backgroundColor: `${color}20` }}
            >
                {addTaskAction({ columnId: id })}
                {children}
            </div>
        </div>
    );
}

import React from "react";
import './Task.css';
import {IToDoTask, Tag} from "../../types";
import {formatDateToString} from "../../helpers/time";
import Button, {ButtonVariant} from "../button/Button";

interface ITaskProps {
  value: IToDoTask,
  allTags: Set<Tag>,
  onEdit: (id: number) => void,
  onCompleteToggle: (id: number) => void,
}

const Task = (
  {
    value,
    allTags,
    onEdit,
    onCompleteToggle
  }: ITaskProps
) => {
  const {id, title, desc, status, start, end, markColor, tags, isComplete} = value;

  const handleEdit = () => onEdit(id);
  const handleCompleteToggle = () => onCompleteToggle(id);

  return (
    <article className={`task ${isComplete? `task--complete` : ``}`.trim()}>
      <div className="task__mark" style={{borderTopColor: markColor}}/>
      <h3 className="task__title" title={title}>{title}</h3>
      <p className="task__desc">{desc}</p>
      <p className="task__time">
        <span className="task__time-wrap">
          <span>Start:</span>
          <span>{formatDateToString(start)}</span>
        </span>
        <span className="task__time-wrap">
          <span>End:</span>
          <span>{formatDateToString(end)}</span>
        </span>
      </p>
      <p className="task__tags">
        {Array.from(allTags).map((tag, index) => (
          <span
            className={`task__tag ${tags.has(tag) ? `task__tag--checked` : ``}`.trim()}
            key={index}
          >{tag}
          </span>
        ))}
      </p>
      <p className="task__statuses">
        <span className="task__status">{status}</span>
        <span className="task__status">{`${isComplete ? `Complete` : `Not Complete`}`}</span>
      </p>
      {
        !isComplete &&
        <Button
          variant={ButtonVariant.DEFAULT}
          mixins={[`task__button`]}
          onClick={handleEdit}>Edit</Button>
      }
      <Button
        variant={ButtonVariant.BLACK}
        mixins={[`task__button`]}
        onClick={handleCompleteToggle}
      >{isComplete ? `Revert` : `Complete`}
      </Button>
    </article>
  );
}


export default Task;

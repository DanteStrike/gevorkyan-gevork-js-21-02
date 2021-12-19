import {Color, IToDoTask, Tag, TaskStatus} from "../../types";
import {formatDateToValue} from "../../helpers/time";
import React, {useState} from "react";
import "./TaskEdit.css";
import Button, {ButtonType, ButtonVariant} from "../button/Button";

interface IEditTaskProps {
  value: IToDoTask,
  allTags: Set<Tag>,
  allColors: Set<Color>,
  onClose: (id: number) => void,
  onDelete: (id: number) => void,
  onSave: (newTask: IToDoTask) => void,
}

const isEqual = (prevProps: IEditTaskProps, nextProps: IEditTaskProps): boolean => {
  return prevProps.value.isEdit === nextProps.value.isEdit;
}

const TaskEdit = React.memo((
  {
    value,
    allTags,
    allColors,
    onSave,
    onDelete,
    onClose,
  }: IEditTaskProps
) => {
  const {id, title, desc, start, end, markColor, tags} = value;

  const [titleValue, setTitleValue] = useState<string>(title);
  const [descValue, setDescValue] = useState<string>(desc);
  const [dateStart, setDateStart] = useState<number>(start);
  const [dateEnd, setDateEnd] = useState<number>(end);
  const [checkedTags, setCheckedTags] = useState<Set<Tag>>(new Set(tags));
  const [colorValue, setColorValue] = useState<Color>(markColor);

  const handleSave = () => onSave({
    id: id,
    title: titleValue,
    desc: descValue,
    start: dateStart,
    end: dateEnd,
    tags: checkedTags,
    status: TaskStatus.ON_PROGRESS,
    markColor: colorValue,
    isEdit: false,
    isComplete: false,
  })
  const handleDelete = () => onDelete(id);
  const handleClose = () => onClose(id);

  return (
    <form className="task-edit" onSubmit={(evt) => {
      evt.preventDefault();
      handleSave();
    }}>
      <label className="visually-hidden" htmlFor={`task-${id}-title`}>Заголовок</label>
      <input
        name="title"
        type="text"
        title={titleValue}
        className="task-edit__title"
        id={`task-${id}-title`}
        value={titleValue}
        onChange={(evt) => setTitleValue(evt.target.value)}
      />
      <label className="visually-hidden" htmlFor={`task-${id}-desc`}>Описание задачи</label>
      <textarea
        name="desc"
        className="task-edit__desc"
        id={`task-${id}-desc`}
        value={descValue}
        onChange={(evt) => setDescValue(evt.target.value)}
      />
      <label htmlFor={`task-${id}-data-start`}>Start</label>
      <input
        name="date-start"
        type="datetime-local"
        className="task-edit__date"
        id={`task-${id}-data-start`}
        value={formatDateToValue(dateStart)}
        onChange={(evt) => {
          const tempTime = new Date(evt.target.value).getTime();
          if (tempTime > dateEnd) {
            setDateEnd(tempTime);
          }
          setDateStart(tempTime);
        }}
      />
      <label htmlFor={`task-${id}-data-end`}>End</label>
      <input
        name="date-end"
        type="datetime-local"
        className="task-edit__date"
        id={`task-${id}-data-end`}
        value={formatDateToValue(dateEnd)}
        onChange={(evt) => {
          const tempTime = new Date(evt.target.value).getTime();
          if (tempTime < dateStart) {
            setDateStart(tempTime);
          }
          setDateEnd(tempTime);
        }}
      />
      <div className="task-edit__tags">
        {Array.from(allTags).map((tag, index) => (
          <div className="task-edit__tag-wrap" key={index}>
            <input
              className="task-edit__check visually-hidden"
              type="checkbox"
              name={`task-${id}-tags`}
              id={`task-${id}-tags-${index}`}
              value={tag}
              defaultChecked={checkedTags.has(tag)}
              onChange={(evt) => {
                const newCheckedTags = new Set(checkedTags);
                if (evt.target.checked) {
                  newCheckedTags.add(evt.target.value as Tag);
                } else {
                  newCheckedTags.delete(evt.target.value as Tag);
                }
                setCheckedTags(newCheckedTags);
              }}
            />
            <label
              className="task-edit__tag"
              htmlFor={`task-${id}-tags-${index}`}
            >{tag}
            </label>
          </div>
        ))}
      </div>
      <div className="task-edit__colors">
        {Array.from(allColors).map((color, index) => (
          <div className="task-edit__color-wrap" key={index}>
            <input
              className="task-edit__check visually-hidden"
              type="radio"
              name={`task-${id}-colors`}
              id={`task-${id}-colors-${index}`}
              value={color}
              defaultChecked={colorValue === color}
              onChange={() => setColorValue(color)}
            />
            <label
              className="task-edit__color"
              htmlFor={`task-${id}-colors-${index}`}
              style={{backgroundColor: color}}
            >
            </label>
          </div>
        ))}
      </div>
      <div className="task-edit__button-wrap">
        <Button
          variant={ButtonVariant.GREEN}
          mixins={[`task-edit__button`]}
          type={ButtonType.SUBMIT}
        >Save</Button>
        <Button
          variant={ButtonVariant.RED}
          mixins={[`task-edit__button`]}
          onClick={handleDelete}
        >Delete</Button>
      </div>
      <Button
        variant={ButtonVariant.BLACK}
        mixins={[`task-edit__button`]}
        onClick={handleClose}
      >Close</Button>
    </form>
  );
}, isEqual)

export default TaskEdit;


export const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
    return (
        <>
            <textarea ref={inputEl} />
            <button onClick={handleAddTodoListItem}>+ Todoを追加</button>
        </>
    );
};
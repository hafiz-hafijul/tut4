import React from 'react'

function TodoList({text}) {
    return (
      <div>
        <>
          <h4>&times;</h4>
          <p>{text}</p>
        </>
      </div>
    );
}

export default TodoList

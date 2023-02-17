import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

const BoxShow = ({ boxes, current_user, deleteBox }) => {

  const { id } = useParams()
  let currentBox = boxes?.find(box => box.id === +id)
console.log(currentBox)
  return(
      <main>
        <h1>Edit or Delete Your Box</h1>
        {currentBox && (
          <>
            <p>Name:</p>
            <p>{currentBox.name}</p>
            <p>Size:</p>
            <p>{currentBox.size}</p>
            <p>Contents:</p>
            <p>{currentBox.contents}</p>
          </>
          
        )}
        <div>
            <NavLink to={`/boxedit/${currentBox?.id}`}>
            <Button>
                Edit Box
            </Button>
            </NavLink>
            <NavLink to="/boxindex">
            <Button onClick={() => {deleteBox(id)}}>
                Delete Box
            </Button>
            </NavLink>
        </div>
      </main>
    )
}

export default BoxShow
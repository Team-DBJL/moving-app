import React, {useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { 
Form, 
Row, 
Col, 
FormGroup,
Label,
Input, 
Button
} from "reactstrap"

const BoxEdit = ({boxes, updateBox, current_user}) => {
const { id } = useParams()
let currentBox = boxes?.find((box) => box?.id === +id)
console.log(currentBox)
console.log(boxes)
console.log(current_user)

const navigate = useNavigate()
const [editBox, setEditBox] = useState({
  name: currentBox?.name,
  contents: currentBox?.contents,
  size: currentBox?.size,
  user_id: current_user.id
})

const handleChange = (e) => {
    setEditBox({...editBox, [e.target.name]: e.target.value})
}

const handleSubmit = () => {
    updateBox(editBox, currentBox.id)
    navigate("/boxindex")
}

console.log(currentBox)

return (
    <>
    
        <h3>Edit Your Box</h3>
        <Form>
        <Row>
        <Col md={5}>
        <FormGroup>
          <Label for="name">
          Name
          </Label>
          <Input
          id="name"
          name="name"
          placeholder={currentBox?.name}
          type="text"
          onChange={handleChange}
          value={editBox.name}
          />
        </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="size">
                Size
                </Label>
                <Input
                id="size"
                name="size"
                placeholder={currentBox?.size}
                type="text"
                onChange={handleChange}
                value={editBox.size}
                />
            </FormGroup>
            </Col>
        
        <Col md={2}>
            <FormGroup>
            <Label for="contents">
            Contents
            </Label>
            <Input
            id="contents"
            name="contents"
            placeholder={currentBox?.contents}
            text="text"
            onChange={handleChange}
            value={editBox.contents}
            />
            </FormGroup>
        </Col>
        </Row>
        </Form>
        <Button onClick={handleSubmit}>
        Update Your Box
        </Button>
            
    </>
)
}
export default BoxEdit
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
Form, 
Row, 
Col, 
FormGroup,
Label,
Input, 
Button
} from "reactstrap"

const BoxNew = ({createBox, current_user}) => {
const navigate = useNavigate()
const [newBox, setNewBox] = useState({
  name: "",
  contents: "",
  size: "",
  user_id: current_user.id
})

const handleChange = (e) => {
    setNewBox({...newBox, [e.target.name]: e.target.value})
}

const handleSubmit = () => {
    createBox(newBox)
    navigate("/boxindex")
}

return (
    <>
    
        <h3>Make Your Box</h3>
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
          type="text"
          onChange={handleChange}
          value={newBox.name}
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
                type="text"
                onChange={handleChange}
                value={newBox.size}
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
            text="text"
            onChange={handleChange}
            value={newBox.contents}
            />
            </FormGroup>
        </Col>
        </Row>
        </Form>
        <Button onClick={handleSubmit}>
        Create Your Box
        </Button>
            
    </>
)
}
export default BoxNew;
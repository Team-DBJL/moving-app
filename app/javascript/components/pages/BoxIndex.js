import React from "react"
import { Card, CardBody, CardTitle, CardText, Button, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const BoxIndex = ({boxes, current_user}) => {
    const userBoxes = boxes?.find((box) => {
        return box.user_id === current_user.id
    })
    return(
        <main>
            <h1>Your Boxes</h1>
                <NavLink to="/boxnew">
                    <Button>
                        New Box
                    </Button>
                </NavLink>
            {boxes?.map((box, index) => {
                return(
                    <Card style={{width: '18rem'}} key={index}>
                        <CardBody>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {box.size}
                            </CardSubtitle>
                            <CardTitle tag="h5">
                                {box.name} Box
                            </CardTitle>
                            <CardText>
                                {box.contents}
                            </CardText>
                            <NavLink to={`/boxshow/${box.id}`}> 
                                <Button>
                                    Edit
                                </Button>
                            </NavLink>
                        </CardBody>
                    </Card>
            )
        }
        )}
        </main>
    )
}

export default BoxIndex
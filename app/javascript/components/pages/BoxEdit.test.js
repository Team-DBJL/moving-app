import React from "react"
import { render, screen } from "@testing-library/react"
import BoxEdit from "./BoxEdit"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<BoxEdit />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxEdit />
            </BrowserRouter>,
            div
        )
    })
    it("prompts a user to edit their box",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxEdit />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Edit Your Box/i)
    expect(text).toBeInTheDocument()
    })
})
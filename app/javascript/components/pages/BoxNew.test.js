import React from "react"
import { render, screen } from "@testing-library/react"
import BoxNew from "./BoxNew"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe ("<BoxNew />", () => {
    it("renders without crashing",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxNew />
            </BrowserRouter>,
            div
        )
    })
    it("Has a field to enter a box name",() => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <BoxNew />
            </BrowserRouter>,
            div
        )
    const text = screen.getByText(/Name/i)
    expect(text).toBeInTheDocument()
    })
})
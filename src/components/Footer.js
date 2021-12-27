import React from 'react'
import "./css/Footer.css"
import { Button } from '@material-ui/core'

export default function Footer() {
    return (
        <div className="footer">
            <Button> <a href="#header" style={{color: "white"}}>Back To Top</a> </Button>
        </div>
    )
}

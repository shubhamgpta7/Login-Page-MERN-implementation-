import React from 'react'

function Footer() {
    const styleClass={
        textAlign : "center",
        backgroundColor: "skyblue",
        border: '1px solid black',
        //paddingBottom: '5px'
        // borderRadius: '1rem'
    }
  return (
    <div>
        <footer style={styleClass}>
            <p>Author: Shubham Kumar Gupta <br/>
            <a href="mailto:shubhamgpta7@gmail.com">Contact Me!!</a></p>
        </footer>
    </div>
  )
}

export default Footer
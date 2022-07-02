import "./PixelartGrid.css"
import React from "react";
import html2canvas from "html2canvas"

class PixelartGrid extends React.Component {

    componentDidMount() {

        let draw = false
        let eraser = false

        let container = document.querySelector('.container')
        let sizeEl = document.querySelector(".size");
        let size = sizeEl.value
        let color = document.querySelector('.color')
        let resetBtn = document.querySelector('.btn')
        let eraserBtn = document.querySelector('.eraserBtn')
         
         
          function populate(size) {

            container.style.setProperty('--size', size)
            for (let i = 0; i < size * size; i++) {
              const div = document.createElement('div')
              div.classList.add('pixel')
      
              div.addEventListener('mouseover', function () {
                if (!draw) return
                div.style.backgroundColor = color.value
              })
              
              div.addEventListener('mousedown', function () {
                div.style.backgroundColor = color.value
              })
      
      
              div.addEventListener('mousedown', function () {
                if (!eraser) return
                div.style.backgroundColor = "#ffffff"
                console.log(eraser) 
              })
      
              container.appendChild(div)
            }
          }
    
          window.addEventListener("mousedown", function () {
            draw = true
          })
          window.addEventListener("mouseup", function () {
            draw = false
          })
          function reset() {
            container.innerHTML = ''
            populate(size)
          }
         
          function setColorWhite() {
            if (!eraser) {
              eraser = true;
              console.log(eraser)
            } else {
              eraser = false;
              console.log(eraser)
      
            }    
          }
          resetBtn.addEventListener('click', reset)
          eraserBtn.addEventListener('click', setColorWhite)


          /* resize grid when new value is added */
          sizeEl.addEventListener('keyup', function () {
            size = sizeEl.value
            reset()
          })

          populate(size);
    
        }

        appendScreenshot = () => {

            const container = document.querySelector("#container");
        
            html2canvas(container).then((canvas) => {
              const url = canvas.toDataURL(); //png file???
              
              console.log(url)
        
              document.querySelector("#container2").appendChild(canvas);
            });
          }

    render() {
        return <div className="Appi">

            <div className="navbar">
                <button className="btn">Reset</button>
                <button className="eraserBtn">Eraser</button>
                <input type="color" value="#00eeff" class="color"></input>
                <input type="number" value="30" class="size"></input>

            </div>



            <div className="container" id="container">  </div>
            <button onClick={this.appendScreenshot}>Load Canvas</button>
            <div className="container2" id="container2"></div>

            {/* <h1>Hello, {this.props.name}</h1> */}
            
            </div>;

    }
}
export default PixelartGrid;

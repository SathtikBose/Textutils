import React from 'react'

export default function About(props) {
    
    return (
        <div  className={`container bg-${props.backgroundColor} text-${props.textColor}`}  >
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className={`accordion-item bg-${props.backgroundColor} text-${props.textColor}`}>
                <h2 className="accordion-header">
                <button className={`accordion-button bg-${props.backgroundColor} text-${props.textColor}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Our Text Converter
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <p>Welcome to our Text Converter website, a simple yet powerful tool designed to help you transform your text effortlessly. Built using React, our platform provides an intuitive interface that allows users to convert text to upper case, lower case, and vice versa with just a few clicks. Whether you’re a student, professional, or simply someone who enjoys writing, our tool is here to make your text editing experience smoother and more efficient.</p>
                </div>
                </div>
            </div>
            <div className={`accordion-item bg-${props.backgroundColor} text-${props.textColor}`}>
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed bg-${props.backgroundColor} text-${props.textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <p>Our goal is to provide a seamless user experience while ensuring that the conversion process is quick and accurate. We understand that formatting text can be a tedious task, especially when you’re working with large documents or presentations. That’s why we have developed this tool to save you time and effort, allowing you to focus on what really matters—your content.</p>
                </div>
                </div>
            </div>
            <div className={`accordion-item bg-${props.backgroundColor} text-${props.textColor}`}>
                <h2 className="accordion-header">
                <button className={`accordion-button collapsed bg-${props.backgroundColor} text-${props.textColor}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <p>At the heart of our website is a commitment to accessibility and usability. We believe that everyone should have access to simple yet effective tools that enhance their productivity. With our Text Converter, you can easily switch between text formats without any hassle. Thank you for visiting our site, and we hope you find our tool useful in your text editing endeavors!</p>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

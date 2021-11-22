import React, {useState, useEffect} from "react"
import { navigate } from "hookrouter"
import Typist from "react-typist"

export default function Contact(){

    const [formOrThank, setFormOrThank] = useState(true)

    function getFormData(form) {
        var elements = form.elements;
        var honeypot;
    
        var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
        }
        return true;
        }).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        } 
        }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
        });
    
        var formData = {};
        fields.forEach(function(name){
        var element = elements[name];
        
        formData[name] = element.value;
        
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
                data.push(item.value);
            }
            }
            formData[name] = data.join(', ');
        }
        });
    
        
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; 
        formData.formGoogleSendEmail
        = form.dataset.email || ""; 
    
        return {data: formData, honeypot: honeypot};
    }
    
    function handleFormSubmit(event) { 
        event.preventDefault();           
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;
    
        if (formData.honeypot) {
        return false;
        }
    
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
                formElements.style.display = "none";
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            }
            }
        };
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }
    
    function loaded() {
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
    
    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        }
    }

    const changeDisplay = () => {
        setFormOrThank(false)
    }

    const displayContent = () => {
        if(formOrThank){
            return(
            <form 
                className="gform" 
                method="POST" 
                data-email="wjosephmark@gmail.com" 
                action="https://script.google.com/macros/s/AKfycbzbAcMS7WjSs-IjWxFDBsMTUwuzQz2oAodzIf_k/exec" 
                onSubmit={() => changeDisplay()}
            >
                <div className="small-input-wrapper">
                    <input className="small-input" type="text" name="Name" placeholder="Name" />
                    <input className="small-input" type="text" name="Email" placeholder="Email" />
                </div>
                <div className="big-input-wrapper">
                    <textarea className="big-input" name="Message" placeholder="Message" />
                </div>
                <div className="send-wrapper">
                    <button className="send" type="submit">Send</button>
                </div>
                <div className="info-holder">
                    <div className="spacer" />
                    <div className="email">
                        < a href="mailto:wjosephmark@gmail.com">wjosephmark@gmail.com</a>
                    </div>
                    <div className="phone">
                        <p>Cell - (801) 830-9786</p>
                    </div>
                </div>
            </form>
            )
        } else {
            return(
                <div className="thank-text">
                    <h1>Thank you, I recieved your message!  I will get back to you as soon as I can.</h1>
                </div>
            )
        }
    }

    return(
        <div className="contact-app">
            <div className="nav-wrapper-contact">
                <div className="nav-buttons-wrapper-contact">
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>

            <div className="header-wrapper-contact">
                <div className='top-line-contact' />

                <Typist cursor={{show: false}}>
                    <h1 className="typist-header">Contact</h1>
                </Typist>

                <div className='bottom-line-contact' />
            </div>

            {displayContent()}
        </div>
    )
}
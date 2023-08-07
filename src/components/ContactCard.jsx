import React from 'react';
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const ContactCard = ({ name, email, location , phone}) => {
    return (
        <div className="contact-card">
            <h2>Let's Talk!</h2>
            <p>
                <HiMail className='' size={20}/> {email}
            </p>
            <p>
                <HiLocationMarker className='' size={20}/> {location}
            </p>
            <p>
                <HiPhone className='' size={20}/> {phone}
            </p>
        </div>
    );
}

export default ContactCard;
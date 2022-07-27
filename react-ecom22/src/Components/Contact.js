import React from 'react'
// import SimpleSlider from './Slider'

const contact = () => {
    return (

        <div className="container">
            <form className="container">
                <h2>Sign Up for Monthly G.L.A. Updates</h2>
                <label for="fname">First Name</label><br />
                <input type="text" id="fname" placeholder="John" required /><br />
                <label for="lname">Last Name</label><br />
                <input type="text" id="lname" placeholder="Doe" required /><br />
                <label for="Pnumber">Phone Number</label><br />
                <input type="tel" id="Pnumber" placeholder="1234567890" /><br /> <label for="email">Email</label><br />
                <input type="Email" id="email" placeholder="@gmail.com" required /><br />
                <input type="hidden" name="_gotcha" /> <br />
                <label for="comment"> Comment<br />
                    <textarea cols="35" rows="5" name="mes" id="comment"></textarea></label><br />
                <input type="submit" /> </form>
        </div>

    )
}

export default contact;
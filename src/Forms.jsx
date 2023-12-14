function handleFormSubmit(evt) {
    evt.preventDefault();   //method to prevent default behavoir that restarts the page after clicking the submit form button
    console.log("Submitted the Form!")
}


export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}
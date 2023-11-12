import "../styles/form.css";

const FormDataComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    /**
     * In order to get entries we need to add name tag to the HTML elements
     */
    console.log(newUser);
    /* To reset values of the form */
    /* e.currentTarget.reset(); */
  };
  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <div>Form Data API</div>
      <div className="form-row">
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
      </div>
      <div className="form-row">
        <label htmlFor="">Email</label>
        <input type="email" name="email" />
      </div>
      <div className="form-row">
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormDataComponent;

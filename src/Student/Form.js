import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profilePicture: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/form-response', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok){
            alert('Form submitted successful');
        }else{
            console.error('Form submition failed');
        }
    } catch (error) {
        console.log("Error: ",error);
    }
    // console.log("Form Submitted");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFileDrop = (files) => {
    const fileList = Object.values(files).map((file)=>{
      return{
          url: URL.createObjectURL(file),
          data: file,
      };
  });
    setFormData({ ...formData, profilePicture: fileList });
  };
  return (
    <div className='main'>
      <h3>Forms</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture" onChange={(e)=> onFileDrop(e.target.files)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
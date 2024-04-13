import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '', 
    english: {
      year1: '',
      year2: '',
      year3: '',
    },
    hindi: {
      year1: '',
      year2: '',
      year3: '',
    },
    history: {
      year1: '',
      year2: '',
      year3: '',
    },
    geography: {
      year1: '',
      year2: '',
      year3: '',
    },
    science: {
      year1: '',
      year2: '',
      year3: '',
    },
    maths: {
      year1: '',
      year2: '',
      year3: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('year')) {
      const [subject, year] = name.split('-');
      setFormData((prevFormData) => ({
        ...prevFormData,
        [subject]: {
          ...prevFormData[subject],
          [year]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/uploadResults', {
        ...formData,
        email: sessionStorage.getItem('email'),
      });
      console.log('Data saved:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: '10px', width: '500px' }}>
          <div style={{ textAlign: 'center' }}></div>
          <div style={{ textAlign: 'center' }}>Year 1</div>
          <div style={{ textAlign: 'center' }}>Year 2</div>
          <div style={{ textAlign: 'center' }}>Year 3</div>

          <div style={{ textAlign: 'right' }}>English</div>
          <input
            type="text"
            placeholder="Marks"
            name="english-year1"
            value={formData.english.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="english-year2"
            value={formData.english.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="english-year3"
            value={formData.english.year3}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'right' }}>Hindi</div>
          <input
            type="text"
            placeholder="Marks"
            name="hindi-year1"
            value={formData.hindi.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="hindi-year2"
            value={formData.hindi.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="hindi-year3"
            value={formData.hindi.year3}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'right' }}>Science</div>
          <input
            type="text"
            placeholder="Marks"
            name="science-year1"
            value={formData.science.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="science-year2"
            value={formData.science.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="science-year3"
            value={formData.science.year3}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'right' }}>Maths</div>
          <input
            type="text"
            placeholder="Marks"
            name="maths-year1"
            value={formData.maths.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="maths-year2"
            value={formData.maths.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="maths-year3"
            value={formData.maths.year3}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'right' }}>History</div>
          <input
            type="text"
            placeholder="Marks"
            name="history-year1"
            value={formData.history.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="history-year2"
            value={formData.history.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="history-year3"
            value={formData.history.year3}
            onChange={handleChange}
          />

          <div style={{ textAlign: 'right' }}>Geography</div>
          <input
            type="text"
            placeholder="Marks"
            name="geography-year1"
            value={formData.geography.year1}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="geography-year2"
            value={formData.geography.year2}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Marks"
            name="geography-year3"
            value={formData.geography.year3}
            onChange={handleChange}
          />

        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Profile;

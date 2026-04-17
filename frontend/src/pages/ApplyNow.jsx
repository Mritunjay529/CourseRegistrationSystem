import React, { useState } from 'react';
import './ApplyNow.css';
import logo from '../assets/logo.webp';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const courses = [
    'Computer Science Engineering',
    'AI/ML Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Must be 10 digits';
    }
    if (!formData.course) newErrors.course = 'Select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const applications = JSON.parse(localStorage.getItem('applications') || '[]');
      applications.push({ id: Date.now(), ...formData });
      localStorage.setItem('applications', JSON.stringify(applications));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="apply-now">
      <div className="form-background">
        <div className="form-wrapper">
          <h1>Apply Now</h1>
          {submitStatus === 'success' && <div className="success">Thank you! We will contact you soon.</div>}
          {submitStatus === 'error' && <div className="error">Something went wrong.</div>}
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className={errors.name ? 'error' : ''} />
            {errors.name && <small>{errors.name}</small>}
            <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className={errors.email ? 'error' : ''} />
            {errors.email && <small>{errors.email}</small>}
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className={errors.phone ? 'error' : ''} />
            {errors.phone && <small>{errors.phone}</small>}
            <select name="course" value={formData.course} onChange={handleInputChange} className={errors.course ? 'error' : ''}>
              <option value="">Select a course</option>
              {courses.map(c => <option key={c}>{c}</option>)}
            </select>
            {errors.course && <small>{errors.course}</small>}
            <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleInputChange} className={errors.message ? 'error' : ''} />
            {errors.message && <small>{errors.message}</small>}
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;

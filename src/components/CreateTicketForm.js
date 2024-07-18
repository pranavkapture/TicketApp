import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  priority: Yup.string().required('Priority is required'),
  mode: Yup.string().required('Mode is required'),
  description: Yup.string().required('Description is required'),
});

const CreateTicketForm = ({ onCreate }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      priority: 'low',
      mode: 'online',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onCreate(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
          id="name"
          type="text"
          placeholder="Name"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          id="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
          Priority
        </label>
        <select
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.priority && formik.errors.priority ? 'border-red-500' : ''}`}
          id="priority"
          {...formik.getFieldProps('priority')}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {formik.touched.priority && formik.errors.priority ? (
          <p className="text-red-500 text-xs italic">{formik.errors.priority}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mode">
          Mode
        </label>
        <select
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.mode && formik.errors.mode ? 'border-red-500' : ''}`}
          id="mode"
          {...formik.getFieldProps('mode')}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        {formik.touched.mode && formik.errors.mode ? (
          <p className="text-red-500 text-xs italic">{formik.errors.mode}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          id="description"
          placeholder="Description"
          {...formik.getFieldProps('description')}
        />
        {formik.touched.description && formik.errors.description ? (
          <p className="text-red-500 text-xs italic">{formik.errors.description}</p>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Ticket
        </button>
      </div>
    </form>
  );
};

export default CreateTicketForm;

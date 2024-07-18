import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Typography, Card, CardContent, CardActions, TextField } from '@mui/material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  priority: Yup.string().required('Priority is required'),
  mode: Yup.string().required('Mode is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string().required('Description is required'),
});

const TicketDetail = ({ ticket, onEdit, onClose }) => {
  const formik = useFormik({
    initialValues: {
      name: ticket.name,
      email: ticket.email,
      priority: ticket.priority,
      mode: ticket.mode,
      status: ticket.status,
      description: ticket.description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onEdit(values);
    },
  });

  return (
    <Card className="p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
      <form onSubmit={formik.handleSubmit}>
        <CardContent>
          <Typography variant="h5" component="div" className="font-bold border-b pb-2 mb-4">
            Ticket Details
          </Typography>
          <div className="space-y-6">
            <div className="flex flex-col">
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                className="mb-2"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-2"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                id="priority"
                name="priority"
                label="Priority"
                variant="outlined"
                fullWidth
                className="mb-2"
                value={formik.values.priority}
                onChange={formik.handleChange}
                error={formik.touched.priority && Boolean(formik.errors.priority)}
                helperText={formik.touched.priority && formik.errors.priority}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                id="mode"
                name="mode"
                label="Mode"
                variant="outlined"
                fullWidth
                className="mb-2"
                value={formik.values.mode}
                onChange={formik.handleChange}
                error={formik.touched.mode && Boolean(formik.errors.mode)}
                helperText={formik.touched.mode && formik.errors.mode}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                id="status"
                name="status"
                label="Status"
                variant="outlined"
                fullWidth
                className="mb-2"
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              />
            </div>
            <div className="flex flex-col">
              <TextField
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                className="mb-2"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </div>
          </div>
        </CardContent>
        <CardActions className="flex justify-between mt-6">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600"
          >
            Save
          </Button>
          <Button
            onClick={onClose}
            variant="contained"
            color="secondary"
            className="bg-gray-500 hover:bg-gray-600"
          >
            Close
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default TicketDetail;

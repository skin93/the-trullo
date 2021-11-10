import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { timestamp } from 'firebase/config';
import { useAuthContext } from 'hooks/useAuthContext';
import { useCollection } from 'hooks/useCollection';
import { useFirestore } from 'hooks/useFirestore';

import { Error, PageTitle, StyledButton } from 'styles/GlobalStyle';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CreateFormWrapper, Input, Label } from 'styles/Form.styled';

const Create = () => {
  const { documents } = useCollection('users');
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore('projects');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
  ];

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const schema = yup
    .object({
      name: yup.string().required('Project name field is required'),
      details: yup.string().required('Project details field is required'),
      dueDate: yup.date().required('Due date field is required'),
      category: yup
        .object()
        .shape({
          label: yup.string().required('Category is required'),
          value: yup.string().required('Category is required'),
        })
        .required('Category is required'),
      assignedUsers: yup
        .array(
          yup.object().shape({
            label: yup
              .string()
              .required('You have to assign at least one user (label)'),
            value: yup
              .object()
              .shape({
                id: yup.string(),
                displayName: yup.string(),
                photoURL: yup.string(),
                online: yup.boolean(),
              })
              .required('You have to assign at least one user (value)'),
          })
        )
        .required('You have to assign at least one user (outer)'),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, details, dueDate, category, assignedUsers } = data;

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((x) => {
      return {
        displayName: x.value.displayName,
        photoURL: x.value.photoURL,
        id: x.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      navigate('/');
    }
  };

  return (
    <CreateFormWrapper>
      <PageTitle>Create a new project</PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Project name:</span>
          <Input {...register('name')} />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Label>
        <Label>
          <span>Project details:</span>
          <Input as='textarea' {...register('details')} />
          {errors.details && <Error>{errors.details.message}</Error>}
        </Label>
        <Label>
          <span>Set due date:</span>
          <Input {...register('dueDate')} type='date' />
          {errors.dueDate && <Error>{errors.dueDate.message}</Error>}
        </Label>
        <Label>
          <span>Project category:</span>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isClearable
                isSearchable={false}
                className='react-dropdown'
                classNamePrefix='dropdown'
                options={categories}
              />
            )}
          />
          {errors.category && (
            <Error>
              {errors.category.message || errors.category.label.message}
            </Error>
          )}
        </Label>
        <Label>
          <span>Assign to:</span>
          <Controller
            name='assignedUsers'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                isClearable
                isSearchable={false}
                className='react-dropdown'
                classNamePrefix='dropdown'
                options={users}
              />
            )}
          />
          {errors.assignedUsers && (
            <Error>
              {errors.assignedUsers.message ||
                errors.assignedUsers.label.message}
            </Error>
          )}
        </Label>
        <StyledButton type='submit'>Add project</StyledButton>
      </form>
    </CreateFormWrapper>
  );
};

export default Create;

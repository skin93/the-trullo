import { Error, PageTitle, StyledButton } from 'styles/GlobalStyle';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CreateFormWrapper, Input, Label } from 'styles/Form.styled';

const Create = () => {
  const schema = yup
    .object({
      name: yup.string().required('Project name field is required'),
      details: yup.string().required('Project details field is required'),
      dueDate: yup.date().required('Due date field is required'),
      // category: yup.string().required('Details is required'),
      // asignedUsers: yup
      //   .array()
      //   .of(yup.string())
      //   .required('Details is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          {/* categor select here */}
        </Label>
        <Label>
          <span>Assign to:</span>
          {/* assignee select here */}
        </Label>
        <StyledButton type='submit'>Add project</StyledButton>
      </form>
    </CreateFormWrapper>
  );
};

export default Create;

import { v4 as uuidv4 } from 'uuid';
import { useFirestore } from 'hooks/useFirestore';
import { timestamp } from 'firebase/config';
import { useAuthContext } from 'hooks/useAuthContext';
import { CommentForm, Input, Label } from 'styles/Form.styled';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Error, StyledButton } from 'styles/GlobalStyle';

const ProjectComments = ({ project }) => {
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');

  const schema = yup
    .object({
      comment: yup.string().required('Comment field is required'),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: data.comment,
      createdAt: timestamp.fromDate(new Date()),
      id: uuidv4(),
    };
    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      reset();
    }
  };

  return (
    <div>
      <h4>Project Comments</h4>
      <CommentForm onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Add new comment</span>
          <Input as='textarea' {...register('comment')} />
        </Label>
        {errors.comment && <Error>{errors.comment.message}</Error>}
        <StyledButton>Add comment</StyledButton>
      </CommentForm>
    </div>
  );
};

export default ProjectComments;

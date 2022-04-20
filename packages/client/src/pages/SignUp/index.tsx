import { FormEvent, RefObject, useRef } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { RouterLink } from '../../components/Link';
import { useUserCreate } from '../../services/mutations';

import * as S from './styles';

const SignUpPage = () => {
  const nameInput = useRef(null) as RefObject<HTMLInputElement>;
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;
  const cpfInput = useRef(null) as RefObject<HTMLInputElement>;

  const createUser = useUserCreate();
  const navigate = useNavigate();

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailInput?.current?.value;
    const password = passwordInput?.current?.value;
    const name = nameInput?.current?.value;
    const cpf = cpfInput?.current?.value;

    if (!email || !password || !cpf || !name) {
      return;
    }

    await createUser.mutateAsync({ cpf, email, name, password });
    navigate('/login');
  };

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={6} />

      <Grid
        item
        xs={6}
        sx={({ palette }) => ({ background: palette.background.default })}
      >
        <S.Form onSubmit={handleSignUp}>
          <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
            Registrar-se
          </Typography>

          <TextField
            label="Nome"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={nameInput}
            required
          />

          <TextField
            label="E-mail"
            type="email"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={emailInput}
            required
          />

          <TextField
            label="Senha"
            type="password"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={passwordInput}
            required
          />

          <TextField
            label="CPF"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={cpfInput}
            required
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: '1rem' }}
          >
            Registrar
          </Button>

          <Button sx={{ marginTop: '1rem' }}>
            <RouterLink to="/login">Voltar ao login</RouterLink>
          </Button>
        </S.Form>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;

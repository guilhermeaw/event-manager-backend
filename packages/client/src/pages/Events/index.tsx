import { Card, Typography } from '@mui/material';

import { DownloadCertificateButton } from '../../components/DownloadCertificateButton';
import { MainContainer } from '../../components/MainContainer';
import { Event } from '../../models/Event';
import { useAuth } from '../../store/Auth/useAuth';

const EventsPage = () => {
  const { user } = useAuth();
  console.log(event);
  const nextEvents = [
    {
      id: 1,
      title: 'TDC Floripa',
      description: 'Um encontro de devs com muitas palestras',
      img: 'https://cdn.thedevconf.com.br/img/logo/logo-tdc.png',
      duration: 300,
    },
    {
      id: 2,
      title: 'Show do Gustavo Lima',
      description: 'Show nacional do cantor Gustavo Lima',
      img: 'https://s2.glbimg.com/pQPSrWFUJBB1FRTWQGLUbtB9eeA=/0x0:833x794/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/c/6PPJpbRn684qOUAx1gVQ/gusttavo-lima.png',
      duration: 60,
    },
  ];

  const myEvents = [
    {
      id: 1,
      title: 'TDC Floripa',
      description: 'Um encontro de devs com muitas palestras',
      img: 'https://cdn.thedevconf.com.br/img/logo/logo-tdc.png',
      duration: 300,
    },
    {
      id: 2,
      title: 'Show do Gustavo Lima',
      description: 'Show nacional do cantor Gustavo Lima',
      img: 'https://s2.glbimg.com/pQPSrWFUJBB1FRTWQGLUbtB9eeA=/0x0:833x794/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/c/6PPJpbRn684qOUAx1gVQ/gusttavo-lima.png',
      duration: 60,
    },
  ];

  return (
    <MainContainer>
      <DownloadCertificateButton
        userName="José Silva"
        event={nextEvents[0]}
        hash="as56d4sa65dsdsa564da"
      />

<<<<<<< HEAD
      <MainContainer>
        <DownloadCertificateButton
          userName={user.name}
          event={nextEvents[0]}
          hash="as56d4sa65dsdsa564da"
        />
=======
      <Typography variant="h3">Meus eventos</Typography>
      <Typography variant="subtitle1">Listagem dos meus eventos</Typography>
>>>>>>> 35e4fb875dd9638ddbb64ebc451892d6c346df99

      {myEvents.map(event => (
        <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
          <Typography>{event.title}</Typography>
          <Typography>{event.description}</Typography>
          <img
            src={event.img}
            alt="imagem do evento"
            height="64px"
            width="64px"
          />
        </Card>
      ))}

      <Typography variant="h3">Próximos eventos</Typography>
      <Typography variant="subtitle1">
        Listagem dos próximos eventos organizados pela equipe Event Manager
      </Typography>

      {nextEvents.map(event => (
        <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
          <Typography>{event.title}</Typography>
          <Typography>{event.description}</Typography>
          <img
            src={event.img}
            alt="imagem do evento"
            height="64px"
            width="64px"
          />
        </Card>
      ))}
    </MainContainer>
  );
};

export default EventsPage;

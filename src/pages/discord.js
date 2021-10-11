import * as React from 'react';
import { Image } from '@chakra-ui/image';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import styled from '@emotion/styled';
import Seo from '../components/seo';
import discordLogo from '../assets/discord-logo.svg';

const Circle = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  background-color: ${(props) => props.color};
`;


const DiscordPage = () => {
  const [discordInvitationLink, setDiscordInvitationLink] = React.useState();
  const [discordPresenceCount, setDiscordPresenceCount] = React.useState();

  const fetchDiscordData = async () => {
    const request = await fetch(
      'https://discord.com/api/guilds/678334713919832100/widget.json'
    );
    const data = await request.json();
    setDiscordInvitationLink(data.instant_invite);
    setDiscordPresenceCount(data.presence_count);
  };

  React.useEffect(() => {
    fetchDiscordData();
  }, []);

  return (
    <>
      <Seo title="Junte-se ao nosso Discord" />
      <VStack direction="column" spacing={8} px={4} my={8}>
        <Image
          src={discordLogo}
          alt="discord logo"
          style={styles.discordLogo}
        />
        <Heading as="h1" size="4xl" textAlign="center">
          Junte-se ao nosso Discord
        </Heading>
        <Flex alignItems="center">
          <Circle color="#58B286" /> {discordPresenceCount} Online
        </Flex>
        <a href={discordInvitationLink} target="_blank" rel="noreferrer">
          <Button bg="brand.secondary" color="white">
            Continuar
          </Button>
        </a>
      </VStack>
    </>
  );
};

export default DiscordPage;

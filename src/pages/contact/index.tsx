// Dependencies
import { TauIcon } from 'tauix/react';

// Styles
import { ContactContainer } from './styles';

const links = [
  {
    icon: '/assets/discord.svg',
    link: 'https://discord.gg/6PKajSmb',
  },
  {
    icon: '/assets/github.svg',
    link: 'https://github.com/nathan3boss',
  },
  {
    icon: '/assets/instagram.svg',
    link: 'https://instagram.com/cajlonbatista',
  },
  {
    icon: '/assets/linkedin.svg',
    link: 'https://www.linkedin.com/in/francisco-cajlon-jhonathan-moura-batista-20b9651aa/',
  },
];

const Contact = () => {
  return (
    <ContactContainer>
      <main>
        {links.map(({ icon, link }) => (
          <a key={icon} href={link} target="_blank">
            <TauIcon url={icon} />
          </a>
        ))}
      </main>
    </ContactContainer>
  );
};

export default Contact;

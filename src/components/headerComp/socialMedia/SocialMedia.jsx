import './socialMedia.css'

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const SocialMediaLinks = [
  { href: "https://github.com/NajibMuhammadi", Icon: FaGithub},
  { href: "https://www.linkedin.com/in/najibullah-muhammadi-36886628a/", Icon: FaLinkedin},
  { href: "#", Icon: FaTwitter }
];


function SocialMedia() {
    return (
        <div className='header__social'>
            {SocialMediaLinks.map(({ href, Icon }, index) => (
                <a key={index} className="header__social-link" href={href}>
                    <Icon className='header__social-icon' />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia

import { Helmet } from 'react-helmet';
import ScrollerTopBack from '../backgroundsComp/scrollerTopBack/scrollerTopBack';

function Footer() {
    const footerStyle = {
        backgroundColor: 'var(--background-root)'
    }
    return (
        <div className='footer' style={footerStyle}  id='contact'>
            <Helmet>
                <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
            </Helmet>
            <ScrollerTopBack />
            <div
                className="visme_d"
                data-title="Portfolio"
                data-url="8r6pdkpq-portfolio"
                data-domain="forms"
                data-full-page="false"
                data-min-height="500px"
                data-form-id="36136">
            </div>
        </div>
    );
}

export default Footer;

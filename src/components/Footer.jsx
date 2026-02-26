import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🥗 EAT CLEAN</h3>
            <p className="text-gray-400">
              {t('storyText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('aboutUs')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Menu</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('contactUs')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhone /> +84 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> hello@eatclean.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-gray-400">
          <p>&copy; 2026 EAT CLEAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] text-white py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left side - Copyright and Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            ©{currentYear} ReadySetShoot. All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a
                                href="/terms"
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm underline hover:no-underline"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="/privacy"
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm underline hover:no-underline"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* Right side - Social Media Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://instagram.com/readysetshoot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/readysetshoot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://youtube.com/readysetshoot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
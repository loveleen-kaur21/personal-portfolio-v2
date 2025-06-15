'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(`New message from ${formData.name} - ${formData.subject}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Subject: ${formData.subject}\n\n` +
                `Message:\n${formData.message}\n\n` +
                `---\n` +
                `This message was sent from your portfolio contact form.`
            );
            
            // Open default email client
            window.location.href = `mailto:loveleenkaurr01@gmail.com?subject=${subject}&body=${body}`;
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen p-12 md:p-24">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                    Get in <span className="italic font-light">Touch</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Open to new opportunities and excited to contribute to innovative projects! 
                    Whether you&apos;re building the next big thing or improving existing systems, I&apos;d love to discuss how we can work together. ✨
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left Side - Contact Info */}
                <div className="space-y-12">
                    
                    {/* Contact Info Section */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-pink-400 mr-4"></div>
                            <h2 className="text-sm font-medium text-gray-400 tracking-wider uppercase">Contact Info</h2>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mr-4 border border-gray-700/50">
                                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:loveleenkaurr01@gmail.com" className="text-white hover:text-orange-400 transition-colors duration-200">
                                        loveleenkaurr01@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center mr-4 border border-gray-700/50">
                                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+1234567890" className="text-white hover:text-pink-400 transition-colors duration-200">
                                        (601) 940-6033
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-pink-400 mr-4"></div>
                            <h2 className="text-sm font-medium text-gray-400 tracking-wider uppercase">Social Links</h2>
                        </div>
                        
                        <div className="flex gap-4">
                            {/* GitHub */}
                            <a 
                                href="https://github.com/loveleen-kaur21" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-orange-400/50 hover:bg-gray-700/50 transition-all duration-300"
                            >
                                <svg className="w-8 h-8 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a 
                                href="https://www.linkedin.com/in/loveleenka/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-pink-400/50 hover:bg-gray-700/50 transition-all duration-300"
                            >
                                <svg className="w-8 h-8 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-pink-400 mr-4"></div>
                        <h2 className="text-sm font-medium text-gray-400 tracking-wider uppercase">Send Message</h2>
                    </div>

                    <h3 className="text-2xl font-light text-white mb-8">Start a Conversation</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 transition-all duration-200"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-400/50 focus:ring-1 focus:ring-orange-400/20 transition-all duration-200"
                            required
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            placeholder="Your message..."
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all duration-200 resize-none"
                            required
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>Sending... ⏳</>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Message
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="text-green-400 text-center p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                                ✅ Message sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="text-red-400 text-center p-3 bg-red-400/10 rounded-lg border border-red-400/30">
                                ❌ Oops! Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
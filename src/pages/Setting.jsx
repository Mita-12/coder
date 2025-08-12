import React, { useState } from 'react';

import { FiSave, FiUpload, FiAlertCircle, FiCheckCircle, FiInfo, FiX, FiChevronDown, FiMenu, FiX as FiClose, FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import {
  MdAccountCircle,
  MdSecurity,
  MdNotifications,
  MdPayment,
  MdLanguage,
  MdHelpOutline,
  MdEdit,
  MdCheck,
  MdClose,
  MdSearch,
  MdLogout
} from 'react-icons/md';
import { RiNotificationLine, RiArrowDownSLine } from 'react-icons/ri';
import { PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-55 right-0 h-16 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-6">
      {/* Left side - Search and Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>

        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center space-x-5">

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">HP</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Henry</span>
              <span className="text-xs text-gray-500">Registered</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Henry John Paulin</p>
                <p className="text-sm text-gray-600 truncate">henry@gmail.com</p>
                <div className="flex items-center mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Registered
                  </span>
                  <span className="ml-2 text-xs text-gray-500">25 June 2024</span>
                </div>
              </div>
              <Link to="/user-profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                Profile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                Settings
              </Link>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const SettingCard = ({ title, description, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
        <FiChevronDown
          className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="px-6 pb-6 space-y-4">{children}</div>}
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  error = null,
  description = null,
  required = false,
  maxLength = null,
  accept = null,
}) => {
  const handleChange = (e) => {
    if (type === 'file') {
      onChange({ target: { name, value: e.target.files[0] } });
    } else {
      onChange(e);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={3}
          maxLength={maxLength}
          className={`block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
        />
      ) : type === 'file' ? (
        <div className="flex items-center">
          <label className="flex flex-col items-center px-4 py-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-lg border border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
            <FiUpload className="mr-2" />
            <span className="text-sm">Choose File</span>
            <input
              type="file"
              name={name}
              onChange={handleChange}
              accept={accept}
              className="hidden"
            />
          </label>
          {value && (
            <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              {value.name || value}
            </span>
          )}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
        />
      )}
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
          <FiInfo className="mr-1" /> {description}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-500 flex items-center">
          <FiAlertCircle className="mr-1" /> {error}
        </p>
      )}
      {maxLength && type === 'textarea' && (
        <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
          {value.length}/{maxLength} characters
        </p>
      )}
    </div>
  );
};

const SEOPageEditor = ({ page, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: page?.title || '',
    description: page?.description || '',
    keywords: page?.keywords || '',
    slug: page?.slug || '',
    canonicalUrl: page?.canonicalUrl || '',
    metaImage: page?.metaImage || null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, metaImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.slug.trim()) newErrors.slug = 'Slug is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave({
        ...page,
        ...formData,
        metaImage: formData.metaImage instanceof File ? URL.createObjectURL(formData.metaImage) : formData.metaImage
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {page ? 'Edit Page SEO' : 'Add New Page'}
            </h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <FiX size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Page Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              error={errors.title}
              required
            />

            <InputField
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              error={errors.slug}
              description="The URL path for this page"
              required
            />

            <InputField
              label="Meta Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleChange}
              maxLength={160}
              description="Recommended length: 150-160 characters"
            />

            <InputField
              label="Keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              description="Comma-separated list of keywords"
            />

            <InputField
              label="Canonical URL"
              name="canonicalUrl"
              value={formData.canonicalUrl}
              onChange={handleChange}
              description="The canonical URL if this page has duplicates"
            />

            <InputField
              label="Meta Image"
              name="metaImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              description="Image that appears when sharing on social media"
            />

            {formData.metaImage && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preview:</p>
                <div className="w-32 h-32 border border-gray-200 dark:border-gray-700 rounded overflow-hidden">
                  <img
                    src={formData.metaImage instanceof File ? URL.createObjectURL(formData.metaImage) : formData.metaImage}
                    alt="Meta preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SEOPageItem = ({ page, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white">{page.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{page.slug}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{page.description}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(page)}
            className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full"
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={() => onDelete(page.id)}
            className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full"
          >
            <FiTrash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [formData, setFormData] = useState({
    siteTitle: 'My Awesome Site',
    metaDescription: '',
    logo: null,
    smtpEmail: '',
    smtpPassword: '',
    whatsappApiKey: '',
    googleAnalyticsId: '',
    talkToScript: '',
    adsScript: '',
    googleAuthClientId: '',
  });

  const [seoPages, setSeoPages] = useState([
    {
      id: '1',
      title: 'Homepage',
      slug: '/',
      description: 'The main landing page of our website',
      keywords: 'home, main, landing',
      canonicalUrl: '',
      metaImage: null
    },
    {
      id: '2',
      title: 'About Us',
      slug: '/about',
      description: 'Learn more about our company and team',
      keywords: 'about, company, team',
      canonicalUrl: '',
      metaImage: null
    },
    {
      id: '3',
      title: 'Contact',
      slug: '/contact',
      description: 'Get in touch with our team',
      keywords: 'contact, email, phone',
      canonicalUrl: '',
      metaImage: null
    }
  ]);

  const [editingPage, setEditingPage] = useState(null);
  const [showPageEditor, setShowPageEditor] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    seo: true,
    logo: true,
    smtp: true,
    whatsapp: true,
    analytics: true,
    chatbot: true,
    ads: true,
    auth: true
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: 'seo', title: 'SEO', icon: '🔍' },
    { id: 'logo', title: 'Branding', icon: '🖼️' },
    { id: 'smtp', title: 'Email', icon: '✉️' },
    { id: 'whatsapp', title: 'WhatsApp', icon: '💬' },
    { id: 'analytics', title: 'Analytics', icon: '📊' },
    { id: 'chatbot', title: 'Chatbot', icon: '🤖' },
    { id: 'ads', title: 'Ads', icon: '💰' },
    { id: 'auth', title: 'Auth', icon: '🔐' }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.siteTitle.trim()) {
      newErrors.siteTitle = 'Site title is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setExpandedSections(prev => ({ ...prev, [sectionId]: true }));
      setMobileNavOpen(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddNewPage = () => {
    setEditingPage(null);
    setShowPageEditor(true);
  };

  const handleEditPage = (page) => {
    setEditingPage(page);
    setShowPageEditor(true);
  };

  const handleDeletePage = (id) => {
    setSeoPages(prev => prev.filter(page => page.id !== id));
  };

  const handleSavePage = (pageData) => {
    if (editingPage) {
      // Update existing page
      setSeoPages(prev => prev.map(page =>
        page.id === editingPage.id ? { ...pageData, id: editingPage.id } : page
      ));
    } else {
      // Add new page
      setSeoPages(prev => [...prev, { ...pageData, id: Date.now().toString() }]);
    }
    setShowPageEditor(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Site Configuration
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${expandedSections[section.id] ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FiSave className="mr-2" /> Save
                  </>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                {mobileNavOpen ? <FiClose size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${expandedSections[section.id] ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {submitSuccess && (
          <div className="flex items-center justify-center bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 px-4 py-3 rounded-lg animate-fade-in">
            <FiCheckCircle className="mr-2" />
            Settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div id="seo">
            <SettingCard
              title="SEO Settings"
              description="Optimize your site for search engines"
              isOpen={expandedSections.seo}
              onToggle={() => toggleSection('seo')}
            >
              <InputField
                label="Site Title"
                name="siteTitle"
                placeholder="My Awesome Website"
                value={formData.siteTitle}
                onChange={handleChange}
                error={errors.siteTitle}
                required
              />
              <InputField
                label="Default Meta Description"
                name="metaDescription"
                type="textarea"
                placeholder="A brief description of your website for search results"
                value={formData.metaDescription}
                onChange={handleChange}
                description="Recommended length: 150-160 characters (currently optimal)"
                maxLength={160}
                error={errors.metaDescription}
              />

              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Page-Specific SEO</h3>
                  <button
                    onClick={handleAddNewPage}
                    className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
                  >
                    <FiPlus className="mr-1" /> Add Page
                  </button>
                </div>

                <div className="space-y-3">
                  {seoPages.map(page => (
                    <SEOPageItem
                      key={page.id}
                      page={page}
                      onEdit={handleEditPage}
                      onDelete={handleDeletePage}
                    />
                  ))}
                </div>
              </div>
            </SettingCard>
          </div>

          <div id="logo">
            <SettingCard
              title="Branding"
              description="Upload your site logo and branding elements"
              isOpen={expandedSections.logo}
              onToggle={() => toggleSection('logo')}
            >
              <InputField
                label="Site Logo"
                name="logo"
                type="file"
                accept="image/*"
                onChange={handleChange}
                description="Recommended size: 200x50px, PNG format with transparent background"
              />
              {formData.logo && (
                <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Logo Preview</h3>
                  <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded">
                    <img
                      src={URL.createObjectURL(formData.logo)}
                      alt="Logo preview"
                      className="max-h-20 max-w-full object-contain"
                    />
                  </div>
                </div>
              )}
            </SettingCard>
          </div>

          <div id="smtp">
            <SettingCard
              title="Email Settings"
              description="Configure your SMTP email service"
              isOpen={expandedSections.smtp}
              onToggle={() => toggleSection('smtp')}
            >
              <InputField
                label="SMTP Email"
                name="smtpEmail"
                type="email"
                placeholder="your@email.com"
                value={formData.smtpEmail}
                onChange={handleChange}
                error={errors.smtpEmail}
              />
              <InputField
                label="SMTP Password"
                name="smtpPassword"
                type="password"
                placeholder="••••••••"
                value={formData.smtpPassword}
                onChange={handleChange}
                error={errors.smtpPassword}
                description="Password for your SMTP service"
              />
            </SettingCard>
          </div>

          <div id="whatsapp">
            <SettingCard
              title="WhatsApp Integration"
              description="Connect your WhatsApp Business API"
              isOpen={expandedSections.whatsapp}
              onToggle={() => toggleSection('whatsapp')}
            >
              <InputField
                label="WhatsApp API Key"
                name="whatsappApiKey"
                placeholder="Enter your WhatsApp API key"
                value={formData.whatsappApiKey}
                onChange={handleChange}
                error={errors.whatsappApiKey}
                description="Get this from your WhatsApp Business account"
              />
            </SettingCard>
          </div>

          <div id="analytics">
            <SettingCard
              title="Analytics"
              description="Configure analytics tracking"
              isOpen={expandedSections.analytics}
              onToggle={() => toggleSection('analytics')}
            >
              <InputField
                label="Google Analytics ID"
                name="googleAnalyticsId"
                placeholder="UA-XXXXX-Y or G-XXXXXX"
                value={formData.googleAnalyticsId}
                onChange={handleChange}
                error={errors.googleAnalyticsId}
                description="Your Google Analytics tracking ID"
              />
            </SettingCard>
          </div>

          <div id="chatbot">
            <SettingCard
              title="Chatbot"
              description="Configure your site chatbot"
              isOpen={expandedSections.chatbot}
              onToggle={() => toggleSection('chatbot')}
            >
              <InputField
                label="TalkTo Script"
                name="talkToScript"
                type="textarea"
                placeholder="Paste your TalkTo script here"
                value={formData.talkToScript}
                onChange={handleChange}
                error={errors.talkToScript}
                description="JavaScript code for your chatbot integration"
              />
            </SettingCard>
          </div>

          <div id="ads">
            <SettingCard
              title="Advertising"
              description="Manage ad scripts and configurations"
              isOpen={expandedSections.ads}
              onToggle={() => toggleSection('ads')}
            >
              <InputField
                label="Ads Script"
                name="adsScript"
                type="textarea"
                placeholder="Paste your ad script here"
                value={formData.adsScript}
                onChange={handleChange}
                error={errors.adsScript}
                description="JavaScript code for your ad network"
              />
            </SettingCard>
          </div>

          <div id="auth">
            <SettingCard
              title="Authentication"
              description="Configure login and authentication"
              isOpen={expandedSections.auth}
              onToggle={() => toggleSection('auth')}
            >
              <InputField
                label="Google Auth Client ID"
                name="googleAuthClientId"
                placeholder="Enter your Google OAuth client ID"
                value={formData.googleAuthClientId}
                onChange={handleChange}
                error={errors.googleAuthClientId}
                description="Client ID for Google OAuth authentication"
              />
            </SettingCard>
          </div>

          <div className="sticky bottom-0 bg-white dark:bg-gray-800 py-4 border-t border-gray-200 dark:border-gray-700 shadow-lg rounded-t-xl md:hidden">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FiSave className="mr-2" /> Save
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* SEO Page Editor Modal */}
      {showPageEditor && (
        <SEOPageEditor
          page={editingPage}
          onSave={handleSavePage}
          onClose={() => setShowPageEditor(false)}
        />
      )}
    </div>
  );
};


export default Settings;
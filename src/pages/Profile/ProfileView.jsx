import React from 'react';
import { ClipboardDocumentIcon, CheckIcon, LockClosedIcon, UserIcon, EnvelopeIcon, PhoneIcon, GlobeAltIcon, MapPinIcon, GiftIcon, ShieldCheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import Sidebar from '../../components/Sidebar';

const ProfileView = ({ user }) => {
    const [copied, setCopied] = React.useState(false);

    // Sample user data
    const userData = {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        country: 'United States',
        state: 'California',
        city: 'San Francisco',
        password: '••••••••',
        referralCode: 'JOHNDOE2023',
        verified: true,
        joinedDate: 'January 15, 2022'
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 p-6 w-full ml-55">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                    {/* Profile Header */}
                    <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <div className="relative">
                                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                                    <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                {userData.verified && (
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-sm">
                                        <ShieldCheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{userData.fullName}</h2>
                                    {userData.verified && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Verified
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">Member since {userData.joinedDate}</p>
                            </div>
                        </div>
                        <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                            <PencilIcon className="-ml-1 mr-2 h-4 w-4" />
                            Edit Profile
                        </button>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <ProfileSection
                                title="Personal Information"
                                icon={<UserIcon className="w-5 h-5 text-blue-500" />}
                                color="blue"
                            >
                                <ProfileField
                                    icon={<UserIcon className="w-5 h-5 text-gray-400" />}
                                    label="Full Name"
                                    value={userData.fullName}
                                />
                                <ProfileField
                                    icon={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                                    label="Email"
                                    value={userData.email}
                                    isCopyable
                                    onCopy={handleCopy}
                                    copied={copied}
                                />
                                <ProfileField
                                    icon={<PhoneIcon className="w-5 h-5 text-gray-400" />}
                                    label="Phone Number"
                                    value={userData.phone}
                                />
                            </ProfileSection>

                            {/* Location Information */}
                            <ProfileSection
                                title="Location"
                                icon={<MapPinIcon className="w-5 h-5 text-purple-500" />}
                                color="purple"
                            >
                                <ProfileField
                                    icon={<GlobeAltIcon className="w-5 h-5 text-gray-400" />}
                                    label="Country"
                                    value={userData.country}
                                />
                                <ProfileField
                                    icon={<GlobeAltIcon className="w-5 h-5 text-gray-400" />}
                                    label="State"
                                    value={userData.state}
                                />
                                <ProfileField
                                    icon={<GlobeAltIcon className="w-5 h-5 text-gray-400" />}
                                    label="City"
                                    value={userData.city}
                                />
                            </ProfileSection>

                            {/* Security */}
                            <ProfileSection
                                title="Security"
                                icon={<LockClosedIcon className="w-5 h-5 text-orange-500" />}
                                color="orange"
                            >
                                <ProfileField
                                    icon={<LockClosedIcon className="w-5 h-5 text-gray-400" />}
                                    label="Password"
                                    value={userData.password}
                                    isPassword
                                />
                                <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500 inline-flex items-center transition-colors">
                                    <LockClosedIcon className="w-4 h-4 mr-1" />
                                    Change Password
                                </button>
                            </ProfileSection>

                            {/* Referral Program */}
                            <ProfileSection
                                title="Referral Program"
                                icon={<GiftIcon className="w-5 h-5 text-green-500" />}
                                color="green"
                            >
                                <ProfileField
                                    icon={<GiftIcon className="w-5 h-5 text-gray-400" />}
                                    label="Your Referral Code"
                                    value={userData.referralCode}
                                    isCopyable
                                    onCopy={handleCopy}
                                    copied={copied}
                                />
                                <p className="mt-4 text-sm text-gray-500">
                                    Share this code with friends to earn rewards when they sign up!
                                </p>
                                <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-green-500 text-sm font-medium rounded-md text-green-600 bg-green-50 hover:bg-green-100 transition-colors">
                                    <GiftIcon className="w-4 h-4 mr-1" />
                                    View Referral Benefits
                                </button>
                            </ProfileSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileSection = ({ title, icon, color, children }) => {
    const colorClasses = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-100' },
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100' },
        green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100' }
    };

    return (
        <div className={`${colorClasses[color].bg} rounded-lg border border-gray-100 p-5 shadow-xs`}>
            <div className="flex items-center mb-4">
                <div className={`${colorClasses[color].iconBg} w-9 h-9 rounded-full flex items-center justify-center mr-3`}>
                    {icon}
                </div>
                <h3 className={`text-lg font-semibold ${colorClasses[color].text}`}>{title}</h3>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

const ProfileField = ({ icon, label, value, isPassword = false, isCopyable = false, onCopy, copied }) => {
    return (
        <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{label}</label>
            <div className="relative rounded-md shadow-sm">
                {isPassword ? (
                    <div className="flex">
                        <input
                            type="password"
                            value={value}
                            readOnly
                            className="block w-full rounded-md border-gray-200 pl-10 pr-3 py-2 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {icon}
                        </div>
                    </div>
                ) : (
                    <div className="flex rounded-md shadow-sm">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {icon}
                            </div>
                            <input
                                type="text"
                                value={value}
                                readOnly
                                className="block w-full rounded-none rounded-l-md border-gray-200 pl-10 pr-3 py-2 bg-gray-50 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        {isCopyable && (
                            <button
                                onClick={() => onCopy(value)}
                                className="-ml-px relative inline-flex items-center space-x-2 px-3 py-2 border border-gray-200 text-sm font-medium rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            >
                                {copied ? (
                                    <CheckIcon className="h-4 w-4 text-green-500" />
                                ) : (
                                    <ClipboardDocumentIcon className="h-4 w-4" />
                                )}
                                <span className="sr-only">Copy</span>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileView;
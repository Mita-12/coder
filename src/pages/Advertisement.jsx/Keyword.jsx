import React, { useState } from 'react';
import { 
  MdDelete, 
  MdEdit,
  MdAdd,
  MdVisibility,
  MdClose,
  MdCheck
} from 'react-icons/md';
import Sidebar from '../../components/Sidebar';

const Keywords = () => {
    const [selectedCampaign, setSelectedCampaign] = useState('');
    const [keywordInput, setKeywordInput] = useState('');
    const [bidInput, setBidInput] = useState('');
    const [dailyBudgetInput, setDailyBudgetInput] = useState('');
    const [editMode, setEditMode] = useState(null);
    const [tempKeyword, setTempKeyword] = useState({});
    const [keywords, setKeywords] = useState([
        { id: 1, name: 'summer sale', impressions: 1245, bid: 0.25, dailyBudget: 50 },
        { id: 2, name: 'beach vacation', impressions: 987, bid: 0.35, dailyBudget: 75 },
        { id: 3, name: 'swimwear', impressions: 1560, bid: 0.45, dailyBudget: 100 },
    ]);

    // Sample campaigns data
    const campaigns = [
        { id: 1, name: 'Summer Promotion' },
        { id: 2, name: 'Beach Collection' },
        { id: 3, name: 'Travel Specials' }
    ];

    const handleAddKeyword = () => {
        if (!keywordInput || !bidInput || !dailyBudgetInput) return;
        
        const newKeyword = {
            id: keywords.length > 0 ? Math.max(...keywords.map(k => k.id)) + 1 : 1,
            name: keywordInput.trim(),
            impressions: 0,
            bid: parseFloat(bidInput),
            dailyBudget: parseFloat(dailyBudgetInput),
        };
        
        setKeywords([...keywords, newKeyword]);
        resetForm();
    };

    const handleDeleteKeyword = (id) => {
        setKeywords(keywords.filter(k => k.id !== id));
    };

    const startEditKeyword = (keyword) => {
        setEditMode(keyword.id);
        setTempKeyword({...keyword});
    };

    const saveEditKeyword = () => {
        const updatedKeywords = keywords.map(k => 
            k.id === editMode ? {...tempKeyword} : k
        );
        setKeywords(updatedKeywords);
        cancelEditKeyword();
    };

    const cancelEditKeyword = () => {
        setEditMode(null);
        setTempKeyword({});
    };

    const handleTempChange = (e) => {
        const { name, value } = e.target;
        setTempKeyword(prev => ({
            ...prev,
            [name]: name === 'name' ? value : parseFloat(value) || 0
        }));
    };

    const resetForm = () => {
        setKeywordInput('');
        setBidInput('');
        setDailyBudgetInput('');
    };

    return (
        <div className="flex w-full bg-slate-100">
            <Sidebar />
            <div className="p-6 max-w-6xl mx-auto text-sm font-sans bg-gray-50 min-h-screen ml-55 w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Keyword Management</h1>
                
                {/* Campaign Selection */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
                    <div className="mb-4">
                        <label className="block font-semibold mb-2 text-gray-700">Select Campaign</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={selectedCampaign}
                            onChange={(e) => setSelectedCampaign(e.target.value)}
                        >
                            <option value="">Select a campaign</option>
                            {campaigns.map(campaign => (
                                <option key={campaign.id} value={campaign.id}>
                                    {campaign.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Add Keyword Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                        <MdAdd className="text-indigo-600" size={20} />
                        {editMode ? 'Edit Keyword' : 'Add New Keyword'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Keyword</label>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={tempKeyword.name || ''}
                                    onChange={handleTempChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <input
                                    type="text"
                                    placeholder="Enter keyword"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={keywordInput}
                                    onChange={(e) => setKeywordInput(e.target.value)}
                                />
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bid ($)</label>
                            {editMode ? (
                                <input
                                    type="number"
                                    name="bid"
                                    value={tempKeyword.bid || ''}
                                    onChange={handleTempChange}
                                    min="0"
                                    step="0.01"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <input
                                    type="number"
                                    placeholder="0.25"
                                    min="0"
                                    step="0.01"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={bidInput}
                                    onChange={(e) => setBidInput(e.target.value)}
                                />
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Daily Budget ($)</label>
                            {editMode ? (
                                <input
                                    type="number"
                                    name="dailyBudget"
                                    value={tempKeyword.dailyBudget || ''}
                                    onChange={handleTempChange}
                                    min="0"
                                    step="0.01"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            ) : (
                                <input
                                    type="number"
                                    placeholder="100"
                                    min="0"
                                    step="0.01"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={dailyBudgetInput}
                                    onChange={(e) => setDailyBudgetInput(e.target.value)}
                                />
                            )}
                        </div>
                        <div className="flex items-end gap-2">
                            {editMode ? (
                                <>
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 w-full justify-center"
                                        onClick={saveEditKeyword}
                                    >
                                        <MdCheck size={18} />
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 w-full justify-center"
                                        onClick={cancelEditKeyword}
                                    >
                                        <MdClose size={18} />
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 w-full justify-center"
                                    onClick={handleAddKeyword}
                                >
                                    <MdAdd size={18} />
                                    Add
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Keywords Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Keyword
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-1">
                                        <MdVisibility className="text-gray-500" size={16} />
                                        Impressions
                                    </div>
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Bid ($)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Daily Budget ($)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {keywords.map((keyword) => (
                                <tr key={keyword.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {keyword.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {keyword.impressions.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ${keyword.bid.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ${keyword.dailyBudget.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex gap-3">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                                onClick={() => startEditKeyword(keyword)}
                                            >
                                                <MdEdit size={16} />
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 flex items-center gap-1"
                                                onClick={() => handleDeleteKeyword(keyword.id)}
                                            >
                                                <MdDelete size={16} />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Keywords;
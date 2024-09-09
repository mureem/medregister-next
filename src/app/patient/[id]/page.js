'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation'; // Импортируем useRouter и useParams из next/navigation

// Пример данных пациента для демонстрации
const examplePatientData = {
    12345: { id: 12345, surname: 'Иванов', name: 'Иван' },
    54321: { id: 54321, surname: 'Петров', name: 'Петр' },
    67890: { id: 67890, surname: 'Сидоров', name: 'Сергей' }
};

const PatientDetailPage = () => {
    const router = useRouter(); // Инициализируем router
    const { id } = useParams(); // Получаем ID из URL
    const [patientData, setPatientData] = useState(null);
    const [showAddField, setShowAddField] = useState(false); // Состояние для показа/скрытия поля
    const [selectedOption, setSelectedOption] = useState('');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (id && examplePatientData[id]) {
            setPatientData(examplePatientData[id]);
        }
    }, [id]);

    const handleAddFieldToggle = () => {
        setShowAddField(!showAddField);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAdd = () => {
        if (selectedOption) {
            // Редирект на страницу создания записи
            router.push(`/create-record?type=${selectedOption}`);
        }
    };

    const handleCancel = () => {
        setShowAddField(false);
    };

    const handleDelete = (recordId) => {
        setRecords(records.filter(record => record.id !== recordId));
    };

    if (!patientData) return <div>Загрузка...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Buttons Section */}
            <div className="flex gap-2 mb-6">
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Предыдущая страница
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Следующая страница
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Отменить и назад
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Сохранить и выйти
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Сохранить
                </button>
            </div>

            {/* Patient Information Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Пациенты: {patientData.id} {patientData.surname} {patientData.name}</h2>
            </div>

            {/* Buttons for additional details */}
            <div className="flex gap-4 mt-6">
                <button className="bg-teal-600 text-sm text-white px-2 py-1 rounded-md hover:bg-teal-700">
                    Демографические данные
                </button>
                <button className="bg-teal-600 text-sm text-white px-2 py-1 rounded-md hover:bg-teal-700">
                    Клинические записи
                </button>
                <button
                    className="bg-green-600 text-white px-2 py-1 rounded-md hover:bg-green-700"
                    onClick={handleAddFieldToggle}
                >
                    +
                </button>
            </div>

            {/* Conditional Add Field */}
            {showAddField && (
                <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-md">
                    <label className="block text-sm mb-2 font-semibold">Выберите тип:</label>
                    <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="border border-gray-300 rounded-md p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Выберите</option>
                        <option value="primary">Первичное обследование</option>
                        <option value="surgical">Хирургическое лечение</option>
                    </select>
                    <div className="mt-4 flex gap-4">
                        <button
                            className="bg-teal-600 text-white px-2 py-1 rounded-md hover:bg-teal-700"
                            onClick={handleAdd}
                            disabled={!selectedOption}
                        >
                            Добавить
                        </button>
                        <button
                            className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700"
                            onClick={handleCancel}
                        >
                            ❌
                        </button>
                    </div>
                </div>
            )}

            {/* Records Table */}
            <div className="mt-6 bg-white border border-gray-200 rounded-md shadow-md p-4">
                <table className="w-full text-sm">
                    <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2 text-left">№ записи</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Клиническое событие</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2 text-left">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td className="border-b border-gray-200 px-4 py-2">{record.id}</td>
                            <td className="border-b border-gray-200 px-4 py-2">
                                {record.type === 'primary' ? 'Первичное обследование' : 'Хирургическое лечение'}
                            </td>
                            <td className="border-b border-gray-200 px-4 py-2">
                                <button
                                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 text-xs"
                                    onClick={() => handleDelete(record.id)}
                                >
                                    ❌
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientDetailPage;

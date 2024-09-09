'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Импортируем Link для маршрутизации

const initialPatients = [
    { id: 12345, surname: 'Иванов', name: 'Иван', birthdate: '15-03-1985' },
    { id: 54321, surname: 'Петров', name: 'Петр', birthdate: '21-09-1990' },
    { id: 67890, surname: 'Сидоров', name: 'Сергей', birthdate: '01-07-1978' }
];

const itemsPerPage = 5; // Количество записей на одной странице

const SearchPage = () => {
    const [patients, setPatients] = useState(initialPatients);
    const [filteredPatients, setFilteredPatients] = useState(initialPatients);
    const [id, setId] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = () => {
        const results = patients.filter(patient =>
            (id ? patient.id.toString().includes(id) : true) &&
            (surname ? patient.surname.includes(surname) : true) &&
            (name ? patient.name.includes(name) : true) &&
            (birthdate ? patient.birthdate.includes(birthdate) : true)
        );
        setFilteredPatients(results);
        setCurrentPage(1); // Сброс текущей страницы на 1 при новом поиске
    };

    const handleClear = () => {
        setId('');
        setSurname('');
        setName('');
        setBirthdate('');
        setFilteredPatients(patients);
        setCurrentPage(1); // Сброс текущей страницы на 1 при очистке
    };

    // Расчет пагинированных данных
    const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
    const paginatedPatients = filteredPatients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-teal-700 mb-6">Поиск пациентов</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm mb-2 font-semibold">№ амбулаторной карты</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Введите номер"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm mb-2 font-semibold">Фамилия</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Введите фамилию"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm mb-2 font-semibold">Имя</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm mb-2 font-semibold">Дата рождения</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="ДД-ММ-ГГГГ"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
            </div>

            <div className="border border-gray-300 rounded-lg">
                <div className="bg-teal-600 text-white font-bold text-sm p-3">
                    <div className="grid grid-cols-4 gap-4 text-left">
                        <div>№ амбулаторной карты</div>
                        <div>Фамилия</div>
                        <div>Имя</div>
                        <div>Дата рождения</div>
                    </div>
                </div>
                {paginatedPatients.length > 0 ? (
                    <div className="bg-white">
                        {paginatedPatients.map((patient) => (
                            <Link key={patient.id} href={`/patient/${patient.id}`}>
                                <div className="grid grid-cols-4 gap-4 p-3 border-t border-gray-300 cursor-pointer hover:bg-gray-100">
                                    <div>{patient.id}</div>
                                    <div>{patient.surname}</div>
                                    <div>{patient.name}</div>
                                    <div>{patient.birthdate}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="p-4 text-center text-gray-500">Нет данных для отображения</div>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Назад
                </button>
                <span className="text-sm text-gray-700">Страница {currentPage} из {totalPages}</span>
                <button
                    className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Вперед
                </button>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
                    onClick={handleSearch}
                >
                    Найти
                </button>
                <button
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                    onClick={handleClear}
                >
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default SearchPage;

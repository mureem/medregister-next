'use client';

import React from 'react';

const SearchPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-teal-600 mb-4">Поиск пациентов</h1>

            <div className="flex gap-4 mb-6">
                <div className="flex flex-col flex-grow">
                    <label className="text-sm mb-1">№ амбулаторной карты</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-sm p-2 text-sm"
                        placeholder="Введите номер"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <label className="text-sm mb-1">Фамилия</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-sm p-2 text-sm"
                        placeholder="Введите фамилию"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <label className="text-sm mb-1">Имя</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-sm p-2 text-sm"
                        placeholder="Введите имя"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <label className="text-sm mb-1">Дата рождения</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-sm p-2 text-sm"
                        placeholder="ДД-ММ-ГГГГ"
                    />
                </div>
            </div>

            {/* Grid with headers */}
            <div className="border border-gray-300 rounded-md">
                <div className="grid grid-cols-4 gap-2 bg-teal-500 text-white font-bold text-sm p-2 rounded-t-md">
                    <div>№ амбулаторной карты</div>
                    <div>Фамилия</div>
                    <div>Имя</div>
                    <div>Дата рождения</div>
                </div>
                <div className="grid grid-cols-4 gap-2 p-2">
                    <div className="border border-gray-300 rounded-sm h-16"></div>
                    <div className="border border-gray-300 rounded-sm h-16"></div>
                    <div className="border border-gray-300 rounded-sm h-16"></div>
                    <div className="border border-gray-300 rounded-sm h-16"></div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                    onClick={() => console.log('Найти')}
                >
                    Найти
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    onClick={() => console.log('Очистить')}
                >
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default SearchPage;
